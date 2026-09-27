# Troubleshooting

Probleme, die die Waage nicht selbst herausfinden kann: Netzwerk, Backend, Tags,
der Pi.

!!! tip "Schau zuerst in die Statuszeile"
    Alles, was mit der Hardware nicht stimmt, diagnostiziert die Waage selbst und
    sagt es im Klartext. Jede Meldung, mit Ursache und Abhilfe, steht unter
    [Was die Waage dir sagt](index.md).

---

## Waage

??? question "Waage zeigt 0 oder reagiert nicht"
    - Leuchtet die **LED auf der NAU7802**? Wenn nicht, prüfe die Versorgung -
      5V auf Pin 1, GND auf Pin 2 der WT32-I/O-Buchse
    - Verkabelung der Wägezelle prüfen (E+/E-/A+/A-)
    - Sind die Werte negativ, tausche A+ und A-
    - Neu kalibrieren über **Einstellungen → Waage → Kalibrierung**

??? question "Waage zeigt eine absurde Zahl, z.B. -3487423847234 g"
    Diese Zahl ist keine Messung. Ist der I²C-Bus gestört, kommt jeder
    Registerlesevorgang als lauter Einsen zurück, und die Firmware liest das als
    "Wandlung fertig" plus einen Messwert von -1. Erst den Bus richten, die Zahl
    folgt dann von selbst.

    - Seriellen Monitor mit 115200 Baud öffnen und auf die Boot-Zeile
      `I2C_EXT scan:` schauen - sie listet jede Adresse, die antwortet.
      Erwartet: `0x24 PN532, 0x2A NAU7802`
    - Wiederholtes `[E][Wire.cpp:499] ... returned Error -1` heißt "kein Gerät
      hat bestätigt". Das ist ein Verkabelungsfehler, kein Adresskonflikt: 0x24
      und 0x2A können nicht kollidieren, und der Touch-Controller hängt an einem
      eigenen Bus
    - Lötstellen prüfen, **während der Stecker sitzt**. Eine kalte Lötstelle
      misst auf dem Tisch einwandfrei und öffnet unter Zug
    - SDA (Pin 3) und SCL (Pin 4) nicht vertauscht, GND (Pin 2) durchgehend

??? question "Gewicht stimmt nach der Verkabelungskorrektur immer noch nicht"
    Eine Kalibrierung, die bei gestörtem Bus entstanden ist, liegt im Gerät und
    überlebt die Reparatur.

    - **Einstellungen → Waage → Kalibrierung zurücksetzen**, dann TARE und mit
      einem Referenzgewicht neu kalibrieren

??? question "Waage misst ungenau"
    - Mit einem präzisen Referenzgewicht neu kalibrieren (etwa 1000 g empfohlen)
    - Beim Tarieren darf nichts die Wiegeplattform berühren
    - Erschütterungen während der Messung vermeiden

??? question "Waage misst richtig, aber die Differenz zum Bestand stimmt nicht"
    - Prüfen, ob das Spulengewicht im Bestand richtig hinterlegt ist
    - Beutelgewicht anpassen über **Einstellungen → Waage → Beutelgewicht**

---

## NFC

??? question "NFC-Reader wird beim Start nicht erkannt"
    - Leuchtet die **LED auf dem PN532**? Wenn nicht, prüfe die Versorgung -
      5V auf Pin 1 der WT32-I/O-Buchse
    - DIP-Schalter des PN532 prüfen - muss auf I²C stehen (SW1 = ON, SW2 = OFF)
    - Verkabelung prüfen: SDA → Pin 3, SCL → Pin 4, RST (PN532 RSTPDN) → Pin 7,
      siehe [Verkabelung](../build/wiring.md)
    - Den PN532 nicht über den STEMMA-QT-Durchgang der NAU7802 anschließen
      (nur 3,3V)

