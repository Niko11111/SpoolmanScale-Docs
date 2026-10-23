# Einen Server anbinden

Diese Seite richtet sich an Entwickler. Wer die Waage nur benutzt, kann sie
überspringen: die drei eingebauten Backends stehen unter
[Backends](../use/backends.md).

SpoolmanScale spricht per HTTP mit den Servern, die der Nutzer einträgt: einem
Server im eigenen Netz, wie bei Spoolman, FilaMan und BamBuddy, oder einem
Online-Dienst über HTTPS. Was
sie sendet und was sie zurückerwartet, steht in einer öffentlichen
Spezifikation, damit ein anderes Inventarsystem oder eine Drucker-Brücke die
Waage bedienen kann, ohne dass die Firmware einen eigenen Treiber dafür
braucht:

👉 **[github.com/Niko11111/SpoolmanScale-Integration](https://github.com/Niko11111/SpoolmanScale-Integration)**

---

## Zwei Teile

| Du baust | Du setzt um | Stand |
|---|---|---|
| ein Filament-Inventar | **Teil 1: Inventar**, eine Teilmenge der Spoolman-0.27-REST-API | Version 1, Firmware 0.8.2 und neuer |
| eine Brücke, die den Drucker und sein AMS kennt | **Teil 2: AMS-Quelle**, die eigene kleine API der SpoolmanScale | Entwurf, verbindlich mit dem Firmware-Release, das sie nutzt |

Der Nutzer wählt an der Waage das Backend **Spoolman**, trägt deine Adresse
ein und, falls dein Server einen braucht, einen Schlüssel auf der Backend-Seite
des [Web-Interface](../use/web.md). Mehr ändert sich an der Waage nicht: ein
Server, der Teil 1 spricht, sieht für sie aus wie Spoolman.

---

## Deinen Server prüfen

Im Repository liegt ein Prüfskript, das die Checkliste der Spezifikation gegen
einen Server laufen lässt. Python 3.9 oder neuer, nichts zu installieren:

```bash
git clone https://github.com/Niko11111/SpoolmanScale-Integration.git
cd SpoolmanScale-Integration
python3 check/check_inventory.py http://dein-server:7912
```

Grün heißt: die Waage läuft damit. Mit `--write --spool A --spool-b B` laufen
auch die Schreibtests, auf zwei Spulen, die du entbehren kannst: Gewicht,
Lagerort und Tags werden danach zurückgesetzt, `last_used` steht danach auf
jetzt, und ein Hersteller "SpoolmanScale check" mit Filament und Spule wird
angelegt und wieder gelöscht.

---

## Partner-Server

Kompatibel reicht: Jede Waage kann deinen Server nutzen, ohne dass jemand
zustimmen muss. Wenn du mehr möchtest, bekommt ein Partner-Server einen
eigenen Eintrag auf der Waage neben Spoolman, FilaMan und BamBuddy, deine
Farben, eine Seite in diesem Handbuch, einen Test vor jedem Firmware-Release
und einen direkten Draht mit Vorrang. Was dazugehört und wie du anfängst:
**[Partner-Server](https://github.com/Niko11111/SpoolmanScale-Integration/blob/main/PARTNERS.md)** (Englisch).

---

## Die Regeln in Kürze

- `/api/v1/...` direkt ausliefern. Die Waage folgt keiner Weiterleitung und
  sendet weder Cookies noch ein CSRF-Token.
- Ein Schlüssel reist im Header (`X-API-Key`, `Authorization: Bearer` oder
  HTTP Basic) und gehört zu der Adresse, für die er eingegeben wurde. Ein
  falscher Schlüssel ist ein `401` oder `403`, die Waage meldet ihn als
  abgelehnten Schlüssel.
- IDs sind Ganzzahlen, Gewichte Zahlen, Daten ISO 8601 in UTC mit `Z`.
  Unbekannte Felder werden auf beiden Seiten ignoriert.
- Jeder Teil hat seine eigene Version. Eine brechende Änderung bekommt eine
  neue Version und einen Changelog-Eintrag, und die Waage läuft mindestens
  ein Firmware-Release lang weiter gegen die alte.

Fragen und Korrekturen: ein Issue im
[Spezifikations-Repository](https://github.com/Niko11111/SpoolmanScale-Integration/issues).
