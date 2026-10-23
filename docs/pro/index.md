# SpoolmanScale Pro

!!! note "Beta"
    SpoolmanScale Pro 2.0 is in beta. It runs on a Raspberry Pi you set up
    yourself; a ready-made SD card image is planned.

SpoolmanScale Pro turns a Raspberry Pi into the filament server for your
SpoolmanScale. It runs one of the three filament managers the scale speaks,
**Spoolman**, **FilaMan** or **BamBuddy**, and switches between them from a
web page. The scale is switched along with it.

---

## Who it is for

- **You have no filament manager yet** and don't want to set up a server by
  hand. Install, pick a backend, done.
- **You want to try the other backends** without touching your setup. Each
  one keeps its own data; switching takes about a minute.
- **You want everything on one address.** The scale's own web interface
  shows on the Pi's page as well.
- **You need it to work without a network**, at a fair or in a workshop.
  The Pi can open a WLAN of its own.

---

## What it does

| | |
|---|---|
| Backends | Spoolman, FilaMan or BamBuddy, one at a time, in Docker |
| Switching | one click; the scale follows, the page shows each step |
| The scale | found on the network, set up from the page: server addresses, FilaMan registration, BamBuddy key |
| Backups | by hand and once a day, download, restore, from a file |
| Updates | backends with their release notes, SpoolmanScale Pro itself, Raspberry Pi OS |
| Network | WLAN, the Pi's own hotspot, a setup WLAN when nothing else connects |
| Access | a login your password manager can store |

---

## What you need

- Raspberry Pi 3B or newer with 64-bit **Raspberry Pi OS Lite**
- A SpoolmanScale with firmware 0.7.0 or newer
- About 3.5 GB free on the SD card for all three backends

One backend at a time fits in 1 GB of RAM. Measured right after the first
start:

| Spoolman | BamBuddy | FilaMan |
|---|---|---|
| about 100 MB | about 190 MB | about 370 MB |

---

## Next

- [Set up the Pi](pi-setup.md)
- [The web interface](web-ui.md)
- Source and issues: [SpoolmanScalePro-Pi on GitHub](https://github.com/Niko11111/SpoolmanScalePro-Pi)
