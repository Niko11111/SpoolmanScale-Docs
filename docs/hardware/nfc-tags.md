# NFC Tag Compatibility

SpoolmanScale uses a PN532 NFC reader to identify filament spools. Choosing the right tag type is important — using the wrong tag will either trigger the wrong flow or be ignored entirely.

---

## How SpoolmanScale Identifies Tags

The PN532 reads the UID of any NFC tag placed on the reader. SpoolmanScale uses the **UID length** to decide which flow to run:

| UID Length | Tag Type | Flow triggered |
|---|---|---|
| 4 bytes | MIFARE Classic (e.g. Bambu Lab internal tags) | **Bambu flow** — KDF decryption |
| 7 bytes | NTAG / MIFARE Ultralight | **NTAG flow** — UID used as Spoolman link key |
| Any other length | Unknown | **Ignored** — no action taken |

This detection happens automatically. The firmware does not read any data from the tag — the UID length alone decides the flow.

---

## ✅ Compatible Tags

### NTAG213
- UID: 7 bytes · Memory: 144 bytes · Range: ~5 cm
- Most common NFC sticker tag. Widely available, inexpensive (~€0.10–0.30 per tag).
- SpoolmanScale only uses the UID — memory content is irrelevant.
- **Recommended for most users.**

### NTAG215
- UID: 7 bytes · Memory: 504 bytes · Range: ~5 cm
- Same format used by Nintendo Amiibo figures — very widely available.
- Slightly more memory than NTAG213, otherwise identical behavior.

### NTAG216
- UID: 7 bytes · Memory: 888 bytes · Range: ~5 cm
- Largest standard NTAG variant. More memory than needed but works perfectly.
- Slightly more expensive than NTAG213/215.

### MIFARE Ultralight (MF0ICU1 / MF0ICU2)
- UID: 7 bytes · Memory: 64–144 bytes · Range: ~5 cm
- Simpler RF protocol than NTAG — more stable reads, fewer spurious removal events.
- Less common as sticker tags but works correctly.
- **Recommended if you experience false "tag removed" events with NTAG tags.**

### MIFARE Ultralight C
- UID: 7 bytes · Memory: 192 bytes
- Adds 3DES encryption capability, but SpoolmanScale does not use it.
- Functionally identical to standard Ultralight.

---

## ❌ Tags That Will NOT Work

### MIFARE Classic 1K / 4K / Mini
- UID: **4 bytes**
- SpoolmanScale treats these as Bambu Lab tags and attempts KDF decryption — which will fail.
- **Do not use these for third-party spools.**
- *How to identify:* tag is detected but nothing appears on screen, or shows an error.

### ISO 15693
- The PN532 operates on ISO 14443A protocol only. ISO 15693 tags use a different protocol and will not be detected.

### MIFARE DESFire EV1/EV2/EV3
- UID: typically 7 bytes, but communication protocol differs.
- May or may not be detected reliably. Not recommended.

### Tags with 10-byte UID
- Neither the 4-byte nor the 7-byte branch is triggered — silently ignored.

---

## What Happens With an Unknown Tag

1. The NFC indicator turns **green** briefly (tag detected at hardware level)
2. No spool info appears — display stays in waiting state
3. After removal, everything resets

The firmware will not crash or freeze. Unknown tags are silently ignored.

---

## Known Limitation — Auto Location Popup

NTAG tags use a more complex RF protocol than Bambu Lab's MIFARE Classic tags. The PN532 may intermittently fail to detect an NTAG tag even when the spool hasn't moved, briefly interpreting it as removed and then re-detected.

Under normal operation this has no visible effect. **The one exception is the Auto Location Popup feature** — a spurious removal event can trigger the location picker even though the spool is still on the reader.

!!! tip "Workaround"
    If you experience unwanted location popups with NTAG-tagged spools, disable **Auto Location Popup** in Settings → Scale. All other functionality is unaffected.

Bambu Lab spools (MIFARE Classic) do not have this issue.

---

## Which Tag Should I Buy?

**Best value: NTAG213 sticker tags**
Search for: *"NTAG213 NFC sticker"* or *"NFC label NTAG213 13.56MHz"*

**Most stable: MIFARE Ultralight sticker tags**
Search for: *"MIFARE Ultralight NFC sticker"* or *"MF0ICU1 NFC label"*

Round sticker tags (25 mm diameter) are the most common and fit well on spool hubs.

---

## How to Identify Tags You Already Have

Use a free NFC app such as **NFC Tools** (iOS/Android):

1. Scan your tag
2. The app shows the tag type (e.g. "NTAG213", "MIFARE Classic 1K")
3. UID length: 7 characters separated by colons = 7 bytes = ✅ compatible

Or place the tag on SpoolmanScale:

- Shows spool info or "not in Spoolman" → ✅ compatible
- Reading animation, then nothing → ❌ likely MIFARE Classic
- Nothing happens at all → ❌ ignored

---

## Do I Need to Write Anything to the Tag?

No. SpoolmanScale uses only the tag's factory UID as a key. You never need to write data to the tag — the link between UID and spool is stored entirely in Spoolman's database.

---

## Summary Table

| Tag Type | UID Length | Compatible | Notes |
|---|---|---|---|
| NTAG213 | 7 bytes | ✅ Yes | Recommended |
| NTAG215 | 7 bytes | ✅ Yes | Recommended |
| NTAG216 | 7 bytes | ✅ Yes | More memory, slightly pricier |
| MIFARE Ultralight | 7 bytes | ✅ Yes | Most stable |
| MIFARE Ultralight C | 7 bytes | ✅ Yes | Works fine |
| MIFARE Classic 1K | 4 bytes | ❌ No | Triggers Bambu flow |
| MIFARE Classic 4K | 4 bytes | ❌ No | Triggers Bambu flow |
| MIFARE Mini | 4 bytes | ❌ No | Triggers Bambu flow |
| MIFARE DESFire | 7 bytes | ⚠️ Maybe | Unstable |
| ISO 15693 | — | ❌ No | Wrong protocol |
| Bambu Lab internal | 4 bytes | ✅ Yes | Bambu flow (encrypted) |

---

*Last updated: SpoolmanScale v0.5.11-beta*
