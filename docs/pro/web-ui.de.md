# Die Weboberfläche

Alles auf einer Seite unter **http://spoolmanscale-pro.local**, auf Deutsch
oder Englisch, hell oder dunkel.

---

## Übersicht

Die drei Backends als Kacheln: welches läuft, *Aktivieren*, die eigene
Oberfläche *Öffnen*, das *Log*. Darunter die Waage (welches Backend sie
nutzt, ob sie es erreicht, ob sie auf diesen Pi zeigt) und der Pi selbst
(RAM, SD-Karte, Temperatur, Uhrzeit). Ein Pi hat keine Uhr mit Batterie;
geht seine Zeit falsch, übernimmt ein Knopf die Zeit deines Geräts.

Betreibt der Pi mehrere Backends gleichzeitig, startet und stoppt jede
Kachel ihr eigenes, zeigt seinen RAM-Verbrauch, und eines ist als das der
Waage markiert. Eine Karte nennt dann die Adressen, über die sich die
Backends gegenseitig erreichen.

## Waage

Die eigene Weboberfläche der Waage, vom Pi durchgereicht. Ihre
Einstellungen, Tags, Logs und Firmware-Updates sind alle da, unter der
Adresse des Pi.

## Backup

Ein Backup je Backend, von Hand oder einmal täglich ab einer gewählten
Stunde. Herunterladen, wiederherstellen, löschen, oder aus einer Datei
wiederherstellen. Jede Wiederherstellung sichert vorher die Daten, die sie
ersetzt, und spielt sie zurück, wenn sie scheitert.

## Updates

- **SpoolmanScale Pro** selbst, aus seinen GitHub-Releases, und zurück zur
  vorherigen Version.
- **Die Backends:** Jedes läuft in der Version, mit der dieses Release
  getestet wurde, bis du eine neuere wählst. Du siehst die Release-Notes
  aller Versionen dazwischen. Vorher entsteht ein Backup; startet die neue
  Version nicht, kommen alte Version und Daten von selbst zurück.

## Kopplung

Die Waage im Netz finden, den Pi an ihr eintragen, sie in FilaMan
registrieren, einen BamBuddy-Key weitergeben. Siehe
[Den Pi einrichten](pi-setup.md#4-waage-koppeln).

## Netzwerk

Der Name des Pi im Netz, das WLAN, in dem er ist, und sein eigenes WLAN.
Klappt ein neues WLAN nicht, geht der Pi zurück, wo er war; der Hotspot geht
nur aus, solange ein anderes Netz da ist.

## System

Neu starten und herunterfahren, die Anmeldung, Sprache und Aussehen, und
**Raspberry-Pi-OS-Updates**: erst eine Suche, die jedes Paket auflistet,
dann die Installation mit ihrem Log live auf der Seite.
