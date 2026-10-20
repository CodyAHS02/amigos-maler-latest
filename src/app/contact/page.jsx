import SharedPageShell from "@/components/SharedPageShell";
import ContactHero from "./ContactHero";
import ContactFormStepper from "./ContactFormStepper";
import styles from "./ContactPage.module.css";

export const metadata = {
  title: "Contact | Amigos Maler GmbH",
  description: "Contact Amigos Maler GmbH in Olten for painting, plastering, renovation and property maintenance projects.",
};

export default function Page() {
  return (
    <SharedPageShell>
      <main className={styles.contactPage}>
        <ContactHero />
        <ContactFormStepper />
      </main>
    </SharedPageShell>
  );
}
