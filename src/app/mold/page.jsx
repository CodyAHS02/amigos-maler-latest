import LegacyPage from "@/components/LegacyPage";

export const metadata = {
  title: "Mold Remediation & Prevention | Amigos Maler GmbH",
  description: "Professional mold detection, certified remediation, and breathable anti-mold coating systems for healthy indoor living in Olten and surrounding regions."
};

const pageHtml = `<main>
  <section class="services-hero" data-hero>
    <div class="services-qc-wrap">
      <div class="hero-overlay"></div>
      <div class="hero-content reveal">
        <span class="eyebrow">MOLD REMEDIATION · AIR HYGIENE · SUSTAINABLE PROTECTION</span>
        <h1>Professional Mold Remediation With Long-Term Protection.</h1>
        <p>Mold affects both your property's value and your health. Amigos Maler provides thorough diagnostics, certified removal of fungal growth, and breathable, mineral coatings that permanently prevent recurrence.</p>
        <div class="hero-buttons">
          <a href="/#quote" class="primary-btn">Calculate Estimated Quote</a>
          <a href="/contact" class="secondary-btn">Book On-Site Inspection →</a>
        </div>
      </div>
      <div class="hero-image parallax">
        <img src="/assets/services/molding-service.jpg" alt="Certified mold remediation and clean wall restoration">
      </div>
    </div>
  </section>

  <section class="services-overview">
    <div class="services-qc-wrap">
      <div class="section-heading reveal">
        <span>OUR APPROACH</span>
        <h2>Identify Causes. Eliminate Mold. Prevent Recurrence.</h2>
        <p>Treating surface mold without resolving underlying physics only leads to repeated outbreaks. We combine thermal and moisture inspection with targeted Swiss-grade remediation systems.</p>
      </div>
      <div class="service-grid">
        <article class="service-card reveal">
          <div class="service-image"><img src="/assets/Plastering/plaster-repair.jpeg" alt="Moisture measurement and surface diagnostics"></div>
          <div class="service-content">
            <span class="number">01</span>
            <h3>Diagnostics & Moisture Check</h3>
            <h4>Find the root cause.</h4>
            <p>We check wall moisture, humidity levels, and thermal bridges to identify why mold developed in your room.</p>
            <a href="/contact">Book Inspection →</a>
          </div>
        </article>
        <article class="service-card reveal">
          <div class="service-image"><img src="/assets/Plastering/Surface-Finishes.jpeg" alt="Safe certified mold remediation"></div>
          <div class="service-content">
            <span class="number">02</span>
            <h3>Certified Remediation</h3>
            <h4>Safe, spore-free removal.</h4>
            <p>Using certified eco-friendly fungicides and containment, we eliminate active spores without releasing toxins into your living space.</p>
            <a href="/contact">Learn More →</a>
          </div>
        </article>
        <article class="service-card reveal">
          <div class="service-image"><img src="/assets/services/pexels-kseniachernaya-5691592.jpg" alt="Anti-mold mineral paint finish"></div>
          <div class="service-content">
            <span class="number">03</span>
            <h3>Mineral Anti-Mold Paint</h3>
            <h4>Natural, alkaline protection.</h4>
            <p>Silicate and lime-based mineral coatings create a naturally alkaline surface where fungal spores cannot take hold, ensuring fresh, breathable indoor air.</p>
            <a href="/#quote">Calculate Project →</a>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="process-section">
    <div class="section-heading reveal">
      <span>REMEDIATION PROCESS</span>
      <h2>Step-by-Step Restoration to Clean, Healthy Spaces.</h2>
      <p>Clear, transparent protocols designed for homeowners, property managers, and rental tenant transitions.</p>
    </div>
    <div class="process-grid">
      <div class="process-card reveal"><span>01</span><h3>Inspect</h3><p>Assess mold spread and measure surface moisture levels.</p></div>
      <div class="process-card reveal"><span>02</span><h3>Isolate</h3><p>Protect unaffected areas and contain airborne spores.</p></div>
      <div class="process-card reveal"><span>03</span><h3>Neutralize</h3><p>Deep-clean affected plaster and apply fungicidal treatment.</p></div>
      <div class="process-card reveal"><span>04</span><h3>Protect</h3><p>Refinish with breathable, mold-inhibiting mineral paint systems.</p></div>
    </div>
  </section>

  <section class="final-cta">
    <div class="reveal">
      <h2>Suspect Mold in Your Property?</h2>
      <p>Act early to prevent structural damage and maintain healthy indoor air. We provide rapid inspection across the Olten region.</p>
      <div class="cta-buttons">
        <a href="/#quote">Calculate Online Quote</a>
        <a href="/contact">Book Immediate Inspection</a>
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
