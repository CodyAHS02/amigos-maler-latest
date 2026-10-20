/* eslint-disable react/no-unescaped-entities */
export default function AboutContent() {
  return (
    <>
<main>
        <section className="about-hero" id="top" data-hero>
            <div className="section-shell">
                <div className="about-hero-media">
                    <img src="/assets/services-imags/about-hero.jpg"
                        alt="High-quality property with a well-maintained facade" fetchpriority="high" decoding="async" />
                </div>
                <div className="about-hero-overlay"></div>

                <div className="about-hero-inner">
                    <p className="section-kicker">About Us</p>
                    <h1>Every property has a story.<span>We help continue writing it.</span></h1>
                    <p className="hero-copy">
                        Amigos Maler GmbH stands for precise craftsmanship, personal consultation and high-quality
                        solutions for painting, plastering and renovation work. Our ambition goes beyond a beautiful
                        coat of paint: we want to protect, enhance and preserve the value of properties over the
                        long term.
                    </p>
                    <div className="hero-actions">
                        <a href="#story" className="btn btn-light">Our Story ↓</a>
                        <a href="#process" className="btn btn-ghost">Our Process ↓</a>
                    </div>
                </div>

                <a href="#story" className="scroll-indicator" aria-label="Scroll to our story">
                    <span></span>
                    Scroll
                </a>
            </div>
        </section>

        <section className="story-section" id="story">
            <div className="section-shell story-grid">
                <div className="story-copy reveal-block">
                    <p className="section-kicker">Our Story</p>
                    <h2>A passion for craftsmanship became a vision for properties.</h2>
                    <p>
                        Amigos Maler emerged from a passion for color, design, and precise craftsmanship. What began
                        with classic painting work evolved with every project and every client relationship.
                    </p>
                    <p>
                        Today we combine traditional painting and plastering craftsmanship with modern consultation,
                        high-quality materials, and a holistic view of properties.
                    </p>
                    <p>
                        Throughout it all, our goal has stayed the same: honest work, clean execution, and solutions
                        our clients can rely on for years to come.
                    </p>
                </div>

                <div className="story-images" aria-label="Development from craftsmanship to finished property">
                    <figure className="story-image story-image-1 reveal-image">
                        <img src="/assets/services/pexels-kseniachernaya-5691513.jpg"
                            alt="The beginning — early hands-on painting work" loading="lazy" decoding="async" />
                        <figcaption>The Beginning</figcaption>
                    </figure>
                    <figure className="story-image story-image-2 reveal-image">
                        <img src="/assets/services/pexels-mikhail-nilov-8296991.jpg"
                            alt="Craftsmanship — preparing a surface with care" loading="lazy" decoding="async" />
                        <figcaption>Craftsmanship</figcaption>
                    </figure>
                    <figure className="story-image story-image-3 reveal-image">
                        <img src="/assets/services/Renovation.png"
                            alt="Development — renovation work in an interior space" loading="lazy" decoding="async" />
                        <figcaption>Development</figcaption>
                    </figure>
                    <figure className="story-image story-image-4 reveal-image">
                        <img src="/assets/projects/project-14.jpg" alt="Today — a finished, well-maintained property"
                            loading="lazy" decoding="async" />
                        <figcaption>Today</figcaption>
                    </figure>
                </div>
            </div>
        </section>

        <section className="numbers-section" aria-labelledby="numbers-title">
            <div className="section-shell">
                <div className="section-heading center reveal-block">
                    <p className="section-kicker">Amigos Maler in Numbers</p>
                    <h2 id="numbers-title">Experience that you don't just see you feel.</h2>
                </div>

                <div className="numbers-grid">
                    <article className="number-item reveal-block">
                        <strong data-count="20" data-suffix="+">XX+</strong>
                        <span>years of experience</span>
                    </article>
                    <article className="number-item reveal-block">
                        <strong data-count="120" data-suffix="+">XX+</strong>
                        <span>completed projects</span>
                    </article>
                    <article className="number-item reveal-block">
                        <strong data-count="80" data-suffix="+">XX+</strong>
                        <span>satisfied clients</span>
                    </article>
                    <article className="number-item reveal-block">
                        <strong data-count="12000" data-prefix="XX’">XX’XXX</strong>
                        <span>m² of completed surfaces</span>
                    </article>
                </div>
            </div>
        </section>

        <section className="founder-section" id="founder">
            <div className="section-shell founder-grid">
                {/* Creative Portrait Showcase */}
                <div className="founder-visual-wrap reveal-image" id="founderCardWrap">
                    <div className="founder-ambient-glow" id="founderAmbientGlow" aria-hidden="true"></div>
                    
                    <div className="founder-card-3d" id="founderCard3d">
                        <figure className="founder-image">
                            <img src="/chatbot-main.jpeg" alt="Patricio Arias, Founder and Managing Director of Amigos Maler GmbH" loading="lazy" decoding="async" />
                            <div className="founder-image-glare" id="founderGlare" aria-hidden="true"></div>
                        </figure>

                        {/* Clean Editorial Floating Badge */}
                        <div className="founder-badge-floating">
                            <div className="badge-icon-wrap">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#FFB800" stroke="#FF7A1A" stroke-width="1.2"/>
                                </svg>
                            </div>
                            <div className="badge-text">
                                <strong>Swiss Craftsmanship</strong>
                                <span>Olten &amp; Greater Switzerland</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Clean, High-End Creative Editorial Copy */}
                <div className="founder-editorial-copy">
                    <div className="reveal-block">
                        <div className="founder-eyebrow">
                            <span className="eyebrow-accent-line"></span>
                            <span className="eyebrow-text">FOUNDER &amp; MANAGING DIRECTOR</span>
                        </div>
                        
                        <h2 className="founder-name">Patricio Arias</h2>
                        <p className="founder-mantra">Craftsmanship. Responsibility. Vision.</p>
                    </div>

                    {/* Prominent Pull Quote */}
                    <div className="founder-pullquote reveal-block">
                        <span className="quote-mark" aria-hidden="true">“</span>
                        <p className="quote-text">We don't simply paint walls. We create spaces, protect substance, and preserve lasting value.</p>
                    </div>

                    {/* Narrative Paragraphs */}
                    <div className="founder-narrative reveal-block">
                        <p>
                            To me, authentic craftsmanship means far more than a technically clean finish. It is a personal responsibility toward the building, the architecture, and the trust placed in our hands.
                        </p>
                        <p>
                            With Amigos Maler, our ambition is not merely completing projects. We build long-term relationships, delivering meticulous execution and sustainable protection that property owners can count on for generations.
                        </p>
                    </div>

                    {/* Minimalist Architectural Hallmarks */}
                    <div className="founder-hallmarks reveal-block">
                        <div className="hallmark-item">
                            <span className="hallmark-num">01</span>
                            <div className="hallmark-body">
                                <strong>Personal Accountability</strong>
                                <span>Direct client consultation and project oversight from start to finish.</span>
                            </div>
                        </div>
                        <div className="hallmark-item">
                            <span className="hallmark-num">02</span>
                            <div className="hallmark-body">
                                <strong>Substance Protection</strong>
                                <span>Premium materials and sustainable methods that preserve building value.</span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Sign-off & Action */}
                    <div className="founder-action-row reveal-block">
                        <div className="founder-signoff">
                            <span className="founder-sig-name">Patricio Arias</span>
                            <span className="founder-sig-title">Managing Director · Amigos Maler GmbH</span>
                        </div>
                        <a href="/contact" className="founder-cta-btn">
                            <span>Discuss Your Project</span>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section className="values-section">
            <div className="section-shell">
                <div className="section-heading reveal-block">
                    <p className="section-kicker">Our Values</p>
                    <h2>What defines Amigos.</h2>
                </div>

                <div className="values-list">
                    <article className="value-row reveal-line">
                        <span className="value-num">01</span>
                        <div className="value-icon" aria-hidden="true"></div>
                        <h3>Craftsmanship</h3>
                        <p>Precise execution and professional solutions.</p>
                    </article>
                    <article className="value-row reveal-line">
                        <span className="value-num">02</span>
                        <div className="value-icon" aria-hidden="true"></div>
                        <h3>Quality</h3>
                        <p>High-quality materials and uncompromising workmanship.</p>
                    </article>
                    <article className="value-row reveal-line">
                        <span className="value-num">03</span>
                        <div className="value-icon" aria-hidden="true"></div>
                        <h3>Trust</h3>
                        <p>Honest advice, transparency, and clear communication.</p>
                    </article>
                    <article className="value-row reveal-line">
                        <span className="value-num">04</span>
                        <div className="value-icon" aria-hidden="true"></div>
                        <h3>Responsibility</h3>
                        <p>We don't think only about today, but about the long-term condition of your property.</p>
                    </article>
                    <article className="value-row reveal-line">
                        <span className="value-num">05</span>
                        <div className="value-icon" aria-hidden="true"></div>
                        <h3>Passion</h3>
                        <p>We love what we do — and that should be visible in the result.</p>
                    </article>
                </div>
            </div>
        </section>

        <section className="process-section" id="process">
            <div className="section-shell">
                <div className="section-heading reveal-block">
                    <p className="section-kicker">How We Work</p>
                    <h2>From the first idea to the finished work.</h2>
                    <p>
                        Clear communication and careful planning are just as much a part of craftsmanship for us
                        as the actual execution.
                    </p>
                </div>

                <div className="process-track" aria-label="Work process">
                    <div className="process-progress"><span></span></div>
                    <article className="process-step reveal-step">
                        <span>01</span>
                        <h3>Personal Consultation</h3>
                        <p>We listen, clarify your wishes and determine the right solution together.</p>
                    </article>
                    <article className="process-step reveal-step">
                        <span>02</span>
                        <h3>Inspection &amp; Analysis</h3>
                        <p>Surfaces, substrates and existing structures are carefully inspected.</p>
                    </article>
                    <article className="process-step reveal-step">
                        <span>03</span>
                        <h3>Transparent Planning &amp; Quotation</h3>
                        <p>Services, materials, schedules and costs are clearly defined.</p>
                    </article>
                    <article className="process-step reveal-step">
                        <span>04</span>
                        <h3>Professional Execution</h3>
                        <p>Our work is performed cleanly, precisely and using high-quality materials.</p>
                    </article>
                    <article className="process-step reveal-step">
                        <span>05</span>
                        <h3>Final Inspection &amp; Long-Term Value Preservation</h3>
                        <p>
                            After completion, we inspect the result together and, if desired, advise you on
                            long-term property protection.
                        </p>
                    </article>
                </div>
            </div>
        </section>

        <section className="why-image-section">
            <div className="why-image-media">
                <img src="/assets/about-bg.jpg" alt="Renovated property with warm lighting" loading="lazy"
                    decoding="async" />
            </div>
            <div className="why-image-overlay"></div>
            <div className="section-shell why-image-content">
                <div className="reveal-block">
                    <p className="section-kicker">Why Amigos Maler</p>
                    <h2>We think beyond the next coat of paint.</h2>
                    <p>
                        A high-quality renovation shouldn't only look good today. It should protect surfaces, extend
                        the lifespan of building elements, and contribute to the long-term value of a property.
                    </p>
                    <p>That's why we combine craftsmanship, consultation, and forward-thinking planning.</p>
                </div>
                <strong className="reveal-block">Quality today.<span>Value preservation for tomorrow.</span></strong>
            </div>
        </section>

        <section className="partner-section" id="partners">
            <div className="section-shell partner-grid">
                <div className="partner-copy reveal-block">
                    <p className="section-kicker">Partners &amp; Network</p>
                    <h2>Expertise connects.</h2>
                    <p>
                        Good property projects rarely come from a single service. That's why we are building a
                        selected network of specialist companies, suppliers, and experts to provide our customers
                        with solutions from a single source when needed.
                    </p>
                    <a href="/contact" className="text-link">Discover our network →</a>
                </div>
                <div className="partner-placeholders" aria-label="Placeholder for future partners">
                    <span className="reveal-line">Specialist Company</span>
                    <span className="reveal-line">Supplier</span>
                    <span className="reveal-line">Expert</span>
                    <span className="reveal-line">Partner</span>
                </div>
            </div>
        </section>

        <section className="testimonials">
            <div className="testimonial-orb"></div>
            <div className="testimonial-center">
                <span className="testimonial-kicker">Customer Reviews</span>
                <h2>Trust is created through good work.</h2>
                <div className="rating">
                    ★★★★★
                    <span>4.9 / 5 On Google</span>
                </div>
            </div>

            <div className="carousel-wrap">
                <button className="carousel-arrow prev" id="carouselPrev" aria-label="Previous testimonial">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>

                <div className="carousel-stage" id="carouselStage">
                    <div className="carousel-track" id="carouselTrack">
                        {/* Cards are injected here by JS from TESTIMONIALS_DATA */}
                    </div>
                </div>

                <button className="carousel-arrow next" id="carouselNext" aria-label="Next testimonial">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>

            <div className="carousel-dots" id="carouselDots"></div>
            <a href="https://amigos-immo.vercel.app/" className="review-btn" target="_blank" rel="noopener noreferrer">Read All Reviews</a>
        </section>

        <section className="final-cta">
            <div className="section-shell final-cta-inner reveal-block">
                <p className="section-kicker">Amigos Maler GmbH</p>
                <h2>Your property deserves a solution that lasts.</h2>
                <p>
                    Whether painting, plastering, renovation, or long-term property value preservation — we provide
                    personal, no-obligation advice.
                </p>
                <div className="hero-actions">
                    <a href="/contact" className="btn btn-light">Discuss your project</a>
                    <a href="/contact" className="btn btn-ghost amigos-btn-secondary">Free Consultation</a>
                </div>
                <span>Amigos Maler GmbH · Olten Region · Switzerland</span>
            </div>
        </section>
    </main>
    </>
  );
}
