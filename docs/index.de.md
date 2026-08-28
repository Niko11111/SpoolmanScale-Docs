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

## Neu in v0.7.0

<div class="tx-feature-grid">
  <div class="tx-feature-card">
    <div class="tx-feature-card__icon">🔌</div>
    <h3>Drei Backends</h3>
    <p>Spoolman, FilaMan und jetzt BamBuddy. Jederzeit umschaltbar, die Einstellungen der anderen bleiben.</p>
  </div>
  <div class="tx-feature-card">
    <div class="tx-feature-card__icon">🏷️</div>
    <h3>NFC-Tags beschreiben</h3>
    <p>Als OpenSpool, FilaMan oder Anycubic ACE, von selbst oder auf Nachfrage, mit jedem Backend.</p>
  </div>
  <div class="tx-feature-card">
    <div class="tx-feature-card__icon">🌐</div>
    <h3>Neue Weboberfläche</h3>
    <p>Einzelne Seiten, zweisprachig, Firmware-Update im Browser, und auf dem Handy genauso brauchbar.</p>
  </div>
  <div class="tx-feature-card">
    <div class="tx-feature-card__icon">🩺</div>
    <h3>Sie sagt, was ihr fehlt</h3>
    <p>Die Waage prüft sich selbst und benennt den Fehler im Klartext, mit Abhilfe und einem Knopf, der hinführt.</p>
  </div>
</div>

[Vollständige Release Notes auf GitHub :material-arrow-right:](https://github.com/Niko11111/SpoolmanScale/releases){ .md-button }

---

## Was sie kann

<div class="tx-feature-grid">
  <div class="tx-feature-card">
    <div class="tx-feature-card__icon">📡</div>
    <h3>Erkennung per NFC</h3>
    <p>Spulen einmal taggen. Auflegen genügt zum Erkennen. NTAG213/215/216 und Bambu Labs eigene Tags.</p>
  </div>
  <div class="tx-feature-card">
    <div class="tx-feature-card__icon">⚖️</div>
    <h3>Präzise Waage</h3>
    <p>24-Bit-NAU7802 an einer 2-kg-Wägezelle. Tarieren, Beutelgewicht, Live-Differenz zum Bestand.</p>
  </div>
  <div class="tx-feature-card">
    <div class="tx-feature-card__icon">📺</div>
    <h3>480x320 Touchscreen</h3>
    <p>Alles am Gerät. Für den Alltag brauchst du keinen Rechner.</p>
  </div>
  <div class="tx-feature-card">
    <div class="tx-feature-card__icon">💧</div>
    <h3>Trocknungserinnerung</h3>
    <p>Je Material oder eine Regel für alles, mit Multiplikator für luftdichte Lagerung.</p>
  </div>
  <div class="tx-feature-card">
    <div class="tx-feature-card__icon">🔄</div>
    <h3>OTA-Updates</h3>
    <p>Die Waage prüft GitHub selbst und installiert über WLAN. Das Kabel ist nur für den ersten Flash.</p>
  </div>
  <div class="tx-feature-card">
    <div class="tx-feature-card__icon">🏠</div>
    <h3>Vollständig lokal</h3>
    <p>Keine Cloud, kein Konto. Läuft im eigenen Netz. Deine Daten bleiben deine.</p>
  </div>
</div>

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
    - [Was in v0.7.0 neu ist](https://github.com/Niko11111/SpoolmanScale/releases)
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
