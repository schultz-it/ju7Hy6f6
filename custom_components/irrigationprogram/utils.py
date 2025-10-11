"""Utils."""

import asyncio
import logging

from aiohttp import web

from homeassistant.components.frontend import add_extra_js_url
from homeassistant.components.lovelace.resources import ResourceStorageCollection
from homeassistant.core import HomeAssistant

from .const import CONST_START_LATENCY

_LOGGER = logging.getLogger(__name__)


def register_static_path(app: web.Application, url_path: str, path):
    """Register static path with CORS for Chromecast."""

    async def serve_file(request):
        return web.FileResponse(path)

    route = app.router.add_route("GET", url_path, serve_file)
    if "allow_all_cors" in app:
        app["allow_all_cors"](route)
    elif "allow_cors" in app:
        app["allow_cors"](route)


async def init_resource(hass: HomeAssistant, url: str, ver: str) -> bool:
    """Add extra JS module for lovelace mode YAML and new lovelace resource
    for mode GUI. It's better to add extra JS for all modes, because it has
    random url to avoid problems with the cache. But chromecast don't support
    extra JS urls and can't load custom card."""  # noqa: D205, D209

    # possible issue with lovelace not loading prior to this component
    for _ in range(CONST_START_LATENCY):
        try:
            resources: ResourceStorageCollection = hass.data["lovelace"].resources
            break
        except AttributeError:
            await asyncio.sleep(1)

    resources: ResourceStorageCollection = hass.data["lovelace"].resources
    # force load storage
    await resources.async_get_info()

    url2 = f"{url}?v={ver}"

    for item in resources.async_items():
        if not item.get("url", "").startswith(url):
            continue

        # no need to update
        if item["url"].endswith(ver):
            return False

        if isinstance(resources, ResourceStorageCollection):
            await resources.async_update_item(
                item["id"], {"res_type": "module", "url": url2}
            )
        else:
            # not the best solution, but what else can we do
            item["url"] = url2

        return True

    if isinstance(resources, ResourceStorageCollection):
        # _LOGGER.debug(f"Add new lovelace resource: {url2}")
        await resources.async_create_item({"res_type": "module", "url": url2})
    else:
        # _LOGGER.debug(f"Add extra JS module: {url2}")
        add_extra_js_url(hass, url2)

    return True


# Utilities
def bubble_sort(zones):
    """Sort an array of data."""
    # Outer loop to iterate through the list n times
    for n in range(len(zones) - 1, 0, -1):
        # Inner loop to compare adjacent elements
        for i in range(n):
            if zones[i].get("order", 0) > zones[i + 1].get("order", 0):
                # Swap elements if they are in the wrong order
                zones[i], zones[i + 1] = zones[i + 1], zones[i]
    for n, zone in enumerate(zones):
        zone["order"] = (n + 1) * 10
    return zones
