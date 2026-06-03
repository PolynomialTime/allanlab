(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));
  const heroWord = document.querySelector("[data-hero-word]");
  const navLinks = Array.from(document.querySelectorAll(".site-nav a[href^='#']"));
  const pageNavLinks = Array.from(document.querySelectorAll(".site-nav a[href]:not([href^='#'])"));
  const heroSlides = Array.from(document.querySelectorAll("[data-hero-slide]"));

  const words = heroWord && heroWord.dataset.heroWords
    ? heroWord.dataset.heroWords.split("|").filter(Boolean)
    : [
      "Civilised Agents",
      "Cultural Listeners",
      "Value Reasoners",
      "Creative Partners"
    ];

  function revealAll() {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  if (!reduceMotion.matches && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.16 }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealAll();
  }

  if (heroWord && !reduceMotion.matches) {
    let wordIndex = 0;
    window.setInterval(() => {
      wordIndex = (wordIndex + 1) % words.length;
      heroWord.style.opacity = "0";
      window.setTimeout(() => {
        heroWord.textContent = words[wordIndex];
        heroWord.style.opacity = "1";
      }, 180);
    }, 2600);
  }

  if (heroWord) {
    heroWord.style.transition = "opacity 180ms ease";
  }

  let heroSlideIndex = 0;
  let heroSlideTimer = null;

  function showHeroSlide(index) {
    if (!heroSlides.length) return;
    heroSlideIndex = index % heroSlides.length;
    heroSlides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === heroSlideIndex);
    });
  }

  function startHeroCarousel() {
    window.clearInterval(heroSlideTimer);
    heroSlideTimer = null;

    if (heroSlides.length < 2 || reduceMotion.matches) {
      showHeroSlide(0);
      return;
    }

    showHeroSlide(heroSlideIndex);
    heroSlideTimer = window.setInterval(() => {
      showHeroSlide(heroSlideIndex + 1);
    }, 5400);
  }

  startHeroCarousel();

  const normalizePath = (path) => {
    const clean = path.replace(/\/+$/, "");
    return clean || "/";
  };
  const currentPath = normalizePath(window.location.pathname);
  pageNavLinks.forEach((link) => {
    const targetUrl = new URL(link.getAttribute("href"), window.location.href);
    const targetPath = normalizePath(targetUrl.pathname);
    const active =
      targetPath === currentPath &&
      targetUrl.origin === window.location.origin;

    if (active) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });

  if ("IntersectionObserver" in window && navLinks.length) {
    const sections = navLinks
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    const navObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        navLinks.forEach((link) => {
          const active = link.getAttribute("href") === "#" + visible.target.id;
          link.classList.toggle("is-active", active);
          if (active) {
            link.setAttribute("aria-current", "page");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      },
      {
        rootMargin: "-30% 0px -52% 0px",
        threshold: [0.08, 0.2, 0.45]
      }
    );

    sections.forEach((section) => navObserver.observe(section));
  }

  const handleMotionChange = () => {
    revealAll();
    startHeroCarousel();
  };

  if (typeof reduceMotion.addEventListener === "function") {
    reduceMotion.addEventListener("change", handleMotionChange);
  } else if (typeof reduceMotion.addListener === "function") {
    reduceMotion.addListener(handleMotionChange);
  }

})();
