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
│      │                                    │
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
die das mitgelieferte 7-polige Kabel **bündig links** gehört. Ein Pin daneben,
und beide Module sind stromlos. Die Waage meldet das als
[Kein Modul am I2C-Bus](../help/index.md#kein-modul-am-i2c-bus).

---

## PN532 NFC-Reader

Liest und beschreibt NFC-Tags.

| Eigenschaft | Wert |
|---|---|
| Schnittstelle | I2C |
| I2C-Adresse | `0x24` |
| Frequenz | 13,56 MHz |
| Protokoll | ISO 14443A |
| Pins | SDA `GPIO10`, SCL `GPIO11`, RST `GPIO14` (Pin 7, braun), siehe [Verkabelung](wiring.md) |

- **DIP-Schalter auf I2C**: SW1 = ON, SW2 = OFF. In der HSU- oder
  SPI-Stellung meldet er sich auf dem I2C-Bus gar nicht. Fotos in der
  [Bauanleitung, Schritt 3](index.md#3-pn532-schalter-auf-i2c).
- **5 V von Pin 1**, nie über den STEMMA-QT-Stecker der NAU7802 (nur 3,3 V).

Was er lesen kann und was nicht, steht auf der Seite
[NFC-Tags](../use/tags.md).

---

## NAU7802 Waagen-ADC

Ein 24-Bit-ADC für Brückensensoren, und genau das ist eine Wägezelle. Warum dieser
und nicht der günstigere HX711: siehe [Hardware-Entscheidungen](../help/hardware.md#adc).

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

Werden die Zahlen beim Auflegen kleiner, sind A+ und A- vertauscht, siehe
[Wägezelle verpolt](../help/index.md#wagezelle-verpolt). Bei fertigen
STEMMA-QT-Kabeln von Drittanbietern stimmt die Pinreihenfolge oft nicht: Prüf
Ader für Ader, siehe [Pinreihenfolge der Stecker](wiring.md#connector-pin-order).

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
