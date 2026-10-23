# The web interface

Everything on one page at **http://spoolmanscale-pro.local**, in English or
German, light or dark.

---

## Overview

The three backends as tiles: which one runs, *Activate*, *Open* its own
interface, its *Log*. Below them the scale (which backend it uses, whether
it reached it, whether it points at this Pi) and the Pi itself (RAM, SD
card, temperature, clock). A Pi has no battery clock; when its time is off,
one button takes the time from your device.

Where the Pi runs several backends at once, each tile starts and stops its
own, shows the RAM it uses, and one of them is marked as the scale's. A
card then lists the addresses the backends use to reach each other.

## Scale

The scale's own web interface, passed through by the Pi. Its settings,
tags, logs and firmware updates are all there, on the Pi's address.

## Backup

A backup per backend, by hand or once a day from a chosen hour. Download,
restore, delete, or restore from a file. Every restore saves the data it
replaces first, and puts it back if the restore fails.

## Updates

- **SpoolmanScale Pro** itself, from its GitHub releases, and back to the
  version before.
- **The backends:** each runs the version this release was tested with,
  until you pick a newer one. You see the release notes of every version in
  between. A backup is made first; if the new version does not start, the
  old one and its data come back by themselves.

## Pairing

Find the scale on the network, enter the Pi on it, register it in FilaMan,
pass on a BamBuddy key. See [Set up the Pi](pi-setup.md#4-pair-the-scale).

## Network

The Pi's name on the network, the WLAN it is in, and its own WLAN. Joining
a WLAN that does not work puts the Pi back where it was; the hotspot only
goes off while another network is there.

## System

Restart and shut down, the login, language and look, and **Raspberry Pi OS
updates**: first a search that lists every package, then the install with
its log live on the page.
