# Troubleshooting

Common problems and how to fix them.

---

## Scale

??? question "Scale shows 0 or doesn't respond"
    - Does the **LED on the NAU7802** light up? If not, check power — 5V on Pin 1, GND on Pin 2 of the WT32 I/O connector
    - Check load cell wiring (E+/E-/A+/A-)
    - If values are negative, swap A+ and A-
    - Recalibrate via **Settings → Scale → Calibration**

??? question "Scale weight is inaccurate"
    - Recalibrate with a precise reference weight (~1000 g recommended)
    - Make sure nothing touches the weighing platform during tare
    - Avoid vibrations during measurement

??? question "Scale reads correctly but Spoolman diff is wrong"
    - Check if the spool weight is set correctly in Spoolman
    - Update bag weight via **Settings → Scale → Bag Weight**

---

## NFC

??? question "NFC reader not detected on boot"
    - Does the **LED on the PN532** light up? If not, check power — 5V on Pin 1 of the WT32 I/O connector
    - Check PN532 jumpers — must be set to I²C mode
    - Verify wiring: SDA → Pin 3, SCL → Pin 4, RST → Pin 7
    - Do not connect PN532 via NAU7802 STEMMA QT passthrough (only 3.3V)

??? question "NFC tag not recognized"
    - Hold the spool steady directly over the NFC window
    - Try a different [NTAG](../hardware/nfc-tags.md) sticker — some cheap stickers have defects
    - Not sure if your tag is compatible? See the [NFC Tag Compatibility Guide](../hardware/nfc-tags.md)

---

## WiFi & Network

??? question "Device doesn't connect to WiFi"
    - SpoolmanScale supports **2.4 GHz only** — 5 GHz networks will not appear
    - Double-check password (case sensitive)
    - Move closer to the router during setup

??? question "Can't reach Spoolman from SpoolmanScale"
    - Make sure Spoolman is running and reachable from another device on your network
    - Use the IP address, not a hostname
    - Check port — default is **7912**
    - Verify both devices are on the same network

---

## Firmware

??? question "Device doesn't appear in Web Flasher"
    - Use a data-capable USB-C cable (many cables are charge-only)
    - Try a different USB port or computer
    - Use Chrome or Edge — Firefox does not support WebSerial

??? question "OTA update fails"
    - Check WiFi connection
    - Try again — the GitHub download can time out on slow connections
    - Fall back to the Web Flasher or manual file upload if OTA keeps failing

??? question "Display shows nothing after flashing"
    - Re-flash via the Web Flasher

---

## SpoolmanScale Pro (Pi)

??? question "Can't reach spoolmanscale.local"
    - On Windows: install [Bonjour Print Services](https://support.apple.com/kb/DL999)
    - Use the Pi's IP address directly as an alternative
    - Check that the Pi is powered and connected to WiFi

??? question "Backend doesn't start after reboot"
    - Check systemd service: `sudo systemctl status spoolmanscale-backend`
    - Check Docker: `docker ps`
    - Check logs: `docker logs spoolmanscale-ui`

---

!!! tip "Still stuck?"
    Join the [Discord](https://discord.gg/TQvdxGuFcq) — the community is happy to help.
