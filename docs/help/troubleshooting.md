# Troubleshooting

Problems the scale cannot work out by itself: network, backend, tags, the Pi.

!!! tip "Check the status bar first"
    Anything wrong with the hardware, the scale diagnoses itself and says so in
    plain words. Every message it can show, with cause and fix, is under
    [What the scale is telling you](index.md).

---

## Scale

??? question "Scale shows 0 or doesn't respond"
    - Does the **LED on the NAU7802** light up? If not, check power - 5V on Pin 1, GND on Pin 2 of the WT32 I/O connector
    - Check load cell wiring (E+/E-/A+/A-)
    - If values are negative, swap A+ and A-
    - Recalibrate via **Settings → Scale → Calibration**

??? question "Scale shows an absurd number, e.g. -3487423847234 g"
    That number is not a measurement. When the I²C bus is broken, every register
    read comes back as all ones, which the firmware reads as "conversion ready"
    plus a sample of -1. Fix the bus first, the number follows.

    - Open the serial monitor at 115200 baud and look at the boot line
      `I2C_EXT scan:` - it lists every address that answers. Expected:
      `0x24 PN532, 0x2A NAU7802`
    - Repeated `[E][Wire.cpp:499] ... returned Error -1` means "no device
      acknowledged". That is a wiring fault, not an address conflict: 0x24 and
      0x2A cannot collide, and the touch controller sits on a separate bus
    - Check the solder joints **while the plug is seated**. A cold joint measures
      fine on the bench and opens under strain
    - SDA (Pin 3) and SCL (Pin 4) not swapped, GND (Pin 2) continuous

??? question "Weight is still wrong after fixing the wiring"
    A calibration taken while the bus was broken is stored in the device and
    survives the repair.

    - **Settings → Scale → Reset calibration**, then TARE and calibrate again
      with a reference weight

??? question "Scale weight is inaccurate"
    - Recalibrate with a precise reference weight (~1000 g recommended)
    - Make sure nothing touches the weighing platform during tare
    - Avoid vibrations during measurement

??? question "Scale reads correctly but Spoolman diff is wrong"
    - Check if the spool weight is set correctly in Spoolman
    - Update bag weight via **Settings → Scale → Bag weight**

---

## NFC

??? question "NFC reader not detected on boot"
    - Does the **LED on the PN532** light up? If not, check power - 5V on Pin 1 of the WT32 I/O connector
    - Check PN532 jumpers - must be set to I²C mode
    - Verify wiring: SDA → Pin 3, SCL → Pin 4, RST (PN532 RSTPDN) → Pin 7, see
      [Wiring](../build/wiring.md)
    - Do not connect PN532 via NAU7802 STEMMA QT passthrough (only 3.3V)

??? question "NFC tag not recognized"
    - Hold the spool steady directly over the NFC window
    - Try a different [NTAG](../use/tags.md) sticker - some cheap stickers have defects
    - Too close is more common than too far: 5 to 20 mm between tag and reader
      work best, see [Positioning](../use/tags.md#positioning-closer-is-not-better)
    - Not sure if your tag is compatible? See the [NFC tags](../use/tags.md)

---

## WiFi & Network

??? question "Device doesn't connect to WiFi"
    - SpoolmanScale supports **2.4 GHz only** - 5 GHz networks will not appear
    - Double-check password (case sensitive)
    - Password contains `^`, `~`, `|` or `` ` ``? Firmware before v0.7.2 cannot
      type them. Flash the current version with the web flasher, which then
      also asks for the WiFi
    - Hidden network: it does not appear in the list. Use **Set up by phone**
      and type its name, see [Step 2 - WiFi](../use/index.md#step-2-wifi)
    - Move closer to the router during setup

??? question "Can't reach the backend from the scale"
    - Make sure the backend is running and reachable from another device on
      your network
    - Use the IP address, not a hostname
    - Check the port - the usual ones are Spoolman 7912, FilaMan 8083,
      BamBuddy 8000. Without a port the request goes to port 80
    - Verify both devices are on the same network

---

## Firmware

??? question "Device doesn't appear in Web Flasher"
    - Use a data-capable USB-C cable (many cables are charge-only)
    - Try a different USB port or computer
    - Use Chrome or Edge - Firefox does not support WebSerial

??? question "OTA update fails"
    - Check WiFi connection
    - Try again - the GitHub download can time out on slow connections
    - Fall back to the Web Flasher or manual file upload if OTA keeps failing

??? question "Update is not offered, or \"no longer fits\""
    0.8.0 divides the scale's memory anew, and that only works over the cable.
    A scale still on the old layout says the update no longer fits, or the web
    upload reports that the file is larger than the storage of this scale.
    The firmware on the device is fine, only the memory layout is too small.

    - Update once over USB: open the
      [web flasher](https://niko11111.github.io/SpoolmanScale/) in Chrome or
      Edge, connect the scale and choose **Update**. It takes about 2 minutes,
      and all settings are kept
    - If the flasher offers "Install" instead, leave "Erase" unticked, or WiFi
      and calibration are gone
    - After that, updates arrive over the air as before. Details on
      [Updating the firmware](../use/updating.md)

??? question "Display shows nothing after flashing"
    - Re-flash via the Web Flasher

??? question "Sending a log / bug report"
    - Open the **Logs** page in the web interface. It needs the
      [Maintenance switch](../use/web.md#the-three-switches)
    - Set **Scope** to **Verbose**, then repeat what went wrong
    - No SD card? Set **Write the log** to **Internal**. The internal storage
      holds 4,096 lines, that is several hours at Verbose
    - **Download** the log and post it on
      [Discord](https://discord.gg/xadskCrPFu) or in a
      [GitHub issue](https://github.com/Niko11111/SpoolmanScale/issues), with
      the firmware version and the backend you use

---

!!! tip "Still stuck?"
    Join the [Discord](https://discord.gg/xadskCrPFu) - the community is happy to help.
