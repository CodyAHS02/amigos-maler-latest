import OfferCalculator from "./OfferCalculator";
import styles from "./OfferCalculatorHomeCta.module.css";

export default function OfferCalculatorHomeCta() {
  return (
    <section id="quote" className={`${styles.section} home-calculator-cta`}>
      <OfferCalculator embedded defaultFlow="SELECT" detailedQuoteHref="/offer-calculator" />
    </section>
  );
}
