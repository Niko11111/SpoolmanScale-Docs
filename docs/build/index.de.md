# Eine SpoolmanScale bauen

Dieser Abschnitt führt vom Teilehaufen zur laufenden Waage. Wenn du schon eine
hast, willst du eher [Firmware aktualisieren](../use/updating.md).

---

## Die fünf Schritte

| Schritt | Was | Wo |
|---|---|---|
| 1 | Teile kaufen | [Stückliste](bom.md) |
| 2 | Gehäuse drucken | [Gehäuse drucken](case.md) |
| 3 | Verkabeln | [Verkabelung](wiring.md) |
| 4 | Zusammenbauen | [Zusammenbau](assembly.md) |
| 5 | Flashen und einrichten | [Flashen & Ersteinrichtung](../use/index.md) |

---

## Was du brauchst

- Einen **WT32-SC01 Plus** - ESP32-S3 mit 3,5"-Display
- Ein **PN532**-NFC-Breakout
- Einen **NAU7802**-Waagen-ADC
- Eine **2-kg-Wägezelle** (5 kg geht auch)
- Einen 3D-Drucker für das Gehäuse
- Ein USB-C-**Datenkabel** und ein 5V-Netzteil

Genaue Teile, Links und Preise in der [Stückliste](bom.md). Rechne insgesamt mit
**50 bis 60 Euro**.

---

## Wie lange es dauert

| Phase | Zeit |
|---|---|
| Teile bestellen | 6 bis 15 Tage, das meiste kommt aus China |
| Gehäuse drucken | 4 bis 6 Stunden |
| Verkabeln und zusammenbauen | etwa 2 Stunden |
| Flashen und einrichten | etwa 20 Minuten |

---

## Wie schwer es ist

!!! note "Anspruch"
    Du brauchst **Grundkenntnisse im Löten** - der PN532 hat keinen Stecker,
    seine Adern werden direkt angelötet - und genug Sicherheit, einen ESP32 aus
    dem Browser zu flashen. Programmieren musst du nicht: die Firmware ist
    fertig gebaut.

!!! warning "Das ist eine Beta-Bauanleitung"
    Hardware-Chargen unterscheiden sich. Ist etwas unklar oder passt bei dir
    nicht, melde es im [Discord](https://discord.gg/xadskCrPFu) oder auf
    [MakerWorld](https://makerworld.com/de/models/2713675-spoolmanscale#profileId-3005075).
