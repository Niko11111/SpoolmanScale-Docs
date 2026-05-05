# Hardware Overview

SpoolmanScale uses off-the-shelf modules combined with a custom 3D-printed enclosure.

---

## Components

- **[WT32-SC01 Plus](display.md)** — the brain: ESP32-S3 + display
- **[PN532 NFC Reader](nfc.md)** — NFC read/write
- **[NAU7802 Load Cell ADC](nau7802.md)** — precision scale
- **[3D Printed Case](case.md)** — enclosure (MakerWorld)

---

## Block Diagram

```
┌───────────────────────────────────────────┐
│           WT32-SC01 Plus                  │
│                                           │
│  ESP32-S3 ───── 480×320 Touchscreen       │
│      │                                    │
│      │ I²C (GPIO12/13)                    │
│      ├─────────────── PN532 NFC Reader    │
│      └─────────────── NAU7802 ADC         │
│                            │              │
│                        Load Cell (5 kg)   │
└───────────────────────────────────────────┘
```
