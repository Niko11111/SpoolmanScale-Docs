# Bluetooth & Etiketten

Die Waage kann für die aufliegende Spule ein Etikett drucken, auf einem
Bluetooth-Etikettendrucker. Das Etikett trägt die wichtigsten Angaben und einen
QR-Code, der die Spule in deinem Backend öffnet.

!!! note "Wächst weiter"
    Der Etikettendruck wächst weiter: mehr Drucker und Etikettengrößen und der
    Status des Druckers (Papier, Deckel). Der Etiketten-Editor im Browser ist
    eine erste Version. Ideen und Hilfe sind sehr willkommen, auf
    [Discord oder GitHub](../help/contributing.md).

---

## Den Drucker einrichten

1. **Einstellungen → Verbindung → Bluetooth**, schalte **Bluetooth nutzen** ein.
   Die Waage startet einmal neu. Danach läuft der Funk nur, solange er gebraucht
   wird.
2. Schalte den Drucker ein und tippe auf **Geräte**. Die Waage listet, was in
   Reichweite ist.
3. Tipp auf deinen Drucker und wähle **Als Drucker**.
4. Unter **Drucker** wählst du **Modell** und **Etikett**, dann tippst du auf
   **Testdruck**.

![Bluetooth-Screen](../assets/images/ui/de/22_bluetooth.png)

![Drucker-Screen](../assets/images/ui/de/26_printer.png)

Welche Drucker unterstützt sind, welche zwei wir empfehlen und welche Etiketten
dazu passen, steht unter [Empfohlene Drucker](printers.md). Die Etikettengröße
ist Breite quer zum Druckkopf mal Länge in Laufrichtung, so wie sie auf der
Rolle steht.

---

## Ein Etikett drucken

Leg die Spule auf, tippe auf **Mehr Info** und dann auf **Etikett drucken**.

![Mehr Info mit Etikett drucken](../assets/images/ui/de/27_more_info_print.png)

Eine Karte begleitet den Druck und endet mit der Antwort des Druckers.
**Gesendet** ohne Bestätigung heißt meist: Papier und Deckel prüfen.

Auf dem Etikett stehen Hersteller, Material, Name, Farbe mit Hex-Code, ein Datum
(erste Benutzung oder wann die Spule angelegt wurde), das Backend mit der
Spulen-ID und ein QR-Code, der die Spule in deinem Backend öffnet.

Die Seite **Drucker** der [Weboberfläche](web.md) bietet dieselbe Einrichtung
und den Testdruck.

---

## Danke

Danke an @akira69, dessen Druckerunterstützung in seinem Fork die Grundlage und
der Machbarkeitsnachweis für diese Funktion war.
