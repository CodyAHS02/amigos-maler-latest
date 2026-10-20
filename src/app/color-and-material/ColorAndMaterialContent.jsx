/* eslint-disable react/no-unescaped-entities */
export default function ColorAndMaterialContent() {
  return (
    <>
<section className="color-hero" id="colorHero" data-hero>
        <div className="color-hero-image">
            <img src="/assets/external/color-and-material/photo-1618220179428-22790b461013-w2200-q90.jpg"
                alt="Interior with carefully selected colors and materials" />
        </div>
        <div className="color-hero-overlay"></div>
        <div className="color-hero-grid"></div>
        <div className="color-hero-content">
            <div className="color-hero-kicker reveal-color">COLOR &amp; MATERIAL</div>
            <h1 className="reveal-color">The Right Color<br /><em>Starts With The Right Decision.</em></h1>
            <p className="reveal-color">Support with color, surface and material selection — tailored to the architecture,
                usage and personal style.</p>
            <div className="color-hero-actions reveal-color">
                <a href="#consultation" className="color-btn color-btn-primary">Request a Consultation <span>↗</span></a>
                <a href="#color-experience" className="color-btn color-btn-light">Explore Colors <span>↓</span></a>
            </div>
        </div>
        <div className="color-hero-note">
            <span>01</span>
            <span>COLOR</span>
            <span>MATERIAL</span>
            <span>SURFACE</span>
        </div>
    </section>

    <section className="color-intro" id="colorIntro">
        <div className="color-intro-number">01</div>
        <div className="color-intro-copy reveal-color-left">
            <span className="color-kicker">MORE THAN A COLOR</span>
            <h2>Color changes<br /><em>more than walls.</em></h2>
            <p>Light, architecture, materials and colors work together. The right combination can change how a room
                feels, how surfaces interact and how the entire space is experienced.</p>
            <p>Our goal is to help you choose solutions that look right today and continue to work over time.</p>
            <div className="color-intro-details">
                <div><span>LIGHT</span><strong>How the room changes throughout the day.</strong></div>
                <div><span>SPACE</span><strong>How color influences proportion and atmosphere.</strong></div>
                <div><span>MATERIAL</span><strong>How surfaces work together as a whole.</strong></div>
            </div>
        </div>
        <div className="color-intro-visual reveal-color-right">
            <div className="intro-color-frame">
                <img src="/assets/external/appartment-renovation/photo-1600210492486-724fe5c67fb0.jpg?auto=format&fit=crop&w=1800&q=90"
                    alt="Interior showing coordinated colors and materials" />
                <div className="intro-caption">ARCHITECTURE · LIGHT · MATERIAL · COLOR</div>
            </div>
        </div>
    </section>

    <section className="color-choices" id="colorChoices">
        <div className="choices-heading">
            <div>
                <span className="color-kicker">WHAT WE HELP YOU CHOOSE</span>
                <h2>Every decision<br /><em>shapes the result.</em></h2>
            </div>
            <p>From the first color idea to the final coating system, we help connect visual preference with practical
                requirements.</p>
        </div>
        <div className="choices-grid">
            <article className="choice-card reveal-choice">
                <div className="choice-image">
                    <img src="/assets/external/color-and-material/photo-1618221195710-dd6b41faaea6-w1200-q90.jpg"
                        alt="Interior color selection" />
                </div>
                <div className="choice-content">
                    <span>01</span>
                    <h3>Color</h3>
                    <p>Find colors that suit the room, architecture and personal style.</p>
                    <div className="choice-arrow">↗</div>
                </div>
            </article>
            <article className="choice-card reveal-choice">
                <div className="choice-image">
                    <img src="/assets/external/color-and-material/photo-1615873968403-89e068629265-w1200-q90.jpg"
                        alt="Interior surface texture" />
                </div>
                <div className="choice-content">
                    <span>02</span>
                    <h3>Surface</h3>
                    <p>Choose the right visual and tactile surface effect.</p>
                    <div className="choice-arrow">↗</div>
                </div>
            </article>
            <article className="choice-card reveal-choice">
                <div className="choice-image">
                    <img src="/assets/external/color-and-material/photo-1617104678098-de229db51175-w1200-q90.jpg"
                        alt="Interior materials" />
                </div>
                <div className="choice-content">
                    <span>03</span>
                    <h3>Material</h3>
                    <p>Select suitable materials for the specific application.</p>
                    <div className="choice-arrow">↗</div>
                </div>
            </article>
            <article className="choice-card reveal-choice">
                <div className="choice-image">
                    <img src="/assets/external/appartment-renovation/photo-1600566753190-17f0baa2a6c3.jpg?auto=format&fit=crop&w=1200&q=90"
                        alt="Professional interior coating finish" />
                </div>
                <div className="choice-content">
                    <span>04</span>
                    <h3>Coating System</h3>
                    <p>Choose an appropriate coating system based on the surface and its use.</p>
                    <div className="choice-arrow">↗</div>
                </div>
            </article>
        </div>
    </section>

    <section className="color-experience" id="color-experience">
        <div className="color-experience-intro">
            <div>
                <span className="color-kicker">INTERACTIVE COLOR EXPERIENCE</span>
                <h2>Which color<br /><em>suits your room?</em></h2>
            </div>
            <p>Explore different color directions and see how a single change can transform the atmosphere of a space.
            </p>
        </div>
        <div className="color-room-stage">
            <div className="color-room-image">
                <img src="/assets/external/appartment-renovation/photo-1600210492486-724fe5c67fb0.jpg?auto=format&fit=crop&w=2200&q=90"
                    alt="Interior room for interactive color selection" />
                <div className="room-color-wall"></div>
                <div className="room-color-glow"></div>
            </div>
            <div className="color-room-info">
                <span className="room-selection-label">SELECTED COLOR</span>
                <h3 className="room-selected-name">Warm White</h3>
                <p className="room-selected-description">A soft, timeless tone that keeps the room bright and calm.</p>
            </div>
            <div className="color-swatches" role="group" aria-label="Room color selection">
                <button className="color-swatch active" style={{ "--swatch": "#E8E1D4" }} data-color="#E8E1D4" data-name="Warm White"
                    data-description="A soft, timeless tone that keeps the room bright and calm."
                    aria-label="Warm White"><span></span><small>Warm White</small></button>
                <button className="color-swatch" style={{ "--swatch": "#C9B89D" }} data-color="#C9B89D" data-name="Sand"
                    data-description="A warm natural shade that adds softness and depth to the space."
                    aria-label="Sand"><span></span><small>Sand</small></button>
                <button className="color-swatch" style={{ "--swatch": "#A89F92" }} data-color="#A89F92" data-name="Greige"
                    data-description="A balanced neutral that works beautifully with contemporary interiors."
                    aria-label="Greige"><span></span><small>Greige</small></button>
                <button className="color-swatch" style={{ "--swatch": "#82927D" }} data-color="#82927D" data-name="Natural Tone"
                    data-description="A muted natural tone that brings a calm connection to the room."
                    aria-label="Natural Tone"><span></span><small>Natural Tone</small></button>
                <button className="color-swatch" style={{ "--swatch": "#B59E84" }} data-color="#B59E84" data-name="Soft Clay"
                    data-description="A soft clay shade that adds gentle warmth and depth."
                    aria-label="Soft Clay"><span></span><small>Soft Clay</small></button>
            </div>
            <div className="color-experience-meta">
                <span>LIVE PREVIEW</span>
                <span>01 / 05</span>
            </div>
        </div>
    </section>

    {/* <section className="color-light" id="colorLight">
        <div className="light-heading">
            <span className="color-kicker">COLOR + LIGHT</span>
            <h2>The same color.<br /><em>A different feeling.</em></h2>
            <p>Natural and artificial light can change how a color is perceived. Compare different lighting moods in the
                same space.</p>
        </div>
        <div className="light-preview">
            <div className="light-scene active" data-light="natural">
                <img src="/assets/external/color-and-material/photo-1600210491892-03d54c0aaf87-w2200-q90.jpg"
                    alt="Interior in natural daylight" />
                <div className="light-scene-overlay natural-overlay"></div>
                <div className="light-scene-label">NATURAL LIGHT</div>
            </div>
            <div className="light-scene" data-light="warm">
                <img src="/assets/external/appartment-renovation/photo-1600210492486-724fe5c67fb0.jpg?auto=format&fit=crop&w=2200&q=90"
                    alt="Interior in warm lighting" />
                <div className="light-scene-overlay warm-overlay"></div>
                <div className="light-scene-label">WARM LIGHT</div>
            </div>
            <div className="light-scene" data-light="evening">
                <img src="/assets/external/appartment-renovation/photo-1600607687920-4e2a09cf159d.jpg?auto=format&fit=crop&w=2200&q=90"
                    alt="Interior in evening atmosphere" />
                <div className="light-scene-overlay evening-overlay"></div>
                <div className="light-scene-label">EVENING ATMOSPHERE</div>
            </div>
            <div className="light-switcher">
                <button className="light-option active" data-target="natural"><span>01</span>Natural Light</button>
                <button className="light-option" data-target="warm"><span>02</span>Warm Light</button>
                <button className="light-option" data-target="evening"><span>03</span>Evening Atmosphere</button>
            </div>
        </div>
    </section> */}

    <section className="material-gallery" id="materialGallery">
        <div className="material-gallery-header">
            <div>
                <span className="color-kicker">MATERIAL &amp; SURFACE GALLERY</span>
                <h2>Feel the difference<br /><em>before the work begins.</em></h2>
            </div>
            <div className="material-gallery-controls">
                <button className="material-prev" aria-label="Previous material">←</button>
                <button className="material-next" aria-label="Next material">→</button>
            </div>
        </div>
        <div className="material-track-wrap">
            <div className="material-track">
                <article className="material-item">
                    <div className="material-image">
                        <img src="/assets/external/appartment-renovation/photo-1600607687939-ce8a6c25118c.jpg?auto=format&fit=crop&w=1400&q=90"
                            alt="Smooth interior surface" />
                    </div>
                    <div className="material-info"><span>01</span>
                        <h3>Smooth Surface</h3>
                        <p>Clean and refined for a calm contemporary appearance.</p>
                    </div>
                </article>
                <article className="material-item">
                    <div className="material-image">
                        <img src="/assets/external/appartment-renovation/photo-1600566753086-00f18fb6b3ea.jpg?auto=format&fit=crop&w=1400&q=90"
                            alt="Fine textured surface" />
                    </div>
                    <div className="material-info"><span>02</span>
                        <h3>Fine Texture</h3>
                        <p>A subtle surface character that adds depth without overwhelming the room.</p>
                    </div>
                </article>
                <article className="material-item">
                    <div className="material-image">
                        <img src="/assets/external/color-and-material/photo-1600573472550-8090b5e0745e-w1400-q90.jpg"
                            alt="Matte finish interior surface" />
                    </div>
                    <div className="material-info"><span>03</span>
                        <h3>Matte Finish</h3>
                        <p>A soft, understated finish with a sophisticated visual quality.</p>
                    </div>
                </article>
                <article className="material-item">
                    <div className="material-image">
                        <img src="/assets/external/color-and-material/photo-1615529182904-14819c35db37-w1400-q90.jpg"
                            alt="Decorative material surface" />
                    </div>
                    <div className="material-info"><span>04</span>
                        <h3>Material Detail</h3>
                        <p>Explore how different materials and surfaces interact with color.</p>
                    </div>
                </article>
                <article className="material-item">
                    <div className="material-image">
                        <img src="/assets/external/color-and-material/photo-1617104678098-de229db51175-w1400-q90.jpg"
                            alt="Contemporary interior material" />
                    </div>
                    <div className="material-info"><span>05</span>
                        <h3>Contemporary Finish</h3>
                        <p>A modern surface direction selected around the architecture and use.</p>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <section className="color-consultation" id="consultation">
        <div className="consultation-heading">
            <span className="color-kicker">HOW OUR CONSULTATION WORKS</span>
            <h2>From first idea<br /><em>to final decision.</em></h2>
            <p>A clear process helps turn preferences, architecture and practical requirements into a considered
                solution.</p>
        </div>
        <div className="consultation-timeline">
            <div className="consultation-line"><span></span></div>
            <div className="consultation-step reveal-consultation">
                <div className="consultation-number">01</div>
                <div className="consultation-content">
                    <span>UNDERSTAND</span>
                    <h3>Understand Your Needs</h3>
                    <p>Understand your requirements, preferences and personal style.</p>
                </div>
                <div className="consultation-image"><img
                        src="/assets/external/color-and-material/photo-1556761175-b413da4baf72-w900-q90.jpg"
                        alt="Professional design consultation" /></div>
            </div>
            <div className="consultation-step reveal-consultation">
                <div className="consultation-number">02</div>
                <div className="consultation-content">
                    <span>ANALYZE</span>
                    <h3>Analyze Room &amp; Architecture</h3>
                    <p>Consider the architecture, proportions, existing materials and available light.</p>
                </div>
                <div className="consultation-image"><img
                        src="/assets/external/appartment-renovation/photo-1600607687920-4e2a09cf159d.jpg?auto=format&fit=crop&w=900&q=90"
                        alt="Interior architecture analysis" /></div>
            </div>
            <div className="consultation-step reveal-consultation">
                <div className="consultation-number">03</div>
                <div className="consultation-content">
                    <span>SELECT</span>
                    <h3>Select Colors &amp; Materials</h3>
                    <p>Develop suitable color, surface and material combinations for the space.</p>
                </div>
                <div className="consultation-image"><img
                        src="/assets/external/color-and-material/photo-1618221195710-dd6b41faaea6-w900-q90.jpg"
                        alt="Color and material selection" /></div>
            </div>
            <div className="consultation-step reveal-consultation">
                <div className="consultation-number">04</div>
                <div className="consultation-content">
                    <span>DECIDE</span>
                    <h3>Define the Solution</h3>
                    <p>Choose the appropriate final solution and coating system before implementation.</p>
                </div>
                <div className="consultation-image"><img
                        src="/assets/external/appartment-renovation/photo-1600210492486-724fe5c67fb0.jpg?auto=format&fit=crop&w=900&q=90"
                        alt="Finished interior color solution" /></div>
            </div>
        </div>
    </section>

    <section className="palette-builder" id="paletteBuilder">
        <div className="palette-builder-heading">
            <span className="color-kicker">COLOR COMBINATIONS</span>
            <h2>Build a palette<br /><em>that feels right.</em></h2>
            <p>Explore curated combinations and see how different tones can work together within the same interior.</p>
        </div>
        <div className="palette-builder-layout">
            <div className="palette-preview">
                <div className="palette-preview-image">

                    {/* PALETTE IMAGE 01 */}
                    <img className="palette-room-image active" data-image="0" src="/assets/color/palette-1.png"
                        alt="Warm natural interior" />

                    {/* PALETTE IMAGE 02 */}
                    <img className="palette-room-image" data-image="1" src="/assets/color/palette-2.png"
                        alt="Calm modern interior" />

                    {/* PALETTE IMAGE 03 */}
                    <img className="palette-room-image" data-image="2" src="/assets/color/palette-3.png"
                        alt="Elegant strong interior" />

                    {/* PALETTE IMAGE 04 */}
                    <img className="palette-room-image" data-image="3" src="/assets/color/palette-4.png"
                        alt="Soft earth interior" />

                    <div className="palette-light"></div>

                    {/* Cinematic transition layer */}
                    <div className="palette-transition"></div>

                </div>
                <div className="palette-preview-label">
                    <span>LIVE PALETTE PREVIEW</span>
                    <strong className="palette-preview-name">Warm &amp; Natural</strong>
                </div>
            </div>
            <div className="palette-options">
                <button className="palette-option active" data-palette="warm-natural" data-name="Warm &amp; Natural"
                    data-colors="#E9E1D3,#C9B89D,#9C9184">
                    <div className="palette-option-colors"><i style={{ "background": "#E9E1D3" }}></i><i
                            style={{ "background": "#C9B89D" }}></i><i style={{ "background": "#9C9184" }}></i></div>
                    <div><span>01</span><strong>Warm &amp; Natural</strong><small>Warm White + Sand + Greige</small>
                    </div>
                    <em>↗</em>
                </button>
                <button className="palette-option" data-palette="calm-modern" data-name="Calm &amp; Modern"
                    data-colors="#F0ECE3,#A69F94,#82927D">
                    <div className="palette-option-colors"><i style={{ "background": "#F0ECE3" }}></i><i
                            style={{ "background": "#A69F94" }}></i><i style={{ "background": "#82927D" }}></i></div>
                    <div><span>02</span><strong>Calm &amp; Modern</strong><small>Off-White + Greige + Sage</small></div>
                    <em>↗</em>
                </button>
                <button className="palette-option" data-palette="elegant-strong" data-name="Elegant &amp; Strong"
                    data-colors="#E8E1D4,#2E3337,#B48A45">
                    <div className="palette-option-colors"><i style={{ "background": "#E8E1D4" }}></i><i
                            style={{ "background": "#2E3337" }}></i><i style={{ "background": "#B48A45" }}></i></div>
                    <div><span>03</span><strong>Elegant &amp; Strong</strong><small>Warm White + Anthracite +
                            Accent</small></div>
                    <em>↗</em>
                </button>
                <button className="palette-option" data-palette="soft-earth" data-name="Soft Earth"
                    data-colors="#DDD2C0,#B59E84,#7F806D">
                    <div className="palette-option-colors"><i style={{ "background": "#DDD2C0" }}></i><i
                            style={{ "background": "#B59E84" }}></i><i style={{ "background": "#7F806D" }}></i></div>
                    <div><span>04</span><strong>Soft Earth</strong><small>Sand + Clay + Muted Olive</small></div>
                    <em>↗</em>
                </button>
                <div className="palette-current">
                    <span>SELECTED PALETTE</span>
                    <div className="palette-current-swatches">
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="color-benefits" id="colorBenefits">
        <div className="benefits-top">
            <div>
                <span className="color-kicker">WHY PROFESSIONAL COLOR CONSULTATION?</span>
                <h2>Good decisions<br /><em>start with context.</em></h2>
            </div>
            <p>Color should not be selected in isolation. Architecture, light, materials and long-term suitability all
                influence the result.</p>
        </div>
        <div className="color-benefits-grid">
            <article className="color-benefit-card reveal-benefit-color">
                <div className="benefit-card-number">01</div>
                <div className="benefit-card-icon">⌂</div>
                <h3>Architecture</h3>
                <p>Colors matched to the building, room proportions and architectural character.</p>
                <span className="benefit-card-line"></span>
            </article>
            <article className="color-benefit-card reveal-benefit-color">
                <div className="benefit-card-number">02</div>
                <div className="benefit-card-icon">☼</div>
                <h3>Light</h3>
                <p>Consider how natural and artificial light affect the way a color is perceived.</p>
                <span className="benefit-card-line"></span>
            </article>
            <article className="color-benefit-card reveal-benefit-color">
                <div className="benefit-card-number">03</div>
                <div className="benefit-card-icon">◈</div>
                <h3>Material</h3>
                <p>Select materials and surfaces that work appropriately with the chosen color direction.</p>
                <span className="benefit-card-line"></span>
            </article>
            <article className="color-benefit-card reveal-benefit-color">
                <div className="benefit-card-number">04</div>
                <div className="benefit-card-icon">∞</div>
                <h3>Long-Term Suitability</h3>
                <p>Choose solutions designed to remain suitable beyond current trends.</p>
                <span className="benefit-card-line"></span>
            </article>
        </div>
    </section>

    {/* <section className="digital-planning" id="digitalPlanning">
        <div className="digital-planning-image">
            <img src="/assets/external/color-and-material/photo-1558655146-d09347e92766-w2200-q90.jpg"
                alt="Digital interior design planning" />
            <div className="digital-grid"></div>
            <div className="digital-glow"></div>
        </div>
        <div className="digital-planning-content">
            <div className="digital-index">05</div>
            <span className="color-kicker">DIGITAL TOOLS</span>
            <h2>Plan digitally.<br /><em>Decide better.</em></h2>
            <p>Amigos is developing digital tools that can help customers visualize colors and materials before
                implementation.</p>
            <div className="digital-feature">
                <div className="digital-feature-icon">AI</div>
                <div><strong>Visualize Before Implementation</strong><span>Explore possible directions before making the
                        final decision.</span></div>
            </div>
            <a href="#contact" className="color-btn color-btn-primary">Discover AI Visualizer <span>↗</span></a>
            <div className="digital-disclaimer">Colors may vary slightly depending on lighting conditions in your photo.
            </div>
        </div>
    </section> */}

    <section className="color-final-cta" id="colorContact">
        <div className="cta-color-orbit"></div>
        <div className="color-final-content reveal-final-color">
            <span className="color-kicker">LET'S FIND THE RIGHT DIRECTION</span>
            <h2>Color. Material.<br /><em>The Right Decision.</em></h2>
            <p>Let's discuss your project and find a combination that fits your space, architecture and personal style.
            </p>
            <div className="color-final-actions">
                <a href="#consultation" className="color-btn color-btn-primary">Request a Consultation <span>↗</span></a>
                <a href="#" className="color-btn color-btn-outline-dark">Discuss Your Project <span>→</span></a>
            </div>
        </div>
    </section>
    </>
  );
}
