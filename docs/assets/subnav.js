// On a phone the theme hides the tabs and the sidebar, so a page opens with
// no sign of what else is in its section. This puts the pages of the current
// section in one row under the header. It reads the entries from the drawer
// menu, which every page already carries, so the menu stays the only list.
(function () {
  var NAV_ACTIVE_CLASS = "ss-subnav__link--active";

  function sectionOf(list) {
    return list.querySelector(":scope > li.md-nav__item--active.md-nav__item--nested");
  }

  function makeLink(anchor, isCurrent) {
    var link = document.createElement("a");
    link.className = "ss-subnav__link" + (isCurrent ? " " + NAV_ACTIVE_CLASS : "");
    link.href = anchor.getAttribute("href");
    link.textContent = anchor.textContent.trim();
    if (isCurrent) link.setAttribute("aria-current", "page");
    return link;
  }

  function isCurrent(anchor) {
    return anchor.classList.contains("md-nav__link--active");
  }

  function buildBar() {
    var list = document.querySelector(".md-nav--primary > .md-nav__list");
    var main = document.querySelector(".md-main");
    if (!list || !main) return;
    var section = sectionOf(list);
    if (!section) return;

    var head = section.querySelector(":scope > .md-nav__container > a.md-nav__link");
    var children = section.querySelectorAll(
      ":scope > nav.md-nav > ul.md-nav__list > li.md-nav__item > a.md-nav__link");
    if (!head || children.length === 0) return;

    var bar = document.createElement("nav");
    bar.className = "ss-subnav";
    bar.setAttribute("aria-label", head.textContent.trim());
    bar.appendChild(makeLink(head, isCurrent(head)));
    children.forEach(function (anchor) {
      bar.appendChild(makeLink(anchor, isCurrent(anchor)));
    });
    main.parentNode.insertBefore(bar, main);

    // Centre the current page in the row without scrolling the page itself.
    var active = bar.querySelector("." + NAV_ACTIVE_CLASS);
    if (active) {
      bar.scrollLeft = active.offsetLeft - (bar.clientWidth - active.offsetWidth) / 2;
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildBar);
  } else {
    buildBar();
  }
})();
