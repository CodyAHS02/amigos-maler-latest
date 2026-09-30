import LegacyPage from "@/components/LegacyPage";

export const metadata = {
  title: "Damage Remediation | Amigos Maler GmbH"
};

const pageHtml = `<main>
  <section class="services-hero" data-hero>
    <div class="services-qc-wrap">
      <div class="hero-overlay"></div>
      <div class="hero-content reveal">
        <span class="eyebrow">DAMAGE REMEDIATION - DRYING - SURFACE RESTORATION</span>
        <h1>Damage Remediation With A Clean Finish.</h1>
        <p>From moisture marks and damaged plaster to repainting after drying work, Amigos Maler restores affected interiors with careful preparation and durable finishing.</p>
        <div class="hero-buttons">
          <a href="/contact" class="primary-btn">Request Help</a>
          <a href="/services" class="secondary-btn">View Services -></a>
        </div>
      </div>
      <div class="hero-image parallax">
        <img src="/assets/services/pexels-mikhail-nilov-8296991.jpg" alt="Damage remediation surface repair and restoration">
      </div>
    </div>
  </section>

  <section class="services-overview">
    <div class="services-qc-wrap">
      <div class="section-heading reveal">
        <span>WHAT WE HANDLE</span>
        <h2>Repair, Prepare, Restore.</h2>
        <p>Once the source of moisture is resolved and the area is dry, we repair damaged surfaces and bring the room back to a clean, finished condition.</p>
      </div>
      <div class="service-grid">
        <article class="service-card reveal">
          <div class="service-image"><img src="/assets/external/drywall/photo-1581578731548-c64695cc6952.jpg" alt="Damaged wall inspection"></div>
          <div class="service-content"><span class="number">01</span><h3>Surface Inspection</h3><h4>Clear scope before work starts.</h4><p>We check affected walls and ceilings for visible staining, loose plaster, cracks and coating damage.</p><a href="/contact">Request Inspection -></a></div>
        </article>
        <article class="service-card reveal">
          <div class="service-image"><img src="/assets/Plastering/plaster-repair.jpeg" alt="Plaster repair after damage"></div>
          <div class="service-content"><span class="number">02</span><h3>Plaster Repair</h3><h4>Stable surfaces underneath.</h4><p>Loose or damaged areas are repaired and smoothed so the final coating sits on a reliable base.</p><a href="/Plastering">Related Plastering -></a></div>
        </article>
        <article class="service-card reveal">
          <div class="service-image"><img src="/assets/external/services/photo-1562259949-e8e7689d7828-w900-q80.jpg" alt="Repainting restored interior wall"></div>
          <div class="service-content"><span class="number">03</span><h3>Repainting</h3><h4>Fresh finish after repair.</h4><p>We prime, block stains where needed and repaint affected areas for a consistent, lasting result.</p><a href="/interior-painting">Related Painting -></a></div>
        </article>
      </div>
    </div>
  </section>

  <section class="process-section">
    <div class="section-heading reveal">
      <span>PROCESS</span>
      <h2>From First Look To Final Coat.</h2>
      <p>We keep the work focused: inspect the affected area, prepare the surface properly, repair what is damaged and finish with the right coating system.</p>
    </div>
    <div class="process-grid">
      <div class="process-card reveal"><span>01</span><h3>Assess</h3><p>Document visible damage and define the repair scope.</p></div>
      <div class="process-card reveal"><span>02</span><h3>Prepare</h3><p>Remove loose material and prepare the surface for repair.</p></div>
      <div class="process-card reveal"><span>03</span><h3>Repair</h3><p>Fill, smooth and prime affected areas with suitable products.</p></div>
      <div class="process-card reveal"><span>04</span><h3>Finish</h3><p>Apply the final paint system and check the completed surface.</p></div>
    </div>
  </section>

  <section class="final-cta">
    <div class="reveal">
      <h2>Need Damage Remediation?</h2>
      <p>Tell us what happened and we will help define the next clean step for your walls or ceilings.</p>
      <div class="cta-buttons"><a href="/contact">Request Support</a><a href="/services">Explore Services</a></div>
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
