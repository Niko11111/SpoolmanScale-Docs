# PN532 NFC Reader

The PN532 is an NFC/RFID reader/writer module connected to the WT32-SC01 Plus via I²C.

---

## Role in SpoolmanScale

The PN532 detects NFC tags placed on the reader surface and reads their UID. SpoolmanScale uses this UID to identify spools in Spoolman — no data is written to the tag.

Two tag flows are supported:

- **Bambu Lab spools** — MIFARE Classic tags with encrypted data (4-byte UID)
- **Third-party spools** — [NTAG](nfc-tags.md) / MIFARE Ultralight sticker tags (7-byte UID)

---

## Specifications

| Property | Value |
|---|---|
| Module | PN532 breakout board |
| Interface | I²C |
| I²C Address | 0x24 |
| Frequency | 13.56 MHz |
| Protocol | ISO 14443A |
| WT32 Pins | SDA → GPIO10, SCL → GPIO11, RST → GPIO12 |

---

## I²C Mode Setup

The PN532 must be set to **I²C mode** before wiring. Two jumpers on the back of the module select the interface.

```
Jumper 1: CLOSED
Jumper 2: OPEN

→ I²C mode active
```

!!! danger "Set jumpers BEFORE soldering"
    Changing the mode jumpers after soldering is difficult. Set I²C mode first.

---

## Compatible Tags

Not all NFC tags work with SpoolmanScale. See the full **[NFC Tag Compatibility Guide](nfc-tags.md)** for:

- Which tags to buy
- Which tags will NOT work and why
- How to identify tags you already have

**Short answer:** Any [NTAG213](nfc-tags.md), [NTAG215](nfc-tags.md), [NTAG216](nfc-tags.md) or MIFARE Ultralight sticker tag works. MIFARE Classic does not.

---

## Wiring

See the [Wiring Guide](../getting-started/wiring.md#pn532-nfc-reader) for the full pinout and assembly instructions.
