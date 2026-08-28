# FAQ

---

## Do I need a Raspberry Pi?

No. SpoolmanScale is a standalone device. It needs a filament manager somewhere
on your network - [Spoolman, FilaMan or BamBuddy](../use/backends.md) - and that
can run anywhere: a NAS, a server, an existing Pi, a Docker host.

[SpoolmanScale Pro](../pro/index.md) is the version that brings its own Pi so
you do not need one already.

---

## Does it need the internet?

No. Everything runs on your own network. The only outbound connection is the
firmware update check against GitHub, and that only happens when you ask for it.

No cloud, no account, no subscription.

---

## Do I have to write anything to my tags?

No. The scale identifies a spool by the tag's **factory UID**, and the link
between UID and spool lives in your inventory.

Writing tags is optional and new in v0.7.0 - useful if you want other readers,
or an Anycubic ACE, to understand the tag too. See [NFC tags](../use/tags.md).

---

## Which tags should I buy?

**NTAG215** if you want the scale to write them. NTAG213 reads perfectly but its
144 bytes are too small to hold a record.

Full detail and the compatibility table on [NFC tags](../use/tags.md).

---

## Can I use my Bambu Lab spools?

Yes. Bambu's own tags are read and decrypted. They are never written - that is
deliberate.

---

## Can I switch backends later?

Yes, any time, and your entries for the others are kept. The display clears and
the spool on the pad is looked up again at the new backend.

---

## Why does it say six digits instead of grams?

The scale has never been calibrated, so it is showing the converter's raw value.
That is normal on a new build. See
[Scale not calibrated](index.md#scale-not-calibrated).

---

## Why is my tag read unreliably?

Most often because it is **too close** to the reader, which is the opposite of
what people expect. Add 5 to 20 mm of distance before replacing the tag. The
physics behind it is on [NFC tags](../use/tags.md#positioning-closer-is-not-better).

---

## Can I use 5 GHz WiFi?

No. The ESP32-S3 has a 2.4 GHz radio only, and a 5 GHz network will not even
appear in the scan.

---

## Can two people use the web interface at once?

It is a small embedded web server on a microcontroller. It works, but it is
built for one person at a time, and there is **no password** - which is why the
settings and maintenance areas are
[off by default](../use/web.md#the-three-switches).

---

## Is it accurate enough?

A 24 bit ADC on a 2 kg cell resolves far below a gram. What limits you in
practice is the reference weight you calibrated with, so use a good one.
Readings are shown and stored as whole grams.
