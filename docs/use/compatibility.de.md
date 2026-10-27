# Spulen, Tags und Drucker

Welche Spulen, Tags und Drucker mit SpoolmanScale funktionieren und was wir über
den Rest wissen. Stand 27. Oktober 2026: Firmware 0.8.3 (öffentlich) und 0.8.4
(Beta).

!!! info "So liest du diese Seite"
    Drei Fragen werden ständig vermischt:

    1. **Was steht auf dem Tag?** Ein Format, offen oder verschlüsselt.
    2. **Welcher Drucker liest es selbst?** Viele tun das, jeder in seinem
       eigenen Format.
    3. **Wie kommt die Spule in dein Inventar?** Das ist der Teil, den die Waage
       übernimmt.

    Für all das braucht die Waage ein [Backend](backends.md) (Spoolman, FilaMan
    oder BamBuddy). **Unbekannt** heißt: Wir haben noch keine verlässlichen
    Informationen gefunden, nicht, dass es unmöglich ist.

---

## Woran wir arbeiten, in dieser Reihenfolge

Keine Termine und keine Zusagen. Viele der Formate unten können wir selbst nicht
testen, deshalb ist Hilfe von Leuten mit den passenden Spulen sehr willkommen.

1. **Lesen**, was auf dem Tag steht: Marke, Material, Farbe, Gewicht,
   Temperaturen, eine Produkt-ID.
2. **Finden oder anlegen:** Ist die Spule in deinem Inventar, genügen zwei Taps.
   Wenn nicht, legt die Waage Filament und Spule in allen drei Backends an, so
   wie sie es bei Bambu-Lab-Tags schon tut.
3. **Schreiben und dem Drucker sagen**, welche Spule eingelegt ist.

---

## Tags und Spulen

Zum Lesen braucht es einen Tag mit ISO-14443-A-Chip (NTAG, MIFARE). Der Reader der
Waage kann kein ISO 15693 lesen, siehe OpenPrintTag.

