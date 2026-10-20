import ServicePageShell from "@/components/ServicePageShell";

export const metadata = {
  title: "Architectural Molding & Trim | Amigos Maler GmbH",
  description: "Custom decorative crown moldings, wall panels, baseboards, and architectural stucco finishes by Amigos Maler GmbH."
};

const cards = [
  ["/assets/services/molding-service.jpg", "Crown moldings and ceiling cornices", "Crown Moldings & Cornices", "Graceful ceiling transitions.", "Seamlessly bridge the intersection of walls and ceilings with classical or contemporary crown moldings that add depth and sophistication."],
  ["/assets/Plastering/Professional-Systems.png", "Wall paneling and wainscoting", "Wall Paneling & Wainscoting", "Architectural rhythm on every wall.", "Picture-frame moldings, chair rails, and custom panel profiles installed with exact symmetry and flawless corner miters."],
  ["/assets/Plastering/Surface-Finishes.jpeg", "Ceiling rosettes and stucco details", "Ceiling Rosettes & Stucco", "Artisanal centerpieces.", "Decorative ceiling medallions, ornamental friezes, and restored period plaster elements primed and painted to museum-grade perfection."]
];

const steps = [
  ["01", "Measure & Consult", "Laser measurement of ceiling heights, room proportions, and profile selection."],
  ["02", "Surface Prep", "Leveling walls and substrates to guarantee continuous, gap-free adhesion."],
  ["03", "Precision Cut", "Compound miter cutting and micro-pinned installation with specialized adhesives."],
  ["04", "Seamless Coating", "Joint caulking, fine sanding, priming, and uniform high-durability spray painting."]
];

export default function Page() {
  return (
    <ServicePageShell>
      <main>
        <section className="services-hero" data-hero>
          <div className="services-qc-wrap">
            <div className="hero-overlay" />
            <div className="hero-content reveal">
              <span className="eyebrow">ARCHITECTURAL MOLDING · CROWN MOLDING · DECORATIVE TRIM</span>
              <h1>Architectural Molding &amp; Trim With Timeless Elegance.</h1>
              <p>Enhance the character and distinction of your interiors with masterfully crafted crown moldings, wall panels, ceiling medallions and custom architectural trim tailored to every room.</p>
              <div className="hero-buttons"><a href="/contact" className="primary-btn">Request A Quote</a><a href="/services" className="secondary-btn">Explore All Services →</a></div>
            </div>
            <div className="hero-image parallax"><img src="/assets/services/molding-service.jpg" alt="Architectural crown molding and decorative wall trim by Amigos Maler" /></div>
          </div>
        </section>

        <section className="services-overview">
          <div className="services-qc-wrap">
            <div className="section-heading reveal"><span>OUR CRAFTSMANSHIP</span><h2>Precision, Proportion, Perfection.</h2><p>From classic Parisian haussmannian wall paneling to sleek modern architectural shadow gaps, our artisans ensure every miter, joint, and coat is executed with absolute precision.</p></div>
            <div className="service-grid">
              {cards.map(([image, alt, title, subtitle, text], index) => <article className="service-card reveal" key={title}><div className="service-image"><img src={image} alt={alt} /></div><div className="service-content"><span className="number">0{index + 1}</span><h3>{title}</h3><h4>{subtitle}</h4><p>{text}</p><a href="/contact">Inquire Now →</a></div></article>)}
            </div>
          </div>
        </section>

        <section className="process-section">
          <div className="section-heading reveal"><span>PROCESS</span><h2>From Laser Measurement To Flawless Finish.</h2><p>We combine digital accuracy with traditional Swiss craftsmanship to deliver clean, hairline-tight molding joints that endure for decades.</p></div>
          <div className="process-grid">{steps.map(([number, title, text]) => <div className="process-card reveal" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}</div>
        </section>

        <section className="final-cta"><div className="reveal"><h2>Elevate Your Interiors With Custom Molding.</h2><p>Schedule a personal on-site consultation to explore profile options, material samples, and customized quotes.</p><div className="cta-buttons"><a href="/contact">Book A Consultation</a><a href="/services">View All Services</a></div></div></section>
      </main>
    </ServicePageShell>
  );
}
