# Contributing

SpoolmanScale is open-source and contributions are welcome - whether it's code, documentation, bug reports, or feature ideas.

---

## Discord

The fastest way to get help, and where beta findings are reported:

👉 **[discord.gg/xadskCrPFu](https://discord.gg/xadskCrPFu)**

Over 200 people are running a SpoolmanScale. Build questions, wiring photos,
tag troubles - all welcome.

---

## Ways to Contribute

- **Bug reports** - open an [issue on GitHub](https://github.com/Niko11111/SpoolmanScale/issues)
- **Feature requests** - open an issue or discuss on [Discord](https://discord.gg/xadskCrPFu)
- **Code** - open a Pull Request
- **Documentation** - fix errors or add missing content in the [Docs repo](https://github.com/Niko11111/SpoolmanScale-Docs)
- **Testing** - try beta firmware and report findings on Discord

---

## Code Contributions

### Setup

```bash
git clone https://github.com/Niko11111/SpoolmanScale.git
cd SpoolmanScale
```

Open it in VS Code with the PlatformIO extension. The environment is
`wt32-sc01-plus`:

```bash
pio run                 # build
pio run -t upload       # flash over USB
pio device monitor      # serial monitor, 115200 baud
scripts/check.sh        # house rules, needs python3 and node
```

The first `pio run` downloads the pinned platform with Arduino core 3.3 and its
toolchain once, which takes a few minutes. Later builds are quicker.

`scripts/check.sh` checks the house rules below and a few more. CI runs it on
every push and pull request, so run it before you open one.

!!! warning "PSRAM stays Quad"
    `board_build.arduino.memory_type` must remain `qio_qspi`. Never OPI, never
    disabled.

Build details are in
[BUILDING.md](https://github.com/Niko11111/SpoolmanScale/blob/main/BUILDING.md).

### Guidelines

- All code comments in **English**
- All UI strings via `T(STR_XXX)` macro - never hardcoded
- A new UI string needs German, English and a French draft. The French goes
  through `tools/lang_fr.py`, see
  [tools/FRENCH_TRANSLATION.md](https://github.com/Niko11111/SpoolmanScale/blob/main/tools/FRENCH_TRANSLATION.md)
- No em-dashes anywhere - they break the Xtensa toolchain in comments and
  render as a rectangle in the UI. Use " - "
- Pin library versions, never "latest"
- Test on real hardware before submitting a PR
- One change per PR - keep it focused

### Pull Request Process

1. Fork the repo
2. Create a branch: `git checkout -b feature/my-feature`
3. Make your changes
4. Push and open a PR against `dev`

---

## Documentation Contributions

The docs are in a [separate repo](https://github.com/Niko11111/SpoolmanScale-Docs). Just edit the `.md` files and open a PR - no build step needed to submit.

---

## Support the Project

If you find SpoolmanScale useful, consider supporting it:

☕ [ko-fi.com/formfollowsfunction](https://ko-fi.com/formfollowsfunction)

A like on [MakerWorld](https://makerworld.com/de/models/2713675-spoolmanscale) and a ⭐ on [GitHub](https://github.com/Niko11111/SpoolmanScale) also help a lot!
