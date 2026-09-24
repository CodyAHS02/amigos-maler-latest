import LegacyPage from "@/components/LegacyPage";
import LegacyMarkup from "@/components/LegacyMarkup";
import OfferCalculatorHomeCta from "@/components/offer-calculator/OfferCalculatorHomeCta";

export const metadata = {
  title: "Amigos Maler GmbH | Premium Painting & Property Value Preservation"
};

const mobileColorDockHtml = `<div class="mobile-color-dock" id="mobileColorDock"><span class="mobile-dock-title">Choose a color (back wall):</span><div class="mobile-swatches"><span class="mobile-swatch" data-color="#F5F3ED" style="--c:#F5F3ED" title="Off-White"></span><span class="mobile-swatch" data-color="#D8CCB4" style="--c:#D8CCB4" title="Warm Beige"></span><span class="mobile-swatch" data-color="#A6B09A" style="--c:#A6B09A" title="Sage Green"></span><span class="mobile-swatch" data-color="#8D98A4" style="--c:#8D98A4" title="Slate Grey"></span><span class="mobile-swatch" data-color="#5C6771" style="--c:#5C6771" title="Charcoal"></span><label class="mobile-swatch-custom" title="Choose a custom color"><input type="color" class="mobile-palette-custom" value="#D8CCB4"><i class="fa-solid fa-plus"></i></label></div></div>`;

const wallpapersHtml = `<div class="wallpaper-grid">
    <button class="wallpaperAI" data-wallpaper="/wall-textures/texture-1.jpg" type="button" title="Mineral Plaster">
        <img src="/wall-textures/texture-1.jpg" alt="Mineral Plaster">
        <span>Mineral Plaster</span>
    </button>
    <button class="wallpaperAI" data-wallpaper="/wall-textures/texture-2.jpg" type="button" title="Architectural Panels">
        <img src="/wall-textures/texture-2.jpg" alt="Arch Panels">
        <span>Arch Panels</span>
    </button>
    <button class="wallpaperAI" data-wallpaper="/wall-textures/texture-3.jpg" type="button" title="Sage Combed">
        <img src="/wall-textures/texture-3.jpg" alt="Sage Combed">
        <span>Sage Combed</span>
    </button>
    <button class="wallpaperAI" data-wallpaper="/wall-textures/texture-4.jpg" type="button" title="Classic Damask">
        <img src="/wall-textures/texture-4.jpg" alt="Classic Damask">
        <span>Classic Damask</span>
    </button>
    <button class="wallpaperAI" data-wallpaper="/wall-textures/texture-5.jpg" type="button" title="Terracotta Geo">
        <img src="/wall-textures/texture-5.jpg" alt="Terracotta Geo">
        <span>Terracotta Geo</span>
    </button>
    <button class="wallpaperAI" data-wallpaper="/wall-textures/texture-6.jpg" type="button" title="Soft Botanical">
        <img src="/wall-textures/texture-6.jpg" alt="Soft Botanical">
        <span>Soft Botanical</span>
    </button>
    <button class="wallpaperAI" data-wallpaper="/assets/wallpapers/wallpaper-1.jpg" type="button" title="Textured Linen">
        <img src="/assets/wallpapers/wallpaper-1-thumb.jpg" alt="Textured Linen">
        <span>Textured Linen</span>
    </button>
    <button class="wallpaperAI" data-wallpaper="/assets/wallpapers/wallpaper-2.jpg" type="button" title="Botanical Leaf">
        <img src="/assets/wallpapers/wallpaper-2-thumb.jpg" alt="Botanical Leaf">
        <span>Botanical Leaf</span>
    </button>
</div>`;

