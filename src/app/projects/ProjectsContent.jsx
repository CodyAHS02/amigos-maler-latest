/* eslint-disable react/no-unescaped-entities */
function EnquirySelect({ id, name, label, options, placeholder }) {
  const initialValue = placeholder || options[0];

  return (
    <label className="enquiry-field enquiry-select-field">
      <span id={`${id}-label`}>{label}</span>
      <div className="enquiry-select" data-enquiry-select>
        <select className="enquiry-native-select" name={name} id={id} required tabIndex={-1} defaultValue={placeholder ? "" : initialValue}>
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => <option key={option}>{option}</option>)}
        </select>
        <button
          className="enquiry-select-trigger"
          type="button"
          aria-haspopup="listbox"
          aria-expanded="false"
          aria-labelledby={`${id}-label ${id}-value`}
        >
          <span className="enquiry-select-value" id={`${id}-value`}>{initialValue}</span>
          <span className="enquiry-select-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false"><path d="m6 9 6 6 6-6" /></svg>
          </span>
        </button>
        <div className="enquiry-listbox" role="listbox" tabIndex="-1" hidden></div>
      </div>
    </label>
  );
}

export default function ProjectsContent() {
  return (
    <>
<div id="projectsPage" className="amigos-wrapper">

  <div className="amb"></div>

  {/* SECTION 1 · HERO (scroll-scrubbed video) */}
  <section className="hero projects-scrub-hero" data-projects-hero data-hero>
    <div className="hero-media">
      <video id="projectsHeroVideoLight" className="projects-hero-video projects-hero-video-light media-light" muted playsInline preload="none" poster="/projects%20page/projects-hero-day-poster.webp" aria-label="Amigos Maler projects hero, daytime interior">
        <source src="/projects%20page/projects-hero-day-revised.webm" type="video/webm" />
        <source src="/projects%20page/projects-hero-day.mp4" type="video/mp4" />
      </video>
      <video id="projectsHeroVideoDark" className="projects-hero-video projects-hero-video-dark media-dark" muted playsInline preload="none" poster="/projects%20page/projects-hero-night-poster.webp" aria-label="Amigos Maler projects hero, nighttime interior">
        <source src="/projects%20page/projects-hero-night-revised.webm" type="video/webm" />
        <source src="/projects%20page/projects-hero-night.mp4" type="video/mp4" />
      </video>
    </div>
    <div className="hero-overlay"></div>
    <div className="hero-spotlight"></div>
    <div className="hero-inner">
      <div className="hero-eyebrow">Projects | Painting | Renovation</div>
      <h1>CRAFTED SPACES.<br /><span className="project-accentline">LASTING VALUE.</span></h1>
      <p className="hero-sub">Interior painting | Renovation | Property care</p>
      <div className="hero-ctas">
        <a className="btn btn-solid mag" href="#calc">Start a Project</a>
        <a className="btn mag" href="#project-showcase-lab">Explore Projects</a>
      </div>
    </div>
    <div className="scroll-indicator">⌄</div>
  </section>




  {/* FOUNDER · placed directly before the price engine */}
  <section id="founder" className="founder-section">
    <div className="container founder-shell reveal">
      <div className="projects-founder-visual-wrap founder-visual-wrap" id="projectsFounderCardWrap">
        <div className="projects-founder-ambient-glow founder-ambient-glow" aria-hidden="true"></div>
        <div className="projects-founder-card founder-card-3d" id="projectsFounderCard3d">
          <figure className="projects-founder-image founder-image">
            <img src="/Projects-Page-Woman.jpeg" alt="Patricia, founder of Amigos Immo" loading="lazy" />
            <div className="projects-founder-image-glare founder-image-glare" id="projectsFounderGlare" aria-hidden="true"></div>
          </figure>
          <div className="projects-founder-badge founder-badge-floating">
            <div className="badge-icon-wrap">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#FFB800" stroke="#FF7A1A" strokeWidth="1.2"/>
              </svg>
            </div>
            <div className="badge-text">
              <strong>Patricia</strong>
              <span>Founder · Amigos Immo</span>
            </div>
          </div>
        </div>
      </div>
      <div className="founder-story">
        <p className="founder-kicker">A personal standard for every property</p>
        <h2>Meet Melanie Bryan.</h2>
        <p className="founder-lede">Patricia founded Amigos Immo around a simple belief: property care should feel personal, transparent and thoughtfully planned—not reactive.</p>
        <p>She brings clients, craftspeople and technology together to make complex renovation and maintenance decisions easier to understand. Every recommendation starts with listening, every estimate is explained clearly, and every project is considered in the context of the property's long-term value.</p>
        <blockquote>“A property is more than a project. It is a responsibility we share with every owner.”</blockquote>
        <a className="founder-link" href="#calc">Plan your project with Patricia</a>
      </div>
    </div>
  </section>

  {/* SECTION 6 · PROJECT ENQUIRY */}
  <section id="calc">
    <div className="container">
      <div className="section-head reveal sec-alt">
        <div className="eyebrow">Project enquiry</div>
        <svg className="brush" viewBox="0 0 180 22">
          <path d="M2 12 C 40 22, 80 2, 120 14 S 170 6, 178 12" />
        </svg>
        <h2>Tell us what you want to improve.</h2>
        <p>Choose the property, room scope and budget. Patricia’s team will review it and come back with a clear next step.</p>
      </div>

      <form className="glass projects-enquiry-form reveal" id="projects-enquiry-form">
        <input type="hidden" name="projectType" value="Renovation" />
        <div className="enquiry-grid">
          <EnquirySelect
            id="enquiry-want"
            name="want"
            label="What do I want?"
            options={["Apartment", "House", "Office", "Commercial space", "Facade / exterior", "Other"]}
          />

          <EnquirySelect
            id="enquiry-scope"
            name="scope"
            label="Which size fits best?"
            options={["1,5 Bedroom", "2,5 Bedroom", "3 Bedroom", "3,5 Bedroom", "4,5 Bedroom", "5,5 Bedroom", "6,5 Bedroom", "8,5 Bedroom"]}
          />

          <EnquirySelect
            id="enquiry-budget"
            name="budget"
            label="Budget"
            placeholder="Select budget"
            options={["Under CHF 2'000", "CHF 2'000 – 5'000", "CHF 5'000 – 10'000", "CHF 10'000 – 25'000", "CHF 25'000+"]}
          />

          <EnquirySelect
            id="enquiry-timeline"
            name="timeline"
            label="Timeline"
            placeholder="Select timeline"
            options={["As soon as possible", "Within 1 month", "1–3 months", "Planning ahead"]}
          />

          <label className="enquiry-field">
            <span>Name</span>
            <input name="name" type="text" placeholder="Your name" required />
          </label>

          <label className="enquiry-field">
            <span>Email</span>
            <input name="email" type="email" placeholder="you@example.com" required />
          </label>

          <label className="enquiry-field">
            <span>Phone</span>
            <input name="phone" type="tel" placeholder="+41 ..." autoComplete="tel" />
          </label>

          <label className="enquiry-field enquiry-wide">
            <span>Tell us what you actually want</span>
            <textarea name="details" rows="5" placeholder="Example: repaint two bedrooms, repair cracks, refresh the facade, prepare apartment handover..." required></textarea>
          </label>
        </div>

        <div className="enquiry-actions">
          <button className="btn btn-solid mag" type="submit">Send project enquiry</button>
          <p id="projects-enquiry-status" aria-live="polite"></p>
        </div>
      </form>
    </div>
  </section>

  {/* SECTION 7 · PARTNER LOGOS */}
  <section id="partners-strip">
    <div className="container">
      <div className="partners-head reveal">
        <span>Trusted B2B partners</span>
        <p>Selected Swiss partners and portfolio teams working with Amigos standards.</p>
      </div>
      <div className="partner-marquee reveal" aria-label="B2B partner logos">
        <div className="partner-logo-track">
          <img src="/assets/partner-logos/helvetia-estates.svg" alt="Helvetia Estates" loading="lazy" decoding="async" />
          <img src="/assets/partner-logos/alpine-habitat.svg" alt="Alpine Habitat" loading="lazy" decoding="async" />
          <img src="/assets/partner-logos/nova-raum.svg" alt="Nova Raum" loading="lazy" decoding="async" />
          <img src="/assets/partner-logos/lakeview-partners.svg" alt="Lakeview Partners" loading="lazy" decoding="async" />
          <img src="/assets/partner-logos/urbanhold.svg" alt="Urbanhold" loading="lazy" decoding="async" />
          <img src="/assets/partner-logos/canton-works.svg" alt="Canton Works" loading="lazy" decoding="async" />
          <img src="/assets/partner-logos/helvetia-estates.svg" alt="" aria-hidden="true" loading="lazy" decoding="async" />
          <img src="/assets/partner-logos/alpine-habitat.svg" alt="" aria-hidden="true" loading="lazy" decoding="async" />
          <img src="/assets/partner-logos/nova-raum.svg" alt="" aria-hidden="true" loading="lazy" decoding="async" />
          <img src="/assets/partner-logos/lakeview-partners.svg" alt="" aria-hidden="true" loading="lazy" decoding="async" />
          <img src="/assets/partner-logos/urbanhold.svg" alt="" aria-hidden="true" loading="lazy" decoding="async" />
          <img src="/assets/partner-logos/canton-works.svg" alt="" aria-hidden="true" loading="lazy" decoding="async" />
        </div>
      </div>
    </div>
  </section>

  {/* SECTION 8 · REAL ESTATE HUB (separate add-on; existing sections untouched) */}
  <section id="real-estate-hub" className="real-estate-hub-section" aria-labelledby="real-estate-hub-title">
    <div className="container">
      <div className="real-estate-hub-head reveal">
        <div>
          <span className="real-estate-kicker">Real estate</span>
          <h2 id="real-estate-hub-title">Rent, buy, sell and investment access in one place.</h2>
        </div>
        <p>Browse available property pathways, open listing details, compare categories and send the right request directly to the Amigos team.</p>
      </div>

      <div className="real-estate-filter-bar reveal" aria-label="Real estate categories">
        <button type="button" className="is-active" data-re-filter="all">All</button>
        <button type="button" data-re-filter="rent">For rent</button>
        <button type="button" data-re-filter="sale">For sale</button>
        <button type="button" data-re-filter="purchase">We buy properties</button>
        <button type="button" data-re-filter="investment">Investments</button>
        <button type="button" data-re-filter="new">New construction</button>
      </div>

      <div className="real-estate-hub-grid">
        <div className="real-estate-carousel reveal" data-re-carousel>
          <div className="real-estate-card-grid" data-re-carousel-track aria-label="Property cards">
          <article className="real-estate-card" data-re-category="rent">
            <img src="/assets/external/projects/photo-1600607687920-4e2a09cf159d-w1500-q90.jpg" alt="Bright apartment interior in Olten" loading="lazy" decoding="async" />
            <div className="real-estate-card-body">
              <div className="real-estate-card-top">
                <span className="real-estate-status">For rent</span>
                <span>Olten</span>
              </div>
              <h3>Apartment – Olten</h3>
              <dl>
                <div><dt>Rooms</dt><dd>4.5</dd></div>
                <div><dt>Living area</dt><dd>110 m²</dd></div>
                <div><dt>Rent</dt><dd>CHF 1,200 / month</dd></div>
              </dl>
              <button type="button" className="real-estate-action" data-detail-target="olten-rent">View rental details</button>
            </div>
          </article>

          <article className="real-estate-card" data-re-category="sale">
            <img src="/assets/external/projects/photo-1600210491892-03d54c0aaf87-w1500-q90.jpg" alt="Premium condominium living room in Aarau" loading="lazy" decoding="async" />
            <div className="real-estate-card-body">
              <div className="real-estate-card-top">
                <span className="real-estate-status">For sale</span>
                <span>Aarau</span>
              </div>
              <h3>Condominium – Aarau</h3>
              <dl>
                <div><dt>Rooms</dt><dd>4.5</dd></div>
                <div><dt>Living area</dt><dd>120 m²</dd></div>
                <div><dt>Price</dt><dd>CHF 850,000</dd></div>
              </dl>
              <button type="button" className="real-estate-action" data-detail-target="aarau-sale">View purchase details</button>
            </div>
          </article>

          <article className="real-estate-card" data-re-category="investment">
            <img src="/assets/external/projects/photo-1600607688969-a5bfcd646154-w1800-q90.jpg" alt="Large residential investment property" loading="lazy" decoding="async" />
            <div className="real-estate-card-body">
              <div className="real-estate-card-top">
                <span className="real-estate-status">Investment</span>
                <span>Solothurn</span>
              </div>
              <h3>Investment Property</h3>
              <dl>
                <div><dt>Units</dt><dd>8</dd></div>
                <div><dt>Area</dt><dd>520 m²</dd></div>
                <div><dt>Offer</dt><dd>On request</dd></div>
              </dl>
              <button type="button" className="real-estate-action" data-detail-target="solothurn-invest">View investment details</button>
            </div>
          </article>

          <article className="real-estate-card" data-re-category="purchase" hidden>
            <img src="/assets/external/projects/photo-1600210492486-724fe5c67fb0-w1800-q90.jpg" alt="Property prepared for valuation and purchase" loading="lazy" decoding="async" />
            <div className="real-estate-card-body">
              <div className="real-estate-card-top">
                <span className="real-estate-status">We buy</span>
                <span>Basel region</span>
              </div>
              <h3>Property Purchase</h3>
              <dl>
                <div><dt>Type</dt><dd>House / flat</dd></div>
                <div><dt>Review</dt><dd>48h</dd></div>
                <div><dt>CTA</dt><dd>Request valuation</dd></div>
              </dl>
              <button type="button" className="real-estate-action" data-detail-target="basel-purchase">Start seller review</button>
            </div>
          </article>

          <article className="real-estate-card" data-re-category="new" hidden>
            <img src="/assets/external/projects/photo-1618220179428-22790b461013-w1800-q90.jpg" alt="Modern new construction interior concept" loading="lazy" decoding="async" />
            <div className="real-estate-card-body">
              <div className="real-estate-card-top">
                <span className="real-estate-status">New construction</span>
                <span>Zug</span>
              </div>
              <h3>New Residence – Zug</h3>
              <dl>
                <div><dt>Rooms</dt><dd>3.5–5.5</dd></div>
                <div><dt>Area</dt><dd>from 96 m²</dd></div>
                <div><dt>Status</dt><dd>Register interest</dd></div>
              </dl>
              <button type="button" className="real-estate-action" data-detail-target="zug-new">View project details</button>
            </div>
          </article>
          </div>
          <div className="real-estate-carousel-controls" aria-label="Property carousel controls">
            <button type="button" data-re-carousel-prev aria-label="Previous property">‹</button>
            <button type="button" data-re-carousel-next aria-label="Next property">›</button>
          </div>
        </div>
      </div>

      <div className="real-estate-detail-shell reveal" aria-live="polite">
        <article className="real-estate-detail-panel" data-detail-panel="olten-rent">
          <div className="real-estate-gallery">
            <img src="/assets/external/projects/photo-1600607687920-4e2a09cf159d-w1500-q90.jpg" alt="Olten apartment main room" loading="lazy" decoding="async" />
            <img src="/assets/external/appartment-renovation/photo-1600566753086-00f18fb6b3ea.jpg" alt="Olten apartment kitchen detail" loading="lazy" decoding="async" />
            <img src="/assets/external/appartment-renovation/photo-1616486338812-3dadae4b4ace.jpg" alt="Olten apartment bedroom" loading="lazy" decoding="async" />
          </div>
          <div className="real-estate-detail-copy">
            <span className="real-estate-status">For rent</span>
            <h3>Apartment – Olten</h3>
            <p>Rental listing with gallery, location, price, living area, room count, status and direct enquiry access.</p>
            <dl>
              <div><dt>Location</dt><dd>Olten</dd></div>
              <div><dt>Monthly rent</dt><dd>CHF 1,200</dd></div>
              <div><dt>Rooms</dt><dd>4.5</dd></div>
              <div><dt>Living area</dt><dd>110 m²</dd></div>
              <div><dt>Property type</dt><dd>Apartment</dd></div>
              <div><dt>Status</dt><dd>Available</dd></div>
            </dl>
            <ul>
              <li>Additional information block for handover date, floor, parking or documents.</li>
              <li>Property-specific images are tied to this listing.</li>
            </ul>
            <a className="real-estate-primary-link" href="#calc">Request rental consultation</a>
          </div>
        </article>

        <article className="real-estate-detail-panel" data-detail-panel="aarau-sale">
          <div className="real-estate-gallery">
            <img src="/assets/external/projects/photo-1600210491892-03d54c0aaf87-w1500-q90.jpg" alt="Aarau condominium living room" loading="lazy" decoding="async" />
            <img src="/assets/external/color-and-material/photo-1600210491892-03d54c0aaf87-w2200-q90.jpg" alt="Aarau condominium interior angle" loading="lazy" decoding="async" />
            <img src="/assets/external/property-value-preservation/photo-1564013799919-ab600027ffc6-w1400-q85.jpg" alt="Aarau condominium exterior" loading="lazy" decoding="async" />
          </div>
          <div className="real-estate-detail-copy">
            <span className="real-estate-status">For sale</span>
            <h3>Condominium – Aarau</h3>
            <p>Purchase-oriented property detail with clear sales data, gallery placement and direct request CTA.</p>
            <dl>
              <div><dt>Location</dt><dd>Aarau</dd></div>
              <div><dt>Purchase price</dt><dd>CHF 850,000</dd></div>
              <div><dt>Rooms</dt><dd>4.5</dd></div>
              <div><dt>Living area</dt><dd>120 m²</dd></div>
              <div><dt>Property type</dt><dd>Condominium</dd></div>
              <div><dt>Status</dt><dd>For sale</dd></div>
            </dl>
            <ul>
              <li>Space for documents, renovation notes and viewing availability.</li>
              <li>Designed to accept final client property data later.</li>
            </ul>
            <a className="real-estate-primary-link" href="#calc">Request purchase consultation</a>
          </div>
        </article>

        <article className="real-estate-detail-panel" data-detail-panel="solothurn-invest">
          <div className="real-estate-gallery">
            <img src="/assets/external/projects/photo-1600607688969-a5bfcd646154-w1800-q90.jpg" alt="Solothurn investment property exterior" loading="lazy" decoding="async" />
            <img src="/assets/external/property-value-preservation/photo-1486406146926-c627a92ad1ab-w1400-q85.jpg" alt="Investment property building detail" loading="lazy" decoding="async" />
            <img src="/assets/external/property-value-preservation/photo-1560518883-ce09059eeffa-w1400-q85.jpg" alt="Investment property street view" loading="lazy" decoding="async" />
          </div>
          <div className="real-estate-detail-copy">
            <span className="real-estate-status">Investment</span>
            <h3>Investment Property</h3>
            <p>Investor structure for yield documents, unit mix, condition notes and renovation scope.</p>
            <dl>
              <div><dt>Location</dt><dd>Solothurn</dd></div>
              <div><dt>Offer</dt><dd>On request</dd></div>
              <div><dt>Units</dt><dd>8</dd></div>
              <div><dt>Area</dt><dd>520 m²</dd></div>
              <div><dt>Property type</dt><dd>Multi-unit property</dd></div>
              <div><dt>Status</dt><dd>Investment</dd></div>
            </dl>
            <ul>
              <li>Additional information area for rent roll, renovation budget and documents.</li>
              <li>Supports different images for each investment project.</li>
            </ul>
            <a className="real-estate-primary-link" href="#calc">Request investment file</a>
          </div>
        </article>

        <article className="real-estate-detail-panel" data-detail-panel="basel-purchase">
          <div className="real-estate-gallery">
            <img src="/assets/external/projects/photo-1600210492486-724fe5c67fb0-w1800-q90.jpg" alt="Basel property purchase interior" loading="lazy" decoding="async" />
            <img src="/assets/external/property-value-preservation/photo-1600585154340-be6161a56a0c-w1400-q85.jpg" alt="Property valuation exterior" loading="lazy" decoding="async" />
            <img src="/assets/external/property-value-preservation/photo-1600566753190-17f0baa2a6c3-w1800-q85.jpg" alt="Property purchase room detail" loading="lazy" decoding="async" />
          </div>
          <div className="real-estate-detail-copy">
            <span className="real-estate-status">We buy properties</span>
            <h3>Property Purchase</h3>
            <p>Seller pathway for owners who want a discreet property review, valuation and purchase conversation.</p>
            <dl>
              <div><dt>Region</dt><dd>Basel region</dd></div>
              <div><dt>Review</dt><dd>Initial feedback in 48h</dd></div>
              <div><dt>Rooms</dt><dd>Flexible</dd></div>
              <div><dt>Area</dt><dd>Client supplied</dd></div>
              <div><dt>Property type</dt><dd>House / apartment</dd></div>
              <div><dt>Status</dt><dd>Purchase request</dd></div>
            </dl>
            <ul>
              <li>Additional information area for ownership status, documents and renovation condition.</li>
              <li>Clear sell/access route separated from rental and purchase listings.</li>
            </ul>
            <a className="real-estate-primary-link" href="#calc">Request seller review</a>
          </div>
        </article>

        <article className="real-estate-detail-panel" data-detail-panel="zug-new">
          <div className="real-estate-gallery">
            <img src="/assets/external/projects/photo-1618220179428-22790b461013-w1800-q90.jpg" alt="Zug new construction interior" loading="lazy" decoding="async" />
            <img src="/assets/external/color-and-material/photo-1618220179428-22790b461013-w2200-q90.jpg" alt="New residence material concept" loading="lazy" decoding="async" />
            <img src="/assets/external/property-value-preservation/photo-1558655146-d09347e92766-w1200-q85.jpg" alt="New construction project planning view" loading="lazy" decoding="async" />
          </div>
          <div className="real-estate-detail-copy">
            <span className="real-estate-status">New construction</span>
            <h3>New Residence – Zug</h3>
            <p>Project-development detail for new construction launches, staged availability and interest registration.</p>
            <dl>
              <div><dt>Location</dt><dd>Zug</dd></div>
              <div><dt>Price</dt><dd>To be confirmed</dd></div>
              <div><dt>Rooms</dt><dd>3.5–5.5</dd></div>
              <div><dt>Living area</dt><dd>from 96 m²</dd></div>
              <div><dt>Property type</dt><dd>New construction</dd></div>
              <div><dt>Status</dt><dd>Register interest</dd></div>
            </dl>
            <ul>
              <li>Additional information area for completion date, floorplans and availability.</li>
              <li>Designed for future client-provided launch content.</li>
            </ul>
            <a className="real-estate-primary-link" href="#calc">Register interest</a>
          </div>
        </article>
      </div>
    </div>
  </section>

  {/* TRACK RECORD — placed after the Real Estate Projects section */}
  <section id="trust-stats">
    <div className="container">
      <div className="section-head track-record-head reveal">
        <div className="eyebrow">Track record</div>
        <svg className="brush" viewBox="0 0 180 22">
          <path d="M2 14 C 30 4, 70 20, 110 10 S 170 14, 178 8" />
        </svg>
        <h2>Two decades of quiet excellence, built on careful planning.</h2>
        <p>12'400 properties reviewed. 380 active maintenance portfolios. Zero missed maintenance windows.</p>
      </div>
      <div className="project-stats-grid reveal">
        <div className="project-stat-card"><span className="project-stat-number"><span data-count="500">0</span><span className="project-stat-suffix">+</span></span>
          <div className="project-stat-label">Projects Completed</div>
        </div>
        <div className="project-stat-card"><span className="project-stat-number"><span data-count="100">0</span><span className="project-stat-suffix">+</span></span>
          <div className="project-stat-label">Satisfied Clients</div>
        </div>
        <div className="project-stat-card"><span className="project-stat-number"><span data-count="10">0</span><span className="project-stat-suffix">+yrs</span></span>
          <div className="project-stat-label">Experience</div>
        </div>
        <div className="project-stat-card"><span className="project-stat-number"><span data-count="6000">0</span><span className="project-stat-suffix">+</span></span>
          <div className="project-stat-label">m² renovated</div>
        </div>
      </div>
    </div>
  </section>

  {/* NEW SECTIONS ADDED FROM REFERENCE */}

  <div className="new-sections-wrapper">
    {/* NEW SECTION 1: INTERNATIONAL SHOWCASE */}
    <section className="new-intl-showcase" style={{ "background": "#0F1720 !important", "backgroundColor": "#0F1720 !important" }}>
      <div className="bg-wrap">
        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2500&auto=format&fit=crop" alt="Luxury Villa Punta Cana" className="bg-img" loading="lazy" decoding="async" />
        <div className="overlay"></div>
      </div>
      <div className="container content">
        <div className="text-col">
          <div className="eyebrow-text">Discover International</div>
          <h2>Punta Cana</h2>
          <p>Exclusive residences & investment opportunities in the Dominican Republic.</p>
          <a href="#calc" className="btn btn-solid mag">Discover projects</a>
        </div>
        <div className="badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="#F39125" strokeWidth="1.5" style={{ "width": "40px", "height": "40px", "marginBottom": "20px", "display": "block", "marginInline": "auto" }}>
            <path d="M12 2v20M17 5S12 8 12 8s-5-3-5-3M17 12s-5 3-5 3-5-3-5-3M7 19s5-3 5-3 5 3 5 3"/>
          </svg>
          <div style={{ "fontSize": "11px", "letterSpacing": "0.15em", "textTransform": "uppercase", "lineHeight": "1.6", "color": "#fff !important" }}>Sun<br />Quality of Life<br />Investment<br />Future</div>
        </div>
      </div>
    </section>

    {/* NEW SECTION 2: SERVICES / PROPERTY VALUE */}
    <section id="new-services-section" className="new-services" style={{ "background": "linear-gradient(135deg, #f6be10 0%, #f39125 40%, #c73b8e 100%) !important", "backgroundColor": "transparent !important", "color": "#fff !important" }}>
      <div className="container">
        <div className="text-col">
          <div className="eyebrow-text" style={{ "color": "#ffffff !important", "WebkitTextFillColor": "#ffffff !important", "opacity": "0.9 !important" }}>Property + Value Retention</div>
          <h2>We don't just broker properties. We preserve their value.</h2>
        </div>
        <div className="icons-row">
          <div className="icon-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" style={{ "width": "52px", "height": "52px" }}><path d="M19 14h-4v7h-6v-7h-4v-7h14v7z"/><path d="M12 7v-4"/></svg>
            <span style={{ "fontSize": "13px", "fontWeight": "500" }}>Renovation</span>
          </div>
          <div className="icon-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" style={{ "width": "52px", "height": "52px" }}><path d="M20 4L4 20M20 4l-4 4M20 4l-8 8"/></svg>
            <span style={{ "fontSize": "13px", "fontWeight": "500" }}>Painting</span>
          </div>
          <div className="icon-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" style={{ "width": "52px", "height": "52px" }}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            <span style={{ "fontSize": "13px", "fontWeight": "500" }}>Facades</span>
          </div>
          <div className="icon-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" style={{ "width": "52px", "height": "52px" }}><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/></svg>
            <span style={{ "fontSize": "13px", "fontWeight": "500" }}>Interior Fit-out</span>
          </div>
          <div className="icon-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" style={{ "width": "52px", "height": "52px" }}><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
            <span style={{ "fontSize": "13px", "fontWeight": "500" }}>Value Retention</span>
          </div>
        </div>
      </div>
    </section>

    {/* NEW SECTION 3: BEFORE / AFTER */}
    <section className="new-ba-section">
      <div className="new-ba-grid">
        <div className="new-ba-text">
          <div className="new-ba-text-inner">
            <div className="eyebrow-text">Before / After</div>
          <h2>Real Results.<br />Sustainable Value.</h2>
          <p>Drag the handle and see for yourself how we make properties shine in new splendor.</p>
          <a href="#showcase" className="btn mag">View all references</a>
          </div>
        </div>
        <div className="new-ba-interactive" id="new-ba-slider">
            <div className="new-ba-before" id="new-ba-before">
                <img src="/amigos/img/before.jpg" alt="Before renovation" loading="lazy" decoding="async" />
                <span className="new-ba-tag before" id="new-ba-tag-before">BEFORE</span>
            </div>
            <div className="new-ba-after" id="new-ba-after">
                <img src="/amigos/img/after.jpg" alt="After renovation" loading="lazy" decoding="async" />
                <span className="new-ba-tag after" id="new-ba-tag-after">AFTER</span>
            </div>
            <div className="new-ba-divider" id="new-ba-divider">
                <div className="new-ba-handle">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                </div>
            </div>
        </div>
      </div>
    </section>

    {/* NEW SECTION 5: FINAL CTA */}
    <section className="new-final-cta">
      <div className="bg-letter">A</div>
      <div className="container">
        <div>
          <h2>Let's talk about your project.</h2>
          <p>Whether real estate, renovation, or value retention – we are here for you.</p>
        </div>
        <a href="#calc" className="btn-cta">Request a free quote</a>
      </div>
    </section>
  </div>

  {/* WHY AMIGOS and plans sections removed per client request. */}

  {/* SECTION 9 · CREATIVE PROJECTS SHOWCASE */}
  <section id="project-showcase-lab" aria-labelledby="project-showcase-title">
    <div className="container project-lab-shell">
      <div className="project-lab-copy reveal">
        <div className="eyebrow">Project showcase</div>
        <svg className="brush" viewBox="0 0 180 22">
          <path d="M2 12 C 40 22, 80 2, 120 14 S 170 6, 178 12" />
        </svg>
        <h2 id="project-showcase-title">Project stories in motion.</h2>
        <p>Each panel cycles through more views while the original before and after comparison stays below.</p>
      </div>

      <div className="project-lab-board reveal" data-project-stage>
        <article className="project-lab-card is-large" style={{ "--carousel-delay": "0s" }}>
          <div className="project-card-carousel" aria-hidden="true">
            <img src="/amigos/img/after.jpg" alt="" loading="lazy" decoding="async" />
            <img src="/amigos/img/hero-light.jpg" alt="" loading="lazy" decoding="async" />
            <img src="/amigos/img/after2.jpg" alt="" loading="lazy" decoding="async" />
          </div>
          <div>
            <span>Interior repaint</span>
            <strong>Zürich residence</strong>
          </div>
        </article>
        <article className="project-lab-card" style={{ "--carousel-delay": "-2s" }}>
          <div className="project-card-carousel" aria-hidden="true">
            <img src="/amigos/img/ref1.jpg" alt="" loading="lazy" decoding="async" />
            <img src="/amigos/img/ref2.jpg" alt="" loading="lazy" decoding="async" />
            <img src="/amigos/img/ref3.jpg" alt="" loading="lazy" decoding="async" />
          </div>
          <div>
            <span>Facade care</span>
            <strong>Bern townhouse</strong>
          </div>
        </article>
        <article className="project-lab-card" style={{ "--carousel-delay": "-4s" }}>
          <div className="project-card-carousel" aria-hidden="true">
            <img src="/amigos/img/after2.jpg" alt="" loading="lazy" decoding="async" />
            <img src="/amigos/img/before2.jpg" alt="" loading="lazy" decoding="async" />
            <img src="/amigos/img/after.jpg" alt="" loading="lazy" decoding="async" />
          </div>
          <div>
            <span>Restoration</span>
            <strong>Geneva apartment</strong>
          </div>
        </article>
        <article className="project-lab-card is-wide" style={{ "--carousel-delay": "-6s" }}>
          <div className="project-card-carousel" aria-hidden="true">
            <img src="/amigos/img/ref3.jpg" alt="" loading="lazy" decoding="async" />
            <img src="/amigos/img/hero.jpg" alt="" loading="lazy" decoding="async" />
            <img src="/amigos/img/villa-night.jpg" alt="" loading="lazy" decoding="async" />
          </div>
          <div>
            <span>Premium finish</span>
            <strong>Lake property</strong>
          </div>
        </article>
      </div>
    </div>
  </section>

  {/* SECTION 11 · TESTIMONIALS (project-grid bg + circular avatars) */}
  <section id="testi">
    <div className="testi-bg" aria-hidden="true"></div>
    <div className="container">
      <div className="section-head reveal" style={{ "textAlign": "center", "marginLeft": "auto", "marginRight": "auto" }}>
        <div className="eyebrow">Clients</div>
        <svg className="brush" viewBox="0 0 180 22" style={{ "marginLeft": "auto", "marginRight": "auto" }}>
          <path d="M2 10 C 50 20, 90 4, 130 12 S 172 10, 178 14" />
        </svg>
        <h2>Trusted in Switzerland's most demanding homes.</h2>
      </div>
      <div className="ring reveal" id="ring">
        <div className="ring-avatar" data-idx="0" style={{ "--i": "0", "--x": "14%", "--y": "22%", "--size": "120px" }}>
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="M. Rüegg" loading="lazy" decoding="async" />
          <div className="ring-pop">
            <p>"Amigos maintain three of our residences across Zürich and St. Moritz. The service is invisible until you
              notice, five years in, that nothing has ever aged."</p>
            <div className="who"><b>M. Rüegg</b><span>Private client · Zürich</span></div>
          </div>
        </div>
        <div className="ring-avatar" data-idx="1" style={{ "--i": "1", "--x": "32%", "--y": "70%", "--size": "100px" }}>
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="S. Lehmann" loading="lazy" decoding="async" />
          <div className="ring-pop">
            <p>"Their maintenance planning has cut our reactive maintenance budget by 34%. Their dashboard is the
              quietest, most useful planning tool we run."</p>
            <div className="who"><b>S. Lehmann</b><span>Property Manager · Basel</span></div>
          </div>
        </div>
        <div className="ring-avatar" data-idx="2" style={{ "--i": "2", "--x": "48%", "--y": "16%", "--size": "110px" }}>
          <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="E. Kobler" loading="lazy" decoding="async" />
          <div className="ring-pop">
            <p>"Their project quote came within 2% of our architect's final tender. Precise, punctual, and completely
              discreet. I have not accepted a rival bid since."</p>
            <div className="who"><b>E. Kobler</b><span>Institutional owner · Geneva</span></div>
          </div>
        </div>
        <div className="ring-avatar" data-idx="3" style={{ "--i": "3", "--x": "62%", "--y": "62%", "--size": "130px" }}>
          <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="A. Vogel" loading="lazy" decoding="async" />
          <div className="ring-pop">
            <p>"The drone facade scan caught a moisture problem two winters before it would have shown on the inside.
              That single report paid for a decade of subscription."</p>
            <div className="who"><b>A. Vogel</b><span>Villa owner · St. Moritz</span></div>
          </div>
        </div>
        <div className="ring-avatar" data-idx="4" style={{ "--i": "4", "--x": "80%", "--y": "26%", "--size": "100px" }}>
          <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="J. Brunner" loading="lazy" decoding="async" />
          <div className="ring-pop">
            <p>"We run a 40-building portfolio. AMIGOS' planning dashboard is the only system that gives us a truthful,
              forward-looking cost view per asset."</p>
            <div className="who"><b>J. Brunner</b><span>Institutional · Zürich</span></div>
          </div>
        </div>
        <div className="ring-avatar" data-idx="5" style={{ "--i": "5", "--x": "86%", "--y": "74%", "--size": "115px" }}>
          <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="C. Hunziker" loading="lazy" decoding="async" />
          <div className="ring-pop">
            <p>"Elegant, quiet, and technically brilliant. Everything a Swiss owner could want. Our chalet has never
              looked better."</p>
            <div className="who"><b>C. Hunziker</b><span>Chalet · Grisons</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* SECTION 11 · FINAL CTA */}
  <section id="final">
    <video className="bg media-dark" muted loop playsInline preload="none" poster="/amigos/img/villa-night.jpg">
      <source src="https://cdn.pixabay.com/video/2023/10/29/187219-878965591_large.mp4" type="video/mp4" />
      <source src="https://cdn.pixabay.com/video/2020/06/12/41800-431386278_large.mp4" type="video/mp4" />
      <source src="https://cdn.coverr.co/videos/coverr-a-luxurious-modern-house-1584/1080p.mp4" type="video/mp4" />
    </video>
    <img className="bg media-light" src="/amigos/img/final-light.jpg" alt="" loading="lazy" decoding="async" />
    <div className="final-vignette"></div>
    <div className="hero-spotlight"></div>
    <div className="inner">
      <div className="eyebrow">Ready when you are</div>
      <h2>The future of your property, in one conversation.</h2>
      <p>Book a private consultation with our senior team. No pressure, no callbacks — just clear project guidance.</p>
      <a className="btn btn-solid mag" href="dashboard.html">Book Consultation</a>
    </div>
  </section>

  <footer className="site-footer">
    <div className="container"
      style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "center", "flexWrap": "wrap", "gap": "20px" }}>
      <span className="brand">AMIGOS<span>·</span>IMMO</span>
      <nav className="nav"><a href="#.html">Services</a><a href="#">B2B</a><a href="#">References</a><a
          href="#html">Careers</a></nav>
      <p style={{ "fontSize": "11px", "letterSpacing": ".14em", "textTransform": "uppercase", "color": "var(--grey)", "opacity": ".6" }}>© 2026 · A
        brand of Amigos Maler GmbH · Zürich</p>
    </div>
  </footer>

  
  
  
  
</div>
    </>
  );
}
