# SpoolmanScale Pro

!!! note "Work in progress"
    SpoolmanScale Pro is currently in development and not yet available as a pre-built device. This documentation covers the current state for makers who want to build their own.

---

## What is SpoolmanScale Pro?

SpoolmanScale Pro is an extended version of SpoolmanScale that adds a **Raspberry Pi** to the enclosure. Instead of connecting to an external Spoolman or FilaMan server on your network, the Pi runs the backend locally - self-contained, no other server needed.

**In short:** plug it in, it works. Everything in one box.

---

## Who is this for?

**You don't have Spoolman or FilaMan running yet** - and don't want to set up a separate server. The Pro version includes everything: scale, NFC, display, and the filament management backend all in one device.

**You have an old Raspberry Pi lying around** - a Pi 3, 4 or Zero 2W can be built into the enclosure (or run alongside it) and turn your existing SpoolmanScale into a Pro.

**You want a fully local, self-contained setup** - no NAS, no home server, no cloud. Just the device.

---

## What's included

- Everything from the base SpoolmanScale (scale, NFC, 480×320 touchscreen)
- Raspberry Pi running **Spoolman** or **FilaMan** - your choice on first boot
- Built-in web UI at `http://spoolmanscale.local` for management, backups and updates
- Automatic daily backups, self-update, WiFi management

---

## Backends

On first setup you choose between:

| | Spoolman | FilaMan |
|---|---|---|
| Port | 7912 | 8002 |
| Community | Large, established | Growing |
| UI | Functional | Modern |
| Mobile app | - | iOS & Android |
| Recommendation | Most users | If you want a mobile app |

You can switch at any time from the web UI - no reinstall needed.

!!! note "The scale itself talks to three"
    Spoolman, FilaMan and BamBuddy - see [Backends](../use/backends.md). The Pro
    image installs the first two; a BamBuddy instance running elsewhere on your
    network works just as well with the scale.

---

## Hardware Options

| Pi Model | Works | Notes |
|---|---|---|
| Pi Zero 2W | ✅ | Fits Pro enclosure, recommended |
| Pi 3 | ✅ | Works, may not fit enclosure |
| Pi 4 / 5 | ✅ | Works, parallel mode supported |

!!! note "Pi Zero 2W RAM"
    The Pi Zero 2W has 512 MB RAM - enough for one backend at a time. Pi 4+ can run both simultaneously.

---

## Interested in a pre-built version?

Not ready to build it yourself? Leave a comment on [MakerWorld](https://makerworld.com/de/models/2713675-spoolmanscale) or join the [Discord](https://discord.gg/xadskCrPFu) - if there's enough interest, a pre-built Pro version may become available.