const pageHtmlBeforeOffer = `<!-- LOADER -->
    <div class="loader">
        <div class="loader-door loader-door-left"></div>
        <div class="loader-door loader-door-right"></div>
        <div class="loader-counter">
            <span id="loaderCount">0</span><span class="loader-percent">%</span>
        </div>
    </div>

    <!-- HERO SECTION -->
    <section class="hero" data-hero>
        <div class="hero-media">
            <video id="heroVideo" muted playsinline preload="auto">
                <source src="/hero_scrub2.mp4" type="video/mp4">
            </video>

            <canvas id="paintCanvas"></canvas>
            <div class="paint-icons">
                <div class="paint-focus"></div>

                <div class="paint-screen-banner">
                    <h2>Discover what color can change.</h2>
                    <p>Choose a color and experience the room anew.</p>
                </div>

                <!-- LEFT -->
                <div class="paint-point left" data-wall="left-wall">
                    <button class="paint-trigger">
                        <i class="fa-solid fa-paint-roller"></i>
                    </button>

                    <div class="palette">
                        <span data-color="#F5F3ED" style="--c:#F5F3ED"></span>
                        <span data-color="#D8CCB4" style="--c:#D8CCB4"></span>
                        <span data-color="#A6B09A" style="--c:#A6B09A"></span>
                        <span data-color="#8D98A4" style="--c:#8D98A4"></span>
                        <span data-color="#5C6771" style="--c:#5C6771"></span>
                        <input type="color" class="palette-custom" value="#ffffff" title="Custom color">
                    </div>
                </div>

                <!-- FRONT -->
                <div class="paint-point front" data-wall="front-wall">
                    <button class="paint-trigger">
                        <i class="fa-solid fa-paint-roller"></i>
                    </button>

                    <div class="palette">
                        <span data-color="#F5F3ED" style="--c:#F5F3ED"></span>
                        <span data-color="#D8CCB4" style="--c:#D8CCB4"></span>
                        <span data-color="#A6B09A" style="--c:#A6B09A"></span>
                        <span data-color="#8D98A4" style="--c:#8D98A4"></span>
                        <span data-color="#5C6771" style="--c:#5C6771"></span>
                        <input type="color" class="palette-custom" value="#ffffff" title="Custom color">
                    </div>
                </div>

                <!-- RIGHT -->
                <div class="paint-point right" data-wall="right-wall">
                    <button class="paint-trigger">
                        <i class="fa-solid fa-paint-roller"></i>
                    </button>

                    <div class="palette">
                        <span data-color="#F5F3ED" style="--c:#F5F3ED"></span>
                        <span data-color="#D8CCB4" style="--c:#D8CCB4"></span>
                        <span data-color="#A6B09A" style="--c:#A6B09A"></span>
                        <span data-color="#8D98A4" style="--c:#8D98A4"></span>
                        <span data-color="#5C6771" style="--c:#5C6771"></span>
                        <input type="color" class="palette-custom" value="#ffffff" title="Custom color">
                    </div>
                </div>

                <!-- CEILING -->
                <div class="paint-point ceiling" data-wall="ceiling">
                    <button class="paint-trigger">
                        <i class="fa-solid fa-paint-roller"></i>
                    </button>

                    <div class="palette">
                        <span data-color="#F5F3ED" style="--c:#F5F3ED"></span>
                        <span data-color="#D8CCB4" style="--c:#D8CCB4"></span>
                        <span data-color="#A6B09A" style="--c:#A6B09A"></span>
                        <span data-color="#8D98A4" style="--c:#8D98A4"></span>
                        <span data-color="#5C6771" style="--c:#5C6771"></span>
                        <input type="color" class="palette-custom" value="#ffffff" title="Custom color">
                    </div>
                </div>
${mobileColorDockHtml}
            </div>
        </div>

        <div class="hero-overlay">
            <!-- INTRO TITLE -->
            <h1 class="intro-title">
                <span class="intro-title-brand">
                    <span class="intro-title-main">AMIGOS MALER</span>
                    <span class="intro-title-gmbh" style="text-transform: none !important; font-variant: normal !important;">GmbH</span>
                </span>
                <span class="intro-title-sub">Transforming properties with expert painting, professional renovations, <br /> and real estate
                    solutions
                    designed to enhance value, beauty, and lasting impressions.</span>
                <a href="#quote" class="introBtn">Get A Free Quote</a>
            </h1>

            <!-- HERO CONTENT -->
            <div class="hero-content">
                <div class="content-glow"></div>
                <h1>Preserving Your Property’s Value</h1>
                <p>More than paint — a new sense of space.</p>
                <div class="hero-buttons">
                    <a class="btn-primary" href="/contact">Free consultation</a>
                    <a class="btn-secondary" href="#projectsSection">Discover projects</a>
                </div>
            </div>
        </div>
    </section>

    <!-- AUDIENCE BAR -->
    <section class="audience-wrap">
        <div class="audience-bar">
            <div class="audience-left">
                <h3>Built for every kind of owner</h3>
                <p>Whichever role you're in, we tailor property care<br class="audience-break"> to how you actually use the space.</p>
            </div>
            <ul class="audience-right">
                <li class="item">For Homeowners</li>
                <li class="item">For Property Managers</li>
                <li class="item">For Condominium Associations</li>
            </ul>
        </div>
    </section>

    <!-- TARGET AUDIENCE -->
    <section class="audience-cards-section" id="audienceCardsSection">
        <div class="audience-cards-wrapper">
            <div class="audience-cards-heading reveal">
                <span class="section-tag">WHO WE WORK WITH</span>
                <h2>Solutions for<br>every <span>property.</span></h2>
            </div>
            <div class="audience-card-grid">
                <div class="audience-card reveal" data-tilt>
                    <span class="audience-card-num">01</span>
                    <div class="audience-card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 11l9-8 9 8" />
                            <path d="M5 10v10h14V10" />
                            <path d="M9 20v-6h6v6" />
                        </svg>
                    </div>
                    <h3>Private Customers</h3>
                    <p>Renovations, refreshes and property preservation for your home.</p>
                </div>
                <div class="audience-card reveal" data-tilt>
                    <span class="audience-card-num">02</span>
                    <div class="audience-card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 21V7l8-4 8 4v14" />
                            <path d="M9 21v-6h6v6" />
                            <path d="M9 10h.01M15 10h.01M9 14h.01M15 14h.01" />
                        </svg>
                    </div>
                    <h3>Property Management</h3>
                    <p>Maintenance, tenant changes, renovations and coordinated processes.</p>
                </div>
                <div class="audience-card reveal" data-tilt>
                    <span class="audience-card-num">03</span>
                    <div class="audience-card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 17l6-6 4 4 8-8" />
                            <path d="M14 7h7v7" />
                        </svg>
                    </div>
                    <h3>Owners &amp; Investors</h3>
                    <p>Property preservation, renovation projects and long-term support.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- SERVICES SECTION -->
    <section class="services-nav-section" id="servicesNavSection">
        <div class="services-bg" aria-hidden="true">
            <div class="services-bg-grid"></div>
            <div class="services-glow services-glow-1"></div>
            <div class="services-glow services-glow-2"></div>
            <div class="services-glow services-glow-3"></div>
            <div class="services-bg-noise"></div>
            <div class="services-bg-vignette"></div>
        </div>
        <div class="services-nav-wrapper">
            <div class="services-nav-heading reveal">
                <span class="section-tag">WHAT WE DO</span>
                <h2>Our <span>Services.</span></h2>
            </div>
            <div class="services-expand-grid" id="servicesExpandGrid">
                <!-- panels injected here by JS from SERVICES_DATA -->
            </div>
            <div class="services-nav-cta reveal">
                <a href="/services" class="services-view-all-btn">View All Services</a>
            </div>
        </div>
    </section>

    <!-- WHY AMIGOS SECTION -->
    <section class="why-amigos">
        <div class="why-container">
            <div class="why-content reveal">
                <span class="section-tag">Why Amigos?</span>
                <h2>Craftsmanship. Trust. Property Preservation.</h2>
                <p>From individual painting work to complete renovations, we personally support owners and property managers with transparency and reliability.</p>
                <a href="/about" class="why-btn">GET TO KNOW AMIGOS</a>
            </div>
            <div class="stats-column">
                <div class="stat reveal">
                    <h3 class="counter" data-target="500">500</h3>
                    <span>Completed Projects</span>
                </div>
                <div class="stat reveal">
                    <h3 class="counter" data-target="100">100</h3>
                    <span>Satisfied Clients</span>
                </div>
                <div class="stat reveal">
                    <h3 class="counter" data-target="10">10</h3>
                    <span>Years Experience</span>
                </div>
                <div class="stat reveal">
                    <h3 class="counter" data-target="6000">6000</h3>
                    <span>m² of Completed Surfaces</span>
                </div>
            </div>
        </div>
    </section>
`;

