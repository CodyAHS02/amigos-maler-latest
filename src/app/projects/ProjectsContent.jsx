"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ProjectsContent.module.css";

const properties = [
  { type: "sale", tag: "For Sale", title: "Modern villa with garden", location: "Olten, Switzerland", price: "CHF 1'280'000", details: "5.5 rooms · 168 m²", image: "/assets/external/projects/photo-1600607688969-a5bfcd646154-w1800-q90.jpg" },
  { type: "rent", tag: "For Rent", title: "Light-filled city apartment", location: "Aarau, Switzerland", price: "CHF 2'450 / month", details: "4.5 rooms · 112 m²", image: "/assets/external/projects/photo-1600607687920-4e2a09cf159d-w1800-q90.jpg" },
  { type: "sale", tag: "For Sale", title: "Architect-designed family home", location: "Solothurn, Switzerland", price: "CHF 1'095'000", details: "6.5 rooms · 194 m²", image: "/assets/external/projects/photo-1600210491892-03d54c0aaf87-w1800-q90.jpg" },
  { type: "rent", tag: "For Rent", title: "Penthouse with a view", location: "Zurich, Switzerland", price: "CHF 3'800 / month", details: "4.5 rooms · 126 m²", image: "/assets/external/projects/photo-1618220179428-22790b461013-w1800-q90.jpg" }
];

const internationalProperties = [
  ["Punta Cana", "Private villas surrounded by palm trees, beaches and Caribbean light.", "/assets/external/property-value-preservation/photo-1564013799919-ab600027ffc6-w1400-q85.jpg"],
  ["Cap Cana", "Elegant residences in a gated community close to the marina and ocean.", "/assets/external/property-value-preservation/photo-1600585154340-be6161a56a0c-w1400-q85.jpg"],
  ["Bavaro", "Relaxed apartments and holiday homes made for living and investing.", "/assets/external/property-value-preservation/photo-1620626011761-996317b8d101-w1200-q85.jpg"]
];

const customerReviews = [
  ["Natasha Fischer", "Switzerland", "We are absolutely thrilled with Patricio's work. Both interior and exterior walls were painted perfectly. The work was clean, precise, and completed with great attention to detail."],
  ["Bettina Marinelli", "Switzerland", "Our ground floor, entrance, living room, kitchen, stairwell and doors were beautifully painted. Expert advice, careful execution, and excellent quality."],
  ["Melanie Bryan", "Aarau", "Amigos Maler provided expert advice and professional service. They were dedicated, helpful, and delivered outstanding results."],
  ["Sabiduri 1010", "Switzerland", "I needed help painting my office wall and couldn't have wished for a better person. Professional, reliable, and excellent work."],
  ["Rineta Slishani", "Switzerland", "Highly recommended! The work was completed reliably, on schedule, and with excellent quality."],
  ["Corinne Sittmann", "Switzerland", "Very friendly and competent advice. The work was completed quickly and to a high standard. I would definitely hire Amigos again."],
  ["Erich Leimgruber", "Switzerland", "The workers are very competent, clean, and precise. The price-performance ratio is excellent."],
  ["Benjamin Allemann", "Switzerland", "You guys are great, friendly, and very helpful. We would book you again anytime."],
  ["Matteo Müller", "Switzerland", "Excellent professionalism and dedication. Amigos provided great advice on colors and materials from the beginning."]
];

function Arrow() { return <span className={styles.arrow} aria-hidden="true">→</span>; }

function PuntaIcon({ type }) {
  const paths = {
    property: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></>,
    rent: <><path d="M4 19h16" /><path d="M6 17v-5" /><path d="M10 17V8" /><path d="M14 17v-3" /><path d="m5 8 5-4 4 3 5-4" /></>,
    invest: <><path d="M12 3v18" /><path d="M17 7.5c-.8-1.3-2.4-2.2-4.4-2.2-2.4 0-4.1 1.2-4.1 3 0 4.8 8.5 1.8 8.5 6.1 0 1.8-1.7 3-4.3 3-2 0-3.7-.8-4.6-2.2" /></>
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[type]}</svg>;
}

