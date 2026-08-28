function initLightbox() {
  // Lightbox erstellen
  const lightbox = document.createElement("div");
  lightbox.className = "ssc-lightbox";
  lightbox.innerHTML = '<span class="ssc-lightbox-close">✕</span><img src="" alt="">';
  document.body.appendChild(lightbox);

  const lbImg = lightbox.querySelector("img");
  const lbClose = lightbox.querySelector(".ssc-lightbox-close");

  function openLightbox(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || "";
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
    lbImg.src = "";
  }

  // Table thumbnails (the BOM) plus every content image - the UI screenshots
  // are 1440x960 and unreadable at page width without this. The logo, the
  // badges and anything already wrapped in a link are left alone.
  var selector = [
    ".md-typeset table img",
    ".md-typeset p > img",
    ".md-typeset .tabbed-content img"
  ].join(", ");

  document.querySelectorAll(selector).forEach(function (img) {
    if (img.closest("a")) return;
    img.style.cursor = "zoom-in";
    img.addEventListener("click", function () {
      openLightbox(img.src, img.alt);
    });
  });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  lbClose.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });
}

// Safari-kompatibel: alle Zustände abdecken
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLightbox);
} else {
  initLightbox();
}
