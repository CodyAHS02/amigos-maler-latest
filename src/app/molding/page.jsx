import LegacyPage from "@/components/LegacyPage";

export const metadata = {
  title: "Architectural Molding & Trim | Amigos Maler GmbH",
  description: "Custom decorative crown moldings, wall panels, baseboards, and architectural stucco finishes by Amigos Maler GmbH."
};

const pageHtml = `<main>
  <section class="services-hero" data-hero>
    <div class="services-qc-wrap">
      <div class="hero-overlay"></div>
      <div class="hero-content reveal">
        <span class="eyebrow">ARCHITECTURAL MOLDING · CROWN MOLDING · DECORATIVE TRIM</span>
        <h1>Architectural Molding & Trim With Timeless Elegance.</h1>
        <p>Enhance the character and distinction of your interiors with masterfully crafted crown moldings, wall panels, ceiling medallions and custom architectural trim tailored to every room.</p>
        <div class="hero-buttons">
          <a href="/contact" class="primary-btn">Request A Quote</a>
          <a href="/services" class="secondary-btn">Explore All Services →</a>
        </div>
      </div>
      <div class="hero-image parallax">
        <img src="/assets/services/molding-service.jpg" alt="Architectural crown molding and decorative wall trim by Amigos Maler">
      </div>
    </div>
  </section>

  <section class="services-overview">
    <div class="services-qc-wrap">
      <div class="section-heading reveal">
        <span>OUR CRAFTSMANSHIP</span>
        <h2>Precision, Proportion, Perfection.</h2>
        <p>From classic Parisian haussmannian wall paneling to sleek modern architectural shadow gaps, our artisans ensure every miter, joint, and coat is executed with absolute precision.</p>
      </div>
      <div class="service-grid">
        <article class="service-card reveal">
          <div class="service-image"><img src="/assets/services/molding-service.jpg" alt="Crown moldings and ceiling cornices"></div>
          <div class="service-content">
            <span class="number">01</span>
            <h3>Crown Moldings & Cornices</h3>
            <h4>Graceful ceiling transitions.</h4>
            <p>Seamlessly bridge the intersection of walls and ceilings with classical or contemporary crown moldings that add depth and sophistication.</p>
            <a href="/contact">Inquire Now →</a>
          </div>
        </article>
        <article class="service-card reveal">
          <div class="service-image"><img src="/assets/Plastering/Professional-Systems.png" alt="Wall paneling and wainscoting"></div>
          <div class="service-content">
            <span class="number">02</span>
            <h3>Wall Paneling & Wainscoting</h3>
            <h4>Architectural rhythm on every wall.</h4>
            <p>Picture-frame moldings, chair rails, and custom panel profiles installed with exact symmetry and flawless corner miters.</p>
            <a href="/contact">Inquire Now →</a>
          </div>
        </article>
        <article class="service-card reveal">
          <div class="service-image"><img src="/assets/Plastering/Surface-Finishes.jpeg" alt="Ceiling rosettes and stucco details"></div>
          <div class="service-content">
            <span class="number">03</span>
            <h3>Ceiling Rosettes & Stucco</h3>
            <h4>Artisanal centerpieces.</h4>
            <p>Decorative ceiling medallions, ornamental friezes, and restored period plaster elements primed and painted to museum-grade perfection.</p>
            <a href="/contact">Inquire Now →</a>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="process-section">
    <div class="section-heading reveal">
      <span>PROCESS</span>
      <h2>From Laser Measurement To Flawless Finish.</h2>
      <p>We combine digital accuracy with traditional Swiss craftsmanship to deliver clean, hairline-tight molding joints that endure for decades.</p>
    </div>
    <div class="process-grid">
      <div class="process-card reveal"><span>01</span><h3>Measure & Consult</h3><p>Laser measurement of ceiling heights, room proportions, and profile selection.</p></div>
      <div class="process-card reveal"><span>02</span><h3>Surface Prep</h3><p>Leveling walls and substrates to guarantee continuous, gap-free adhesion.</p></div>
      <div class="process-card reveal"><span>03</span><h3>Precision Cut</h3><p>Compound miter cutting and micro-pinned installation with specialized adhesives.</p></div>
      <div class="process-card reveal"><span>04</span><h3>Seamless Coating</h3><p>Joint caulking, fine sanding, priming, and uniform high-durability spray painting.</p></div>
    </div>
  </section>

  <section class="final-cta">
    <div class="reveal">
      <h2>Elevate Your Interiors With Custom Molding.</h2>
      <p>Schedule a personal on-site consultation to explore profile options, material samples, and customized quotes.</p>
      <div class="cta-buttons">
        <a href="/contact">Book A Consultation</a>
        <a href="/services">View All Services</a>
      </div>
    </div>
  </section>
</main>`;

export default function Page() {
  return (
    <LegacyPage
      css={["/service.css", "/partial.css"]}
      html={pageHtml}
      scripts={["/service.js"]}
      shell={true}
    />
  );
}
