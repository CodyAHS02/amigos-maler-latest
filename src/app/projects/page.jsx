import LegacyPage from "@/components/LegacyPage";

export const metadata = {
  title: "Real Estate & Projects | Amigos Immo · Amigos Maler GmbH",
  description: "Swiss real estate opportunities, rentals, acquisitions, and premium property investments in Olten, Aarau, Solothurn, and Zurich."
};

const pageHtml = `<main>
        <!-- =========================================================
     HERO
========================================================= -->

        <section class="projects-hero" data-hero>

            <div class="hero-content">

                <div class="section-label reveal">
                    <span></span>
                    PROJECTS / REFERENCES
                </div>

                <h1 class="hero-title reveal">
                    Projects that<br>
                    speak for themselves.
                </h1>

                <p class="hero-description reveal">
                    Explore selected examples of painting, plastering,
                    renovation and facade work. Every project begins with
                    careful preparation and ends with a result made to last.
                </p>

                <div class="hero-buttons reveal">

                    <a href="#projects" class="project-button dark">
                        Discover Projects
                        <span>↓</span>
                    </a>

                    <a href="#contact" class="project-button outline">
                        Request a Quote
                        <span>↗</span>
                    </a>

                </div>

            </div>


            <div class="hero-project-visual reveal">

                <div class="hero-image-container">

                    <img src="/assets/external/appartment-renovation/photo-1600210492486-724fe5c67fb0.jpg?auto=format&fit=crop&w=1800&q=90"
                        alt="Interior renovation reference">

                    <div class="hero-image-overlay"></div>

                    <div class="hero-image-number">
                        01
                    </div>

                    <div class="hero-stamp">

                        <span>AMIGOS</span>

                        <strong>
                            CRAFT<br>
                            IN<br>
                            DETAIL
                        </strong>

                    </div>

                </div>

                <div class="hero-meta">
                    <span>PAINT</span>
                    <i></i>
                    <span>PLASTER</span>
                    <i></i>
                    <span>RENOVATE</span>
                </div>

            </div>


            <div class="hero-scroll">
                <span>SCROLL TO EXPLORE</span>
                <i></i>
            </div>

        </section>


        <!-- =========================================================
     INTRO — REAL ESTATE FOCUS
========================================================= -->

        <section class="projects-intro">
            <div class="projects-wrapper-intro">

                <div class="intro-number">
                    01
                </div>

                <div class="intro-title reveal-up">

                    <div class="section-label">
                        <span></span>
                        THE REAL ESTATE MARKET
                    </div>

                    <h2>
                        Real estate is not just square meters.<br>
                        It is long-term substance.
                    </h2>

                </div>

                <div class="intro-text reveal-up">

                    <p>
                        The Swiss real estate market demands far more than basic brokerage. It requires a profound, technical understanding of structural condition, location appreciation, and targeted value enhancement.
                    </p>

                    <p>
                        At Amigos Immo, we evaluate, upgrade, and manage properties with an owner's mindset — maximizing rental yields for investors, providing turnkey comfort for tenants, and achieving optimal market prices for sellers.
                    </p>

                </div>
            </div>

        </section>


        <!-- =========================================================
     PROJECT / REAL ESTATE PORTFOLIO
========================================================= -->

        <section class="portfolio-section" id="projects">

            <div class="portfolio-heading">

                <div class="reveal-up">

                    <div class="section-label">
                        <span></span>
                        REAL ESTATE PORTFOLIO
                    </div>

                    <h2>
                        Curated Opportunities across Switzerland.
                    </h2>

                </div>

                <p class="reveal-up">
                    Filter by market intention. Whether you are seeking premium rentals, high-yield multi-family acquisitions, or exclusive residential purchases, browse our verified real estate portfolio.
                </p>

            </div>


            <!-- FILTERS -->

            <div class="project-filters reveal-up">

                <button class="project-filter active" data-filter="all">
                    All Properties
                </button>

                <button class="project-filter" data-filter="mieten">
                    Mieten (Rent)
                </button>

                <button class="project-filter" data-filter="ankaufen">
                    Ankaufen (Purchase)
                </button>

                <button class="project-filter" data-filter="verkaufen">
                    Verkaufen (Sell)
                </button>

                <button class="project-filter" data-filter="investment">
                    Investment &amp; Yield
                </button>

                <button class="project-filter" data-filter="residential">
                    Residential
                </button>

                <button class="project-filter" data-filter="commercial">
                    Commercial &amp; Mixed
                </button>

            </div>


            <!-- PROJECT GRID -->

            <div class="projects-grid">

                <!-- PROPERTY 01: MIETEN -->
                <article class="project-card project-large" data-category="mieten residential"
                    data-title="Exklusive Attika-Wohnung mit Alpenfernsicht" data-location="Olten Zentrum, SO · 4.5 Zimmer · 142 m²"
                    data-service="Mietobjekt · Erstbezug nach Luxussanierung"
                    data-description="Lichtdurchflutete Luxuswohnung im obersten Geschoss mit grosser 60m² Sonnenterrasse, edlem Eichenparkett, raumhohen Fenstern und moderner Designerküche. Bezugsbereit mit Tiefgaragenplatz.">
                    <div class="project-image">
                        <img src="/assets/projects/project-14.jpg"
                            alt="Mietwohnung Olten" loading="lazy" decoding="async">
                        <div class="project-overlay"></div>
                        <span class="project-number">MIETEN · 01</span>
                        <div class="project-info">
                            <span class="project-category-tag tag-mieten">MIETEN · RENT</span>
                            <h3>Exklusive Attika-Wohnung Olten.</h3>
                            <p>4.5 Zimmer · 142 m² · CHF 2'850.– / Mt.</p>
                            <strong>View Property Details <b>↗</b></strong>
                        </div>
                    </div>
                </article>

                <!-- PROPERTY 02: ANKAUFEN -->
                <article class="project-card project-tall" data-category="ankaufen investment commercial"
                    data-title="Mehrfamilienhaus mit Wertsteigerungspotenzial" data-location="Solothurn Stadt, SO · 6 Einheiten"
                    data-service="Portfolio-Akquisition &amp; Werterhalt"
                    data-description="Strategischer Portfolio-Ankauf eines soliden Mehrfamilienhauses in zentraler Lage von Solothurn. Energetische und ästhetische Aufwertung für nachhaltige Mietzinsoptimierung und langfristigen Werterhalt.">
                    <div class="project-image">
                        <img src="/assets/projects/project-02.jpg"
                            alt="Mehrfamilienhaus Solothurn" loading="lazy" decoding="async">
                        <div class="project-overlay"></div>
                        <span class="project-number">ANKAUFEN · 02</span>
                        <div class="project-info">
                            <span class="project-category-tag tag-ankaufen">ANKAUFEN · ACQUIRE</span>
                            <h3>Mehrfamilienhaus Solothurn.</h3>
                            <p>6 Einheiten · Vollvermietet · 5.4% Rendite</p>
                            <strong>View Property Details <b>↗</b></strong>
                        </div>
                    </div>
                </article>

                <!-- PROPERTY 03: VERKAUFEN -->
                <article class="project-card project-wide" data-category="verkaufen residential"
                    data-title="Repräsentative Villa im Grünen" data-location="Aarau Region / Zürichberg · 8.5 Zimmer · 340 m²"
                    data-service="Exklusiver Verkauf &amp; Premium Staging"
                    data-description="Herrschaftliches Wohnanwesen mit weitläufigem Parkgrundstück und privater Zufahrt. Vor dem Verkauf meisterhaft instandgesetzt und vollumfänglich veredelt zur optimalen Erzielung des Spitzenmarktpreises.">
                    <div class="project-image">
                        <img src="/assets/projects/project-03.jpg"
                            alt="Villa Verkauf" loading="lazy" decoding="async">
                        <div class="project-overlay"></div>
                        <span class="project-number">VERKAUFEN · 03</span>
                        <div class="project-info">
                            <span class="project-category-tag tag-verkaufen">VERKAUFEN · SELL</span>
                            <h3>Repräsentative Villa im Grünen.</h3>
                            <p>8.5 Zimmer · Parkgrundstück · Richtpreis auf Anfrage</p>
                            <strong>View Property Details <b>↗</b></strong>
                        </div>
                    </div>
                </article>

                <!-- PROPERTY 04: MIETEN -->
                <article class="project-card" data-category="mieten residential"
                    data-title="Design-Gartenmaisonette am Flussufer" data-location="Aarau, AG · 3.5 Zimmer · 118 m²"
                    data-service="Ruhiges Wohnen mit Gartenanteil"
                    data-description="Ruhig gelegenes Maisonette-Schmuckstück direkt an der Aare. Grosszügiger Grundriss, Minergie-Standard und perfekte Anbindung an die Wirtschaftszentren Zürich, Basel und Bern.">
                    <div class="project-image">
                        <img src="/assets/projects/project-04.jpg"
                            alt="Gartenmaisonette Aarau" loading="lazy" decoding="async">
                        <div class="project-overlay"></div>
                        <span class="project-number">MIETEN · 04</span>
                        <div class="project-info">
                            <span class="project-category-tag tag-mieten">MIETEN · RENT</span>
                            <h3>Gartenmaisonette Aarau.</h3>
                            <p>3.5 Zimmer · Eigener Garten · CHF 2'420.– / Mt.</p>
                            <strong>View Property Details <b>↗</b></strong>
                        </div>
                    </div>
                </article>

                <!-- PROPERTY 05: VERKAUFEN -->
                <article class="project-card" data-category="verkaufen investment residential"
                    data-title="Kernsanierte Altbau-Eigentumswohnung" data-location="Basel St. Alban, BS · 4.0 Zimmer · 125 m²"
                    data-service="Klassischer Charme &amp; Moderne Ausstattung"
                    data-description="Stuckverzierte hohe Decken kombiniert mit modernem Wohnkomfort und grosser Loggia. Erfolgreiche Vermarktung und Verkauf innerhalb von vier Wochen über das Amigos Investorennetzwerk.">
                    <div class="project-image">
                        <img src="/assets/projects/project-05.jpg"
                            alt="Eigentumswohnung Basel" loading="lazy" decoding="async">
                        <div class="project-overlay"></div>
                        <span class="project-number">VERKAUFEN · 05</span>
                        <div class="project-info">
                            <span class="project-category-tag tag-verkaufen">VERKAUFEN · SELL</span>
                            <h3>Altbau-Eigentumswohnung Basel.</h3>
                            <p>4.0 Zimmer · Hohe Decken · CHF 1'180'000.–</p>
                            <strong>View Property Details <b>↗</b></strong>
                        </div>
                    </div>
                </article>

                <!-- PROPERTY 06: ANKAUFEN -->
                <article class="project-card" data-category="ankaufen commercial investment"
                    data-title="Wohn- und Gewerbeliegenschaft Zentrum" data-location="Zofingen, AG · 10 Einheiten · 1'450 m²"
                    data-service="Bestandesankauf &amp; Neupositionierung"
                    data-description="Gezielte Akquisition einer gemischten Gewerbe- und Wohnliegenschaft in frequenzstarker Lage. Optimierung der Mieterstruktur und schrittweise Modernisierung zur langfristigen Renditesicherung.">
                    <div class="project-image">
                        <img src="/assets/projects/project-06.jpg"
                            alt="Wohn- und Gewerbeliegenschaft" loading="lazy" decoding="async">
                        <div class="project-overlay"></div>
                        <span class="project-number">ANKAUFEN · 06</span>
                        <div class="project-info">
                            <span class="project-category-tag tag-ankaufen">ANKAUFEN · ACQUIRE</span>
                            <h3>Wohn- &amp; Gewerbehaus Zofingen.</h3>
                            <p>10 Einheiten · Hohes Entwicklungspotenzial</p>
                            <strong>View Property Details <b>↗</b></strong>
                        </div>
                    </div>
                </article>

                <!-- PROPERTY 07: MIETEN -->
                <article class="project-card" data-category="mieten residential"
                    data-title="Helle Familienwohnung im Parkquartier" data-location="Olten Süd, SO · 5.5 Zimmer · 150 m²"
                    data-service="Familienfreundliches Wohnen im Grünen"
                    data-description="Frisch instandgesetzte Familienwohnung mit zwei Balkonen, zwei modernen Nasszellen und separatem Hauswirtschaftsraum. Inklusive E-Ladestation im Untergeschoss.">
                    <div class="project-image">
                        <img src="/assets/projects/project-07.jpg"
                            alt="Familienwohnung Olten" loading="lazy" decoding="async">
                        <div class="project-overlay"></div>
                        <span class="project-number">MIETEN · 07</span>
                        <div class="project-info">
                            <span class="project-category-tag tag-mieten">MIETEN · RENT</span>
                            <h3>Familienwohnung Olten Süd.</h3>
                            <p>5.5 Zimmer · 2 Balkone · CHF 2'650.– / Mt.</p>
                            <strong>View Property Details <b>↗</b></strong>
                        </div>
                    </div>
                </article>

                <!-- PROPERTY 08: VERKAUFEN -->
                <article class="project-card" data-category="verkaufen residential"
                    data-title="Neu erstellte Doppelhaushälfte mit Seeblick" data-location="Luzern / Vierwaldstättersee, LU · 6.5 Zimmer · 210 m²"
                    data-service="Panoramalage &amp; Höchste Energieeffizienz"
                    data-description="Traumhafte Aussichtslage mit Blick auf See und Bergwelt. Modernste Wärmepumpentechnologie, Photovoltaik und exquisite Innenausstattung für gehobene Wohnansprüche.">
                    <div class="project-image">
                        <img src="/assets/projects/project-08.jpg"
                            alt="Doppelhaushälfte Luzern" loading="lazy" decoding="async">
                        <div class="project-overlay"></div>
                        <span class="project-number">VERKAUFEN · 08</span>
                        <div class="project-info">
                            <span class="project-category-tag tag-verkaufen">VERKAUFEN · SELL</span>
                            <h3>Doppelhaushälfte mit Seeblick.</h3>
                            <p>6.5 Zimmer · 210 m² · CHF 2'490'000.–</p>
                            <strong>View Property Details <b>↗</b></strong>
                        </div>
                    </div>
                </article>

                <!-- PROPERTY 09: ANKAUFEN -->
                <article class="project-card" data-category="ankaufen investment residential"
                    data-title="Historisches Stadthaus zur Gesamterneuerung" data-location="Bern Altstadtnähe, BE · 4 Einheiten"
                    data-service="Denkmalgerechte Substanzsicherung"
                    data-description="Substanzerhaltender Ankauf eines schützenswerten Stadthauses. Behutsame Modernisierung historischer Bausubstanz unter strenger Wahrung baubiologischer und denkmalpflegerischer Standards.">
                    <div class="project-image">
                        <img src="/assets/projects/project-09.jpg"
                            alt="Historisches Stadthaus Bern" loading="lazy" decoding="async">
                        <div class="project-overlay"></div>
                        <span class="project-number">ANKAUFEN · 09</span>
                        <div class="project-info">
                            <span class="project-category-tag tag-ankaufen">ANKAUFEN · ACQUIRE</span>
                            <h3>Historisches Stadthaus Bern.</h3>
                            <p>Denkmalgerechter Werterhalt · 4 Einheiten</p>
                            <strong>View Property Details <b>↗</b></strong>
                        </div>
                    </div>
                </article>

            </div>
        </section>


        <!-- =========================================================
     ABOUT US — MARIA & PATRICIO ARIAS (REAL ESTATE & BERATUNG)
========================================================= -->

        <section class="about-wife-section" id="ueber-uns-frau">
            <div class="about-wife-container">
                <div class="about-wife-media reveal-up">
                    <img src="/assets/about-hero.jpg" alt="Maria Arias &amp; Patricio Arias — Amigos Immo &amp; Real Estate" loading="lazy" decoding="async">
                    <div class="about-wife-media-badge">
                        <strong>Maria Arias</strong>
                        <span>Immobilienberatung &amp; Portfoliomanagement</span>
                    </div>
                </div>

                <div class="about-wife-content reveal-up">
                    <div class="about-wife-kicker">
                        <span></span>
                        ÜBER UNS · IMMOBILIEN &amp; WOHNGEFÜHL
                    </div>

                    <h2 class="about-wife-title">
                        Ein Zuhause ist mehr als vier Wände.
                    </h2>

                    <p class="about-wife-lead">
                        Als Schweizer Familienunternehmen verbinden wir bei Amigos Immo meisterhaftes Gespür für den Immobilienmarkt mit einem ganzheitlichen Blick auf jede Liegenschaft. Ob es um die Vermietung, den strategischen Ankauf oder den erfolgreichen Verkauf geht — jede Immobilie verdient Respekt, fundierte Marktkenntnis und eine persönliche Begleitung.
                    </p>

                    <blockquote class="about-wife-quote">
                        «Lage und Zahlen sind entscheidend. Aber erst das Verständnis für die Bausubstanz, ehrliche Beratung und Schweizer Zuverlässigkeit machen aus einer Immobilie eine lohnende Wertanlage oder ein echtes Daheim.»
                    </blockquote>

                    <p style="color: #94A3B8; font-size: 14px; line-height: 1.6;">
                        Gemeinsam mit Patricio begleite ich Immobilieneigentümer, Käufer und Investoren von der ersten Bewertung über gezielte Aufwertungskonzepte bis zum Notariatstermin. Wir sichern den nachhaltigen Werterhalt Ihrer Liegenschaft in Olten, Aarau, Solothurn, Basel und Zürich.
                    </p>

                    <div class="about-wife-pillars">
                        <div class="about-wife-pillar gold">
                            <strong>Mieten &amp; Wohnen</strong>
                            <span>Gepflegte Räume und termingerechte Mieterwechsel</span>
                        </div>
                        <div class="about-wife-pillar orange">
                            <strong>Ankauf &amp; Sanierung</strong>
                            <span>Werterhalt und Substanzschutz von Beginn an</span>
                        </div>
                        <div class="about-wife-pillar magenta">
                            <strong>Verkauf &amp; Marktwert</strong>
                            <span>Stilvolle Veredelung für den besten Erlös</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!-- =========================================================
     BEFORE / AFTER — REAL ESTATE VALUE TRANSFORMATION
========================================================= -->

        <section class="before-after-section" id="before-after">

            <div class="before-after-heading">

                <div class="reveal-up">

                    <div class="section-label">
                        <span></span>
                        VALUE-ADD TRANSFORMATION
                    </div>

                    <h2>
                        Turning Potential into Lasting Market Value.
                    </h2>

                </div>

                <p class="reveal-up">
                    Drag the slider to view how strategic renovation elevates property appeal, tenant quality, and market valuation.
                </p>

            </div>


            <!-- BEFORE AFTER 01 -->

            <div class="comparison-project reveal-up">

                <div class="comparison-top">

                    <span>
                        01 / RESIDENTIAL ASSET UPGRADE
                    </span>

                    <strong>
                        From outdated apartment to high-yield rental residence.
                    </strong>

                </div>


                <div class="comparison">

                    <div class="comparison-after">

                        <img src="/assets/external/appartment-renovation/photo-1600210492486-724fe5c67fb0.jpg?auto=format&fit=crop&w=1800&q=90"
                            alt="Finished high-end interior renovation">

                        <span class="comparison-label after">
                            AFTER (MODERNIZED)
                        </span>

                    </div>


                    <div class="comparison-before">

                        <img src="/assets/external/projects/photo-1600210491892-03d54c0aaf87-w1800-q90.jpg"
                            alt="Unfinished interior before value addition">

                        <span class="comparison-label before">
                            BEFORE (DATED)
                        </span>

                    </div>


                    <div class="comparison-handle">
                        <span>↔</span>
                    </div>

                    <input type="range" min="0" max="100" value="52" class="comparison-range"
                        aria-label="Compare before and after">

                </div>

            </div>


            <!-- BEFORE AFTER 02 -->

            <div class="comparison-project reveal-up">

                <div class="comparison-top">

                    <span>
                        02 / EXTERIOR APPRECIATION
                    </span>

                    <strong>
                        From weathered facade to premier market presence.
                    </strong>

                </div>


                <div class="comparison">

                    <div class="comparison-after">

                        <img src="/assets/external/drywall/photo-1600607688969-a5bfcd646154.jpg?auto=format&fit=crop&w=1800&q=90"
                            alt="Finished facade restoration">

                        <span class="comparison-label after">
                            AFTER (RESTORED)
                        </span>

                    </div>


                    <div class="comparison-before">

                        <img src="/assets/external/appartment-renovation/photo-1600607687920-4e2a09cf159d.jpg?auto=format&fit=crop&w=1800&q=90"
                            alt="Facade before renovation">

                        <span class="comparison-label before">
                            BEFORE (WEATHERED)
                        </span>

                    </div>


                    <div class="comparison-handle">
                        <span>↔</span>
                    </div>

                    <input type="range" min="0" max="100" value="48" class="comparison-range"
                        aria-label="Compare before and after">

                </div>

            </div>

        </section>


        <!-- =========================================================
     AMIGOS IMMO STANDARD — REAL ESTATE MARKET EXCELLENCE
========================================================= -->

        <section class="quality-section" id="amigos-standard">

            <div class="quality-inner">

                <!-- INTRO -->
                <div class="quality-intro">

                    <div class="quality-kicker">
                        <span></span>
                        THE AMIGOS IMMO STANDARD
                    </div>

                    <h2>
                        Real Estate Value
                        <br>
                        Engineered to Last.
                    </h2>

                    <p>
                        Every property decision is backed by rigorous technical assessment, honest market valuation, and long-term asset care.
                    </p>

                </div>


                <!-- INTERACTIVE LIST -->
                <div class="quality-list">

                    <!-- 01 -->
                    <div class="quality-item" data-quality-item>

                        <img class="quality-item-image" src="/assets/projectss/01.png" alt="Market Analysis" hidden>

                        <div class="quality-number">
                            01
                        </div>

                        <div class="quality-item-content">

                            <span class="quality-label">
                                MARKET ANALYSIS
                            </span>

                            <h3>
                                In-Depth Property Audit.
                            </h3>

                            <p>
                                Structural, technical, and yield evaluation before any property transaction or development.
                            </p>

                        </div>

                        <div class="quality-arrow">
                            ↗
                        </div>

                    </div>


                    <!-- 02 -->
                    <div class="quality-item" data-quality-item>

                        <img class="quality-item-image" src="/assets/projectss/2.png" alt="Strategic Enhancement" hidden>

                        <div class="quality-number">
                            02
                        </div>

                        <div class="quality-item-content">

                            <span class="quality-label">
                                VALUE ADDITION
                            </span>

                            <h3>
                                Strategic Enhancement.
                            </h3>

                            <p>
                                Targeted renovations and design staging that measurably increase rental income and resale value.
                            </p>

                        </div>

                        <div class="quality-arrow">
                            ↗
                        </div>

                    </div>


                    <!-- 03 -->
                    <div class="quality-item" data-quality-item>

                        <img class="quality-item-image" src="/assets/projectss/3.png" alt="Seamless Tenancy" hidden>

                        <div class="quality-number">
                            03
                        </div>

                        <div class="quality-item-content">

                            <span class="quality-label">
                                TENANCY MANAGEMENT
                            </span>

                            <h3>
                                Seamless Turnovers &amp; High Occupancy.
                            </h3>

                            <p>
                                Fast, reliable maintenance between tenants guaranteeing zero unnecessary vacancy loss.
                            </p>

                        </div>

                        <div class="quality-arrow">
                            ↗
                        </div>

                    </div>


                    <!-- 04 -->
                    <div class="quality-item" data-quality-item>

                        <img class="quality-item-image" src="/assets/projectss/4.png" alt="Discreet Transactions" hidden>

                        <div class="quality-number">
                            04
                        </div>

                        <div class="quality-item-content">

                            <span class="quality-label">
                                TRANSACTION CARE
                            </span>

                            <h3>
                                Discreet Off-Market Network.
                            </h3>

                            <p>
                                Confidential property matchmaking connecting discerning buyers, family offices, and institutional owners.
                            </p>

                        </div>

                        <div class="quality-arrow">
                            ↗
                        </div>

                    </div>


                    <!-- 05 -->
                    <div class="quality-item" data-quality-item>

                        <img class="quality-item-image" src="/assets/projectss/5.png" alt="Asset Longevity" hidden>

                        <div class="quality-number">
                            05
                        </div>

                        <div class="quality-item-content">

                            <span class="quality-label">
                                PRESERVATION
                            </span>

                            <h3>
                                Long-Term Asset Longevity.
                            </h3>

                            <p>
                                Continuous preventive care ensuring Swiss quality standards and zero deferred maintenance for decades.
                            </p>

                        </div>

                        <div class="quality-arrow">
                            ↗
                        </div>

                    </div>

                </div>

            </div>


            <!-- FLOATING IMAGE -->
            <div class="quality-hover-image" aria-hidden="true">

                <div class="quality-hover-image-inner">

                    <div class="quality-hover-image-media">
                        <img src="" alt="">
                    </div>

                    <div class="quality-hover-image-index">
                        01 / 05
                    </div>

                </div>

            </div>

        </section>

        <!-- =========================================================
     PROJECT MODAL
========================================================= -->

        <div class="project-modal" aria-hidden="true">

            <div class="modal-backdrop"></div>

            <div class="modal-panel">

                <button class="modal-close" aria-label="Close">
                    ×
                </button>

                <div class="modal-image">

                    <img src="" alt="">

                </div>


                <div class="modal-content">

                    <div class="section-label modal-category">
                        <span></span>
                        REAL ESTATE
                    </div>

                    <h2 class="modal-title">
                        Property
                    </h2>


                    <div class="modal-details">

                        <div>
                            <small>LOCATION &amp; SPECS</small>
                            <strong class="modal-location">
                                —
                            </strong>
                        </div>

                        <div>
                            <small>CATEGORY</small>
                            <strong class="modal-service">
                                —
                            </strong>
                        </div>

                    </div>


                    <p class="modal-description">
                        —
                    </p>


                    <div class="modal-notice">

                        <strong>
                            SWISS REAL ESTATE OPPORTUNITY
                        </strong>

                        <p>
                            Interested in renting, purchasing, or marketing a similar property? Contact our real estate desk for full documentation and private viewings.
                        </p>

                    </div>

                </div>

            </div>

        </div>


        <!-- =========================================================
     FINAL CTA — REAL ESTATE
========================================================= -->

        <section class="projects-final-cta" id="contact">

            <div class="cta-circle circle-one"></div>
            <div class="cta-circle circle-two"></div>

            <div class="final-cta-content reveal-up">

                <div class="section-label">
                    <span></span>
                    YOUR REAL ESTATE OBJECTIVES
                </div>

                <h2>
                    Looking to rent, acquire,<br>
                    or sell property in Switzerland?
                </h2>

                <p>
                    Share your requirements with us. Whether you own a multi-family portfolio, want to sell a private residence at top value, or seek your next rental home — our team is ready to assist.
                </p>


                <div class="final-buttons">

                    <a href="/contact" class="project-button light">
                        Free Property Assessment
                        <span>↗</span>
                    </a>

                    <a href="/contact" class="project-button ghost">
                        Contact Amigos Immo
                        <span>→</span>
                    </a>

                </div>

            </div>

        </section>

    </main>`;

export default function Page() {
  return (
    <LegacyPage
      css={["/projects.css", "/partial.css"]}
      html={pageHtml}
      scripts={["/projects.js", "/script.js"]}
      shell={true}
    />
  );
}
