# Flashing & First Setup

Getting firmware onto a fresh device, and walking through the setup wizard.
Budget about 20 minutes.

---

## First flash - the web flasher

The very first flash has to happen over USB. It works in any Chrome-based
browser (Chrome, Edge, Brave), with nothing to install.

1. Connect the WT32-SC01 Plus to your computer with a USB-C cable
2. Open **[niko11111.github.io/SpoolmanScale](https://niko11111.github.io/SpoolmanScale)**
3. Click **Flash Latest**
4. Pick the serial port of your device
5. Wait about 60 seconds

!!! warning "It has to be a data cable"
    Many USB-C cables carry power only. If no serial port shows up, that is the
    first thing to swap.

!!! note "Chrome, not Firefox"
    The flasher uses the WebSerial API. Firefox does not implement it.

Every later update runs on the device itself or from your browser over the
network. See [Updating the firmware](updating.md) - you will not need the cable
again.

---

## Step 1 - Language

**English** or **German**. Changeable later under **Settings → System → Language**.

---

## Step 2 - WiFi

1. Tap **Scan networks**
2. Pick yours from the list
3. Type the password
4. Tap **Connect**

!!! note "2.4 GHz only"
    The ESP32-S3 has no 5 GHz radio. A 5 GHz network will not appear in the
    scan at all, which looks like the network is missing rather than
    unsupported.

---

## Step 3 - Pick a backend

SpoolmanScale talks to three filament managers. Pick one now, change it any
time under **Settings → Connection** or from the
[web interface](web.md) - your entries for the others are kept.

=== "Spoolman"

    Address and port, nothing else. There are no credentials to enter.

    | Field | Example |
    |---|---|
    | Host | `192.168.1.100` |
    | Port | `7912` |

=== "FilaMan"

    FilaMan needs **two** separate credentials, because it has no per-device
    permissions: a device token for reading and reporting weight, and an API
    key for everything that writes.

    | Field | Where it comes from |
    |---|---|
    | Host | `192.168.1.100:8002` |
    | Device token | Register the 6 character code the scale shows |
    | API key | Created by you in the FilaMan UI |

=== "BamBuddy"

    A single API key, sent as `X-API-Key`. Create it in BamBuddy under
    **Settings → API Keys** with **Read Status** and **Manage Inventory**.

    The key is **optional**: a BamBuddy instance with authentication switched
    off answers without one.

    | Field | Example |
    |---|---|
    | Host | `192.168.1.100:8000` |
    | API key | optional |

Tap **Test connection** before moving on.

---

## Step 4 - Where the tag UID is stored

!!! info "Spoolman only"
    FilaMan and BamBuddy keep tag identifiers themselves. This step does not
    apply to them.

SpoolmanScale stores the UID of an NFC tag in a Spoolman extra field, and you
choose which one:

| Field | Use it when |
|---|---|
| `tag` | Nothing else reads your tags. The default. |
| `nfc_id` | Another tool in your setup already uses this name |
| `card_uids` | You want several tags on one spool |

A second extra field, `last_dried`, holds the drying date. On first connect the
scale checks whether the fields exist and offers to create them for you.

!!! tip "If the fields will not create"
    Make a test field by hand in Spoolman under **Settings → Extra fields**.
    If that fails too, the problem is the Spoolman connection, not the scale.

The UID is written as **plain hex** (`04B9E542447080`), the same way every other
tool around Spoolman writes it. Spools linked by an older firmware, which used
colons, are still found and get rewritten once on their first scan.

---

## Step 5 - Calibrate

A scale that has never been calibrated shows the converter's raw value, not
grams - a six digit number that drifts by hundreds on its own. That is expected
on a new build, and the scale says so in the status bar.

1. **Settings → Scale → Calibration**
2. Clear the platform, tap **Tare**, wait for 0
3. Put on a weight you know precisely, ideally around 1000 g
4. Type that weight in grams
5. Tap **Calculate** and save

!!! tip "The reference weight sets the ceiling"
    A full spool checked on a kitchen scale is plenty. Whatever error is in
    your reference weight is baked into every measurement afterwards.

Details and the finer points in [Weighing & calibration](weighing.md).

---

## Done

You land on the [main screen](main-screen.md). Put a spool on it and the display
wakes up by itself.
