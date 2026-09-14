import LegacyPage from "@/components/LegacyPage";

export const metadata = {
  title: "Impressum | Amigos Maler GmbH",
  description: "Rechtliche Angaben und Impressum der Amigos Maler GmbH in Olten, Schweiz."
};

const pageHtml = `<main style="padding-top: 120px; padding-bottom: 80px; min-height: 80vh;">
  <div style="max-width: 900px; margin: 0 auto; padding: 0 24px;">
    <span style="display: inline-block; font-size: 13px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #f6be10; margin-bottom: 12px;">Rechtliche Hinweise</span>
    <h1 style="font-size: clamp(32px, 5vw, 48px); font-weight: 800; line-height: 1.15; margin-bottom: 32px;">Impressum</h1>

    <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 16px; padding: 32px; margin-bottom: 32px;">
      <h2 style="font-size: 20px; font-weight: 700; margin-bottom: 16px; color: #f6be10;">Angaben gemäss Schweizer Recht</h2>
      <p style="margin-bottom: 12px; line-height: 1.6;"><strong>Amigos Maler GmbH</strong><br>
      Industriestrasse 14<br>
      4600 Olten<br>
      Schweiz</p>

      <p style="margin-bottom: 12px; line-height: 1.6;"><strong>Vertretungsberechtigte Person:</strong><br>
      Patricio Arias, Geschäftsführer</p>

      <p style="margin-bottom: 12px; line-height: 1.6;"><strong>Kontakt:</strong><br>
      Telefon: <a href="tel:+41622129012" style="color: #f6be10; text-decoration: none;">062 212 90 12</a><br>
      E-Mail: <a href="mailto:info@amigos-maler.ch" style="color: #f6be10; text-decoration: none;">info@amigos-maler.ch</a><br>
      Webseite: <a href="https://amigos-maler.ch" style="color: #f6be10; text-decoration: none;">www.amigos-maler.ch</a></p>

      <p style="margin-bottom: 12px; line-height: 1.6;"><strong>Handelsregistereintrag:</strong><br>
      Eingetragener Firmenname: Amigos Maler GmbH<br>
      Handelsregisteramt: Kanton Solothurn<br>
      Unternehmens-Identifikationsnummer (UID): CHE-xxx.xxx.xxx</p>

      <p style="line-height: 1.6;"><strong>Mehrwertsteuernummer:</strong><br>
      CHE-xxx.xxx.xxx MWST</p>
    </div>

    <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 16px; padding: 32px; margin-bottom: 32px;">
      <h2 style="font-size: 20px; font-weight: 700; margin-bottom: 16px; color: #f6be10;">Haftungsausschluss</h2>
      <p style="margin-bottom: 16px; line-height: 1.6;">
        Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
      </p>
      <p style="margin-bottom: 16px; line-height: 1.6;">
        Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.
      </p>
      <p style="line-height: 1.6;">
        Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
      </p>
    </div>

    <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 16px; padding: 32px;">
      <h2 style="font-size: 20px; font-weight: 700; margin-bottom: 16px; color: #f6be10;">Urheberrechte</h2>
      <p style="line-height: 1.6;">
        Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich der Firma Amigos Maler GmbH oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
      </p>
    </div>
  </div>
</main>`;

export default function Page() {
  return (
    <LegacyPage
      css={["/partial.css", "/service.css"]}
      html={pageHtml}
      shell={true}
    />
  );
}
