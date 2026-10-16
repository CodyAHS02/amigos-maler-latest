import LegacyPage from "@/components/LegacyPage";

export const metadata = {
  "title": "About Amigos Maler GmbH | Painters & Plasterers Olten"
};

const pageHtml = "<main>\n        <section class=\"about-hero\" id=\"top\" data-hero>\n            <div class=\"section-shell\">\n                <div class=\"about-hero-media\">\n                    <img src=\"/assets/services-imags/about-hero.jpg\"\n                        alt=\"High-quality property with a well-maintained facade\" fetchpriority=\"high\" decoding=\"async\">\n                </div>\n                <div class=\"about-hero-overlay\"></div>\n\n                <div class=\"about-hero-inner\">\n                    <p class=\"section-kicker\">About Us</p>\n                    <h1>Every property has a story.<span>We help continue writing it.</span></h1>\n                    <p class=\"hero-copy\">\n                        Amigos Maler GmbH stands for precise craftsmanship, personal consultation and high-quality\n                        solutions for painting, plastering and renovation work. Our ambition goes beyond a beautiful\n                        coat of paint: we want to protect, enhance and preserve the value of properties over the\n                        long term.\n                    </p>\n                    <div class=\"hero-actions\">\n                        <a href=\"#story\" class=\"btn btn-light\">Our Story ↓</a>\n                        <a href=\"#process\" class=\"btn btn-ghost\">Our Process ↓</a>\n                    </div>\n                </div>\n\n                <a href=\"#story\" class=\"scroll-indicator\" aria-label=\"Scroll to our story\">\n                    <span></span>\n                    Scroll\n                </a>\n            </div>\n        </section>\n\n        <section class=\"story-section\" id=\"story\">\n            <div class=\"section-shell story-grid\">\n                <div class=\"story-copy reveal-block\">\n                    <p class=\"section-kicker\">Our Story</p>\n                    <h2>A passion for craftsmanship became a vision for properties.</h2>\n                    <p>\n                        Amigos Maler emerged from a passion for color, design, and precise craftsmanship. What began\n                        with classic painting work evolved with every project and every client relationship.\n                    </p>\n                    <p>\n                        Today we combine traditional painting and plastering craftsmanship with modern consultation,\n                        high-quality materials, and a holistic view of properties.\n                    </p>\n                    <p>\n                        Throughout it all, our goal has stayed the same: honest work, clean execution, and solutions\n                        our clients can rely on for years to come.\n                    </p>\n                </div>\n\n                <div class=\"story-images\" aria-label=\"Development from craftsmanship to finished property\">\n                    <figure class=\"story-image story-image-1 reveal-image\">\n                        <img src=\"/assets/services/pexels-kseniachernaya-5691513.jpg\"\n                            alt=\"The beginning — early hands-on painting work\" loading=\"lazy\" decoding=\"async\">\n                        <figcaption>The Beginning</figcaption>\n                    </figure>\n                    <figure class=\"story-image story-image-2 reveal-image\">\n                        <img src=\"/assets/services/pexels-mikhail-nilov-8296991.jpg\"\n                            alt=\"Craftsmanship — preparing a surface with care\" loading=\"lazy\" decoding=\"async\">\n                        <figcaption>Craftsmanship</figcaption>\n                    </figure>\n                    <figure class=\"story-image story-image-3 reveal-image\">\n                        <img src=\"/assets/services/Renovation.png\"\n                            alt=\"Development — renovation work in an interior space\" loading=\"lazy\" decoding=\"async\">\n                        <figcaption>Development</figcaption>\n                    </figure>\n                    <figure class=\"story-image story-image-4 reveal-image\">\n                        <img src=\"/assets/projects/project-14.jpg\" alt=\"Today — a finished, well-maintained property\"\n                            loading=\"lazy\" decoding=\"async\">\n                        <figcaption>Today</figcaption>\n                    </figure>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"numbers-section\" aria-labelledby=\"numbers-title\">\n            <div class=\"section-shell\">\n                <div class=\"section-heading center reveal-block\">\n                    <p class=\"section-kicker\">Amigos Maler in Numbers</p>\n                    <h2 id=\"numbers-title\">Experience that you don't just see you feel.</h2>\n                </div>\n\n                <div class=\"numbers-grid\">\n                    <article class=\"number-item reveal-block\">\n                        <strong data-count=\"20\" data-suffix=\"+\">XX+</strong>\n                        <span>years of experience</span>\n                    </article>\n                    <article class=\"number-item reveal-block\">\n                        <strong data-count=\"120\" data-suffix=\"+\">XX+</strong>\n                        <span>completed projects</span>\n                    </article>\n                    <article class=\"number-item reveal-block\">\n                        <strong data-count=\"80\" data-suffix=\"+\">XX+</strong>\n                        <span>satisfied clients</span>\n                    </article>\n                    <article class=\"number-item reveal-block\">\n                        <strong data-count=\"12000\" data-prefix=\"XX’\">XX’XXX</strong>\n                        <span>m² of completed surfaces</span>\n                    </article>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"founder-section\" id=\"founder\">\n            <div class=\"section-shell founder-grid\">\n                <!-- Creative Portrait Showcase -->\n                <div class=\"founder-visual-wrap reveal-image\" id=\"founderCardWrap\">\n                    <div class=\"founder-ambient-glow\" id=\"founderAmbientGlow\" aria-hidden=\"true\"></div>\n                    \n                    <div class=\"founder-card-3d\" id=\"founderCard3d\">\n                        <figure class=\"founder-image\">\n                            <img src=\"/chatbot-main.jpeg\" alt=\"Patricio Arias, Founder and Managing Director of Amigos Maler GmbH\" loading=\"lazy\" decoding=\"async\">\n                            <div class=\"founder-image-glare\" id=\"founderGlare\" aria-hidden=\"true\"></div>\n                        </figure>\n\n                        <!-- Clean Editorial Floating Badge -->\n                        <div class=\"founder-badge-floating\">\n                            <div class=\"badge-icon-wrap\">\n                                <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\">\n                                    <path d=\"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z\" fill=\"#FFB800\" stroke=\"#FF7A1A\" stroke-width=\"1.2\"/>\n                                </svg>\n                            </div>\n                            <div class=\"badge-text\">\n                                <strong>Swiss Craftsmanship</strong>\n                                <span>Olten &amp; Greater Switzerland</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Clean, High-End Creative Editorial Copy -->\n                <div class=\"founder-editorial-copy\">\n                    <div class=\"reveal-block\">\n                        <div class=\"founder-eyebrow\">\n                            <span class=\"eyebrow-accent-line\"></span>\n                            <span class=\"eyebrow-text\">FOUNDER &amp; MANAGING DIRECTOR</span>\n                        </div>\n                        \n                        <h2 class=\"founder-name\">Patricio Arias</h2>\n                        <p class=\"founder-mantra\">Craftsmanship. Responsibility. Vision.</p>\n                    </div>\n\n                    <!-- Prominent Pull Quote -->\n                    <div class=\"founder-pullquote reveal-block\">\n                        <span class=\"quote-mark\" aria-hidden=\"true\">“</span>\n                        <p class=\"quote-text\">We don\'t simply paint walls. We create spaces, protect substance, and preserve lasting value.</p>\n                    </div>\n\n                    <!-- Narrative Paragraphs -->\n                    <div class=\"founder-narrative reveal-block\">\n                        <p>\n                            To me, authentic craftsmanship means far more than a technically clean finish. It is a personal responsibility toward the building, the architecture, and the trust placed in our hands.\n                        </p>\n                        <p>\n                            With Amigos Maler, our ambition is not merely completing projects. We build long-term relationships, delivering meticulous execution and sustainable protection that property owners can count on for generations.\n                        </p>\n                    </div>\n\n                    <!-- Minimalist Architectural Hallmarks -->\n                    <div class=\"founder-hallmarks reveal-block\">\n                        <div class=\"hallmark-item\">\n                            <span class=\"hallmark-num\">01</span>\n                            <div class=\"hallmark-body\">\n                                <strong>Personal Accountability</strong>\n                                <span>Direct client consultation and project oversight from start to finish.</span>\n                            </div>\n                        </div>\n                        <div class=\"hallmark-item\">\n                            <span class=\"hallmark-num\">02</span>\n                            <div class=\"hallmark-body\">\n                                <strong>Substance Protection</strong>\n                                <span>Premium materials and sustainable methods that preserve building value.</span>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!-- Bottom Sign-off & Action -->\n                    <div class=\"founder-action-row reveal-block\">\n                        <div class=\"founder-signoff\">\n                            <span class=\"founder-sig-name\">Patricio Arias</span>\n                            <span class=\"founder-sig-title\">Managing Director · Amigos Maler GmbH</span>\n                        </div>\n                        <a href=\"/contact\" class=\"founder-cta-btn\">\n                            <span>Discuss Your Project</span>\n                            <svg width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\">\n                                <path d=\"M5 12h14M12 5l7 7-7 7\"/>\n                            </svg>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"values-section\">\n            <div class=\"section-shell\">\n                <div class=\"section-heading reveal-block\">\n                    <p class=\"section-kicker\">Our Values</p>\n                    <h2>What defines Amigos.</h2>\n                </div>\n\n                <div class=\"values-list\">\n                    <article class=\"value-row reveal-line\">\n                        <span class=\"value-num\">01</span>\n                        <div class=\"value-icon\" aria-hidden=\"true\"></div>\n                        <h3>Craftsmanship</h3>\n                        <p>Precise execution and professional solutions.</p>\n                    </article>\n                    <article class=\"value-row reveal-line\">\n                        <span class=\"value-num\">02</span>\n                        <div class=\"value-icon\" aria-hidden=\"true\"></div>\n                        <h3>Quality</h3>\n                        <p>High-quality materials and uncompromising workmanship.</p>\n                    </article>\n                    <article class=\"value-row reveal-line\">\n                        <span class=\"value-num\">03</span>\n                        <div class=\"value-icon\" aria-hidden=\"true\"></div>\n                        <h3>Trust</h3>\n                        <p>Honest advice, transparency, and clear communication.</p>\n                    </article>\n                    <article class=\"value-row reveal-line\">\n                        <span class=\"value-num\">04</span>\n                        <div class=\"value-icon\" aria-hidden=\"true\"></div>\n                        <h3>Responsibility</h3>\n                        <p>We don't think only about today, but about the long-term condition of your property.</p>\n                    </article>\n                    <article class=\"value-row reveal-line\">\n                        <span class=\"value-num\">05</span>\n                        <div class=\"value-icon\" aria-hidden=\"true\"></div>\n                        <h3>Passion</h3>\n                        <p>We love what we do — and that should be visible in the result.</p>\n                    </article>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"process-section\" id=\"process\">\n            <div class=\"section-shell\">\n                <div class=\"section-heading reveal-block\">\n                    <p class=\"section-kicker\">How We Work</p>\n                    <h2>From the first idea to the finished work.</h2>\n                    <p>\n                        Clear communication and careful planning are just as much a part of craftsmanship for us\n                        as the actual execution.\n                    </p>\n                </div>\n\n                <div class=\"process-track\" aria-label=\"Work process\">\n                    <div class=\"process-progress\"><span></span></div>\n                    <article class=\"process-step reveal-step\">\n                        <span>01</span>\n                        <h3>Personal Consultation</h3>\n                        <p>We listen, clarify your wishes and determine the right solution together.</p>\n                    </article>\n                    <article class=\"process-step reveal-step\">\n                        <span>02</span>\n                        <h3>Inspection &amp; Analysis</h3>\n                        <p>Surfaces, substrates and existing structures are carefully inspected.</p>\n                    </article>\n                    <article class=\"process-step reveal-step\">\n                        <span>03</span>\n                        <h3>Transparent Planning &amp; Quotation</h3>\n                        <p>Services, materials, schedules and costs are clearly defined.</p>\n                    </article>\n                    <article class=\"process-step reveal-step\">\n                        <span>04</span>\n                        <h3>Professional Execution</h3>\n                        <p>Our work is performed cleanly, precisely and using high-quality materials.</p>\n                    </article>\n                    <article class=\"process-step reveal-step\">\n                        <span>05</span>\n                        <h3>Final Inspection &amp; Long-Term Value Preservation</h3>\n                        <p>\n                            After completion, we inspect the result together and, if desired, advise you on\n                            long-term property protection.\n                        </p>\n                    </article>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"why-image-section\">\n            <div class=\"why-image-media\">\n                <img src=\"/assets/about-bg.jpg\" alt=\"Renovated property with warm lighting\" loading=\"lazy\"\n                    decoding=\"async\">\n            </div>\n            <div class=\"why-image-overlay\"></div>\n            <div class=\"section-shell why-image-content\">\n                <div class=\"reveal-block\">\n                    <p class=\"section-kicker\">Why Amigos Maler</p>\n                    <h2>We think beyond the next coat of paint.</h2>\n                    <p>\n                        A high-quality renovation shouldn't only look good today. It should protect surfaces, extend\n                        the lifespan of building elements, and contribute to the long-term value of a property.\n                    </p>\n                    <p>That's why we combine craftsmanship, consultation, and forward-thinking planning.</p>\n                </div>\n                <strong class=\"reveal-block\">Quality today.<span>Value preservation for tomorrow.</span></strong>\n            </div>\n        </section>\n\n        <section class=\"partner-section\" id=\"partners\">\n            <div class=\"section-shell partner-grid\">\n                <div class=\"partner-copy reveal-block\">\n                    <p class=\"section-kicker\">Partners &amp; Network</p>\n                    <h2>Expertise connects.</h2>\n                    <p>\n                        Good property projects rarely come from a single service. That's why we are building a\n                        selected network of specialist companies, suppliers, and experts to provide our customers\n                        with solutions from a single source when needed.\n                    </p>\n                    <a href=\"/contact\" class=\"text-link\">Discover our network →</a>\n                </div>\n                <div class=\"partner-placeholders\" aria-label=\"Placeholder for future partners\">\n                    <span class=\"reveal-line\">Specialist Company</span>\n                    <span class=\"reveal-line\">Supplier</span>\n                    <span class=\"reveal-line\">Expert</span>\n                    <span class=\"reveal-line\">Partner</span>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"testimonials\">\n            <div class=\"testimonial-orb\"></div>\n            <div class=\"testimonial-center\">\n                <span class=\"testimonial-kicker\">Customer Reviews</span>\n                <h2>Trust is created through good work.</h2>\n                <div class=\"rating\">\n                    ★★★★★\n                    <span>4.9 / 5 On Google</span>\n                </div>\n            </div>\n\n            <div class=\"carousel-wrap\">\n                <button class=\"carousel-arrow prev\" id=\"carouselPrev\" aria-label=\"Previous testimonial\">\n                    <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\">\n                        <path d=\"M15 18l-6-6 6-6\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                    </svg>\n                </button>\n\n                <div class=\"carousel-stage\" id=\"carouselStage\">\n                    <div class=\"carousel-track\" id=\"carouselTrack\">\n                        <!-- Cards are injected here by JS from TESTIMONIALS_DATA -->\n                    </div>\n                </div>\n\n                <button class=\"carousel-arrow next\" id=\"carouselNext\" aria-label=\"Next testimonial\">\n                    <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\">\n                        <path d=\"M9 18l6-6-6-6\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                    </svg>\n                </button>\n            </div>\n\n            <div class=\"carousel-dots\" id=\"carouselDots\"></div>\n            <a href=\"https://amigos-immo.vercel.app/\" class=\"review-btn\" target=\"_blank\" rel=\"noopener noreferrer\">Read All Reviews</a>\n        </section>\n\n        <section class=\"final-cta\">\n            <div class=\"section-shell final-cta-inner reveal-block\">\n                <p class=\"section-kicker\">Amigos Maler GmbH</p>\n                <h2>Your property deserves a solution that lasts.</h2>\n                <p>\n                    Whether painting, plastering, renovation, or long-term property value preservation — we provide\n                    personal, no-obligation advice.\n                </p>\n                <div class=\"hero-actions\">\n                    <a href=\"/contact\" class=\"btn btn-light\">Discuss your project</a>\n                    <a href=\"/contact\" class=\"btn btn-ghost amigos-btn-secondary\">Free Consultation</a>\n                </div>\n                <span>Amigos Maler GmbH · Olten Region · Switzerland</span>\n            </div>\n        </section>\n    </main>";

