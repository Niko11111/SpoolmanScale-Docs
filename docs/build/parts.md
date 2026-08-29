# The parts in detail

What each module does and the numbers you need when something misbehaves.

```
┌───────────────────────────────────────────┐
│           WT32-SC01 Plus                  │
│                                           │
│  ESP32-S3 ───── 480x320 Touchscreen       │
│      │                                    │
│      │ I2C  (SDA GPIO10, SCL GPIO11)      │
│      ├─────────────── PN532 NFC Reader    │
│      │                                    │
│      └─────────────── NAU7802 ADC         │
│                            │              │
│                        Load Cell          │
└───────────────────────────────────────────┘
```

---

## WT32-SC01 Plus

The brain and the display in one board.

| Property | Value |
|---|---|
| MCU | ESP32-S3 |
| Display | 3.5" IPS, 480x320, ST7796 |
| Touch | FT6336U, capacitive |
| PSRAM | Quad (QSPI) |
| External I2C | SDA `GPIO10`, SCL `GPIO11` |

Both external modules hang off the **I/O connector**, an 8 pin socket into which
the supplied 7 pin cable goes **flush to the left**. Getting that one pin wrong
leaves both modules unpowered, which the scale reports as
[Nothing on the I2C bus](../help/index.md#nothing-on-the-i2c-bus).

---

## PN532 NFC reader

Reads and, since v0.7.0, writes NFC tags.

| Property | Value |
|---|---|
| Interface | I2C |
| I2C address | `0x24` |
| Frequency | 13.56 MHz |
| Protocol | ISO 14443A |
| Pins | SDA `GPIO10`, SCL `GPIO11`, RST `GPIO14` (pin 7, brown) - see [Wiring](wiring.md) |

!!! danger "Set the DIP switches before you solder"
    The PN532 has to be in **I2C mode**: **SW1 = ON**, **SW2 = OFF**. In HSU or
    SPI mode it does not answer on the I2C bus at all. Changing the switches
    after the module is mounted is awkward, so do it first.

!!! warning "5V, and not through the NAU7802"
    The PN532 needs 5V from pin 1 of the I/O cable. The NAU7802's STEMMA QT
    passthrough only carries 3.3V - do not daisy-chain through it.

What it can and cannot read is on the [NFC tags](../use/tags.md) page.

---

## NAU7802 load cell ADC

A 24 bit ADC built for bridge sensors, which is what a load cell is.

| Property | Value |
|---|---|
| Interface | I2C |
| I2C address | `0x2A` |
| Resolution | 24 bit |
| Pins | SDA `GPIO10`, SCL `GPIO11` |

The load cell's four wires go to the screw terminals:

| Load cell wire | Terminal | Function |
|---|---|---|
| Red | `E+` | Excitation + |
| Black | `E-` | Excitation - |
| White | `A+` | Signal + |
| Green | `A-` | Signal - |

!!! tip "Numbers going down when you add weight"
    A+ and A- are swapped. See
    [Load cell reversed](../help/index.md#load-cell-reversed).

!!! warning "Third party STEMMA QT cables"
    On ready-made cables from third parties the pin order often does not match
    the WT32 cable. Check wire by wire rather than trusting colours.

---

## Load cell

A 2 kg YZC-133 beam cell is recommended; 5 kg works but is slightly less precise
at low weights. Most spools sit well inside 2 kg.

---

## Checking the bus

If something is not answering, the scale tells you which chip and why - see
[What the scale is telling you](../help/index.md). On the serial monitor at
115200 baud, the boot line `I2C_EXT scan:` lists every address that answers.
Expect `0x24` and `0x2A`.
