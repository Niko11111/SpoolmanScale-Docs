# SpoolmanScale Pro

!!! note "Beta"
    SpoolmanScale Pro 2.0 ist in der Beta. Es läuft auf einem Raspberry Pi,
    den du selbst einrichtest; ein fertiges SD-Karten-Image ist geplant.

SpoolmanScale Pro macht einen Raspberry Pi zum Filament-Server deiner
SpoolmanScale. Er betreibt die Filamentverwaltungen, die die Waage spricht,
**Spoolman**, **FilaMan** und **BamBuddy**, eine zur Zeit oder mehrere
gleichzeitig, und schaltet über eine Webseite zwischen ihnen um. Die Waage
wird dabei mit umgestellt.

---

## Einfach von Anfang an, einfach zu pflegen

- **Mit einem Befehl installiert.** Alles danach passiert im Browser, ohne
  Terminal.
- **Backends aktualisieren sich mit einem Klick.** Du siehst, was sich in
  jeder Version dazwischen geändert hat; vorher entsteht ein Backup, und
  startet die neue Version nicht, kommt die alte von selbst zurück.
- **Der Pi hält sich selbst aktuell:** Raspberry Pi OS, mit einer Liste
  aller Pakete, bevor etwas installiert wird, und SpoolmanScale Pro aus
  seinen Releases.
- **Backups laufen von selbst**, jeden Tag, und lassen sich mit einem Klick
  herunterladen oder wiederherstellen.
- **Es bleibt ein Raspberry Pi.** Nutze ihn auch für anderes; empfohlene
  Zusatz-Software installiert sich von der Seite aus, den Anfang macht
  Tailscale für den Fernzugriff.

---

## Für wen

- **Du hast noch keine Filamentverwaltung** und willst keinen Server von Hand
  aufsetzen. Installieren, Backend wählen, fertig.
- **Du willst die anderen Backends ausprobieren**, ohne dein Setup
  anzufassen. Jedes behält seine eigenen Daten; ein Wechsel dauert etwa eine
  Minute.
- **Du willst alles unter einer Adresse.** Die eigene Weboberfläche der
  Waage erscheint auch auf der Seite des Pi.
- **Du willst keinen Server pflegen.** Updates, Backups und die Einrichtung
  der Waage sind Knöpfe, keine Befehle.

---

## Was es kann

| | |
|---|---|
| Backends | Spoolman, FilaMan und BamBuddy in Docker, eins zur Zeit oder mehrere gleichzeitig, so weit der Pi es hergibt |
| Umschalten | ein Klick; die Waage folgt, die Seite zeigt jeden Schritt |
| Die Waage | wird im Netz gefunden und von der Seite aus eingerichtet: Server-Adressen, FilaMan-Registrierung, BamBuddy-Key |
| Backups | von Hand und einmal täglich, herunterladen, wiederherstellen, aus Datei |
| Updates | Backends mit ihren Release-Notes, SpoolmanScale Pro selbst, Raspberry Pi OS |
| Netzwerk | WLAN über die Seite, und ein Einrichtungs-WLAN, wenn sonst nichts verbindet |
| Extras | empfohlene Software mit einem Klick, den Anfang macht Tailscale für den Fernzugriff |
| Zugang | eine Anmeldung, die dein Passwortmanager speichern kann |

---

## Was du brauchst

- Ein Raspberry Pi mit 64-Bit **Raspberry Pi OS Lite**
- Eine SpoolmanScale mit Firmware 0.7.0 oder neuer
- Etwa 3,5 GB frei auf der SD-Karte für alle drei Backends

Welcher Pi was kann:

| Pi | Backends | Empfohlen |
|---|---|---|
| Zero 2 W (512 MB) | eins zur Zeit | Spoolman; FilaMan und BamBuddy laufen, aber langsam |
| 3B / 3B+ (1 GB) | zwei gleichzeitig, nach einer Warnung mit den Zahlen | jedes einzeln; zwei kleine zusammen |
| 4 / 5 ab 2 GB | alle drei gleichzeitig | alles |

Die Seite erkennt den Pi und bietet an, was passt. RAM im Betrieb,
gemessen: Spoolman etwa 100 MB, BamBuddy 190 bis 410 MB, FilaMan 370 bis
470 MB.

Mehrere gleichzeitig lohnen sich, wenn Backends zusammenarbeiten: BamBuddy
kann sein Inventar in Spoolman führen, und FilaMan hat ein Plugin für
BamBuddy.

---

## Weiter

- [Den Pi einrichten](pi-setup.md)
- [Die Weboberfläche](web-ui.md)
- Quellcode und Issues: [SpoolmanScalePro-Pi auf GitHub](https://github.com/Niko11111/SpoolmanScalePro-Pi)
