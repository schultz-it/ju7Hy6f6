"""Switch entity definition."""

import asyncio
from datetime import UTC, datetime, timedelta
import logging
from zoneinfo import ZoneInfo

from homeassistant.components.persistent_notification import async_create, async_dismiss
from homeassistant.components.switch import ENTITY_ID_FORMAT, SwitchEntity
from homeassistant.const import MATCH_ALL
from homeassistant.core import Event, EventStateChangedData, HomeAssistant, callback
from homeassistant.helpers.entity import async_generate_entity_id
from homeassistant.helpers.event import (
    async_track_point_in_utc_time,
    async_track_state_change_event,
)
from homeassistant.helpers.restore_state import RestoreEntity
from homeassistant.helpers.start import async_at_started
from homeassistant.util import dt as dt_util, slugify

from . import (
    IrrigationData,
    IrrigationProgram as ProgramData,
    IrrigationZoneData as ZoneData,
    async_stop_programs,
)
from .const import (
    ATTR_DEFAULT_RUN_TIME,
    ATTR_DELAY,
    ATTR_IRRIGATION_ON,
    ATTR_PAUSE,
    ATTR_REMAINING,
    ATTR_RUN_FREQ,
    ATTR_SHOW_CONFIG,
    ATTR_START,
    CONST_OFF,
    CONST_ON,
    CONST_PENDING,
    TIME_STR_FORMAT,
)
from .pump import PumpClass

_LOGGER = logging.getLogger(__name__)


