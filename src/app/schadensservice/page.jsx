import DamageServiceShell from "@/components/DamageServiceShell";

export const metadata = {
  title: "Schadensservice | Amigos Maler GmbH",
  description:
    "Schäden an Immobilien einfach melden: Amigos Maler prüft, dokumentiert, offeriert und saniert Schimmel, Feuchtigkeit, Wasser- sowie Hagel- und Sturmschäden in Olten und Umgebung."
};

const whatsappHref = "https://wa.me/41622129012?text=Guten%20Tag%20Amigos%20Maler%2C%20ich%20m%C3%B6chte%20einen%20Schaden%20melden.";

const Icon = ({ children, className = "" }) => (
  <span className={`damage-icon ${className}`} aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none">{children}</svg>
  </span>
);

export default function Page() {
  return (
    <DamageServiceShell>
      <main className="damage-page">
        <section className="damage-hero">
          <div className="damage-shell damage-hero-grid">
            <div className="damage-hero-copy">
              <span className="damage-pill">AMIGOS SCHADENSSERVICE</span>
              <h1>
                <span className="damage-title-line">Ein Schaden.</span>
                <span className="damage-title-line">Ein Ansprechpartner.</span>
                <span className="damage-title-line damage-title-accent">Eine saubere Lösung.</span>
              </h1>
              <p>
                Ob Schimmel, Wasserschaden oder beschädigte Fassade: Wir prüfen den Schaden, dokumentieren ihn klar
                und führen die Sanierung fachgerecht aus.
              </p>
              <div className="damage-actions">
                <a className="damage-btn damage-btn-primary" href={whatsappHref} target="_blank" rel="noreferrer">
                  <Icon><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.002 5.45-4.437 9.884-9.887 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.89c0 2.096.547 4.142 1.588 5.946L.057 24l6.304-1.654a11.86 11.86 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.89a11.82 11.82 0 00-3.478-8.416" /></Icon>
                  Schaden melden
                </a>
                <a className="damage-btn damage-btn-secondary" href="/contact">
                  Besichtigung vereinbaren
                </a>
              </div>
              <a className="damage-phone" href="tel:+41622129012">
                <span>Direkt erreichbar</span>
                <strong>062 212 90 12</strong>
              </a>
            </div>

            <div className="damage-hero-visual damage-hero-composite">
              <img
                src="/assets/schadensservice-hero.png"
                alt="Schimmel, Wasserschaden, Feuchtigkeit an einer Fassade und ein saniertes Wohnhaus"
              />
            </div>
          </div>
          <div className="damage-hero-status">
            <span className="damage-status-dot"></span>
            Schnell vor Ort in Olten und Umgebung
          </div>
        </section>

        <section className="damage-categories" id="schadenarten">
          <div className="damage-shell">
            <header className="damage-section-heading">
              <p>Schadensarten</p>
              <h2>Wir beheben Schäden.<br />Wir schaffen Sicherheit.</h2>
              <span>Eine zentrale Anlaufstelle von der ersten Einschätzung bis zur fertigen Oberfläche.</span>
            </header>

            <div className="damage-category-grid">
              <article className="damage-category-card category-mold">
                <div className="damage-category-image">
                  <img src="/amigos/img/before.jpg" alt="Raum mit Feuchtigkeits- und Oberflächenschäden" />
                  <Icon><path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><circle cx="12" cy="12" r="2.7" stroke="currentColor" strokeWidth="1.8"/></Icon>
                </div>
                <div className="damage-category-body">
                  <h3>Schimmel &amp; Feuchtigkeit</h3>
                  <p>Ursache erkennen, betroffene Flächen sanieren und die Oberfläche dauerhaft schützen.</p>
                  <ul><li>Feuchtigkeits- und Ursachenprüfung</li><li>Fachgerechte Oberflächensanierung</li><li>Atmungsaktive Schutzsysteme</li></ul>
                  <a href="/mold">Schimmelservice ansehen <span>↗</span></a>
                </div>
              </article>

              <article className="damage-category-card category-water">
                <div className="damage-category-image">
                  <img src="/assets/Plastering/plaster-repair.jpeg" alt="Prüfung und Reparatur einer beschädigten Wand" />
                  <Icon><path d="M12 2.8S6.5 9 6.5 13.5a5.5 5.5 0 0 0 11 0C17.5 9 12 2.8 12 2.8Z" stroke="currentColor" strokeWidth="1.8"/><path d="M9.5 14.2a2.7 2.7 0 0 0 2.8 2.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></Icon>
                </div>
                <div className="damage-category-body">
                  <h3>Wasserschäden</h3>
                  <p>Beschädigte Wände und Decken nach der Trocknung sauber aufbauen und wiederherstellen.</p>
                  <ul><li>Schadenaufnahme vor Ort</li><li>Reparatur von Putz und Untergrund</li><li>Grundierung und Neuanstrich</li></ul>
                  <a href="/water-damage">Wasserschaden-Service ansehen <span>↗</span></a>
                </div>
              </article>

              <article className="damage-category-card category-storm">
                <div className="damage-category-image">
                  <img src="/assets/facade/Facade-Reapir.jpeg" alt="Prüfung einer beschädigten Gebäudehülle" />
                  <Icon><path d="M7 15.5h9.5a3.5 3.5 0 1 0-.7-6.9A5 5 0 0 0 6.2 10 2.8 2.8 0 0 0 7 15.5Z" stroke="currentColor" strokeWidth="1.8"/><path d="m9 18-1 2M13 18l-1 2M17 18l-1 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></Icon>
                </div>
                <div className="damage-category-body">
                  <h3>Hagel- &amp; Sturmschäden</h3>
                  <p>Beschädigte Fassaden prüfen, dokumentieren und mit passenden Systemen instand setzen.</p>
                  <ul><li>Kontrolle der Fassadenflächen</li><li>Putz- und Beschichtungsreparatur</li><li>Schutz und Werterhalt</li></ul>
                  <a href="/Facade-Renovation">Fassadenservice ansehen <span>↗</span></a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="damage-process" id="ablauf">
          <div className="damage-shell">
            <header className="damage-process-heading">
              <div><p>So einfach geht’s</p><h2>In 6 Schritten zu Ihrer Lösung</h2></div>
              <span>Klarer Ablauf. Ein Ansprechpartner. Keine unnötigen Umwege.</span>
            </header>
            <ol className="damage-steps">
              <li><Icon><path d="M20 11.6a8 8 0 0 1-11.8 7l-4.2 1.2 1.2-4.1A8 8 0 1 1 20 11.6Z" stroke="currentColor" strokeWidth="1.8"/></Icon><b>01</b><h3>Schaden melden</h3><p>Per WhatsApp, Telefon oder Kontaktformular.</p></li>
              <li><Icon><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8"/><path d="m7 5 1-2h3" stroke="currentColor" strokeWidth="1.8"/></Icon><b>02</b><h3>Fotos senden</h3><p>Einige Bilder helfen uns bei der ersten Einschätzung.</p></li>
              <li><Icon><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="1.8"/></Icon><b>03</b><h3>Besichtigung</h3><p>Wir prüfen den Schaden persönlich vor Ort.</p></li>
              <li><Icon><path d="M7 3h8l3 3v15H7V3Z" stroke="currentColor" strokeWidth="1.8"/><path d="M15 3v4h4M10 11h5M10 15h5" stroke="currentColor" strokeWidth="1.8"/></Icon><b>04</b><h3>Dokumentation</h3><p>Auf Wunsch auch für Verwaltung oder Versicherung.</p></li>
              <li><Icon><rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M8 7h8M8 11h2M12 11h2M16 11h.1M8 15h2M12 15h2M16 15h.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></Icon><b>05</b><h3>Transparente Offerte</h3><p>Sie erhalten Umfang, Kosten und nächste Schritte klar erklärt.</p></li>
              <li><Icon><path d="M4 20 15 9M14 5l5 5M12 7l5 5M4 20l1-5 10-10 4 4-10 10-5 1Z" stroke="currentColor" strokeWidth="1.8"/></Icon><b>06</b><h3>Sanierung</h3><p>Wir beheben den Schaden fachgerecht und sauber.</p></li>
            </ol>
          </div>
        </section>

        <section className="damage-assurance">
          <div className="damage-shell damage-assurance-grid">
            <div className="damage-why">
              <p className="damage-kicker">Warum Amigos?</p>
              <h2>Verlässlich, wenn es darauf ankommt.</h2>
              <div className="damage-why-list">
                <article><b>Erfahrung &amp; Kompetenz</b><span>Schadensanierung und Malerhandwerk aus einer Hand.</span></article>
                <article><b>Schnell vor Ort</b><span>Direkte Unterstützung in Olten und Umgebung.</span></article>
                <article><b>Klare Zuständigkeit</b><span>Ein Ansprechpartner von der Analyse bis zur Übergabe.</span></article>
                <article><b>Für Privat &amp; B2B</b><span>Für Eigentümer, Verwaltungen und Immobilienpartner.</span></article>
              </div>
            </div>

            <aside className="damage-contact-card">
              <p>Jetzt Schaden melden</p>
              <h2>Wir sind für Sie da.</h2>
              <span>Senden Sie uns Fotos per WhatsApp. So können wir den nächsten Schritt schnell einschätzen.</span>
              <a className="damage-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer">Jetzt per WhatsApp melden <strong>↗</strong></a>
              <div className="damage-contact-lines">
                <a href="tel:+41622129012">062 212 90 12</a>
                <a href="mailto:info@amigos-maler.ch?subject=Schadenmeldung">info@amigos-maler.ch</a>
              </div>
            </aside>
          </div>
        </section>

        <section className="damage-proof">
          <div className="damage-shell damage-proof-grid">
            <div className="damage-proof-copy">
              <p className="damage-kicker">Vorher / Nachher</p>
              <h2>Vom Schaden zurück zu einer sauberen Oberfläche.</h2>
              <p>Nach Analyse und Vorbereitung stellen wir beschädigte Flächen sorgfältig wieder her. Die gezeigten Bilder veranschaulichen eine Oberflächeninstandsetzung.</p>
              <a href="/projects">Weitere Arbeiten ansehen <span>↗</span></a>
            </div>
            <div className="damage-comparison">
              <figure><img src="/amigos/img/before.jpg" alt="Beschädigter Raum vor der Instandsetzung" /><figcaption>Vorher</figcaption></figure>
              <figure><img src="/amigos/img/after.jpg" alt="Heller Raum nach der Oberflächeninstandsetzung" /><figcaption>Nachher</figcaption></figure>
            </div>
          </div>
        </section>

      </main>
    </DamageServiceShell>
  );
}

// force reload

// trigger css reload

// trigger reload 2