function FounderSection() {
  return (
    <section className={styles.founder}>
      <div className={styles.founderImageWrap}>
        <img src="/Projects-Page-Woman.jpeg" alt="Patricia, Founder von Amigos Immo" />
        <div className={styles.founderBadge}><span>★</span><div><strong>Patricia</strong><small>Founder · Amigos Immo</small></div></div>
      </div>
      <div className={styles.founderCopy}>
        <p className={styles.kicker}>A PERSONAL STANDARD FOR EVERY PROPERTY</p>
        <h2>Meet Patricia.</h2>
        <p>Patricia founded Amigos Immo around a simple belief: property care should feel personal, transparent and thoughtfully planned—not reactive.</p>
        <p>She brings clients, craftspeople and technology together to make complex renovation and maintenance decisions easier to understand. Every recommendation starts with listening, every estimate is explained clearly, and every project is considered in the context of the property&apos;s long-term value.</p>
        <blockquote>“A property is more than a project. It is a responsibility we share with every owner.”</blockquote>
        <a id="projects-founder-button" className={styles.founderButton} href="/contact"><span className={styles.founderArrow}>→</span>Plan your project with Patricia</a>
      </div>
    </section>
  );
}

function InternationalFeature() {
  return (
    <section className={styles.puntaCana} id="punta-cana">
      <div className={styles.puntaCanaBeach} aria-hidden="true" />
      <div className={styles.puntaCanaShade} aria-hidden="true" />
      <div className={styles.puntaCanaInner}>
        <div className={styles.puntaCanaCopy}>
          <p className={styles.puntaCanaEyebrow}>PROJECTS &amp; REAL ESTATE</p>
          <h2>Punta <span>Cana</span></h2>
          <p className={styles.puntaCanaSubheading}>INVEST. LIVE. ENJOY.</p>
          <p className={styles.puntaCanaDescription}>Your connection to the Dominican Republic – with trust and strong partnership.</p>
          <div className={styles.puntaCanaFeatures}>
            <article className={styles.puntaCanaFeature}><span className={styles.puntaCanaFeatureIcon}><PuntaIcon type="property" /></span><h3>BUY REAL ESTATE</h3><p>Villas, apartments and land.</p></article>
            <article className={styles.puntaCanaFeature}><span className={styles.puntaCanaFeatureIcon}><PuntaIcon type="rent" /></span><h3>RENT</h3><p>Attractive returns in a growing region.</p></article>
            <article className={styles.puntaCanaFeature}><span className={styles.puntaCanaFeatureIcon}><PuntaIcon type="invest" /></span><h3>INVEST</h3><p>Secure opportunities in the Caribbean&apos;s most popular destination.</p></article>
          </div>
          <a id="punta-cana-learn-more" className={styles.puntaCanaButton} href="#international">LEARN MORE</a>
        </div>
        <div className={styles.puntaCanaVisual}>
          <img className={styles.puntaCanaPeople} src="/assets/projects/punta-cana-original.jpeg" alt="Two representatives standing with Dominican Republic flags" />
          <aside className={styles.puntaCanaPersonCard}>
            <span className={styles.puntaCanaCrest} aria-hidden="true">✦</span>
            <div><strong>José Luis Díaz</strong><span>Consul General de la República Dominicana en Zürich, Suiza</span></div>
            <img className={styles.puntaCanaCardLogo} src="/assets/projects/dominican-republic-crest.png" alt="Dominican Republic crest" />
          </aside>
          <div className={styles.puntaCanaBadge}>In close cooperation with the General Consulate of the Dominican Republic in Zurich</div>
        </div>
      </div>
    </section>
  );
}

function ConsultationCta() {
  return (
    <section className={styles.consultationCta} id="beratung">
      <div className={styles.consultationCtaOverlay} />
      <div className={styles.consultationCtaContent}><p className={styles.kicker}>READY WHEN YOU ARE</p><h2>The future of your property, in one<br />conversation.</h2><p>Book a private consultation with our senior team. No pressure, no callbacks — just clear project guidance.</p><a id="projects-consultation-button" className={styles.primaryButton} href="/contact"><span className={styles.founderArrow}>→</span>Book Consultation</a></div>
    </section>
  );
}

