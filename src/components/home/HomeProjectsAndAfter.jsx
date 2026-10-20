/* eslint-disable react/no-unescaped-entities */
export default function HomeProjectsAndAfter() {
  return (
    <>
    {/*4*/}
    <section className="projects" id="projectsSection">
        <div className="projects-heading">
            <span className="eyebrow">SELECTED PROJECTS</span>
            <h2>Projects That Speak for Themselves.</h2>
            <p>Real work, real locations — drag, use the arrows, or click a neighboring card to browse.</p>
        </div>

        <div className="projects-slider">
            <button className="proj-arrow proj-prev" id="projPrev" type="button" aria-label="Previous project">
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>

            <div className="proj-viewport" id="projViewport">
                <div className="proj-track" id="projTrack">
                    {/*879*/}
                </div>
            </div>

            <button className="proj-arrow proj-next" id="projNext" type="button" aria-label="Next project">
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>

        <div className="proj-dots" id="projDots"></div>
    </section>

    <div className="projects-dock" id="projectsDock">
        <span className="dock-indicator" id="dockIndicator"></span>
        <button className="dock-tab active" data-filter="painting" type="button">Painting</button>
        <button className="dock-tab" data-filter="facade" type="button">Facade Restoration</button>
        <button className="dock-tab" data-filter="drywall" type="button">Drywall</button>
    </div>

    {/*1797*/}
    <section className="plans-section" id="plans">
        <div className="plans-header">
            <div className="plans-header-grid">
                <h2>Your property care program, structured for every level of ownership.</h2>
                <div className="plans-header-side">
                    <p>Choose the level of monitoring, planning and response that fits your home, villa or managed portfolio.</p>
                    <a className="plans-overview-cta" href="/contact">
                        <span>Request plan consultation</span>
                    </a>
                </div>
            </div>
        </div>

        <div className="plans-grid plans-overview-list">
            <article className="plan-card plan-overview-card">
                <div className="plan-overview-index">(01)</div>
                <div className="plan-overview-main">
                    <span className="plan-name">BASIC</span>
                    <h3>Basic Care Plan</h3>
                    <p>Essential upkeep for classic homeowners who want a clear yearly check and professional recommendations.</p>
                    <div className="price">
                        <small>CHF</small>
                        <strong data-month="290" data-year="2958">290</strong>
                        <span className="price-period">/mo</span>
                    </div>
                    <ul>
                        <li>Annual inspection</li>
                        <li>Maintenance report</li>
                        <li>Priority recommendations</li>
                    </ul>
                </div>
                <div className="plan-overview-action">
                    <button>Select Basic</button>
                    <i aria-hidden="true" className="plan-detail-mark"></i>
                </div>
            </article>

            <article className="plan-card featured plan-overview-card">
                <div className="plan-overview-index">(02)</div>
                <div className="plan-overview-main">
                    <span className="popular">MOST POPULAR</span>
                    <span className="plan-name">PLUS</span>
                    <h3>Plus Care Program</h3>
                    <p>The complete program for discerning owners who want proactive planning, faster support and service advantages.</p>
                    <div className="price">
                        <small>CHF</small>
                        <strong data-month="590" data-year="6018">590</strong>
                        <span className="price-period">/mo</span>
                    </div>
                    <ul>
                        <li>Interior & Exterior inspection</li>
                        <li>Maintenance planning</li>
                        <li>Discount on services</li>
                        <li>Emergency support</li>
                    </ul>
                </div>
                <div className="plan-overview-action">
                    <button>Select Plus</button>
                    <i aria-hidden="true" className="plan-detail-mark"></i>
                </div>
            </article>

            <article className="plan-card plan-overview-card">
                <div className="plan-overview-index">(03)</div>
                <div className="plan-overview-main">
                    <span className="plan-name">PREMIUM</span>
                    <h3>Premium Estate Care</h3>
                    <p>Signature care for luxury villas and institutions that need personal guidance and long-term value strategy.</p>
                    <div className="price">
                        <small>CHF</small>
                        <strong data-month="1290" data-year="13158">1290</strong>
                        <span className="price-period">/mo</span>
                    </div>
                    <ul>
                        <li>Complete Property Management Support</li>
                        <li>Priority scheduling</li>
                        <li>Personal advisor</li>
                        <li>Long-term strategy</li>
                        <li>Annual property review</li>
                    </ul>
                </div>
                <div className="plan-overview-action">
                    <button>Select Premium</button>
                    <i aria-hidden="true" className="plan-detail-mark"></i>
                </div>
            </article>
        </div>
    </section>

    {/*6114*/}
    <section className="testimonials">
        <div className="testimonial-orb"></div>
        <div className="testimonial-center">
            <span className="testimonial-kicker">TESTIMONIALS</span>
            <h2>Trust That Lasts.</h2>
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
                    {/*7038*/}
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

    </>
  );
}