const forcedAboutDarkThemeCss = `
html[data-theme="amigos-dark"] body[data-page="about"],
html[data-theme="amigos-dark"] body {
  --about-logo-gradient: linear-gradient(120deg, #FFD21F 0%, #FF7A1A 44%, #E62453 100%);
}
html[data-theme="amigos-dark"] body .numbers-section.numbers-section,
html[data-theme="amigos-dark"] body .values-section.values-section,
html[data-theme="amigos-dark"] body .final-cta.final-cta,
html[data-theme="amigos-dark"] body[data-page="about"] .numbers-section,
html[data-theme="amigos-dark"] body[data-page="about"] .values-section,
html[data-theme="amigos-dark"] body[data-page="about"] .final-cta {
  background:
    var(--about-logo-gradient) !important;
  background-size: 320% 320% !important;
  animation: aboutMovingGradient 12s ease-in-out infinite !important;
}
html[data-theme="amigos-dark"] body .values-section.values-section .value-row,
html[data-theme="amigos-dark"] body[data-page="about"] .values-section .value-row {
  background: var(--about-logo-gradient) !important;
  background-size: 320% 320% !important;
  animation: aboutMovingGradient 10s ease-in-out infinite !important;
  padding-left: clamp(52px, 4vw, 82px) !important;
  padding-right: clamp(34px, 3vw, 64px) !important;
  border-color: rgba(255, 255, 255, .42) !important;
}
html[data-theme="amigos-dark"] body .values-section.values-section .value-icon::before,
html[data-theme="amigos-dark"] body .values-section.values-section .value-icon::after,
html[data-theme="amigos-dark"] body[data-page="about"] .values-section .value-icon::before,
html[data-theme="amigos-dark"] body[data-page="about"] .values-section .value-icon::after {
  background: #fff !important;
}
html[data-theme="amigos-dark"] body .numbers-section.numbers-section *,
html[data-theme="amigos-dark"] body .values-section.values-section *,
html[data-theme="amigos-dark"] body .final-cta.final-cta *,
html[data-theme="amigos-dark"] body[data-page="about"] .numbers-section *,
html[data-theme="amigos-dark"] body[data-page="about"] .values-section *,
html[data-theme="amigos-dark"] body[data-page="about"] .final-cta * {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}
html[data-theme="amigos-dark"] body .final-cta.final-cta .btn,
html[data-theme="amigos-dark"] body .final-cta.final-cta .btn-light,
html[data-theme="amigos-dark"] body[data-page="about"] .final-cta .btn,
html[data-theme="amigos-dark"] body[data-page="about"] .final-cta .btn-light {
  background: #fff !important;
  border-color: #fff !important;
  color: #050505 !important;
  -webkit-text-fill-color: #050505 !important;
}

/* Dark theme surfaces stay navy; the logo gradient remains an accent, not the whole background. */
html[data-theme="amigos-dark"] body main > .values-section,
html[data-theme="amigos-dark"] body[data-page="about"] main > .values-section {
  background:
    radial-gradient(circle at 86% 8%, rgba(230, 36, 83, .16), transparent 32%),
    linear-gradient(145deg, #071a33 0%, #0d2542 58%, #071a33 100%) !important;
  background-size: 100% 100% !important;
  animation: none !important;
}
html[data-theme="amigos-dark"] body main > .values-section .value-row,
html[data-theme="amigos-dark"] body[data-page="about"] main > .values-section .value-row {
  background: rgba(255, 255, 255, .045) !important;
  border-color: rgba(255, 255, 255, .18) !important;
  transition: background .35s ease, border-color .35s ease, transform .35s ease !important;
}
html[data-theme="amigos-dark"] body main > .values-section .value-row:hover,
html[data-theme="amigos-dark"] body main > .values-section .value-row.is-selected {
  background: linear-gradient(90deg, rgba(246, 190, 16, .16), rgba(230, 36, 83, .14), transparent) !important;
  border-color: rgba(246, 190, 16, .58) !important;
}

/* Numbers: navy section surface with separate gradient panels. */
html[data-theme="amigos-dark"] body main > .numbers-section,
html[data-theme="amigos-dark"] body[data-page="about"] main > .numbers-section {
  background: #061629 !important;
  background-image: radial-gradient(circle at 82% 8%, rgba(26, 77, 120, .28), transparent 34%) !important;
  animation: none !important;
}
html[data-theme="amigos-dark"] body main > .numbers-section .number-item,
html[data-theme="amigos-dark"] body[data-page="about"] main > .numbers-section .number-item {
  background: linear-gradient(135deg, #143b60 0%, #0d2947 48%, #1a4266 100%) !important;
  background-size: 220% 220% !important;
  border-color: rgba(255, 255, 255, .16) !important;
  animation: aboutMovingGradient 10s ease-in-out infinite !important;
}
html[data-theme="amigos-dark"] body main > .numbers-section .number-item:hover,
html[data-theme="amigos-dark"] body[data-page="about"] main > .numbers-section .number-item:hover {
  background: linear-gradient(135deg, #1b4d77 0%, #113250 48%, #24577e 100%) !important;
  background-size: 220% 220% !important;
}

/* Final page-scoped lock: Numbers keeps the navy treatment in both themes. */
html body[data-page="about"] main > .numbers-section,
html body main > .numbers-section {
  background: #061629 !important;
  background-image: radial-gradient(circle at 82% 8%, rgba(26, 77, 120, .28), transparent 34%) !important;
  background-size: 100% 100% !important;
  animation: none !important;
}
html body[data-page="about"] main > .numbers-section .number-item,
html body main > .numbers-section .number-item {
  background: linear-gradient(135deg, #143b60 0%, #0d2947 48%, #1a4266 100%) !important;
  background-size: 220% 220% !important;
  border-color: rgba(255, 255, 255, .16) !important;
  animation: aboutMovingGradient 10s ease-in-out infinite !important;
}
html body[data-page="about"] main > .numbers-section .number-item > strong,
html body[data-page="about"] main > .numbers-section .number-item > span,
html body main > .numbers-section .number-item > strong,
html body main > .numbers-section .number-item > span {
  background-image: linear-gradient(105deg, #f6be10 0%, #f39125 44%, #e62453 100%) !important;
  background-size: 220% 220% !important;
  background-clip: text !important;
  -webkit-background-clip: text !important;
  color: transparent !important;
  -webkit-text-fill-color: transparent !important;
  animation: aboutMovingGradient 10s ease-in-out infinite !important;
}
html body[data-page="about"] main > .numbers-section .number-item::before,
html body main > .numbers-section .number-item::before {
  content: none !important;
  display: none !important;
  width: 0 !important;
  opacity: 0 !important;
  background: none !important;
}

/* Light theme: gradient cards with white Numbers copy. */
html:not([data-theme="amigos-dark"]) body[data-page="about"] main > .numbers-section .number-item,
html[data-theme="amigos-light"] body[data-page="about"] main > .numbers-section .number-item {
  background: linear-gradient(105deg, #f6be10 0%, #f39125 44%, #e62453 100%) !important;
  background-size: 220% 220% !important;
  animation: aboutMovingGradient 10s ease-in-out infinite !important;
}
html:not([data-theme="amigos-dark"]) body[data-page="about"] main > .numbers-section .number-item > strong,
html:not([data-theme="amigos-dark"]) body[data-page="about"] main > .numbers-section .number-item > span,
html[data-theme="amigos-light"] body[data-page="about"] main > .numbers-section .number-item > strong,
html[data-theme="amigos-light"] body[data-page="about"] main > .numbers-section .number-item > span {
  background-image: none !important;
  background-clip: border-box !important;
  -webkit-background-clip: border-box !important;
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
  animation: none !important;
}

/* Keep the five-step timeline compact; the global readability floor must not stretch it. */
html[data-theme="amigos-dark"] body main > .process-section .process-track .process-step,
html[data-theme="amigos-dark"] body[data-page="about"] main > .process-section .process-track .process-step {
  padding: 84px 20px 0 0 !important;
  min-height: 0 !important;
}
html[data-theme="amigos-dark"] body main > .process-section .process-track .process-step h3,
html[data-theme="amigos-dark"] body[data-page="about"] main > .process-section .process-track .process-step h3 {
  margin-bottom: 12px !important;
  font-size: 17px !important;
  line-height: 1.25 !important;
}
html[data-theme="amigos-dark"] body main > .process-section .process-track .process-step p,
html[data-theme="amigos-dark"] body[data-page="about"] main > .process-section .process-track .process-step p {
  font-size: 13.5px !important;
  line-height: 1.55 !important;
}

`;

