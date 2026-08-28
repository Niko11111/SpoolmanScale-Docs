# Flashen & Ersteinrichtung

Wie die Firmware auf ein frisches Gerät kommt, und der Weg durch die
Ersteinrichtung. Rechne mit etwa 20 Minuten.

---

## Der erste Flash - der Web-Flasher

Das allererste Mal läuft über USB. Es funktioniert in jedem Chrome-Browser
(Chrome, Edge, Brave), zu installieren ist nichts.

1. WT32-SC01 Plus per USB-C an den Rechner
2. **[niko11111.github.io/SpoolmanScale](https://niko11111.github.io/SpoolmanScale)** öffnen
3. Auf **Flash Latest** klicken
4. Den seriellen Port des Geräts auswählen
5. Etwa 60 Sekunden warten

!!! warning "Es muss ein Datenkabel sein"
    Viele USB-C-Kabel führen nur Strom. Taucht kein serieller Port auf, ist das
    das Erste, was du tauschst.

!!! note "Chrome, nicht Firefox"
    Der Flasher benutzt die WebSerial-API. Firefox hat sie nicht.

Jedes spätere Update läuft am Gerät selbst oder aus dem Browser über das
Netzwerk. Siehe [Firmware aktualisieren](updating.md) - das Kabel brauchst du
danach nicht mehr.

---

## Schritt 1 - Sprache

**Deutsch** oder **Englisch**. Später änderbar unter
**Einstellungen → System → Sprache / Language**.

---

## Schritt 2 - WLAN

1. **Netzwerke suchen** antippen
2. Deins aus der Liste wählen
3. Passwort eingeben
4. **Verbinden** antippen

!!! note "Nur 2,4 GHz"
    Der ESP32-S3 hat kein 5-GHz-Funkteil. Ein 5-GHz-Netz taucht in der Suche
    gar nicht erst auf - das sieht aus, als fehle das Netz, und nicht, als
    werde es nicht unterstützt.

---

## Schritt 3 - Backend wählen

SpoolmanScale spricht mit drei Filament-Verwaltungen. Wähle jetzt eine, ändern
kannst du das jederzeit unter **Einstellungen → Verbindung** oder in der
[Weboberfläche](web.md) - deine Eingaben für die anderen bleiben erhalten.

=== "Spoolman"

    Adresse und Port, sonst nichts. Zugangsdaten gibt es keine.

    | Feld | Beispiel |
    |---|---|
    | Host | `192.168.1.100` |
    | Port | `7912` |

=== "FilaMan"

    FilaMan braucht **zwei** getrennte Zugänge, weil es keine Rechte pro Gerät
    kennt: ein Device-Token zum Lesen und Gewichtmelden, und einen API-Key für
    alles, was schreibt.

    | Feld | Woher es kommt |
    |---|---|
    | Host | `192.168.1.100:8002` |
    | Device-Token | Den 6-stelligen Code registrieren, den die Waage anzeigt |
    | API-Key | Legst du in der FilaMan-Oberfläche an |

=== "BamBuddy"

    Ein einzelner API-Key, gesendet als `X-API-Key`. Anzulegen in BamBuddy unter
    **Settings → API Keys** mit **Read Status** und **Manage Inventory**.

    Der Key ist **optional**: eine BamBuddy-Instanz mit abgeschalteter
    Authentifizierung antwortet auch ohne.

    | Feld | Beispiel |
    |---|---|
    | Host | `192.168.1.100:8000` |
    | API-Key | optional |

Vor dem Weitergehen **Verbindung testen** antippen.

---

## Schritt 4 - Wo die Tag-UID landet

!!! info "Nur Spoolman"
    FilaMan und BamBuddy führen Tag-Kennungen selbst. Dieser Schritt betrifft
    sie nicht.

SpoolmanScale legt die UID eines NFC-Tags in einem Spoolman-Zusatzfeld ab, und
du entscheidest, in welchem:

| Feld | Nimm es, wenn |
|---|---|
| `tag` | Nichts anderes deine Tags liest. Die Voreinstellung. |
| `nfc_id` | Ein anderes Werkzeug bei dir diesen Namen schon benutzt |
| `card_uids` | Du mehrere Tags an einer Spule haben willst |

Ein zweites Zusatzfeld, `last_dried`, hält das Trocknungsdatum. Beim ersten
Verbinden prüft die Waage, ob die Felder existieren, und bietet an, sie
anzulegen.

!!! tip "Wenn sich die Felder nicht anlegen lassen"
    Leg in Spoolman unter **Settings → Extra fields** ein Testfeld von Hand an.
    Klappt das auch nicht, liegt es an der Spoolman-Verbindung, nicht an der
    Waage.

Die UID wird als **reines Hex** geschrieben (`04B9E542447080`), so wie jedes
andere Werkzeug rund um Spoolman sie schreibt. Spulen, die eine ältere Firmware
mit Doppelpunkten verknüpft hat, werden weiterhin gefunden und beim ersten Scan
einmalig umgeschrieben.

---

## Schritt 5 - Kalibrieren

Eine nie kalibrierte Waage zeigt den Rohwert des Wandlers, keine Gramm - eine
sechsstellige Zahl, die von selbst um Hunderte springt. Bei einem frischen
Aufbau ist das normal, und die Waage sagt es in der Statuszeile auch.

1. **Einstellungen → Waage → Kalibrierung**
2. Plattform leer räumen, **TARE** antippen, warten bis 0 dasteht
3. Ein Gewicht auflegen, das du genau kennst, ideal etwa 1000 g
4. Dieses Gewicht in Gramm eintippen
5. **Berechnen** antippen und speichern

!!! tip "Das Referenzgewicht setzt die Obergrenze"
    Eine volle Spule, auf einer Küchenwaage nachgewogen, reicht völlig. Der
    Fehler deines Referenzgewichts steckt danach in jeder Messung.

Einzelheiten in [Wiegen & Kalibrieren](weighing.md).

---

## Fertig

Du landest auf dem [Hauptbildschirm](main-screen.md). Leg eine Spule auf, und
die Anzeige wacht von selbst auf.
