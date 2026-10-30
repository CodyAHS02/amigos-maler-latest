/* eslint-disable react/no-unescaped-entities */
function ProcessIcon({ name }) {
  const paths = {
    inquiry: <><rect x="6" y="4" width="12" height="16" rx="2" /><path d="M9 4.5h6M9 9h6M9 13h4" /></>,
    network: <><circle cx="12" cy="5" r="2.5" /><circle cx="5" cy="17" r="2.5" /><circle cx="19" cy="17" r="2.5" /><path d="m10.5 7-4 7.5M13.5 7l4 7.5M7.5 17h9" /></>,
    collaboration: <><path d="M4 8h4l4 4 4-4h4" /><path d="M4 8v5l4 4 4-4 4 4 4-4V8" /><path d="M8 8V5h8v3" /></>,
    value: <><path d="M4 11.5 12 5l8 6.5V20H4z" /><path d="M9 20v-5h6v5M12 2v3M4 5l2 2M20 5l-2 2" /></>
  };

  return <svg className="flow-step-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function BenefitIcon({ name }) {
  const paths = {
    opportunities: <><path d="M4 19V10M10 19V6M16 19V3M22 19H2" /><path d="m4 8 5-3 5 1 6-4" /></>,
    projects: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="8" r="3" /><path d="M3 20v-2a5 5 0 0 1 10 0v2M13 20v-2a5 5 0 0 1 8 0v2" /></>,
    recommendations: <><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" /></>,
    visibility: <><rect x="4" y="4" width="16" height="12" rx="1.5" /><path d="M8 20h8M12 16v4" /></>
  };

  return <svg className="benefit-icon-svg" viewBox="0 0 24 24" fill="none" stroke={`url(#benefit-${name})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><defs><linearGradient id={`benefit-${name}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f6be10" /><stop offset=".48" stopColor="#f39125" /><stop offset="1" stopColor="#e62453" /></linearGradient></defs>{paths[name]}</svg>;
}

export default function PartnersContent() {
  return (
    <>

<main className="partners-page">
  <section className="partners-hero partner-service-hero" data-hero>
    <div className="partner-service-hero-bg">
      <img src="/partners/partner-network-hero.png" alt="Premium modern interior prepared for a coordinated property project" />
    </div>
    <div className="partner-service-hero-overlay"></div>
    <div className="partner-service-hero-lines" aria-hidden="true"><span></span><span></span><span></span></div>
    <div className="partners-shell partner-service-hero-shell">
      <div className="partners-hero-copy partner-service-hero-copy">
        <p className="partners-kicker">PARTNER NETWORK</p>
        <h1>Stronger Together.<br /><span>Connecting Values.</span></h1>
        <p>Whether crafts, real estate, planning or institutions, we bring the right specialists together to create lasting value.</p>
        <div className="partners-hero-actions">
          <a href="/contact" className="partners-btn partners-btn-primary">Become a Partner</a>
          <a href="/contact" className="partners-btn partners-btn-outline">Discuss Collaboration</a>
        </div>
      </div>
    </div>
    <div className="partner-service-hero-bg-text" aria-hidden="true">NETWORK</div>
    <div className="partner-service-hero-scroll" aria-hidden="true"><span></span><p>SCROLL</p></div>
  </section>

  <section className="partner-marquee" aria-label="Partner disciplines">
    <div>
      <span>Specialist Companies</span>
      <span>Material Suppliers</span>
      <span>Real Estate Partners</span>
      <span>Property Managers</span>
      <span>Design Consultants</span>
      <span>Facility Care</span>
    </div>
  </section>

  <section className="partner-imagery">
    <div className="partners-shell imagery-grid">
      <figure className="imagery-card imagery-card-large partners-reveal">
        <img src="https://www.siltek.ch/m1.png" alt="Professional painters working together inside a prepared room" />
        <figcaption>
          <span>Trade Execution</span>
          <strong>Clean teams for careful surface work.</strong>
        </figcaption>
      </figure>
      <figure className="imagery-card partners-reveal">
        <img src="/assets/services/pexels-kindelmedia-7579138.jpg" alt="Renovation planning consultation with architectural plans" />
        <figcaption>
          <span>Planning</span>
          <strong>Partners aligned before work begins.</strong>
        </figcaption>
      </figure>
      <figure className="imagery-card partners-reveal">
        <img src="https://ldmdirect.co.uk/cdn/shop/files/ldmdirect-homepage-image.webp?v=1772034053&width=1600" alt="Professional painting materials and tools" />
        <figcaption>
          <span>Materials</span>
          <strong>Suppliers who understand durable finishes.</strong>
        </figcaption>
      </figure>
    </div>
  </section>

  <section className="partner-flow">
    <div className="partners-shell">
      <div className="partners-section-heading centered">
        <p className="partners-kicker">OUR NETWORK PROCESS</p>
        <h2>A Network That Creates Opportunities.</h2>
      </div>
      <div className="flow-track">
        <article className="flow-step partners-reveal">
          <span>01</span>
          <span className="flow-step-icon"><ProcessIcon name="inquiry" /></span>
          <h3>Inquiry</h3>
          <p>A partner wants to collaborate.</p>
        </article>
        <article className="flow-step partners-reveal">
          <span>02</span>
          <span className="flow-step-icon"><ProcessIcon name="network" /></span>
          <h3>Amigos Network</h3>
          <p>We find the right partner match.</p>
        </article>
        <article className="flow-step partners-reveal">
          <span>03</span>
          <span className="flow-step-icon"><ProcessIcon name="collaboration" /></span>
          <h3>Collaboration</h3>
          <p>We deliver projects together.</p>
        </article>
        <article className="flow-step partners-reveal">
          <span>04</span>
          <span className="flow-step-icon"><ProcessIcon name="value" /></span>
          <h3>Sustainable Value</h3>
          <p>Strong partnerships create new opportunities.</p>
        </article>
      </div>
    </div>
  </section>

  <section className="partner-benefits" aria-labelledby="partner-benefits-title">
    <div className="partners-shell partner-benefits-grid">
      <div className="partner-benefits-heading">
        <p className="partners-kicker">WHY BECOME A PARTNER?</p>
        <h2 id="partner-benefits-title">More Possibilities.<br />More Success.</h2>
      </div>
      <div className="partner-benefit-list">
        <article className="partner-benefit">
          <BenefitIcon name="opportunities" />
          <h3>New Business Opportunities</h3>
          <p>Access new customers and exciting projects.</p>
        </article>
        <article className="partner-benefit">
          <BenefitIcon name="projects" />
          <h3>Joint Projects</h3>
          <p>Combine expertise for stronger solutions.</p>
        </article>
        <article className="partner-benefit">
          <BenefitIcon name="recommendations" />
          <h3>Mutual Recommendations</h3>
          <p>Recommend trusted partners with confidence.</p>
        </article>
        <article className="partner-benefit">
          <BenefitIcon name="visibility" />
          <h3>Digital Visibility</h3>
          <p>Be presented across our partner network.</p>
        </article>
      </div>
    </div>
  </section>

  <section className="partner-types">
    <div className="partners-shell">
      <div className="partners-section-heading centered partner-types-heading">
        <p className="partners-kicker">OUR PARTNER AREAS</p>
        <h2>Strong Partners for Strong Solutions.</h2>
      </div>
      <div className="partner-card-grid">
        <article className="partner-card partners-reveal">
          <img className="partner-card-image" src="/assets/projects/project-08.jpg" alt="Trade partner working on a property" />
          <span className="partner-card-icon" aria-hidden="true">⚒</span>
          <h3>Trade Partners</h3>
          <p>Electrical, sanitary, heating, flooring, carpentry and more.</p>
        </article>
        <article className="partner-card partners-reveal">
          <img className="partner-card-image" src="/assets/projects/project-09.jpg" alt="Residential property for a real estate partner" />
          <span className="partner-card-icon" aria-hidden="true">▦</span>
          <h3>Real Estate</h3>
          <p>Property owners, managers, investors and estate agencies.</p>
        </article>
        <article className="partner-card partners-reveal">
          <img className="partner-card-image" src="/assets/projects/project-10.jpg" alt="Planning team reviewing architectural plans" />
          <span className="partner-card-icon" aria-hidden="true">✦</span>
          <h3>Planning &amp; Specialists</h3>
          <p>Architecture, construction, energy, insurance and specialist partners.</p>
        </article>
        <article className="partner-card partners-reveal">
          <img className="partner-card-image" src="/assets/projects/project-11.jpg" alt="Business partners discussing a property project" />
          <span className="partner-card-icon" aria-hidden="true">◎</span>
          <h3>Companies &amp; Institutions</h3>
          <p>Firms, organizations and service providers built for lasting collaboration.</p>
        </article>
      </div>
    </div>
  </section>

  <section className="partner-listing">
    <div className="partners-shell partner-listing-grid">
      <div className="partner-listing-image" role="img" aria-label="Modern property beside a lake"></div>
      <div className="partner-listing-copy">
        <p className="partners-kicker">LIST YOUR PROPERTY</p>
        <h2>Your Property.<br />Our Network.</h2>
        <p>Reach the right people with a clear, focused property listing.</p>
      </div>
      <form className="partner-listing-form" action="/api/consultations" method="post" encType="multipart/form-data">
        <h3>Listing Request</h3>
        <p className="partner-form-intro">Tell us a little about the property and we will take it from there.</p>
        <div className="partner-form-grid">
          <label>Name<input name="name" required placeholder="Your name" /></label>
          <label>Email<input name="email" type="email" required placeholder="you@example.com" /></label>
          <label>Object Type<select name="projectType" defaultValue=""><option value="" disabled>Select type</option><option>House</option><option>Apartment</option><option>Commercial property</option></select></label>
          <label>Purpose<select name="purpose" defaultValue=""><option value="" disabled>Select purpose</option><option>Sell</option><option>Rent</option><option>Partner project</option></select></label>
          <label>Region<input name="region" placeholder="Region / town" /></label>
          <label className="partner-form-wide">Description<textarea name="message" required placeholder="Short property description" /></label>
          <label className="partner-form-upload">Upload<input name="upload" type="file" accept="image/*,.pdf" /></label>
        </div>
        <label className="partner-check"><input type="checkbox" name="updates" /> I would like to hear about new projects.</label>
        <label className="partner-check"><input type="checkbox" name="longTerm" /> I am interested in a long-term partnership.</label>
        <button className="partners-btn partners-btn-primary" type="submit">Send Request</button>
      </form>
    </div>
  </section>

</main>

    </>
  );
}
