# SpoolmanScale Pro

!!! note "In Arbeit"
    SpoolmanScale Pro ist in Entwicklung und noch nicht als fertiges Gerät zu
    haben. Diese Doku beschreibt den aktuellen Stand für alle, die sich selbst
    eine bauen wollen.

---

## Was ist SpoolmanScale Pro?

SpoolmanScale Pro ist eine erweiterte Variante, die einen **Raspberry Pi** ins
Gehäuse holt. Statt sich mit einem externen Spoolman- oder FilaMan-Server im Netz
zu verbinden, läuft das Backend auf dem Pi vor Ort - in sich geschlossen, ohne
weiteren Server.

**Kurz gesagt:** einstecken, läuft. Alles in einer Kiste.

---

## Für wen ist das?

**Du hast noch kein Spoolman oder FilaMan laufen** - und willst keinen eigenen
Server aufsetzen. Die Pro-Variante bringt alles mit: Waage, NFC, Anzeige und die
Filamentverwaltung in einem Gerät.

**Bei dir liegt ein alter Raspberry Pi herum** - ein Pi 3, 4 oder Zero 2W lässt
sich ins Gehäuse bauen (oder daneben betreiben) und macht aus deiner
SpoolmanScale eine Pro.

**Du willst einen vollständig lokalen Aufbau** - kein NAS, kein Heimserver,
keine Cloud. Nur das Gerät.

---

## Was dabei ist

- Alles aus der normalen SpoolmanScale (Waage, NFC, 480x320 Touchscreen)
- Ein Raspberry Pi mit **Spoolman** oder **FilaMan** - du wählst beim ersten Start
- Eingebaute Web-UI unter `http://spoolmanscale.local` für Verwaltung, Backups
  und Updates
- Tägliche Backups, Selbst-Update, WLAN-Verwaltung

---

## Backends

Bei der Ersteinrichtung wählst du zwischen:

| | Spoolman | FilaMan |
|---|---|---|
| Port | 7912 | 8002 |
| Community | Groß, etabliert | Wachsend |
| Oberfläche | Funktional | Modern |
| Mobile App | - | iOS & Android |
| Empfehlung | Für die meisten | Wenn du eine App willst |

Umschalten geht jederzeit über die Web-UI, ohne Neuinstallation.

!!! note "Die Waage selbst spricht mit dreien"
    Spoolman, FilaMan und BamBuddy - siehe [Backends](../use/backends.md). Das
    Pro-Image installiert die ersten beiden; eine BamBuddy-Instanz, die woanders
    im Netz läuft, funktioniert mit der Waage genauso.

---

## Hardware-Optionen

| Pi-Modell | Läuft | Anmerkung |
|---|---|---|
| Pi Zero 2W | ✅ | Passt ins Pro-Gehäuse, empfohlen |
| Pi 3 | ✅ | Läuft, passt evtl. nicht ins Gehäuse |
| Pi 4 / 5 | ✅ | Läuft, Parallelbetrieb möglich |

!!! note "RAM des Pi Zero 2W"
    Der Pi Zero 2W hat 512 MB RAM - genug für ein Backend zur Zeit. Ein Pi 4 und
    neuer kann beide gleichzeitig fahren.

---

## Interesse an einer fertigen Variante?

Keine Lust, selbst zu bauen? Schreib einen Kommentar auf
[MakerWorld](https://makerworld.com/de/models/2713675-spoolmanscale) oder komm in
den [Discord](https://discord.gg/xadskCrPFu) - bei genug Interesse könnte es eine
fertig aufgebaute Pro geben.
