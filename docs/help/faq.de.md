# FAQ

---

## Brauche ich einen Raspberry Pi?

Nein. SpoolmanScale ist ein eigenständiges Gerät. Es braucht irgendwo im Netz
eine Filamentverwaltung - [Spoolman, FilaMan oder BamBuddy](../use/backends.md) -
und die kann überall laufen: auf einem NAS, einem Server, einem vorhandenen Pi,
einem Docker-Host.

[SpoolmanScale Pro](../pro/index.md) ist die Variante, die ihren eigenen Pi
mitbringt, damit du keinen haben musst.

---

## Braucht es Internet?

Nein. Alles läuft im eigenen Netz. Die einzige Verbindung nach außen ist die
Update-Prüfung bei GitHub, und die passiert nur, wenn du sie anstößt.

Keine Cloud, kein Konto, kein Abo.

---

## Muss ich meine Tags beschreiben?

Nein. Die Waage erkennt eine Spule an der **Werks-UID** des Tags, und die
Verbindung zwischen UID und Spule liegt in deinem Bestand.

Tags zu beschreiben ist optional und neu in v0.7.0 - nützlich, wenn auch andere
Leser oder eine Anycubic ACE den Tag verstehen sollen. Siehe
[NFC-Tags](../use/tags.md).

---

## Welche Tags soll ich kaufen?

**NTAG215**, wenn die Waage sie beschreiben soll. NTAG213 wird einwandfrei
gelesen, aber seine 144 Byte sind zu klein für einen Datensatz.

Ausführlich mit Kompatibilitätstabelle unter [NFC-Tags](../use/tags.md).

---

## Kann ich meine Bambu-Lab-Spulen benutzen?

Ja. Bambus eigene Tags werden gelesen und entschlüsselt. Beschrieben werden sie
nie - das ist Absicht.

---

## Kann ich das Backend später wechseln?

Ja, jederzeit, und deine Eingaben für die anderen bleiben erhalten. Die Anzeige
wird geleert und die aufliegende Spule beim neuen Backend neu abgefragt.

---

## Warum stehen da sechs Ziffern statt Gramm?

Die Waage ist nie kalibriert worden und zeigt deshalb den Rohwert des Wandlers.
Bei einem frischen Aufbau ist das normal. Siehe
[Waage nicht kalibriert](index.md#waage-nicht-kalibriert).

---

## Warum wird mein Tag unzuverlässig gelesen?

Meistens, weil er dem Leser **zu nah** ist - genau umgekehrt, als man erwartet.
Gib ihm 5 bis 20 mm Abstand, bevor du ihn tauschst. Die Physik dahinter steht
unter [NFC-Tags](../use/tags.md#position-naher-ist-nicht-besser).

---

## Geht 5-GHz-WLAN?

Nein. Der ESP32-S3 hat nur ein 2,4-GHz-Funkteil, und ein 5-GHz-Netz taucht in
der Suche nicht einmal auf.

---

## Können zwei Leute gleichzeitig in die Weboberfläche?

Es ist ein kleiner eingebetteter Webserver auf einem Mikrocontroller. Es
funktioniert, ist aber für eine Person zur Zeit gebaut, und es gibt **kein
Passwort** - deshalb sind die Bereiche Einstellungen und Wartung
[standardmäßig aus](../use/web.md#die-drei-schalter).

---

## Ist sie genau genug?

Ein 24-Bit-ADC an einer 2-kg-Zelle löst weit unter einem Gramm auf. Was dich in
der Praxis begrenzt, ist das Referenzgewicht, mit dem du kalibriert hast - nimm
also ein gutes. Angezeigt und gespeichert wird in ganzen Gramm.
