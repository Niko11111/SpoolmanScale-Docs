<div class="tx-hero">
  <div align="center">
  <img src="assets/images/logo_trans_4.png" width="200"/>
  </div>
  <h1>SpoolmanScale</h1>
  <p>Open-source ESP32-S3 filament scale with NFC - talks to Spoolman, FilaMan and BamBuddy. No cloud. No subscription. Just works.</p>

  <div class="tx-hero__badges">
    <img src="https://img.shields.io/github/v/release/Niko11111/SpoolmanScale?label=Firmware&color=28d49a&style=flat-square" alt="Version">
    <img src="https://img.shields.io/github/license/Niko11111/SpoolmanScale?color=28d49a&style=flat-square" alt="License">
    <img src="https://img.shields.io/badge/Discord-Join-5865F2?style=flat-square&logo=discord&logoColor=white" alt="Discord">
  </div>

  <div class="tx-hero__cta">
    <a href="build/" class="primary">🚀 Build one</a>
    <a href="https://github.com/Niko11111/SpoolmanScale" class="secondary">⭐ GitHub</a>
  </div>
</div>

<div class="tx-product-photos">
  <img src="assets/images/product_3.jpeg" alt="SpoolmanScale" />
  <img src="assets/images/product_4.jpeg" alt="SpoolmanScale" />
</div>

---

## What is SpoolmanScale?

A standalone filament scale for 3D printing. Put a spool on it and it identifies
the filament from its NFC tag, shows what is left, and syncs with your filament
manager - without opening a browser.

---

## New in v0.7.0

<div class="tx-feature-grid">
  <div class="tx-feature-card">
    <div class="tx-feature-card__icon">🔌</div>
    <h3>Three backends</h3>
    <p>Spoolman, FilaMan and now BamBuddy. Switch any time, your settings for the others are kept.</p>
  </div>
  <div class="tx-feature-card">
    <div class="tx-feature-card__icon">🏷️</div>
    <h3>Writing NFC tags</h3>
    <p>OpenSpool, FilaMan or Anycubic ACE format, on its own or on request, with every backend.</p>
  </div>
  <div class="tx-feature-card">
    <div class="tx-feature-card__icon">🌐</div>
    <h3>New web interface</h3>
    <p>Separate pages, two languages, firmware updates from the browser, and as usable on a phone.</p>
  </div>
  <div class="tx-feature-card">
    <div class="tx-feature-card__icon">🩺</div>
    <h3>It says what is wrong</h3>
    <p>The scale checks itself and names the fault in plain words, with the fix and a button that gets you there.</p>
  </div>
</div>

[Full release notes on GitHub :material-arrow-right:](https://github.com/Niko11111/SpoolmanScale/releases){ .md-button }

---

## What it does

<div class="tx-feature-grid">
  <div class="tx-feature-card">
    <div class="tx-feature-card__icon">📡</div>
    <h3>NFC identification</h3>
    <p>Tag your spools once. Put one down to identify it. NTAG213/215/216 and Bambu Lab's own tags.</p>
  </div>
  <div class="tx-feature-card">
    <div class="tx-feature-card__icon">⚖️</div>
    <h3>Precision scale</h3>
    <p>24-bit NAU7802 on a 2 kg load cell. Tare, bag weight correction, live difference to your inventory.</p>
  </div>
  <div class="tx-feature-card">
    <div class="tx-feature-card__icon">📺</div>
    <h3>480x320 touchscreen</h3>
    <p>Everything on the device. No computer needed for day to day use.</p>
  </div>
  <div class="tx-feature-card">
    <div class="tx-feature-card__icon">💧</div>
    <h3>Drying reminder</h3>
    <p>Per material or one rule for everything, with a multiplier for airtight storage.</p>
  </div>
  <div class="tx-feature-card">
    <div class="tx-feature-card__icon">🔄</div>
    <h3>OTA updates</h3>
    <p>The scale checks GitHub itself and installs over WiFi. The cable is for the first flash only.</p>
  </div>
  <div class="tx-feature-card">
    <div class="tx-feature-card__icon">🏠</div>
    <h3>Fully local</h3>
    <p>No cloud, no account. Runs on your own network. Your data stays yours.</p>
  </div>
</div>

---

## Hardware at a glance

| Component | Part |
|---|---|
| Microcontroller | ESP32-S3 (WT32-SC01 Plus) |
| Display | 3.5" IPS 480x320, capacitive touch |
| NFC reader | PN532 (I²C, `0x24`) |
| Scale ADC | NAU7802 (I²C, `0x2A`) |
| Load cell | 2 kg single point (5 kg works too) |
| Enclosure | 3D printed, free on MakerWorld |

Around **€50 to €60** in parts. Details on the
[bill of materials](build/bom.md).

---

## Where to start

=== "I want to build one"

    1. [Buy the parts](build/bom.md)
    2. [Print the case](build/case.md)
    3. [Wire it up](build/wiring.md)
    4. [Put it together](build/assembly.md)
    5. [Flash and set up](use/index.md)

=== "I have one already"

    - [Updating the firmware](use/updating.md)
    - [What is new in v0.7.0](https://github.com/Niko11111/SpoolmanScale/releases)
    - [The web interface](use/web.md)

=== "Something is wrong"

    - [What the scale is telling you](help/index.md) - it diagnoses itself
    - [Troubleshooting](help/troubleshooting.md)
    - [FAQ](help/faq.md)

=== "SpoolmanScale Pro"

    The Pro variant brings its own Raspberry Pi Zero 2W running the backend
    locally. See the [Pro overview](pro/index.md).

---

## Community

- **Discord** - [discord.gg/xadskCrPFu](https://discord.gg/xadskCrPFu)
- **GitHub** - [github.com/Niko11111/SpoolmanScale](https://github.com/Niko11111/SpoolmanScale)
- **MakerWorld** - [@FormFollowsF](https://makerworld.com/de/models/2713675-spoolmanscale#profileId-3005075)
- **Ko-fi** - [Support the project](https://ko-fi.com/formfollowsfunction)

!!! tip "Want to help?"
    Found a bug? Missing something? See [Contributing](help/contributing.md) or
    open an issue on GitHub.
