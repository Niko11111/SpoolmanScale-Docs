# Spools, tags and printers

Which spools, tags and printers work with SpoolmanScale, and what we know about
the rest. Status of 30 October 2026: firmware 0.8.3 (public) and 0.8.4 (beta).

!!! info "How to read this page"
    Three questions get mixed up all the time:

    1. **What is on the tag?** A format, open or encrypted.
    2. **Which printer reads it itself?** Many do, each in its own format.
    3. **How does the spool get into your inventory?** That is the part the
       scale does.

    The scale needs a [backend](backends.md) (Spoolman, FilaMan or BamBuddy) for
    all of this. **Unknown** means we have not found reliable information yet,
    not that it is impossible.

---

## What we work on, in this order

No dates and no promises. Many formats below we cannot test ourselves, so help
from people who own the spools is very welcome.

1. **Read** what is on the tag: brand, material, colour, weight, temperatures,
   a product ID.
2. **Find or create** the spool from that. If it is in your inventory, two
   taps. If not, the scale creates filament and spool in all three backends,
   the way it already does for Bambu Lab tags.
3. **Write, and tell the printer** which spool is loaded.

---

## Tags and spools

Reading needs a tag with an ISO 14443 A chip (NTAG, MIFARE). The scale's reader
cannot read ISO 15693, see OpenPrintTag.

| Format | Chip | Open? | Read | Find or create | Notes |
|---|---|---|---|---|---|
| **Bambu Lab** | MIFARE Classic | encrypted, keys derivable from the UID | **Works** | **Works**, all backends | never written |
| **Any NTAG sticker** | NTAG 213/215/216 | n/a | **Works** | link by UID **works** | recommended: NTAG215 |
| **OpenSpool** | NTAG 215/216, JSON | open | **Works** | linking **works**, creating **planned** | no product ID on the tag |
| **FilaMan** | NTAG | open | **Works** | linking **works**, creating **planned** | |
| **Anycubic ACE** | NTAG | no official document known to us | **Works** | write only | |
| **Snapmaker** | MIFARE Classic | no official document known to us | **Works** (switch in the web settings) | **Planned** | keys and layout: partly unknown |
| **Creality CFS** | MIFARE Classic | encrypted, not officially published | **In development** (0.8.4) | **In development** | not tested on enough hardware yet |
| **TigerTag** | NTAG21x | open, not encrypted (optional signature) | link by UID **works**, content **Planned** | **Planned** | catalogue tags carry a product ID: the best case for matching |
| **OpenTag3D** | NTAG 215/216 | open | **Planned** | **Planned** | used by several smaller filament brands and tools |
| **Elegoo (Canvas)** | NTAG | no official document known to us | **Planned** | **Planned** | needs testers |
| **Qidi (Qidi Box)** | MIFARE Classic | no official document known to us | **Planned**, reading first | **Planned** | keys and layout: unknown to us |
| **Prusa OpenPrintTag** | ISO 15693 | open | **Not possible today** | **Not possible today** | needs a different reader, see [OpenPrintTag](#openprinttag) |
| Flashforge | | | **Unknown** | | |
| Sunlu, eSun | TigerTag on some spools | | see TigerTag | | other tags: unknown |
| Polymaker, Overture, Jayo | | | **Unknown** | | |
| Sovol, Kingroon | | | **Unknown** | | |
| Paramount, Fillamentum, 3DJake, Extrudr | | | **Unknown** | | |

### Why other MIFARE tags take longer

Any MIFARE Classic tag is tried as a Bambu Lab tag first, because most of our
users have Bambu spools. A tag that is not Bambu only shows up after the scale
gave up on that: **3 to 5 seconds** for a spool your backend already knows,
**about ten seconds** for an unknown one. That is on us, not on the tag.

Two things are coming to make this faster:

- **A memory for known tags.** The scale remembers which kind of tag a UID was
  the last time, so the same spool is found at once on the second scan. In
  development for 0.8.4: it starts with Bambu, Creality, Snapmaker and blank
  tags. Remembering more UIDs is **Planned**.
- **Your preferred spool type.** Once the scale knows more spool types, you
  choose which one is tried first. **Planned.**

### What "find or create" will use

Whatever the tag offers, the scale matches in this order:

1. a **product ID or barcode** (TigerTag catalogue tags carry one, OpenTag3D a
   SKU and a barcode)
2. **brand, material and colour**, with diameter and weight as extra checks

An OpenSpool tag or a plain NTAG has no product ID, so there the match is brand,
material and colour only. Where nothing matches, the scale offers **Create**.

---

## OpenPrintTag

We like OpenPrintTag and want to support it in the long run. Today it does not
work: the tags use a different radio standard (ISO 15693) than the reader in the
scale (ISO 14443 A), and no software update can change that.

What we are waiting for is a successor reader that fits into the case and meets
our criteria: two-wire connection, a detachable antenna, good availability and a
fair price (see [Hardware choices](../help/hardware.md#next-board)).
We have not found one yet.

OpenPrintTag is also still young. Prusa has put it on every new Prusament spool
since October 2025, and other brands are only starting to adopt it. The standard
is still being developed. Please be patient: when a suitable reader is within
reach, OpenPrintTag is the first thing we look at.

---

## Printers

Most printers read the tags of their own system. To tell a printer which spool
is loaded, the scale needs a way in from outside.

| Printer or system | Reads tags itself | A way to tell it the loaded spool | In SpoolmanScale |
|---|---|---|---|
| **Bambu Lab** (AMS) | its own encrypted tags | MQTT, needs LAN mode and Developer Mode (Bambu gives no customer support for this mode) | [AMS view](ams.md) with BamBuddy or FilaMan **works** |
| **Klipper with Moonraker** (Voron, Sovol, Kingroon and others) | no built-in reader | yes, an HTTP call to Moonraker | **Planned**, needs Spoolman |
| **Happy Hare** | no | yes, a G-code command | **Planned**, later |
| **AFC / BoxTurtle** | no | yes, a G-code command | **Planned**, needs Spoolman |
| **Creality K2 with CFS** | CFS tags | **Unknown** | read and create **In development** |
| **Snapmaker U1** | its own tags, others need community firmware (community reports, not Snapmaker) | **Unknown** | reading **Works** |
| **Qidi (Qidi Box)** | Qidi tags | **Unknown** | **Planned** |
| **Elegoo (Canvas)** | Elegoo tags | **Unknown** | **Planned** |
| **Anycubic (ACE Pro)** | ACE tags | **Unknown**, we found no documented way | writing **Works** |
| **Prusa Core One** | OpenPrintTag, with a reader add-on | no way from outside found | **Not possible today**, see [OpenPrintTag](#openprinttag) |
| Prusa XL, MK4S, MK3.9, MINI | **Unknown** (Prusa's OpenPrintTag help page lists the MK4 and MK3.9 families, but not how they read tags) | **Unknown** | |
| Flashforge | **Unknown** | **Unknown** | |
| OctoPrint | no | through a plugin, details **Unknown** | |

Printing labels is a different topic: see [Label printers](printers.md).

---

## Help us fill the gaps

Everything marked **Unknown** is open. If you own one of these spools or
printers, a photo of the tag, a dump from an NFC app or the printer's API page
helps a lot. Tell us on [Discord](https://discord.gg/K3KmKnrWhP) or on
[GitHub](https://github.com/Niko11111/SpoolmanScale/issues).
