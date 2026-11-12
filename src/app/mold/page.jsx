import ServicePageShell from "@/components/ServicePageShell";

export const metadata = {
  title: "Mold Remediation & Prevention | Amigos Maler GmbH",
  description: "Professional mold detection, certified remediation, and breathable anti-mold coating systems for healthy indoor living in Olten and surrounding regions."
};

const cards = [
  ["/assets/Plastering/plaster-repair.webp", "Moisture measurement and surface diagnostics", "Diagnostics & Moisture Check", "We check moisture and thermal bridges to find the cause.", "/contact", "Book Inspection →"],
  ["/assets/Plastering/Surface-Finishes.webp", "Safe certified mold remediation", "Certified Remediation", "Certified removal keeps your rooms safe and spore-free.", "/contact", "Learn More →"],
  ["/assets/services/pexels-kseniachernaya-5691592.webp", "Anti-mold mineral paint finish", "Mineral Anti-Mold Paint", "Breathable mineral coatings help prevent mold from returning.", "/#quote", "Calculate Project →"],
  ["/assets/services/pexels-kseniachernaya-5691513.webp", "Final sealing and protective coating", "Sealing & Finishing", "A durable seal protects surfaces from future moisture.", "/contact", "Get a Quote →"]
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
        <style>{`
          html:not([data-theme="amigos-dark"]) body #moldHeroHeading,
          html:not([data-theme="amigos-dark"]) body #moldHeroDescription,
          html:not([data-theme="amigos-dark"]) body #moldCalculateButton,
          html:not([data-theme="amigos-dark"]) body #moldInspectionButton {
            color: #000 !important;
            -webkit-text-fill-color: #000 !important;
          }
          html:not([data-theme="amigos-dark"]) body #moldHeroOverlay {
            background: linear-gradient(90deg, rgba(255, 255, 255, .52), rgba(255, 255, 255, .24)) !important;
          }
          #moldFinalCta .reveal,
          #moldFinalCta .reveal * {
            opacity: 1 !important;
            transform: none !important;
          }
      #moldFinalCta {
        isolation: isolate !important;
      }
      #moldFinalCta::after {
        display: none !important;
      }
      #moldFinalCta > div {
        position: relative !important;
        z-index: 2 !important;
        opacity: 1 !important;
        transform: none !important;
      }
      #moldFinalCta > div * {
        opacity: 1 !important;
        filter: none !important;
      }
      @media (max-width: 1100px) {
        .mold-service-grid {
          grid-template-columns: 1fr !important;
          gap: 24px !important;
        }
      }
      @media (max-width: 760px) {
        .mold-service-grid {
          grid-template-columns: 1fr !important;
          gap: 24px !important;
          width: calc(100% - 48px) !important;
          margin-inline: auto !important;
        }
        .mold-service-grid .service-card {
          width: 100% !important;
          min-width: 0 !important;
        }
        #moldFinalCta {
          box-sizing: border-box !important;
          padding: 64px 24px !important;
        }
        #moldFinalCta > div {
          width: 100% !important;
          max-width: 560px !important;
          margin-inline: auto !important;
        }
        #moldFinalCta h2 {
          max-width: 100% !important;
          font-size: clamp(30px, 8vw, 42px) !important;
          line-height: 1.1 !important;
          overflow-wrap: anywhere !important;
          text-align: center !important;
        }
        #moldFinalCta p {
          max-width: 100% !important;
          font-size: 18px !important;
          line-height: 1.45 !important;
          text-align: center !important;
        }
        #moldFinalCta .cta-buttons {
          width: 100% !important;
          flex-direction: column !important;
          align-items: center !important;
          gap: 16px !important;
          margin-top: 32px !important;
        }
        #moldFinalCta .cta-buttons a {
          width: 100% !important;
          max-width: 520px !important;
          box-sizing: border-box !important;
          justify-content: center !important;
          text-align: center !important;
        }
      }
        `}</style>
        <section className="services-hero" data-hero>
          <div className="services-qc-wrap">
            <div id="moldHeroOverlay" className="hero-overlay" />
            <div className="hero-content reveal">
              <span className="eyebrow">MOLD REMEDIATION · AIR HYGIENE · SUSTAINABLE PROTECTION</span>
              <h1 id="moldHeroHeading">Professional Mold Remediation With Long-Term Protection.</h1>
              <p id="moldHeroDescription">Mold affects both your property&apos;s value and your health. Amigos Maler provides thorough diagnostics, certified removal of fungal growth, and breathable, mineral coatings that permanently prevent recurrence.</p>
              <div className="hero-buttons"><a id="moldCalculateButton" href="/#quote" className="primary-btn">Calculate Estimated Quote</a><a id="moldInspectionButton" href="/contact" className="secondary-btn">Book On-Site Inspection</a></div>
            </div>
            <div className="hero-image parallax"><img src="/assets/services/molding-service.webp" alt="Certified mold remediation and clean wall restoration" /></div>
          </div>
        </section>

        <section className="services-overview">
          <div className="services-qc-wrap">
            <div className="section-heading reveal"><span>OUR APPROACH</span><h2>Identify Causes. Eliminate Mold. Prevent Recurrence.</h2><p>Treating surface mold without resolving underlying physics only leads to repeated outbreaks. We combine thermal and moisture inspection with targeted Swiss-grade remediation systems.</p></div>
            <div className="service-grid mold-service-grid">
              {cards.map(([image, alt, title, text, href, link], index) => (
                <article className="service-card reveal" key={title}>
                  <div className="service-image"><img src={image} alt={alt} /></div>
                  <div className="service-content"><span className="number">0{index + 1}</span><h3>{title}</h3><p>{text}</p><a href={href}>{link}</a></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process-section mold-process">
          <div className="section-heading reveal"><span>REMEDIATION PROCESS</span><h2>Step-by-Step Restoration to Clean, Healthy Spaces.</h2><p>Clear, transparent protocols designed for homeowners, property managers, and rental tenant transitions.</p></div>
          <div className="process-grid">{steps.map(([number, title, text]) => <div className="process-card reveal" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}</div>
        </section>

        <section id="moldFinalCta" className="final-cta"><div><h2>Suspect Mold in Your Property?</h2><p>Act early to prevent structural damage and maintain healthy indoor air. We provide rapid inspection across the Olten region.</p><div className="cta-buttons"><a id="moldFinalCalculateButton" href="/#quote">Calculate Online Quote</a><a id="moldFinalInspectionButton" href="/contact">Book Immediate Inspection</a></div></div></section>
      </main>
    </ServicePageShell>
  );
}
