# Raspberry Pi einrichten

Diese Anleitung führt den Pi-Stack der SpoolmanScale Pro von Grund auf ein. Wenn
dir das Terminal nicht liegt, komm in den
[Discord](https://discord.gg/xadskCrPFu) - dort hilft die Community gern.

!!! note "Für Selbstbauer"
    Diese Anleitung richtet sich an alle, die den Pro-Stack selbst aufsetzen
    wollen. Eine fertig aufgebaute Variante könnte es später geben.

---

## Was du brauchst

- Raspberry Pi (Zero 2W, 3, 4 oder 5)
- microSD-Karte (ab 16 GB)
- Raspberry Pi Imager ([hier laden](https://www.raspberrypi.com/software/))
- Einen Rechner zum Beschreiben der Karte

---

## Schritt 1 - Pi OS schreiben

Im Raspberry Pi Imager auswählen:

- **Betriebssystem:** Raspberry Pi OS Lite (64-Bit)
- **Speicher:** deine microSD-Karte

Auf das Zahnrad ⚙️ klicken und einstellen:

| Einstellung | Wert |
|---|---|
| Hostname | `spoolmanscale` |
| SSH | Aktivieren, Passwort-Anmeldung |
| Benutzername | `pi` |
| WLAN | Dein Netz (nur 2,4 GHz - der Pi Zero 2W kann kein 5 GHz) |
| Region | Deine Region |

Schreiben und die Karte in den Pi stecken.

---

## Schritt 2 - Per SSH verbinden

Nach dem ersten Start etwa 60 Sekunden warten, dann:

```bash
ssh pi@spoolmanscale.local
```

Klappt das nicht, nimm stattdessen die IP-Adresse des Pi.

---

## Schritt 3 - Optional: sudo ohne Passwort

Macht die folgenden Schritte bequemer:

```bash
echo "pi ALL=(ALL) NOPASSWD:ALL" | sudo tee /etc/sudoers.d/010_pi-nopasswd
sudo chmod 440 /etc/sudoers.d/010_pi-nopasswd
```

---

## Schritt 4 - RAM sparen (Betrieb ohne Bildschirm)

Spart etwa 48 MB Grafikspeicher, nützlich auf dem Pi Zero 2W:

```bash
echo "gpu_mem=16" | sudo tee -a /boot/firmware/config.txt
sudo reboot
```

Nach dem Neustart per SSH neu verbinden.

---

## Schritt 5 - Docker installieren

```bash
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker pi
```

Danach ab- und wieder anmelden:

```bash
exit
ssh pi@spoolmanscale.local
```

Prüfen:

```bash
docker --version
docker compose version
```

---

## Schritt 6 - SpoolmanScale Pro installieren

```bash
mkdir -p ~/spoolmanscale
cd ~/spoolmanscale
git clone https://github.com/Niko11111/SpoolmanScalePro-Pi.git .
chmod +x switch-backend.sh auto-backup.sh
docker compose pull
docker compose up -d
```

---

## Schritt 7 - Beim Booten starten

```bash
sudo nano /etc/systemd/system/spoolmanscale-backend.service
```

Folgendes einfügen:

```ini
[Unit]
Description=SpoolmanScale Backend Auto-Start
After=docker.service network-online.target
Requires=docker.service
Wants=network-online.target

[Service]
Type=oneshot
RemainAfterExit=yes
User=root
WorkingDirectory=/home/pi/spoolmanscale
ExecStart=/home/pi/spoolmanscale/switch-backend.sh auto

[Install]
WantedBy=multi-user.target
```

Mit **Strg+O** speichern, mit **Strg+X** verlassen, dann aktivieren:

```bash
sudo systemctl daemon-reload
sudo systemctl enable spoolmanscale-backend.service
```

---

## Schritt 8 - Web-UI öffnen

Im Browser aufrufen:

```
http://spoolmanscale.local
```

Dort Spoolman oder FilaMan aktivieren - beim ersten Aufruf wird es automatisch
geladen.

!!! tip "Erste Anmeldung bei FilaMan"
    Standardzugang: `admin@example.com` / `admin123` - direkt nach der ersten
    Anmeldung ändern.

---

## Fertig

Dein Pi fährt jetzt SpoolmanScale Pro. Was du in der Verwaltungsoberfläche tun
kannst, steht unter [Pro Web-UI](web-ui.md).
