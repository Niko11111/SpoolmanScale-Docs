# Mitmachen & Discord

SpoolmanScale ist Open Source, und Beiträge sind willkommen - Code,
Dokumentation, Fehlermeldungen oder Ideen.

---

## Discord

Der schnellste Weg zu Hilfe, und der Ort, an dem Beta-Funde gemeldet werden:

👉 **[discord.gg/xadskCrPFu](https://discord.gg/xadskCrPFu)**

Über 200 Leute betreiben eine SpoolmanScale. Baufragen, Fotos von Verkabelungen,
Tag-Ärger - alles gern gesehen.

---

## Wie du beitragen kannst

- **Fehlermeldungen** - ein [Issue auf GitHub](https://github.com/Niko11111/SpoolmanScale/issues) öffnen
- **Feature-Wünsche** - ein Issue öffnen oder im [Discord](https://discord.gg/xadskCrPFu) besprechen
- **Code** - einen Pull Request öffnen
- **Dokumentation** - Fehler korrigieren oder Fehlendes ergänzen im [Docs-Repo](https://github.com/Niko11111/SpoolmanScale-Docs)
- **Testen** - Beta-Firmware ausprobieren und im Discord berichten

---

## Code beitragen

### Einrichten

```bash
git clone https://github.com/Niko11111/SpoolmanScale.git
cd SpoolmanScale
```

In VS Code mit der PlatformIO-Erweiterung öffnen. Die Umgebung heißt
`wt32-sc01-plus`:

```bash
pio run                 # bauen
pio run -t upload       # über USB flashen
pio device monitor      # serieller Monitor, 115200 Baud
scripts/check.sh        # Hausregeln, braucht python3 und node
```

Das erste `pio run` lädt einmalig die festgelegte Plattform mit Arduino-Core 3.3
und ihre Toolchain herunter, das dauert ein paar Minuten. Spätere Builds gehen
schneller.

`scripts/check.sh` prüft die Richtlinien unten und einiges mehr. Die CI führt es
bei jedem Push und jedem Pull Request aus, lass es also laufen, bevor du einen
öffnest.

!!! warning "PSRAM bleibt Quad"
    `board_build.arduino.memory_type` muss `qio_qspi` bleiben. Niemals OPI,
    niemals abgeschaltet.

Einzelheiten stehen in
[BUILDING.md](https://github.com/Niko11111/SpoolmanScale/blob/main/BUILDING.md).

### Richtlinien

- Alle Code-Kommentare auf **Englisch**
- Alle UI-Texte über das Makro `T(STR_XXX)` - nie fest verdrahtet
- Ein neuer UI-Text braucht Deutsch, Englisch und einen französischen Entwurf.
  Das Französische läuft über `tools/lang_fr.py`, siehe
  [tools/FRENCH_TRANSLATION.md](https://github.com/Niko11111/SpoolmanScale/blob/main/tools/FRENCH_TRANSLATION.md)
- Keine Geviertstriche, nirgends - sie brechen die Xtensa-Toolchain in
  Kommentaren und erscheinen in der UI als Rechteck. Nimm " - "
- Bibliotheksversionen festnageln, nie "latest"
- Vor einem PR auf echter Hardware testen
- Eine Änderung pro PR

### Ablauf für einen Pull Request

1. Repo forken
2. Branch anlegen: `git checkout -b feature/mein-feature`
3. Änderungen machen
4. Pushen und einen PR gegen `dev` öffnen

---

## Dokumentation beitragen

Die Doku liegt in einem [eigenen Repo](https://github.com/Niko11111/SpoolmanScale-Docs).
Einfach die `.md`-Dateien bearbeiten und einen PR öffnen - zum Einreichen ist
kein Build nötig.

---

## Das Projekt unterstützen

Wenn dir SpoolmanScale nützt, freut sich das Projekt über Unterstützung:

☕ [ko-fi.com/formfollowsfunction](https://ko-fi.com/formfollowsfunction)

Ein Like auf [MakerWorld](https://makerworld.com/de/models/2713675-spoolmanscale)
und ein ⭐ auf [GitHub](https://github.com/Niko11111/SpoolmanScale) helfen
ebenfalls sehr!
