import LegalDocument from "@/components/LegalDocument";
import SharedPageShell from "@/components/SharedPageShell";

export const metadata = {
  title: "Datenschutzerklärung | Amigos Maler GmbH",
  description: "Datenschutzerklärung der Amigos Maler GmbH gemäss dem Schweizer Datenschutzgesetz (DSG)."
};

const sections = [
  {
    title: "1. Allgemeine Hinweise & Geltungsbereich",
    content: <>
      <p>Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Die Amigos Maler GmbH nimmt den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
      <p>In Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so gut wie möglich vor fremden Zugriffen, Verlusten, Missbrauch oder vor Fälschung zu schützen.</p>
    </>
  },
  {
    title: "2. Verantwortliche Stelle",
    content: <>
      <p>Verantwortlich für die Datenbearbeitung auf dieser Website ist:</p>
      <p><strong>Amigos Maler GmbH</strong><br />Industriestrasse 14<br />4600 Olten, Schweiz<br />E-Mail: <a href="mailto:info@amigos-maler.ch">info@amigos-maler.ch</a><br />Telefon: 062 212 90 12</p>
    </>
  },
  {
    title: "3. Erfassung und Bearbeitung personenbezogener Daten",
    content: <>
      <p>Wir bearbeiten in erster Linie personenbezogene Daten, die wir im Rahmen unserer Geschäftsbeziehung mit unseren Kunden und anderen Geschäftspartnern von diesen und weiteren daran beteiligten Personen erhalten oder beim Betrieb unserer Website von deren Nutzern erheben.</p>
      <p><strong>Online-Rechner & Offertanfragen:</strong> Wenn Sie unseren Online-Offertrechner oder das Kontaktformular nutzen, erfassen wir die von Ihnen eingegebenen Daten (Name, Vorname, E-Mail-Adresse, Telefonnummer, Projektadresse, PLZ/Ort und Projektdetails). Diese Daten werden ausschliesslich zur Bearbeitung Ihrer Anfrage, zur Erstellung von Richtofferten und zur Terminvereinbarung verwendet.</p>
      <p><strong>E-Mail-Verifizierung:</strong> Zur Verhinderung von Missbrauch und zur sicheren Zustellung Ihrer Kostenschätzung verwenden wir eine E-Mail-Verifizierung mittels Verifizierungscode.</p>
    </>
  },
  {
    title: "4. Ihre Rechte",
    content: <p>Sie haben im Rahmen des auf Sie anwendbaren Datenschutzrechts das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Datenbearbeitung und Widerspruch gegen unsere Datenbearbeitungen. Bitte wenden Sie sich hierzu direkt per E-Mail an <a href="mailto:info@amigos-maler.ch">info@amigos-maler.ch</a>.</p>
  }
];

export default function Page() {
  return <SharedPageShell><LegalDocument eyebrow="Datenschutz" title="Datenschutzerklärung" sections={sections} /></SharedPageShell>;
}
