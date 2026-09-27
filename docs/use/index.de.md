# Flashen & Ersteinrichtung

Wie die Firmware auf ein frisches Gerät kommt, und der Weg durch die
Ersteinrichtung. Rechne mit etwa 20 Minuten.

---

## Der erste Flash - der Web-Flasher

Das allererste Mal läuft über USB. Es funktioniert in jedem Chrome-Browser
(Chrome, Edge, Brave), zu installieren ist nichts.

1. WT32-SC01 Plus per USB-C an den Rechner
2. **[niko11111.github.io/SpoolmanScale](https://niko11111.github.io/SpoolmanScale)** öffnen
3. Auf den Knopf auf der Seite klicken und den seriellen Port des Geräts
   auswählen
4. **Install** wählen. Einer Waage, auf der SpoolmanScale schon läuft, wird
   stattdessen **Update** angeboten, das WLAN, Kalibrierung und
   Backend-Einstellungen behält
5. Etwa 2 Minuten warten
6. Der Browser bietet an, dein WLAN einzurichten. Jetzt eingeben, oder
   überspringen und in Schritt 2 an der Waage erledigen

!!! warning "Es muss ein Datenkabel sein"
    Viele USB-C-Kabel führen nur Strom. Taucht kein serieller Port auf, ist das
    das Erste, was du tauschst.

!!! note "Chrome, nicht Firefox"
    Der Flasher benutzt die WebSerial-API. Firefox hat sie nicht.

!!! warning "Einstellungen behalten"
    Bietet der Flasher bei einer Waage, die schon deine Einstellungen trägt,
    **Install** an und fragt, ob das Gerät gelöscht werden soll, lass das
    Häkchen weg. Setz es nur, wenn du ganz neu anfangen willst.

!!! tip "WLAN später ändern"
    Die Flasher-Seite ändert auch das WLAN einer Waage, die schon läuft. Per
    USB anschließen, Seite öffnen, auf den Knopf klicken, Port wählen und
    **Change Wi-Fi** wählen. Geflasht wird dabei nichts.

Jedes spätere Update läuft am Gerät selbst oder aus dem Browser über das
Netzwerk. Siehe [Firmware aktualisieren](updating.md) - das Kabel brauchst du
danach nicht mehr.

---

## Schritt 1 - Sprache und Zeitzone

**Deutsch**, **English** oder **Français**, darunter deine Zeitzone, damit die
Uhr vom ersten Start an stimmt. Die Zone folgt der Sprache, bis du selbst eine
wählst. **Weiter** speichert beides und startet das Gerät einmal neu.

Beides ist später änderbar unter
**Einstellungen → System → Sprache / Language**.

---

## Schritt 2 - WLAN

Hast du das WLAN schon im Web-Flasher eingegeben, zeigt die Waage **Bereits
mit einem WLAN verbunden.** mit Netz, IP und Signal. Tippe auf **Weiter**, oder
auf **WLAN ändern**, um ein anderes zu wählen.

Sonst gibt es zwei Wege, und beim zweiten tippst du das Passwort gar nicht an
der Waage.

=== "Am Touchscreen"

    1. Die Liste der Netze füllt sich von selbst, der Knopf oben sucht erneut
    2. Dein Netz antippen
    3. Passwort eingeben. `1#` schaltet auf Ziffern und Sonderzeichen, auch
       `^ ~ |` und `` ` ``
    4. Mit ✓ oder ↵ bestätigen

=== "Mit dem Handy"

    1. Unter der Liste **Per Handy einrichten** antippen
    2. Die Waage öffnet ein eigenes WLAN und zeigt zwei QR-Codes. Mit dem
       linken trittst du bei; das Passwort ist jedes Mal neu und steht nur auf
       dem Display
    3. Die Einrichtungsseite öffnet sich meist von selbst. Sonst den rechten
       QR-Code scannen oder `http://10.42.0.1/` öffnen
    4. Dein Netz wählen oder den Namen eines versteckten eintippen, Passwort
       eingeben und **Verbinden** antippen
    5. Die Waage schließt ihr eigenes WLAN, verbindet sich und zeigt das
       Ergebnis auf dem Display

    !!! tip "Das Handy meldet, das Netz habe kein Internet"
        Stimmt, es ist das eigene Netz der Waage. Verbunden bleiben, sonst
        wechseln manche Handys auf mobile Daten und die Seite lädt nicht.

!!! note "Nur 2,4 GHz"
    Der ESP32-S3 hat kein 5-GHz-Funkteil. Ein 5-GHz-Netz taucht in der Suche
    gar nicht erst auf - das sieht aus, als fehle das Netz, und nicht, als
    werde es nicht unterstützt.

---

## Schritt 3 - Backend wählen

SpoolmanScale spricht mit drei Filament-Verwaltungen. Wähle jetzt eine, ändern
kannst du das jederzeit unter **Einstellungen → Verbindung** oder in der
[Weboberfläche](web.md) - deine Eingaben für die anderen bleiben erhalten.

![Das Menü Verbindung am Gerät](../assets/images/ui/de/11_connection.png)

=== "Spoolman"

    Adresse und Port, sonst nichts. Zugangsdaten gibt es keine.

    | Feld | Beispiel |
    |---|---|
    | Host | `192.168.1.100` |
    | Port | `7912` |

=== "FilaMan"

    FilaMan braucht **zwei** Zugänge und legt sie an zwei verschiedenen
    Stellen an. Zuerst den Host eintragen und die Verbindung testen. Klappt
    der Test, zeigt **Weiter** eine Adresse: Die öffnest du am Rechner im
    Browser, und die Zugangsdaten gehören dort auf der Seite **Backend** in die
    Karte **Zugangsdaten**. Später kommst du über
    **Einstellungen → Verbindung → Im Browser einrichten** wieder dorthin.

    | Feld | Beispiel / woher es kommt |
    |---|---|
    | Host | `192.168.1.100:8083` |
    | API-Key | FilaMan: Zahnrad → **API Keys** |
    | Gerätecode | FilaMan: **Admin-Bereich → Geräte** |

    **1. API-Key.** In FilaMan auf das **Zahnrad** neben dem Benutzernamen
    unten in der Seitenleiste klicken, **API Keys** öffnen und einen Key
    erstellen, zum Beispiel mit dem Namen `SpoolmanScale`. Unter **API-Key**
    eintragen und **Speichern** drücken.

    ![FilaMan-Einstellungen, erreichbar über das Zahnrad neben dem Benutzernamen](../assets/images/filaman/filaman_1_settings.png)

    ![API-Key in FilaMan erstellen](../assets/images/filaman/filaman_2_api_keys.png)

    **2. Gerätecode.** In FilaMan **Admin-Bereich → Geräte** öffnen und
    **Gerät erstellen** klicken. FilaMan zeigt einen 6-stelligen Code aus
    Ziffern und Großbuchstaben. Der Dialog heißt **Geräte-Token erstellt**
    (englisch *Device Token Created*), zeigt aber den Code, nicht das Token.
    Unter **Gerätecode** eintragen und **Registrieren** drücken. Die Waage
    tauscht den Code gegen ein Device-Token, danach ist er verbraucht.

    ![Die Karte Geräte im Admin-Bereich von FilaMan](../assets/images/filaman/filaman_3_admin_panel.png)

    ![Gerät in FilaMan erstellen](../assets/images/filaman/filaman_4_create_device.png)

    ![Der 6-stellige Code, den FilaMan nur einmal zeigt](../assets/images/filaman/filaman_5_device_code.png)

    !!! warning "Beides wird nur einmal angezeigt"
        Key und Code gleich kopieren, sobald FilaMan sie zeigt. Geht einer
        verloren, einfach neu anlegen.

    !!! info "Für beides ein Admin-Konto"
        Ein Gerät anlegen kann nur ein Admin. Ein API-Key hat die Rechte des
        Kontos, das ihn erstellt hat. Den Key also ebenfalls mit dem
        Admin-Konto erstellen, sonst lehnt FilaMan die AMS-Zuordnung ab.

=== "BamBuddy"

    Ein einzelner API-Key, gesendet als `X-API-Key`. Anzulegen in BamBuddy unter
    **Settings → API Keys** mit **Read Status** und **Manage Inventory**.

    Der Key ist **optional**: eine BamBuddy-Instanz mit abgeschalteter
    Authentifizierung antwortet auch ohne.

    Ist die Authentifizierung an, meldet der Verbindungstest **API-Key fehlt
    noch**, bis du ihn eingetragen hast. Das ist so gewollt, die Einrichtung
    geht weiter zu dem Schritt, in dem der Key eingetragen wird.

    | Feld | Beispiel |
    |---|---|
    | Host | `192.168.1.100:8000` |
    | API-Key | optional |

Vor dem Weitergehen **Verbindung testen** antippen.

---

## Wo die Tag-UID landet

!!! info "Nur Spoolman"
    FilaMan und BamBuddy führen Tag-Kennungen selbst. Das hier betrifft sie
    nicht.

Einen eigenen Einrichtungsschritt gibt es dafür nicht mehr. Nach dem
Verbindungstest geht es mit **Weiter** direkt zur Kalibrierung.

Ab **Spoolman 0.27** legt die Waage Tags nativ in Spoolman ab
(**Spoolman NFC (nativ)**). Eine neue Einrichtung wählt das beim ersten Scan
von selbst, und eine Waage, die bisher `extra.tag` benutzt hat, zieht einmalig
von selbst um. Das alte Feld bleibt gefüllt. Bei einem älteren Spoolman landet
die UID in einem Zusatzfeld:

| Feld | Nimm es, wenn |
|---|---|
| `tag` | Nichts anderes deine Tags liest. Die Voreinstellung vor Spoolman 0.27. |
| `nfc_id` | Ein anderes Werkzeug bei dir diesen Namen schon benutzt |
| `card_uids` | Du mehrere Tags an einer Spule haben willst |

Fehlende Felder, etwa das Tag-Feld oder `last_dried` für das Trocknungsdatum,
legt die Waage beim ersten Schreiben selbst an. Ändern lässt sich die Auswahl
später unter
**Einstellungen → Verbindung → Weitere Optionen → Spoolman Extra-Felder → Tag-Feld**.

Die UID wird als **reines Hex** geschrieben (`04B9E542447080`), so wie jedes
andere Werkzeug rund um Spoolman sie schreibt. Spulen, die eine ältere Firmware
mit Doppelpunkten verknüpft hat, werden weiterhin gefunden und beim ersten Scan
einmalig umgeschrieben.

---

## Schritt 4 - Kalibrieren

Eine nie kalibrierte Waage zeigt den Rohwert des Wandlers, keine Gramm - eine
sechsstellige Zahl, die von selbst um Hunderte springt. Bei einem frischen
Aufbau ist das normal, und die Waage sagt es in der Statuszeile auch.

Am Ende der Einrichtung fragt die Waage danach: **Jetzt kalibrieren** öffnet
die Kalibrierung sofort, **Verstanden** verschiebt sie auf später.

1. **Einstellungen → Waage → Kalibrierung**
2. Plattform leer räumen, **TARE** antippen, warten bis 0 dasteht
3. Ein Gewicht auflegen, das du genau kennst, ideal etwa 1000 g
4. Dieses Gewicht in Gramm eintippen
5. **Berechnen** antippen. Der Faktor wird sofort gespeichert

![Kalibrierung am Gerät](../assets/images/ui/de/19_calibration.png)

!!! tip "Das Referenzgewicht setzt die Obergrenze"
    Eine volle Spule, auf einer Küchenwaage nachgewogen, reicht völlig. Der
    Fehler deines Referenzgewichts steckt danach in jeder Messung.

Einzelheiten in [Wiegen & Kalibrieren](weighing.md).

!!! note "Ohne Wägezelle"
    Ein Gerät ohne Wägezelle überspringt das. Schalte
    **Einstellungen → Waage → Waage vorhanden** aus und starte neu: Das Gerät
    arbeitet dann als Tag-Terminal. Die Gewichte verschwinden vom Bildschirm,
    der Gewichtsknopf wird zu **Lagerort**, und Kalibrierung und
    Beutelgewicht verschwinden aus dem Menü.

---

## Fertig

Du landest auf dem [Hauptbildschirm](main-screen.md). Leg eine Spule auf, und
die Anzeige wacht von selbst auf.
