import LegacyPage from "@/components/LegacyPage";

export const metadata = {
  title: "Allgemeine Geschäftsbedingungen (AGB) | Amigos Maler GmbH",
  description: "Allgemeine Geschäftsbedingungen der Amigos Maler GmbH für Maler-, Gipser- und Renovationsarbeiten."
};

const pageHtml = `<main style="padding-top: 120px; padding-bottom: 80px; min-height: 80vh;">
  <div style="max-width: 900px; margin: 0 auto; padding: 0 24px;">
    <span style="display: inline-block; font-size: 13px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #f6be10; margin-bottom: 12px;">Vertragsbedingungen</span>
    <h1 style="font-size: clamp(32px, 5vw, 48px); font-weight: 800; line-height: 1.15; margin-bottom: 32px;">Allgemeine Geschäftsbedingungen (AGB)</h1>

    <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 16px; padding: 32px; margin-bottom: 32px;">
      <h2 style="font-size: 20px; font-weight: 700; margin-bottom: 16px; color: #f6be10;">1. Geltungsbereich</h2>
      <p style="margin-bottom: 16px; line-height: 1.6;">
        Diese Allgemeinen Geschäftsbedingungen (nachfolgend «AGB») gelten für alle Verträge, Offerten, Lieferungen und Dienstleistungen der Amigos Maler GmbH (nachfolgend «Unternehmerin») im Bereich Maler-, Gipser-, Trockenbau-, Fassaden- und Renovationsarbeiten.
      </p>
      <p style="line-height: 1.6;">
        Abweichende Vereinbarungen bedürfen zu ihrer Gültigkeit der ausdrücklichen schriftlichen Bestätigung durch die Unternehmerin. Soweit diese AGB keine besonderen Bestimmungen enthalten, gelten die einschlägigen Normen des Schweizerischen Werkvertragsrechts (Art. 363 ff. OR) sowie die SIA-Normen (insb. SIA 118 und SIA 257 «Malerarbeiten»).
      </p>
    </div>

    <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 16px; padding: 32px; margin-bottom: 32px;">
      <h2 style="font-size: 20px; font-weight: 700; margin-bottom: 16px; color: #f6be10;">2. Offerten und Online-Kostenschätzungen</h2>
      <p style="margin-bottom: 16px; line-height: 1.6;">
        Über den Online-Rechner der Website generierte Beträge stellen unverbindliche Kostenschätzungen dar («YOUR PERSONAL ESTIMATED QUOTATION»). Sie basieren auf Richtwerten und den Angaben des Kunden. Ein rechtsgültiger Werkvertrag kommt erst nach einer Vor-Ort-Besichtigung, definitiver Detailofferte und schriftlicher Auftragsbestätigung bzw. Unterzeichnung zustande.
      </p>
      <p style="line-height: 1.6;">
        Schriftliche Offerten der Amigos Maler GmbH sind, sofern nicht anders vermerkt, 30 Tage ab Ausstellungsdatum gültig.
      </p>
    </div>

    <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 16px; padding: 32px; margin-bottom: 32px;">
      <h2 style="font-size: 20px; font-weight: 700; margin-bottom: 16px; color: #f6be10;">3. Ausführung und Mitwirkungspflichten</h2>
      <p style="margin-bottom: 16px; line-height: 1.6;">
        Die Arbeiten werden fachgerecht und nach dem aktuellen Stand der Handwerkstechnik ausgeführt. Der Auftraggeber stellt sicher, dass die Arbeitsbereiche zum vereinbarten Termin zugänglich sind und notwendige Vorarbeiten (z.B. Strom- und Wasseranschluss, Baufreiheit) gewährleistet sind.
      </p>
      <p style="line-height: 1.6;">
        Mehraufwände infolge unvorhersehbarer baulicher Gegebenheiten (z.B. versteckte Feuchtigkeitsschäden, instabile Altanstriche) werden dem Kunden nach vorheriger Rücksprache in Rechnung gestellt.
      </p>
    </div>

    <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 16px; padding: 32px;">
      <h2 style="font-size: 20px; font-weight: 700; margin-bottom: 16px; color: #f6be10;">4. Preise, Zahlungsbedingungen und Gerichtsstand</h2>
      <p style="margin-bottom: 16px; line-height: 1.6;">
        Alle Preise verstehen sich in Schweizer Franken (CHF) inklusive oder exklusive der gesetzlichen Mehrwertsteuer, gemäss Kennzeichnung auf der Offerte. Rechnungen sind innert 30 Tagen netto ab Rechnungsdatum zahlbar.
      </p>
      <p style="line-height: 1.6;">
        Anwendbar ist ausschliesslich materielles Schweizer Recht. Gerichtsstand für allfällige Streitigkeiten ist Olten, Schweiz.
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
