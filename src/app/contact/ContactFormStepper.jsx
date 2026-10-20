"use client";

import { useState } from "react";
import styles from "./ContactPage.module.css";

function Icon({ name }) {
  const icons = {
    home: <><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9M9 20v-6h6v6" /></>,
    facade: <><path d="M4 20V7l8-4 8 4v13" /><path d="M8 20v-6h8v6M8 9h.01M12 9h.01M16 9h.01" /></>,
    wallpaper: <><path d="M5 4h14v16H5zM9 4v16M15 4v16" /><path d="M7 8h.01M11 12h.01M17 9h.01M8 16h.01" /></>,
    plaster: <><path d="m4 18 4-4 4-7 3 1-3 7-6 5Z" /><path d="m13 6 3-3 3 3-3 3Z" /></>,
    property: <><path d="M4 20V6l8-3 8 3v14M8 20v-5h8v5M8 9h.01M12 9h.01M16 9h.01" /></>,
    enquiry: <><path d="M4 5h16v11H8l-4 4V5Z" /><circle cx="9" cy="10.5" r=".7" fill="currentColor" /><circle cx="12" cy="10.5" r=".7" fill="currentColor" /><circle cx="15" cy="10.5" r=".7" fill="currentColor" /></>,
  };
  return <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[name]}</svg>;
}

const steps = [["Your Service", "What can we do for you?"], ["Project Details", "Tell us about your project"], ["Location", "Where is your property?"], ["Contact Information", "How can we reach you?"]];
const services = [
  ["Interior Painting", "home", "/external/interior-painting/photo-1482731215275-a1f151646268-w1200-q80.jpg"],
  ["Facade Painting", "facade", "/assets/facade/Facade-maintain.jpeg"],
  ["Wallpapering", "wallpaper", "/assets/wallpapers/wallpaper-1.jpg"],
  ["Plastering & Drywall", "plaster", "/assets/drywall/plastering.jpg"],
  ["Property Maintenance", "property", "/services-imags/property-value-hero.jpg"],
  ["General Enquiry", "enquiry", "/external/projects/photo-1600210492486-724fe5c67fb0-w1800-q90.jpg"],
];

export default function ContactFormStepper() {
  const [selectedService, setSelectedService] = useState(services[0][0]);
  const [currentStep, setCurrentStep] = useState(1);

  return <section className={styles.formSection} id="contact-form">
    <div className={styles.formPanel}>
      <aside className={styles.stepper} aria-label="Contact form progress">
        <div className={styles.stepLine} />
        {steps.map(([title, description], index) => { const step = index + 1; return <div className={`${styles.step} ${step === currentStep ? styles.activeStep : ""}`} key={title}>
          <span className={styles.stepNumber}>{step}</span><div><strong>{title}</strong><small>{description}</small></div>
        </div>; })}
      </aside>
      <div className={styles.formContent}>
        <p className={styles.formKicker}>STEP {currentStep} OF 4</p>
        <h2>What can we do for you?</h2><p className={styles.formIntro}>Select the service area where we can support you.</p>
        <div className={styles.serviceGrid}>{services.map(([label, icon, image]) => { const isSelected = selectedService === label; return <button className={`${styles.serviceCard} ${isSelected ? styles.selectedCard : ""}`} type="button" key={label} onClick={() => setSelectedService(label)} style={{ "--service-image": `url("${image}")` }} aria-pressed={isSelected}>
          <span className={styles.serviceIcon}><Icon name={icon} /></span><span className={styles.serviceLabel}>{label}</span><span className={styles.radio}>{isSelected ? "✓" : ""}</span>
        </button>; })}</div>
        <button className={styles.nextButton} type="button" onClick={() => setCurrentStep((step) => Math.min(step + 1, 4))}>Next Step <span>→</span></button>
      </div>
    </div>
  </section>;
}
