# Assembly

!!! warning "Beta build guide"
    If something is unclear or doesn't fit your hardware batch, please report it on [Discord](https://discord.gg/TQvdxGuFcq) or [MakerWorld](https://makerworld.com/de/models/2713675-spoolmanscale#profileId-3005075).

---

## 3D Printed Enclosure

Download the printable enclosure from MakerWorld:

👉 [makerworld.com/@FormFollowsF](https://makerworld.com/de/models/2713675-spoolmanscale#profileId-3005075)

All parts fit on 3 print plates (currently distributed across 4). TPU is recommended for the feet — they grip better. Otherwise self-adhesive silicone feet work just as well.

!!! note "Display fit"
    Display dimensions can vary slightly between batches. If the enclosure is too tight or too loose, please report it on Discord or leave a comment on MakerWorld.

---

## Screws & Hardware

| Screw | Qty | Use |
|---|---|---|
| M5×25 socket head | 2 | — |
| M4×15 socket head | 2 | — |
| M2.5×5 self-tapping | 9 | Main enclosure |
| M2×4.4 self-tapping | 2–4 | Small parts |

Self-tapping screws are recommended, but standard machine screws (M2.5×5, M2×4) will likely work too.

---

## Assembly Steps

### Step 1 — Flash first

Before assembling anything, flash the firmware to the bare board via the [Web Flasher](https://niko11111.github.io/SpoolmanScale). This confirms the board is working before you start wiring.

### Step 2 — Wire one component at a time

Connect components one at a time and verify each one works before moving on — much easier to debug at this stage than inside a fully assembled enclosure.

**Order:**
1. PN532 NFC reader
2. NAU7802 scale ADC + load cell

See the [Wiring Guide](wiring.md) for all connections.

### Step 3 — USB-C Panel Mount

The USB-C panel mount needs to be trimmed before installation. Using a utility knife, carefully shorten the connector housing little by little until it no longer protrudes beyond the display edge. Take your time — small cuts at a time. Once flush, it fits cleanly into the enclosure.

### Step 4 — Close up

Do a final check that all components are working, then press the display into the enclosure. It should sit snugly without screws. If you want extra security, it can be fastened from the back.

### Step 5 — Calibrate

Go to **Settings → Scale → Calibration**:

1. Tare with nothing on the scale
2. Place a known weight (~1000 g recommended — a full spool verified on a kitchen scale works well)
3. Enter the exact weight in grams and save

!!! tip "Better reference = better accuracy"
    The more precise your reference weight, the more accurate your results.

---

## Assembly Photos

![Step 5](../assets/images/assembly_5.jpeg)
![Step 6](../assets/images/assembly_6.jpeg)
![Step 7](../assets/images/assembly_7.jpeg)
![Step 8](../assets/images/assembly_8.jpeg)
![Step 9](../assets/images/assembly_9.jpeg)

---

## Next Step

➡️ [Flashing](flashing.md)
