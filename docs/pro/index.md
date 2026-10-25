# SpoolmanScale Pro

!!! info "Version 0.2.0"
    A complete rewrite of the 0.1 prototype. It runs on a Raspberry Pi you
    set up yourself with one command.

SpoolmanScale Pro turns a Raspberry Pi into the filament server for your
SpoolmanScale. It runs the filament managers the scale speaks, **Spoolman**,
**FilaMan** and **BamBuddy**, one at a time or several at once, and switches
between them from a web page. The scale is switched along with it.

---

## Easy from the start, easy to keep

- **Installed with one command.** Everything after that happens in the
  browser, without a terminal.
- **Backends update with one click.** You see what changed in every
  version in between; a backup is made first, and if the new version does
  not start, the old one comes back by itself.
- **The Pi updates itself:** Raspberry Pi OS, with a list of every package
  before anything is installed, and SpoolmanScale Pro from its releases.
  It looks for updates every six hours and installs only when you click.
- **Backups happen by themselves**, every day, and can be downloaded or
  restored with a click.
- **It stays a Raspberry Pi.** Use it for other things too. Remote access
  through Tailscale installs from the page.

---

## Who it is for

- **You have no filament manager yet** and don't want to set up a server by
  hand. Install, pick a backend, done.
- **You want to try the other backends** without touching your setup. Each
  one keeps its own data; switching takes about a minute.
- **You want everything on one address.** The scale's own web interface
  shows on the Pi's page as well.
- **You don't want to look after a server.** Updates, backups and the
  scale's setup are buttons, not commands.

---

## What it does

| | |
|---|---|
| Backends | Spoolman, FilaMan and BamBuddy in Docker, one at a time or several at once, as far as the Pi allows |
| Switching | one click; the scale follows, the page shows each step |
| The scale | found on the network, set up from the page: server addresses, FilaMan registration, BamBuddy key |
| Backups | by hand and once a day, download, restore, from a file |
| Updates | backends with their release notes, SpoolmanScale Pro itself, Raspberry Pi OS; looked for every six hours, BamBuddy's daily builds on request |
| Network | WLAN from the page, the Pi's own WLAN, a fixed address, and a setup WLAN when nothing else connects |
| Remote access | Tailscale, installed and connected from the page |
| Access | a login your password manager can store |

---

## What you need

- A Raspberry Pi with 64-bit **Raspberry Pi OS Lite**
- A SpoolmanScale with firmware 0.7.0 or newer
- About 3.5 GB free on the SD card for all three backends

Which Pi does what:

| Pi | Backends | Recommended |
|---|---|---|
| Zero 2 W (512 MB) | one at a time | Spoolman; FilaMan and BamBuddy run, but slowly |
| 3B / 3B+ (1 GB) | two at once, after a warning with the numbers | any one; two small ones together |
| 4 / 5 with 2 GB or more | all three at once | everything |

The page recognises the Pi and offers what fits. RAM in use, measured:
Spoolman about 100 MB, BamBuddy 240 to 420 MB, FilaMan about 480 MB.

!!! note "BamBuddy below a Pi 4"
    Inventory, printer status, print archive and notifications run on any
    of them. BamBuddy's live camera view for X1, H2 and P2 printers and its
    timelapses need a Pi 4 or 5. Each backend's *Info* on the overview says
    what the Pi in front of you means for it.

Several at once is useful when backends work together: BamBuddy can keep
its inventory in Spoolman, and FilaMan has a plugin for BamBuddy.

---

## Next

- [Set up the Pi](pi-setup.md)
- [The web interface](web-ui.md)
- Source and issues: [SpoolmanScalePro-Pi on GitHub](https://github.com/Niko11111/SpoolmanScalePro-Pi)
