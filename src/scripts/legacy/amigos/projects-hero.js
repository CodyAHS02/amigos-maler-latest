(() => {
  const hero = document.querySelector("[data-projects-hero]");
  if (!hero || !window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  const header = document.querySelector(".site-header");
  const content = hero.querySelector(".hero-inner");
  const spotlight = hero.querySelector(".hero-spotlight");
  const videos = [
    document.getElementById("projectsHeroVideoLight"),
    document.getElementById("projectsHeroVideoDark")
  ].filter(Boolean);
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function clamp(value) {
    return gsap.utils.clamp(0, 1, value);
  }

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
    if (content) gsap.set(content, { opacity: 1, y: 0, filter: "blur(0px)", pointerEvents: "auto" });
    return;
  }

  if (header) {
    gsap.set(header, { opacity: 0, y: -86 });
  }

  if (content) {
    gsap.set(content, { opacity: 0, y: 44, filter: "blur(14px)", pointerEvents: "none" });
  }

  Promise.all(videos.map(primeVideo)).finally(() => {
    let lastTime = -1;

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

        videos.forEach((video) => {
          if (!video.duration || Number.isNaN(video.duration)) return;
          const targetTime = video.duration * videoProgress;

          if (Math.abs(targetTime - lastTime) > 0.015) {
            video.currentTime = targetTime;
          }
        });

        lastTime = videos[0]?.currentTime ?? lastTime;

        if (header) {
          const headerProgress = clamp((progress - 0.12) / 0.12);

          gsap.set(header, {
            opacity: headerProgress,
            y: -86 + (86 * headerProgress)
          });
        }

        if (content) {
          const contentProgress = clamp((progress - 0.78) / 0.10);

          gsap.set(content, {
            opacity: contentProgress,
            y: 44 - (44 * contentProgress),
            filter: `blur(${14 - (14 * contentProgress)}px)`,
            pointerEvents: contentProgress > 0.96 ? "auto" : "none"
          });
        }

        if (spotlight) {
          gsap.set(spotlight, {
            opacity: 0.38 + (0.34 * clamp((progress - 0.72) / 0.16))
          });
        }

        hero.classList.toggle("is-ending", progress > 0.72);
      }
    });

    ScrollTrigger.refresh();
  });
})();
