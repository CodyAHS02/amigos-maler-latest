import LegacyPage from "@/components/LegacyPage";

export const metadata = {
  title: "Real Estate & Projects | Amigos Immo · Amigos Maler GmbH",
  description: "Amigo Immo AI-powered property intelligence platform. Predictive maintenance, computer-vision damage detection, and instant AI quotes for luxury real estate."
};

const pageHtml = `

  <!-- Ambient background layer -->
  <div class="amb">
    <div class="blob b1"></div>
    <div class="blob b2"></div>
    <div class="blob b3"></div>
    <div class="blob b4"></div>
  </div>
  <div class="grain"></div>

  

  <!-- SECTION 1 · HERO (scroll-scrubbed video) -->
  <section class="hero projects-scrub-hero" data-projects-hero data-hero>
    <div class="hero-media">
      <video id="projectsHeroVideoLight" class="projects-hero-video projects-hero-video-light media-light" muted playsinline preload="auto" aria-label="Amigos Maler project hero video, light theme">
        <source src="/projects%20page/hero-video-light.mp4" type="video/mp4">
      </video>
      <video id="projectsHeroVideoDark" class="projects-hero-video projects-hero-video-dark media-dark" muted playsinline preload="auto" aria-label="Amigos Maler project hero video, dark theme">
        <source src="/projects%20page/hero-video-dark.mp4" type="video/mp4">
      </video>
    </div>
    <div class="hero-overlay"></div>
    <div class="hero-spotlight"></div>
    <div class="hero-particles"></div>
    <div class="hero-inner">
      <div class="hero-eyebrow">AI Powered Real Estate | Painting | Renovation Services</div>
      <h1>YOUR PARTNER FOR<br><span class="goldline">PROPERTY VALUE PRESERVATION</span></h1>
      <p class="hero-sub">For Homeowners | For Property Managers | For Investors</p>
      <div class="hero-ctas">
        <a class="btn btn-solid mag" href="#calc">Free Consultation</a>
        <a class="btn mag" href="#showcase">View Projects</a>
      </div>
    </div>
    <div class="scroll-indicator">⌄</div>
  </section>

  <!-- SECTION 2 · TRUST / STATS -->
  <section id="trust-stats">
    <div class="container">
      <div class="section-head track-record-head reveal">
        <div class="eyebrow">Track record</div>
        <svg class="brush" viewBox="0 0 180 22">
          <path d="M2 14 C 30 4, 70 20, 110 10 S 170 14, 178 8" />
        </svg>
        <h2>Two decades of quiet excellence, reimagined with AI.</h2>
        <p>12'400 properties analyzed. 380 active AI-monitored portfolios. Zero missed maintenance windows.</p>
      </div>
      <div class="project-stats-grid reveal">
        <div class="project-stat-card"><span class="project-stat-number"><span data-count="500">0</span><span class="project-stat-suffix">+</span></span>
          <div class="project-stat-label">Projects Completed</div>
        </div>
        <div class="project-stat-card"><span class="project-stat-number"><span data-count="100">0</span><span class="project-stat-suffix">+</span></span>
          <div class="project-stat-label">Satisfied Clients</div>
        </div>
        <div class="project-stat-card"><span class="project-stat-number"><span data-count="10">0</span><span class="project-stat-suffix">+yrs</span></span>
          <div class="project-stat-label">Experience</div>
        </div>
        <div class="project-stat-card"><span class="project-stat-number"><span data-count="6000">0</span><span class="project-stat-suffix">+</span></span>
          <div class="project-stat-label">m² renovated</div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 3 · SERVICES (scroll-driven horizontal reveal) -->
  <template id="removed-services">
    <div class="svc-pin">
      <div class="container svc-head-wrap">
        <div class="section-head reveal">
          <div class="eyebrow">Services</div>
          <svg class="brush" viewBox="0 0 180 22">
            <path d="M2 12 C 40 22, 80 2, 120 14 S 170 6, 178 12" />
          </svg>
          <h2>Eight disciplines. One AI-powered standard.</h2>
          <p>Scroll to explore — every service, engineered around Amigos Immo precision and AI intelligence.</p>
        </div>
      </div>
      <div class="svc-track-wrap">
        <div class="svc-track" id="svc-track">
          <div class="glass svc-card-h">
            <div class="svc-icon">
              <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.2">
                <path d="M8 32 L20 8 L32 32 Z M14 22 L26 22" />
                <circle cx="20" cy="16" r="2" />
              </svg>
            </div>
            <div class="num">01</div>
            <h3>Wall Painting</h3>
            <p>Premium interior and exterior painting with flawless finishes built to last.</p>
            <div class="arrow">Discover →</div>
          </div>
          <div class="glass svc-card-h">
            <div class="svc-icon">
              <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.2">
                <path d="M6 34 L20 8 L34 34 Z M6 34 L34 34" />
                <circle cx="20" cy="24" r="3" />
                <path d="M20 24 L20 30" />
              </svg>
            </div>
            <div class="num">02</div>
            <h3>Drywall</h3>
            <p>Seamless drywall installation and repairs for perfectly smooth surfaces.</p>
            <div class="arrow">Discover →</div>
          </div>
          <div class="glass svc-card-h">
            <div class="svc-icon">
              <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.2">
                <rect x="6" y="10" width="28" height="24" />
                <path d="M6 18 L34 18 M14 10 L14 34 M26 10 L26 34" />
              </svg>
            </div>
            <div class="num">03</div>
            <h3>Renovations</h3>
            <p>Modern renovations that enhance comfort, functionality, and property appeal.</p>
            <div class="arrow">Discover →</div>
          </div>
          <div class="glass svc-card-h featured">
            <div class="svc-icon">
              <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.2">
                <circle cx="20" cy="20" r="14" />
                <circle cx="20" cy="20" r="6" />
                <path d="M20 2 L20 8 M20 32 L20 38 M2 20 L8 20 M32 20 L38 20" />
              </svg>
            </div>
            <div class="num">04</div>
            <h3>Facade Restoration</h3>
            <p>Restore and protect exterior facades with durable, weather-resistant solutions.</p>
            <div class="arrow">Discover →</div>
          </div>
          <div class="glass svc-card-h">
            <div class="svc-icon">
              <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.2">
                <path d="M20 4 L36 12 L36 28 L20 36 L4 28 L4 12 Z" />
                <path d="M20 4 L20 36 M4 12 L20 20 L36 12" />
              </svg>
            </div>
            <div class="num">05</div>
            <h3>Appartment Preparation</h3>
            <p>Prepare apartments for sale or rental with fast, high-quality finishing work.</p>
            <div class="arrow">Discover →</div>
          </div>
          <div class="glass svc-card-h">
            <div class="svc-icon">
              <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.2">
                <path d="M20 4 L36 12 L36 28 L20 36 L4 28 L4 12 Z" />
                <path d="M20 4 L20 36 M4 12 L20 20 L36 12" />
              </svg>
            </div>
            <div class="num">06</div>
            <h3>Property Maintenance</h3>
            <p>Reliable maintenance services to keep your property in excellent condition year-round.</p>
            <div class="arrow">Discover →</div>
          </div>
          <div class="glass svc-card-h">
            <div class="svc-icon">
              <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.2">
                <path d="M20 4 L36 12 L36 28 L20 36 L4 28 L4 12 Z" />
                <path d="M20 4 L20 36 M4 12 L20 20 L36 12" />
              </svg>
            </div>
            <div class="num">07</div>
            <h3>Property Value Preservation</h3>
            <p>Proactive care that protects your property's value for the long term.</p>
            <div class="arrow">Discover →</div>
          </div>
          <div class="glass svc-card-h">
            <div class="svc-icon">
              <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.2">
                <path d="M20 4 L36 12 L36 28 L20 36 L4 28 L4 12 Z" />
                <path d="M20 4 L20 36 M4 12 L20 20 L36 12" />
              </svg>
            </div>
            <div class="num">08</div>
            <h3>Investment Property Support</h3>
            <p>Tailored maintenance and renovation solutions for property investors and portfolios.</p>
            <div class="arrow">Discover →</div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <!-- SECTION 4 · AI WORKFLOW -->
  <template id="removed-ai-workflow">
    <div class="container">
      <div class="section-head reveal sec-alt">
        <div class="eyebrow">The AI Workflow</div>
        <svg class="brush" viewBox="0 0 180 22">
          <path d="M2 10 C 50 20, 90 4, 130 12 S 172 10, 178 14" />
        </svg>
        <h2>From room photo to painting quote.</h2>
        <p>Four steps. This is how AMIGOS Vision Studio turns a single image of a room into a signed painting quotation.
        </p>
      </div>
      <div class="flow reveal">
        <div class="flow-step">
          <div class="flow-num">01</div>
          <div class="flow-ic"><svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.3">
              <rect x="6" y="10" width="28" height="22" rx="2" />
              <path d="M6 26 L14 18 L22 26 L28 22 L34 28" />
              <circle cx="26" cy="16" r="2" />
            </svg></div>
          <h4>Upload room image</h4>
          <p>Drop a photo of any room, from any angle.</p>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-step">
          <div class="flow-num">02</div>
          <div class="flow-ic"><svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.3">
              <rect x="6" y="6" width="28" height="28" />
              <path d="M6 14 L34 14 M14 6 L14 34 M22 14 L22 34" />
            </svg></div>
          <h4>AI detects walls</h4>
          <p>Vision model isolates every wall plane automatically.</p>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-step">
          <div class="flow-num">03</div>
          <div class="flow-ic"><svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.3">
              <circle cx="14" cy="14" r="6" />
              <circle cx="26" cy="14" r="6" />
              <circle cx="20" cy="26" r="6" />
            </svg></div>
          <h4>Apply paint · wallpaper · texture</h4>
          <p>Preview any finish live on the detected walls.</p>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-step">
          <div class="flow-num">04</div>
          <div class="flow-ic"><svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.3">
              <rect x="8" y="4" width="24" height="32" rx="2" />
              <path d="M14 12 L26 12 M14 18 L26 18 M14 24 L22 24" />
              <path d="M22 32 L26 36 L34 26" stroke-width="1.6" />
            </svg></div>
          <h4>Generate painting quote</h4>
          <p>Instant quotation, ready to sign.</p>
        </div>
      </div>
    </div>
  </template>

  <!-- SECTION 5 · AI VISION STUDIO (two-column: copy + interactive preview) -->
  <template id="removed-ai-vision-studio">
    <div class="container">
      <div class="vs-grid reveal">
        <div class="vs-left">
          <div class="eyebrow">AI Vision Studio</div>
          <svg class="brush" viewBox="0 0 180 22">
            <path d="M2 10 C 50 20, 90 4, 130 12 S 172 10, 178 14" />
          </svg>
          <h2>See your walls, before you paint them.</h2>
          <p class="vs-lede">Upload a photo of any room. AMIGOS AI detects every wall automatically, then previews the
            paint colours, wallpapers, and textures you're considering — instantly.</p>
          <ol class="vs-steps">
            <li><span>01</span>Upload a room photo</li>
            <li><span>02</span>AI detects the walls</li>
            <li><span>03</span>Preview paint, wallpaper &amp; textures</li>
            <li><span>04</span>Generate a painting quotation</li>
          </ol>
        </div>
        <div class="vs-right">
          <div class="vs-stage glass" id="vs-stage">
            <div class="vs-upload" id="vs-upload">
              <div class="vs-up-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4">
                  <path d="M24 32 L24 10 M14 20 L24 10 L34 20" />
                  <path d="M8 34 L8 40 L40 40 L40 34" />
                </svg>
              </div>
              <div class="vs-up-title">Upload your room photo</div>
              <div class="vs-up-sub">Click to try the demo</div>
            </div>
            <div class="vs-preview" id="vs-preview" hidden>
              <img class="vs-room" src="/amigos/img/after.jpg" alt="Room preview" loading="lazy">
              <div class="vs-wall" id="vs-wall"></div>
              <svg class="vs-outline" viewBox="0 0 100 62" preserveAspectRatio="none" aria-hidden="true">
                <path d="M4 6 L54 4 L54 54 L4 58 Z" fill="none" stroke="#C5A059" stroke-width=".25"
                  stroke-dasharray="1.2 1.2" />
                <path d="M60 4 L96 8 L96 56 L60 54 Z" fill="none" stroke="#C5A059" stroke-width=".25"
                  stroke-dasharray="1.2 1.2" opacity=".75" />
              </svg>
              <div class="vs-badge">Walls detected</div>
            </div>
          </div>
          <div class="vs-swatches" id="vs-swatches" hidden>
            <div class="vs-sw-label">Preview finish</div>
            <div class="vs-sw-row">
              <button class="sw on" data-tint="rgba(232,223,209,.55)" data-name="Alpine Cream"
                style="background:#E8DFD1"></button>
              <button class="sw" data-tint="rgba(58,74,92,.55)" data-name="Zurich Slate"
                style="background:#3A4A5C"></button>
              <button class="sw" data-tint="rgba(139,107,71,.5)" data-name="Bronze Oak"
                style="background:#8B6B47"></button>
              <button class="sw" data-tint="rgba(74,93,74,.5)" data-name="Alpine Sage"
                style="background:#4A5D4A"></button>
              <button class="sw" data-tint="rgba(180,150,110,.35)" data-name="Silk Wallpaper"
                style="background:repeating-linear-gradient(45deg,#c9b48a 0 4px,#8f7a4f 4px 8px)"></button>
              <button class="sw" data-tint="rgba(200,190,175,.4)" data-name="Marble Texture"
                style="background:radial-gradient(circle at 30% 30%,#e6dfd1,#a09889)"></button>
            </div>
            <div class="sw-name" id="sw-name">Alpine Cream</div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <!-- FOUNDER · placed directly before the price engine -->
  <section id="founder" class="founder-section">
    <div class="container founder-shell reveal">
      <div class="founder-portrait-wrap" data-founder-portrait>
        <div class="founder-orbit" aria-hidden="true"><span></span><span></span><span></span></div>
        <figure class="founder-portrait">
          <img src="/Projects-Page-Woman.jpeg" alt="Patricia, founder of Amigos Immo" loading="lazy">
          <figcaption>
            <strong>Patricia</strong>
            <span>Founder · Amigos Immo</span>
          </figcaption>
        </figure>
      </div>
      <div class="founder-story">
        <p class="founder-kicker">A personal standard for every property</p>
        <h2>Meet Patricia.</h2>
        <p class="founder-lede">Patricia founded Amigos Immo around a simple belief: property care should feel personal, transparent and thoughtfully planned—not reactive.</p>
        <p>She brings clients, craftspeople and technology together to make complex renovation and maintenance decisions easier to understand. Every recommendation starts with listening, every estimate is explained clearly, and every project is considered in the context of the property's long-term value.</p>
        <blockquote>“A property is more than a project. It is a responsibility we share with every owner.”</blockquote>
        <a class="founder-link" href="#calc">Plan your project with Patricia <span aria-hidden="true">→</span></a>
      </div>
    </div>
  </section>

  <!-- SECTION 6 · PROJECT ENQUIRY -->
  <section id="calc">
    <div class="container">
      <div class="section-head reveal sec-alt">
        <div class="eyebrow">Project enquiry</div>
        <svg class="brush" viewBox="0 0 180 22">
          <path d="M2 12 C 40 22, 80 2, 120 14 S 170 6, 178 12" />
        </svg>
        <h2>Tell us what you want to improve.</h2>
        <p>Choose the property, room scope and budget. Patricia’s team will review it and come back with a clear next step.</p>
      </div>

      <form class="glass projects-enquiry-form reveal" id="projects-enquiry-form">
        <input type="hidden" name="projectType" value="Renovation">
        <div class="enquiry-grid">
          <label class="enquiry-field">
            <span>What do I want?</span>
            <select name="want" id="enquiry-want" required>
              <option>Apartment</option>
              <option>House</option>
              <option>Office</option>
              <option>Commercial space</option>
              <option>Facade / exterior</option>
              <option>Other</option>
            </select>
          </label>

          <label class="enquiry-field">
            <span>Which size fits best?</span>
            <select name="scope" id="enquiry-scope" required>
              <option>Studio</option>
              <option>1 bedroom</option>
              <option>2 bedrooms</option>
              <option>3 bedrooms</option>
              <option>Full apartment</option>
            </select>
          </label>

          <label class="enquiry-field">
            <span>Budget</span>
            <select name="budget" required>
              <option value="">Select budget</option>
              <option>Under CHF 2'000</option>
              <option>CHF 2'000 – 5'000</option>
              <option>CHF 5'000 – 10'000</option>
              <option>CHF 10'000 – 25'000</option>
              <option>CHF 25'000+</option>
            </select>
          </label>

          <label class="enquiry-field">
            <span>Timeline</span>
            <select name="timeline" required>
              <option value="">Select timeline</option>
              <option>As soon as possible</option>
              <option>Within 1 month</option>
              <option>1–3 months</option>
              <option>Planning ahead</option>
            </select>
          </label>

          <label class="enquiry-field">
            <span>Name</span>
            <input name="name" type="text" placeholder="Your name" required>
          </label>

          <label class="enquiry-field">
            <span>Email</span>
            <input name="email" type="email" placeholder="you@example.com" required>
          </label>

          <label class="enquiry-field">
            <span>Phone</span>
            <input name="phone" type="tel" placeholder="+41 ..." autocomplete="tel">
          </label>

          <label class="enquiry-field enquiry-wide">
            <span>Tell us what you actually want</span>
            <textarea name="details" rows="5" placeholder="Example: repaint two bedrooms, repair cracks, refresh the facade, prepare apartment handover..." required></textarea>
          </label>
        </div>

        <div class="enquiry-actions">
          <button class="btn btn-solid mag" type="submit">Send project enquiry</button>
          <p id="projects-enquiry-status" aria-live="polite"></p>
        </div>
      </form>
    </div>
  </section>

  <!-- SECTION 7 · PARTNER LOGOS -->
  <section id="partners-strip">
    <div class="container">
      <div class="partners-head reveal">
        <span>Trusted B2B partners</span>
        <p>Selected Swiss partners and portfolio teams working with Amigos standards.</p>
      </div>
      <div class="partner-marquee reveal" aria-label="B2B partner logos">
        <div class="partner-logo-track">
          <img src="/assets/partner-logos/helvetia-estates.svg" alt="Helvetia Estates" loading="lazy" decoding="async">
          <img src="/assets/partner-logos/alpine-habitat.svg" alt="Alpine Habitat" loading="lazy" decoding="async">
          <img src="/assets/partner-logos/nova-raum.svg" alt="Nova Raum" loading="lazy" decoding="async">
          <img src="/assets/partner-logos/lakeview-partners.svg" alt="Lakeview Partners" loading="lazy" decoding="async">
          <img src="/assets/partner-logos/urbanhold.svg" alt="Urbanhold" loading="lazy" decoding="async">
          <img src="/assets/partner-logos/canton-works.svg" alt="Canton Works" loading="lazy" decoding="async">
          <img src="/assets/partner-logos/helvetia-estates.svg" alt="" aria-hidden="true" loading="lazy" decoding="async">
          <img src="/assets/partner-logos/alpine-habitat.svg" alt="" aria-hidden="true" loading="lazy" decoding="async">
          <img src="/assets/partner-logos/nova-raum.svg" alt="" aria-hidden="true" loading="lazy" decoding="async">
          <img src="/assets/partner-logos/lakeview-partners.svg" alt="" aria-hidden="true" loading="lazy" decoding="async">
          <img src="/assets/partner-logos/urbanhold.svg" alt="" aria-hidden="true" loading="lazy" decoding="async">
          <img src="/assets/partner-logos/canton-works.svg" alt="" aria-hidden="true" loading="lazy" decoding="async">
        </div>
      </div>
    </div>
  </section>

  <!-- WHY AMIGOS and plans sections removed per client request. -->

  <!-- SECTION 9 · CREATIVE PROJECTS SHOWCASE -->
  <section id="project-showcase-lab" aria-labelledby="project-showcase-title">
    <div class="container project-lab-shell">
      <div class="project-lab-copy reveal">
        <div class="eyebrow">Project showcase</div>
        <svg class="brush" viewBox="0 0 180 22">
          <path d="M2 12 C 40 22, 80 2, 120 14 S 170 6, 178 12" />
        </svg>
        <h2 id="project-showcase-title">Project stories in motion.</h2>
        <p>Each panel cycles through more views while the original before and after comparison stays below.</p>
      </div>

      <div class="project-lab-board reveal" data-project-stage>
        <article class="project-lab-card is-large" style="--carousel-delay:0s">
          <div class="project-card-carousel" aria-hidden="true">
            <img src="/amigos/img/after.jpg" alt="" loading="lazy" decoding="async">
            <img src="/amigos/img/hero-light.jpg" alt="" loading="lazy" decoding="async">
            <img src="/amigos/img/after2.jpg" alt="" loading="lazy" decoding="async">
          </div>
          <div>
            <span>Interior repaint</span>
            <strong>Zürich residence</strong>
          </div>
        </article>
        <article class="project-lab-card" style="--carousel-delay:-2s">
          <div class="project-card-carousel" aria-hidden="true">
            <img src="/amigos/img/ref1.jpg" alt="" loading="lazy" decoding="async">
            <img src="/amigos/img/ref2.jpg" alt="" loading="lazy" decoding="async">
            <img src="/amigos/img/ref3.jpg" alt="" loading="lazy" decoding="async">
          </div>
          <div>
            <span>Facade care</span>
            <strong>Bern townhouse</strong>
          </div>
        </article>
        <article class="project-lab-card" style="--carousel-delay:-4s">
          <div class="project-card-carousel" aria-hidden="true">
            <img src="/amigos/img/after2.jpg" alt="" loading="lazy" decoding="async">
            <img src="/amigos/img/before2.jpg" alt="" loading="lazy" decoding="async">
            <img src="/amigos/img/after.jpg" alt="" loading="lazy" decoding="async">
          </div>
          <div>
            <span>Restoration</span>
            <strong>Geneva apartment</strong>
          </div>
        </article>
        <article class="project-lab-card is-wide" style="--carousel-delay:-6s">
          <div class="project-card-carousel" aria-hidden="true">
            <img src="/amigos/img/ref3.jpg" alt="" loading="lazy" decoding="async">
            <img src="/amigos/img/hero.jpg" alt="" loading="lazy" decoding="async">
            <img src="/amigos/img/villa-night.jpg" alt="" loading="lazy" decoding="async">
          </div>
          <div>
            <span>Premium finish</span>
            <strong>Lake property</strong>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- SECTION 10 · BEFORE/AFTER SHOWCASE (carousel of projects) -->
  <section id="showcase">
    <div class="container">
      <div class="section-head reveal">
        <div class="eyebrow">Selected work</div>
        <svg class="brush" viewBox="0 0 180 22">
          <path d="M2 12 C 40 22, 80 2, 120 14 S 170 6, 178 12" />
        </svg>
        <h2>Drag the handle. Watch the transformation.</h2>
        <p>Interactive before &amp; after from recent Swiss portfolio projects.</p>
      </div>

      <div class="ba-carousel reveal">
        <div class="ba-viewport">
          <div class="ba-track" id="ba-track">
            <div class="ba-slide">
              <div class="ba">
                <img src="/amigos/img/before.jpg" alt="Before" loading="lazy" decoding="async">
                <div class="ba-after-wrap"><img src="/amigos/img/after.jpg" alt="After" loading="lazy" decoding="async"></div>
                <div class="ba-handle"></div>
                <div class="ba-label before">Before</div>
                <div class="ba-label after">After</div>
              </div>
              <div class="ba-meta">
                <span class="tag">Residential · 2025</span>
                <h3>Lakeside villa · Zürichberg</h3>
                <p>Full interior refurbishment · 340 m² · 11 weeks · zero-dust protocol.</p>
              </div>
            </div>
            <div class="ba-slide">
              <div class="ba">
                <img src="/amigos/img/before2.jpg" alt="Before" loading="lazy" decoding="async">
                <div class="ba-after-wrap"><img src="/amigos/img/after2.jpg" alt="After" loading="lazy" decoding="async"></div>
                <div class="ba-handle"></div>
                <div class="ba-label before">Before</div>
                <div class="ba-label after">After</div>
              </div>
              <div class="ba-meta">
                <span class="tag">Renovation · 2025</span>
                <h3>Townhouse restoration · Geneva</h3>
                <p>Damaged interior fully restored · low-VOC finish · 12-year warranty.</p>
              </div>
            </div>
            <div class="ba-slide">
              <div class="ba">
                <img src="/amigos/img/ref2.jpg" alt="Before" loading="lazy" decoding="async">
                <div class="ba-after-wrap"><img src="/amigos/img/ref1.jpg" alt="After" loading="lazy" decoding="async"></div>
                <div class="ba-handle"></div>
                <div class="ba-label before">Before</div>
                <div class="ba-label after">After</div>
              </div>
              <div class="ba-meta">
                <span class="tag">Heritage · 2024</span>
                <h3>Belle Époque facade · Bern</h3>
                <p>Cantonal-approved mineral silicate system · 220 m² heritage-listed.</p>
              </div>
            </div>
            <div class="ba-slide">
              <div class="ba">
                <img src="/amigos/img/before.jpg" alt="Before" loading="lazy" decoding="async">
                <div class="ba-after-wrap"><img src="/amigos/img/after.jpg" alt="After" loading="lazy" decoding="async"></div>
                <div class="ba-handle"></div>
                <div class="ba-label before">Before</div>
                <div class="ba-label after">After</div>
              </div>
              <div class="ba-meta">
                <span class="tag">Refresh · 2024</span>
                <h3>City apartment · Zürich</h3>
                <p>Premium wall and ceiling refresh · protected floors · clean handover.</p>
              </div>
            </div>
            <div class="ba-slide">
              <div class="ba">
                <img src="/amigos/img/ref2.jpg" alt="Before" loading="lazy" decoding="async">
                <div class="ba-after-wrap"><img src="/amigos/img/ref3.jpg" alt="After" loading="lazy" decoding="async"></div>
                <div class="ba-handle"></div>
                <div class="ba-label before">Before</div>
                <div class="ba-label after">After</div>
              </div>
              <div class="ba-meta">
                <span class="tag">Exterior · 2024</span>
                <h3>Private home · Zug</h3>
                <p>Weather-resistant coating system · repaired substrate · careful masking.</p>
              </div>
            </div>
            <div class="ba-slide">
              <div class="ba">
                <img src="/amigos/img/before2.jpg" alt="Before" loading="lazy" decoding="async">
                <div class="ba-after-wrap"><img src="/amigos/img/after2.jpg" alt="After" loading="lazy" decoding="async"></div>
                <div class="ba-handle"></div>
                <div class="ba-label before">Before</div>
                <div class="ba-label after">After</div>
              </div>
              <div class="ba-meta">
                <span class="tag">Repair · 2025</span>
                <h3>Rental handover · Basel</h3>
                <p>Fast turnaround repairs · filling, sanding and final coat in one sequence.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="ba-nav">
          <button class="ba-btn" id="ba-prev" aria-label="Previous">←</button>
          <div class="ba-dots" id="ba-dots"></div>
          <button class="ba-btn" id="ba-next" aria-label="Next">→</button>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 11 · TESTIMONIALS (blueprint bg + circular avatars) -->
  <section id="testi">
    <div class="testi-bg" aria-hidden="true"></div>
    <div class="container">
      <div class="section-head reveal" style="text-align:center;margin-left:auto;margin-right:auto">
        <div class="eyebrow">Clients</div>
        <svg class="brush" viewBox="0 0 180 22" style="margin-left:auto;margin-right:auto">
          <path d="M2 10 C 50 20, 90 4, 130 12 S 172 10, 178 14" />
        </svg>
        <h2>Trusted in Switzerland's most demanding homes.</h2>
      </div>
      <div class="ring reveal" id="ring">
        <div class="ring-avatar" data-idx="0" style="--i:0;--x:14%;--y:22%;--size:120px">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="M. Rüegg">
          <div class="ring-pop">
            <p>"Amigos maintain three of our residences across Zürich and St. Moritz. The service is invisible until you
              notice, five years in, that nothing has ever aged."</p>
            <div class="who"><b>M. Rüegg</b><span>Private client · Zürich</span></div>
          </div>
        </div>
        <div class="ring-avatar" data-idx="1" style="--i:1;--x:32%;--y:70%;--size:100px">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="S. Lehmann">
          <div class="ring-pop">
            <p>"The predictive AI scheduling has cut our reactive maintenance budget by 34%. Their B2B dashboard is the
              quietest, most useful software we run."</p>
            <div class="who"><b>S. Lehmann</b><span>Property Manager · Basel</span></div>
          </div>
        </div>
        <div class="ring-avatar" data-idx="2" style="--i:2;--x:48%;--y:16%;--size:110px">
          <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="E. Kobler">
          <div class="ring-pop">
            <p>"Their AI quote came within 2% of our architect's final tender. Precise, punctual, and completely
              discreet. I have not accepted a rival bid since."</p>
            <div class="who"><b>E. Kobler</b><span>Institutional owner · Geneva</span></div>
          </div>
        </div>
        <div class="ring-avatar" data-idx="3" style="--i:3;--x:62%;--y:62%;--size:130px">
          <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="A. Vogel">
          <div class="ring-pop">
            <p>"The drone facade scan caught a moisture problem two winters before it would have shown on the inside.
              That single report paid for a decade of subscription."</p>
            <div class="who"><b>A. Vogel</b><span>Villa owner · St. Moritz</span></div>
          </div>
        </div>
        <div class="ring-avatar" data-idx="4" style="--i:4;--x:80%;--y:26%;--size:100px">
          <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="J. Brunner">
          <div class="ring-pop">
            <p>"We run a 40-building portfolio. AMIGOS' AI dashboard is the only system that gives us a truthful,
              forward-looking TCO per asset."</p>
            <div class="who"><b>J. Brunner</b><span>Institutional · Zürich</span></div>
          </div>
        </div>
        <div class="ring-avatar" data-idx="5" style="--i:5;--x:86%;--y:74%;--size:115px">
          <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="C. Hunziker">
          <div class="ring-pop">
            <p>"Elegant, quiet, and technically brilliant. Everything a Swiss owner could want. Our chalet has never
              looked better."</p>
            <div class="who"><b>C. Hunziker</b><span>Chalet · Grisons</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 11 · FINAL CTA -->
  <section id="final">
    <video class="bg media-dark" muted loop playsinline preload="none" poster="/amigos/img/villa-night.jpg">
      <source src="https://cdn.pixabay.com/video/2023/10/29/187219-878965591_large.mp4" type="video/mp4">
      <source src="https://cdn.pixabay.com/video/2020/06/12/41800-431386278_large.mp4" type="video/mp4">
      <source src="https://cdn.coverr.co/videos/coverr-a-luxurious-modern-house-1584/1080p.mp4" type="video/mp4">
    </video>
    <img class="bg media-light" src="/amigos/img/final-light.jpg" alt="" loading="lazy" decoding="async">
    <div class="final-vignette"></div>
    <div class="hero-spotlight"></div>
    <div class="inner">
      <div class="eyebrow">Ready when you are</div>
      <h2>The future of your property, in one conversation.</h2>
      <p>Book a private consultation with our senior team. No pressure, no callbacks — just AI-powered clarity.</p>
      <a class="btn btn-solid mag" href="dashboard.html">Book Consultation</a>
    </div>
  </section>

  <footer class="site-footer">
    <div class="container"
      style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:20px">
      <span class="brand">AMIGOS<span>·</span>IMMO</span>
      <nav class="nav"><a href="#.html">Services</a><a href="#">B2B</a><a href="#">References</a><a
          href="#html">Careers</a></nav>
      <p style="font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--grey);opacity:.6">© 2026 · A
        brand of Amigos Maler GmbH · Zürich</p>
    </div>
  </footer>

  
  
  
  
  <script>
    // Plan toggle
    const pt = document.getElementById('plan-toggle');
    if (pt) {
      pt.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
        pt.querySelectorAll('button').forEach(x => x.classList.remove('on'));
        b.classList.add('on');
        const key = b.dataset.p === 'y' ? 'priceY' : 'priceM';
        document.querySelectorAll('[data-price-m]').forEach(el => {
          const v = parseInt(el.dataset[key]);
          el.textContent = v.toLocaleString('de-CH').replace(/,/g, "'");
        });
        document.querySelectorAll('.plan-price .per').forEach(p => p.textContent = b.dataset.p === 'y' ? '/mo · billed yearly' : '/mo');
      });
    }

    // Projects enquiry form — saved to admin consultations.
    (function () {
      const form = document.getElementById('projects-enquiry-form');
      if (!form) return;

      const wantInput = document.getElementById('enquiry-want');
      const scopeInput = document.getElementById('enquiry-scope');
      const status = document.getElementById('projects-enquiry-status');
      const options = {
        "Apartment": ["Studio", "1 bedroom", "2 bedrooms", "3 bedrooms", "Full apartment"],
        "House": ["Small house", "3 bedrooms", "4+ bedrooms", "Full house", "Interior + exterior"],
        "Office": ["Private office", "Small team office", "Full floor", "Reception area", "Meeting rooms"],
        "Commercial space": ["Shop", "Restaurant", "Clinic", "Showroom", "Full commercial unit"],
        "Facade / exterior": ["Balcony", "Facade refresh", "Woodwork", "Windows / doors", "Full exterior"],
        "Other": ["Painting", "Plastering", "Renovation", "Repair work", "Not sure yet"]
      };

      function renderScopes(want) {
        const values = options[want] || options.Other;
        scopeInput.innerHTML = values.map(value => '<option>' + value + '</option>').join('');
        scopeInput.value = values[0];
      }

      wantInput.addEventListener('change', () => renderScopes(wantInput.value));

      renderScopes(wantInput.value);

      form.addEventListener('submit', async event => {
        event.preventDefault();
        const data = new FormData(form);
        const details = [
          "Projects page enquiry.",
          "What do I want: " + data.get('want'),
          "Scope: " + data.get('scope'),
          "Budget: " + data.get('budget'),
          "Timeline: " + data.get('timeline'),
          data.get('phone') ? "Phone: " + data.get('phone') : "",
          "Details: " + data.get('details')
        ].filter(Boolean).join("\\n");

        const payload = new FormData();
        payload.set('name', data.get('name'));
        payload.set('email', data.get('email'));
        payload.set('projectType', data.get('projectType') || 'Renovation');
        payload.set('message', details);

        status.textContent = 'Sending enquiry…';
        status.className = '';
        form.querySelector('button[type="submit"]').disabled = true;

        try {
          const response = await fetch('/api/consultations', { method: 'POST', body: payload });
          const result = await response.json().catch(() => ({}));
          if (!response.ok) throw new Error(result.error || 'Unable to save enquiry.');
          status.textContent = 'Enquiry sent. Patricia’s team will review it shortly.';
          status.className = 'is-success';
          form.reset();
          renderScopes(wantInput.value);
        } catch (error) {
          status.textContent = error.message || 'Unable to send right now. Please try again.';
          status.className = 'is-error';
        } finally {
          form.querySelector('button[type="submit"]').disabled = false;
        }
      });
    })();

    // Before/After carousel
    (function () {
      const track = document.getElementById('ba-track');
      const dotsC = document.getElementById('ba-dots');
      if (!track) return;
      const slides = track.querySelectorAll('.ba-slide');
      let i = 0;
      slides.forEach((_, idx) => {
        const d = document.createElement('button');
        d.className = 'ba-dot' + (idx === 0 ? ' on' : '');
        d.addEventListener('click', () => go(idx));
        dotsC.appendChild(d);
      });
      function go(n) {
        i = (n + slides.length) % slides.length;
        track.style.transform = \`translateX(-\${i * 100}%)\`;
        dotsC.querySelectorAll('.ba-dot').forEach((x, k) => x.classList.toggle('on', k === i));
      }
      document.getElementById('ba-prev').addEventListener('click', () => go(i - 1));
      document.getElementById('ba-next').addEventListener('click', () => go(i + 1));
    })();

    // Vision Studio — upload demo + swatch tinting
    (function () {
      const upload = document.getElementById('vs-upload');
      const preview = document.getElementById('vs-preview');
      const swatches = document.getElementById('vs-swatches');
      const tint = document.getElementById('vs-wall');
      const name = document.getElementById('sw-name');
      if (!upload) return;
      upload.addEventListener('click', () => {
        upload.classList.add('loading');
        upload.querySelector('.vs-up-title').textContent = 'Detecting walls…';
        upload.querySelector('.vs-up-sub').textContent = 'AI vision model at work';
        setTimeout(() => {
          upload.hidden = true;
          preview.hidden = false;
          swatches.hidden = false;
          preview.classList.add('in');
          swatches.classList.add('in');
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
  </script>
`;

export default function ProjectsPage() {
  return (
    <LegacyPage 
      html={`<div class="amigos-wrapper">${pageHtml}</div>`}
      css={['/style.css', 'amigos/styles.css', 'amigos/premium.css', 'amigos/theme.css', 'amigos/projects-theme.css']}
      scripts={['amigos/main.js', 'amigos/calc.js', 'amigos/ba.js', 'amigos/premium.js', 'amigos/projects-hero.js']}
      shell={true}
      gsap={true}
    />
  );
}
// Force reload Tue Sep 15 15:03:19 PKT 2026
