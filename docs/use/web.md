# The web interface

Everything the device can do, in a browser - rebuilt for v0.7.0 as separate
pages instead of one long list, in both languages, and as usable on a phone as
on a desktop.

Reach it at **`http://spoolmanscale.local`** or the device's IP address. Switch
it on under **Settings → System → Web interface**.

!!! tip "No IP address to remember"
    The scale announces itself over mDNS as `spoolmanscale.local`. If your
    network or browser does not resolve that, the IP still works - it is shown
    on **Settings → Connection → WiFi status**.

---

## The three switches

Access is not all-or-nothing. Three switches under
**Settings → System → Web interface** decide how much is served:

| Switch | Serves | Default |
|---|---|---|
| **Web server** | the master switch. Off, port 80 stops answering. | off |
| **Settings** | list limits, drying, display, backend credentials | off |
| **Maintenance** | firmware, logs, tags, restart | off |

!!! warning "Off by default, and for a reason"
    **Settings** changes how the scale behaves and **Maintenance** writes
    firmware and NFC tags - both without a password. They are off until you turn
    them on. Turn them on when you need them, on a network you trust.

!!! note "One exception to the master switch"
    With FilaMan configured and a device token stored, FilaMan's own tag trigger
    stays reachable even with the web server switched off. It drives the scale
    from the server side and would break silently otherwise. Nothing else
    answers.

---

## The pages

| Page | What it does | Needs |
|---|---|---|
| **Status** | live weight, the spool on the pad, WiFi, backend, diagnosis | web server |
| **Backend** | switch backend, enter addresses and credentials | Settings |
| **Drying** | drying reminder modes and per-material intervals | Settings |
| **Write tags** | read a tag, compare it against your inventory, write it | Maintenance |
| **Settings** | list limits, display, device name, timezone | Settings |
| **Logs** | read the log, follow it live, sort it, copy it, clear it | Maintenance |
| **Firmware** | check GitHub, read release notes, install, or upload a file | Maintenance |

A page you do not have access to is not shown in the tab strip, and its
`/api/*` routes answer 403 rather than quietly doing nothing.

---

## Write tags

The page worth coming here for. It shows **both sides next to each other** -
what is on the tag now, and what would go on it from your inventory - with the
differences highlighted, and you pick the format:

| Format | For |
|---|---|
| **OpenSpool** | what the filament managers read |
| **FilaMan** | the same record under FilaMan's own name |
| **Anycubic ACE** | the printer itself, which reads it directly |
| **Erase** | tag back to empty |

Full detail in [NFC tags](tags.md).

!!! info "The write happens on the device"
    A browser request does not touch the NFC bus. It parks the job, and the
    scale carries it out on its next pass. So the tag has to be on the reader.

---

## Firmware updates

The scale checks GitHub itself, shows you the release notes, asks before writing
anything and reports how far it got. You can also upload a `.bin` by hand. See
[Updating the firmware](updating.md).

---

## Settings in both places

What works on the device works in the browser, and both show the same state.
There is no separate "web configuration" to keep in step.
