# First Setup

After flashing, SpoolmanScale walks you through a setup wizard on first boot.

---

## Step 1: Language

Choose your language — **English** or **German**. This can be changed later in Settings.

---

## Step 2: WiFi

1. Tap **Scan Networks**
2. Select your network from the list
3. Enter your password using the on-screen numpad
4. Tap **Connect**

!!! note "2.4 GHz only"
    The ESP32-S3 supports **2.4 GHz WiFi only**. 5 GHz networks will not appear in the scan.

---

## Step 3: Spoolman

Enter your Spoolman server address:

1. Enter the IP address of your Spoolman instance (e.g. `192.168.1.100`)
2. Enter the port (default: **7912**)
3. Tap **Test Connection**

!!! note "FilaMan support — coming soon"
    FilaMan backend selection is planned for a future firmware version.

---

## Step 4: Extra Fields

SpoolmanScale uses two custom extra fields in Spoolman to store NFC tag UIDs and drying dates:

| Field | Type | Used for |
|---|---|---|
| `tag` | Text | NFC tag UID |
| `last_dried` | DateTime | Last drying date |

On first connect, SpoolmanScale checks if these fields already exist in your Spoolman instance. If they don't, you can let SpoolmanScale create them for you automatically.

!!! tip "Troubleshooting extra fields"
    If something doesn't work as expected, you can create a test field manually in Spoolman under **Settings → Extra Fields** to verify the connection is working correctly.

---

## Step 5: Scale Calibration

1. Go to **Settings → Scale → Calibration**
2. Tap **Tare** with nothing on the scale
3. Place a known weight — ideally ~1000 g (a full filament spool verified on a kitchen scale works well)
4. Enter the exact weight in grams
5. Tap **Calibrate** and save

!!! tip "Better reference = better accuracy"
    The more precise your reference weight, the more accurate your results. Recalibrate if you move the device significantly.

---

## You're done!

The main screen shows:

- Filament type, vendor, color swatch
- Remaining weight from Spoolman
- Live scale weight + difference
- Last used / last dried dates

See [Features](../features/index.md) for everything the device can do.
