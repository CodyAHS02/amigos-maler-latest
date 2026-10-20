"use client";

import styles from "./ContactPage.module.css";

function Icon({ name }) {
  const paths = {
    phone: <path d="M7.4 3.8 5.5 5.7a2 2 0 0 0-.4 2.2c1.8 4.3 5.2 7.7 9.5 9.5a2 2 0 0 0 2.2-.4l1.9-1.9-3.1-3.1-1.8 1.1a11.6 11.6 0 0 1-4.4-4.4l1.1-1.8-3.1-3.1Z" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    whatsapp: <><path d="M20 11.5a8.5 8.5 0 0 1-12.6 7.4L4 20l1.1-3.2A8.5 8.5 0 1 1 20 11.5Z" /><path d="M8.2 8.3c.2-.4.5-.4.8-.4h.6c.2 0 .4.1.5.4l.6 1.4c.1.3.1.5-.1.7l-.5.6c.6 1.2 1.5 2.1 2.7 2.7l.6-.5c.2-.2.4-.2.7-.1l1.4.6c.3.1.4.3.4.5v.6c0 .3 0 .6-.4.8-.4.2-1.4.4-2.8-.2-1.5-.6-3-2-3.9-3.2-.9-1.2-1.5-2.7-1.1-3.9Z" /></>,
    pin: <><path d="M19 10c0 5-7 10-7 10S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.2" /></>,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  };
  return <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

const contactItems = [
  { icon: "phone", label: "Call Us", value: "062 212 90 12", href: "tel:+41622129012" },
  { icon: "mail", label: "E-Mail", value: "info@amigos-maler.ch", href: "mailto:info@amigos-maler.ch" },
  { icon: "whatsapp", label: "WhatsApp", value: "Chat with us", href: "https://wa.me/41622129012" },
  { icon: "pin", label: "Location", value: "Olten & Surroundings" },
];

const badges = ["Personal", "Reliable", "Regional", "No obligation"];

export default function ContactHero() {
  return (
    <section className={styles.hero} data-hero>
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>GET IN TOUCH</p>
          <h1>Let&apos;s talk about<br />your <span>property.</span></h1>
          <p className={styles.heroText}>Tell us what you are planning. Whether it&apos;s painting work, renovations or long-term property maintenance &ndash; we will advise you personally and find the best solution together.</p>
          <div className={styles.heroActions}>
            <a className={`${styles.actionButton} ${styles.primaryAction}`} href="#contact-form"><span>Contact Form</span><span className={styles.actionArrow} aria-hidden="true">→</span></a>
            <a className={`${styles.actionButton} ${styles.secondaryAction}`} href="mailto:info@amigos-maler.ch"><span>Free Consultation</span><span className={styles.actionArrow} aria-hidden="true">→</span></a>
          </div>
          <div className={styles.contactGrid}>
            {contactItems.map((item) => <div className={styles.contactItem} key={item.label}>
              <span className={styles.contactIcon}><Icon name={item.icon} /></span>
              <strong>{item.label}</strong>
              {item.href ? <a href={item.href}>{item.value}</a> : <span>{item.value}</span>}
            </div>)}
          </div>
          <div className={styles.badges}>{badges.map((badge, index) => <span key={badge}><i className={`${styles.badgeDot} ${styles[`badge${index}`]}`}>✓</i>{badge}</span>)}</div>
        </div>
        <div className={styles.heroArtwork} role="img" aria-label="Colorful Amigos Maler contact artwork" />
      </div>
    </section>
  );
}
