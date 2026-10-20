/* eslint-disable react/no-unescaped-entities */
export default function FacadeRenovationContent() {
  return (
    <>
<main className="facade-page">

        <section className="facade-hero" id="facadeHero" data-hero>
            <div className="facade-hero-media">
                <img src="/assets/facade/ChatGPT Image Aug 24, 2026, 01_59_46 AM.png" alt="Modern building facade" />
            </div>
            <div className="facade-hero-shade"></div>
            <div className="facade-hero-grid"></div>
            <div className="facade-hero-content">
                <div className="facade-hero-kicker reveal-hero">FACADE RENOVATION</div>
                <h1 className="facade-hero-title"><span className="hero-line reveal-hero">Protection</span><span
                        className="hero-line hero-accent reveal-hero">Meets Design.</span></h1>
                <p className="facade-hero-copy reveal-hero">Inspect, prepare and repair existing facades, then protect them
                    long-term with suitable coating systems.</p>
                <div className="facade-hero-actions reveal-hero">
                    <a href="#contact" className="facade-btn facade-btn-primary">Request a Quote <span>↗</span></a>
                    <a href="#facade-work" className="facade-btn facade-btn-outline">View Our Work <span>↓</span></a>
                </div>
            </div>
            <div className="facade-hero-side-note">
                <span>01</span>
                <span>INSPECT</span>
                <span>PREPARE</span>
                <span>PROTECT</span>
            </div>
            <div className="facade-hero-scroll">
                <span>Scroll to explore</span>
                <i></i>
            </div>
        </section>

        <section className="facade-intro section-light" id="facadeIntro">
            <div className="facade-intro-number">01</div>
            <div className="facade-intro-visual reveal-left">
                <div className="facade-intro-image-wrap">
                    <img src="/assets/external/facade-renovation/photo-1564013799919-ab600027ffc6-w1600-q90.jpg"
                        alt="Residential building facade" />
                    <div className="facade-image-caption"><span>EXISTING STRUCTURE</span><span>PROFESSIONAL CARE</span>
                    </div>
                </div>
            </div>
            <div className="facade-intro-content reveal-right">
                <span className="section-kicker">MORE THAN A NEW COLOR</span>
                <h2>A facade should do more than <em>look good.</em></h2>
                <p>Facade renovation is about understanding the existing building, identifying what needs attention and
                    creating a surface that is prepared for lasting protection.</p>
                <p>From repairs and surface preparation to suitable coatings and visual redesign, every stage
                    contributes to the condition and appearance of the property.</p>
                <div className="facade-intro-points">
                    <div><span>01</span><strong>Inspect</strong><small>Understand the existing facade.</small></div>
                    <div><span>02</span><strong>Repair</strong><small>Address damaged areas properly.</small></div>
                    <div><span>03</span><strong>Protect</strong><small>Apply suitable protective systems.</small></div>
                </div>
            </div>
        </section>

        <section className="facade-work section-dark" id="facade-work">
            <div className="facade-section-heading">
                <div>
                    <span className="section-kicker">OUR FACADE WORK</span>
                    <h2>From condition<br /><span>to finish.</span></h2>
                </div>
                <p>Every facade requires its own approach. We combine careful preparation, appropriate materials and
                    precise execution.</p>
            </div>
            <div className="facade-work-grid">
                <article className="facade-work-card reveal-card">
                    <div className="facade-card-media">
                        <img src="/assets/facade/facade-inspection.jpg" alt="Facade inspection" />
                    </div>
                    <div className="facade-card-info">
                        <span>01</span>
                        <h3>Facade Inspection</h3>
                        <p>Assess the condition of the existing facade and identify areas requiring attention.</p>
                        <a href="#facade-process">Explore <b>↗</b></a>
                    </div>
                </article>
                <article className="facade-work-card reveal-card">
                    <div className="facade-card-media">
                        <img src="/assets/facade/Facade-Reapir.jpeg" alt="Facade preparation and repair" />
                    </div>
                    <div className="facade-card-info">
                        <span>02</span>
                        <h3>Preparation &amp; Repair</h3>
                        <p>Prepare surfaces correctly and repair areas that require professional attention.</p>
                        <a href="#facade-process">Explore <b>↗</b></a>
                    </div>
                </article>
                <article className="facade-work-card reveal-card">
                    <div className="facade-card-media">
                        <img src="/assets/facade/Facade-maintain.jpeg" alt="Facade coating work" />
                    </div>
                    <div className="facade-card-info">
                        <span>03</span>
                        <h3>Coating &amp; Protection</h3>
                        <p>Apply suitable coating systems designed to support long-term facade protection.</p>
                        <a href="#facade-process">Explore <b>↗</b></a>
                    </div>
                </article>
                <article className="facade-work-card reveal-card">
                    <div className="facade-card-media">
                        <img src="/assets/external/appartment-renovation/photo-1600566753190-17f0baa2a6c3.jpg?auto=format&fit=crop&w=1200&q=90"
                            alt="Contemporary renovated facade" />
                    </div>
                    <div className="facade-card-info">
                        <span>04</span>
                        <h3>Redesign</h3>
                        <p>Refresh the appearance of the building with a contemporary and considered finish.</p>
                        <a href="#facade-process">Explore <b>↗</b></a>
                    </div>
                </article>
            </div>
        </section>

        {/* ================= BEFORE AFTER ================= */}
        <section className="before-after-section section-light">
            <div className="services-qc-wrap">
                <div className="section-heading reveal">

                    <span>
                        SEE THE DIFFERENCE
                    </span>


                    <h2>
                        Good preparation changes everything.
                    </h2>


                    <p>
                        Paint alone does not create a premium surface.
                        The difference comes from preparation,
                        materials and professional execution.
                    </p>


                </div>

                <div className="before-after-slider" id="baSlider">

                    <div className="ba-before-pane" id="baBeforePane">
                        <img src="/assets/Services-Before-Room.png" alt="Before renovation" />
                        <span className="ba-tag ba-tag-before" id="baTagBefore">BEFORE</span>
                    </div>

                    <div className="ba-after-pane" id="baAfterPane">
                        <img src="/assets/Services-After-Room.png" alt="After renovation" />
                        <span className="ba-tag ba-tag-after" id="baTagAfter">AFTER</span>
                    </div>

                    <div className="slider-divider" id="baDivider">
                        <span className="divider-handle">↔</span>
                    </div>

                </div>
            </div>
        </section>

        {/* ================= FACADE PRODUCTS ================= */}
        <section className="facade-products section-light" id="facadeProducts">
            <div className="facade-products-shell">
                <div className="facade-products-heading">
                    <div>
                        <span className="section-kicker">FASSADEN PRODUKTE</span>
                        <h2>Das passende System<br /><span>für jede Fassade.</span></h2>
                    </div>
                    <p>Die Produktauswahl richtet sich nach Untergrund, Zustand und gewünschtem Ergebnis. Die konkrete
                        Systemempfehlung erfolgt nach einer persönlichen Besichtigung.</p>
                </div>
                <div className="facade-product-grid" data-product-source="herbol-official">
                    <article className="facade-product-card">
                        <div className="facade-product-visual"><img src="/assets/facade-products/herbol-silatec.png" alt="Herbol Silatec Produktgebinde" /></div>
                        <div className="facade-product-content"><span>01 / HERBOL</span><h3>Silatec</h3><p>Füllende Siliconharz-Fassadenfarbe für glatte und strukturierte Untergründe mit mineralisch matter Oberfläche.</p><a href="https://www.herbol.de/de/produkte/silatec" target="_blank" rel="noopener noreferrer">Produkt ansehen <b>↗</b></a></div>
                    </article>
                    <article className="facade-product-card">
                        <div className="facade-product-visual"><img src="/assets/facade-products/herbol-silatec-extra.png" alt="Herbol Silatec Extra Produktgebinde" /></div>
                        <div className="facade-product-content"><span>02 / HERBOL</span><h3>Silatec Extra</h3><p>Mineralisch matte Fassadenfarbe mit quartzrauer Oberfläche, entwickelt zum Kaschieren von Unebenheiten.</p><a href="https://www.herbol.de/de/produkte/silatec-extra" target="_blank" rel="noopener noreferrer">Produkt ansehen <b>↗</b></a></div>
                    </article>
                    <article className="facade-product-card">
                        <div className="facade-product-visual"><img src="/assets/facade-products/herbol-silikat-fassadenfinish.png" alt="Herbol Silikat FassadenFinish Produktgebinde" /></div>
                        <div className="facade-product-content"><span>03 / HERBOL</span><h3>Silikat FassadenFinish</h3><p>Hoch diffusionsfähige Dispersionssilikatfarbe für Neubauten und den historischen Bestand.</p><a href="https://www.herbol.de/de/produkte/silikat-fassadenfinish" target="_blank" rel="noopener noreferrer">Produkt ansehen <b>↗</b></a></div>
                    </article>
                    <article className="facade-product-card">
                        <div className="facade-product-visual"><img src="/assets/facade-products/herboxan-plus.png" alt="Herbol Herboxan Plus Produktgebinde" /></div>
                        <div className="facade-product-content"><span>04 / HERBOL</span><h3>Herboxan Plus</h3><p>Spannungsarme, hoch diffusionsfähige Siliconharz-Fassadenfarbe mit hydrophober Oberfläche.</p><a href="https://www.herbol.de/de/produkte/herboxan-plus" target="_blank" rel="noopener noreferrer">Produkt ansehen <b>↗</b></a></div>
                    </article>
                </div>
                <div className="facade-products-note">
                    <p><strong>Welches Produkt passt zu Ihrer Fassade?</strong><span>Wir prüfen Untergrund und Zustand vor Ort und empfehlen danach den passenden Aufbau.</span></p>
                    <a href="/contact" className="facade-btn facade-btn-primary">Fassade anfragen <span>↗</span></a>
                </div>
            </div>
        </section>

        <section className="facade-quality section-dark" id="facadeQuality">
            <div className="quality-image-wrap">
                <img className="quality-parallax"
                    src="/assets/external/appartment-renovation/photo-1600566753086-00f18fb6b3ea.jpg?auto=format&fit=crop&w=1800&q=90"
                    alt="Detailed architectural facade" />
                <div className="quality-image-overlay"></div>
                <div className="quality-image-word">DURABLE</div>
            </div>
            <div className="quality-content">
                <span className="section-kicker">WHAT MAKES A FACADE LAST?</span>
                <h2>The finish starts<br /><span>beneath the surface.</span></h2>
                <div className="quality-points">
                    <div className="quality-point reveal-point"><span>01</span>
                        <div>
                            <h3>Surface / Substrate</h3>
                            <p>Understanding the existing substrate is the starting point for the right treatment.</p>
                        </div>
                    </div>
                    <div className="quality-point reveal-point"><span>02</span>
                        <div>
                            <h3>Preparation</h3>
                            <p>Proper cleaning, repair and preparation create the foundation for the finish.</p>
                        </div>
                    </div>
                    <div className="quality-point reveal-point"><span>03</span>
                        <div>
                            <h3>Material Selection</h3>
                            <p>Suitable materials and coating systems are selected according to the surface.</p>
                        </div>
                    </div>
                    <div className="quality-point reveal-point"><span>04</span>
                        <div>
                            <h3>Coating</h3>
                            <p>The right coating provides the desired appearance and supports long-term protection.</p>
                        </div>
                    </div>
                    <div className="quality-point reveal-point"><span>05</span>
                        <div>
                            <h3>Professional Execution</h3>
                            <p>Careful application and attention to detail complete the process.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="facade-process section-light" id="facade-process">
            <div className="process-intro">
                <span className="section-kicker">OUR PROCESS</span>
                <h2>Six stages.<br /><span>One considered result.</span></h2>
                <p>From the first inspection to the final handover, every stage follows a clear and professional
                    process.</p>
            </div>
            <div className="facade-timeline">
                <div className="timeline-line"><span className="timeline-progress"></span></div>
                <div className="timeline-step reveal-process">
                    <div className="timeline-marker">01</div>
                    <div className="timeline-content"><span>INSPECTION</span>
                        <h3>Inspection</h3>
                        <p>Inspect the facade and understand its current condition.</p>
                    </div>
                    <div className="timeline-image"><img
                            src="/assets/external/drywall/photo-1504307651254-35680f356dfd.jpg?auto=format&fit=crop&w=900&q=90"
                            alt="Facade inspection work" /></div>
                </div>
                <div className="timeline-step reveal-process">
                    <div className="timeline-marker">02</div>
                    <div className="timeline-content"><span>ANALYSIS</span>
                        <h3>Analysis</h3>
                        <p>Assess surfaces, damage and the work required.</p>
                    </div>
                    <div className="timeline-image"><img
                            src="/assets/external/drywall/photo-1503387762-592deb58ef4e.jpg?auto=format&fit=crop&w=900&q=90"
                            alt="Facade assessment" /></div>
                </div>
                <div className="timeline-step reveal-process">
                    <div className="timeline-marker">03</div>
                    <div className="timeline-content"><span>PREPARATION</span>
                        <h3>Preparation</h3>
                        <p>Clean, repair and prepare the facade for renovation.</p>
                    </div>
                    <div className="timeline-image"><img
                            src="/assets/external/drywall/photo-1581094794329-c8112a89af12.jpg?auto=format&fit=crop&w=900&q=90"
                            alt="Facade preparation" /></div>
                </div>
                <div className="timeline-step reveal-process">
                    <div className="timeline-marker">04</div>
                    <div className="timeline-content"><span>RENOVATION</span>
                        <h3>Renovation</h3>
                        <p>Carry out the required renovation and repair work.</p>
                    </div>
                    <div className="timeline-image"><img
                            src="/assets/external/facade-renovation/photo-1541888946425-d81bb19240f5-w900-q90.jpg"
                            alt="Facade renovation work" /></div>
                </div>
                <div className="timeline-step reveal-process">
                    <div className="timeline-marker">05</div>
                    <div className="timeline-content"><span>COATING</span>
                        <h3>Coating</h3>
                        <p>Apply the appropriate coating system for the facade.</p>
                    </div>
                    <div className="timeline-image"><img
                            src="/assets/external/facade-renovation/photo-1562259949-e8e7689d7828-w900-q90.jpg"
                            alt="Facade coating application" /></div>
                </div>
                <div className="timeline-step reveal-process">
                    <div className="timeline-marker">06</div>
                    <div className="timeline-content"><span>FINAL INSPECTION</span>
                        <h3>Final Inspection</h3>
                        <p>Inspect the finished result and complete a clean handover.</p>
                    </div>
                    <div className="timeline-image"><img
                            src="/assets/external/appartment-renovation/photo-1600566753086-00f18fb6b3ea.jpg?auto=format&fit=crop&w=900&q=90"
                            alt="Completed facade finish" /></div>
                </div>
            </div>
        </section>

        <section className="facade-protection-design" id="protectionDesign">
            <div className="pd-panel pd-protection">
                <div className="pd-image"><img
                        src="/assets/external/facade-renovation/photo-1599619585752-c3edb42a414c-w1800-q90.jpg"
                        alt="Protected building facade" /></div>
                <div className="pd-overlay"></div>
                <div className="pd-content">
                    <span>01 / PROTECTION</span>
                    <h2>Protection</h2>
                    <p>Protect the building facade and support its long-term condition.</p>
                </div>
                <div className="pd-arrow">↗</div>
            </div>
            <div className="pd-panel pd-design">
                <div className="pd-image"><img
                        src="/assets/external/drywall/photo-1600607688969-a5bfcd646154.jpg?auto=format&fit=crop&w=1800&q=90"
                        alt="Contemporary facade design" /></div>
                <div className="pd-overlay"></div>
                <div className="pd-content">
                    <span>02 / DESIGN</span>
                    <h2>Design</h2>
                    <p>Improve the visual appearance and give the property a fresh look.</p>
                </div>
                <div className="pd-arrow">↗</div>
            </div>
        </section>

        <section className="facade-benefits section-light" id="facadeBenefits">
            <div className="benefits-heading">
                <span className="section-kicker">WHY AMIGOS</span>
                <h2>Careful work.<br /><span>Built to last.</span></h2>
            </div>
            <div className="benefits-grid">
                <article className="benefit-card reveal-benefit"><span>01</span>
                    <div className="benefit-icon">＋</div>
                    <h3>Careful Preparation</h3>
                    <p>Every durable finish starts with a properly prepared surface.</p>
                </article>
                <article className="benefit-card reveal-benefit"><span>02</span>
                    <div className="benefit-icon">◈</div>
                    <h3>Suitable Materials</h3>
                    <p>Materials and coating systems are selected to suit the facade.</p>
                </article>
                <article className="benefit-card reveal-benefit"><span>03</span>
                    <div className="benefit-icon">↗</div>
                    <h3>Precise Execution</h3>
                    <p>Professional application with attention to the details that matter.</p>
                </article>
                <article className="benefit-card reveal-benefit"><span>04</span>
                    <div className="benefit-icon">∞</div>
                    <h3>Long-Term Protection</h3>
                    <p>Thoughtful renovation helps maintain the building over time.</p>
                </article>
            </div>
        </section>

        <section className="facade-value" id="propertyValue">
            <div className="value-background">
                <img src="/assets/external/appartment-renovation/photo-1600585154340-be6161a56a0c.jpg?auto=format&fit=crop&w=2400&q=90"
                    alt="Professionally maintained property facade" />
            </div>
            <div className="value-overlay"></div>
            <div className="value-content reveal-value">
                <span className="section-kicker">PROPERTY PRESERVATION</span>
                <h2>A well-maintained facade protects more than first impressions.</h2>
                <p>Regular maintenance, professional renovation and suitable coatings can contribute to protecting the
                    building and maintaining the property's condition.</p>
                <a href="#contact" className="facade-btn facade-btn-light">Discover Property Preservation <span>↗</span></a>
            </div>
            <div className="value-stat"><strong>01</strong><span>MAINTAIN</span></div>
            <div className="value-stat"><strong>02</strong><span>PROTECT</span></div>
            <div className="value-stat"><strong>03</strong><span>PRESERVE</span></div>
        </section>

        <section className="facade-final-cta section-dark" id="contact">
            <div className="cta-orbit"></div>
            <div className="cta-content reveal-cta">
                <span className="section-kicker">START YOUR PROJECT</span>
                <h2>Your facade deserves<br /><span>long-term protection.</span></h2>
                <p>Professional facade inspection, renovation, protection and redesign — carried out with care from
                    preparation through completion.</p>
                <div className="cta-actions">
                    <a href="#" className="facade-btn facade-btn-primary">Request a Free Quote <span>↗</span></a>
                    <a href="#" className="facade-btn facade-btn-outline">Discuss Your Project <span>→</span></a>
                </div>
            </div>
        </section>

    </main>
    </>
  );
}
