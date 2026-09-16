// AMIGOS IMMO - shared interactions

(() => {

// Sticky header
const header = document.querySelector('.site-header');
if (header) {
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Scroll-driven "Why AMIGOS" timeline fill
(() => {
  const fill = document.getElementById('tl-fill');
  const tl = document.querySelector('.tl');
  const items = document.querySelectorAll('.tl-item');
  if (!fill || !tl) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.35 });
  items.forEach(i => io.observe(i));
  const onScroll = () => {
    const rect = tl.getBoundingClientRect();
    const vh = window.innerHeight;
    const start = vh * 0.7;
    const end = vh * 0.2;
    const total = rect.height + (start - end);
    const scrolled = Math.min(Math.max(start - rect.top, 0), total);
    const p = Math.min(1, scrolled / rect.height);
    fill.style.height = (p * 100) + '%';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();
})();

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      // Trigger counters
      e.target.querySelectorAll('[data-count]').forEach(el => {
        if (el.dataset.done) return;
        el.dataset.done = '1';
        const target = parseFloat(el.dataset.count);
        const dur = 1400;
        const start = performance.now();
        const step = (t) => {
          const p = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          const val = target * eased;
          el.textContent = target >= 100 ? Math.round(val).toLocaleString() : val.toFixed(1);
          if (p < 1) requestAnimationFrame(step);
          else el.textContent = target >= 100 ? Math.round(target).toLocaleString() : String(target);
        };
        requestAnimationFrame(step);
      });
      // Trigger progress bars
      e.target.querySelectorAll('[data-fill]').forEach(el => {
        el.style.width = el.dataset.fill + '%';
      });
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => {
  if (el.closest('.hero')) {
    el.classList.add('in');
  } else {
    io.observe(el);
  }
});

// FAQ
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.q');
  if (!q) return;
  q.addEventListener('click', () => {
    const wasOpen = item.classList.contains('open');
    item.parentElement.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

// Tabs (generic)
document.querySelectorAll('[data-tabs]').forEach(root => {
  const tabs = root.querySelectorAll('.tab');
  const panels = root.querySelectorAll('.tab-panel');
  tabs.forEach(t => t.addEventListener('click', () => {
    tabs.forEach(x => x.classList.remove('on'));
    panels.forEach(x => x.classList.remove('on'));
    t.classList.add('on');
    const target = root.querySelector('.tab-panel[data-panel="' + t.dataset.tab + '"]');
    if (target) target.classList.add('on');
  }));
});

// Case study expand
document.querySelectorAll('.case').forEach(c => c.addEventListener('click', () => c.classList.toggle('open')));

// Plan toggle
const planToggle = document.getElementById('plan-toggle');
if (planToggle) {
  planToggle.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
    planToggle.querySelectorAll('button').forEach(x => x.classList.remove('on'));
    b.classList.add('on');
    const key = b.dataset.p === 'y' ? 'priceY' : 'priceM';
    document.querySelectorAll('[data-price-m]').forEach(el => {
      const v = parseInt(el.dataset[key]);
      if (!isNaN(v)) el.textContent = v.toLocaleString('de-CH').replace(/,/g, "'");
    });
    document.querySelectorAll('.plan-price .per').forEach(p => p.textContent = b.dataset.p === 'y' ? '/mo · billed yearly' : '/mo');
  }));
}

// Before/After carousel
(() => {
  const track = document.getElementById('ba-track');
  const dotsC = document.getElementById('ba-dots');
  if (!track || !dotsC) return;
  const slides = track.querySelectorAll('.ba-slide');
  if (!slides.length) return;
  let i = 0;
  slides.forEach((_, idx) => {
    const d = document.createElement('button');
    d.className = 'ba-dot' + (idx === 0 ? ' on' : '');
    d.setAttribute('aria-label', `Slide ${idx + 1}`);
    d.addEventListener('click', () => go(idx));
    dotsC.appendChild(d);
  });
  function go(n) {
    i = (n + slides.length) % slides.length;
    track.style.transform = `translateX(-${i * 100}%)`;
    dotsC.querySelectorAll('.ba-dot').forEach((x, k) => x.classList.toggle('on', k === i));
  }
  const prev = document.getElementById('ba-prev');
  const next = document.getElementById('ba-next');
  if (prev) prev.addEventListener('click', () => go(i - 1));
  if (next) next.addEventListener('click', () => go(i + 1));
})();

// Vision Studio — upload demo + swatch tinting
(() => {
  const upload = document.getElementById('vs-upload');
  const preview = document.getElementById('vs-preview');
  const swatches = document.getElementById('vs-swatches');
  const tint = document.getElementById('vs-wall');
  const name = document.getElementById('sw-name');
  if (!upload || !preview) return;
  upload.addEventListener('click', () => {
    upload.classList.add('loading');
    const title = upload.querySelector('.vs-up-title');
    const sub = upload.querySelector('.vs-up-sub');
    if (title) title.textContent = 'Detecting walls…';
    if (sub) sub.textContent = 'AI vision model at work';
    setTimeout(() => {
      upload.hidden = true;
      preview.hidden = false;
      if (swatches) swatches.hidden = false;
      preview.classList.add('in');
      if (swatches) swatches.classList.add('in');
    }, 1100);
  });
  const sws = swatches ? swatches.querySelectorAll('.sw') : [];
  sws.forEach(sw => sw.addEventListener('click', () => {
    sws.forEach(x => x.classList.remove('on'));
    sw.classList.add('on');
    if (tint) tint.style.background = sw.dataset.tint || 'transparent';
    if (name) name.textContent = sw.dataset.name || '';
  }));
  const first = swatches ? swatches.querySelector('.sw.on') : null;
  if (first && tint) tint.style.background = first.dataset.tint;
})();

})();
