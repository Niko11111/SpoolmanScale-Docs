# Den Pi einrichten

Von der leeren SD-Karte bis zur Waage, die mit dem Pi umschaltet, in vier
Schritten.

---

## 1. Raspberry Pi OS

Flashe **Raspberry Pi OS Lite (64-bit)** mit dem Raspberry Pi Imager. In
seinen Einstellungen:

| Einstellung | Wert |
|---|---|
| Hostname | `raspberrypi` lassen; der Installer benennt ihn in `spoolmanscale-pro` um |
| SSH | an |
| WLAN | dein Netz, oder ein Kabel einstecken |

!!! warning "Nicht `spoolmanscale`"
    Dieser Name gehört der Waage. Zwei Geräte mit einem Namen sind beide
    schlecht erreichbar.

---

## 2. Installieren

Auf dem Pi, mit Internet:

```bash
git clone https://github.com/Niko11111/SpoolmanScalePro-Pi.git
cd SpoolmanScalePro-Pi
sudo scripts/install.sh --pull-all
```

`--pull-all` lädt alle drei Backends gleich herunter, damit jedes später auch
ohne Internet starten kann. Auf einem Pi 3 dauert das eine Weile.

Dann **http://spoolmanscale-pro.local** öffnen und die Anmeldung anlegen:
Benutzername und Passwort, die dein Passwortmanager speichern kann. Ohne
Passwort geht es nach einer Warnung auch, für Netze, denen du vertraust.

---

## 3. Backend wählen

In der **Übersicht** bei Spoolman, FilaMan oder BamBuddy *Aktivieren*
drücken. Die Seite zeigt jeden Schritt: laufendes Backend stoppen, neues
starten, warten, bis es antwortet, Waage umstellen.

!!! tip "FilaMans Zugang"
    Der Pi legt FilaMans Admin an, wenn er FilaMan zum ersten Mal startet.
    E-Mail und Passwort stehen unter *Zugang* auf FilaMans Kachel.

---

## 4. Waage koppeln

1. **An der Waage**, einmal: *Einstellungen → System → Weboberfläche →
   Einstellungen* einschalten. Das ist der einzige Schritt am Gerät; damit
   darf der Pi die Waage einrichten.
2. Im Reiter **Kopplung**: *Im Netz suchen*, deine Waage wählen.
3. *Diesen Pi an der Waage eintragen*: Die Waage schaltet durch die drei
   Backends und bekommt für jedes den Pi als Server. Etwa eine halbe Minute.
4. Mit FilaMan aktiv: *Waage in FilaMan registrieren*. Einen BamBuddy-API-Key
   braucht es nur, wenn BamBuddys eigene Anmeldung an ist; auch den dort
   einfügen.

Ab jetzt nimmt jeder Wechsel in der Übersicht die Waage mit.

---

## Ohne Netz

Der Reiter **Netzwerk** öffnet ein eigenes WLAN des Pi (2,4 GHz, die Waage
hat kein 5 GHz). Waage und Handy verbinden sich damit; der Pi ist unter
`192.168.50.1` erreichbar.

Verbindet sich nach dem Booten 90 Sekunden lang weder WLAN noch Kabel,
öffnet der Pi von selbst **SpoolmanScale-Pro-Setup** (Passwort
`spoolmanscale`). Damit verbinden, `http://192.168.50.1` öffnen und im
Reiter Netzwerk ein WLAN wählen.

---

## Wenn etwas schiefgeht

| | |
|---|---|
| Anmeldung vergessen | `sudo rm /var/lib/spoolmanscale-pro/auth.json`, neu laden, neu anlegen |
| Log des Dienstes | `journalctl -u spoolmanscale-pro -n 100` |
| Log eines Backends | *Log* auf seiner Kachel in der Übersicht |
| Ein Backend neu aufsetzen | im Reiter Backup ein Backup wiederherstellen |
