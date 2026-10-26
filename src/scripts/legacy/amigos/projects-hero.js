(() => {
  const hero = document.querySelector("[data-projects-hero]");
  if (!hero || !window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  const header = document.getElementById("siteHeader");
  const content = hero.querySelector(".hero-inner");
  const videos = [
    document.getElementById("projectsHeroVideoLight"),
    document.getElementById("projectsHeroVideoDark")
  ].filter(Boolean);
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const compactHero = window.matchMedia("(max-width: 620px)").matches;
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

  if (reducedMotion || compactHero) {
    const compactVideo = getActiveVideo();
    if (compactVideo) {
      compactVideo.muted = true;
      compactVideo.loop = true;
      compactVideo.preload = "auto";
      compactVideo.play().catch(() => {});
    }
    if (content) {
      content.style.setProperty("--projects-content-glow", "1");
      gsap.set(content, { opacity: 1, y: 0, pointerEvents: "auto" });
    }
    const updateCompactHeader = () => {
      if (!header) return;
      header.classList.toggle("is-scrolled", hero.getBoundingClientRect().bottom <= header.offsetHeight);
    };
    updateCompactHeader();
    window.addEventListener("scroll", updateCompactHeader, { passive: true });
    return;
  }

  header?.classList.remove("is-scrolled");

  if (content) {
    content.style.setProperty("--projects-content-glow", "0");
    gsap.set(content, { opacity: 0, y: 44, pointerEvents: "none" });
  }

  activeVideo = getActiveVideo();
  primeVideo(activeVideo).finally(() => {
    let lastTime = -1;

    const observer = new MutationObserver(() => {
      const previous = activeVideo;
      const nextVideo = getActiveVideo();

      if (previous === nextVideo) return;

      activeVideo = nextVideo;
      activeVideo.preload = "auto";
      primeVideo(activeVideo).then(() => {
        if (!previous || !activeVideo.duration) return;
        activeVideo.currentTime = Math.min(previous.currentTime, Math.max(activeVideo.duration - 0.04, 0));
      });
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

        header?.classList.toggle("is-scrolled", progress >= 0.9999);

        if (activeVideo && activeVideo.duration && !Number.isNaN(activeVideo.duration)) {
          const targetTime = activeVideo.duration * videoProgress;

          if (Math.abs(targetTime - lastTime) > 0.075) {
            activeVideo.currentTime = targetTime;
            lastTime = targetTime;
          }
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
    
    if (!slider || !beforePane || !afterPane || !divider) return;
    
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

(function initProjectsEnquiry() {
  const form = document.getElementById("projects-enquiry-form");
  if (!form) return;

  const wantInput = document.getElementById("enquiry-want");
  const scopeInput = document.getElementById("enquiry-scope");
  const status = document.getElementById("projects-enquiry-status");
  const submit = form.querySelector('button[type="submit"]');
  if (!wantInput || !scopeInput || !status || !submit) return;

  const closeSelects = (except) => {
    form.querySelectorAll("[data-enquiry-select].is-open").forEach((root) => {
      if (root === except) return;
      root.classList.remove("is-open");
      root.querySelector(".enquiry-select-trigger")?.setAttribute("aria-expanded", "false");
      root.querySelector(".enquiry-listbox").hidden = true;
    });
  };

  form.querySelectorAll("[data-enquiry-select]").forEach((root) => {
    const select = root.querySelector(".enquiry-native-select");
    const trigger = root.querySelector(".enquiry-select-trigger");
    const value = root.querySelector(".enquiry-select-value");
    const listbox = root.querySelector(".enquiry-listbox");
    if (!select || !trigger || !value || !listbox) return;

    const syncOptions = () => {
      listbox.replaceChildren();
      Array.from(select.options).forEach((option) => {
        const item = document.createElement("button");
        item.type = "button";
        item.className = "enquiry-option";
        item.setAttribute("role", "option");
        item.dataset.value = option.value;
        item.textContent = option.textContent;
        item.addEventListener("click", () => {
          select.value = option.value;
          select.dispatchEvent(new Event("change", { bubbles: true }));
          closeSelects();
          trigger.focus();
        });
        listbox.appendChild(item);
      });
      syncValue();
    };

    const syncValue = () => {
      const selected = select.options[select.selectedIndex];
      value.textContent = selected?.textContent || "Select an option";
      root.classList.toggle("has-value", Boolean(select.value));
      listbox.querySelectorAll("[role=option]").forEach((item) => {
        const selectedItem = item.dataset.value === select.value;
        item.setAttribute("aria-selected", String(selectedItem));
        item.classList.toggle("is-selected", selectedItem);
      });
    };

    const open = () => {
      closeSelects(root);
      root.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
      listbox.hidden = false;
      listbox.querySelector(".is-selected")?.focus();
    };

    trigger.addEventListener("click", () => root.classList.contains("is-open") ? closeSelects() : open());
    trigger.addEventListener("keydown", (event) => {
      if (["Enter", " ", "ArrowDown"].includes(event.key)) {
        event.preventDefault();
        open();
      }
    });
    listbox.addEventListener("keydown", (event) => {
      const items = Array.from(listbox.querySelectorAll("[role=option]"));
      const index = items.indexOf(document.activeElement);
      if (event.key === "Escape") {
        event.preventDefault();
        closeSelects();
        trigger.focus();
      } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        items[(index + (event.key === "ArrowDown" ? 1 : -1) + items.length) % items.length]?.focus();
      } else if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        document.activeElement?.click();
      }
    });
    select.addEventListener("change", syncValue);
    select.__refreshEnquiryOptions = syncOptions;
    syncOptions();
  });

  document.addEventListener("click", (event) => {
    if (!form.contains(event.target)) closeSelects();
  }, { passive: true });

  const options = {
    Apartment: ["1,5 Bedroom", "2,5 Bedroom", "3 Bedroom", "3,5 Bedroom", "4,5 Bedroom", "5,5 Bedroom", "6,5 Bedroom", "8,5 Bedroom"],
    House: ["Small house", "3 bedrooms", "4+ bedrooms", "Full house", "Interior + exterior"],
    Office: ["Private office", "Small team office", "Full floor", "Reception area", "Meeting rooms"],
    "Commercial space": ["Shop", "Restaurant", "Clinic", "Showroom", "Full commercial unit"],
    "Facade / exterior": ["Balcony", "Facade refresh", "Woodwork", "Windows / doors", "Full exterior"],
    Other: ["Painting", "Plastering", "Renovation", "Repair work", "Not sure yet"]
  };

  function renderScopes() {
    const values = options[wantInput.value] || options.Other;
    scopeInput.replaceChildren(...values.map((value) => new Option(value)));
    scopeInput.__refreshEnquiryOptions?.();
  }

  wantInput.addEventListener("change", renderScopes);
  renderScopes();

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const details = [
      "Projects page enquiry.",
      `What do I want: ${data.get("want")}`,
      `Scope: ${data.get("scope")}`,
      `Budget: ${data.get("budget")}`,
      `Timeline: ${data.get("timeline")}`,
      data.get("phone") ? `Phone: ${data.get("phone")}` : "",
      `Details: ${data.get("details")}`
    ].filter(Boolean).join("\n");
    const payload = new FormData();
    payload.set("name", data.get("name"));
    payload.set("email", data.get("email"));
    payload.set("projectType", data.get("projectType") || "Renovation");
    payload.set("message", details);

    status.textContent = "Sending enquiry...";
    status.className = "";
    submit.disabled = true;

    try {
      const response = await fetch("/api/consultations", { method: "POST", body: payload });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "Unable to save enquiry.");
      status.textContent = "Enquiry sent. Patricia's team will review it shortly.";
      status.className = "is-success";
      form.reset();
      renderScopes();
    } catch (error) {
      status.textContent = error.message || "Unable to send right now. Please try again.";
      status.className = "is-error";
    } finally {
      submit.disabled = false;
    }
  });
})();

(function pauseOffscreenAnimations() {
  const sections = [
    document.getElementById("partners-strip"),
    document.getElementById("project-showcase-lab")
  ].filter(Boolean);
  if (!sections.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.target.classList.toggle("is-visible", entry.isIntersecting));
  }, { rootMargin: "180px 0px" });
  sections.forEach((section) => observer.observe(section));
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

})();
