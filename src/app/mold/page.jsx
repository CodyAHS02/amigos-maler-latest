import ServicePageShell from "@/components/ServicePageShell";

export const metadata = {
  title: "Mold Remediation & Prevention | Amigos Maler GmbH",
  description: "Professional mold detection, certified remediation, and breathable anti-mold coating systems for healthy indoor living in Olten and surrounding regions."
};

const cards = [
  ["/assets/Plastering/plaster-repair.jpeg", "Moisture measurement and surface diagnostics", "Diagnostics & Moisture Check", "Find the root cause.", "We check wall moisture, humidity levels, and thermal bridges to identify why mold developed in your room.", "/contact", "Book Inspection →"],
  ["/assets/Plastering/Surface-Finishes.jpeg", "Safe certified mold remediation", "Certified Remediation", "Safe, spore-free removal.", "Using certified eco-friendly fungicides and containment, we eliminate active spores without releasing toxins into your living space.", "/contact", "Learn More →"],
  ["/assets/services/pexels-kseniachernaya-5691592.jpg", "Anti-mold mineral paint finish", "Mineral Anti-Mold Paint", "Natural, alkaline protection.", "Silicate and lime-based mineral coatings create a naturally alkaline surface where fungal spores cannot take hold, ensuring fresh, breathable indoor air.", "/#quote", "Calculate Project →"],
  ["/assets/services/pexels-kseniachernaya-5691513.jpg", "Final sealing and protective coating", "Sealing & Finishing", "Long-lasting surface protection.", "Final sealant layers lock in the remediation and give surfaces a clean, durable finish that resists future moisture intrusion.", "/contact", "Get a Quote →"]
];

const steps = [
  ["01", "Inspect", "Assess mold spread and measure surface moisture levels."],
  ["02", "Isolate", "Protect unaffected areas and contain airborne spores."],
  ["03", "Neutralize", "Deep-clean affected plaster and apply fungicidal treatment."],
  ["04", "Protect", "Refinish with breathable, mold-inhibiting mineral paint systems."]
];

export default function Page() {
  return (
    <ServicePageShell>
      <main>
        <section className="services-hero" data-hero>
          <div className="services-qc-wrap">
            <div className="hero-overlay" />
            <div className="hero-content reveal">
              <span className="eyebrow">MOLD REMEDIATION · AIR HYGIENE · SUSTAINABLE PROTECTION</span>
              <h1>Professional Mold Remediation With Long-Term Protection.</h1>
              <p>Mold affects both your property&apos;s value and your health. Amigos Maler provides thorough diagnostics, certified removal of fungal growth, and breathable, mineral coatings that permanently prevent recurrence.</p>
              <div className="hero-buttons"><a href="/#quote" className="primary-btn">Calculate Estimated Quote</a><a href="/contact" className="secondary-btn">Book On-Site Inspection →</a></div>
            </div>
            <div className="hero-image parallax"><img src="/assets/services/molding-service.jpg" alt="Certified mold remediation and clean wall restoration" /></div>
          </div>
        </section>

        <section className="services-overview">
          <div className="services-qc-wrap">
            <div className="section-heading reveal"><span>OUR APPROACH</span><h2>Identify Causes. Eliminate Mold. Prevent Recurrence.</h2><p>Treating surface mold without resolving underlying physics only leads to repeated outbreaks. We combine thermal and moisture inspection with targeted Swiss-grade remediation systems.</p></div>
            <div className="service-grid mold-service-grid">
              {cards.map(([image, alt, title, subtitle, text, href, link], index) => (
                <article className="service-card reveal" key={title}>
                  <div className="service-image"><img src={image} alt={alt} /></div>
                  <div className="service-content"><span className="number">0{index + 1}</span><h3>{title}</h3><h4>{subtitle}</h4><p>{text}</p><a href={href}>{link}</a></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process-section mold-process">
          <div className="section-heading reveal"><span>REMEDIATION PROCESS</span><h2>Step-by-Step Restoration to Clean, Healthy Spaces.</h2><p>Clear, transparent protocols designed for homeowners, property managers, and rental tenant transitions.</p></div>
          <div className="process-grid">{steps.map(([number, title, text]) => <div className="process-card reveal" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}</div>
        </section>

        <section className="final-cta"><div className="reveal"><h2>Suspect Mold in Your Property?</h2><p>Act early to prevent structural damage and maintain healthy indoor air. We provide rapid inspection across the Olten region.</p><div className="cta-buttons"><a href="/#quote">Calculate Online Quote</a><a href="/contact">Book Immediate Inspection</a></div></div></section>
      </main>
    </ServicePageShell>
  );
}
