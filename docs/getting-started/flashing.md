# Flashing the Firmware

---

## First-time Flash — Web Flasher

The Web Flasher is required for the very first flash. It works in any Chrome-based browser (Chrome, Edge, Brave) — no software installation needed.

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

## Firmware Updates — OTA (existing devices)

Once SpoolmanScale is running, all future updates happen directly on the device — no PC or cable needed.


**Manual update:**

1. Go to **Settings → System → Firmware → Update via GitHub**
2. Tap **Check for Updates**
3. If an update is available, tap **Install**

The device downloads and installs the firmware automatically, then reboots.

**Manual file upload:**

If OTA fails or you want to install a specific version:

1. Download the `.bin` file from [GitHub Releases](https://github.com/Niko11111/SpoolmanScale/releases)
2. Go to **Settings → System → Firmware → Upload via web browser**
3. Select the file from any browser — PC or smartphone

---

## Troubleshooting

| Problem | Solution |
|---|---|
| Device not detected | Use a data-capable USB-C cable; try a different port |
| Flash fails halfway | Hold BOOT button on device while connecting, then flash |
| Device reboots but shows nothing | Check display connection on WT32-SC01 Plus |

---

## Next Step

➡️ [First Setup](first-setup.md)
