export default function PlasteringContent() {
  return (
    <>
    <section className="gipser-hero" data-hero>
      <div className="gipser-hero-bg">
        <img src="/assets/Plastering/Hero.png" alt="Professional plasterer applying plaster on wall" />
      </div>
      <div className="gipser-hero-overlay">
      </div>
      <div className="gipser-hero-wrapper">
        <div className="gipser-hero-content">
          <span className="hero-label">
            PLASTERING
          </span>
          <h1>
            Perfect Surfaces.
            <br />
            Professional Plastering.
            <br />
            Built From The Foundation.
          </h1>
          <p>
            Professional plastering, smoothing and surface preparation for flawless walls and ceilings. From
                        filling work and rendering to repairs and detailed finishing, we create durable surfaces ready for
                        premium coatings.
          </p>
          <div className="hero-actions">
            <a href="#" className="btn-primary">
              Request An Offer
            </a>
            <a href="#services" className="btn-outline">
              View Our Work
            </a>
          </div>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <strong>
              01
            </strong>
            <span>
              Surface
              <br />
              Preparation
            </span>
          </div>
          <div className="hero-stat">
            <strong>
              02
            </strong>
            <span>
              Professional
              <br />
              Plastering
            </span>
          </div>
          <div className="hero-stat">
            <strong>
              03
            </strong>
            <span>
              Premium
              <br />
              Finishes
            </span>
          </div>
        </div>
      </div>
    </section>
    <section className="gipser-intro">
      <div className="intro-layout">
        <div className="intro-image reveal-image">
          <img src="/assets/Plastering/2nd-section.png" alt="Worker preparing wall surface" />
        </div>
        <div className="intro-content reveal-content">
          <span className="section-tag">
            SURFACE QUALITY STARTS BELOW
          </span>
          <h2>
            A beautiful finish starts with the right foundation.
          </h2>
          <p>
            A high-quality painted surface is only possible when the substrate underneath is properly prepared.
                        Professional plastering creates smooth surfaces, removes imperfections and provides the perfect base
                        for future finishes.
          </p>
          <p>
            Through careful preparation, precise repairs and skilled craftsmanship, we create durable surfaces
                        that maintain their quality over time.
          </p>
          <div className="intro-points">
            <div>
              <span>
                01
              </span>
              <p>
                Smooth and even surfaces
              </p>
            </div>
            <div>
              <span>
                02
              </span>
              <p>
                Professional preparation
              </p>
            </div>
            <div>
              <span>
                03
              </span>
              <p>
                Long-lasting results
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="gipser-services" id="services">
      <div className="section-heading">
        <span className="section-tag">
          OUR SERVICES
        </span>
        <h2>
          Professional Plastering Solutions
        </h2>
        <p>
          From surface preparation to final smoothing, every step is completed with precision and attention to
                    detail.
        </p>
      </div>
      <div className="service-grid">
        <article className="service-card reveal-card">
          <div className="service-image">
            <img src="/assets/Plastering/Filling.png" alt="Wall filling and smoothing work" />
          </div>
          <div className="service-body">
            <span>
              01
            </span>
            <h3>
              Filling & Smoothing
            </h3>
            <p>
              Precise filling work to remove cracks, uneven areas and imperfections while creating smooth
                            surfaces.
            </p>
            <a href="#">
              Learn More →
            </a>
          </div>
        </article>
        <article className="service-card reveal-card">
          <div className="service-image">
            <img src="/assets/Plastering/Plastering.jpeg" alt="Professional plaster application" />
          </div>
          <div className="service-body">
            <span>
              02
            </span>
            <h3>
              Plastering & Rendering
            </h3>
            <p>
              Professional plaster application using suitable techniques for walls and ceilings.
            </p>
            <a href="#">
              Learn More →
            </a>
          </div>
        </article>
        <article className="service-card reveal-card">
          <div className="service-image">
            <img src="/assets/Plastering/Surface-Preparation.jpeg" alt="Surface preparation before finishing" />
          </div>
          <div className="service-body">
            <span>
              03
            </span>
            <h3>
              Surface Preparation
            </h3>
            <p>
              Careful preparation creates the ideal foundation for painting and premium finishing.
            </p>
            <a href="#">
              Learn More →
            </a>
          </div>
        </article>
        <article className="service-card reveal-card">
          <div className="service-image">
            <img src="/assets/Plastering/Surface-Repairs.avif" alt="Repairing damaged wall surfaces" />
          </div>
          <div className="service-body">
            <span>
              04
            </span>
            <h3>
              Surface Repairs
            </h3>
            <p>
              Repairing cracks, holes and damaged plaster to restore surface quality.
            </p>
            <a href="#">
              Learn More →
            </a>
          </div>
        </article>
        <article className="service-card reveal-card">
          <div className="service-image">
            <img src="/assets/Plastering/Wall-Ceiling-Smoothing.jpeg" alt="Smooth finished wall" />
          </div>
          <div className="service-body">
            <span>
              05
            </span>
            <h3>
              Wall & Ceiling Smoothing
            </h3>
            <p>
              Creating refined and even surfaces ready for painting or decorative finishes.
            </p>
            <a href="#">
              Learn More →
            </a>
          </div>
        </article>
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
            <span className="ba-tag ba-tag-before" id="baTagBefore">
              BEFORE
            </span>
          </div>
          <div className="ba-after-pane" id="baAfterPane">
            <img src="/assets/Services-After-Room.png" alt="After renovation" />
            <span className="ba-tag ba-tag-after" id="baTagAfter">
              AFTER
            </span>
          </div>
          <div className="slider-divider" id="baDivider">
            <span className="divider-handle">
              ↔
            </span>
          </div>
        </div>
      </div>
    </section>
    <section className="surface-problems-section">
      <div className="section-heading">
        <span className="section-tag">
          COMMON PROBLEMS
        </span>
        <h2>
          Surfaces We Restore.
        </h2>
        <p>
          Many wall problems are not only visual issues. Professional plastering creates a stable and refined
                    foundation.
        </p>
      </div>
      <div className="problem-grid">
        <div className="problem-item reveal-card">
          <div className="problem-number">
            01
          </div>
          <h3>
            Cracks
          </h3>
          <p>
            Repairing visible cracks and restoring surface strength before further finishing.
          </p>
        </div>
        <div className="problem-item reveal-card">
          <div className="problem-number">
            02
          </div>
          <h3>
            Uneven Surfaces
          </h3>
          <p>
            Creating balanced and level surfaces with professional smoothing techniques.
          </p>
        </div>
        <div className="problem-item reveal-card">
          <div className="problem-number">
            03
          </div>
          <h3>
            Damaged Plaster
          </h3>
          <p>
            Removing damaged areas and rebuilding the surface professionally.
          </p>
        </div>
        <div className="problem-item reveal-card">
          <div className="problem-number">
            04
          </div>
          <h3>
            Holes & Imperfections
          </h3>
          <p>
            Filling defects and preparing walls for a flawless final appearance.
          </p>
        </div>
        <div className="problem-item reveal-card">
          <div className="problem-number">
            05
          </div>
          <h3>
            Rough Walls
          </h3>
          <p>
            Transforming rough textures into smooth and refined surfaces.
          </p>
        </div>
        <div className="problem-item reveal-card">
          <div className="problem-number">
            06
          </div>
          <h3>
            Old Surfaces
          </h3>
          <p>
            Refreshing outdated walls with modern plastering solutions.
          </p>
        </div>
      </div>
    </section>
    <section className="process-section">
      <div className="process-header">
        <span className="section-tag">
          OUR PROCESS
        </span>
        <h2>
          From Damaged Surface
          <br />
          To Perfect Finish.
        </h2>
        <p>
          A precise workflow ensures every surface receives the correct treatment.
        </p>
      </div>
      <div className="process-timeline">
        <div className="process-line">
          <span className="process-progress">
          </span>
        </div>
        <div className="process-step reveal-step">
          <div className="step-number">
            01
          </div>
          <div className="step-content">
            <img src="/assets/Plastering/Professional-Systems.png" alt="Analyse" className="step-image" />
            <h3>
              Analyse
            </h3>
            <p>
              We inspect the existing surface and determine the correct plastering solution.
            </p>
          </div>
        </div>
        <div className="process-step reveal-step">
          <div className="step-number">
            02
          </div>
          <div className="step-content">
            <img src="/assets/Plastering/Surface-Preparation.jpeg" alt="Preparation" className="step-image" />
            <h3>
              Preparation
            </h3>
            <p>
              The area is cleaned, protected and prepared for professional work.
            </p>
          </div>
        </div>
        <div className="process-step reveal-step">
          <div className="step-number">
            03
          </div>
          <div className="step-content">
            <img src="/assets/Plastering/Surface-Repairs.avif" alt="Repair" className="step-image" />
            <h3>
              Repair
            </h3>
            <p>
              Cracks, holes and damaged sections are carefully restored.
            </p>
          </div>
        </div>
        <div className="process-step reveal-step">
          <div className="step-number">
            04
          </div>
          <div className="step-content">
            <img src="/assets/Plastering/Filling.png" alt="Plaster & Fill" className="step-image" />
            <h3>
              Plaster & Fill
            </h3>
            <p>
              Suitable plaster and filling materials are applied for the required finish.
            </p>
          </div>
        </div>
        <div className="process-step reveal-step">
          <div className="step-number">
            05
          </div>
          <div className="step-content">
            <img src="/assets/Plastering/Wall-Ceiling-Smoothing.jpeg" alt="Smooth & Finish" className="step-image" />
            <h3>
              Smooth & Finish
            </h3>
            <p>
              The surface is refined to achieve a clean and even result.
            </p>
          </div>
        </div>
        <div className="process-step reveal-step">
          <div className="step-number">
            06
          </div>
          <div className="step-content">
            <img src="/assets/Plastering/End-Process.png" alt="Ready For The Next Finish" className="step-image" />
            <h3>
              Ready For The Next Finish
            </h3>
            <p>
              The completed surface is prepared for painting or decorative finishing.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="materials-section">
      <div className="section-heading centered">
        <span className="section-tag">
          MATERIALS & FINISHES
        </span>
        <h2>
          The Right Solution For Every Surface.
        </h2>
        <p>
          Every surface requires the right material based on condition, usage and desired final appearance.
        </p>
      </div>
      <div className="materials-grid">
        <div className="material-item reveal-card">
          <div className="material-image">
            <img src="/assets/Plastering/Fine-Plaster.jpg" alt="Fine plaster texture" />
          </div>
          <div className="material-content">
            <h3>
              Fine Plaster
            </h3>
            <p>
              Creates smooth decorative surfaces with a premium refined finish.
            </p>
          </div>
        </div>
        <div className="material-item reveal-card">
          <div className="material-image">
            <img src="/assets/Plastering/plaster-repair.jpeg" alt="Wall repair materials" />
          </div>
          <div className="material-content">
            <h3>
              Repair Fillers
            </h3>
            <p>
              Used for cracks, holes and damaged areas requiring restoration.
            </p>
          </div>
        </div>
        <div className="material-item reveal-card">
          <div className="material-image">
            <img src="/assets/Plastering/Surface-Finishes.jpeg" alt="Surface finishing work" />
          </div>
          <div className="material-content">
            <h3>
              Surface Finishes
            </h3>
            <p>
              Professional solutions for clean and durable final surfaces.
            </p>
          </div>
        </div>
        <div className="material-item reveal-card">
          <div className="material-image">
            <img src="/assets/Plastering/Professional-Systems.png" alt="Professional plastering tools" />
          </div>
          <div className="material-content">
            <h3>
              Professional Systems
            </h3>
            <p>
              Suitable techniques selected according to surface requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="professional-section">
      <div className="professional-wrapper">
        <div className="professional-heading">
          <span className="section-tag">
            WHY PROFESSIONAL PLASTERING
          </span>
          <h2>
            The Foundation Behind Every Perfect Finish.
          </h2>
          <p>
            Professional plastering creates more than smooth walls. It provides the quality foundation needed for
                        durable, clean and visually refined results.
          </p>
        </div>
        <div className="professional-grid">
          <div className="professional-card reveal-card">
            <span>
              01
            </span>
            <h3>
              Better Surface Quality
            </h3>
            <p>
              Precise techniques create smooth and consistent surfaces ready for any final finish.
            </p>
          </div>
          <div className="professional-card reveal-card">
            <span>
              02
            </span>
            <h3>
              Proper Preparation
            </h3>
            <p>
              A carefully prepared substrate improves the quality and performance of every coating.
            </p>
          </div>
          <div className="professional-card reveal-card">
            <span>
              03
            </span>
            <h3>
              Durable Results
            </h3>
            <p>
              High-quality plastering helps maintain stable surfaces for years.
            </p>
          </div>
          <div className="professional-card reveal-card">
            <span>
              04
            </span>
            <h3>
              Cleaner Appearance
            </h3>
            <p>
              Perfectly finished walls create a premium and professional look.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="surface-transition-section">
      <div className="transition-visual">
        <div className="transition-image">
          <img src="/assets/Plastering/End-Process.png" alt="Professional wall finishing work" />
        </div>
        <div className="transition-badge">
          <span>
            PROCESS
          </span>
          <strong>
            01 → 02 → 03
          </strong>
        </div>
      </div>
      <div className="transition-content">
        <span className="section-tag">
          FROM PLASTERING TO PAINTING
        </span>
        <h2>
          
                    Gipserarbeiten
          <br />
          
                    Smooth Surface
          <br />
          
                    Painting
                
        </h2>
        <div className="transition-steps">
          <div className="transition-step">
            <strong>
              01
            </strong>
            <p>
              Professional plastering creates a stable and even foundation.
            </p>
          </div>
          <div className="transition-step">
            <strong>
              02
            </strong>
            <p>
              Smooth surfaces allow paint and coatings to perform better.
            </p>
          </div>
          <div className="transition-step">
            <strong>
              03
            </strong>
            <p>
              The final finish becomes cleaner, stronger and longer lasting.
            </p>
          </div>
        </div>
        <a href="/interior-painting" className="btn-primary">
          Discover Painting Services →
        </a>
      </div>
    </section>
    <section className="property-preservation-section">
      <div className="property-background">
        <img src="/assets/external/appartment-renovation/photo-1600607687939-ce8a6c25118c.jpg?auto=format&fit=crop&w=2200&q=90" alt="Well maintained property interior" />
      </div>
      <div className="property-overlay">
      </div>
      <div className="property-content">
        <span className="section-tag">
          PROPERTY PRESERVATION
        </span>
        <h2>
          Protecting Your Property Through Professional Surface Care.
        </h2>
        <p>
          Regular repairs, professional plastering and proper surface maintenance help preserve the condition,
                    appearance and long-term value of your property.
        </p>
        <a href="/property-value-preservation" className="btn-primary">
          Discover Property Preservation →
        </a>
      </div>
      <div className="property-floating-cards">
        <div className="floating-card">
          <strong>
            01
          </strong>
          <span>
            Maintain Quality
          </span>
        </div>
        <div className="floating-card">
          <strong>
            02
          </strong>
          <span>
            Protect Surfaces
          </span>
        </div>
        <div className="floating-card">
          <strong>
            03
          </strong>
          <span>
            Preserve Value
          </span>
        </div>
      </div>
    </section>
    <section className="final-cta-section">
      <div className="cta-inner">
        <span className="section-tag">
          START YOUR PROJECT
        </span>
        <h2>
          Ready For A Perfect Surface?
        </h2>
        <p>
          From plastering and repairs to professional surface preparation, we create foundations built for
                    beautiful and lasting results.
        </p>
        <div className="cta-buttons">
          <a href="/contact" className="btn-primary">
            Request A Free Offer
          </a>
          <a href="/contact" className="btn-outline">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
    </>
  );
}
