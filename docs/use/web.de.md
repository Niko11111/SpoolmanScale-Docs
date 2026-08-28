# Die Weboberfläche

Alles, was das Gerät kann, im Browser - für v0.7.0 komplett neu gebaut, als
einzelne Seiten statt einer langen Liste, zweisprachig und auf dem Handy so
brauchbar wie am Rechner.

Erreichbar unter **`http://spoolmanscale.local`** oder der IP-Adresse des
Geräts. Einschalten unter **Einstellungen → System → Weboberfläche**.

!!! tip "Keine IP-Adresse zu merken"
    Die Waage meldet sich per mDNS als `spoolmanscale.local`. Löst dein Netz
    oder dein Browser das nicht auf, geht die IP weiterhin - sie steht unter
    **Einstellungen → Verbindung → WLAN Status**.

---

## Die drei Schalter

Der Zugang ist nicht alles-oder-nichts. Drei Schalter unter
**Einstellungen → System → Weboberfläche** entscheiden, wie viel ausgeliefert
wird:

| Schalter | Liefert | Voreinstellung |
|---|---|---|
| **Webserver** | der Hauptschalter. Aus antwortet Port 80 nicht mehr. | aus |
| **Einstellungen** | Listenlimits, Trocknung, Anzeige, Backend-Zugangsdaten | aus |
| **Wartung** | Firmware, Logs, Tags, Neustart | aus |

!!! warning "Standardmäßig aus, und das mit Grund"
    **Einstellungen** ändert das Verhalten der Waage und **Wartung** schreibt
    Firmware und NFC-Tags - beides ohne Passwort. Sie bleiben aus, bis du sie
    einschaltest. Schalte sie ein, wenn du sie brauchst, in einem Netz, dem du
    traust.

!!! note "Eine Ausnahme vom Hauptschalter"
    Ist FilaMan eingerichtet und ein Geräte-Token hinterlegt, bleibt FilaMans
    eigener Tag-Auslöser auch bei ausgeschaltetem Webserver erreichbar. Er
    steuert die Waage von der Serverseite und würde sonst stillschweigend
    ausfallen. Sonst antwortet nichts.

---

## Die Seiten

| Seite | Was sie tut | Braucht |
|---|---|---|
| **Status** | Live-Gewicht, aufliegende Spule, WLAN, Backend, Diagnose | Webserver |
| **Backend** | Backend umschalten, Adressen und Zugangsdaten eintragen | Einstellungen |
| **Trocknung** | Modi der Trocknungserinnerung und Intervalle je Material | Einstellungen |
| **Tags schreiben** | Tag lesen, mit dem Bestand vergleichen, beschreiben | Wartung |
| **Einstellungen** | Listenlimits, Anzeige, Gerätename, Zeitzone | Einstellungen |
| **Logs** | Log ansehen, mitlaufen lassen, sortieren, kopieren, löschen | Wartung |
| **Firmware** | GitHub prüfen, Release Notes lesen, installieren oder Datei hochladen | Wartung |

Eine Seite, auf die du keinen Zugriff hast, taucht in der Leiste gar nicht erst
auf, und ihre `/api/*`-Routen antworten mit 403, statt still nichts zu tun.

---

## Tags schreiben

Die Seite, für die sich der Weg lohnt. Sie zeigt **beide Seiten nebeneinander** -
was jetzt auf dem Tag steht und was aus deinem Bestand draufkäme - mit farbig
markierten Unterschieden, und du wählst das Format:

| Format | Für |
|---|---|
| **OpenSpool** | das, was die Filament-Manager lesen |
| **FilaMan** | derselbe Datensatz unter FilaMans eigenem Namen |
| **Anycubic ACE** | den Drucker selbst, der es direkt liest |
| **Leeren** | Tag zurück auf null |

Ausführlich unter [NFC-Tags](tags.md).

!!! info "Geschrieben wird am Gerät"
    Eine Anfrage aus dem Browser fasst den NFC-Bus nicht an. Sie parkt den
    Auftrag, und die Waage führt ihn beim nächsten Durchlauf aus. Der Tag muss
    also auf dem Leser liegen.

---

## Firmware-Update

Die Waage prüft selbst auf GitHub, zeigt dir die Release Notes, fragt vor dem
Schreiben und meldet, wie weit sie ist. Du kannst auch eine `.bin` von Hand
hochladen. Siehe [Firmware aktualisieren](updating.md).

---

## Einstellungen an beiden Orten

Was am Gerät geht, geht im Browser, und beide zeigen denselben Stand. Es gibt
keine getrennte "Web-Konfiguration", die man nachziehen müsste.
