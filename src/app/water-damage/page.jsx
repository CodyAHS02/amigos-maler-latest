import ServicePageShell from "@/components/ServicePageShell";

export const metadata = { title: "Damage Remediation | Amigos Maler GmbH" };

const cards = [
  ["/assets/external/drywall/photo-1581578731548-c64695cc6952.jpg", "Damaged wall inspection", "Surface Inspection", "Clear scope before work starts.", "We check affected walls and ceilings for visible staining, loose plaster, cracks and coating damage.", "/contact", "Request Inspection ->"],
  ["/assets/Plastering/plaster-repair.jpeg", "Plaster repair after damage", "Plaster Repair", "Stable surfaces underneath.", "Loose or damaged areas are repaired and smoothed so the final coating sits on a reliable base.", "/Plastering", "Related Plastering ->"],
  ["/assets/external/services/photo-1562259949-e8e7689d7828-w900-q80.jpg", "Repainting restored interior wall", "Repainting", "Fresh finish after repair.", "We prime, block stains where needed and repaint affected areas for a consistent, lasting result.", "/interior-painting", "Related Painting ->"]
];

const steps = [
  ["01", "Assess", "Document visible damage and define the repair scope."],
  ["02", "Prepare", "Remove loose material and prepare the surface for repair."],
  ["03", "Repair", "Fill, smooth and prime affected areas with suitable products."],
  ["04", "Finish", "Apply the final paint system and check the completed surface."]
];

export default function Page() {
  return (
    <ServicePageShell>
      <main>
        <section className="services-hero" data-hero>
          <div className="services-qc-wrap">
            <div className="hero-overlay" />
            <div className="hero-content reveal">
              <span className="eyebrow">DAMAGE REMEDIATION - DRYING - SURFACE RESTORATION</span>
              <h1>Damage Remediation With A Clean Finish.</h1>
              <p>From moisture marks and damaged plaster to repainting after drying work, Amigos Maler restores affected interiors with careful preparation and durable finishing.</p>
              <div className="hero-buttons"><a href="/contact" className="primary-btn">Request Help</a><a href="/services" className="secondary-btn">View Services -&gt;</a></div>
            </div>
            <div className="hero-image parallax"><img src="/assets/services/pexels-mikhail-nilov-8296991.jpg" alt="Damage remediation surface repair and restoration" /></div>
          </div>
        </section>

        <section className="services-overview">
          <div className="services-qc-wrap">
            <div className="section-heading reveal"><span>WHAT WE HANDLE</span><h2>Repair, Prepare, Restore.</h2><p>Once the source of moisture is resolved and the area is dry, we repair damaged surfaces and bring the room back to a clean, finished condition.</p></div>
            <div className="service-grid">
              {cards.map(([image, alt, title, subtitle, text, href, link], index) => (
                <article className="service-card reveal" key={title}>
                  <div className="service-image"><img src={image} alt={alt} /></div>
                  <div className="service-content"><span className="number">0{index + 1}</span><h3>{title}</h3><h4>{subtitle}</h4><p>{text}</p><a href={href}>{link}</a></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process-section">
          <div className="section-heading reveal"><span>PROCESS</span><h2>From First Look To Final Coat.</h2><p>We keep the work focused: inspect the affected area, prepare the surface properly, repair what is damaged and finish with the right coating system.</p></div>
          <div className="process-grid">{steps.map(([number, title, text]) => <div className="process-card reveal" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}</div>
        </section>

        <section className="final-cta"><div className="reveal"><h2>Need Damage Remediation?</h2><p>Tell us what happened and we will help define the next clean step for your walls or ceilings.</p><div className="cta-buttons"><a href="/contact">Request Support</a><a href="/services">Explore Services</a></div></div></section>
      </main>
    </ServicePageShell>
  );
}
