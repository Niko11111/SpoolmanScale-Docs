# Building a SpoolmanScale

This section takes you from a pile of parts to a working scale. If you already
have one, you want [Updating the firmware](../use/updating.md) instead.

---

## The five steps

| Step | What | Where |
|---|---|---|
| 1 | Buy the parts | [Bill of materials](bom.md) |
| 2 | Print the case | [Printing the case](case.md) |
| 3 | Wire it up | [Wiring](wiring.md) |
| 4 | Put it together | [Assembly](assembly.md) |
| 5 | Flash and set up | [Flashing & first setup](../use/index.md) |

---

## What you need

- A **WT32-SC01 Plus** - ESP32-S3 with a 3.5" display
- A **PN532** NFC breakout board
- A **NAU7802** scale ADC
- A **2 kg load cell** (5 kg works too)
- A 3D printer for the enclosure
- A USB-C **data** cable and a 5V supply

Exact parts, links and prices on the [bill of materials](bom.md). Reckon on
**€50 to €60** in total.

---

## How long it takes

| Phase | Time |
|---|---|
| Ordering parts | 6 to 15 days, most ship from China |
| Printing the enclosure | 4 to 6 hours |
| Wiring and assembly | about 2 hours |
| Flashing and setup | about 20 minutes |

---

## How hard it is

!!! note "Skill level"
    You need **basic soldering** - the PN532 has no connector, its wires are
    soldered directly - and enough comfort to flash an ESP32 from a browser. No
    programming: the firmware is pre-built.

!!! warning "This is a beta build guide"
    Hardware batches vary. If something is unclear or does not fit yours, report
    it on [Discord](https://discord.gg/xadskCrPFu) or on
    [MakerWorld](https://makerworld.com/de/models/2713675-spoolmanscale#profileId-3005075).
