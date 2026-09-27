# FAQ

Die Fragen, die auf Discord und MakerWorld immer wieder kommen.

---

## Aufbau und Hardware

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
[Discord](https://discord.gg/xadskCrPFu) und bring die Startzeile aus dem Log
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

---

### Geht es auch ohne Wägezelle?

Ja. Schalte **Einstellungen → Waage → Waage vorhanden** aus und starte neu. Das
Gerät arbeitet dann als reines Tag-Terminal: Es liest, verknüpft und beschreibt
Tags und setzt Lagerorte, die Gewichte verschwinden vom Bildschirm.

---

## Tags

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
Funkstandard, den der PN532 nicht lesen kann.

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

Vorerst den **Phomemo M220** über Bluetooth, als erste Version und als Beta
markiert. Weitere Drucker sind geplant. Siehe
[Bluetooth & Etiketten](../use/labels.md).

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
es auf [Discord](https://discord.gg/xadskCrPFu) oder in ein
[GitHub-Issue](https://github.com/Niko11111/SpoolmanScale/issues), zusammen mit
der Firmware-Version und dem Backend, das du nutzt. Eine SD-Karte brauchst du
dafür nicht: Das Log kann im internen Speicher der Waage liegen.
