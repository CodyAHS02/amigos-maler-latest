import LegalDocument from "@/components/LegalDocument";
import SharedPageShell from "@/components/SharedPageShell";

export const metadata = {
  title: "Allgemeine Geschäftsbedingungen (AGB) | Amigos Maler GmbH",
  description: "Allgemeine Geschäftsbedingungen der Amigos Maler GmbH für Maler-, Gipser- und Renovationsarbeiten."
};

const sections = [
  {
    title: "1. Geltungsbereich",
    paragraphs: [
      "Diese Allgemeinen Geschäftsbedingungen (nachfolgend «AGB») gelten für alle Verträge, Offerten, Lieferungen und Dienstleistungen der Amigos Maler GmbH (nachfolgend «Unternehmerin») im Bereich Maler-, Gipser-, Trockenbau-, Fassaden- und Renovationsarbeiten.",
      "Abweichende Vereinbarungen bedürfen zu ihrer Gültigkeit der ausdrücklichen schriftlichen Bestätigung durch die Unternehmerin. Soweit diese AGB keine besonderen Bestimmungen enthalten, gelten die einschlägigen Normen des Schweizerischen Werkvertragsrechts (Art. 363 ff. OR) sowie die SIA-Normen (insb. SIA 118 und SIA 257 «Malerarbeiten»)."
    ]
  },
  {
    title: "2. Offerten und Online-Kostenschätzungen",
    paragraphs: [
      "Über den Online-Rechner der Website generierte Beträge stellen unverbindliche Kostenschätzungen dar («YOUR PERSONAL ESTIMATED QUOTATION»). Sie basieren auf Richtwerten und den Angaben des Kunden. Ein rechtsgültiger Werkvertrag kommt erst nach einer Vor-Ort-Besichtigung, definitiver Detailofferte und schriftlicher Auftragsbestätigung bzw. Unterzeichnung zustande.",
      "Schriftliche Offerten der Amigos Maler GmbH sind, sofern nicht anders vermerkt, 30 Tage ab Ausstellungsdatum gültig."
    ]
  },
  {
    title: "3. Ausführung und Mitwirkungspflichten",
    paragraphs: [
      "Die Arbeiten werden fachgerecht und nach dem aktuellen Stand der Handwerkstechnik ausgeführt. Der Auftraggeber stellt sicher, dass die Arbeitsbereiche zum vereinbarten Termin zugänglich sind und notwendige Vorarbeiten (z.B. Strom- und Wasseranschluss, Baufreiheit) gewährleistet sind.",
      "Mehraufwände infolge unvorhersehbarer baulicher Gegebenheiten (z.B. versteckte Feuchtigkeitsschäden, instabile Altanstriche) werden dem Kunden nach vorheriger Rücksprache in Rechnung gestellt."
    ]
  },
  {
    title: "4. Preise, Zahlungsbedingungen und Gerichtsstand",
    paragraphs: [
      "Alle Preise verstehen sich in Schweizer Franken (CHF) inklusive oder exklusive der gesetzlichen Mehrwertsteuer, gemäss Kennzeichnung auf der Offerte. Rechnungen sind innert 30 Tagen netto ab Rechnungsdatum zahlbar.",
      "Anwendbar ist ausschliesslich materielles Schweizer Recht. Gerichtsstand für allfällige Streitigkeiten ist Olten, Schweiz."
    ]
  }
];

export default function Page() {
  return (
    <SharedPageShell>
      <LegalDocument eyebrow="Vertragsbedingungen" title="Allgemeine Geschäftsbedingungen (AGB)" sections={sections} />
    </SharedPageShell>
  );
}
