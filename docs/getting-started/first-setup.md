# First Setup

After flashing, SpoolmanScale walks you through a setup wizard on first boot.

---

## Step 1: WiFi

On first boot, the device opens a **WiFi setup screen**.

1. Tap **Scan Networks**
2. Select your network from the list
3. Enter your password using the on-screen numpad
4. Tap **Connect**

The device saves your WiFi credentials and connects automatically on every boot.

!!! note "2.4 GHz only"
    The ESP32-S3 supports **2.4 GHz WiFi only**. 5 GHz networks will not appear in the scan.

---

## Step 2: Backend

Choose your filament management backend:

=== "Spoolman"
    1. Select **Spoolman** on the backend screen
    2. Enter your Spoolman IP address (e.g. `192.168.1.100`)
    3. Port: **7912** (default)
    4. Tap **Test Connection**

=== "FilaMan"
    1. Select **FilaMan** on the backend screen
    2. Enter your FilaMan IP and port
    3. Tap **Test Connection**

!!! tip "SpoolmanScale Pro"
    If you have a SpoolmanScale Pro (with Raspberry Pi), the device can auto-detect and receive credentials from the Pi. See [SpoolmanScale Pro](../reference/pro.md).

---

## Step 3: Scale Calibration

The scale needs a known reference weight to calibrate.

1. Go to **Settings → Scale → Calibrate**
2. Tap **Tare** (with nothing on the scale)
3. Place a known weight (e.g. a full, known filament spool, or kitchen weight)
4. Enter the weight in grams
5. Tap **Calibrate**

The calibration is saved to flash (NVS) and survives reboots and firmware updates.

!!! tip "Recalibrate after relocation"
    If you move the scale significantly, recalibrate. Temperature changes can also slightly affect readings.

---

## Step 4: Tag your spools

1. Place a spool on the scale
2. Tap the **NFC tag area** (the circular window on the enclosure) with an NTAG sticker
3. The device shows **"No tag found"** — tap **Link Spool**
4. Select the spool from your Spoolman/FilaMan database
5. Tap **Write Tag** — the spool ID is written to the NFC sticker

Next time you place this spool, it's recognized instantly.

---

## You're done!

The main screen shows:

- Filament type, vendor, color swatch
- Remaining weight (from Spoolman/FilaMan)
- Live scale weight
- Difference between database and scale
- Last used / last dried dates

See [Features](../features/index.md) for everything the device can do.
