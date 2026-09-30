(() => {
  const hero = document.querySelector("[data-projects-hero]");
  if (!hero || !window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  const header = document.querySelector(".site-header");
  const content = hero.querySelector(".hero-inner");
  const videos = [
    document.getElementById("projectsHeroVideoLight"),
    document.getElementById("projectsHeroVideoDark")
  ].filter(Boolean);
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let activeVideo = null;

  function clamp(value) {
    return gsap.utils.clamp(0, 1, value);
  }

  function animateCount(el) {
    if (!el || el.dataset.done === "1") return;

    const target = Number.parseFloat(el.dataset.count || "0");
    if (!Number.isFinite(target)) return;

    el.dataset.done = "1";

    const duration = 1500;
    const start = performance.now();
    const format = (value) => {
      if (target >= 100) return Math.round(value).toLocaleString();
      return String(Math.round(value));
    };

    const step = (now) => {
      const progress = clamp((now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = format(target * eased);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = format(target);
      }
    };

    requestAnimationFrame(step);
  }

  function initCounters() {
    const counterScope = document.querySelector("#trust-stats");
    if (!counterScope) return;

    const counters = Array.from(counterScope.querySelectorAll("[data-count]"));
    if (!counters.length) return;

    const run = () => counters.forEach(animateCount);

    if (!("IntersectionObserver" in window)) {
      run();
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("in");
        run();
        observer.disconnect();
      });
    }, {
      threshold: 0.22,
      rootMargin: "0px 0px -8% 0px"
    });

    observer.observe(counterScope);
  }

  function getActiveVideo() {
    const theme = document.documentElement.dataset.theme;
    const wantsDark = theme === "amigos-dark" || theme === "dark";
    return document.getElementById(wantsDark ? "projectsHeroVideoDark" : "projectsHeroVideoLight") || videos[0];
  }

  initCounters();

  function primeVideo(video) {
    if (!video) return Promise.resolve();

    return new Promise((resolve) => {
      const done = () => resolve();

      if (video.readyState >= 1) {
        done();
        return;
      }

      video.addEventListener("loadedmetadata", done, { once: true });
      video.addEventListener("error", done, { once: true });
      video.load();
    }).then(() => {
      const attempt = video.play();

      if (attempt && typeof attempt.then === "function") {
        return attempt
          .then(() => {
            video.pause();
            video.currentTime = 0;
          })
          .catch(() => {
            video.currentTime = 0;
          });
      }

      video.pause();
      video.currentTime = 0;
      return undefined;
    });
  }

  if (reducedMotion) {
    videos.forEach((video) => {
      video.muted = true;
      video.loop = true;
      video.play().catch(() => {});
    });
    if (header) gsap.set(header, { opacity: 1, y: 0, clearProps: "transform" });
    if (content) {
      content.style.setProperty("--projects-content-glow", "1");
      gsap.set(content, { opacity: 1, y: 0, pointerEvents: "auto" });
    }
    return;
  }

  if (header) {
    header.classList.add("projects-hero-header");
    header.classList.remove("projects-header-solid");
    gsap.set(header, { opacity: 0, y: -86 });
  }

  if (content) {
    content.style.setProperty("--projects-content-glow", "0");
    gsap.set(content, { opacity: 0, y: 44, pointerEvents: "none" });
  }

  Promise.all(videos.map(primeVideo)).finally(() => {
    let lastTime = -1;
    activeVideo = getActiveVideo();

    const observer = new MutationObserver(() => {
      const previous = activeVideo;
      activeVideo = getActiveVideo();

      if (previous && activeVideo && previous !== activeVideo) {
        activeVideo.currentTime = Math.min(previous.currentTime, Math.max(activeVideo.duration - 0.04, 0));
      }
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    ScrollTrigger.create({
      trigger: hero,
      start: "top top",
      end: "+=3500",
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate(self) {
        const progress = self.progress;
        const videoProgress = Math.min(progress / 0.92, 1);

        if (activeVideo && activeVideo.duration && !Number.isNaN(activeVideo.duration)) {
          const targetTime = activeVideo.duration * videoProgress;

          if (Math.abs(targetTime - lastTime) > 0.055) {
            activeVideo.currentTime = targetTime;
            lastTime = targetTime;
          }
        }

        if (header) {
          const headerProgress = clamp((progress - 0.12) / 0.12);
          const shouldBeSolid = progress >= 0.995;

          header.classList.toggle("projects-header-solid", shouldBeSolid);

          gsap.set(header, {
            opacity: headerProgress,
            y: -86 + (86 * headerProgress)
          });
        }

        if (content) {
          const contentProgress = clamp((progress - 0.78) / 0.10);
          const glowProgress = clamp((contentProgress - 0.18) / 0.82);

          content.style.setProperty("--projects-content-glow", glowProgress.toFixed(3));

          gsap.set(content, {
            opacity: contentProgress,
            y: 44 - (44 * contentProgress),
            pointerEvents: contentProgress > 0.96 ? "auto" : "none"
          });
        }

        hero.classList.toggle("is-ending", progress > 0.72);
      }
    });

    ScrollTrigger.refresh();
  });
})();

(() => {
  function initRealEstateHub() {
    const section = document.getElementById("real-estate-hub");
    if (!section || section.dataset.realEstateReady === "1") return;

    section.dataset.realEstateReady = "1";

    const filterButtons = Array.from(section.querySelectorAll("[data-re-filter]"));
    const cards = Array.from(section.querySelectorAll("[data-re-category]"));
    const detailButtons = Array.from(section.querySelectorAll("[data-detail-target]"));
    const panels = Array.from(section.querySelectorAll("[data-detail-panel]"));
    const carouselTrack = section.querySelector("[data-re-carousel-track]");
    const carouselPrev = section.querySelector("[data-re-carousel-prev]");
    const carouselNext = section.querySelector("[data-re-carousel-next]");
    if (!filterButtons.length || !cards.length || !panels.length) return;

    function visibleCards() {
      return cards.filter((card) => !card.hidden);
    }

    function updateCarouselButtons() {
      if (!carouselTrack || !carouselPrev || !carouselNext) return;

      const cardsShown = visibleCards();
      const canScroll = cardsShown.length > 1 && carouselTrack.scrollWidth > carouselTrack.clientWidth + 2;
      const atStart = carouselTrack.scrollLeft <= 4;
      const atEnd = carouselTrack.scrollLeft + carouselTrack.clientWidth >= carouselTrack.scrollWidth - 4;

      carouselPrev.disabled = !canScroll || atStart;
      carouselNext.disabled = !canScroll || atEnd;
    }

    function scrollCarousel(direction) {
      if (!carouselTrack) return;

      const firstVisible = visibleCards()[0];
      const cardWidth = firstVisible ? firstVisible.getBoundingClientRect().width : carouselTrack.clientWidth;
      const gap = Number.parseFloat(getComputedStyle(carouselTrack).columnGap || "16") || 16;
      carouselTrack.scrollBy({
        left: direction * (cardWidth + gap),
        behavior: "smooth"
      });
    }

    function clearDetail() {
      section.classList.remove("has-real-estate-detail");
      panels.forEach((panel) => {
        panel.classList.remove("is-active");
        panel.setAttribute("aria-hidden", "true");
      });
      detailButtons.forEach((button) => {
        button.classList.remove("is-active");
        button.setAttribute("aria-expanded", "false");
      });
    }

    function showDetail(id, shouldFocus) {
      if (!id) return;

      let found = false;
      section.classList.add("has-real-estate-detail");
      panels.forEach((panel) => {
        const selected = panel.dataset.detailPanel === id;
        panel.classList.toggle("is-active", selected);
        panel.setAttribute("aria-hidden", selected ? "false" : "true");
        if (selected) found = true;
      });

      detailButtons.forEach((button) => {
        const selected = button.dataset.detailTarget === id;
        button.classList.toggle("is-active", selected);
        button.setAttribute("aria-expanded", selected ? "true" : "false");
      });
    }

    function setFilter(filter) {
      const activeFilter = filter || "all";

      clearDetail();

      filterButtons.forEach((button) => {
        const selected = button.dataset.reFilter === activeFilter;
        button.classList.toggle("is-active", selected);
        button.setAttribute("aria-pressed", selected ? "true" : "false");
      });

      cards.forEach((card, index) => {
        const visible = activeFilter === "all" || card.dataset.reCategory === activeFilter;
        card.hidden = !visible;
        card.classList.toggle("is-filtered-out", !visible);

      });

      if (carouselTrack) carouselTrack.scrollTo({ left: 0, behavior: "smooth" });
      window.requestAnimationFrame(updateCarouselButtons);
    }

    section.addEventListener("click", (event) => {
      const filterButton = event.target.closest("[data-re-filter]");
      if (filterButton && section.contains(filterButton)) {
        setFilter(filterButton.dataset.reFilter || "all");
        return;
      }

      const detailButton = event.target.closest("[data-detail-target]");
      if (detailButton && section.contains(detailButton)) {
        showDetail(detailButton.dataset.detailTarget, false);
      }
    });

    if (carouselPrev) {
      carouselPrev.addEventListener("click", () => scrollCarousel(-1));
    }

    if (carouselNext) {
      carouselNext.addEventListener("click", () => scrollCarousel(1));
    }

    if (carouselTrack) {
      carouselTrack.addEventListener("scroll", updateCarouselButtons, { passive: true });
      window.addEventListener("resize", updateCarouselButtons, { passive: true });
    }

    filterButtons.forEach((button) => {
      button.setAttribute("aria-pressed", button.classList.contains("is-active") ? "true" : "false");
    });

    detailButtons.forEach((button) => {
      button.setAttribute("aria-expanded", button.classList.contains("is-active") ? "true" : "false");
    });

    panels.forEach((panel) => {
      panel.setAttribute("aria-hidden", panel.classList.contains("is-active") ? "false" : "true");
    });

    setFilter("all");
    updateCarouselButtons();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initRealEstateHub, { once: true });
  } else {
    initRealEstateHub();
  }
})();