function Testimonials() {
  const viewportRef = useRef(null);
  const [carouselState, setCarouselState] = useState({ atStart: true, atEnd: false });

  useEffect(() => {
    const carousel = viewportRef.current;
    if (!carousel) return undefined;

    const updateCarouselState = () => {
      const maxScroll = Math.max(0, carousel.scrollWidth - carousel.clientWidth);
      setCarouselState({ atStart: carousel.scrollLeft <= 4, atEnd: carousel.scrollLeft >= maxScroll - 4 });
    };

    updateCarouselState();
    carousel.addEventListener("scroll", updateCarouselState, { passive: true });
    window.addEventListener("resize", updateCarouselState);
    return () => {
      carousel.removeEventListener("scroll", updateCarouselState);
      window.removeEventListener("resize", updateCarouselState);
    };
  }, []);

  function moveCarousel(direction) {
    const carousel = viewportRef.current;
    if (!carousel) return;
    const nextPosition = Math.max(0, Math.min(carousel.scrollWidth - carousel.clientWidth, carousel.scrollLeft + direction * carousel.clientWidth));
    carousel.scrollTo({ left: nextPosition, behavior: "smooth" });
  }

  return (
    <section className={styles.testimonials}>
      <div className={styles.sectionHeader}><div><p className={styles.kicker}>CUSTOMER REVIEWS</p><h2>This is what our customers say.</h2></div><p>4.9 / 5 on Google, verified by our customers.</p></div>
      <div className={styles.reviewViewport}>
        <div className={styles.testimonialGrid} ref={viewportRef}>{customerReviews.map(([name, location, text]) => <blockquote key={name}><span>“</span><p>{text}</p><cite>{name} · {location}</cite><small>★★★★★</small></blockquote>)}</div>
      </div>
      <div className={styles.reviewControls} aria-label="Customer review controls"><button type="button" onClick={() => moveCarousel(-1)} aria-label="Previous review" disabled={carouselState.atStart}>←</button><button type="button" onClick={() => moveCarousel(1)} aria-label="Next review" disabled={carouselState.atEnd}>→</button></div>
    </section>
  );
}

function ProjectEnquiry() {
  const [status, setStatus] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("Sending your enquiry...");
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("projectType", `${formData.get("projectType")} · ${formData.get("size")} · ${formData.get("budget")}`);
    try {
      const response = await fetch("/api/consultations", { method: "POST", body: formData });
      if (!response.ok) throw new Error("Unable to send your enquiry right now.");
      setSubmitted(true);
      setStatus("");
      form.reset();
    } catch (error) {
      setStatus(error.message);
    }
  }

  return (
    <section className={styles.enquiry} id="enquiry">
      <div className={styles.enquiryIntro}><p className={styles.kicker}>PROJECT ENQUIRY</p><span className={styles.enquiryUnderline} /><h2>Tell us what you<br />want to improve.</h2><p>Choose the property, room scope and budget. Patricia’s team will review it and come back with a clear next step.</p></div>
      <form className={styles.enquiryForm} onSubmit={handleSubmit}>
        <div className={styles.enquiryGrid}>
          <label>What do I want?<select name="projectType" defaultValue="Apartment"><option>Apartment</option><option>House</option><option>Commercial property</option></select></label>
          <label>Which size fits best?<select name="size" defaultValue="1,5 bedrooms"><option>1,5 bedrooms</option><option>2-3 bedrooms</option><option>4+ bedrooms</option></select></label>
          <label>Budget<select name="budget" defaultValue=""><option value="" disabled>Select budget</option><option>Under CHF 5,000</option><option>CHF 5,000 - 20,000</option><option>Over CHF 20,000</option></select></label>
          <label>Timeline<select name="timeline" defaultValue=""><option value="" disabled>Select timeline</option><option>As soon as possible</option><option>Within 3 months</option><option>Just exploring</option></select></label>
          <label>Name<input name="name" required placeholder="Your name" /></label>
          <label>Email<input name="email" required type="email" placeholder="you@example.com" /></label>
          <label>Phone<input name="phone" placeholder="+41 ..." /></label>
        </div>
        <label className={styles.enquiryMessage}>Tell us what you actually want<textarea name="message" required placeholder="Example: repaint two bedrooms, repair cracks, refresh the facade, prepare apartment handover..." /></label>
        <button id="projects-enquiry-button" className={styles.enquiryButton} type="submit"><span className={styles.enquiryButtonIcon} aria-hidden="true">→</span>{submitted ? "Enquiry sent" : "Send project enquiry"}</button>
        {status && <p className={styles.enquiryStatus} role="status">{status}</p>}
      </form>
    </section>
  );
}

function PropertyListings() {
  const [filter, setFilter] = useState("all");
  const visibleProperties = filter === "all" ? properties : properties.filter((property) => property.type === filter);

  return (
    <section className={styles.listings} id="objekte">
      <div className={styles.sectionHeader}><div><p className={styles.kicker}>SWITZERLAND</p><h2>Current Real Estate in Switzerland</h2><p className={styles.listingIntro}>Discover selected properties with character, potential and a clear path to the right decision.</p></div></div>
      <div className={styles.filters} aria-label="Property filters">{[["all", "All"], ["sale", "Buy"], ["rent", "Rent"]].map(([value, label]) => <button key={value} type="button" className={filter === value ? styles.filterActive : ""} onClick={() => setFilter(value)}>{label}</button>)}</div>
      <div className={styles.propertyGrid}>{visibleProperties.map((property) => <article className={styles.propertyCard} key={property.title}><div className={styles.propertyImage}><img src={property.image} alt={property.title} loading="lazy" /><span>{property.tag}</span></div><div className={styles.propertyBody}><p>{property.location}</p><h3>{property.title}</h3><span>{property.details}</span><strong>{property.price}</strong><a href="/contact">View property <Arrow /></a></div></article>)}</div>
    </section>
  );
}

