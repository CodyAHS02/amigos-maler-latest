/* eslint-disable react/no-unescaped-entities */
import HomeSolutionsCarousel from "./HomeSolutionsCarousel";
import Image from "next/image";

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
                    <h2 id="homeHeroColorMessage">Discover the <span id="homeHeroColorAccent" className="hero-color-accent">power of color.</span></h2>
                    <p>Choose a color and experience the room anew.</p>
                </div>

                {/*909*/}
                <div className="paint-point left" data-wall="left-wall">
                    <button className="paint-trigger">
                        <span className="paint-icon"><Image src="/assets/paint-brush.png" alt="" width={21} height={21} /></span>
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
                        <span className="paint-icon"><Image src="/assets/paint-brush.png" alt="" width={21} height={21} /></span>
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
                        <span className="paint-icon"><Image src="/assets/paint-brush.png" alt="" width={21} height={21} /></span>
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
                        <span className="paint-icon"><Image src="/assets/paint-brush.png" alt="" width={21} height={21} /></span>
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
                <span className="responsive-hero-copy" aria-hidden="true">
                    <span className="responsive-hero-brand">
                        <span className="responsive-hero-amigos">AMIGOS</span>
                        <span className="responsive-hero-maler-line">
                            <span className="responsive-hero-maler">MALER</span>
                            <small>GmbH</small>
                        </span>
                    </span>
                    <span className="responsive-hero-heading">Preserving Value.<br />Creating Beauty.</span>
                    <span className="responsive-hero-services">Expert Painting <i aria-hidden="true">•</i> Renovation <i aria-hidden="true">•</i> Property Care</span>
                </span>
            </h1>
            <a href="#quote" className="introBtn desktop-intro-btn">Get A Free Quote</a>
            <div className="hero-content">
                <div className="content-glow"></div>
                <h1 id="homeHeroCreatingLastingValue">Creating <span className="hero-title-accent">Lasting Value</span></h1>
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
    <HomeSolutionsCarousel />

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
