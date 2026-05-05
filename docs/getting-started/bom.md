# Bill of Materials

Everything you need to build a SpoolmanScale. Links are suggestions — equivalents work fine.

---

## Core Components

| Component | Description | Where to buy |
|---|---|---|
| **WT32-SC01 Plus** | ESP32-S3 + 3.5" 480×320 IPS touchscreen | [AliExpress](https://aliexpress.com) · [Elecrow](https://elecrow.com) |
| **PN532 NFC Breakout** | NFC reader, I²C mode | AliExpress · Amazon |
| **SparkFun NAU7802** | Qwiic Scale ADC (24-bit) | [SparkFun](https://www.sparkfun.com/products/15242) · Mouser |
| **5 kg Load Cell** | Single-point, flat type | AliExpress · Amazon |

---

## Enclosure & Mounting

| Component | Notes |
|---|---|
| **3D-printed case** | Download from [MakerWorld @FormFollowsF](https://makerworld.com) |
| **M3×8 screws** | ~8 pcs for case assembly |
| **M3 heat-set inserts** | For lid/base thread |

---

## Wiring & Connectors

| Component | Notes |
|---|---|
| **JST 1.25mm 4-pin cable** | For load cell (or solder direct) |
| **Dupont cables (F-F)** | ~15 cm, for NFC + scale to WT32 |
| **Thin wire** | 0.15–0.25 mm², for soldering |

---

## Tools

| Tool | Notes |
|---|---|
| Soldering iron | Fine tip recommended |
| Multimeter | For continuity check after wiring |
| USB-C cable | Data-capable — for flashing |
| 3D printer | PLA or PETG, 0.2 mm layer height |

---

## Optional (SpoolmanScale Pro)

| Component | Notes |
|---|---|
| **Raspberry Pi Zero 2W** | For local Spoolman / FilaMan server |
| **microSD card** | 16 GB+ for Pi OS |
| **Pi Zero USB adapter** | OTG or hub for Pi access |

See [SpoolmanScale Pro](../reference/pro.md) for details.

---

!!! tip "Budget estimate"
    Core build: approx. **€35–50** depending on shipping and where you order. The WT32-SC01 Plus is the biggest cost at ~€20–25.

---

## Next Step

➡️ [Wiring Guide](wiring.md)