// NEW SECTIONS: Proper Before/After Slider Logic (matching interior painting)
(function initSlider() {
    const slider = document.getElementById('new-ba-slider');
    const beforePane = document.getElementById('new-ba-before');
    const afterPane = document.getElementById('new-ba-after');
    const divider = document.getElementById('new-ba-divider');
    const tagBefore = document.getElementById('new-ba-tag-before');
    const tagAfter = document.getElementById('new-ba-tag-after');
    
    if (!slider || !beforePane || !afterPane || !divider) {
        setTimeout(initSlider, 100);
        return;
    }
    
    let active = false;
    const EDGE_FADE_ZONE = 10;
    
    function clamp01(n) { return Math.max(0, Math.min(1, n)); }
    
    function updateSlider(x) {
        const box = slider.getBoundingClientRect();
        let value = ((x - box.left) / box.width) * 100;
        value = Math.max(0, Math.min(100, value));
        
        beforePane.style.width = value + '%';
        afterPane.style.width = (100 - value) + '%';
        divider.style.left = value + '%';
        
        if(tagBefore) tagBefore.style.opacity = value < EDGE_FADE_ZONE ? clamp01(value / EDGE_FADE_ZONE) : 1;
        if(tagAfter) tagAfter.style.opacity = (100 - value) < EDGE_FADE_ZONE ? clamp01((100 - value) / EDGE_FADE_ZONE) : 1;
    }
    
    divider.addEventListener('mousedown', (e) => { active = true; e.preventDefault(); });
    window.addEventListener('mouseup', () => { active = false; });
    window.addEventListener('mousemove', (e) => { if (active) updateSlider(e.clientX); });
    
    divider.addEventListener('touchstart', (e) => { active = true; }, {passive: true});
    window.addEventListener('touchend', () => { active = false; });
    window.addEventListener('touchmove', (e) => { if (active) updateSlider(e.touches[0].clientX); }, {passive: true});
})();

