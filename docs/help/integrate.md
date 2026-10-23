# Integrating a server

This page is for developers. If you only use the scale, skip it: the three
built-in backends are described under [Backends](../use/backends.md).

SpoolmanScale talks HTTP to the servers the user enters: a server on the
user's own network, as with Spoolman, FilaMan and BamBuddy, or an online
service over HTTPS. What it sends and
what it expects back is written down in one public specification, so another
inventory system or a printer bridge can serve the scale without a driver of
its own in the firmware:

👉 **[github.com/Niko11111/SpoolmanScale-Integration](https://github.com/Niko11111/SpoolmanScale-Integration)**

---

## Two parts

| You build | Implement | Status |
|---|---|---|
| a filament inventory | **Part 1: Inventory**, a subset of the Spoolman 0.27 REST API | version 1, firmware 0.8.2 and later |
| a bridge that knows the printer and its AMS | **Part 2: AMS source**, SpoolmanScale's own small API | draft, binding with the firmware release that uses it |

The user picks the **Spoolman** backend on the scale, enters your address and,
if your server needs one, a key on the backend page of the
[web interface](../use/web.md). Nothing else changes on the scale: a server
that speaks Part 1 looks like Spoolman to it.

---

## Check your server

The repository ships a checker that runs the specification's checklist against
a server. Python 3.9 or later, nothing to install:

```bash
git clone https://github.com/Niko11111/SpoolmanScale-Integration.git
cd SpoolmanScale-Integration
python3 check/check_inventory.py http://your-server:7912
```

Green means the scale will work against it. Add `--write --spool A --spool-b B`
to run the writes too, on two spools you can spare: weight, location and tags
are put back afterwards, `last_used` moves to now, and a maker "SpoolmanScale
check" with a filament and a spool is created and deleted again.

---

## Partner servers

Compatible is enough: every scale can use your server without anyone's
permission. If you want more, a partner server gets its own entry on the
scale next to Spoolman, FilaMan and BamBuddy, your colours, a page in this
manual, a test before every firmware release and a direct line with
priority. What that involves and how to start:
**[Partner servers](https://github.com/Niko11111/SpoolmanScale-Integration/blob/main/PARTNERS.md)**.

---

## The rules in short

- Serve `/api/v1/...` directly. The scale follows no redirects and sends no
  cookies and no CSRF token.
- A key travels in a header (`X-API-Key`, `Authorization: Bearer` or HTTP
  Basic) and is bound to the address it was entered for. A wrong key is a
  `401` or `403`, which the scale reports as a rejected key.
- Ids are integers, weights are numbers, dates are ISO 8601 in UTC with `Z`.
  Unknown fields are ignored on both sides.
- Each part has its own version. A breaking change gets a new version and a
  changelog entry, and the scale keeps working against the previous version
  for at least one firmware release.

Questions and corrections: open an issue in the
[specification repository](https://github.com/Niko11111/SpoolmanScale-Integration/issues).
