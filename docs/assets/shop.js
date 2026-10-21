/* Shop links on the recommended printers page.
 *
 * Picks the Amazon shop a reader most likely buys in, from the URL, a choice
 * saved earlier, the time zone or the browser language, in that order. No IP
 * lookup, no cookies, no outside service: everything happens in the browser.
 * The picker lets anyone switch by hand. Does nothing on a page without
 * .shop-link. Partner tags go into SHOPS, ASINs into PRODUCTS; without an
 * ASIN a link searches the shop instead.
 */
(function () {
  const SHOPS = {
    de: { host: "www.amazon.de",  tag: "", label: "🇩🇪 amazon.de" },
    fr: { host: "www.amazon.fr",  tag: "", label: "🇫🇷 amazon.fr" },
    us: { host: "www.amazon.com", tag: "", label: "🇺🇸 amazon.com" },
  };

  // q: what to search for where a shop has no ASIN yet
  const PRODUCTS = {
    "phomemo-m220":       { q: "Phomemo M220",              asin: { de: "B09NKPCBML", fr: "", us: "" } },
    "phomemo-m220-40x30": { q: "Phomemo M220 labels 40x30", asin: { de: "B09K3ZHXLH", fr: "", us: "" } },
    "phomemo-m220-50x30": { q: "Phomemo M220 labels 50x30", asin: { de: "B09K3ZS7FR", fr: "", us: "" } },
    "niimbot-m2":         { q: "NIIMBOT M2",                asin: { de: "B0H5V6HPLX", fr: "", us: "" } },
    "niimbot-m2-labels":  { q: "NIIMBOT M2 labels",         asin: { de: "B0CZ7YQ99K", fr: "", us: "" } },
    "niimbot-m2-ribbon":  { q: "NIIMBOT M2 ribbon",         asin: { de: "B0D8KCH4VJ", fr: "", us: "" } },
  };

  const STORE_KEY = "ss-shop";
  const ZONES_DE = /^Europe\/(Berlin|Vienna|Zurich|Vaduz|Luxembourg|Busingen)$/;
  const ZONES_FR = /^Europe\/(Paris|Brussels|Monaco)$/;
  const REGION_SHOP = { DE: "de", AT: "de", CH: "de", LI: "de", LU: "de",
                        FR: "fr", BE: "fr", MC: "fr", US: "us" };

  function saved() {
    try { return localStorage.getItem(STORE_KEY); } catch (e) { return null; }
  }
  function save(shop) {
    try { localStorage.setItem(STORE_KEY, shop); } catch (e) { /* private mode */ }
  }

  function fromZone() {
    let zone = "";
    try { zone = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch (e) { return null; }
    if (ZONES_DE.test(zone)) return "de";
    if (ZONES_FR.test(zone)) return "fr";
    if (zone.startsWith("America/")) return "us";
    return null;
  }

  // The region of the first language that names one, else a bare language.
  function fromLanguage() {
    const langs = navigator.languages && navigator.languages.length
      ? navigator.languages : [navigator.language || ""];
    for (const l of langs) {
      const region = (l.split("-")[1] || "").toUpperCase();
      if (REGION_SHOP[region]) return REGION_SHOP[region];
    }
    for (const l of langs) {
      const base = l.split("-")[0].toLowerCase();
      if (base === "de" || base === "fr") return base;
    }
    return null;
  }

  // The time zone before the language: plenty of readers in Germany run an
  // en-US browser.
  function detect() {
    const param = new URLSearchParams(location.search).get("shop");
    if (param && SHOPS[param]) return param;
    const s = saved();
    if (s && SHOPS[s]) return s;
    return fromZone() || fromLanguage() || "us";
  }

  function href(product, shop) {
    const p = PRODUCTS[product];
    const s = SHOPS[shop];
    const asin = p.asin[shop];
    const url = new URL(asin ? "https://" + s.host + "/dp/" + asin : "https://" + s.host + "/s");
    if (!asin) url.searchParams.set("k", p.q);
    if (s.tag) url.searchParams.set("tag", s.tag);
    return url.toString();
  }

  function paint(shop) {
    const tagged = !!SHOPS[shop].tag;
    document.querySelectorAll(".shop-link").forEach(function (a) {
      const product = a.dataset.product;
      if (!PRODUCTS[product]) return;
      a.href = href(product, shop);
      a.target = "_blank";
      a.rel = tagged ? "sponsored noopener" : "noopener";
      a.classList.toggle("shop-aff", tagged);
    });
    document.querySelectorAll("#shop-picker button").forEach(function (b) {
      b.classList.toggle("on", b.dataset.shop === shop);
    });
    const note = document.getElementById("aff-note");
    if (note) note.hidden = !Object.values(SHOPS).some(function (s) { return s.tag; });
  }

  function picker(current) {
    const box = document.getElementById("shop-picker");
    if (!box) return;
    box.textContent = "";
    Object.keys(SHOPS).forEach(function (key) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "md-button";
      b.dataset.shop = key;
      b.textContent = SHOPS[key].label;
      b.addEventListener("click", function () { save(key); paint(key); });
      box.appendChild(b);
    });
  }

  function init() {
    if (!document.querySelector(".shop-link")) return;
    const shop = detect();
    picker(shop);
    paint(shop);
  }

  if (window.document$) document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded", init);
})();
