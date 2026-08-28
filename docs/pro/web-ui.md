# Web UI

The SpoolmanScale Pro includes a built-in management interface accessible from any browser on your network at `http://spoolmanscale.local`.

No app needed - just open the URL.

---

## Backend Tab

Switch between Spoolman and FilaMan, view live status and logs.

| Feature | Description |
|---|---|
| Backend toggle | Switch between Spoolman and FilaMan |
| Status indicator | Shows if the active backend is running |
| Logs | Live log output |
| Update check | Check and install backend updates |
| Parallel mode | Run both simultaneously (Pi 4+ only) |

---

## System Tab

Monitor Pi health and manage system settings.

| Feature | Description |
|---|---|
| RAM / SD / Temp / Uptime | Live system stats |
| Pi OS update | Update system packages |
| UI self-update | Install Web UI updates from GitHub |
| WiFi | Switch network with automatic fallback |
| Reboot / Shutdown | Safely restart or power off |

---

## Backup Tab

| Feature | Description |
|---|---|
| Generate backup | Create a database snapshot on demand |
| Download | Save backup as a file |
| Restore | Upload and restore a previous backup |
| Auto-backup | Daily backups, keeps last 7 |
| Danger zone | Reset / wipe database |

---

## Access

| Method | URL |
|---|---|
| mDNS | `http://spoolmanscale.local` |
| IP | `http://<pi-ip-address>` |

!!! warning "Both the scale and the Pi answer to this name"
    The scale announces itself as `spoolmanscale.local` too. On a Pro, where
    both sit on the same network, whichever answers first wins and the result is
    not predictable. The name belongs to the scale; the Pi will move to its own.
    Until then, use the Pi's IP address if you land on the wrong one.

!!! tip "Can't reach spoolmanscale.local on Windows?"
    Install [Bonjour Print Services](https://support.apple.com/kb/DL999). On macOS and Linux it works out of the box.