const pageHtmlAfterOffer = `
    <!-- AI SECTION -->
    <section class="ai-section">
        <div class="ai-container">
            <div class="ai-top">
                <div class="ai-heading">
                    <span class="section-tag">AI PROPERTY VISUALIZER</span>
                    <h2>Visualize Your Property <span>Before You Paint.</span></h2>
                </div>
                <div class="ai-side">
                    <p>Upload a photo of your facade, living room, bedroom, office or kitchen and instantly explore different paint colors, materials and finishes before making a decision.</p>
                </div>
            </div>

            <div class="ai-workspace" id="aiWorkspace">
                <input type="file" id="roomUpload" accept="image/*" hidden>
                <div class="ai-stage" id="aiStage">
                    <div class="stage-corner tl"></div>
                    <div class="stage-corner tr"></div>
                    <div class="stage-corner bl"></div>
                    <div class="stage-corner br"></div>

                    <div class="stage-topbar" id="stageTopbar">
                        <div class="preview-toggle">
                            <button class="toggle-btn active" data-view="before">Before</button>
                            <button class="toggle-btn" data-view="after">After</button>
                        </div>
                        <span class="ai-status-badge" id="aiStatusBadge">
                            <span class="ai-status-dot"></span> Idle
                        </span>
                    </div>

                    <div class="stage-empty" id="stageEmpty">
                        <div class="upload-icon-ring">
                            <div class="upload-icon">⬆</div>
                        </div>
                        <h3>Upload Your Photo</h3>
                        <p>Drag &amp; drop an image here, or click to choose one</p>
                        <button class="upload-btn" id="uploadBtn" type="button">Choose Image</button>
                        <span class="upload-hint">AI wall detection runs automatically</span>
                    </div>

                    <div class="preview-images" id="previewImages">
                        <img class="preview-before active" id="beforeImg" src="" alt="Before">
                        <img class="preview-after" id="afterImg" src="" alt="After">
                    </div>

                    <div class="scan-overlay" id="scanOverlay">
                        <div class="scan-grid"></div>
                        <div class="scan-line"></div>
                        <div class="scan-status" id="scanStatusText">Analyzing image…</div>
                    </div>
                </div>

                <div class="ai-controls-dock" id="aiControlsDock">
                    <div class="dock-picker">
                        <div class="option-tabs">
                            <button class="option-tab active" data-mode="color" type="button">Paint Color</button>
                            <button class="option-tab" data-mode="wallpaper" type="button">Wallpaper</button>
                        </div>

                        <div class="option-panel color-panel active" data-panel="color">
                            <div class="color-slider-wrap">
                                <div class="color-slider" id="colorSlider">
                                    <div class="color-slider-cursor" id="colorSliderCursor">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M17.5 3.5a2.6 2.6 0 0 1 3.68 3.68L9.5 18.86l-4.86 1.18 1.18-4.86L17.5 3.5Z" stroke="#111" stroke-width="1.6" stroke-linejoin="round" fill="#fff" />
                                            <path d="M14.5 6.5l3 3" stroke="#111" stroke-width="1.6" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="color-selected-row" id="colorSelectedRow">
                                <span class="color-selected-swatch" id="colorSelectedSwatch"></span>
                                <span class="color-selected-label">Your selected color <b id="colorSelectedHex"></b></span>
                            </div>
                        </div>

                        <div class="option-panel wallpaper-panel" data-panel="wallpaper">
                            ${wallpapersHtml}
                        </div>
                    </div>

                    <div class="dock-action">
                        <button class="generate-btn" id="generateBtn" disabled>Generate AI Visualization</button>
                        <div class="ai-note">
                            <p>Colors may vary slightly depending on lighting conditions in your photo.</p>
                            <p>For the most accurate preview, upload a clear, high-quality image with good resolution.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SELECTED PROJECTS -->
    <section class="projects" id="projectsSection">
        <div class="projects-heading">
            <span class="eyebrow">SELECTED PROJECTS</span>
            <h2>Projects That Speak for Themselves.</h2>
            <p>Real work, real locations — drag, use the arrows, or click a neighboring card to browse.</p>
        </div>

        <div class="projects-slider">
            <button class="proj-arrow proj-prev" id="projPrev" type="button" aria-label="Previous project">
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>

            <div class="proj-viewport" id="projViewport">
                <div class="proj-track" id="projTrack">
                    <!-- Project cards injected by JavaScript -->
                </div>
            </div>

            <button class="proj-arrow proj-next" id="projNext" type="button" aria-label="Next project">
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>

        <div class="proj-dots" id="projDots"></div>
    </section>

    <div class="projects-dock" id="projectsDock">
        <span class="dock-indicator" id="dockIndicator"></span>
        <button class="dock-tab active" data-filter="painting" type="button">Painting</button>
        <button class="dock-tab" data-filter="facade" type="button">Facade Restoration</button>
        <button class="dock-tab" data-filter="drywall" type="button">Drywall</button>
    </div>

    <!-- PLANS SECTION -->
    <section class="plans-section">
        <div class="plans-header">
            <span class="plans-eyebrow">PROPERTY MAINTENANCE PLAN</span>
            <h2>Care that compounds.</h2>
            <p>Continuously monitored property care — designed to preserve, and quietly grow, the value of your holdings.</p>
            <div class="billing-toggle">
                <button class="active" data-period="monthly">Monthly</button>
                <button data-period="yearly">Yearly · save 15%</button>
            </div>
        </div>

        <div class="plans-grid">
            <article class="plan-card">
                <span class="plan-name">BASIC</span>
                <div class="price">
                    <small>CHF</small>
                    <strong data-month="290" data-year="2958">290</strong>
                    <span class="price-period">/mo</span>
                </div>
                <p>Essential upkeep for classic homeowners.</p>
                <ul>
                    <li>Annual inspection</li>
                    <li>Maintenance report</li>
                    <li>Priority recommendations</li>
                </ul>
                <button>Select Basic</button>
            </article>

            <article class="plan-card featured">
                <span class="popular">MOST POPULAR</span>
                <span class="plan-name">PLUS</span>
                <div class="price">
                    <small>CHF</small>
                    <strong data-month="590" data-year="6018">590</strong>
                    <span class="price-period">/mo</span>
                </div>
                <p>The complete program for discerning owners.</p>
                <ul>
                    <li>Interior & Exterior inspection</li>
                    <li>Maintenance planning</li>
                    <li>Discount on services</li>
                    <li>Emergency support</li>
                </ul>
                <button>Select Plus</button>
            </article>

            <article class="plan-card">
                <span class="plan-name">PREMIUM</span>
                <div class="price">
                    <small>CHF</small>
                    <strong data-month="1290" data-year="13158">1290</strong>
                    <span class="price-period">/mo</span>
                </div>
                <p>Signature care for luxury villas & institutions.</p>
                <ul>
                    <li>Complete Property Management Support</li>
                    <li>Priority scheduling</li>
                    <li>Personal advisor</li>
                    <li>Long-term strategy</li>
                    <li>Annual property review</li>
                </ul>
                <button>Select Premium</button>
            </article>
        </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="testimonials">
        <div class="testimonial-orb"></div>
        <div class="testimonial-center">
            <span class="testimonial-kicker">TESTIMONIALS</span>
            <h2>Trust That Lasts.</h2>
            <div class="rating">
                ★★★★★
                <span>4.9 / 5 On Google</span>
            </div>
        </div>

        <div class="carousel-wrap">
            <button class="carousel-arrow prev" id="carouselPrev" aria-label="Previous testimonial">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>

            <div class="carousel-stage" id="carouselStage">
                <div class="carousel-track" id="carouselTrack">
                    <!-- Cards are injected here by JS from TESTIMONIALS_DATA -->
                </div>
            </div>

            <button class="carousel-arrow next" id="carouselNext" aria-label="Next testimonial">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>

        <div class="carousel-dots" id="carouselDots"></div>
        <a href="https://amigos-immo.vercel.app/" class="review-btn" target="_blank" rel="noopener noreferrer">Read All Reviews →</a>
    </section>
`;

export default function Page() {
  return (
    <LegacyPage
      css={["/style.css", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.0/css/all.min.css"]}
      html={pageHtmlBeforeOffer}
      scripts={["/script.js", "/app.js"]}
      shell={true}
    >
      <OfferCalculatorHomeCta />
      <LegacyMarkup html={pageHtmlAfterOffer} />
    </LegacyPage>
  );
}
