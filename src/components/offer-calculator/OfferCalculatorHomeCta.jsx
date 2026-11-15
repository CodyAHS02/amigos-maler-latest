"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import styles from "./OfferCalculatorHomeCta.module.css";

const OfferCalculator = dynamic(() => import("./OfferCalculator"), {
  ssr: false,
  loading: () => null
});

export default function OfferCalculatorHomeCta() {
  const sectionRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldLoad(true);
        observer.disconnect();
      }
    }, { rootMargin: "800px 0px" });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="quote" className={`${styles.section} home-calculator-cta`}>
      {shouldLoad && <OfferCalculator embedded defaultFlow="SELECT" detailedQuoteHref="/offer-calculator" />}
    </section>
  );
}
