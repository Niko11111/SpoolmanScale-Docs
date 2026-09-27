<div class="tx-hero">
  <div align="center">
  <img src="../assets/images/logo_trans_4.png" width="200"/>
  </div>
  <h1>SpoolmanScale</h1>
  <p>Quelloffene ESP32-S3-Filamentwaage mit NFC - spricht mit Spoolman, FilaMan und BamBuddy. Keine Cloud. Kein Abo. Läuft einfach.</p>

  <div class="tx-hero__badges">
    <img src="https://img.shields.io/github/v/release/Niko11111/SpoolmanScale?label=Firmware&color=28d49a&style=flat-square" alt="Version">
    <img src="https://img.shields.io/github/license/Niko11111/SpoolmanScale?color=28d49a&style=flat-square" alt="Lizenz">
    <img src="https://img.shields.io/badge/Discord-Join-5865F2?style=flat-square&logo=discord&logoColor=white" alt="Discord">
  </div>

  <div class="tx-hero__cta">
    <a href="build/" class="primary">🚀 Selbst bauen</a>
    <a href="https://github.com/Niko11111/SpoolmanScale" class="secondary">⭐ GitHub</a>
  </div>
</div>

<div class="tx-product-photos">
  <img src="../assets/images/product_3.jpeg" alt="SpoolmanScale" />
  <img src="../assets/images/product_4.jpeg" alt="SpoolmanScale" />
</div>

---

## Was ist SpoolmanScale?

Eine eigenständige Filamentwaage für den 3D-Druck. Leg eine Spule auf, und sie
erkennt das Filament an dessen NFC-Tag, zeigt den Rest an und gleicht sich mit
deiner Filamentverwaltung ab - ohne dass du einen Browser aufmachen musst.

---

## Neu in v0.8.0

- 🏷️ **Etikettendruck** *(Beta, erste Version)* - per Bluetooth auf einen Phomemo
  M220 (M110 experimentell), mit Material, Farbe, Spulen-ID und QR-Code zur
  Spule. Das ist ein Anfang: Etiketten aus dem Backend, ein kleiner Editor im
  Browser, weitere Drucker und Größen sind geplant.
- ⚡ **Deutlich schneller** - eine neue Spule verknüpfen dauert unter einer
  Sekunde statt 2 bis 7 s, das Inventar lädt im Hintergrund, während der
  Bildschirm weiterläuft, und der Touch wird 100-mal pro Sekunde gelesen.
- 🧵 **Spoolman 0.27: native Tags** - Tags gehören zur Spule, mehrere pro
  Spule, bestehende Waagen ziehen von selbst um.
- 📇 **Tags** - Tipp auf den NFC-Chip in der Kopfzeile zeigt den Tag auf dem
  Leser, Schreiben zeigt seinen Fortschritt, und Snapmaker-Tags lassen sich
  lesen (optional).
- 📝 **Log ohne SD-Karte** - im internen Speicher der Waage, lesbar im Browser.
- 🇫🇷 **Französisch** - auf der Waage und in der Weboberfläche.

