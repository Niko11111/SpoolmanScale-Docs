# FAQ

Die Fragen, die auf Discord und MakerWorld immer wieder kommen.

---

## Aufbau und Hardware

### Kann ich die Waage fertig kaufen?

Im Moment nicht, aber eine kleine Serie steht auf der Roadmap, für alle, die die
Bestellung der Teile und den Zusammenbau lieber auslassen. Vorher sind noch die
rechtlichen Fragen zum Verkauf von Elektronik zu klären, auch für andere Länder,
und der Preis muss für beide Seiten stimmen. Einen Termin gibt es noch nicht.
Neuigkeiten kommen zuerst auf [Discord](https://discord.gg/K3KmKnrWhP) und auf
Instagram unter [@spoolmanscale](https://www.instagram.com/spoolmanscale/).

Wenn du bis dahin selbst bauen willst, auch ganz ohne Löterfahrung: Auf Discord
hilft dir die Community gern weiter.

---

### Meine Waage oder der NFC-Leser geht nicht. Wo fange ich an?

Bei der Hardware, in dieser Reihenfolge. Fast jede Meldung bisher lief auf einen
dieser drei Punkte hinaus, und kein einziges Mal war es die Firmware:

1. **Die DIP-Schalter am PN532.** Mit großem Abstand die häufigste Ursache.
   Siehe [die nächste Frage](#wie-stelle-ich-die-dip-schalter-am-pn532-ein).
2. **Kabel und Stecker.** Ein Stecker, der nicht ganz sitzt, eine kalte
   Lötstelle, zwei vertauschte Adern. Siehe
   [wie du die Verkabelung prüfst](#woran-erkenne-ich-dass-die-verkabelung-stimmt).
3. **Ein defektes Bauteil.** Wenn alles oben stimmt und es trotzdem nicht geht,
   war es fast immer ein defektes Modul. Siehe
   [Ich habe alles geprüft](#ich-habe-alles-gepruft-und-es-geht-trotzdem-nicht).

Die Waage prüft sich bei jedem Start selbst und sagt in der Statusleiste, was
sie gefunden hat. Jede Meldung mit der wahrscheinlichen Ursache steht unter
[Was die Waage dir sagt](index.md).

---

### Wie stelle ich die DIP-Schalter am PN532 ein?

Der PN532 muss im **I2C-Modus** laufen: **SW1 = ON**, **SW2 = OFF**. In jeder
anderen Stellung antwortet er auf dem Bus gar nicht, und die Waage meldet den
NFC-Leser als fehlend.

- Genau hinsehen: Die Schalter sind winzig, und einer, der **auf halbem Weg**
  zwischen beiden Stellungen hängt, ist der Klassiker. Schieb jeden kräftig bis
  zum Anschlag.
- Wenn möglich **vor** dem Löten und Zusammenbauen einstellen. Details und Fotos
  unter [Die Teile im Detail](../build/parts.md#pn532-nfc-reader).
- Das Modul liest die Schalter nur beim Einschalten. Nach dem Umstellen die Waage
  ganz vom Strom trennen und wieder anstecken.

---

### Woran erkenne ich, dass die Verkabelung stimmt?

- **Stecker ganz drin.** Die kleinen JST-Stecker brauchen einen festen Druck, bis
  sie einrasten. Halb steckende Stecker stehen hinter vielen "gestern ging es
  noch"-Meldungen.
- **Lötstellen bei eingestecktem Stecker prüfen.** Eine kalte Lötstelle misst
  sich auf dem Tisch einwandfrei und öffnet, sobald das Kabel unter Zug steht.
- **Nichts vertauscht:** SDA auf Pin 3, SCL auf Pin 4, GND auf Pin 2, 5V auf
  Pin 1. Jeder Pin steht in den Tabellen unter [Verkabelung](../build/wiring.md).
- **PN532 direkt an den WT32**, nicht über die zweite STEMMA-QT-Buchse des
  NAU7802: Die führt nur 3,3V, der PN532 braucht 5V.
- **Die Startzeile ansehen.** Bei jedem Start schreibt die Waage ins Log, welche
  Chips auf dem Bus antworten: `I2C_EXT scan: 0x24 PN532, 0x2A NAU7802` willst du
  sehen. Du findest sie im seriellen Monitor (115200 Baud) oder auf der Seite
  **Logs** der Weboberfläche. Eine fehlende Adresse zeigt direkt auf das Kabel
  dieses Moduls.

---

### Ich habe alles geprüft, und es geht trotzdem nicht

Dann ist die wahrscheinlichste Ursache ein **defektes Bauteil**. Die Module sind
billig, und ein schlechtes Exemplar in einer Charge kommt vor: ein PN532, der auf
dem Bus antwortet, aber nie einen Tag liest, ein NAU7802, dessen Werte wandern,
eine Wägezelle, die nicht zur Ruhe kommt.

Das verdächtige Modul zu tauschen geht meist schneller als weiterzusuchen. Wenn
du ein zweites hast, probier es aus. Wenn du weiter feststeckst, frag auf
[Discord](https://discord.gg/K3KmKnrWhP) und bring die Startzeile aus dem Log
mit; die verrät uns viel.

---

### Welche Teile soll ich kaufen?

Die vollständige Liste mit Links steht in der [Stückliste](../build/bom.md).

Lieber alles in einem Warenkorb? Ein Nutzer aus der Community hat eine
AliExpress-Liste mit Teilen zusammengestellt, die ebenfalls gut funktionieren:
👉 [SpoolmanScale-Teileliste auf AliExpress](https://www.aliexpress.com/p/wish-manage/share.html?spm=a2g0o.cart.headerAcount.6.321738dayZTIa0&wishGroupId=800000022363334&smbPageCode=wishlist-amp&spreadId=E95BDFF0E1B4367408F1423D8C0ABF206981C084C10F93E3EE124B0AFA678D69)

---

### Brauche ich einen Raspberry Pi?

Nein. SpoolmanScale ist ein eigenständiges Gerät. Es braucht irgendwo im Netz
eine Filamentverwaltung - [Spoolman, FilaMan oder BamBuddy](../use/backends.md) -
und die kann überall laufen: auf einem NAS, einem Server, einem vorhandenen Pi,
einem Docker-Host.

[SpoolmanScale Pro](../pro/index.md) macht einen Raspberry Pi zu so einem
Server, eingerichtet und aktuell gehalten über eine Webseite.

---

### Geht es auch ohne Wägezelle?

Ja. Schalte **Einstellungen → Spulen & Waage → Waage vorhanden** aus und starte neu. Das
Gerät arbeitet dann als reines Tag-Terminal: Es liest, verknüpft und beschreibt
Tags und setzt Lagerorte, die Gewichte verschwinden vom Bildschirm.

---

### Warum dieses Display, und gibt es ein größeres?

Ich habe die WT32-SC01 Plus ganz am Anfang des Projekts gewählt, weil andere
sie für ähnliche Bauprojekte genutzt hatten. Das hat sich als gute
Entscheidung erwiesen: ein kleines, aufgeräumtes Gerät, ungefähr so breit wie
eine Spule, das neben den Druckern wenig Platz braucht. Und am Ende ist es eine
Waage, die schnell Filament messen soll, kein Dashboard.

Größer ist hier nicht automatisch besser, und ein größerer Bildschirm ist mehr
als nur ein Display. Jedes Layout der Firmware ist für 480x320 Pixel gebaut, ein
5"- oder 7"-Panel braucht ein anderes Board dahinter, und das Gehäuse müsste neu
entworfen werden. Größere Panels sprechen außerdem ein anderes Protokoll, das
viel mehr Pins belegt, und daran scheitern die meisten Boards (siehe unten).
Ich plane deshalb nicht, viele Displaygrößen zu unterstützen. Käme ein Board,
das die folgenden Punkte erfüllt, wäre 5" eine Größe, die ich vertreten könnte.
7" passt nicht zu diesem Projekt.

Du kannst die Open-Source-Firmware gern selbst an ein anderes Display anpassen.
Community-Ports stehen in der README.

---

### Was ist an der Hardware geplant?

Nichts davon ist zugesagt und es gibt keine Termine. Es ist die Richtung, damit
du nicht jedes Mal nachfragen musst.

**Das Gehäuse bleibt klein.** Ich bin zufrieden damit und will es möglichst
wenig verändern.

**Ein austauschbarer NFC-Reader.** Der heutige Reader ist leicht erhältlich und
gut dokumentiert, kann aber keine ISO-15693-Tags wie
[OpenPrintTag](https://openprinttag.org/) lesen. Ein Nachfolger braucht
ISO 15693 und sollte per I2C oder einem anderen Bus mit zwei Leitungen
angeschlossen sein, weil ich die übrigen Pins anderweitig brauche. Mit einer
absetzbaren Antenne könnte die Platine unten im Gehäuse sitzen, der Teil, der
herausschaut, würde kleiner, und man könnte ihn leicht versetzen oder für Spulen
mit dem Text an anderen Stellen tauschen. Die Kandidaten, die ich kenne, sind
noch schwer zu bekommen und kosten ein Mehrfaches des heutigen Readers.

**Eine digitale Wägezelle über RS485.** Zellen mit eingebautem Wandler, fertig
verkabelt und mit Stecker, würden das Löten sparen. Das geht nur, wenn das Board
RS485 an einen Stecker oder einen I/O-Port herausführt. Außerdem würde es den
I2C-Bus für den NFC-Reader freimachen.

**Ein Raspberry Pi im Gehäuse** ist pausiert. Ein Pi Zero ist für FilaMan und
BamBuddy zu schwach, deshalb warte ich auf einen stärkeren Nachfolger.

**Was das nächste Board können muss:**

- RS485 an einem Stecker oder I/O-Port, dazu ein freier I2C-Bus und Pins für UART
- die USB-C-Buchse nicht ganz am Rand des Boards, damit ein Kabel in der
  jetzigen Einbaulage ins Gehäuse kommt
- eine bündige Glasfront ohne Rahmen oder Kante
- mehr Leistung als der ESP32-S3, mit WLAN und Bluetooth auf dem Board
- bei mehreren Shops erhältlich und nicht von einem kleinen Hersteller, der
  monatelang nichts liefern kann, zu einem fairen Preis
- weit verbreitete Bibliotheken mit viel Erfahrung in der Community

Ein Board, das alles erfüllt, habe ich noch nicht gefunden. Ideen und
Board-Tipps gern auf [Discord](https://discord.gg/K3KmKnrWhP).

---

## Tags

### Welche Spulen, Tags und Drucker funktionieren?

Die ganze Liste, mit dem, was heute geht, was in Entwicklung ist und was wir noch
nicht wissen, steht unter [Spulen, Tags und Drucker](../use/compatibility.md).
Kurz: Bambu Lab, NTAG-Sticker, OpenSpool, FilaMan und Anycubic-ACE-Tags
funktionieren, Snapmaker kann gelesen werden, Creality ist in Entwicklung, und
TigerTag, OpenTag3D, Elegoo und Qidi sind geplant. Prusas OpenPrintTag
funktioniert mit dem heutigen Reader nicht, siehe
[OpenPrintTag](../use/compatibility.md#openprinttag).

---

### Muss ich meine Tags beschreiben?

Nein. Die Waage erkennt eine Spule an der **Werks-UID** des Tags, und die
Verbindung zwischen UID und Spule liegt in deinem Bestand.

Tags zu beschreiben ist optional - nützlich, wenn auch andere Leser oder eine
Anycubic ACE den Tag verstehen sollen. Siehe [NFC-Tags](../use/tags.md).

---

### Welche Tags soll ich kaufen?

**NTAG215**, wenn die Waage sie beschreiben soll. NTAG213 wird einwandfrei
gelesen, aber seine 144 Byte sind zu klein für einen Datensatz. MIFARE-Classic-
Karten gehen auch, über ihre UID.

Ausführlich mit Kompatibilitätstabelle unter [NFC-Tags](../use/tags.md).

---

### Kann ich meine Bambu-Lab-Spulen benutzen?

Ja. Bambus eigene Tags werden gelesen und entschlüsselt. Beschrieben werden sie
nie - das ist Absicht.

---

### Kann eine Spule zwei Tags haben?

Ja, einen auf jeder Seite, damit die Spule gefunden wird, egal wie herum sie
liegt. Direkt nach dem Verknüpfen fragt die Waage nach dem zweiten. Siehe
[NFC-Tags](../use/tags.md#ein-zweiter-tag-pro-spule).

---

### Was ist mit Snapmaker-, Creality- oder Prusa-Tags?

**Snapmaker**-Tags werden gelesen (eine Option in den Web-Einstellungen),
**Creality**-Tags über ihre UID. **Prusas OpenPrintTag** nutzt einen
Funkstandard, den der PN532 nicht lesen kann. Siehe
[OpenPrintTag](../use/compatibility.md#openprinttag) und
[Was ist an der Hardware geplant?](#was-ist-an-der-hardware-geplant).

---

### Warum wird mein Tag unzuverlässig gelesen?

Meistens, weil er dem Leser **zu nah** ist - genau umgekehrt, als man erwartet.
Gib ihm 5 bis 20 mm Abstand, bevor du ihn tauschst. Die Physik dahinter steht
unter [NFC-Tags](../use/tags.md#position-naher-ist-nicht-besser).

---

## Im Alltag

### Kann ich das Backend später wechseln?

Ja, jederzeit, und deine Eingaben für die anderen bleiben erhalten. Die Anzeige
wird geleert und die aufliegende Spule beim neuen Backend neu abgefragt.

---

### Warum stehen da sechs Ziffern statt Gramm?

Die Waage ist nie kalibriert worden und zeigt deshalb den Rohwert des Wandlers.
Bei einem frischen Aufbau ist das normal. Siehe
[Waage nicht kalibriert](index.md#waage-nicht-kalibriert).

---

### Ist sie genau genug?

Ein 24-Bit-ADC an einer 2-kg-Zelle löst weit unter einem Gramm auf. Was dich in
der Praxis begrenzt, ist das Referenzgewicht, mit dem du kalibriert hast - nimm
also ein gutes. Angezeigt und gespeichert wird in ganzen Gramm.

---

### Geht 5-GHz-WLAN?

Nein. Der ESP32-S3 hat nur ein 2,4-GHz-Funkteil, und ein 5-GHz-Netz taucht in
der Suche nicht einmal auf.

---

### Muss ich das WLAN-Passwort an der Waage tippen?

Nein. Der Web-Flasher fragt direkt nach dem Flashen danach, und an der Waage
kannst du es über **Per Handy einrichten** am Handy eingeben. Am Touchscreen
geht es weiterhin, mit allen Zeichen. Siehe
[Schritt 2 - WLAN](../use/index.md#schritt-2-wlan).

---

### Braucht es Internet?

Nein. Alles läuft im eigenen Netz, ohne Cloud, ohne Konto, ohne Abo. Nur zwei
Dinge gehen nach außen, wenn Internet da ist: Die Uhr wird von einem öffentlichen
Zeitserver gestellt, und einmal am Tag fragt die Waage bei GitHub, ob es neue
Firmware gibt. Diese Prüfung lässt sich mit **Autom. Suche** im Screen für das
Firmware-Update abschalten.

---

### Können zwei Leute gleichzeitig in die Weboberfläche?

Es ist ein kleiner eingebetteter Webserver auf einem Mikrocontroller. Es
funktioniert, ist aber für eine Person zur Zeit gebaut. Die Bereiche
Einstellungen und Wartung sind [standardmäßig aus](../use/web.md#die-drei-schalter),
und du kannst sie mit einem Passwort (4 bis 8 Ziffern) schützen.

---

### Welchen Etikettendrucker kann ich nutzen?

Der **Phomemo M220** und der M110S sowie der **NIIMBOT B1** und der M2 laufen
über Bluetooth Low Energy, weitere sind experimentell. Siehe die
[Etikettendrucker](../use/printers.md) und [Bluetooth & Etiketten](../use/labels.md).

---

## Updates und Fehlerberichte

### Warum braucht 0.8.0 einmal das USB-Kabel?

0.8.0 teilt den Speicher der Waage neu auf, und das geht nur über das Kabel. Das
ist ein einmaliger Schritt für Waagen, die von 0.7.x kommen, alle Einstellungen
bleiben erhalten. Siehe [Firmware aktualisieren](../use/updating.md).

---

### Wie schicke ich einen brauchbaren Fehlerbericht?

Öffne in der Weboberfläche die Seite **Logs**, stell den Umfang auf
**Ausführlich** und wiederhole, was schiefging. Lade das Log herunter und stell
es auf [Discord](https://discord.gg/K3KmKnrWhP) oder in ein
[GitHub-Issue](https://github.com/Niko11111/SpoolmanScale/issues), zusammen mit
der Firmware-Version und dem Backend, das du nutzt. Eine SD-Karte brauchst du
dafür nicht: Das Log kann im internen Speicher der Waage liegen.
