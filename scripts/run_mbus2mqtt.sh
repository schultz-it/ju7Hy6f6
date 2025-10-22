#!/bin/bash

# Avvia il contenitore per contatore genitori
docker run --rm --device=/dev/ttyUSB0 \
  -e MQTT_HOST="192.168.178.43:1883" \
  -e MQTT_USER="mqtt_user2" \
  -e MQTT_PASSWORD="OllinFoca4858" \
  -e DEVICE_NAME="contabilizzatore_genitori" \
  -e MBUS_REQUEST_CMD="/libmbus/bin/mbus-serial-request-data -b 2400 /dev/ttyUSB0 0" \
  mbus2mqtt-home-assistant &

# Avvia il contenitore per contatore andrea
docker run --rm --device=/dev/ttyUSB0 \
  -e MQTT_HOST="192.168.178.43:1883" \
  -e MQTT_USER="mqtt_user2" \
  -e MQTT_PASSWORD="OllinFoca4858" \
  -e DEVICE_NAME="contabilizzatore_andrea" \
  -e MBUS_REQUEST_CMD="/libmbus/bin/mbus-serial-request-data -b 2400 /dev/ttyUSB0 1" \
  mbus2mqtt-home-assistant &
  
# Attendi che entrambi siano partiti (opzionale)
sleep 5

echo "Entrambi i container avviati in background"