??? question "NFC-Tag wird nicht erkannt"
    - Die Spule ruhig direkt über dem NFC-Fenster halten
    - Einen anderen [NTAG](../use/tags.md)-Aufkleber probieren - manche billigen
      Sticker sind defekt
    - Zu wenig Abstand ist häufiger als zu viel: 5 bis 20 mm zwischen Tag und
      Leser funktionieren am besten, siehe
      [Position](../use/tags.md#position-naher-ist-nicht-besser)
    - Unsicher, ob dein Tag passt? Siehe [NFC-Tags](../use/tags.md)

---

## WLAN & Netzwerk

??? question "Gerät verbindet sich nicht mit dem WLAN"
    - SpoolmanScale kann **nur 2,4 GHz** - 5-GHz-Netze tauchen gar nicht auf
    - Passwort genau prüfen (Groß- und Kleinschreibung)
    - Enthält das Passwort `^`, `~`, `|` oder `` ` ``? Firmware vor v0.7.2 kann
      sie nicht tippen. Die aktuelle Version über den Web-Flasher aufspielen,
      der dann auch nach dem WLAN fragt
    - Verstecktes Netz: Es taucht in der Liste nicht auf. **Per Handy
      einrichten** nehmen und den Namen eintippen, siehe
      [Schritt 2 - WLAN](../use/index.md#schritt-2-wlan)
    - Bei der Einrichtung näher an den Router gehen

??? question "Backend von der Waage aus nicht erreichbar"
    - Prüfen, ob das Backend läuft und von einem anderen Gerät im Netz erreichbar
      ist
    - Die IP-Adresse benutzen, nicht den Hostnamen
    - Port prüfen - üblich sind Spoolman 7912, FilaMan 8083, BamBuddy 8000.
      Ohne Port geht die Anfrage an Port 80
    - Prüfen, ob beide Geräte im selben Netz hängen

---

## Firmware

??? question "Gerät taucht im Web-Flasher nicht auf"
    - Ein USB-C-Kabel mit Datenadern nehmen (viele können nur laden)
    - Anderen USB-Port oder anderen Rechner probieren
    - Chrome oder Edge benutzen - Firefox kann kein WebSerial

??? question "OTA-Update scheitert"
    - WLAN-Verbindung prüfen
    - Nochmal versuchen - der Download von GitHub kann bei langsamer Leitung
      abbrechen
    - Scheitert es weiterhin, über den Web-Flasher oder den Datei-Upload gehen

??? question "Update wird nicht angeboten, oder \"passt nicht mehr\""
    0.8.0 teilt den Speicher der Waage neu auf, und das geht nur über das Kabel.
    Eine Waage mit der alten Aufteilung meldet, dass das Update nicht mehr
    passt, oder der Upload im Browser meldet, dass die Datei größer ist als der
    Speicher dieser Waage. Die Firmware auf dem Gerät ist in Ordnung, nur die
    Speicheraufteilung ist zu klein.

    - Einmal per USB aktualisieren: den
      [Web-Flasher](https://niko11111.github.io/SpoolmanScale/) in Chrome oder
      Edge öffnen, die Waage anschließen und **Update** wählen. Das dauert etwa
      2 Minuten, alle Einstellungen bleiben erhalten
    - Bietet der Flasher "Install" statt "Update" an, das Häkchen bei "Erase"
      nicht setzen, sonst sind WLAN und Kalibrierung weg
    - Danach kommen Updates wieder wie gewohnt drahtlos. Details unter
      [Firmware aktualisieren](../use/updating.md)

??? question "Nach dem Flashen bleibt die Anzeige dunkel"
    - Über den Web-Flasher neu flashen

??? question "Ein Log oder einen Fehlerbericht schicken"
    - In der Weboberfläche die Seite **Logs** öffnen. Dafür muss der Schalter
      [Wartung](../use/web.md#die-drei-schalter) an sein
    - **Umfang** auf **Ausführlich** stellen und wiederholen, was schiefging
    - Keine SD-Karte? **Protokoll schreiben** auf **Intern** stellen. Der
      interne Speicher fasst 4.096 Zeilen, das sind im Umfang "Ausführlich"
      mehrere Stunden
    - Das Log mit **Speichern** herunterladen und auf
      [Discord](https://discord.gg/xadskCrPFu) oder in ein
      [GitHub-Issue](https://github.com/Niko11111/SpoolmanScale/issues)
      stellen, zusammen mit der Firmware-Version und dem Backend, das du nutzt

---

!!! tip "Kommst du nicht weiter?"
    Komm in den [Discord](https://discord.gg/xadskCrPFu) - dort hilft die
    Community gern.
