# Hardware choices

Why the scale is built the way it is, why not another display or board, and
where the hardware may go next. Nothing here is promised and there are no
dates. Status of 27 October 2026.

Each section has its own link, so you can point to exactly the question that
was asked.

---

## Why this display { #display }

I picked the WT32-SC01 Plus right at the start of the project, because others
had used it for similar builds. It turned out to be a good choice: a small,
tidy device that is about as wide as a spool and does not take up much room
next to your printers. And in the end this is a scale for quickly measuring
filament, not a dashboard.

## Will there be a bigger display? { #bigger-display }

Bigger is not automatically better here, and a bigger screen is not only a
display. Every layout in the firmware is built for 480x320 pixels, a 5" or 7"
panel needs a different controller board behind it, and the case would have to
be redesigned. Larger panels also talk a different protocol that uses many more
pins, and that is where most boards run out of connectors.

So I do not plan to support many display sizes. If a board comes along that
meets [the points below](#next-board), 5" is a size I could stand behind. 7"
does not fit this project.

You are welcome to adapt the open-source firmware to a different display
yourself.

## Why the UI cannot just be scaled { #ui-resolution }

A phone scales its screens for you. This scale cannot. The processor is small
and has little memory, and the UI has to live within it: the screen's picture
alone is 480 x 320 pixels, about 300 KB, and a 800 x 480 panel needs about 770
KB for the same thing. So every layout is built for exactly this screen.

Showing the same UI on a bigger display works like this:

- The new resolution has to be a **whole-number multiple** of 480 x 320 (for
  example 960 x 640), with the same 3:2 shape. Otherwise the picture is
  stretched, or it has black borders, and nobody wants that.
- A blown-up UI is only the first step. It looks coarse and wastes the space.
  To use a bigger display well, the layouts have to change too, and then the
  small and the large version both have to be kept up to date with every new
  feature. That is a lot of work for something a scale does not need.

## What the next board has to do { #next-board }

- RS485 on a connector or an I/O port, and a free I2C bus plus pins for UART
- the USB-C socket not at the very edge of the board, so a cable can enter the
  case in the present mounting position
- a flush glass front with no frame or lip
- more performance than the ESP32-S3, with WiFi and Bluetooth on board
- easy to get from several shops and not from one small maker that is out of
  stock for months, at a fair price
- widely used libraries with plenty of community experience

**Wanted, but not a deal-breaker:**

- **A battery connector with a charger on the board.** This is more than a
  nice-to-have. Several users have built handheld scanners from the project,
  and they are best run on a battery. A board that already has the connector,
  the voltage converter and the charging electronics saves a separate board
  for each of them. It is not a must: a really good board without it would
  still win.
- **The NFC reader's interrupt on a pin that can wake the scale from deep
  sleep**, so that putting a spool on the reader wakes it.
- **A separate power input.** If the USB-C socket sits badly, a second way to
  power the board lets us take only the power from USB-C and feed it in
  elsewhere. To flash the board you would then take it out of the case. That is
  a compromise we could live with, because updates go over WiFi and the cable is
  only needed for the first flash or a recovery.

I have not found a board that meets all of these. Ideas and board tips are
welcome on [Discord](https://discord.gg/K3KmKnrWhP).

## Boards we looked at { #boards }

| Board | Why not (yet) |
|---|---|
| Waveshare ESP32-S3-Touch-LCD-3.5 | Same chip and the same 480x320 panel. What it adds (a battery connector, more PSRAM) does not outweigh testing and supporting a second board. |
| Waveshare ESP32-S3-Touch-LCD-5B (1024x600) | No free GPIO. Its only I2C connector shares the bus with an I/O chip whose addresses collide with the NFC reader's. The UI cannot be scaled cleanly to this size. |
| Waveshare ESP32-P4 touch boards (3.5", 4.3") | The USB-C socket sits right at the edge, so a cable does not fit into the case. |
| Guition JC3248W535 (480x320) | Same chip and size, but its display controller only refreshes the whole screen, and its touch reports phantom touches. Not suitable as an official board. A community port is conceivable. |
| 7" boards | Too large for this project, see [Will there be a bigger display?](#bigger-display) |

A newer chip, the ESP32-S31, is the thing we are waiting for. Boards with it
are still few and its Arduino support is unfinished.

## The NFC reader { #nfc-reader }

Today's reader is easy to get and well documented, but it cannot read ISO 15693
tags such as [OpenPrintTag](../use/compatibility.md#openprinttag). A successor
needs ISO 15693 and should talk to the scale over I2C or another two-wire bus,
because the other pins are needed elsewhere.

**Supply and voltage.** The reader board should run from 5 V and bring its own
step-down to 3.3 V for the logic, so that no extra voltage converter is needed.
Many do not. If a board's data lines run at 5 V, they push 5 V into the pins of
the ESP32, which is built for 3.3 V and can be destroyed by it. Then the board
needs its own 3.3 V supply or a level shifter. Please check this before you
suggest a reader: it is one of the first things that rules a candidate out.

A reader with a **detachable antenna** is especially interesting: the board
could sit at the bottom of the case, the part that sticks out would get smaller
and flatter, and it would be easy to move or swap for spools with the tag in
other places. The candidates we know are still hard to get and cost a multiple
of today's reader.

## Which converter: NAU7802 or HX711 { #adc }

The converter reads the tiny signal of the load cell. The scale uses the
**NAU7802**. Most cells ship with the cheaper **HX711**, and we plan to support
it in an upcoming firmware (not released yet). The NAU7802 stays our
recommendation.

| | NAU7802 (used today) | HX711 |
|---|---|---|
| Price | higher | very cheap, comes with most cells |
| Availability | harder to find | everywhere |
| Connection | I2C, shares the bus with the reader | two pins of its own, no I2C |
| Supply | 3.3 V | modules often run at 5 V, then the data line is 5 V too: needs a 3.3 V regulator to protect the ESP32 |
| Noise | generally considered lower | generally considered higher |

We have not measured the two against each other. The statement on noise comes
from the data sheets and from experience reports, not from our own test. The
HX711 is a good, cheap way in, but it needs two pins of its own (which ones is
not decided yet) and you have to watch the supply voltage. If you want the setup we test and support first,
take the NAU7802.

## A digital load cell over RS485 { #load-cell }

This is an outlook, not something you can buy and plug in today. Cells with the
converter built in, wired and with a plug, would save soldering. They talk
RS485, which is why an RS485 port on a connector or an I/O port matters so
much, on today's board and on the next one. Cheap boards and cheap cells do
not have it, so it will stay hard to get for most people for now.

Such a cell would also free the I2C bus for the NFC reader, and with it the
choice of which reader we can use.

## A Raspberry Pi inside the case { #raspberry-pi }

This is on hold. A Pi Zero is too weak for FilaMan and BamBuddy, so we are
waiting for a stronger successor. See [SpoolmanScale Pro](../pro/index.md) for
what the scale can do with a Pi today.

---

## Related

- [Spools, tags and printers](../use/compatibility.md): what is supported
- [FAQ](faq.md)