function QualityStandard() {
  return (
    <section className={styles.qualityStandard}>
      <div><p className={styles.kicker}>OUR STANDARD</p><h2>Quality with sustainable added value.</h2></div>
      <p>We look beyond the transaction: every property deserves thoughtful presentation, reliable coordination and decisions that protect its long-term value.</p>
    </section>
  );
}

function SellRentCta() {
  return (
    <section className={styles.sellRentCta}>
      <div><p className={styles.kicker}>SELL OR RENT</p><h2>Would you like to sell or rent your property or apartment?</h2><p>List your properties directly on our platform and reach our interested buyers targeted.</p></div>
      <a className={styles.sellRentButton} href="/contact"><span aria-hidden="true">→</span>List Property Now</a>
    </section>
  );
}

export default function ProjectsContent() {
  useEffect(() => {
    const root = document.documentElement;
    const syncHeroVideos = () => {
      const isDark = root.dataset.theme === "amigos-dark" || root.dataset.theme === "dark";
      const lightVideo = document.getElementById("projectsHeroVideoLight");
      const darkVideo = document.getElementById("projectsHeroVideoDark");
      if (!lightVideo || !darkVideo) return;

      lightVideo.style.opacity = isDark ? "0" : "1";
      darkVideo.style.opacity = isDark ? "1" : "0";
      lightVideo.style.pointerEvents = isDark ? "none" : "auto";
      darkVideo.style.pointerEvents = isDark ? "auto" : "none";
    };

    syncHeroVideos();
    const observer = new MutationObserver(syncHeroVideos);
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.page}>
      <section className="hero projects-scrub-hero" data-projects-hero data-hero>
        <div className="hero-media">
          <video id="projectsHeroVideoLight" className="projects-hero-video projects-hero-video-light media-light" muted playsInline autoPlay loop preload="auto" poster="/projects%20page/projects-hero-day-poster.webp" aria-label="Amigos Maler projects hero, daytime interior">
            <source src="/projects%20page/projects-hero-day-revised.webm" type="video/webm" /><source src="/projects%20page/projects-hero-day.mp4" type="video/mp4" />
          </video>
          <video id="projectsHeroVideoDark" className="projects-hero-video projects-hero-video-dark media-dark" muted playsInline autoPlay loop preload="auto" poster="/projects%20page/projects-hero-night-poster.webp" aria-label="Amigos Maler projects hero, nighttime interior">
            <source src="/projects%20page/projects-hero-night-revised.webm" type="video/webm" /><source src="/projects%20page/projects-hero-night.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay" /><div className="hero-spotlight" />
        <div className={`hero-inner ${styles.heroContent}`}><div className="hero-eyebrow">Projects | Painting | Renovation</div><h1>Projects | Real Estate</h1><p className="hero-sub">Selected properties, international projects and personal guidance for owners, buyers and investors.</p><div className={styles.heroActions}><a id="projects-start-button" className={styles.heroButton} href="/contact"><span>→</span>Start a Project</a><a id="projects-explore-button" className={styles.heroButton} href="#objekte"><span>→</span>Explore Projects</a></div></div>
        <div className="scroll-indicator">⌄</div>
      </section>

      <PropertyListings />
      <QualityStandard />
      <SellRentCta />

      <FounderSection />
      <InternationalFeature />

      <section className={styles.international} id="international"><div className={styles.sectionHeader}><div><p className={styles.kicker}>INTERNATIONAL</p><h2>Investieren. Leben.<br /><span>Geniessen.</span></h2></div><p>Die Dominikanische Republik verbindet Lebensqualität, Wachstum und besondere Immobilien. Wir öffnen Ihnen den Zugang zu ausgewählten Projekten vor Ort.</p></div><div className={styles.internationalGrid}>{internationalProperties.map(([title, text, image]) => <article className={styles.internationalCard} key={title}><img src={image} alt={`${title} Immobilien`} loading="lazy" /><div><p>DOMINIKANISCHE REPUBLIK</p><h3>{title}</h3><span>{text}</span><a href="/contact">Mehr entdecken <Arrow /></a></div></article>)}</div></section>

      <Testimonials />

      <ProjectEnquiry />

      <ConsultationCta />

    </main>
  );
}
