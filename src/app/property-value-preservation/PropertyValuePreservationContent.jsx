"use client";

import { useState } from "react";
import styles from "./PropertyValuePreservation.module.css";

function Arrow() {
  return <span className={styles.arrowCircle} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" /></svg></span>;
}

function LineIcon({ type }) {
  const paths = {
    inspect: <><circle cx="11" cy="11" r="6.5" /><path d="m16 16 5 5" /><path d="M8 11h6M11 8v6" /></>,
    repair: <><path d="m14 5 5 5" /><path d="m13 6-7 7 5 5 7-7" /><path d="m5 18-3 3M17 2l5 5" /></>,
    care: <><path d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.45A4 4 0 0 1 19 11c0 5.65-7 10-7 10Z" /><path d="M9 12h6M12 9v6" /></>,
    value: <><path d="M4 19V5M4 19h16" /><path d="m7 15 4-4 3 2 5-7" /><path d="M15 6h4v4" /></>
  };

  return <svg className={styles.icon} viewBox="0 0 24 24" fill="none" aria-hidden="true">{paths[type]}</svg>;
}

function ActionLink({ children, variant = "gradient" }) {
  return <a className={`${styles.action} ${styles[variant]}`} href="#contact"><Arrow /><span>{children}</span></a>;
}

function HeroSection() {
  return (
    <section className={`${styles.hero} ${styles.section}`} data-hero>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>IMMOBILIENPFLEGE</p>
        <h1>Werterhalt <span>für Ihr Zuhause.</span></h1>
        <p className={styles.lead}>Schön. Gepflegt. Langfristig wertvoll. Regelmässige Kontrollen, professionelle Ausbesserungen und individuelle Betreuung für Hausbesitzer und Eigentümer.</p>
        <ActionLink>Jetzt Paket entdecken</ActionLink>
      </div>
      <img className={styles.imagePlaceholder} src="/assets/property-value-home.png" alt="Gepflegtes, hochwertiges Wohnhaus" />
    </section>
  );
}

const approachItems = [
  ["inspect", "Kontrollieren", "Zustände früh erkennen."],
  ["repair", "Ausbessern", "Mängel gezielt beheben."],
  ["care", "Pflegen", "Oberflächen dauerhaft schützen."],
  ["value", "Werterhalten", "Werte langfristig sichern."]
];

