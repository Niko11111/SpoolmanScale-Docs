# Stückliste

!!! note "Etwas unklar oder passt nicht?"
    Ist etwas unklar oder passt nicht zu deiner Hardware-Charge, melde es bitte
    im [Discord](https://discord.gg/K3KmKnrWhP) oder auf
    [MakerWorld](https://makerworld.com/de/models/2713675-spoolmanscale#profileId-3005075).

---

## Hauptbauteile

| Bild | Bauteil | Modell | Link |
|---|---|---|---|
| ![](../assets/images/parts/wt32.png) | MCU + Display | WT32-SC01 Plus (ESP32-S3, 480x320, ST7796) | [AliExpress](https://de.aliexpress.com/item/1005006050379552.html) |
| ![](../assets/images/parts/espdb.png) | Debug-Board (nicht nötig) | ZXACC-ESPDB | [AliExpress](https://a.aliexpress.com/_Eu5Y0Ug) |
| ![](../assets/images/parts/pn532.png) | NFC-Reader | PN532 | [AliExpress](https://a.aliexpress.com/_ExScN8M) |
| ![](../assets/images/parts/nau7802.png) | Waagen-ADC | NAU7802 (Adafruit empfohlen) | [AliExpress](https://de.aliexpress.com/item/1005011685825986.html) |
| ![](../assets/images/parts/loadcell.png) | Wägezelle | YZC-133 **2 kg** Balkenzelle (5 kg geht auch) | [AliExpress](https://a.aliexpress.com/_EuhhVF2) |
| ![](../assets/images/parts/usbc_mount.png) | USB-C-Einbaubuchse 90° | 30 cm, links/rechts gewinkelt, volles USB-C PD + Daten | [AliExpress](https://de.aliexpress.com/item/1005003488021890.html) |
| ![](../assets/images/parts/jst_cables.png) | Verbindungskabel | STEMMA QT / JST | [AliExpress](https://de.aliexpress.com/item/1005011904682215.html) |
| ![](../assets/images/parts/jst_sh_cables.png) | Verbindungskabel (einfacherer Zusammenbau) | Micro JST 1.0 SH, 5-polig | [Amazon](https://amzn.eu/d/0aKJ4Va9) |

!!! info "So werden die Teile verbunden: einfacher, als es aussieht"
    Zur WT32-SC01 Plus gehört ein 7-poliges Kabel mit blanken Enden. Vier Adern
    tragen die ganze Waage, und PN532 und NAU7802 bekommen dieselben vier. Achte
    auf die Signalnamen, nicht auf die Farben: Kabel aus anderen Shops haben
    andere Farben.

    | Ader (WT32-Pin) | Signal | PN532 | NAU7802 |
    |---|---|---|---|
    | Rot (1) | 5 V | VCC | VIN |
    | Schwarz (2) | GND | GND | GND |
    | Gelb (3) | SDA | SDA | SDA |
    | Grün (4) | SCL | SCL | SCL |

    Teile jede Ader zu einem Y auf, ein Ende zu jeder Platine. Der PN532 bekommt
    eine fünfte Ader, RSTPDN (braun, Pin 7), die optional ist.

    **Drei Wege, es zu bauen:**

    1. **Das Y anlöten.** Am schnellsten und günstigsten, ohne Zusatzteile, aber
       ein defektes Teil ist schwerer zu tauschen.
    2. **Mit kleinen Steckern verbinden** (die JST-SH-Pigtails in der Liste).
       Etwas mehr zu kaufen, dafür lassen sich Teile leicht tauschen.
    3. **Eine Verteilerplatine nehmen** aus der Community-Liste unten.

    **Wenn du dir Optionen offenhalten willst:** Die Buchse am Board hat 8 Pins,
    das mitgelieferte Kabel nur 7. Pin 8 kann später genutzt werden, um die Waage
    vom NFC-Reader aufzuwecken. Heute hat er keine Funktion. Bestell ein
    8-poliges Kabel oder einen Stecker gleich mit, wenn du ihn nutzen willst.

    Die Schritt-für-Schritt-Anleitung steht unter [Verkabelung](wiring.md). Ein
    Video kommt bald.

!!! question "Warum diese Teile und keine anderen?"
    Warum kein HX711, kein größeres Display und kein anderer NFC-Reader? Die
    Antworten stehen unter [Hardware-Entscheidungen](../help/hardware.md), zum
    Beispiel [warum der NAU7802](../help/hardware.md#adc) und
    [welche Boards wir uns angesehen haben](../help/hardware.md#boards).

Lieber alles in einem Warenkorb? Ein Nutzer aus der Community hat eine
AliExpress-Liste mit Teilen zusammengestellt, die ebenfalls gut funktionieren:
👉 [SpoolmanScale-Teileliste auf AliExpress](https://www.aliexpress.com/p/wish-manage/share.html?spm=a2g0o.cart.headerAcount.6.321738dayZTIa0&wishGroupId=800000022363334&smbPageCode=wishlist-amp&spreadId=E95BDFF0E1B4367408F1423D8C0ABF206981C084C10F93E3EE124B0AFA678D69)

!!! tip "2 kg oder 5 kg Wägezelle"
    Empfohlen ist die 2-kg-Zelle - die meisten Filamentspulen liegen gut
    innerhalb ihres Bereichs. Eine 5-kg-Zelle geht auch, ist bei kleinen
    Gewichten aber etwas ungenauer.

---

## Weiteres Material

- Dünne Litze in 5 Farben (schwarz, rot, gelb, weiß, grün - je etwa 30 bis 40 cm)
- 2x Zylinderschraube M5x25
- 2x Zylinderschraube M4x15
- 9x Blechschraube M2,5x5
- 2 bis 4x Blechschraube M2x4,4 ([Beispiel](https://a.aliexpress.com/_EyCD3rS))

Blechschrauben sind empfohlen, normale Maschinenschrauben (M2,5x5, M2x4)
funktionieren aber vermutlich genauso.

---

## Optional

| Teil | Wofür |
|---|---|
| **NTAG215**-NFC-Aufkleber | Tags, die die Waage beschreiben kann. NTAG213 reicht zum Lesen, ist zum Beschreiben aber zu klein - siehe [NFC-Tags](../use/tags.md#welche-tags-funktionieren) |
| **Phomemo M220**-Etikettendrucker | Spulenetiketten per Bluetooth drucken |

!!! note "Auch die Wägezelle ist optional"
    Lass NAU7802 und Wägezelle weg und schalte
    **Einstellungen → Spulen & Waage → Waage vorhanden** aus. Das Gerät arbeitet dann als
    Tag-Terminal: es liest, verknüpft und beschreibt Tags und setzt Lagerorte,
    nur ohne Gewichte.

---

## Gehäuse

Zum Herunterladen auf MakerWorld, Druckhinweise unter
[Gehäuse drucken](case.md):

👉 [makerworld.com/@FormFollowsF](https://makerworld.com/de/models/2713675-spoolmanscale#profileId-3005075)

---

## Kostenschätzung

| Posten | Ungefähr |
|---|---|
| WT32-SC01 Plus | ca. 35 € |
| PN532, NAU7802, Wägezelle, Kabel | ca. 15 bis 25 € |
| Schrauben, Litze | ca. 5 € |
| **Gesamt** | **ca. 50 bis 60 €** |

!!! note "Lieferzeit"
    Das meiste kommt aus China. Rechne je nach Standort und Versandart mit
    **6 bis 15 Tagen**.
