# PN532-Reset nachrüsten

Nur für Waagen, die **vor September 2026** gebaut wurden. Wer nach der aktuellen
[Bauanleitung](../build/index.md) baut, hat den Draht schon richtig.

**Musst du das machen?** Nein. Der Leser kam auch ohne Reset immer sauber hoch,
und eine Waage, die nie umgelötet wird, verhält sich genau wie bisher. Die Waage
schlägt den Umbau nur Geräten vor, bei denen der Leser sich wirklich schon
einmal festgefahren hat.

---

## Was falsch war

Alle Bauanleitungen bis August 2026 führten den Reset-Draht (Pin 7) auf die
falsche Leiste des PN532. Dort liegt ein **Ausgang** des Moduls, nicht sein
Reset-Eingang. Der Reset hat an diesen Waagen also nie gewirkt.

## Umlöten

Löte den Draht von Pin 7 auf **RSTPDN**, den letzten Pin der beschrifteten
10-poligen Reihe (AUX1, AUX2, DBGRXD, DBGTXD, INT0, INT1, SIGCLK, SIGOUT, SIGIN,
RSTPDN). Liegt die Platine wie auf dem Foto, ist es der unterste.

![PN532 von hinten: der orange Draht auf RSTPDN](../assets/images/pn532_rstpdn.jpg){ width="400" }

## Prüfen

1. **Einstellungen → System → NFC-Reset prüfen**
2. **Reset-Leitung sitzt:** In der Zeile steht *Leitung geprüft, aktiv*. Ab dem
   nächsten Start macht die Waage einen echten Hardware-Reset.
3. **Keine Wirkung:** Der Draht liegt noch auf dem alten Pad, oder die Lötstelle
   hat keinen Kontakt. Die Waage arbeitet weiter wie bisher.

Der Test ist für jede Waage sicher: Er zieht die Leitung nur kurz auf Masse und
treibt sie nie.

??? more "Was der Reset bringt"
    Fährt sich der PN532 fest, ist ein Hardware-Reset das stärkste Mittel. Ohne
    ihn kann die Waage den Leser nur über I2C neu ansprechen. Das reicht in den
    meisten Fällen, aber nicht in allen.

    Der Test zieht die Leitung fünf Millisekunden auf Masse und schaut, ob der
    Leser das merkt. Er arbeitet mit offenem Kollektor, senkt also nur und
    treibt nie. Auf einer Waage mit der alten Verdrahtung kann er dem Ausgang
    des Moduls deshalb nichts entgegensetzen.
