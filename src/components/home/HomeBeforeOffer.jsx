/* eslint-disable react/no-unescaped-entities */
export default function HomeBeforeOffer() {
  return (
    <>
{/*0*/}
    <div className="loader">
        <div className="loader-door loader-door-left"></div>
        <div className="loader-door loader-door-right"></div>
        <div className="loader-counter">
            <span id="loaderCount">0</span><span className="loader-percent">%</span>
        </div>
    </div>

    {/*305*/}
    <section className="hero" data-hero data-home-hero>
        <div className="hero-media">
            <video id="heroVideo" muted playsInline preload="auto">
                <source src="/hero_scrub2.mp4" type="video/mp4" />
            </video>

            <canvas id="paintCanvas"></canvas>
            <div className="paint-icons">
                <div className="paint-focus"></div>

                <div className="paint-screen-banner">
                    <h2>Discover what color can change.</h2>
                    <p>Choose a color and experience the room anew.</p>
                </div>

                {/*909*/}
                <div className="paint-point left" data-wall="left-wall">
                    <button className="paint-trigger">
                        <i className="fa-solid fa-paint-roller"></i>
                    </button>

                    <div className="palette">
                        <span data-color="#F5F3ED" style={{ "--c": "#F5F3ED" }}></span>
                        <span data-color="#D8CCB4" style={{ "--c": "#D8CCB4" }}></span>
                        <span data-color="#A6B09A" style={{ "--c": "#A6B09A" }}></span>
                        <span data-color="#8D98A4" style={{ "--c": "#8D98A4" }}></span>
                        <span data-color="#5C6771" style={{ "--c": "#5C6771" }}></span>
                        <input type="color" className="palette-custom" value="#ffffff" title="Custom color" />
                    </div>
                </div>

                {/*1748*/}
                <div className="paint-point front" data-wall="front-wall">
                    <button className="paint-trigger">
                        <i className="fa-solid fa-paint-roller"></i>
                    </button>

                    <div className="palette">
                        <span data-color="#F5F3ED" style={{ "--c": "#F5F3ED" }}></span>
                        <span data-color="#D8CCB4" style={{ "--c": "#D8CCB4" }}></span>
                        <span data-color="#A6B09A" style={{ "--c": "#A6B09A" }}></span>
                        <span data-color="#8D98A4" style={{ "--c": "#8D98A4" }}></span>
                        <span data-color="#5C6771" style={{ "--c": "#5C6771" }}></span>
                        <input type="color" className="palette-custom" value="#ffffff" title="Custom color" />
                    </div>
                </div>

                {/*2590*/}
                <div className="paint-point right" data-wall="right-wall">
                    <button className="paint-trigger">
                        <i className="fa-solid fa-paint-roller"></i>
                    </button>

                    <div className="palette">
                        <span data-color="#F5F3ED" style={{ "--c": "#F5F3ED" }}></span>
                        <span data-color="#D8CCB4" style={{ "--c": "#D8CCB4" }}></span>
                        <span data-color="#A6B09A" style={{ "--c": "#A6B09A" }}></span>
                        <span data-color="#8D98A4" style={{ "--c": "#8D98A4" }}></span>
                        <span data-color="#5C6771" style={{ "--c": "#5C6771" }}></span>
                        <input type="color" className="palette-custom" value="#ffffff" title="Custom color" />
                    </div>
                </div>

                {/*3432*/}
                <div className="paint-point ceiling" data-wall="ceiling">
                    <button className="paint-trigger">
                        <i className="fa-solid fa-paint-roller"></i>
                    </button>

                    <div className="palette">
                        <span data-color="#F5F3ED" style={{ "--c": "#F5F3ED" }}></span>
                        <span data-color="#D8CCB4" style={{ "--c": "#D8CCB4" }}></span>
                        <span data-color="#A6B09A" style={{ "--c": "#A6B09A" }}></span>
                        <span data-color="#8D98A4" style={{ "--c": "#8D98A4" }}></span>
                        <span data-color="#5C6771" style={{ "--c": "#5C6771" }}></span>
                        <input type="color" className="palette-custom" value="#ffffff" title="Custom color" />
                    </div>
                </div>
<div className="mobile-color-dock" id="mobileColorDock"><span className="mobile-dock-title">Choose a color (back wall):</span><div className="mobile-swatches"><span className="mobile-swatch" data-color="#F5F3ED" style={{ "--c": "#F5F3ED" }} title="Off-White"></span><span className="mobile-swatch" data-color="#D8CCB4" style={{ "--c": "#D8CCB4" }} title="Warm Beige"></span><span className="mobile-swatch" data-color="#A6B09A" style={{ "--c": "#A6B09A" }} title="Sage Green"></span><span className="mobile-swatch" data-color="#8D98A4" style={{ "--c": "#8D98A4" }} title="Slate Grey"></span><span className="mobile-swatch" data-color="#5C6771" style={{ "--c": "#5C6771" }} title="Charcoal"></span><label className="mobile-swatch-custom" title="Choose a custom color"><input type="color" className="mobile-palette-custom" value="#D8CCB4" /><i className="fa-solid fa-plus"></i></label></div></div>
            </div>
        </div>

        <div className="hero-overlay">
            {/*5144*/}
            <h1 className="intro-title">
                <span className="intro-title-brand">
                    <span className="intro-title-main">AMIGOS MALER</span>
                    <span className="intro-title-gmbh" style={{ "textTransform": "none !important", "fontVariant": "normal !important" }}>GmbH</span>
                </span>
                <span className="intro-title-sub">Transforming properties with expert painting, professional renovations, <br /> and real estate
                    solutions
                    designed to enhance value, beauty, and lasting impressions.</span>
                <a href="#quote" className="introBtn">Get A Free Quote</a>
            </h1>

            {/*5843*/}
            <div className="hero-content">
                <div className="content-glow"></div>
                <h1>Preserving Your Property’s Value</h1>
                <p>More than paint — a new sense of space.</p>
                <div id="homeHeroButtons" className="hero-buttons">
                    <a className="btn-primary" href="/contact">Free consultation</a>
                    <a className="btn-secondary" href="#projectsSection">Discover projects</a>
                </div>
            </div>
        </div>
    </section>

    {/*6387*/}
    <section className="audience-wrap">
        <div className="audience-bar">
            <div className="audience-left">
                <h3>Built for every kind of owner</h3>
                <p>Whichever role you're in, we tailor property care<br className="audience-break" /> to how you actually use the space.</p>
            </div>
            <ul className="audience-right">
                <li className="item">For Homeowners</li>
                <li className="item">For Property Managers</li>
                <li className="item">For Condominium Associations</li>
            </ul>
        </div>
    </section>

    {/*7002*/}
    <section className="audience-cards-section" id="audienceCardsSection">
        <div className="audience-cards-wrapper">
            <div className="audience-cards-heading reveal">
                <span className="section-tag">WHO WE WORK WITH</span>
                <h2>Solutions for<br />every <span>property.</span></h2>
            </div>
            <div className="audience-card-grid">
                <div className="audience-card reveal" data-tilt>
                    <span className="audience-card-num">01</span>
                    <div className="audience-card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 11l9-8 9 8" />
                            <path d="M5 10v10h14V10" />
                            <path d="M9 20v-6h6v6" />
                        </svg>
                    </div>
                    <h3>Private Customers</h3>
                    <p>Renovations, refreshes and property preservation for your home.</p>
                </div>
                <div className="audience-card reveal" data-tilt>
                    <span className="audience-card-num">02</span>
                    <div className="audience-card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 21V7l8-4 8 4v14" />
                            <path d="M9 21v-6h6v6" />
                            <path d="M9 10h.01M15 10h.01M9 14h.01M15 14h.01" />
                        </svg>
                    </div>
                    <h3>Property Management</h3>
                    <p>Maintenance, tenant changes, renovations and coordinated processes.</p>
                </div>
                <div className="audience-card reveal" data-tilt>
                    <span className="audience-card-num">03</span>
                    <div className="audience-card-icon">
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

    {/*9571*/}
    <section className="services-nav-section" id="servicesNavSection">
        <div className="services-bg" aria-hidden="true">
            <div className="services-bg-grid"></div>
            <div className="services-glow services-glow-1"></div>
            <div className="services-glow services-glow-2"></div>
            <div className="services-glow services-glow-3"></div>
            <div className="services-bg-noise"></div>
            <div className="services-bg-vignette"></div>
        </div>
        <div className="services-nav-wrapper">
            <div className="services-nav-heading reveal">
                <span className="section-tag">WHAT WE DO</span>
                <h2>Our <span>Services.</span></h2>
            </div>
            <div className="services-expand-grid" id="servicesExpandGrid">
                {/*10385*/}
            </div>
            <div className="services-nav-cta reveal">
                <a href="/services" className="services-view-all-btn">View All Services</a>
            </div>
        </div>
    </section>


    </>
  );
}
