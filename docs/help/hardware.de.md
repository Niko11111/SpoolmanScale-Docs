# Hardware-Entscheidungen

Warum die Waage so gebaut ist, warum nicht ein anderes Display oder Board und wohin
die Hardware gehen könnte. Nichts davon ist zugesagt, und es gibt keine Termine.
Stand 27. Oktober 2026.

Jeder Abschnitt hat einen eigenen Link, damit du genau auf die Frage verweisen
kannst, die gestellt wurde.

**Du willst ein Board oder ein anderes Teil vorschlagen?** Danke, dass du
mitdenkst. Prüf es bitte zuerst gegen [was das nächste Board können muss](#next-board).
Das spart uns beiden Zeit.

---

## Warum dieses Display { #display }

Ich habe die WT32-SC01 Plus ganz am Anfang des Projekts gewählt, weil andere sie
für ähnliche Bauprojekte genutzt hatten. Das hat sich als gute Entscheidung
erwiesen: ein kleines, aufgeräumtes Gerät, ungefähr so breit wie eine Spule, das
neben den Druckern wenig Platz braucht. Und am Ende ist es eine Waage, die schnell
Filament messen soll, kein Dashboard.

## Gibt es ein größeres Display? { #bigger-display }

Größer ist hier nicht automatisch besser, und ein größerer Bildschirm ist mehr als
nur ein Display. Jedes Layout der Firmware ist für 480x320 Pixel gebaut, ein 5"-
oder 7"-Panel braucht ein anderes Board dahinter, und das Gehäuse müsste neu
entworfen werden. Größere Panels sprechen außerdem ein anderes Protokoll, das viel
mehr Pins belegt, und daran scheitern die meisten Boards.

Ich plane deshalb nicht, viele Displaygrößen zu unterstützen. Käme ein Board, das
[die Punkte unten](#next-board) erfüllt, wäre 5" eine Größe, die ich vertreten
könnte. 7" passt nicht zu diesem Projekt.

Du kannst die Open-Source-Firmware gern selbst an ein anderes Display anpassen.

## Warum sich die UI nicht einfach skalieren lässt { #ui-resolution }

Ein Smartphone skaliert seine Bildschirme von selbst. Diese Waage kann das nicht.
Der Prozessor ist klein und hat wenig Speicher, und die UI muss damit auskommen:
Allein das Bild des Bildschirms hat 480 x 320 Pixel, etwa 300 KB, ein Panel mit
800 x 480 braucht für dasselbe etwa 770 KB. Deshalb ist jedes Layout genau für
diesen Bildschirm gebaut.

Dieselbe UI auf einem größeren Display zu zeigen, geht so:

- Die neue Auflösung muss ein **ganzzahliges Vielfaches** von 480 x 320 sein (zum
  Beispiel 960 x 640), mit derselben 3:2-Form. Sonst wird das Bild gestreckt, oder
  es hat schwarze Ränder, und die will keiner.
- Eine aufgeblasene UI ist nur der erste Schritt. Sie wirkt grob und verschenkt
  Platz. Um ein größeres Display gut zu nutzen, müssten auch die Layouts geändert
  werden, und dann müssen die kleine und die große Version bei jedem neuen Feature
  beide gepflegt werden. Das ist viel Arbeit für etwas, das eine Waage nicht
  braucht.

## Was das nächste Board können muss { #next-board }

- RS485 an einem Stecker oder I/O-Port, dazu ein freier I2C-Bus und Pins für UART
- die USB-C-Buchse nicht ganz am Rand des Boards, damit ein Kabel in der jetzigen
  Einbaulage ins Gehäuse kommt
- eine bündige Glasfront ohne Rahmen oder Kante
- mehr Leistung als der ESP32-S3, mit WLAN und Bluetooth auf dem Board
- bei mehreren Shops erhältlich und nicht von einem kleinen Hersteller, der
  monatelang nichts liefern kann, zu einem fairen Preis
- weit verbreitete Bibliotheken mit viel Erfahrung in der Community

**Erwünscht, aber kein Ausschlusskriterium:**

- **Ein Akku-Anschluss mit Ladeschaltung auf dem Board.** Das ist mehr als ein
  Nice-to-have. Mehrere Nutzer haben aus dem Projekt Handscanner gebaut, und die
  laufen am liebsten mit Akku. Ein Board, das Anschluss, Spannungswandler und
  Ladeelektronik schon hat, spart für jedes davon eine eigene Platine. Es ist kein
  Muss: Ein richtig gutes Board ohne diese Funktion würde trotzdem gewinnen.
- **Der Interrupt des NFC-Readers auf einem Pin, der die Waage aus dem Deep Sleep
  wecken kann**, damit das Auflegen einer Spule sie aufweckt.
- **Ein eigener Stromeingang.** Liegt die USB-C-Buchse ungünstig, kann man mit einem
  zweiten Weg zur Stromversorgung von USB-C nur die Spannung abgreifen und sie
  woanders einspeisen. Zum Flashen müsste man das Board dann aus dem Gehäuse
  nehmen. Das ist ein Kompromiss, mit dem wir leben könnten, weil Updates per WLAN
  laufen und das Kabel nur für das erste Flashen oder eine Wiederherstellung nötig
  ist.

Ein Board, das alles erfüllt, habe ich noch nicht gefunden. Ideen und Board-Tipps
gern auf [Discord](https://discord.gg/K3KmKnrWhP).

## Boards, die wir uns angesehen haben { #boards }

| Board | Warum (noch) nicht |
|---|---|
| Waveshare ESP32-S3-Touch-LCD-3.5 | Gleicher Chip und dasselbe 480x320-Panel. Was es zusätzlich bietet (Akku-Anschluss, mehr PSRAM), wiegt den Aufwand für Test und Pflege eines zweiten Boards nicht auf. |
| Waveshare ESP32-S3-Touch-LCD-5B (1024x600) | Kein GPIO frei. Die einzige I2C-Klemme teilt den Bus mit einem I/O-Baustein, dessen Adressen mit denen des NFC-Readers kollidieren. Die UI lässt sich nicht sauber auf diese Größe skalieren. |
| Waveshare ESP32-P4-Touch-Boards (3,5", 4,3") | Die USB-C-Buchse sitzt ganz am Rand, ein Kabel passt nicht ins Gehäuse. |
| Guition JC3248W535 (480x320) | Gleicher Chip und gleiche Größe, aber der Display-Controller aktualisiert nur den ganzen Bildschirm, und der Touch meldet Phantom-Berührungen. Als offizielles Board nicht geeignet. Ein Community-Port ist denkbar. |
| 7"-Boards | Zu groß für dieses Projekt, siehe [Gibt es ein größeres Display?](#bigger-display) |

Auf einen neueren Chip, den ESP32-S31, warten wir. Boards damit gibt es noch wenige,
und die Arduino-Unterstützung ist unfertig.

## Der NFC-Reader { #nfc-reader }

Der heutige Reader ist leicht erhältlich und gut dokumentiert, kann aber keine
ISO-15693-Tags wie [OpenPrintTag](../use/compatibility.md#openprinttag) lesen. Ein
Nachfolger braucht ISO 15693 und sollte per I2C oder einem anderen Bus mit zwei
Leitungen angeschlossen sein, weil die übrigen Pins anderweitig gebraucht werden.

**Versorgung und Spannung.** Die Reader-Platine sollte mit 5 V auskommen und die
Logik selbst auf 3,3 V herunterwandeln, damit kein zusätzlicher Spannungswandler
nötig ist. Viele können das nicht. Laufen die Datenleitungen eines Boards mit 5 V,
schicken sie 5 V in die Pins des ESP32, der für 3,3 V gebaut ist und davon kaputtgehen
kann. Dann braucht das Board eine eigene 3,3-V-Versorgung oder einen Pegelwandler.
Bitte prüf das, bevor du einen Reader vorschlägst: Es ist eines der ersten
Dinge, die einen Kandidaten ausschließen.

Besonders interessant ist ein Reader mit **absetzbarer Antenne**: Die Platine könnte
unten im Gehäuse sitzen, der Teil, der herausschaut, würde kleiner und flacher, und
man könnte ihn leicht versetzen oder für Spulen mit dem Tag an anderen Stellen
tauschen. Die Kandidaten, die wir kennen, sind noch schwer zu bekommen und kosten
ein Mehrfaches des heutigen Readers.

## Welcher Wandler: NAU7802 oder HX711 { #adc }

Der Wandler liest das winzige Signal der Wägezelle. Die Waage nutzt den
**NAU7802**. Die meisten Zellen werden mit dem billigeren **HX711** geliefert, und
wir planen, ihn in einer kommenden Firmware zu unterstützen (noch nicht
veröffentlicht). Unsere Empfehlung bleibt der NAU7802.

| | NAU7802 (heute) | HX711 |
|---|---|---|
| Preis | höher | sehr günstig, liegt den meisten Zellen bei |
| Verfügbarkeit | schwerer zu finden | überall |
| Anschluss | I2C, teilt sich den Bus mit dem Reader | zwei eigene Pins, kein I2C |
| Versorgung | 3,3 V | Module laufen oft mit 5 V, dann liegt auch die Datenleitung auf 5 V: braucht einen 3,3-V-Regler zum Schutz des ESP32 |
| Rauschen | gilt allgemein als geringer | gilt allgemein als höher |

Wir haben beide nicht gegeneinander gemessen. Die Aussage zum Rauschen stammt aus
den Datenblättern und aus Erfahrungsberichten, nicht aus einem eigenen Test. Der
HX711 ist ein guter, günstiger Einstieg, aber er braucht zwei eigene Pins (welche,
ist noch nicht entschieden), und du musst auf die Versorgungsspannung achten. Wenn du das Setup willst, das wir
zuerst testen und unterstützen, nimm den NAU7802.

## Eine digitale Wägezelle über RS485 { #load-cell }

Das ist ein Ausblick, nichts, was du heute kaufen und anstecken kannst. Zellen mit
eingebautem Wandler, fertig verkabelt und mit Stecker, würden das Löten sparen.
Sie sprechen RS485, deshalb ist ein RS485-Anschluss an einem Stecker oder an einem
I/O-Port so wichtig, am heutigen Board und am nächsten. Günstige Boards und
günstige Zellen haben ihn nicht, daher bleibt das für die meisten vorerst schwer zu
bekommen.

Eine solche Zelle würde außerdem den I2C-Bus für den NFC-Reader freimachen, und
damit die Wahl, welchen Reader wir nehmen können.

## Ein Raspberry Pi im Gehäuse { #raspberry-pi }

Das ist pausiert. Ein Pi Zero ist für FilaMan und BamBuddy zu schwach, deshalb
warten wir auf einen stärkeren Nachfolger. Was die Waage heute mit einem Pi kann,
steht unter [SpoolmanScale Pro](../pro/index.md).

---

## Siehe auch

- [Spulen, Tags und Drucker](../use/compatibility.md): was unterstützt wird
- [FAQ](faq.md)