!!! note "Schon auf 0.7.x?"
    Weil 0.8.0 den Speicher neu aufteilt, geht dieses eine Update einmal über
    den [Web-Flasher](https://niko11111.github.io/SpoolmanScale/): verbinden,
    **Update** wählen, etwa 2 Minuten, alle Einstellungen bleiben. Danach kommen
    Updates wie gewohnt über WLAN. [Mehr](use/updating.md)

[Alle Release Notes auf GitHub :material-arrow-right:](https://github.com/Niko11111/SpoolmanScale/releases/tag/v0.8.0){ .md-button }

---

## Was sie kann

- 🔌 **Drei Backends** - [Spoolman, FilaMan oder BamBuddy](use/backends.md).
  Jederzeit umschaltbar, die Einstellungen der anderen bleiben.
- 📡 **Erkennung per NFC** - Spule auflegen, sie wird erkannt: NTAG, Bambu Labs
  eigene Tags, MIFARE Classic, auf Wunsch ein Tag auf jeder Seite der Spule.
  [NFC-Tags](use/tags.md)
- ✍️ **Tags beschreiben** - als OpenSpool, FilaMan oder Anycubic ACE, von selbst
  oder auf Nachfrage, mit jedem Backend.
- ⚖️ **Präzise Waage** - 24-Bit-NAU7802 an einer 2-kg-Wägezelle. Tarieren,
  Beutelgewicht, Live-Differenz zum Bestand. [Wiegen](use/weighing.md)
- 🖨️ **AMS-Ansicht** - mit FilaMan und BamBuddy: jedes Fach mit Spule,
  Restmenge und Trocknung, die Trocknung direkt aus der Karte eintragen.
- 💧 **Trocknungserinnerung** - je Material oder eine Regel für alles, mit
  Multiplikator für luftdichte Lagerung. [Trocknung & Lagerort](use/drying.md)
- 🌐 **Weboberfläche** - einzelne Seiten in drei Sprachen, Firmware-Update im
  Browser, auf dem Handy genauso brauchbar. [Weboberfläche](use/web.md)
- 🩺 **Sie sagt, was ihr fehlt** - die Waage prüft sich selbst und benennt den
  Fehler im Klartext, mit Abhilfe. [Was die Waage dir sagt](help/index.md)
- 🔄 **Updates über WLAN** - die Waage prüft GitHub selbst und installiert
  drahtlos. [Aktualisieren](use/updating.md)
- 🏠 **Vollständig lokal** - keine Cloud, kein Konto. Läuft im eigenen Netz.

---

## Hardware auf einen Blick

| Bauteil | Teil |
|---|---|
| Mikrocontroller | ESP32-S3 (WT32-SC01 Plus) |
| Display | 3,5" IPS 480x320, kapazitiver Touch |
| NFC-Reader | PN532 (I²C, `0x24`) |
| Waagen-ADC | NAU7802 (I²C, `0x2A`) |
| Wägezelle | 2 kg Einpunkt (5 kg geht auch) |
| Gehäuse | 3D-gedruckt, kostenlos auf MakerWorld |

Etwa **50 bis 60 Euro** an Teilen. Einzelheiten in der
[Stückliste](build/bom.md).

---

## Wo anfangen

=== "Ich will eine bauen"

    1. [Teile kaufen](build/bom.md)
    2. [Gehäuse drucken](build/case.md)
    3. [Verkabeln](build/wiring.md)
    4. [Zusammenbauen](build/assembly.md)
    5. [Flashen und einrichten](use/index.md)

=== "Ich habe schon eine"

    - [Firmware aktualisieren](use/updating.md)
    - [Was in v0.8.0 neu ist](https://github.com/Niko11111/SpoolmanScale/releases/tag/v0.8.0)
    - [Die Weboberfläche](use/web.md)

=== "Etwas stimmt nicht"

    - [Was die Waage dir sagt](help/index.md) - sie diagnostiziert sich selbst
    - [Troubleshooting](help/troubleshooting.md)
    - [FAQ](help/faq.md)

=== "SpoolmanScale Pro"

    Die Pro-Variante bringt einen eigenen Raspberry Pi Zero 2W mit, auf dem das
    Backend lokal läuft. Siehe [Pro-Übersicht](pro/index.md).

---

## Community

- **Discord** - [discord.gg/xadskCrPFu](https://discord.gg/xadskCrPFu)
- **GitHub** - [github.com/Niko11111/SpoolmanScale](https://github.com/Niko11111/SpoolmanScale)
- **MakerWorld** - [@FormFollowsF](https://makerworld.com/de/models/2713675-spoolmanscale#profileId-3005075)
- **Ko-fi** - [Das Projekt unterstützen](https://ko-fi.com/formfollowsfunction)

!!! tip "Mithelfen?"
    Fehler gefunden? Etwas vermisst? Siehe [Mitmachen](help/contributing.md)
    oder öffne ein Issue auf GitHub.
