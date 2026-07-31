(function () {
  "use strict";

  var ICONS = {
    truck: '<path d="M10 17h4V5H2v12h3"/><path d="M14 9h5l3 3v5h-2"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
    shrub: '<path d="M8 12a4 4 0 0 1 8 0"/><path d="M6 16a5 5 0 0 1 5-5"/><path d="M18 16a5 5 0 0 0-5-5"/><path d="M12 22v-6"/><path d="M9 22h6"/>',
    paintbrush: '<path d="M18.37 2.63L14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3z"/><path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"/>',
    hammer: '<path d="M15 12l-8.5 8.5a2.12 2.12 0 1 1-3-3L12 9"/><path d="M17.64 15L22 10.64"/><path d="M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"/>',
    trash: '<path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>',
    shovel: '<path d="M2 22l5-5"/><path d="M14 4l6 6-4.5 4.5a3.5 3.5 0 1 1-6-6z"/><path d="M13 5l-3-3"/>',
    computer: '<rect x="2" y="4" width="20" height="13" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
    droplets: '<path d="M12 2s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z"/>',
  };

  var SERVICES = [
    { icon: "truck", name: "B\u00E6ring" },
    { icon: "shrub", name: "Hagearbeid og enkel vedlikehold" },
    { icon: "paintbrush", name: "Maling og skraping" },
    { icon: "hammer", name: "Montering av m\u00F8bler" },
    { icon: "trash", name: "Rydding" },
    { icon: "shovel", name: "Sn\u00F8m\u00E5king" },
    { icon: "computer", name: "Teknisk bistand" },
    { icon: "droplets", name: "Vask og polering" },
  ];

  function renderServices() {
    var grid = document.getElementById("services-grid");
    if (!grid) return;
    var html = SERVICES.map(function (s) {
      return (
        '<div class="service-card reveal">' +
          '<div class="service-icon"><svg class="icon" viewBox="0 0 24 24">' + (ICONS[s.icon] || "") + "</svg></div>" +
          '<div class="service-name">' + s.name + "</div>" +
        "</div>"
      );
    }).join("");
    grid.innerHTML = html;
  }

  function setupAnnouncement() {
    var bar = document.getElementById("announcement-bar");
    var closeBtn = document.getElementById("announce-close");
    if (!bar || !closeBtn) return;
    closeBtn.addEventListener("click", function () {
      bar.classList.add("hidden");
    });
  }

  function setupDrawer() {
    var drawer = document.getElementById("drawer");
    var openBtn = document.getElementById("burger-open");
    var closeBtn = document.getElementById("drawer-close");
    var overlay = document.getElementById("drawer-overlay");
    if (!drawer || !openBtn) return;

    function open() {
      drawer.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    function close() {
      drawer.classList.remove("open");
      document.body.style.overflow = "";
    }
    openBtn.addEventListener("click", open);
    if (closeBtn) closeBtn.addEventListener("click", close);
    if (overlay) overlay.addEventListener("click", close);
    drawer.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", close);
    });
  }

  function setupReveal() {
    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var items = document.querySelectorAll(".reveal");
    if (reduced || typeof gsap === "undefined") {
      items.forEach(function (el) { el.style.opacity = 1; el.style.transform = "none"; });
      return;
    }
    if (typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
    items.forEach(function (el, i) {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "expo.out",
        delay: el.closest(".hero") ? i * 0.08 : 0,
        scrollTrigger: el.closest(".hero") ? undefined : {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderServices();
    setupAnnouncement();
    setupDrawer();
    setupReveal();
  });
})();