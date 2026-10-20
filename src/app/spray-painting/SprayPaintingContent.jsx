/* eslint-disable react/no-unescaped-entities */
export default function SprayPaintingContent() {
  return (
    <>
<section className="spray-hero" data-hero>
        <div className="spray-hero-image">
            <img src="/assets/spray/Hero.png" alt="Professional spray painting application" />
        </div>
        <div className="spray-hero-overlay"></div>
        <div className="spray-hero-content">
            <p className="spray-eyebrow">SPRAY PAINTING</p>
            <h1>Precise Surfaces.<br />Even Finish.</h1>
            <p>
                Amigos provides professional spray finishing for suitable components where a particularly smooth,
                uniform and high-quality result is required. With careful preparation and controlled application, we
                create finishes designed to impress.
            </p>
            <div className="spray-hero-buttons">
                <a href="#" className="primary-btn">Request A Quote</a>
                <a href="#" className="secondary-btn">View Our Work</a>
            </div>
        </div>
    </section>

    <section className="spray-intro">
        <div className="spray-intro-image reveal-left">
            <img src="/assets/spray/secTwo.png" alt="Spray painting close up work" />
        </div>
        <div className="spray-intro-content reveal-right">
            <p className="section-label">WHY SPRAY FINISHING</p>
            <h2>
                A Smooth Finish<br />
                Starts With Precision.
            </h2>
            <p>
                Spray application creates an even surface and a consistent finish that is difficult to achieve with
                traditional methods on suitable components.
            </p>
            <p>
                Every project requires careful preparation, correct materials and professional application to achieve a
                refreshed appearance and a long-lasting result.
            </p>
            <div className="spray-intro-points">
                <div>
                    <span>01</span>
                    <h3>Even Surface</h3>
                    <p>Consistent coating across the complete component.</p>
                </div>
                <div>
                    <span>02</span>
                    <h3>Careful Preparation</h3>
                    <p>Proper preparation before every application.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="spray-services">
        <div className="section-heading">
            <p className="section-label">WHAT WE SPRAY</p>
            <h2>
                Precision Finishing<br />
                For Suitable Components.
            </h2>
            <p>
                Professional spray finishing for elements where smooth surfaces, clean details and a uniform appearance
                matter.
            </p>
        </div>

        <div className="spray-service-panels">

            <div className="spray-panel active">
                <div className="spray-panel-image">
                    <img src="/assets/spray/Doors.png" alt="Spray finished doors" />
                </div>
                <div className="spray-panel-content">
                    <span>01</span>
                    <h3>Doors</h3>
                    <p>
                        Smooth and consistent finishes that refresh doors and create a clean premium appearance.
                    </p>
                </div>
            </div>

            <div className="spray-panel">
                <div className="spray-panel-image">
                    <img src="/assets/spray/Door-Frames.png" alt="Door frame finishing" />
                </div>
                <div className="spray-panel-content">
                    <span>02</span>
                    <h3>Door Frames</h3>
                    <p>
                        Precise coating solutions for frames requiring clean edges and durable results.
                    </p>
                </div>
            </div>

            <div className="spray-panel">
                <div className="spray-panel-image">
                    <img src="/assets/spray/Shutters.png" alt="Exterior shutters spray painting" />
                </div>
                <div className="spray-panel-content">
                    <span>03</span>
                    <h3>Shutters</h3>
                    <p>
                        Professional refinishing that improves appearance and protects suitable surfaces.
                    </p>
                </div>
            </div>

            <div className="spray-panel">
                <div className="spray-panel-image">
                    <img src="/assets/spray/other.png" alt="Professional component spray finishing" />
                </div>
                <div className="spray-panel-content">
                    <span>04</span>
                    <h3>Other Components</h3>
                    <p>
                        Suitable elements that require a controlled and high-quality spray finish.
                    </p>
                </div>
            </div>

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


    <section className="finish-lab">

        <div className="finish-lab-inner">

            <div className="finish-visual">
                <div className="finish-image active" data-image="even">
                    <img src="/assets/spray/other.png"
                        alt="Smooth spray finish surface" />
                </div>

                <div className="finish-image" data-image="clean">
                    <img src="/assets/external/spray-painting/photo-1581092160607-ee22621dd758-w1400-q85.jpg"
                        alt="Professional finishing work" />
                </div>

                <div className="finish-image" data-image="edge">
                    <img src="/assets/external/drywall/photo-1504307651254-35680f356dfd.jpg?auto=format&fit=crop&w=1400&q=85"
                        alt="Precise surface details" />
                </div>

                <div className="finish-image" data-image="premium">
                    <img src="/assets/external/appartment-renovation/photo-1600607687920-4e2a09cf159d.jpg?auto=format&fit=crop&w=1400&q=85"
                        alt="Premium finished surface" />
                </div>

                <div className="finish-overlay"></div>

            </div>


            <div className="finish-content">

                <p className="section-label">
                    SURFACE QUALITY
                </p>

                <h2>
                    The Finish<br />
                    Defined By Detail.
                </h2>

                <p className="finish-intro">
                    Professional spray application creates controlled, smooth and consistent surfaces where every detail
                    matters.
                </p>


                <div className="finish-options">

                    <div className="finish-option active" data-target="even">
                        <span>01</span>
                        <div>
                            <h3>Even Surface</h3>
                            <p>
                                A balanced coating creates a smooth and uniform appearance.
                            </p>
                        </div>
                    </div>


                    <div className="finish-option" data-target="clean">
                        <span>02</span>
                        <div>
                            <h3>Clean Execution</h3>
                            <p>
                                Careful preparation and precise application deliver refined results.
                            </p>
                        </div>
                    </div>


                    <div className="finish-option" data-target="edge">
                        <span>03</span>
                        <div>
                            <h3>Precise Edges</h3>
                            <p>
                                Controlled techniques create sharp and detailed finishes.
                            </p>
                        </div>
                    </div>


                    <div className="finish-option" data-target="premium">
                        <span>04</span>
                        <div>
                            <h3>Premium Finish</h3>
                            <p>
                                A final surface designed for quality and durability.
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </section>

    <section className="baton-rental" id="baton-rental">
        <div className="baton-rental-shell">
            <div className="baton-rental-media" role="img" aria-label="Platzhalter für das Produktbild des Batons">
                <div className="baton-placeholder-mark" aria-hidden="true"><span></span><i></i></div>
                <span>Produktbild folgt</span>
            </div>
            <div className="baton-rental-content">
                <p className="section-label">MIETANGEBOT FÜR DIE SPRITZKABINE</p>
                <h2>Baton für Spritzkabine mieten</h2>
                <p>Benötigen Sie einen Baton für Ihre Spritzkabine? Fragen Sie jetzt die Verfügbarkeit und
                    Mietkonditionen direkt bei AMIGOS an.</p>
                <div className="baton-rental-details">
                    <span>Verfügbarkeit auf Anfrage</span>
                    <span>Persönliche Abstimmung</span>
                    <span>Keine Online-Buchung erforderlich</span>
                </div>
                <a href="/contact?subject=Baton%20f%C3%BCr%20Spritzkabine%20mieten" className="primary-btn">Mietanfrage senden</a>
            </div>
        </div>
    </section>

    <section className="spray-process">
        <div className="section-heading centered">
            <p className="section-label">OUR PROCESS</p>
            <h2>
                From Preparation<br />
                To Perfect Finish.
            </h2>
            <p>
                Every spray finishing project follows a controlled process to achieve consistent professional results.
            </p>
        </div>

        <div className="spray-timeline">

            <div className="timeline-progress"></div>

            <div className="spray-step">
                <div className="step-number">01</div>
                <div className="step-content">
                    <h3>Preparation</h3>
                    <p>
                        Components and surfaces are carefully prepared before application.
                    </p>
                </div>
                <div className="step-preview">
                    <img src="/assets/external/drywall/photo-1504307651254-35680f356dfd.jpg?auto=format&fit=crop&w=700&q=85"
                        alt="Preparation work" />
                </div>
            </div>

            <div className="spray-step">
                <div className="step-number">02</div>
                <div className="step-content">
                    <h3>Cleaning & Sanding</h3>
                    <p>
                        The surface is cleaned and refined to create the correct foundation.
                    </p>
                </div>
                <div className="step-preview">
                    <img src="/assets/external/spray-painting/photo-1581092795360-fd1ca04f0952-w700-q85.jpg"
                        alt="Surface sanding preparation" />
                </div>
            </div>

            <div className="spray-step">
                <div className="step-number">03</div>
                <div className="step-content">
                    <h3>Primer Application</h3>
                    <p>
                        Primer is applied where required to support durability and adhesion.
                    </p>
                </div>
                <div className="step-preview">
                    <img src="/assets/external/spray-painting/photo-1581092918056-0c4c3acd3789-w700-q85.jpg"
                        alt="Primer preparation" />
                </div>
            </div>

            <div className="spray-step">
                <div className="step-number">04</div>
                <div className="step-content">
                    <h3>Spray Application</h3>
                    <p>
                        The coating is professionally applied for a smooth and uniform finish.
                    </p>
                </div>
                <div className="step-preview">
                    <img src="/assets/external/spray-painting/photo-1586864387789-628af9feed72-w700-q85.jpg"
                        alt="Spray painting application" />
                </div>
            </div>

            <div className="spray-step">
                <div className="step-number">05</div>
                <div className="step-content">
                    <h3>Final Finish</h3>
                    <p>
                        The surface receives its final appearance and finishing details.
                    </p>
                </div>
                <div className="step-preview">
                    <img src="/assets/external/appartment-renovation/photo-1600566753086-00f18fb6b3ea.jpg?auto=format&fit=crop&w=700&q=85"
                        alt="Finished component" />
                </div>
            </div>

            <div className="spray-step">
                <div className="step-number">06</div>
                <div className="step-content">
                    <h3>Quality Control</h3>
                    <p>
                        Every project is checked carefully before final handover.
                    </p>
                </div>
                <div className="step-preview">
                    <img src="/assets/external/appartment-renovation/photo-1600607687939-ce8a6c25118c.jpg?auto=format&fit=crop&w=700&q=85"
                        alt="Quality inspection" />
                </div>
            </div>

        </div>
    </section>

    {/* <section className="spray-gallery">
        <div className="section-heading centered">
            <p className="section-label">SUITABLE APPLICATIONS</p>
            <h2>
                Where Spray Finishing<br />
                Creates The Difference.
            </h2>
            <p>
                Professional spray finishing can refresh and improve the appearance of suitable components with precise
                and controlled results.
            </p>
        </div>

        <div className="spray-gallery-grid">

            <div className="gallery-item">
                <img src="/assets/external/appartment-renovation/photo-1600566753086-00f18fb6b3ea.jpg?auto=format&fit=crop&w=1200&q=85"
                    alt="Spray finished door" />
                <div className="gallery-overlay">
                    <h3>Doors</h3>
                    <p>Smooth and consistent finishes for interior and exterior doors.</p>
                </div>
            </div>

            <div className="gallery-item">
                <img src="/assets/external/drywall/photo-1503387762-592deb58ef4e.jpg?auto=format&fit=crop&w=1200&q=85"
                    alt="Door frame refinishing" />
                <div className="gallery-overlay">
                    <h3>Door Frames</h3>
                    <p>Clean edges and professional coating results.</p>
                </div>
            </div>

            <div className="gallery-item">
                <img src="/assets/external/spray-painting/photo-1598300042247-d088f8ab3a91-w1200-q85.jpg"
                    alt="Painted shutters" />
                <div className="gallery-overlay">
                    <h3>Shutters</h3>
                    <p>Refreshed appearance with protective finishing.</p>
                </div>
            </div>

            <div className="gallery-item">
                <img src="/assets/external/drywall/photo-1581094794329-c8112a89af12.jpg?auto=format&fit=crop&w=1200&q=85"
                    alt="Professional spray coated components" />
                <div className="gallery-overlay">
                    <h3>Other Components</h3>
                    <p>Suitable elements requiring precise surface finishing.</p>
                </div>
            </div>

        </div>
    </section> */}

    <section className="spray-benefits">
        <div className="benefits-wrapper">

            <div className="benefits-header">
                <p className="section-label">WHY PROFESSIONAL SPRAY FINISHING</p>
                <h2>
                    Precision Behind<br />
                    Every Surface.
                </h2>
            </div>

            <div className="benefits-grid">

                <div className="benefit-card">
                    <span>01</span>
                    <h3>Precision</h3>
                    <p>
                        Controlled application creates consistent and refined results.
                    </p>
                </div>

                <div className="benefit-card">
                    <span>02</span>
                    <h3>Uniformity</h3>
                    <p>
                        Even coverage creates a balanced appearance across surfaces.
                    </p>
                </div>

                <div className="benefit-card">
                    <span>03</span>
                    <h3>Preparation</h3>
                    <p>
                        Professional preparation creates the foundation for quality finishes.
                    </p>
                </div>

                <div className="benefit-card">
                    <span>04</span>
                    <h3>Quality</h3>
                    <p>
                        Careful execution and final inspection ensure lasting results.
                    </p>
                </div>

            </div>

        </div>
    </section>

    <section className="service-connection">

        <div className="section-heading centered">
            <p className="section-label">CONNECTED SERVICES</p>
            <h2>
                Preparation.
                Spray Finish.
                Perfect Result.
            </h2>
            <p>
                Spray finishing can complement Amigos painting and renovation services when suitable components require
                a particularly smooth and controlled finish.
            </p>
        </div>

        <div className="connection-flow">

            <div className="connection-item">
                <div className="connection-number">01</div>
                <h3>Preparation</h3>
                <p>
                    Surface preparation creates the correct foundation.
                </p>
            </div>

            <div className="connection-line"></div>

            <div className="connection-item">
                <div className="connection-number">02</div>
                <h3>Spray Painting</h3>
                <p>
                    Professional application creates a uniform finish.
                </p>
            </div>

            <div className="connection-line"></div>

            <div className="connection-item">
                <div className="connection-number">03</div>
                <h3>Perfect Finish</h3>
                <p>
                    A refined surface completes the transformation.
                </p>
            </div>

        </div>

    </section>

    <section className="spray-value">

        <div className="spray-value-image">
            <img src="/assets/external/appartment-renovation/photo-1600607687939-ce8a6c25118c.jpg?auto=format&fit=crop&w=1600&q=85"
                alt="Well maintained property interior" />
        </div>

        <div className="spray-value-content">
            <p className="section-label">PROPERTY PRESERVATION</p>

            <h2>
                Careful Maintenance Helps Protect Property Value.
            </h2>

            <p>
                Professional maintenance and refinishing help keep components looking cared for and contribute to the
                overall condition and appearance of a property.
            </p>

            <a href="#" className="primary-btn">
                Discover Property Preservation →
            </a>

        </div>

    </section>

    <section className="spray-final-cta">

        <div className="final-cta-content">

            <p className="section-label">START YOUR PROJECT</p>

            <h2>
                Precise Surfaces.<br />
                A Finish That Convinces.
            </h2>

            <p>
                From suitable components to detailed finishing work, Amigos delivers professional spray painting
                solutions with precision and care.
            </p>

            <div className="final-buttons">

                <a href="#" className="primary-btn">
                    Request A Free Quote
                </a>

                <a href="#" className="secondary-btn">
                    Discuss Your Project
                </a>

            </div>

        </div>

    </section>
    </>
  );
}
