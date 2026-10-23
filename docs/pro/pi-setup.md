# Set up the Pi

From an empty SD card to a scale that switches with the Pi, in four steps.

---

## 1. Raspberry Pi OS

Flash **Raspberry Pi OS Lite (64-bit)** with the Raspberry Pi Imager. In its
settings:

| Setting | Value |
|---|---|
| Host name | leave `raspberrypi`; the installer renames it to `spoolmanscale-pro` |
| SSH | on |
| WLAN | your network, or plug in a cable |

!!! warning "Not `spoolmanscale`"
    That name belongs to the scale. Two devices with one name make both
    hard to reach.

---

## 2. Install

On the Pi, with internet:

```bash
git clone https://github.com/Niko11111/SpoolmanScalePro-Pi.git
cd SpoolmanScalePro-Pi
sudo scripts/install.sh --pull-all
```

`--pull-all` downloads all three backends right away, so each one can later
start without internet. That takes a while on a Pi 3.

Then open **http://spoolmanscale-pro.local** and create the login: a user
name and a password, which your password manager can store. Running without
a password is possible after a warning, for networks you trust.

---

## 3. Pick a backend

On the **Overview**, press *Activate* on Spoolman, FilaMan or BamBuddy. The
page shows each step: stop the running backend, start the new one, wait
until it answers, switch the scale.

!!! tip "FilaMan's login"
    The Pi creates FilaMan's admin when it first starts FilaMan. The e-mail
    and password are under *Login* on FilaMan's tile.

---

## 4. Pair the scale

1. **On the scale**, once: *Settings → System → Web interface → Settings* on.
   This is the only step on the device; it lets the Pi configure the scale.
2. On the **Pairing** tab: *Search the network*, pick your scale.
3. *Enter this Pi on the scale*: the scale switches through the three
   backends and gets the Pi as the server of each. About half a minute.
4. With FilaMan active: *Register the scale in FilaMan*. A BamBuddy API key
   is only needed when BamBuddy's own login is on; paste it there too.

From now on every switch on the Overview takes the scale along.

---

## Without a network

The **Network** tab opens a WLAN of the Pi's own (2.4 GHz, the scale has no
5 GHz). Join the scale and your phone to it; the Pi is at `192.168.50.1`.

When neither a WLAN nor a cable connects within 90 seconds of booting, the
Pi opens **SpoolmanScale-Pro-Setup** (password `spoolmanscale`) by itself.
Join it, open `http://192.168.50.1` and pick a WLAN on the Network tab.

---

## If something goes wrong

| | |
|---|---|
| Forgot the login | `sudo rm /var/lib/spoolmanscale-pro/auth.json`, reload, create it again |
| The service's log | `journalctl -u spoolmanscale-pro -n 100` |
| A backend's log | *Log* on its tile on the Overview |
| Start over with a backend | restore a backup on the Backup tab |
