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

  document.querySelectorAll(".md-typeset table img").forEach(function (img) {
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
