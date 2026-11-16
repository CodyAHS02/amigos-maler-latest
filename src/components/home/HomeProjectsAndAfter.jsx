/* eslint-disable react/no-unescaped-entities */
import { HomeMarketShowcase, PropertyListings, SellRentCta } from "../../app/projects/ProjectsContent";
import { HomeCarePricing } from "../../app/property-value-preservation/PropertyValuePreservationContent";

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
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <div className="proj-viewport" id="projViewport">
                <div className="proj-track" id="projTrack">
                    {/*879*/}
                </div>
            </div>

            <button className="proj-arrow proj-next" id="projNext" type="button" aria-label="Next project">
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
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

    <HomeMarketShowcase />
    <PropertyListings />
    <SellRentCta />

    {/*1797*/}
    <HomeCarePricing embedded />

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
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <div className="carousel-stage" id="carouselStage">
                <div className="carousel-track" id="carouselTrack">
                    {/*7038*/}
                </div>
            </div>

            <button className="carousel-arrow next" id="carouselNext" aria-label="Next testimonial">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>

        <div className="carousel-dots" id="carouselDots"></div>
        <a href="https://amigos-immo.vercel.app/" className="review-btn" target="_blank" rel="noopener noreferrer">Read All Reviews</a>
    </section>

    </>
  );
}
