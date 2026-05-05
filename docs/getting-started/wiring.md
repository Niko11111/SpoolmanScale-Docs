# Wiring

All three modules connect to the WT32-SC01 Plus via its external I²C bus header (the 4-pin connector on the back of the board).

---

## I²C Bus (EXT Header)

The WT32-SC01 Plus exposes an external I²C bus on a 4-pin header on the back of the board. **Both** the PN532 NFC reader and the NAU7802 scale ADC connect to this single bus.

| EXT Pin | Signal | Color (recommended) |
|---|---|---|
| 1 | 3.3V | Red |
| 2 | GND | Black |
| 3 | SDA (GPIO12) | Yellow |
| 4 | SCL (GPIO13) | Green |

!!! warning "3.3V only"
    The EXT header provides **3.3V**, not 5V. Both modules operate at 3.3V. Do **not** connect a 5V supply here.

---

## PN532 NFC Reader

The PN532 must be set to **I²C mode** before wiring. Two jumpers on the back of the module select the interface.

### I²C Mode Jumper Setting

```
Jumper 1: CLOSED  (solder bridge or switch to ON)
Jumper 2: OPEN

Result: I²C mode active, I²C address 0x24
```

!!! danger "Set jumpers BEFORE soldering wires"
    Changing the mode jumpers after soldering is difficult. Set I²C mode first, then solder.

### PN532 Wiring

| PN532 Pin | Connects to | Signal |
|---|---|---|
| VCC | EXT Pin 1 | 3.3V |
| GND | EXT Pin 2 | GND |
| SDA | EXT Pin 3 | SDA (GPIO12) |
| SCL | EXT Pin 4 | SCL (GPIO13) |
| IRQ | Not connected | — |
| RST | Not connected | — |

### ASCII — PN532 to WT32-SC01 Plus

```
  PN532 NFC                        WT32-SC01 Plus (EXT Header)
  ┌──────────┐                     ┌─────────────────────────┐
  │          │                     │                         │
  │  VCC  ───┼── Red ───────────── │── Pin 1  (3.3V)         │
  │  GND  ───┼── Black ─────────── │── Pin 2  (GND)          │
  │  SDA  ───┼── Yellow ────────── │── Pin 3  (GPIO12 SDA)   │
  │  SCL  ───┼── Green ─────────── │── Pin 4  (GPIO13 SCL)   │
  │  IRQ  ───┼   (NC)              │                         │
  │  RST  ───┼   (NC)              │                         │
  └──────────┘                     └─────────────────────────┘
```

---

## NAU7802 Scale ADC

The SparkFun NAU7802 Qwiic board also connects to the same I²C bus. I²C address: **0x2A**.

### NAU7802 Wiring (to EXT Header)

| NAU7802 Pin | Connects to | Signal |
|---|---|---|
| 3V3 | EXT Pin 1 | 3.3V |
| GND | EXT Pin 2 | GND |
| SDA | EXT Pin 3 | SDA (GPIO12) |
| SCL | EXT Pin 4 | SCL (GPIO13) |
| INT | Not connected | — |

### ASCII — NAU7802 to WT32-SC01 Plus

```
  SparkFun NAU7802                 WT32-SC01 Plus (EXT Header)
  ┌───────────────────┐            ┌─────────────────────────┐
  │                   │            │                         │
  │  3V3  ────────────┼── Red ──── │── Pin 1  (3.3V)         │
  │  GND  ────────────┼── Black ── │── Pin 2  (GND)          │
  │  SDA  ────────────┼── Yellow ──│── Pin 3  (GPIO12 SDA)   │
  │  SCL  ────────────┼── Green ── │── Pin 4  (GPIO13 SCL)   │
  │  INT  ────────────┼   (NC)     │                         │
  └───────────────────┘            └─────────────────────────┘
```

---

## Load Cell

The load cell connects to the screw terminals on the NAU7802 board.

| Load Cell Wire | Color | NAU7802 Terminal |
|---|---|---|
| E+ (Excitation+) | Red | E+ |
| E- (Excitation-) | Black | E- |
| A+ (Signal+) | Green | A+ |
| A- (Signal-) | White | A- |

### ASCII — Load Cell to NAU7802

```
  Load Cell (5 kg)                SparkFun NAU7802
  ┌──────────────┐                ┌───────────────────┐
  │              │                │  Screw Terminals  │
  │  RED   (E+) ─┼── Red ──────── │── E+              │
  │  BLACK (E-) ─┼── Black ─────  │── E-              │
  │  GREEN (A+) ─┼── Green ─────  │── A+              │
  │  WHITE (A-) ─┼── White ─────  │── A-              │
  └──────────────┘                └───────────────────┘
```

!!! note "Wire color convention"
    Most 5 kg single-point load cells follow this color convention. If yours differs, check its datasheet — the key is correct E+/E- and A+/A- polarity.

---

## Full System Overview

```
  WT32-SC01 Plus
  ┌────────────────────────┐
  │                        │
  │   EXT Header (back)    │
  │   ┌──────────────┐     │
  │   │ 1: 3.3V ─────┼─────┼── PN532 VCC
  │   │              │     │── NAU7802 3V3
  │   │ 2: GND  ─────┼─────┼── PN532 GND
  │   │              │     │── NAU7802 GND
  │   │ 3: SDA  ─────┼─────┼── PN532 SDA
  │   │  (GPIO12)    │     │── NAU7802 SDA
  │   │ 4: SCL  ─────┼─────┼── PN532 SCL
  │   │  (GPIO13)    │     │── NAU7802 SCL
  │   └──────────────┘     │
  │                        │       NAU7802
  │                        │       ┌──────────────┐
  │                        │       │  E+ ─── Load Cell RED
  │                        │       │  E- ─── Load Cell BLACK
  │                        │       │  A+ ─── Load Cell GREEN
  │                        │       │  A- ─── Load Cell WHITE
  │                        │       └──────────────┘
  └────────────────────────┘
```

---

## Verification

After wiring, verify the I²C bus before closing the case:

1. Flash the firmware (see [Flashing](flashing.md))
2. Open the serial monitor at **115200 baud**
3. On boot, the firmware reports detected I²C devices

Expected output:
```
[NFC]   PN532 found at 0x24 — OK
[SCALE] NAU7802 found at 0x2A — OK
```

If a device is missing, re-check the SDA/SCL connections and confirm the PN532 jumpers are set correctly.

---

## Next Step

➡️ [Assembly](assembly.md)
