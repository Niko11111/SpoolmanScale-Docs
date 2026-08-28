# NFC tags

Which tags work, how the scale reads them, and - new in v0.7.0 - how it writes
them.

---

## How the scale identifies a tag

Everything follows from the length of the tag's UID:

| UID length | Tag type | What happens |
|---|---|---|
| 4 bytes | MIFARE Classic, including Bambu Lab's internal tags | **Bambu flow** - KDF decryption |
| 7 bytes | NTAG / MIFARE Ultralight | **NTAG flow** - UID is the link key |
| anything else | unknown | **ignored**, no action |

An unknown tag does not crash or freeze anything. The NFC indicator blinks
green, no spool appears, and removing the tag resets it.

---

## Reading

Put a spool on the pad. The scale reads the UID, looks it up at your
[backend](backends.md) and shows the spool. That is the whole interaction.

The UID is stored as plain hex (`04B9E542447080`), which is what every other
tool around Spoolman uses, so links made elsewhere are found here and the other
way round.

---

## Writing

Until v0.7.0 the scale only read tags. Now it writes them too, on its own, in
the background, **with every backend** - Spoolman included, and it needs nothing
special on the server for that.

!!! danger "Writing replaces everything on the tag"
    A write replaces the tag's contents completely. Whatever is on it now is
    lost. Bambu tags are never written.

### When it writes

**Settings → Scale → Write tag after linking**

![Tag writing options](../assets/images/ui/en/15_tagwrite.png)

| Mode | Behaviour |
|---|---|
| **Off** | Only the UID is bound to the spool, the tag is left alone. You can still write from the [web interface](web.md), where you see beforehand what goes on. |
| **Ask** | The scale asks every time. |
| **Write every time** | No question, only the result is reported. |

### Keeping the tag honest

The scale keeps an eye on things afterwards. If the tag says something different
from your inventory - the material changed, the colour, or the spool itself - it
says so and offers to put it right. Switch that off under
**Settings → Scale → Write tag after linking**.

### Formats

The format decides who can read the tag.

=== "OpenSpool"

    An NDEF record carrying material, colour, brand, temperatures and the spool
    id. This is what filament managers and OpenSpool readers understand.

    **The default, and the right answer unless you have a reason otherwise.**

=== "FilaMan"

    The same record, under the protocol name a FilaMan installation expects.

    Pick this if FilaMan is your backend and you want its own readers to pick
    the tag up.

=== "Anycubic ACE"

    No NDEF record at all, but raw pages holding SKU, brand, material, colour,
    nozzle and bed temperature, diameter, length and weight.

    The ACE reads those pages itself, so this is the format for feeding the
    printer directly rather than a filament manager.

=== "Erase"

    Puts the tag back to empty. Available from the tag page in the
    [web interface](web.md).

### From the browser

The tag page in the [web interface](web.md) gives you the most control: both
sides next to each other, what is on the tag and what would go on it, with the
differences highlighted, and the format is yours to pick.

The write itself still happens on the device - the NFC bus belongs to the scale,
so a browser request is parked and carried out on the next pass. The tag has to
be on the reader.

---

## Which tag should I buy?

!!! warning "NTAG213 is too small to write"
    An NTAG213 has 144 bytes of user memory, which is **not enough for the
    OpenSpool or FilaMan record**. It works perfectly for reading, since only
    the UID matters there, but it cannot be written.

    **If you want the scale to write your tags, buy NTAG215 or NTAG216.**

| If you want | Buy | Search for |
|---|---|---|
| Reading only | NTAG213 | *"NTAG213 NFC sticker"* |
| Reading and writing | **NTAG215** | *"NTAG215 NFC sticker"* |
| Writing, with room to spare | NTAG216 | *"NTAG216 NFC sticker"* |
| Maximum read stability | MIFARE Ultralight | *"MIFARE Ultralight NFC sticker"* |

Round 25 mm stickers are the most common and sit well on spool hubs.

---

## Compatibility

| Tag type | UID | Read | Write | Notes |
|---|---|---|---|---|
| NTAG213 | 7 bytes | yes | **no** | 144 bytes, too small for a record |
| NTAG215 | 7 bytes | yes | yes | recommended |
| NTAG216 | 7 bytes | yes | yes | more memory, slightly pricier |
| MIFARE Ultralight | 7 bytes | yes | no | most stable to read |
| MIFARE Ultralight C | 7 bytes | yes | no | works fine |
| Bambu Lab internal | 4 bytes | yes | **never** | encrypted, Bambu flow |
| MIFARE Classic 1K / 4K / Mini | 4 bytes | no | no | triggers the Bambu flow |
| MIFARE DESFire | 7 bytes | unreliable | no | not recommended |
| ISO 15693 | - | no | no | wrong protocol |

---

## Positioning - closer is not better

This is the most common cause of unreliable NTAG reads, and it is the opposite
of what most people expect: a tag pressed directly against the reader often
reads **worse** than one a few millimetres away.

The reader antenna and the tag form a loosely coupled transformer. At very close
range the coupling becomes so strong that the tag's load is reflected back onto
the reader's resonant circuit and detunes it away from 13.56 MHz. The field
collapses, and at the same time the tag's response becomes small relative to the
carrier, so the reader struggles to decode it. The result is a dead zone right
at the antenna surface, with reliable reading starting a little further out.

!!! tip "If a tag reads badly, add distance before replacing it"
    A gap of roughly **5 to 20 mm** is the sweet spot for most sticker tags. A
    few layers of foam tape or a small printed spacer under the tag is usually
    all it takes. Some users have needed as much as 20 mm.

- Do not stick the tag where it ends up flush against the reader surface.
- Larger tags tolerate closer placement than small ones - a 25 mm sticker
  behaves differently from a 15 mm one.
- Do not stick the tag onto metal or over a metal spool insert, which detunes
  the tag itself.
- The reader position is fixed by the case and a spool can only shift about
  10 mm on the weighing plate, so the distance has to come from the tag side.

**Why Bambu Lab spools rarely show this:** their tag sits recessed inside the
spool core and naturally keeps a few millimetres of distance. A sticker glued to
the outside of a third-party spool does not. That is a large part of why NTAG has
a reputation for being the less reliable of the two, when the real difference is
often just mounting.

---

## Known limitation - the location popup

NTAG tags use a more complex RF protocol than Bambu Lab's MIFARE Classic tags.
The PN532 can intermittently fail to detect an NTAG even when the spool has not
moved, briefly reading it as removed and then re-detected.

Normally this has no visible effect. **The exception is the automatic location
popup** - a spurious removal can open the location picker while the spool is
still sitting there.

!!! tip "Workaround"
    Check the positioning above first, too little distance is the more frequent
    cause. If it persists, switch off **Automatic location popup** under
    **Settings → Scale**. Nothing else is affected.

Bambu Lab spools do not show this.

---

## Identifying tags you already have

With a free NFC app such as **NFC Tools**:

1. Scan the tag
2. The app names the type, for example "NTAG215" or "MIFARE Classic 1K"
3. A UID of 7 bytes means it will read; NTAG215 or 216 means it will also write

Or just put it on the scale:

- Spool info, or "not found" → compatible
- Reading animation, then nothing → most likely MIFARE Classic
- Nothing at all → ignored, wrong UID length
