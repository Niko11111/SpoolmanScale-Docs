# Flashing the Firmware

SpoolmanScale firmware can be flashed three ways. The **Web Flasher** is the easiest — no software needed.

---

## Option A: Web Flasher (recommended)

The easiest way. Works in any Chrome-based browser (Chrome, Edge, Brave).

1. Connect your WT32-SC01 Plus to your PC via USB-C (data-capable cable!)
2. Open **[niko11111.github.io/SpoolmanScale](https://niko11111.github.io/SpoolmanScale)**
3. Click **Flash Latest**
4. Select the COM port of your device
5. Wait ~60 seconds — done

!!! warning "Data cable required"
    Many USB-C cables are charge-only. If your device does not appear as a COM port, try a different cable.

!!! note "Chrome required"
    The Web Flasher uses the WebSerial API. Firefox does not support this — use Chrome or Edge.

---

## Option B: OTA Update (existing devices)

If you already have SpoolmanScale v0.4.0 or later installed, you can update wirelessly:

1. Go to the **Settings → System** menu on the device
2. Tap **Check for Updates**
3. If an update is available, tap **Install**

The device downloads and installs the firmware automatically, then reboots.

See [OTA Update](../firmware/ota.md) for details.

---

## Option C: USB via PlatformIO (developers)

For developers who want to build from source:

```bash
git clone https://github.com/Niko11111/SpoolmanScale.git
cd SpoolmanScale
pio run --target upload
```

See [PlatformIO Setup](../firmware/platformio.md) for the full development setup.

---

## Troubleshooting

| Problem | Solution |
|---|---|
| Device not detected | Use a data-capable USB-C cable; try a different port |
| Flash fails halfway | Hold BOOT button on device while connecting, then flash |
| Device reboots but shows nothing | Check display connection on WT32-SC01 Plus |
| Wrong firmware / bricked | Hold BOOT + press EN to enter download mode, re-flash |

---

## Next Step

➡️ [First Setup](first-setup.md)
