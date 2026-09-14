import LegacyPage from "@/components/LegacyPage";

export const metadata = {
  title: "Datenschutzerklärung | Amigos Maler GmbH",
  description: "Datenschutzerklärung der Amigos Maler GmbH gemäss dem Schweizer Datenschutzgesetz (DSG)."
};

const pageHtml = `<main style="padding-top: 120px; padding-bottom: 80px; min-height: 80vh;">
  <div style="max-width: 900px; margin: 0 auto; padding: 0 24px;">
    <span style="display: inline-block; font-size: 13px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #f6be10; margin-bottom: 12px;">Datenschutz</span>
    <h1 style="font-size: clamp(32px, 5vw, 48px); font-weight: 800; line-height: 1.15; margin-bottom: 32px;">Datenschutzerklärung</h1>

    <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 16px; padding: 32px; margin-bottom: 32px;">
      <h2 style="font-size: 20px; font-weight: 700; margin-bottom: 16px; color: #f6be10;">1. Allgemeine Hinweise & Geltungsbereich</h2>
      <p style="margin-bottom: 16px; line-height: 1.6;">
        Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Die Amigos Maler GmbH nimmt den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
      </p>
      <p style="line-height: 1.6;">
        In Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so gut wie möglich vor fremden Zugriffen, Verlusten, Missbrauch oder vor Fälschung zu schützen.
      </p>
    </div>

    <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 16px; padding: 32px; margin-bottom: 32px;">
      <h2 style="font-size: 20px; font-weight: 700; margin-bottom: 16px; color: #f6be10;">2. Verantwortliche Stelle</h2>
      <p style="margin-bottom: 12px; line-height: 1.6;">
        Verantwortlich für die Datenbearbeitung auf dieser Website ist:
      </p>
      <p style="line-height: 1.6;">
        <strong>Amigos Maler GmbH</strong><br>
        Industriestrasse 14<br>
        4600 Olten, Schweiz<br>
        E-Mail: <a href="mailto:info@amigos-maler.ch" style="color: #f6be10; text-decoration: none;">info@amigos-maler.ch</a><br>
        Telefon: 062 212 90 12
      </p>
    </div>

    <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 16px; padding: 32px; margin-bottom: 32px;">
      <h2 style="font-size: 20px; font-weight: 700; margin-bottom: 16px; color: #f6be10;">3. Erfassung und Bearbeitung personenbezogener Daten</h2>
      <p style="margin-bottom: 16px; line-height: 1.6;">
        Wir bearbeiten in erster Linie personenbezogene Daten, die wir im Rahmen unserer Geschäftsbeziehung mit unseren Kunden und anderen Geschäftspartnern von diesen und weiteren daran beteiligten Personen erhalten oder beim Betrieb unserer Website von deren Nutzern erheben.
      </p>
      <p style="margin-bottom: 16px; line-height: 1.6;">
        <strong>Online-Rechner & Offertanfragen:</strong> Wenn Sie unseren Online-Offertrechner oder das Kontaktformular nutzen, erfassen wir die von Ihnen eingegebenen Daten (Name, Vorname, E-Mail-Adresse, Telefonnummer, Projektadresse, PLZ/Ort und Projektdetails). Diese Daten werden ausschliesslich zur Bearbeitung Ihrer Anfrage, zur Erstellung von Richtofferten und zur Terminvereinbarung verwendet.
      </p>
      <p style="line-height: 1.6;">
        <strong>E-Mail-Verifizierung:</strong> Zur Verhinderung von Missbrauch und zur sicheren Zustellung Ihrer Kostenschätzung verwenden wir eine E-Mail-Verifizierung mittels Verifizierungscode.
      </p>
    </div>

    <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 16px; padding: 32px;">
      <h2 style="font-size: 20px; font-weight: 700; margin-bottom: 16px; color: #f6be10;">4. Ihre Rechte</h2>
      <p style="line-height: 1.6;">
        Sie haben im Rahmen des auf Sie anwendbaren Datenschutzrechts das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Datenbearbeitung und Widerspruch gegen unsere Datenbearbeitungen. Bitte wenden Sie sich hierzu direkt per E-Mail an <a href="mailto:info@amigos-maler.ch" style="color: #f6be10; text-decoration: none;">info@amigos-maler.ch</a>.
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
