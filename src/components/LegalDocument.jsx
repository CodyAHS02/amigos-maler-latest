import styles from "./LegalDocument.module.css";

export default function LegalDocument({ eyebrow, title, sections }) {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <span className={styles.kicker}>{eyebrow}</span>
        <h1>{title}</h1>
        <div className={styles.sections}>
          {sections.map((section) => (
              <section className={styles.card} key={section.title}>
                <h2>{section.title}</h2>
                {section.content ?? section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
          ))}
        </div>
      </div>
    </main>
  );
}
