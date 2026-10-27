<div class="tx-hero" markdown>
  <div align="center">
  <img src="../assets/images/logo_trans_4.png" width="200"/>
  </div>
  <h1>SpoolmanScale</h1>
  <p>Quelloffene ESP32-S3-Filamentwaage mit NFC - spricht mit Spoolman, FilaMan und BamBuddy. Keine Cloud<a href="#cloud-note">*</a>. Kein Abo. Läuft einfach.</p>

  <div class="tx-hero__badges">
    <img src="https://img.shields.io/github/v/release/Niko11111/SpoolmanScale?label=Firmware&color=28d49a&style=flat-square" alt="Version">
    <img src="https://img.shields.io/github/license/Niko11111/SpoolmanScale?color=28d49a&style=flat-square" alt="Lizenz">
    <img src="https://img.shields.io/github/release-date/Niko11111/SpoolmanScale?color=28d49a&style=flat-square" alt="Letztes Release">
    <img src="https://img.shields.io/github/stars/Niko11111/SpoolmanScale?color=28d49a&style=flat-square" alt="Sterne">
    <img src="https://img.shields.io/github/forks/Niko11111/SpoolmanScale?color=28d49a&style=flat-square" alt="Forks">
    <img src="https://img.shields.io/github/downloads/Niko11111/SpoolmanScale/total?color=28d49a&style=flat-square" alt="Downloads">
    <img src="https://img.shields.io/badge/Discord-Join-5865F2?style=flat-square&logo=discord&logoColor=white" alt="Discord">
  </div>

  <div class="tx-hero__cta" markdown>
  [:material-hammer-wrench: Selbst bauen](build/index.md){ .primary }
  [:material-printer-3d-nozzle: MakerWorld](https://makerworld.com/models/2713675){ .secondary }
  [:fontawesome-brands-github: GitHub](https://github.com/Niko11111/SpoolmanScale){ .secondary }
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

## Neu in v0.8.3

- 🧵 **Spulen an der Waage anlegen** - aus einem Bambu-Tag oder einem leeren
  NTAG: Hersteller, Material und Farbe aus der SpoolmanDB, FilaMans FilamentDB
  oder BamBuddys Katalog wählen, und die Spule ist in einem Zug angelegt und
  verknüpft.
- ♻️ **Tag beim Archivieren freigeben** - archivierst du eine leere Spule, bietet
  die Waage an, ihren Tag zu lösen; ein aufliegender NTAG wird gelöscht und ist
  bereit für die nächste Spule.
- 🏷️ **Etiketten auf mehr Druckern** - NIIMBOT B1 und M2 (300 dpi) und der
  Phomemo M110S kommen zu M220, M110 und M100. Der Editor im Browser hat fünf
  Anordnungen und viele weitere Felder. [Etikettendrucker](use/printers.md)
- 🪟 **In BamBuddy oder FilaMan** - die Weboberfläche der Waage als Seite in
  deinem Backend, in dessen hellem oder dunklem Modus.
- ⚖️ **Auto-Tara und Beutel optional** - eine langsame Drift auf der leeren Waage
  geht auf null zurück, und ohne Beutel zeigt der Hauptbildschirm zwei Zeilen
  statt vier.
- 🎨 **BamBuddy-Themes** und sieben Farbvorlagen.

!!! note "Noch auf 0.7.x?"
    0.8.3 braucht die Speicheraufteilung, die mit 0.8.0 kam. Hatte deine Waage
    dieses eine USB-Update nie, zeigt sie statt des Updates einen QR-Code zum
    [Web-Flasher](https://niko11111.github.io/SpoolmanScale/): verbinden,
    **Update** wählen, etwa 2 Minuten, alle Einstellungen bleiben. Danach kommen
    Updates wie gewohnt über WLAN. [Mehr](use/updating.md)

[Alle Release Notes auf GitHub :material-arrow-right:](https://github.com/Niko11111/SpoolmanScale/releases/tag/v0.8.3){ .md-button }

---

## Was sie kann

- 🔌 **Drei Backends** - [Spoolman, FilaMan oder BamBuddy](use/backends.md),
  auch über HTTPS, Spoolman auch hinter Schlüssel oder Passwort. Jederzeit
  umschaltbar, die Einstellungen der anderen bleiben.
- 📡 **Erkennung per NFC** - Spule auflegen, sie wird erkannt: NTAG, Bambu Labs
  eigene Tags mit Farbname, Trocknung und Länge, MIFARE Classic, auf Wunsch ein
  Tag auf jeder Seite der Spule. [NFC-Tags](use/tags.md)
- 🧵 **Neue Spulen ohne Browser** - Filament und Spule direkt an der Waage
  anlegen, aus einem Bambu-Tag oder einem leeren NTAG.
- ✍️ **Tags beschreiben** - als OpenSpool, FilaMan oder Anycubic ACE, von selbst
  oder auf Nachfrage, mit jedem Backend.
- ⚖️ **Präzise Waage** - 24-Bit-NAU7802 an einer 2-kg-Wägezelle. Tarieren,
  Auto-Tara, Beutelgewicht, Live-Differenz zum Bestand. [Wiegen](use/weighing.md)
- 🏷️ **Etikettendruck** - per Bluetooth auf Druckern von Phomemo und NIIMBOT,
  mit QR-Code zur Spule und einem Etiketten-Editor im Browser.
  [Etiketten](use/labels.md)
- 🖨️ **AMS-Ansicht** - mit FilaMan und BamBuddy: jedes Fach mit Spule,
  Restmenge und Trocknung, die Trocknung direkt aus der Karte eintragen.
- 💧 **Trocknungserinnerung** - je Material oder eine Regel für alles, mit
  Multiplikator für luftdichte Lagerung. [Trocknung & Lagerort](use/drying.md)
- 🎨 **Themes** - dunkel oder hell, im Look von Spoolman, FilaMan oder
  BamBuddy, oder in deinen eigenen Farben.
- 🌐 **Weboberfläche** - einzelne Seiten in drei Sprachen, Firmware-Update im
  Browser, auf dem Handy genauso brauchbar, auf Wunsch auch in BamBuddy oder
  FilaMan. [Weboberfläche](use/web.md)
- 🩺 **Sie sagt, was ihr fehlt** - die Waage prüft sich selbst und benennt den
  Fehler im Klartext, mit Abhilfe. [Was die Waage dir sagt](help/index.md)
- 🔄 **Updates über WLAN** - die Waage prüft GitHub selbst und installiert
  drahtlos. [Aktualisieren](use/updating.md)
- 🏠 **Vollständig lokal** - keine Cloud\*, kein Konto. Läuft im eigenen Netz.

<p id="cloud-note"><small>* Die Waage selbst braucht keine Cloud und kein Konto. Auf Wunsch kann
sie aber auch ein Backend nutzen, das im Internet läuft.</small></p>

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
    - [Was in v0.8.3 neu ist](https://github.com/Niko11111/SpoolmanScale/releases/tag/v0.8.3)
    - [Die Weboberfläche](use/web.md)

=== "Etwas stimmt nicht"

    - [Was die Waage dir sagt](help/index.md) - sie diagnostiziert sich selbst
    - [Troubleshooting](help/troubleshooting.md)
    - [FAQ](help/faq.md)

=== "Ich brauche einen Server"

    Die Waage braucht Spoolman, FilaMan oder BamBuddy irgendwo im Netz.
    [SpoolmanScale Pro](pro/index.md) macht einen Raspberry Pi zu diesem
    Server: mit einem Befehl installiert, danach über eine Webseite
    umgeschaltet, gesichert und aktualisiert, und die Waage zieht mit.


---

## Community

- **Discord** - [discord.gg/K3KmKnrWhP](https://discord.gg/K3KmKnrWhP)
- **GitHub** - [github.com/Niko11111/SpoolmanScale](https://github.com/Niko11111/SpoolmanScale)
- **MakerWorld** - [@FormFollowsF](https://makerworld.com/de/models/2713675-spoolmanscale#profileId-3005075)
- **Ko-fi** - [Das Projekt unterstützen](https://ko-fi.com/formfollowsfunction)

!!! tip "Mithelfen?"
    Fehler gefunden? Etwas vermisst? Siehe [Mitmachen](help/contributing.md)
    oder öffne ein Issue auf GitHub.