function ApproachSection() {
  return (
    <section className={`${styles.approach} ${styles.section}`}>
      <div className={styles.sectionIntro}>
        <p className={styles.eyebrow}>UNSER ANSATZ</p>
        <h2>Kleine Massnahmen. Grosser Werterhalt.</h2>
      </div>
      <div className={styles.approachGrid}>
        {approachItems.map(([icon, title, text]) => (
          <article className={styles.approachItem} key={title}>
            <LineIcon type={icon} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const propertyAreas = [
  ["Facade", "We look at visible weathering, cracks, coatings and surface condition to identify areas that may require maintenance or renovation.", "facade"],
  ["Windows & Woodwork", "Painted woodwork and exposed elements are checked for wear, moisture exposure and deteriorating protective coatings.", "windows"],
  ["Interior Spaces", "Interior rooms are considered in relation to use, condition, light, surfaces and future renovation requirements.", "interior"],
  ["Walls & Ceilings", "Walls and ceilings are reviewed for cracks, surface damage, unevenness and preparation requirements.", "walls"],
  ["Surfaces", "The appropriate preparation, material and coating system depends on the specific surface and its intended use.", "surfaces"]
];

function PropertyCheckSection() {
  const [activeArea, setActiveArea] = useState(0);
  const [title, text, key] = propertyAreas[activeArea];

  return (
    <section className={`${styles.propertyCheck} ${styles.section}`}>
      <div className={styles.checkHeader}>
        <div><p className={styles.checkEyebrow}>PROPERTY CHECK</p><h2>Look closer. Maintain smarter.</h2></div>
        <p>Different parts of a property require different forms of attention. Explore the areas we can assess and maintain.</p>
      </div>
      <div className={styles.checkStage}>
        <div className={styles.checkImage}>
          <img src="/assets/external/property-value-preservation/photo-1600585154340-be6161a56a0c-w1400-q85.jpg" alt="Contemporary property for inspection and maintenance" />
          {propertyAreas.map(([area, , areaKey], index) => <button key={area} type="button" className={`${styles.hotspot} ${styles[`hotspot${areaKey}`]} ${index === activeArea ? styles.hotspotActive : ""}`} onClick={() => setActiveArea(index)}><span />{area}</button>)}
        </div>
        <div className={styles.mobileAreas} aria-label="Property areas">
          {propertyAreas.map(([area], index) => <button key={area} type="button" className={index === activeArea ? styles.mobileAreaActive : ""} onClick={() => setActiveArea(index)}><span />{area}</button>)}
        </div>
        <aside className={styles.checkInfo}>
          <div className={styles.checkTop}><span>SELECT AN AREA</span><span>0{activeArea + 1} / 05</span></div>
          <div className={styles.checkCopy}><small>0{activeArea + 1} / 05</small><h3>{title}</h3><p>{text}</p></div>
        </aside>
      </div>
    </section>
  );
}

const audienceItems = [
  ["PRIVATE OWNERS", "Owners", "Long-term maintenance, renovation and preservation of your property.", "/assets/external/property-value-preservation/photo-1600585154340-be6161a56a0c-w1400-q85.jpg"],
  ["PROPERTY MANAGEMENT", "Property Managers", "Reliable maintenance, tenant changes, renovations and coordinated projects.", "/assets/external/property-value-preservation/photo-1486406146926-c627a92ad1ab-w1400-q85.jpg"],
  ["PROPERTY INVESTMENT", "Investors", "Maintain the condition and presentation of investment properties over time.", "/assets/external/property-value-preservation/photo-1560518883-ce09059eeffa-w1400-q85.jpg"]
];

function AudienceSection() {
  return (
    <section className={`${styles.audience} ${styles.section}`}>
      <div className={styles.audienceHeader}>
        <p className={styles.eyebrow}>FOR WHOM</p>
        <h2>Property care for different<br />perspectives.</h2>
      </div>
      <div className={styles.audienceGrid}>
        {audienceItems.map(([label, title, text, image], index) => (
          <article className={styles.audienceCard} key={title}>
            <img src={image} alt={`${title} property care`} />
            <span className={styles.audienceNumber}>0{index + 1}</span>
            <div className={styles.audienceOverlay} />
            <div className={styles.audienceContent}>
              <span>{label}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const homePlans = [
  { title: "BASIC HOME CARE", price: "CHF 89 / Monat", features: ["Jährliche Objektkontrolle", "Kleine Ausbesserungen", "Priorisierte Empfehlungen", "Persönliche Dokumentation"] },
  { title: "PLUS HOME CARE", badge: "BELIEBT", price: "CHF 199 / Monat", featured: true, features: ["Halbjährliche Objektkontrolle", "Kleine Ausbesserungen inklusive", "Saisonale Pflegearbeiten", "Priorisierte Empfehlungen", "Persönliche Betreuung"] },
  { title: "PREMIUM HOME CARE", price: "CHF 399 / Monat", features: ["Monatliche Objektkontrolle", "Ausbesserungen und Pflege", "Früherkennung von Schäden", "Individueller Unterhaltsplan", "Direkte Ansprechpartner"] }
];

function PlanCard({ plan }) {
  return (
    <article className={`${styles.planCard} ${plan.featured ? styles.featured : ""}`}>
      {plan.badge && <span className={styles.badge}>{plan.badge}</span>}
      <p className={styles.cardKicker}>{plan.title}</p>
      <ul>{plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
      <strong className={styles.price}>{plan.price}</strong>
      <ActionLink variant={plan.featured ? "gradient" : "outline"}>{plan.featured ? "Paket auswählen" : "Mehr erfahren"}</ActionLink>
    </article>
  );
}

function HomeCarePricing() {
  return (
    <section className={`${styles.pricingSection} ${styles.section}`}>
      <div className={styles.pricingHeader}>
        <div><p className={styles.eyebrow}>HOME CARE</p><h2><span>Für Ihr Zuhause.</span></h2></div>
        <p>Unsere Home Care Pakete bieten Ihnen die richtige Lösung – abgestimmt auf Ihre Immobilie und Ihre Bedürfnisse. Drei Pakete. Ein Ziel: Langfristiger Werterhalt.</p>
      </div>
      <div className={styles.planGrid}>{homePlans.map((plan) => <PlanCard key={plan.title} plan={plan} />)}</div>
    </section>
  );
}

const businessPlans = [
  { title: "BUSINESS FLEX", subtitle: "Einzelaufträge", price: "ab CHF 120 / Std.", note: "zzgl. Material und Anfahrt", features: ["Flexible Einzelaufträge", "Klare Aufwandsschätzung", "Professionelle Ausführung", "Persönliche Koordination"] },
  { title: "BUSINESS PARTNER", subtitle: "Halbjährliche Betreuung", price: "ab CHF 199 / Monat", note: "oder CHF 2388 / Jahr", featured: true, features: ["Halbjährliche Kontrollen", "Planbare Unterhaltsarbeiten", "Priorisierte Terminplanung", "Dokumentierte Empfehlungen", "Direkter Ansprechpartner"] }
];

function BusinessCarePricing() {
  return (
    <section className={`${styles.business} ${styles.section}`}>
      <div className={styles.businessHeader}>
        <p className={styles.eyebrow}>BUSINESS CARE</p>
        <h2>Professionelle Unterhaltlösungen <span>für Verwaltungen.</span></h2>
        <p>Planbar. Effizient. Langfristig wirtschaftlich.</p>
      </div>
      <div className={styles.businessGrid}>
        {businessPlans.map((plan) => (
          <article className={`${styles.businessCard} ${plan.featured ? styles.businessFeatured : ""}`} key={plan.title}>
            <p className={styles.cardKicker}>{plan.title}</p>
            <p className={styles.cardSubtitle}>{plan.subtitle}</p>
            <strong className={styles.price}>{plan.price}</strong>
            <p className={styles.cardNote}>{plan.note}</p>
            <ul>{plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            <ActionLink variant={plan.featured ? "gradient" : "outline"}>{plan.featured ? "Partner werden" : "Auftrag anfragen"}</ActionLink>
          </article>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className={`${styles.finalCta} ${styles.section}`} id="contact">
      <div className={styles.finalCopy}>
        <p className={styles.finalKicker}>AMIGOS MALER GMBH · OLTEN · SWITZERLAND</p>
        <h2>Your property deserves a<br />solution that lasts.</h2>
        <p>Whether it is maintenance, renovation, facade work or long-term property value preservation — we provide personal advice and develop the right approach for your property.</p>
        <div className={styles.finalActions}>
          <ActionLink>Discuss Property Value</ActionLink>
          <ActionLink>Request a Free Consultation</ActionLink>
        </div>
        <div className={styles.finalMeta}><span>AMIGOS MALER GMBH</span><span>OLTEN · SWITZERLAND</span><span>PROPERTY VALUE PRESERVATION</span></div>
      </div>
    </section>
  );
}

export default function PropertyValuePreservationContent() {
  return (
    <main className={`${styles.page} property-page`}>
      <HeroSection />
      <ApproachSection />
      <PropertyCheckSection />
      <AudienceSection />
      <HomeCarePricing />
      <BusinessCarePricing />
      <FinalCTA />
    </main>
  );
}
