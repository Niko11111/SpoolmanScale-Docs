# SpoolmanScale Docs

Documentation for [SpoolmanScale](https://github.com/Niko11111/SpoolmanScale) - built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/).

👉 **[niko11111.github.io/SpoolmanScale-Docs](https://niko11111.github.io/SpoolmanScale-Docs/)**

---

## Local Development

```bash
pip install mkdocs-material mkdocs-static-i18n mkdocs-redirects
mkdocs serve
```

Then open [http://localhost:8000/SpoolmanScale-Docs/](http://localhost:8000/SpoolmanScale-Docs/)

## Structure

Four tabs: **Build**, **Use**, **Pro**, **Help**. One page is one file; the
section index is the tab itself (`navigation.indexes`), so there are no
"Overview" pages that only relist the sidebar.

## Both languages

English and German live side by side with the suffix structure of
`mkdocs-static-i18n`: `use/tags.md` next to `use/tags.de.md`. A page without a
German file falls back to English rather than 404ing, so a translation can land
page by page.

German wording follows the device: menu labels are quoted from `src/lang.cpp` in
the firmware repo rather than translated freshly, so what the docs say matches
what the screen says.

## UI screenshots

`docs/assets/images/ui/{de,en}/` comes from the firmware's own UI simulator, not
from a camera. To refresh after a UI change:

```bash
cd ../sim
make catalogue     # writes both languages, exits non-zero on a clipped label
make docs-shots    # copies them here
```

Generate them from the **released** version, not from a working tree that has
already been bumped: the firmware version shows in the header of every main
screen shot and on the firmware page, and a docs site that shows a beta number
looks like it is describing something nobody can download yet.

The catalogue is deterministic and asserts the screen it landed on after every
tap, so a screenshot cannot end up under the wrong name.

## Old URLs

The tree was restructured for v0.7.0. Every old path redirects via
`plugins.redirects` in `mkdocs.yml` - do not drop those entries, they are linked
from MakerWorld, Discord and the firmware README.

## Contributing

Found an error or want to add something? PRs welcome!