const forcedAboutSecondaryButtonCss = `
@keyframes aboutSecondaryButtonBorderFlow {
  0% { background-position: 0% 50%, 0% 50%; }
  50% { background-position: 100% 50%, 100% 50%; }
  100% { background-position: 0% 50%, 0% 50%; }
}

html body[data-page="about"] main .about-hero .hero-actions > a.btn.btn-ghost,
html[data-theme="amigos-dark"] body[data-page="about"] main .about-hero .hero-actions > a.btn.btn-ghost {
  position: relative !important;
  z-index: 1 !important;
  isolation: isolate !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  min-height: 58px !important;
  padding: 16px 30px !important;
  border: 1.5px solid transparent !important;
  border-radius: 999px !important;
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  overflow: visible !important;
  color: #071a33 !important;
  -webkit-text-fill-color: #071a33 !important;
  box-shadow: none !important;
}

html body[data-page="about"] main .about-hero .hero-actions > a.btn.btn-ghost:hover,
html[data-theme="amigos-dark"] body[data-page="about"] main .about-hero .hero-actions > a.btn.btn-ghost:hover {
  background: linear-gradient(105deg, #f6be10 0%, #f39125 44%, #e62453 100%) !important;
  background-image: linear-gradient(105deg, #f6be10 0%, #f39125 44%, #e62453 100%) !important;
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
  box-shadow: none !important;
}

/* Final About hero lock: target the process link itself so broad CTA rules cannot repaint it. */
html body main .about-hero.about-hero .hero-actions.hero-actions > a.btn[href="#process"],
html body main .about-hero.about-hero .hero-actions.hero-actions > a.btn[href="#process"]:visited {
  position: relative !important;
  z-index: 1 !important;
  isolation: isolate !important;
  display: inline-flex !important;
  flex-direction: row !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 8px !important;
  min-height: 58px !important;
  height: auto !important;
  padding: 16px 30px 16px 72px !important;
  margin: 0 !important;
  line-height: 1 !important;
  white-space: nowrap !important;
  transform: none !important;
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  border: 0 !important;
  outline: 0 !important;
  border-radius: 999px !important;
  overflow: hidden !important;
  transition: background .25s ease, color .25s ease !important;
  color: #071a33 !important;
  -webkit-text-fill-color: #071a33 !important;
  box-shadow: none !important;
}

/* White circle badge (matches the Our Story button). */
html body main .about-hero.about-hero .hero-actions.hero-actions > a.btn[href="#process"]::before {
  content: "" !important;
  display: block !important;
  position: absolute !important;
  inset: auto auto auto 10px !important;
  top: 50% !important;
  left: 10px !important;
  z-index: 0 !important;
  width: 40px !important;
  height: 40px !important;
  margin: 0 !important;
  padding: 0 !important;
  border: 0 !important;
  border-radius: 50% !important;
  background: #ffffff !important;
  background-image: none !important;
  opacity: 1 !important;
  box-shadow: 0 8px 18px rgba(7, 26, 51, .16) !important;
  transform: translateY(-50%) !important;
  transition: transform .25s ease !important;
  -webkit-mask: none !important;
  mask: none !important;
  animation: none !important;
  pointer-events: none !important;
}

/* Arrow inside the circle. */
html body main .about-hero.about-hero .hero-actions.hero-actions > a.btn[href="#process"]::after {
  content: "\\2192" !important;
  display: block !important;
  position: absolute !important;
  inset: auto auto auto 22px !important;
  top: 50% !important;
  left: 22px !important;
  z-index: 1 !important;
  width: auto !important;
  height: auto !important;
  margin: 0 !important;
  padding: 0 !important;
  border: 0 !important;
  background: transparent !important;
  color: #071a33 !important;
  -webkit-text-fill-color: #071a33 !important;
  font-size: 22px !important;
  font-weight: 900 !important;
  line-height: 1 !important;
  opacity: 1 !important;
  transform: translateY(-52%) !important;
  transition: transform .25s ease !important;
  -webkit-mask: none !important;
  mask: none !important;
  animation: none !important;
  pointer-events: none !important;
}

/* Hover: badge + arrow nudge right. */
html body main .about-hero.about-hero .hero-actions.hero-actions > a.btn[href="#process"]:hover::before,
html body main .about-hero.about-hero .hero-actions.hero-actions > a.btn[href="#process"]:focus-visible::before {
  transform: translate(6px, -50%) !important;
}

html body main .about-hero.about-hero .hero-actions.hero-actions > a.btn[href="#process"]:hover::after,
html body main .about-hero.about-hero .hero-actions.hero-actions > a.btn[href="#process"]:focus-visible::after {
  transform: translate(6px, -52%) !important;
}

html body main .about-hero.about-hero .hero-actions.hero-actions > a.btn[href="#process"]:hover,
html body main .about-hero.about-hero .hero-actions.hero-actions > a.btn[href="#process"]:focus-visible {
  background: linear-gradient(105deg, #f6be10 0%, #f39125 44%, #e62453 100%) !important;
  background-image: linear-gradient(105deg, #f6be10 0%, #f39125 44%, #e62453 100%) !important;
  background-color: transparent !important;
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
  box-shadow: none !important;
}

/* ===== Final CTA: "Free Consultation" = SECONDARY button (see .agents/rules/button-styles.md) ===== */
html body main .final-cta.final-cta .hero-actions.hero-actions > a.btn.btn-ghost[href],
html body main .final-cta.final-cta .hero-actions.hero-actions > a.btn.btn-ghost[href]:visited {
  position: relative !important;
  isolation: isolate !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 12px !important;
  min-height: 58px !important;
  padding: 16px 30px 16px 72px !important;
  border: 0 !important;
  outline: 0 !important;
  border-radius: 999px !important;
  overflow: hidden !important;
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  color: #071a33 !important;
  -webkit-text-fill-color: #071a33 !important;
  font-weight: 800 !important;
  line-height: 1.1 !important;
  text-decoration: none !important;
  box-shadow: none !important;
  transform: none !important;
  transition: background .25s ease, color .25s ease !important;
}

html body main .final-cta.final-cta .hero-actions.hero-actions > a.btn.btn-ghost[href]::before {
  content: "" !important;
  display: block !important;
  position: absolute !important;
  inset: auto auto auto 10px !important;
  top: 50% !important;
  left: 10px !important;
  z-index: 0 !important;
  width: 40px !important;
  height: 40px !important;
  margin: 0 !important;
  padding: 0 !important;
  border: 0 !important;
  border-radius: 50% !important;
  background: #ffffff !important;
  background-image: none !important;
  opacity: 1 !important;
  box-shadow: 0 8px 18px rgba(7, 26, 51, .16) !important;
  transform: translateY(-50%) !important;
  transition: transform .25s ease !important;
  -webkit-mask: none !important;
  mask: none !important;
  animation: none !important;
  pointer-events: none !important;
}

html body main .final-cta.final-cta .hero-actions.hero-actions > a.btn.btn-ghost[href]::after {
  content: "\\2192" !important;
  display: block !important;
  position: absolute !important;
  inset: auto auto auto 22px !important;
  top: 50% !important;
  left: 22px !important;
  z-index: 1 !important;
  width: auto !important;
  height: auto !important;
  margin: 0 !important;
  padding: 0 !important;
  border: 0 !important;
  background: transparent !important;
  color: #071a33 !important;
  -webkit-text-fill-color: #071a33 !important;
  font-size: 22px !important;
  font-weight: 900 !important;
  line-height: 1 !important;
  opacity: 1 !important;
  transform: translateY(-52%) !important;
  transition: transform .25s ease !important;
  -webkit-mask: none !important;
  mask: none !important;
  animation: none !important;
  pointer-events: none !important;
}

html body main .final-cta.final-cta .hero-actions.hero-actions > a.btn.btn-ghost[href]:hover,
html body main .final-cta.final-cta .hero-actions.hero-actions > a.btn.btn-ghost[href]:focus-visible {
  background: linear-gradient(105deg, #f6be10 0%, #f39125 44%, #e62453 100%) !important;
  background-image: linear-gradient(105deg, #f6be10 0%, #f39125 44%, #e62453 100%) !important;
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
  transform: none !important;
  box-shadow: none !important;
}

html body main .final-cta.final-cta .hero-actions.hero-actions > a.btn.btn-ghost[href]:hover::before,
html body main .final-cta.final-cta .hero-actions.hero-actions > a.btn.btn-ghost[href]:focus-visible::before {
  transform: translate(6px, -50%) !important;
}

html body main .final-cta.final-cta .hero-actions.hero-actions > a.btn.btn-ghost[href]:hover::after,
html body main .final-cta.final-cta .hero-actions.hero-actions > a.btn.btn-ghost[href]:focus-visible::after {
  transform: translate(6px, -52%) !important;
}

/* Dark theme: final CTA sits on the brand gradient, so secondary text goes white. */
html[data-theme="amigos-dark"] body main .final-cta.final-cta .hero-actions.hero-actions > a.btn.btn-ghost[href] {
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
}

html[data-theme="amigos-dark"] body main .final-cta.final-cta .hero-actions.hero-actions > a.btn.btn-ghost[href]:hover,
html[data-theme="amigos-dark"] body main .final-cta.final-cta .hero-actions.hero-actions > a.btn.btn-ghost[href]:focus-visible {
  background: rgba(255, 255, 255, .16) !important;
  background-image: none !important;
}

/* Dark theme: the process label must remain readable over the navy hero image. */
html[data-theme="amigos-dark"] body main .about-hero.about-hero .hero-actions.hero-actions > a.btn[href="#process"],
html[data-theme="amigos-dark"] body main .about-hero.about-hero .hero-actions.hero-actions > a.btn[href="#process"]:visited {
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
}

html[data-theme="amigos-dark"] body main .about-hero.about-hero .hero-actions.hero-actions > a.btn[href="#process"]:hover,
html[data-theme="amigos-dark"] body main .about-hero.about-hero .hero-actions.hero-actions > a.btn[href="#process"]:focus-visible {
  color: #071a33 !important;
  -webkit-text-fill-color: #071a33 !important;
}
`;

export default function Page() {
  return (
    <LegacyPage
      css={["/style.css", "/about.css"]}
      html={pageHtml}
      scripts={["/about.js", "/script.js"]}
      shell={true}
    >
      <style dangerouslySetInnerHTML={{ __html: forcedAboutDarkThemeCss }} data-about-dark-theme-force />
      <style dangerouslySetInnerHTML={{ __html: forcedAboutSecondaryButtonCss }} data-about-secondary-button-force />
    </LegacyPage>
  );
}
