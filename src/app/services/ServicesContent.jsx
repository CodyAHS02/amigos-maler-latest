/* eslint-disable react/no-unescaped-entities */
export default function ServicesContent() {
  return (
    <>
{/* ================= HERO ================= */}
    <section className="services-hero">

        <div className="services-qc-wrap">
            <div className="hero-overlay"></div>


            <div className="hero-content reveal">


                <span className="eyebrow">
                    PAINTING · PLASTERING · RENOVATION
                </span>


                <h1>
                    Painting &amp; Renovations
                    in Olten and Surroundings.
                </h1>


                <p>
                    From premium interior painting to plastering and facade renovation,
                    Amigos Maler combines precise craftsmanship, careful preparation
                    and high-quality materials to create results that last.
                </p>


                <div className="hero-buttons">

                    <a href="/#quote" className="primary-btn">
                        Request Quote
                    </a>


                    <a href="/projects" className="secondary-btn">
                        View Our Work →
                    </a>


                </div>


            </div>



            <div className="hero-image parallax">

                <img src="/assets/external/drywall/photo-1581578731548-c64695cc6952.jpg?auto=format&fit=crop&w=1800&q=80"
                    alt="Professional painter working on interior wall" />

            </div>

        </div>
    </section>

    {/* ================= SERVICE TICKER ================= */}
    <section className="service-ticker">

        <div className="ticker-track">

            <span>
                Painting Services
            </span>

            <span>
                •
            </span>


            <span>
                Plastering
            </span>


            <span>
                •
            </span>


            <span>
                Facades
            </span>


            <span>
                •
            </span>


            <span>
                Renovations
            </span>


            <span>
                •
            </span>


            <span>
                Spray Painting
            </span>


            <span>
                •
            </span>


            <span>
                Color Consultation
            </span>


            <span>
                •
            </span>


            <span>
                Property Care
            </span>


        </div>

    </section>

    {/* ================= BEFORE AFTER ================= */}
    <section className="before-after-section">
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

    {/* ================= SERVICES ================= */}
    <section className="services-overview">
        <div className="services-qc-wrap">
            <div className="section-heading reveal">


                <span>
                    OUR SERVICES
                </span>


                <h2>
                    One Partner.
                    Many Possibilities.
                </h2>


                <p>
                    Whether it is a single wall, complete apartment,
                    house renovation or facade project — we guide you
                    from consultation to final handover.
                </p>


            </div>




            <div className="service-grid">



                {/* CARD 01 */}


                <article className="service-card reveal">


                    <div className="service-image">

                        <img
                            src="/assets/external/services/photo-1562259949-e8e7689d7828-w900-q80.jpg" />

                    </div>


                    <div className="service-content">


                        <span className="number">
                            01
                        </span>


                        <h3>
                            Interior Painting
                        </h3>


                        <h4>
                            Walls &amp; Ceilings
                        </h4>


                        <p>
                            Premium finishes for homes, offices and commercial spaces.
                            Carefully prepared and professionally executed.
                        </p>


                        <a href="/interior-painting">
                            Learn More →
                        </a>


                    </div>


                </article>




                {/* CARD 02 */}


                <article className="service-card reveal">


                    <div className="service-image">

                        <img
                            src="/assets/external/drywall/photo-1503387762-592deb58ef4e.jpg?auto=format&fit=crop&w=900&q=80" />

                    </div>


                    <div className="service-content">


                        <span className="number">
                            02
                        </span>


                        <h3>
                            Exterior Painting
                        </h3>


                        <h4>
                            Facades &amp; Outdoor Areas
                        </h4>


                        <p>
                            Weather-resistant coating systems that protect
                            and improve your property.
                        </p>


                        <a href="/exterior-painting">
                            Learn More →
                        </a>


                    </div>


                </article>




                {/* CARD 03 */}


                <article className="service-card reveal">


                    <div className="service-image">

                        <img
                            src="/assets/external/drywall/photo-1504307651254-35680f356dfd.jpg?auto=format&fit=crop&w=900&q=80" />

                    </div>


                    <div className="service-content">


                        <span className="number">
                            03
                        </span>


                        <h3>
                            Plastering
                        </h3>


                        <h4>
                            Smooth surfaces start underneath.
                        </h4>


                        <p>
                            Professional plastering, repairs and surface preparation
                            for high-quality results.
                        </p>


                        <a href="/Plastering">
                            Learn More →
                        </a>


                    </div>


                </article>



                {/* CARD 04 */}

                <article className="service-card reveal">

                    <div className="service-image">
                        <img src="/assets/external/services/photo-1586023492125-27b2c045efd7-w900-q80.jpg"
                            alt="Drywall renovation" />
                    </div>

                    <div className="service-content">

                        <span className="number">04</span>

                        <h3>
                            Drywall
                        </h3>

                        <h4>
                            Redesign spaces.
                        </h4>

                        <p>
                            Flexible wall and ceiling systems for renovations,
                            conversions and modern room concepts.
                        </p>

                        <a href="/Drywall">
                            Learn More →
                        </a>

                    </div>

                </article>



                {/* CARD 05 */}

                <article className="service-card reveal">

                    <div className="service-image">

                        <img src="/assets/external/drywall/photo-1504307651254-35680f356dfd.jpg?auto=format&fit=crop&w=900&q=80"
                            alt="Facade renovation" />

                    </div>


                    <div className="service-content">

                        <span className="number">05</span>

                        <h3>
                            Facade Renovation
                        </h3>

                        <h4>
                            Protection meets design.
                        </h4>

                        <p>
                            Professional facade preparation and coating systems
                            to protect buildings long term.
                        </p>

                        <a href="/Facade-Renovation">
                            Learn More →
                        </a>

                    </div>

                </article>




                {/* CARD 06 */}

                <article className="service-card reveal">

                    <div className="service-image">

                        <img src="/assets/external/appartment-renovation/photo-1600607687939-ce8a6c25118c.jpg?auto=format&fit=crop&w=900&q=80"
                            alt="Apartment renovation" />

                    </div>


                    <div className="service-content">

                        <span className="number">06</span>

                        <h3>
                            Apartment Renovation
                        </h3>

                        <h4>
                            Ready for the next chapter.
                        </h4>

                        <p>
                            Renovations for moving, personal use or property
                            improvement — coordinated from start to finish.
                        </p>

                        <a href="/appartment-renovation">
                            Learn More →
                        </a>

                    </div>

                </article>




                {/* CARD 07 */}

                <article className="service-card reveal">

                    <div className="service-image">

                        <img src="/assets/external/services/photo-1562259949-e8e7689d7828-w900-q80.jpg"
                            alt="Spray painting" />

                    </div>


                    <div className="service-content">

                        <span className="number">07</span>

                        <h3>
                            Spray Painting
                        </h3>

                        <h4>
                            Precise surfaces.
                            Perfect finish.
                        </h4>

                        <p>
                            Professional spray applications for doors,
                            frames, shutters and suitable components.
                        </p>

                        <a href="/spray-painting">
                            Learn More →
                        </a>

                    </div>

                </article>




                {/* CARD 08 */}

                <article className="service-card reveal">

                    <div className="service-image">

                        <img src="/assets/external/appartment-renovation/photo-1616486338812-3dadae4b4ace.jpg?auto=format&fit=crop&w=900&q=80"
                            alt="Colour consultation" />

                    </div>


                    <div className="service-content">

                        <span className="number">08</span>

                        <h3>
                            Colour &amp; Material Consultation
                        </h3>

                        <h4>
                            The right colour starts with the right decision.
                        </h4>

                        <p>
                            Support choosing colours, finishes and materials
                            matching architecture and personal style.
                        </p>

                        <a href="/color-and-material">
                            Learn More →
                        </a>

                    </div>

                </article>


            </div>

        </div>
    </section>

    {/* ================= COLOUR SECTION ================= */}

    <section className="colour-section">


        <div className="section-heading reveal">

            <span>
                COLOUR &amp; MATERIAL
            </span>

            <h2>
                Colour changes more than walls.
            </h2>


            <p>
                Light, architecture, materials and colours work together
                to define the atmosphere of every space.
            </p>


        </div>



        <div className="colour-grid">


            <div className="colour-sample warm-white">

                <span>
                    Warm White
                </span>

            </div>


            <div className="colour-sample sand">

                <span>
                    Sand
                </span>

            </div>


            <div className="colour-sample greige">

                <span>
                    Greige
                </span>

            </div>


            <div className="colour-sample natural">

                <span>
                    Natural Tone
                </span>

            </div>


            <div className="colour-sample clay">

                <span>
                    Soft Clay
                </span>

            </div>


        </div>


    </section>

    {/* ================= PROCESS ================= */}
    <section className="process-section">


        <div className="section-heading reveal">

            <span>
                OUR PROCESS
            </span>


            <h2>
                From the first idea to the finished surface.
            </h2>


            <p>
                Clear communication and careful planning are just
                as important as the craftsmanship itself.
            </p>


        </div>




        <div className="process-grid">


            <div className="process-card reveal">

                <span>
                    01
                </span>

                <h3>
                    Consultation
                </h3>

                <p>
                    We discuss your project, wishes,
                    requirements and timeline.
                </p>

            </div>



            <div className="process-card reveal">

                <span>
                    02
                </span>

                <h3>
                    Inspection
                </h3>

                <p>
                    We review surfaces, materials
                    and existing conditions.
                </p>

            </div>




            <div className="process-card reveal">

                <span>
                    03
                </span>

                <h3>
                    Planning &amp; Quote
                </h3>

                <p>
                    You receive a transparent offer
                    with clear project details.
                </p>

            </div>




            <div className="process-card reveal">

                <span>
                    04
                </span>

                <h3>
                    Preparation
                </h3>

                <p>
                    Protection, cleaning, sanding,
                    repair and priming.
                </p>

            </div>




            <div className="process-card reveal">

                <span>
                    05
                </span>

                <h3>
                    Execution
                </h3>

                <p>
                    Professional work using suitable
                    materials and techniques.
                </p>

            </div>




            <div className="process-card reveal">

                <span>
                    06
                </span>

                <h3>
                    Final Check
                </h3>

                <p>
                    We inspect the result and hand
                    over your completed project.
                </p>

            </div>


        </div>


    </section>

    {/* ================= WHY AMIGOS ================= */}
    <section className="why-section">


        <div className="section-heading dark reveal">


            <span>
                WHY AMIGOS MALER
            </span>


            <h2>
                We don't just paint.
                We think ahead.
            </h2>


            <p>
                Our goal goes beyond the final coat.
                We create surfaces that protect,
                improve and maintain your property.
            </p>


        </div>




        <div className="why-grid">


            <div className="why-card reveal">

                <div className="icon">
                    01
                </div>

                <h3>
                    Careful Preparation
                </h3>

                <p>
                    Quality starts with the right foundation.
                </p>

            </div>



            <div className="why-card reveal">

                <div className="icon">
                    02
                </div>

                <h3>
                    Suitable Materials
                </h3>

                <p>
                    Materials selected according to every surface.
                </p>

            </div>




            <div className="why-card reveal">

                <div className="icon">
                    03
                </div>

                <h3>
                    Transparent Communication
                </h3>

                <p>
                    Clear processes and reliable planning.
                </p>

            </div>




            <div className="why-card reveal">

                <div className="icon">
                    04
                </div>

                <h3>
                    Long-Term Value
                </h3>

                <p>
                    Renovation as an investment in your property.
                </p>

            </div>


        </div>


    </section>

    {/* ================= TRUST ================= */}
    <section className="reviews-section">

        <div className="services-qc-wrap">
            <div className="section-heading reveal">

                <span>
                    CUSTOMER TRUST
                </span>


                <h2>
                    Quality is visible today.
                    And valuable for years.
                </h2>
                <p>4.9 / 5 on Google — verified by our customers.</p>

            </div>




            <div className="review-slider" id="serviceReviewSlider" aria-live="polite">

                <div className="review-card">
                    <div className="stars">★★★★★</div>
                    <p>"We are absolutely thrilled with Patricio's work. Both interior and exterior walls were painted perfectly. The work was clean, precise, and completed with great attention to detail."</p>
                    <span>Natasha Fischer · Switzerland</span>
                </div>

                <div className="review-card">
                    <div className="stars">★★★★★</div>
                    <p>"Our ground floor, entrance, living room, kitchen, stairwell and doors were beautifully painted. Expert advice, careful execution, and excellent quality."</p>
                    <span>Bettina Marinelli · Switzerland</span>
                </div>

                <div className="review-card">
                    <div className="stars">★★★★★</div>
                    <p>"Amigos Maler provided expert advice and professional service. They were dedicated, helpful, and delivered outstanding results."</p>
                    <span>Melanie Bryan · Aarau</span>
                </div>

                <div className="review-card">
                    <div className="stars">★★★★★</div>
                    <p>"I needed help painting my office wall and couldn't have wished for a better person. Professional, reliable, and excellent work."</p>
                    <span>Sabiduri 1010 · Switzerland</span>
                </div>

                <div className="review-card">
                    <div className="stars">★★★★★</div>
                    <p>"Highly recommended! The work was completed reliably, on schedule, and with excellent quality."</p>
                    <span>Rineta Slishani · Switzerland</span>
                </div>

                <div className="review-card">
                    <div className="stars">★★★★★</div>
                    <p>"Very friendly and competent advice. The work was completed quickly and to a high standard. I would definitely hire Amigos again."</p>
                    <span>Corinne Sittmann · Switzerland</span>
                </div>

                <div className="review-card">
                    <div className="stars">★★★★★</div>
                    <p>"The workers are very competent, clean, and precise. The price-performance ratio is excellent."</p>
                    <span>Erich Leimgruber · Switzerland</span>
                </div>

                <div className="review-card">
                    <div className="stars">★★★★★</div>
                    <p>"You guys are great, friendly, and very helpful. We would book you again anytime."</p>
                    <span>Benjamin Allemann · Switzerland</span>
                </div>

            </div>


            <div className="review-controls" aria-label="Customer review controls">
                <button className="review-control review-prev" type="button" aria-label="Previous review">‹</button>
                <div className="review-dots" aria-label="Customer review slides"></div>
                <button className="review-control review-next" type="button" aria-label="Next review">›</button>
            </div>


            <a href="https://amigos-immo.vercel.app/" className="text-link" target="_blank" rel="noopener noreferrer">
                View All Reviews →
            </a>

        </div>
    </section>

    {/* ================= PROPERTY CARE ================= */}
    <section className="property-care">


        <div className="property-image parallax">

            <img src="/assets/external/appartment-renovation/photo-1600607687920-4e2a09cf159d.jpg?auto=format&fit=crop&w=1600&q=80"
                alt="Premium interior property" />

        </div>




        <div className="property-content reveal">


            <span>
                MORE THAN RENOVATION
            </span>


            <h2>
                A well-maintained property keeps its value.
            </h2>


            <p>
                Regular maintenance, professional repairs
                and suitable coatings help protect your property
                long term.
            </p>


            <a href="/property-value-preservation">
                Discover Property Care →
            </a>


        </div>



    </section>

    {/* ================= FINAL CTA ================= */}
    <section className="final-cta">


        <div className="reveal">


            <h2>
                Ready for your next project?
            </h2>


            <p>
                Whether it is a single room, apartment,
                house or facade — tell us what you are planning.
            </p>



            <div className="cta-buttons">


                <a href="/#quote">
                    Request Free Quote
                </a>


                <a href="/contact">
                    Discuss Project
                </a>


            </div>


        </div>


    </section>

    {/* GLOBAL FOOTER injected by the shared page shell */}
    </>
  );
}
