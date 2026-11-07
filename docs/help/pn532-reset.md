# Retrofitting the PN532 reset

Only for scales built **before September 2026**. If you build from the current
[build guide](../build/index.md), the wire is already in the right place.

**Do you have to?** No. The reader has always come up fine without a reset, and
a scale that is never rewired behaves exactly as before. The scale only suggests
the change to devices where the reader has actually locked up.

---

## What was wrong

Every build guide up to August 2026 sent the reset wire (pin 7) to the wrong
header on the PN532. That header carries an **output** of the module, not its
reset input, so the reset never worked on those scales.

## Rewiring

Solder the wire from pin 7 to **RSTPDN**, the last pin of the labelled 10-pin
row (AUX1, AUX2, DBGRXD, DBGTXD, INT0, INT1, SIGCLK, SIGOUT, SIGIN, RSTPDN). With
the board lying as in the photo, it is the bottom one.

![PN532 from the back: the orange wire on RSTPDN](../assets/images/pn532_rstpdn.jpg){ width="400" }

## Checking

1. **Settings → System → Check NFC reset**
2. **Reset line is there:** the row reads *Line verified, in use*. From the next
   start the scale does a real hardware reset.
3. **No effect:** the wire is still on the old pad, or the joint is not making
   contact. The scale carries on as before.

The test is safe on every scale: it only pulls the line to ground briefly and
never drives it.

??? more "What the reset buys you"
    When the PN532 locks up, a hardware reset is the strongest lever there is.
    Without it, the scale can only talk to the reader again over I2C. That
    handles most cases, but not all.

    The test pulls the line to ground for five milliseconds and watches whether
    the reader notices. It drives open drain, so it only ever sinks. On a scale
    that still has the old wiring it cannot fight the module's output.
