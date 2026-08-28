# Pro Web-UI

Die SpoolmanScale Pro bringt eine eigene Verwaltungsoberfläche mit, erreichbar
aus jedem Browser im Netz unter `http://spoolmanscale.local`.

Keine App nötig - einfach die Adresse aufrufen.

---

## Reiter Backend

Zwischen Spoolman und FilaMan umschalten, Live-Status und Logs ansehen.

| Funktion | Beschreibung |
|---|---|
| Backend-Umschalter | Zwischen Spoolman und FilaMan wechseln |
| Statusanzeige | Zeigt, ob das aktive Backend läuft |
| Logs | Live-Ausgabe des Logs |
| Update-Prüfung | Backend-Updates prüfen und installieren |
| Parallelbetrieb | Beide gleichzeitig (nur Pi 4 und neuer) |

---

## Reiter System

Zustand des Pi im Blick behalten und Systemeinstellungen verwalten.

| Funktion | Beschreibung |
|---|---|
| RAM / SD / Temperatur / Laufzeit | Live-Systemwerte |
| Pi-OS-Update | Systempakete aktualisieren |
| Selbst-Update der UI | Web-UI-Updates von GitHub installieren |
| WLAN | Netz wechseln, mit automatischem Rückfall |
| Neustart / Herunterfahren | Sicher neu starten oder ausschalten |

---

## Reiter Backup

| Funktion | Beschreibung |
|---|---|
| Backup erstellen | Auf Zuruf einen Datenbank-Schnappschuss anlegen |
| Herunterladen | Backup als Datei sichern |
| Wiederherstellen | Ein früheres Backup hochladen und einspielen |
| Auto-Backup | Täglich, die letzten 7 werden aufgehoben |
| Gefahrenzone | Datenbank zurücksetzen oder löschen |

---

## Zugang

| Weg | Adresse |
|---|---|
| mDNS | `http://spoolmanscale.local` |
| IP | `http://<ip-des-pi>` |

!!! warning "Waage und Pi hören beide auf diesen Namen"
    Auch die Waage meldet sich als `spoolmanscale.local`. Bei einer Pro, wo
    beide im selben Netz hängen, gewinnt, wer zuerst antwortet, und das ist
    nicht vorhersagbar. Der Name gehört der Waage, der Pi weicht später auf
    einen eigenen aus. Bis dahin: nimm die IP des Pi, wenn du beim Falschen
    landest.

!!! tip "spoolmanscale.local unter Windows nicht erreichbar?"
    Installiere [Bonjour Print Services](https://support.apple.com/kb/DL999).
    Unter macOS und Linux geht es von Haus aus.
