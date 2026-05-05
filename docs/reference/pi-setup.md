# Pi Setup

This guide walks you through setting up the SpoolmanScale Pro Pi stack from scratch. If you're not comfortable with the terminal, join the [Discord](https://discord.gg/GzQzGa5pBG) — the community is happy to help.

!!! note "For makers"
    This guide is for people who want to build and set up the Pro stack themselves. A pre-built version may become available in the future.

---

## What you need

- Raspberry Pi (Zero 2W, 3, 4 or 5)
- microSD card (16 GB+)
- Raspberry Pi Imager ([download here](https://www.raspberrypi.com/software/))
- A computer to flash the SD card

---

## Step 1 — Flash Pi OS

Open Raspberry Pi Imager and select:

- **OS:** Raspberry Pi OS Lite (64-bit)
- **Storage:** your microSD card

Click the ⚙️ settings icon and configure:

| Setting | Value |
|---|---|
| Hostname | `spoolmanscale` |
| SSH | Enable, use password authentication |
| Username | `pi` |
| WiFi | Your network (2.4 GHz only — Pi Zero 2W has no 5 GHz) |
| Locale | Your region |

Flash and insert the SD card into the Pi.

---

## Step 2 — Connect via SSH

Wait ~60 seconds after first boot, then:

```bash
ssh pi@spoolmanscale.local
```

If that doesn't work, use the Pi's IP address instead.

---

## Step 3 — Optional: Passwordless sudo

Makes the following steps easier:

```bash
echo "pi ALL=(ALL) NOPASSWD:ALL" | sudo tee /etc/sudoers.d/010_pi-nopasswd
sudo chmod 440 /etc/sudoers.d/010_pi-nopasswd
```

---

## Step 4 — Save RAM (headless setup)

Reduces GPU memory usage by ~48 MB — useful on Pi Zero 2W:

```bash
echo "gpu_mem=16" | sudo tee -a /boot/firmware/config.txt
sudo reboot
```

Reconnect via SSH after reboot.

---

## Step 5 — Install Docker

```bash
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker pi
```

Then log out and back in:

```bash
exit
ssh pi@spoolmanscale.local
```

Verify:

```bash
docker --version
docker compose version
```

---

## Step 6 — Install SpoolmanScale Pro

```bash
mkdir -p ~/spoolmanscale
cd ~/spoolmanscale
git clone https://github.com/Niko11111/SpoolmanScalePro-Pi.git .
chmod +x switch-backend.sh auto-backup.sh
docker compose pull
docker compose up -d
```

---

## Step 7 — Auto-start on Boot

```bash
sudo nano /etc/systemd/system/spoolmanscale-backend.service
```

Paste the following:

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

Save with **Ctrl+O**, exit with **Ctrl+X**, then enable:

```bash
sudo systemctl daemon-reload
sudo systemctl enable spoolmanscale-backend.service
```

---

## Step 8 — Open the Web UI

Open in your browser:

```
http://spoolmanscale.local
```

From there, activate Spoolman or FilaMan — it downloads automatically on first use.

!!! tip "First login for FilaMan"
    Default credentials: `admin@example.com` / `admin123` — change immediately after first login.

---

## Done!

Your Pi is now running SpoolmanScale Pro. See the [Web UI](flask-ui.md) page for what you can do from the management interface.
