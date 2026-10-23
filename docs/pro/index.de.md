# SpoolmanScale Pro

!!! note "Beta"
    SpoolmanScale Pro 2.0 ist in der Beta. Es läuft auf einem Raspberry Pi,
    den du selbst einrichtest; ein fertiges SD-Karten-Image ist geplant.

SpoolmanScale Pro macht einen Raspberry Pi zum Filament-Server deiner
SpoolmanScale. Er betreibt eine der drei Filamentverwaltungen, die die Waage
spricht, **Spoolman**, **FilaMan** oder **BamBuddy**, und schaltet über eine
Webseite zwischen ihnen um. Die Waage wird dabei mit umgestellt.

---

## Für wen

- **Du hast noch keine Filamentverwaltung** und willst keinen Server von Hand
  aufsetzen. Installieren, Backend wählen, fertig.
- **Du willst die anderen Backends ausprobieren**, ohne dein Setup
  anzufassen. Jedes behält seine eigenen Daten; ein Wechsel dauert etwa eine
  Minute.
- **Du willst alles unter einer Adresse.** Die eigene Weboberfläche der
  Waage erscheint auch auf der Seite des Pi.
- **Es muss ohne Netz gehen**, auf einer Messe oder in der Werkstatt. Der Pi
  kann ein eigenes WLAN öffnen.

---

## Was es kann

| | |
|---|---|
| Backends | Spoolman, FilaMan oder BamBuddy, eins zur Zeit, in Docker |
| Umschalten | ein Klick; die Waage folgt, die Seite zeigt jeden Schritt |
| Die Waage | wird im Netz gefunden und von der Seite aus eingerichtet: Server-Adressen, FilaMan-Registrierung, BamBuddy-Key |
| Backups | von Hand und einmal täglich, herunterladen, wiederherstellen, aus Datei |
| Updates | Backends mit ihren Release-Notes, SpoolmanScale Pro selbst, Raspberry Pi OS |
| Netzwerk | WLAN, eigener Hotspot des Pi, ein Einrichtungs-WLAN, wenn sonst nichts verbindet |
| Zugang | eine Anmeldung, die dein Passwortmanager speichern kann |

---

## Was du brauchst

- Raspberry Pi 3B oder neuer mit 64-Bit **Raspberry Pi OS Lite**
- Eine SpoolmanScale mit Firmware 0.7.0 oder neuer
- Etwa 3,5 GB frei auf der SD-Karte für alle drei Backends

Ein Backend zur Zeit passt in 1 GB RAM. Gemessen direkt nach dem ersten
Start:

| Spoolman | BamBuddy | FilaMan |
|---|---|---|
| etwa 100 MB | etwa 190 MB | etwa 370 MB |

---

## Weiter

- [Den Pi einrichten](pi-setup.md)
- [Die Weboberfläche](web-ui.md)
- Quellcode und Issues: [SpoolmanScalePro-Pi auf GitHub](https://github.com/Niko11111/SpoolmanScalePro-Pi)