class IrrigationProgram(SwitchEntity, RestoreEntity):
    """Representation of an Irrigation program."""

    _attr_has_entity_name = True
    _attr_attribution = "Irrigation Program"
    _unrecorded_attributes = frozenset({MATCH_ALL})
    _attr_translation_key = "program"
    _attr_should_poll = False

    def __init__(
        self, hass: HomeAssistant, unique_id, device_id, runtime_data: IrrigationData
    ) -> None:
        """Initialize a Irrigation program."""
        self._attr_unique_id = unique_id
        self._hass = hass

        self._name = runtime_data.program.name
        self._program: ProgramData = runtime_data.program
        self._zones: list[ZoneData] = runtime_data.zone_data

        self.entity_id = async_generate_entity_id(
            ENTITY_ID_FORMAT, device_id, hass=hass
        )
        self._scheduled = False
        self._state = False
        self._finished = True
        self._paused = False
        self._stop = False

        self._program_remaining = 0
        self._program_default_run_time = 0

        self._unsub_point_in_time = None
        self._unsub_start = None
        self._unsub_monitor = None
        self._unsub_pause = None

        self._pumps = []
        self._run_zones = []  # list of zones to run
        self._running_zone = []  # list of currently running zones
        self._extra_attrs = {}

        self._localtimezone = ZoneInfo(self._hass.config.time_zone)

    def generate_card(self):
        """Create card config yaml."""
        modified = dt_util.parse_datetime(str(self._program.modified))
        # only generate the card if recently modified
        if dt_util.now() - modified > timedelta(seconds=30):
            return

        def add_entity(object, conditions, simple=False):
            if object:
                data = ""
                data += "- type: conditional" + chr(10)
                data += "  conditions:" + chr(10)
                for condition in conditions:
                    x = 1
                    for k, v in condition.items():
                        if x == 1:
                            data += "  - "
                            x = 2
                        else:
                            data += "    "
                        data += k + ": " + v + chr(10)
                data += "  row:" + chr(10)
                if simple:
                    data += "    type: " + "simple-entity" + chr(10)
                data += "    entity: " + object.entity_id + chr(10)

                return data
            return ""

        def add_entity_2(object, conditions, simple=False):
            if object:
                data = ""
                data += "- type: conditional" + chr(10)
                data += "  conditions:" + chr(10)
                for condition in conditions:
                    x = 1
                    for k, v in condition.items():
                        if x == 1:
                            data += "  - "
                            x = 2
                        else:
                            data += "    "
                        data += k + ": " + v + chr(10)
                data += "  row:" + chr(10)
                if simple:
                    data += "    type: " + "simple-entity" + chr(10)
                data += "    entity: " + object + chr(10)

                return data
            return ""

        card: str = "### Copy into manual card" + chr(10)
        card += "```" + chr(10)

        card += "state_color: true" + chr(10)
        card += "show_header_toggle: false" + chr(10)

        card += "type: entities" + chr(10)
        card += "entities:" + chr(10)
        card += "- type: conditional" + chr(10)
        card += "  conditions:" + chr(10)
        card += "  - entity: " + self.entity_id + chr(10)
        card += "    state: off" + chr(10)
        card += "  row:" + chr(10)
        card += "    type: buttons" + chr(10)
        card += "    entities: " + chr(10)
        card += "    - entity: " + self.entity_id + chr(10)
        card += "      show_name: true" + chr(10)
        card += "    - entity: " + self._program.config.entity_id + chr(10)
        card += "      show_name: true" + chr(10)
        card += "- type: conditional" + chr(10)
        card += "  conditions:" + chr(10)
        card += "  - entity: " + self.entity_id + chr(10)
        card += "    state: on" + chr(10)
        card += "  row:" + chr(10)
        card += "    type: buttons" + chr(10)
        card += "    entities: " + chr(10)
        card += "    - entity: " + self.entity_id + chr(10)
        card += "      show_name: true" + chr(10)
        card += "    - entity: " + self._program.config.entity_id + chr(10)
        card += "      show_name: true" + chr(10)
        card += "    - entity: " + self._program.pause.entity_id + chr(10)
        card += "      show_name: true" + chr(10)

        condition = [
            {"entity": self.entity_id, "state_not": "on"},
            {"entity": self._program.config.entity_id, "state_not": "on"},
            {"entity": self._program.enabled.entity_id, "state": "on"},
        ]
        card += add_entity(self._program.start_time, condition, True)
        card += add_entity(self._program.default_run_time, condition, True)
        condition = [
            {"entity": self.entity_id, "state_not": "on"},
            {"entity": self._program.config.entity_id, "state_not": "on"},
            {"entity": self._program.enabled.entity_id, "state_not": "on"},
        ]
        card += add_entity(self._program.enabled, condition, True)
        card += add_entity(self._program.default_run_time, condition, True)

        condition = [{"entity": self._program.config.entity_id, "state": "on"}]
        if self._program.sunrise_offset or self._program.sunset_offset:
            card += add_entity(self._program.start_time, condition, True)
            card += add_entity(self._program.default_run_time, condition, True)
        else:
            card += add_entity(self._program.start_time, condition)
            card += add_entity(self._program.default_run_time, condition)
        card += add_entity(self._program.sunrise_offset, condition)
        card += add_entity(self._program.sunset_offset, condition)

        condition = [{"entity": self.entity_id, "state": "on"}]
        card += add_entity(self._program.remaining_time, condition)

        condition = [{"entity": self._program.config.entity_id, "state": "on"}]
        card += add_entity(self._program.enabled, condition)
        card += add_entity(self._program.frequency, condition)
        card += add_entity(self._program.inter_zone_delay, condition)
        if self._program.rain_delay_on:
            card += add_entity(self._program.rain_delay, condition)
            card += add_entity(self._program.rain_delay_days, condition)

        # now process the zones
        for zone in self._zones:
            card += "- type: section" + chr(10)
            card += "  label: ''" + chr(10)
            card += "- type: conditional" + chr(10)
            card += "  conditions:" + chr(10)
            card += "  - entity: " + zone.switch.entity_id + chr(10)
            card += "    state: off" + chr(10)
            card += "  row:" + chr(10)
            card += "    type: buttons" + chr(10)
            card += "    entities: " + chr(10)
            card += "    - entity: " + zone.switch.entity_id + chr(10)
            card += "      show_name: true" + chr(10)
            card += "      show_icon: true" + chr(10)
            card += "      tap_action: " + chr(10)
            card += "        action: call-service" + chr(10)
            card += "        service: switch.toggle" + chr(10)
            card += "        service_data:" + chr(10)
            card += "          entity_id: " + zone.switch.entity_id + chr(10)
            card += "    - entity: " + zone.config.entity_id + chr(10)
            card += "      show_name: true" + chr(10)

            card += "- type: conditional" + chr(10)
            card += "  conditions:" + chr(10)
            card += "  - entity: " + zone.switch.entity_id + chr(10)
            card += "    state_not: off" + chr(10)
            card += "  row:" + chr(10)
            card += "    type: buttons" + chr(10)
            card += "    entities: " + chr(10)
            card += "    - entity: " + zone.switch.entity_id + chr(10)
            card += "      show_name: true" + chr(10)
            card += "      show_icon: true" + chr(10)
            card += "      tap_action: " + chr(10)
            card += "        action: call-service" + chr(10)
            card += "        service: switch.toggle" + chr(10)
            card += "        service_data:" + chr(10)
            card += "          entity_id: " + zone.switch.entity_id + chr(10)
            card += "    - entity: " + zone.config.entity_id + chr(10)
            card += "      show_name: true" + chr(10)
            card += "    - entity: " + zone.status.entity_id + chr(10)
            card += "      show_name: false" + chr(10)

            condition = [{"entity": zone.status.entity_id, "state": '["off"]'}]
            card += add_entity(zone.next_run, condition)

            condition = [
                {
                    "entity": zone.status.entity_id,
                    "state_not": '["off", "on", "pending", "eco"]',
                }
            ]
            card += add_entity(zone.status, condition)

            condition = [
                {"entity": zone.status.entity_id, "state": '["on","eco","pending"]'}
            ]
            card += add_entity(zone.remaining_time, condition)

            condition = [
                {
                    "entity": zone.status.entity_id,
                    "state_not": '["on", "eco", "pending"]',
                },
                {"entity": zone.config.entity_id, "state": "on"},
            ]
            card += add_entity(zone.last_ran, condition)

            condition = [{"entity": zone.config.entity_id, "state": "on"}]
            card += add_entity(zone.enabled, condition)
            card += add_entity(zone.frequency, condition)
            card += add_entity(zone.default_run_time, condition)
            card += add_entity(zone.water, condition)
            card += add_entity(zone.wait, condition)
            card += add_entity(zone.repeat, condition)
            card += add_entity_2(self._program.flow_sensor, condition)
            card += add_entity_2(zone.adjustment, condition)
            card += add_entity_2(zone.rain_sensor, condition)
            card += add_entity_2(self._program.water_source, condition)
            card += add_entity(zone.ignore_sensors, condition)

        card += "```" + chr(10)

        # create the persistent notification
        if self._program.card_yaml is True:
            async_dismiss(self.hass, "irrigation_card")
            async_create(
                self._hass,
                message=card,
                title="Irrigation Controller",
                notification_id="irrigation_card",
            )

    async def async_will_remove_from_hass(self) -> None:
        """Cancel next update."""
        if self._unsub_point_in_time:
            self._unsub_point_in_time()
            self._unsub_point_in_time = None
        if self._unsub_start:
            self._unsub_start()
            self._unsub_start = None
        # stop monitoring
        self._unsub_monitor()
        self._unsub_monitor = None
        self._unsub_pause()
        self._unsub_pause = None

        await self.async_turn_off()

    def get_next_interval(self):
        """Next time an update should occur."""
        now = datetime.now(UTC)
        timestamp = datetime.timestamp(datetime.now())
        interval = 60
        delta = interval - (timestamp % interval)
        return now + timedelta(seconds=delta)

    def format_attr(self, part_a, part_b):
        """Format attribute names."""
        return slugify(f"{part_a}_{part_b}")

    @callback
    def point_in_time_listener(self, time_date):
        """Get the latest time and check if irrigation should start."""
        self._unsub_point_in_time = async_track_point_in_utc_time(
            self._hass, self.point_in_time_listener, self.get_next_interval()
        )

        time = datetime.now(self._localtimezone).strftime(TIME_STR_FORMAT)
        string_times = self.start_time_value
        string_times = (
            string_times.replace(" ", "")
            .replace("\n", "")
            .replace("'", "")
            .replace('"', "")
            .strip("[]'")
            .split(",")
        )
        if (
            self._state is False
            and time in string_times
            and self.irrigation_on_value == "on"
        ):
            self._running_zone = []
            self._scheduled = True
            self.hass.async_create_task(self.async_turn_on())
        self.async_write_ha_state()

    async def update_next_run(self, entity=None, old_status=None, new_status=None):
        """Update the next run callback."""

        if self._program.sunrise_offset:
            sunrise = datetime.strptime(
                self._hass.states.get("sensor.sun_next_rising").state,
                "%Y-%m-%dT%H:%M:%S%z",
            )
            d = timedelta(minutes=self._program.sunrise_offset.state)
            sunrise += d
            self.hass.async_create_task(
                self._program.start_time.async_set_value(
                    sunrise.astimezone(self._localtimezone)
                    .replace(second=00, microsecond=00)
                    .time()
                )
            )
        if self._program.sunset_offset:
            sunset = datetime.strptime(
                self._hass.states.get("sensor.sun_next_setting").state,
                "%Y-%m-%dT%H:%M:%S%z",
            )
            d = timedelta(minutes=self._program.sunset_offset.state)
            sunset += d
            self.hass.async_create_task(
                self._program.start_time.async_set_value(
                    sunset.astimezone(self._localtimezone)
                    .replace(second=00, microsecond=00)
                    .time()
                )
            )

        if self._paused:
            # don't process changes to when attributes change
            return
        self._program_default_run_time = 0
        for zone in self._zones:
            await zone.switch.calc_next_run()
            zone.switch.calc_default_run_time()

        # calculate the duration of the program
        if self._program.enabled.state == CONST_OFF:
            self._program.default_run_time.set_value(0)
        else:
            self._program.default_run_time.set_value(
                await self.calculate_program_remaining(
                    self._zones, default_run_time=True
                )
            )

        self.async_schedule_update_ha_state()

    async def async_added_to_hass(self):
        """Add listener."""
        self._unsub_point_in_time = async_track_point_in_utc_time(
            self._hass, self.point_in_time_listener, self.get_next_interval()
        )

        async def hass_started(event):
            """HA has started."""
            # build the zone to pump relationships
            pumps = {}
            if self._program.pump:
                for zone in self._zones:
                    # if zone.pump is not None:
                    #     # create pump - zone list
                    if self._program.pump not in pumps:
                        pumps[self._program.pump] = [zone]
                    else:
                        pumps[self._program.pump].append(zone)
            # Build Zone Attributes to support the custom card
            self.hass.async_create_task(self.define_program_attributes())
            # set up to monitor these entities
            await self.set_up_entity_monitoring()
            # create pump class to start/stop pumps

            for pump, zones in pumps.items():
                # pass pump_switch, list of zones, off_delay
                pumpobj = PumpClass(self._hass, pump, zones, self)
                self._pumps.append(pumpobj)

            # calculate the next run
            await self.update_next_run()

        # setup the callback to kick in when HASS has started
        # listen for config_flow change and apply the updates
        self._unsub_start = async_at_started(self._hass, hass_started)

        await super().async_added_to_hass()

        # generate the entities card yaml to replicate the custom card
        if self._program.card_yaml:
            self.generate_card()

    async def set_up_entity_monitoring(self):
        """Set up to monitor these entities to change the next run data."""

        def monitor_append(object, name=None):
            if object not in monitor:
                try:
                    monitor.append(object)
                except AttributeError:
                    async_dismiss(self.hass, "irrigation_device_error1")
                    async_create(
                        self.hass,
                        message=f"Warning, configured monitor {name} item is no longer available or has been renamed",
                        title="Irrigation Controller",
                        notification_id="irrigation_device_error1",
                    )

        monitor = []

        monitor_append(self._program.start_time.entity_id, "start_time")
        if self._program.sunrise_offset:
            monitor_append(self._program.sunrise_offset.entity_id, "sunrise_offset")
        if self._program.sunset_offset:
            monitor_append(self._program.sunset_offset.entity_id, "sunset_offset")
        monitor_append(self._program.enabled.entity_id, "enabled")
        if self._program.rain_delay:
            monitor_append(self._program.rain_delay.entity_id, "rain_delay")
            monitor_append(self._program.rain_delay_days.entity_id, "rain_delay_days")
        if self._program.frequency:
            monitor_append(self._program.frequency.entity_id, "frequency")
        if self._program.inter_zone_delay:
            monitor_append(self._program.inter_zone_delay.entity_id, "inter_zone_delay")
        if self._program.water_source:
            monitor_append(self._program.water_source, "water_source")
        for zone in self._zones:
            monitor_append(zone.switch.entity_id, "zone")
            monitor_append(zone.enabled.entity_id, "enabled")
            if zone.frequency:
                monitor_append(zone.frequency.entity_id, "frequency")
            if zone.rain_sensor:
                monitor_append(zone.rain_sensor, "rain_sensor")
            if zone.ignore_sensors:
                monitor_append(zone.ignore_sensors.entity_id, "ignore_sensors")
            if zone.adjustment:
                monitor_append(zone.adjustment, "adjustment")
            if zone.water:
                monitor_append(zone.water.entity_id, "water")
            if zone.repeat:
                monitor_append(zone.repeat.entity_id, "repeat")
            if zone.wait:
                monitor_append(zone.wait.entity_id, "wait")

        self._unsub_monitor = async_track_state_change_event(
            self._hass, tuple(monitor), self.update_next_run
        )

        monitor = []

        if self._program.water_source and self._program.water_source_pause:
            monitor_append(self._program.water_source, "water_source")
        self._unsub_monitor = async_track_state_change_event(
            self._hass, tuple(monitor), self.pause_program_water_source
        )

        monitor = []
        monitor_append(self._program.pause.entity_id, "pause")
        self._unsub_pause = async_track_state_change_event(
            self._hass, tuple(monitor), self.pause_program
        )

    async def define_program_attributes(self):
        """Build attributes in run order."""

        # Program attributes
        self._extra_attrs = {}
        self._extra_attrs[ATTR_START] = self._program.start_time.entity_id
        if self._program.start_type == "sunrise":
            self._extra_attrs["sunrise"] = self._program.sunrise_offset.entity_id
        elif self._program.start_type == "sunset":
            self._extra_attrs["sunset"] = self._program.sunset_offset.entity_id
        if self._program.frequency:
            self._extra_attrs[ATTR_RUN_FREQ] = self._program.frequency.entity_id
        self._extra_attrs[ATTR_IRRIGATION_ON] = self._program.enabled.entity_id
        if self._program.inter_zone_delay:
            self._extra_attrs[ATTR_DELAY] = self._program.inter_zone_delay.entity_id
        if self._program.rain_delay:
            self._extra_attrs["enable_rain_delay"] = self._program.rain_delay.entity_id
            self._extra_attrs["rain_delay_days"] = (
                self._program.rain_delay_days.entity_id
            )
        self._extra_attrs[ATTR_REMAINING] = self._program.remaining_time.entity_id
        self._extra_attrs[ATTR_DEFAULT_RUN_TIME] = (
            self._program.default_run_time.entity_id
        )
        self._extra_attrs[ATTR_SHOW_CONFIG] = self._program.config.entity_id
        self._extra_attrs[ATTR_PAUSE] = self._program.pause.entity_id

        # zone loop to initialise the attributes
        zones = self._zones
        zones = []
        for zone in self._zones:
            try:
                zones.append(zone.switch.entity_id)
            except AttributeError:
                async_dismiss(self.hass, "irrigation_device_error2")
                async_create(
                    self.hass,
                    message=f"Warning, configured zone item {zone} is no longer available or has been renamed",
                    title="Irrigation Controller",
                    notification_id="irrigation_device_error2",
                )
        self._extra_attrs["zones"] = zones
        self.async_schedule_update_ha_state()

    async def entity_toggle_zone(self, zone) -> None:
        """Toggle a specific zone."""
        # called from the zone to ensure the program is notified
        # when the zone is stopped manually while it is running

        # built to handle a list but only one
        checkzone = None
        # index the switch to process
        for czone in self._zones:
            if czone.switch == zone.switch:
                checkzone = czone
                break

        if self._run_zones == []:
            # program is not already running
            self._running_zone = zone
            self._scheduled = False
            self._run_zones.append(checkzone)
            self.hass.async_create_task(self.async_turn_on())
        elif self._run_zones.count(checkzone) == 0:
            # program is running add the zone to the list to run
            self._run_zones.append(checkzone)
            await checkzone.switch.prepare_to_run(self._scheduled)
        else:
            # zone is running/queued turn it off
            await checkzone.switch.async_turn_off()
            if self._run_zones.count(checkzone) > 0:
                self._run_zones.remove(checkzone)
            if len(self._run_zones) == 0:
                await self.async_turn_off()

        self.async_schedule_update_ha_state()

    @property
    def inter_zone_delay(self):
        """Return interzone delay value."""
        if self.degree_of_parallel > 1:
            return 0
        if self._program.inter_zone_delay:
            return self._program.inter_zone_delay.state
        return 0

    @property
    def default_run_time(self):
        """Return the name of the variable."""
        return self._program_default_run_time

    @property
    def name(self):
        """Return the name of the variable."""
        return self._name

    @property
    def is_on(self):
        """Return true if switch is on."""
        return self._state

    @property
    def extra_state_attributes(self):
        """Return the state attributes."""
        return self._extra_attrs

    @property
    def irrigation_on_value(self):
        """Zone  entity value."""
        return self._program.enabled.state

    @property
    def interlock(self):
        """Zone  entity value."""
        return self._program.interlock

    @property
    def start_time_value(self):
        """Start time entity value."""
        value = None
        if self._program.start_time is not None:
            value = self._program.start_time.state
        return value

    @property
    def degree_of_parallel(self):
        """Start time entity value."""
        return int(self._program.parallel)

    async def build_run_script(self):
        """Build the run script based on each zones data."""
        zones = []
        for zone in self._zones:
            if self._running_zone:
                # Zone has been manually run from service call
                if zone.switch != self._running_zone.switch:
                    continue
            # auto_run where program started based on start time
            if await zone.switch.should_run(self._scheduled) is False:
                # calculate the next run
                continue

            await zone.switch.prepare_to_run(self._scheduled)
            zones.append(zone)
        return zones

    async def calculate_program_remaining(
        self, zones, izd_remaining=None, default_run_time=False
    ):
        """Calculate the remaining time for the program."""

        class Stream:
            """Container for items that keeps a running sum for parrallel zones."""

            def __init__(self) -> None:
                self.items = []
                self.sum = 0

            def append(self, item):
                self.items.append(item)
                self.sum += item

        if default_run_time:
            remaining = [int(zone.switch.default_run_time) for zone in zones]
        else:
            remaining = [int(zone.remaining_time.numeric_value) for zone in zones]
        streams = []
        # create the streams
        for _ in range(self.degree_of_parallel):
            stream = Stream()
            streams.append(stream)
        for time in remaining:
            # put the time in the stream with the lowest time
            minstream = None
            for stream in streams:
                if minstream is None:
                    minstream = stream
                if minstream.sum > stream.sum:
                    minstream = stream
            minstream.append(time)
        remaining_time = 0
        for stream in streams:
            # return the max stream time
            remaining_time = max(remaining_time, stream.sum)
        self._program_remaining = remaining_time

        if self.degree_of_parallel == 1:
            # add in the required zone transitions
            remaining_zones = len([item for item in stream.items if item > 0])
            if len([item for item in stream.items if item > 0]) > 1:
                self._program_remaining += int(self.inter_zone_delay) * (
                    remaining_zones - 1
                )

            # If there is an active izd add it to the total
            if izd_remaining:
                self._program_remaining += int(izd_remaining)

        return self._program_remaining

    async def pause_program_water_source(
        self,
        event: Event[EventStateChangedData],
    ):
        """Program paused status changes."""
        if event.data["new_state"].state == CONST_ON and self.state == CONST_ON:
            await self._program.pause.async_turn_off()

        if event.data["new_state"].state == CONST_OFF and self.state == CONST_ON:
            await self._program.pause.async_turn_on()

    async def pause_program(
        self,
        event: Event[EventStateChangedData],
    ):
        """Program paused status changes."""
        if self._program.pause.is_on:
            self._paused = True

        for zone in self._zones:
            await zone.switch.toggle_pause()
        await asyncio.sleep(1)

        if not self._program.pause.is_on:
            self._paused = False

        if self._state is False:
            await self._program.pause.async_turn_off()

    async def run_monitor_zones(self, running_zones, all_zones):
        """Monitor zones to start based on inter zone delay."""
        if self._stop is True:
            # break out if program terminated
            self._program_remaining = 0
            await self._program.remaining_time.set_value(0)
            await asyncio.sleep(1)
            return running_zones

        if self._paused:
            await asyncio.sleep(1)
            return running_zones
        await asyncio.sleep(1)

        if len(running_zones) < self.degree_of_parallel:
            # add another zone as required
            pend = (x for x in all_zones if x.status.state == CONST_PENDING)
            remaining_zones = list(pend)
            for zone in remaining_zones:
                # start the next zone
                await self.zone_turn_on(zone.switch, len(remaining_zones) == 1)
                running_zones.append(zone.switch)
                break

        rzones = running_zones

        for running_zone in rzones:
            # add another zone as required
            if self._state is False:
                # break out if program terminated
                break

            if (
                self.inter_zone_delay <= 0
                and running_zone.remaining_time.numeric_value
                <= abs(self.inter_zone_delay)
            ):
                running_zones.remove(running_zone)

                # start the next zone if there is one
                pend = (x for x in all_zones if x.status.state == CONST_PENDING)
                remaining_zones = list(pend)
                for zone in remaining_zones:
                    # start the next zone
                    await self.zone_turn_on(zone.switch, len(remaining_zones) == 1)
                    running_zones.append(zone.switch)
                    break

            if (
                running_zone.remaining_time.numeric_value <= 0
                and running_zones.count(running_zone) > 0
            ):
                running_zones.remove(running_zone)

            if (
                self.inter_zone_delay > 0
                and running_zone.remaining_time.numeric_value <= 0
            ):
                # there is a + IZD and there is a zone to follow
                pend = (x for x in all_zones if x.status.state == CONST_PENDING)
                remaining_zones = list(pend)
                if len(remaining_zones) > 0:
                    # Delay before next zone
                    for izd in range(int(self.inter_zone_delay), 0, -1):
                        await asyncio.sleep(1)
                        remaining_time = await self.calculate_program_remaining(
                            all_zones, izd
                        )
                        await self._program.remaining_time.set_value(remaining_time)
                        if self.state == CONST_OFF:
                            break
                # Interzone delay is complete
                for zone in remaining_zones:
                    # get the next pending zone and run it
                    await self.zone_turn_on(zone.switch, len(remaining_zones) == 1)
                    running_zones.append(zone.switch)
                    break

        remaining_time = await self.calculate_program_remaining(all_zones)
        await self._program.remaining_time.set_value(remaining_time)
        return running_zones

    async def zone_turn_on(self, zone, last=None):
        """Turn on the irrigation zone."""

        await zone.set_scheduled(self._scheduled)
        # run in the event loop to support independant executions
        self.hass.async_create_task(zone.async_turn_on_from_program(last))
        return True

    async def async_turn_on(self, **kwargs):
        """Turn on the switch."""

        if self._program.enabled.state == CONST_OFF and self._scheduled is True:
            return
        self._stop = False
        if self._state is True:
            # program is already running
            return
        if self._finished is False:
            # program is not finalised from previous run
            return

        self._run_zones = await self.build_run_script()

        if len(self._run_zones) > 0:
            # raise event when the program starts
            event_data = {
                "action": "program_turned_on",
                "device_id": self.entity_id,
                "scheduled": self._scheduled,
                "program": self.name,
            }
            self._hass.bus.async_fire("irrigation_event", event_data)
        else:
            # No zones to run
            return

        self._state = True
        self._finished = False
        self.async_schedule_update_ha_state()

        # stop all running programs except the calling program
        if self._program.interlock:
            await async_stop_programs(self._hass, self)
            if self._pumps:
                await asyncio.sleep(1)

        # calculate the remaining time for the program
        # Monitor and start the zone with lead/lag time
        running_zones = []
        running_zones = await self.run_monitor_zones(running_zones, self._run_zones)

        while self._program_remaining > 0:
            running_zones = await self.run_monitor_zones(running_zones, self._run_zones)

        event_data = {
            "action": "program_turned_off",
            "device_id": self.entity_id,
            "program": self.name,
        }
        self._hass.bus.async_fire("irrigation_event", event_data)
        await self.async_turn_off()

    async def async_turn_off(self, **kwargs):
        """Stop the switch/program."""
        self._stop = True
        if self._pumps:
            event_data = {
                "action": "turn_off_pump_all",
                "program": self.entity_id,
            }
            self.hass.bus.async_fire("irrigation_event", event_data)
            await asyncio.sleep(3)

        await self._program.pause.async_turn_off()
        # if self._state is True:
        self._scheduled = False
        self._running_zone = []
        self._run_zones = []
        self._program_remaining = 0
        for zone in self._zones:
            await zone.switch.async_turn_off()
            await asyncio.sleep(0)
        self._state = False
        self._finished = True

        self.async_schedule_update_ha_state()