(function initProjectsFounderCardTilt() {
  const wrap = document.getElementById("projectsFounderCardWrap");
  const card = document.getElementById("projectsFounderCard3d");
  const glare = document.getElementById("projectsFounderGlare");

  if (!wrap || !card) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let bounds;

  const updateBounds = () => {
    bounds = wrap.getBoundingClientRect();
  };

  wrap.addEventListener("mouseenter", () => {
    updateBounds();
    card.classList.add("is-tilting");
    if (glare) glare.style.opacity = "1";
  });

  wrap.addEventListener("mousemove", (event) => {
    if (!bounds) updateBounds();

    const mouseX = event.clientX - bounds.left;
    const mouseY = event.clientY - bounds.top;
    const xPct = (mouseX / bounds.width - 0.5) * 2;
    const yPct = (mouseY / bounds.height - 0.5) * 2;
    const rotX = -yPct * 8;
    const rotY = xPct * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

    if (glare) {
      const glareX = (mouseX / bounds.width) * 100;
      const glareY = (mouseY / bounds.height) * 100;
      glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.40) 0%, transparent 60%)`;
    }
  });

  wrap.addEventListener("mouseleave", () => {
    card.classList.remove("is-tilting");
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    if (glare) glare.style.opacity = "0";
  });

  window.addEventListener("scroll", updateBounds, { passive: true });
  window.addEventListener("resize", updateBounds, { passive: true });
})();
