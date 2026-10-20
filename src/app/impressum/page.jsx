import LegalDocument from "@/components/LegalDocument";
import SharedPageShell from "@/components/SharedPageShell";

export const metadata = {
  title: "Impressum | Amigos Maler GmbH",
  description: "Rechtliche Angaben und Impressum der Amigos Maler GmbH in Olten, Schweiz."
};

const sections = [
  {
    title: "Angaben gemäss Schweizer Recht",
    content: <>
      <p><strong>Amigos Maler GmbH</strong><br />Industriestrasse 14<br />4600 Olten<br />Schweiz</p>
      <p><strong>Vertretungsberechtigte Person:</strong><br />Patricio Arias, Geschäftsführer</p>
      <p><strong>Kontakt:</strong><br />Telefon: <a href="tel:+41622129012">062 212 90 12</a><br />E-Mail: <a href="mailto:info@amigos-maler.ch">info@amigos-maler.ch</a><br />Webseite: <a href="https://amigos-maler.ch">www.amigos-maler.ch</a></p>
      <p><strong>Handelsregistereintrag:</strong><br />Eingetragener Firmenname: Amigos Maler GmbH<br />Handelsregisteramt: Kanton Solothurn<br />Unternehmens-Identifikationsnummer (UID): CHE-xxx.xxx.xxx</p>
      <p><strong>Mehrwertsteuernummer:</strong><br />CHE-xxx.xxx.xxx MWST</p>
    </>
  },
  {
    title: "Haftungsausschluss",
    content: <>
      <p>Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.</p>
      <p>Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.</p>
      <p>Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.</p>
    </>
  },
  {
    title: "Urheberrechte",
    content: <p>Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich der Firma Amigos Maler GmbH oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.</p>
  }
];

export default function Page() {
  return <SharedPageShell><LegalDocument eyebrow="Rechtliche Hinweise" title="Impressum" sections={sections} /></SharedPageShell>;
}
