# Die Bauteile im Detail

Was jedes Modul tut, und die Zahlen, die du brauchst, wenn etwas nicht mitspielt.

```
┌───────────────────────────────────────────┐
│           WT32-SC01 Plus                  │
│                                           │
│  ESP32-S3 ───── 480x320 Touchscreen       │
│      │                                    │
│      │ I2C  (SDA GPIO10, SCL GPIO11)      │
│      ├─────────────── PN532 NFC-Reader    │
│      │                (RST GPIO12)        │
│      └─────────────── NAU7802 ADC         │
│                            │              │
│                        Wägezelle          │
└───────────────────────────────────────────┘
```

---

## WT32-SC01 Plus

Rechner und Anzeige auf einer Platine.

| Eigenschaft | Wert |
|---|---|
| MCU | ESP32-S3 |
| Display | 3,5" IPS, 480x320, ST7796 |
| Touch | FT6336U, kapazitiv |
| PSRAM | Quad (QSPI) |
| Externer I2C | SDA `GPIO10`, SCL `GPIO11` |

Beide externen Module hängen an der **I/O-Buchse**, einer 8-poligen Buchse, in
die das mitgelieferte 7-polige Kabel **bündig links** gehört. Ein Pin daneben und
beide Module sind stromlos - die Waage meldet das als
[Kein Modul am I2C-Bus](../help/index.md#kein-modul-am-i2c-bus).

---

## PN532 NFC-Reader

Liest NFC-Tags und beschreibt sie seit v0.7.0 auch.

| Eigenschaft | Wert |
|---|---|
| Schnittstelle | I2C |
| I2C-Adresse | `0x24` |
| Frequenz | 13,56 MHz |
| Protokoll | ISO 14443A |
| Pins | SDA `GPIO10`, SCL `GPIO11`, RST `GPIO12` (Buchsenpin 5, blau) |

!!! danger "DIP-Schalter vor dem Löten stellen"
    Der PN532 muss im **I2C-Modus** stehen: **SW1 = ON**, **SW2 = OFF**. In der
    HSU- oder SPI-Stellung meldet er sich auf dem I2C-Bus überhaupt nicht. Die
    Schalter nach der Montage umzustellen ist mühsam, also mach es vorher.

!!! warning "5V, und nicht über die NAU7802"
    Der PN532 braucht 5V von Pin 1 des I/O-Kabels. Der STEMMA-QT-Durchgang der
    NAU7802 führt nur 3,3V - schleif ihn nicht darüber durch.

Was er lesen kann und was nicht, steht auf der Seite
[NFC-Tags](../use/tags.md).

---

## NAU7802 Waagen-ADC

Ein 24-Bit-ADC für Brückensensoren, und genau das ist eine Wägezelle.

| Eigenschaft | Wert |
|---|---|
| Schnittstelle | I2C |
| I2C-Adresse | `0x2A` |
| Auflösung | 24 Bit |
| Pins | SDA `GPIO10`, SCL `GPIO11` |

Die vier Adern der Wägezelle gehen an die Schraubklemmen:

| Ader | Klemme | Funktion |
|---|---|---|
| Rot | `E+` | Speisung + |
| Schwarz | `E-` | Speisung - |
| Weiß | `A+` | Signal + |
| Grün | `A-` | Signal - |

!!! tip "Zahlen werden beim Auflegen kleiner"
    A+ und A- sind vertauscht. Siehe
    [Wägezelle verpolt](../help/index.md#wagezelle-verpolt).

!!! warning "STEMMA-QT-Kabel von Drittanbietern"
    Bei fertigen Kabeln von Drittanbietern stimmt die Pinreihenfolge oft nicht
    mit der des WT32-Kabels überein. Prüfe Ader für Ader, statt dich auf die
    Farben zu verlassen.

---

## Wägezelle

Empfohlen ist eine 2-kg-Balkenzelle YZC-133; 5 kg geht auch, ist bei kleinen
Gewichten aber etwas ungenauer. Die meisten Spulen liegen deutlich unter 2 kg.

---

## Den Bus prüfen

Antwortet etwas nicht, sagt die Waage dir, welcher Chip und warum - siehe
[Was die Waage dir sagt](../help/index.md). Im seriellen Monitor bei 115200 Baud
listet die Boot-Zeile `I2C_EXT scan:` jede Adresse, die antwortet. Erwartet
werden `0x24` und `0x2A`.
