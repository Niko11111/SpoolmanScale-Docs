# FAQ

The questions that come up again and again, on Discord and on MakerWorld.

---

## Building and hardware

### My scale or NFC reader does not work. Where do I start?

With the hardware, in this order. Almost every report so far came down to one of
these three, and not once was it the firmware:

1. **The DIP switches on the PN532.** They are the most common cause by far.
   See [the next question](#how-do-i-set-the-dip-switches-on-the-pn532).
2. **The cables and plugs.** A plug that is not fully seated, a cold solder
   joint, two wires swapped. See
   [how to check the wiring](#how-do-i-know-my-wiring-is-right).
3. **A faulty part.** When everything above is right and it still does not
   work, it has almost always been a defective module. See
   [I have checked everything](#i-have-checked-everything-and-it-still-does-not-work).

The scale checks itself on every start and says in the status bar what it
found. Each message, with the likely cause, is under
[What the scale is telling you](index.md).

---

### How do I set the DIP switches on the PN532?

The PN532 has to run in **I2C mode**: **SW1 = ON**, **SW2 = OFF**. In any other
position it does not answer on the bus at all, and the scale reports the NFC
reader as missing.

- Look closely: the switches are tiny, and one **resting halfway** between the
  two positions is the classic case. Push each one firmly all the way.
- Set them **before** soldering and assembly if you can. Details and photos on
  [The parts in detail](../build/parts.md#pn532-nfc-reader).
- The module only reads the switches when it powers up. After changing them,
  unplug the scale completely and plug it in again.

---

### How do I know my wiring is right?

- **Plugs fully seated.** The small JST connectors need a firm push until they
  click. Half-seated plugs are behind many "it worked yesterday" reports.
- **Solder joints checked while the plug is in.** A cold joint can measure fine
  on the bench and open as soon as the cable is under strain.
- **Nothing swapped:** SDA on pin 3, SCL on pin 4, GND on pin 2, 5V on pin 1.
  Every pin is in the [Wiring](../build/wiring.md) tables.
- **PN532 straight to the WT32**, not through the NAU7802's second STEMMA QT
  socket: that one only carries 3.3V, and the PN532 needs 5V.
- **Look at the boot line.** On every start the scale logs which chips answer on
  the bus: `I2C_EXT scan: 0x24 PN532, 0x2A NAU7802` is what you want to see. You
  find it in the serial monitor (115200 baud) or on the **Logs** page of the web
  interface. A missing address points straight at that module's cable.

---

### I have checked everything and it still does not work

Then the most likely cause is a **faulty part**. The modules are cheap, and a
bad one in a batch happens: a PN532 that answers on the bus but never reads a
tag, a NAU7802 whose readings drift, a load cell that does not settle.

Swapping the suspicious module is usually quicker than hunting further. If you
have a second one, try it. If you are still stuck, ask on
[Discord](https://discord.gg/xadskCrPFu) and bring the boot line from the log;
it tells us a lot.

---

### Which parts should I buy?

The full list with links is in the [Bill of materials](../build/bom.md).

Prefer everything in one cart? A community member put together an AliExpress
list with parts that work well too:
👉 [SpoolmanScale parts list on AliExpress](https://www.aliexpress.com/p/wish-manage/share.html?spm=a2g0o.cart.headerAcount.6.321738dayZTIa0&wishGroupId=800000022363334&smbPageCode=wishlist-amp&spreadId=E95BDFF0E1B4367408F1423D8C0ABF206981C084C10F93E3EE124B0AFA678D69)

---

### Do I need a Raspberry Pi?

No. SpoolmanScale is a standalone device. It needs a filament manager somewhere
on your network - [Spoolman, FilaMan or BamBuddy](../use/backends.md) - and that
can run anywhere: a NAS, a server, an existing Pi, a Docker host.

[SpoolmanScale Pro](../pro/index.md) is the version that brings its own Pi so
you do not need one already.

---

### Does it work without a load cell?

Yes. Switch off **Settings → Scale → Scale fitted** and restart. The device
then works as a pure tag terminal: it reads, links and writes tags and sets
locations, and the weights leave the screen.

---

## Tags

### Do I have to write anything to my tags?

No. The scale identifies a spool by the tag's **factory UID**, and the link
between UID and spool lives in your inventory.

Writing tags is optional - useful if you want other readers, or an Anycubic ACE,
to understand the tag too. See [NFC tags](../use/tags.md).

---

### Which tags should I buy?

**NTAG215** if you want the scale to write them. NTAG213 reads perfectly but its
144 bytes are too small to hold a record. MIFARE Classic cards work too, by
their UID.

Full detail and the compatibility table on [NFC tags](../use/tags.md).

---

### Can I use my Bambu Lab spools?

Yes. Bambu's own tags are read and decrypted. They are never written - that is
deliberate.

---

### Can a spool have two tags?

Yes, one on each side, so the spool is found whichever way round it lies. Right
after linking, the scale asks for the second one. See
[NFC tags](../use/tags.md#a-second-tag-per-spool).

---

### What about Snapmaker, Creality or Prusa tags?

**Snapmaker** tags can be read (an option in the web settings), **Creality**
tags by their UID. **Prusa's OpenPrintTag** uses a radio standard the PN532
cannot read.

---

### Why is my tag read unreliably?

Most often because it is **too close** to the reader, which is the opposite of
what people expect. Add 5 to 20 mm of distance before replacing the tag. The
physics behind it is on [NFC tags](../use/tags.md#positioning-closer-is-not-better).

---

## Everyday use

### Can I switch backends later?

Yes, any time, and your entries for the others are kept. The display clears and
the spool on the pad is looked up again at the new backend.

---

### Why does it say six digits instead of grams?

The scale has never been calibrated, so it is showing the converter's raw value.
That is normal on a new build. See
[Scale not calibrated](index.md#scale-not-calibrated).

---

### Is it accurate enough?

A 24 bit ADC on a 2 kg cell resolves far below a gram. What limits you in
practice is the reference weight you calibrated with, so use a good one.
Readings are shown and stored as whole grams.

---

### Can I use 5 GHz WiFi?

No. The ESP32-S3 has a 2.4 GHz radio only, and a 5 GHz network will not even
appear in the scan.

---

### Do I have to type my WiFi password on the scale?

No. The web flasher asks for it right after flashing, and on the scale
**Set up by phone** lets you enter it on your phone instead. Typing it on the
touchscreen still works, with every character. See
[Step 2 - WiFi](../use/index.md#step-2-wifi).

---

### Does it need the internet?

No. Everything runs on your own network, with no cloud, no account and no
subscription. Only two things reach outside when there is internet: the clock is
set from a public time server, and once a day the scale asks GitHub whether
there is a new firmware. That check can be switched off with **Auto check** on
the firmware update screen.

---

### Can two people use the web interface at once?

It is a small embedded web server on a microcontroller. It works, but it is
built for one person at a time. The settings and maintenance areas are
[off by default](../use/web.md#the-three-switches), and you can protect them with
a password (4 to 8 digits).

---

### Which label printer can I use?

For now the **Phomemo M220** over Bluetooth, as a first version marked beta.
More printers are planned. See [Bluetooth & labels](../use/labels.md).

---

## Updates and bug reports

### Why does 0.8.0 need the USB cable once?

0.8.0 divides the scale's memory anew, which only works over the cable. It is a
one-time step for scales coming from 0.7.x, all settings are kept. See
[Updating the firmware](../use/updating.md).

---

### How do I send a useful bug report?

Open the **Logs** page in the web interface and set the scope to **Verbose**,
then repeat what went wrong. Download the log and post it on
[Discord](https://discord.gg/xadskCrPFu) or in a
[GitHub issue](https://github.com/Niko11111/SpoolmanScale/issues), together
with the firmware version and which backend you use. No SD card needed: the log
can live in the scale's internal memory.