| Format | Chip | Offen? | Lesen | Finden oder anlegen | Hinweise |
|---|---|---|---|---|---|
| **Bambu Lab** | MIFARE Classic | verschlüsselt, Schlüssel aus der UID ableitbar | **Funktioniert** | **Funktioniert**, alle Backends | wird nie beschrieben |
| **Jeder NTAG-Sticker** | NTAG 213/215/216 | n. z. | **Funktioniert** | Verknüpfen per UID **funktioniert** | empfohlen: NTAG215 |
| **OpenSpool** | NTAG 215/216, JSON | offen | **Funktioniert** | **Funktioniert** als Verknüpfung | keine Produkt-ID auf dem Tag |
| **FilaMan** | NTAG | offen | **Funktioniert** | **Funktioniert** | |
| **Anycubic ACE** | NTAG | uns ist kein offizielles Dokument bekannt | **Funktioniert** | nur Schreiben | |
| **Snapmaker** | MIFARE Classic | uns ist kein offizielles Dokument bekannt | **Funktioniert** (Schalter in den Web-Einstellungen) | **Geplant** | Schlüssel und Aufbau: teils unbekannt |
| **Creality CFS** | MIFARE Classic | verschlüsselt, nicht offiziell veröffentlicht | **In Entwicklung** (0.8.4) | **In Entwicklung** | noch nicht an genug Hardware getestet |
| **TigerTag** | NTAG21x | offen, nicht verschlüsselt (optionale Signatur) | Verknüpfen per UID **funktioniert**, Inhalt **geplant** | **Geplant** | Katalog-Tags tragen eine Produkt-ID: der beste Fall zum Abgleichen |
| **OpenTag3D** | NTAG 215/216 | offen | **Geplant** | **Geplant** | von mehreren kleineren Filamentmarken und Werkzeugen genutzt |
| **Elegoo (Canvas)** | NTAG | uns ist kein offizielles Dokument bekannt | **Geplant** | **Geplant** | braucht Tester |
| **Qidi (Qidi Box)** | MIFARE Classic | uns ist kein offizielles Dokument bekannt | **Geplant**, zuerst Lesen | **Geplant** | Schlüssel und Aufbau: uns unbekannt |
| **Prusa OpenPrintTag** | ISO 15693 | offen | **Heute nicht möglich** | **Heute nicht möglich** | braucht einen anderen Reader, siehe [OpenPrintTag](#openprinttag) |
| Flashforge | | | **Unbekannt** | | |
| Sunlu, eSun | bei einigen Spulen TigerTag | | siehe TigerTag | | andere Tags: unbekannt |
| Polymaker, Overture, Jayo | | | **Unbekannt** | | |
| Sovol, Kingroon | | | **Unbekannt** | | |
| Paramount, Fillamentum, 3DJake, Extrudr | | | **Unbekannt** | | |

### Warum andere MIFARE-Tags länger brauchen

Jeder MIFARE-Classic-Tag wird zuerst als Bambu-Lab-Tag versucht, weil die meisten
unserer Nutzer Bambu-Spulen haben. Ein Tag, der keiner ist, erscheint erst, wenn
die Waage das aufgegeben hat: **3 bis 5 Sekunden** bei einer Spule, die dein
Backend schon kennt, **etwa zehn Sekunden** bei einer unbekannten. Das liegt an
uns, nicht am Tag.

Zwei Dinge sollen das beschleunigen:

- **Ein Gedächtnis für bekannte Tags.** Die Waage merkt sich, was für ein Tag eine
  UID beim letzten Mal war, sodass dieselbe Spule beim zweiten Scan sofort
  gefunden wird. In Entwicklung für 0.8.4: Es beginnt mit Bambu, Creality,
  Snapmaker und leeren Tags. Mehr UIDs zu merken ist **geplant**.
- **Deine bevorzugte Spulenart.** Sobald die Waage mehr Spulenarten kennt,
  wählst du, welche zuerst versucht wird. **Geplant.**

### Wonach „Finden oder anlegen“ sucht

Was auch immer der Tag hergibt, die Waage gleicht in dieser Reihenfolge ab:

1. **Produkt-ID oder Barcode** (TigerTag-Katalog-Tags tragen eine, OpenTag3D eine
   SKU und einen Barcode)
2. **Marke, Material und Farbe**, mit Durchmesser und Gewicht als zusätzliche
   Prüfung

Ein OpenSpool-Tag oder ein einfacher NTAG hat keine Produkt-ID, dort entscheiden
nur Marke, Material und Farbe. Passt nichts, bietet die Waage **Anlegen** an.

---

## OpenPrintTag

Wir finden OpenPrintTag gut und wollen es langfristig unterstützen. Heute geht es
nicht: Die Tags nutzen einen anderen Funkstandard (ISO 15693) als der Reader in
der Waage (ISO 14443 A), und das lässt sich mit keinem Update ändern.

Wir warten auf einen Nachfolger-Reader, der ins Gehäuse passt und unsere Kriterien
erfüllt: Anschluss über zwei Leitungen, absetzbare Antenne, gute Verfügbarkeit
und ein fairer Preis (siehe [Hardware-Entscheidungen](../help/hardware.md#next-board)).
Einen solchen haben wir noch nicht gefunden.

OpenPrintTag ist außerdem noch jung. Prusa hat es seit Oktober 2025 auf jede neue
Prusament-Spule gesetzt, andere Marken fangen erst an, es zu übernehmen. Der
Standard wird weiterentwickelt. Bitte hab noch etwas Geduld: Sobald ein passender
Reader in Reichweite ist, schauen wir uns OpenPrintTag als Erstes an.

---

## Drucker

Die meisten Drucker lesen die Tags ihres eigenen Systems. Um einem Drucker zu
sagen, welche Spule eingelegt ist, braucht die Waage einen Weg von außen.

| Drucker oder System | Liest Tags selbst | Weg, die eingelegte Spule zu melden | In SpoolmanScale |
|---|---|---|---|
| **Bambu Lab** (AMS) | eigene verschlüsselte Tags | MQTT, braucht LAN-Modus und Developer-Modus (Bambu bietet für diesen Modus keinen Kundensupport) | [AMS-Ansicht](ams.md) mit BamBuddy oder FilaMan **funktioniert** |
| **Klipper mit Moonraker** (Voron, Sovol, Kingroon und andere) | kein eigener Reader | ja, ein HTTP-Aufruf an Moonraker | **Geplant**, braucht Spoolman |
| **Happy Hare** | nein | ja, ein G-Code-Befehl | **Geplant**, später |
| **AFC / BoxTurtle** | nein | ja, ein G-Code-Befehl | **Geplant**, braucht Spoolman |
| **Creality K2 mit CFS** | CFS-Tags | **Unbekannt** | Lesen und Anlegen **in Entwicklung** |
| **Snapmaker U1** | eigene Tags, andere brauchen Community-Firmware (laut Community, nicht laut Snapmaker) | **Unbekannt** | Lesen **funktioniert** |
| **Qidi (Qidi Box)** | Qidi-Tags | **Unbekannt** | **Geplant** |
| **Elegoo (Canvas)** | Elegoo-Tags | **Unbekannt** | **Geplant** |
| **Anycubic (ACE Pro)** | ACE-Tags | **Unbekannt**, wir haben keinen dokumentierten Weg gefunden | Schreiben **funktioniert** |
| **Prusa Core One** | OpenPrintTag, mit Zusatz-Reader | kein Weg von außen gefunden | **heute nicht möglich**, siehe [OpenPrintTag](#openprinttag) |
| Prusa XL, MK4S, MK3.9, MINI | **Unbekannt** (Prusas OpenPrintTag-Hilfeseite nennt die Familien MK4 und MK3.9, aber nicht, wie sie Tags lesen) | **Unbekannt** | |
| Flashforge | **Unbekannt** | **Unbekannt** | |
| OctoPrint | nein | über ein Plugin, Einzelheiten **unbekannt** | |

Etiketten drucken ist ein anderes Thema: siehe [Etikettendrucker](printers.md).

---

## Hilf uns, die Lücken zu füllen

Alles, was **Unbekannt** ist, ist offen. Wenn du eine dieser Spulen oder einen
dieser Drucker hast, helfen uns ein Foto des Tags, ein Dump aus einer NFC-App
oder die API-Seite des Druckers sehr. Schreib uns auf
[Discord](https://discord.gg/K3KmKnrWhP) oder auf
[GitHub](https://github.com/Niko11111/SpoolmanScale/issues).
