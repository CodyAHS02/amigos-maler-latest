"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
  {
    icon: "home",
    label: "Homeowners & private clients",
    title: <>Your Home.<br /><span>Our Passion.</span></>,
    description: "Individual painting, renovation and maintenance solutions for your home, with quality, style and personal advice.",
    image: "/assets/home/solutions-homeowners.png",
    imageAlt: "Warm modern living room with mountain views",
    href: "/services",
  },
  {
    icon: "building",
    label: "Property management",
    title: <>Reliable<br /><span>Property Care.</span></>,
    description: "Efficient maintenance, apartment turnovers and renovation services for property managers, delivered with reliability and care.",
    image: "/assets/home/solutions-property-management.png",
    imageAlt: "Contemporary apartment building with landscaped grounds",
    href: "/property-value-preservation",
  },
  {
    icon: "chart",
    label: "Professionals & investors",
    title: <>Building Quality.<br /><span>Preserving Value.</span></>,
    description: "Tailored renovation solutions for architects, construction companies, developers and investors, with expertise and long-term value in mind.",
    image: "/assets/home/solutions-investors.png",
    imageAlt: "Modern glass office building lit at blue hour",
    href: "/projects",
  },
];

function SlideIcon({ name }) {
  const paths = {
    home: <><path d="M3.5 10.5 12 3l8.5 7.5" /><path d="M5.5 9.5V20h13V9.5M9.5 20v-5h5v5" /></>,
    building: <><path d="M5 20V6l7-3 7 3v14M3 20h18M9 20v-5h6v5M9 9h.01M15 9h.01M9 12h.01M15 12h.01" /></>,
    chart: <><path d="M4 19V5M4 19h16" /><path d="m7 15 4-4 3 2 5-6" /><path d="M15 7h4v4" /></>,
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {paths[name]}
    </svg>
  );
}

export default function HomeSolutionsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStart = useRef(null);

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  const move = (direction) => {
    setActiveIndex((current) => (current + direction + slides.length) % slides.length);
  };

  const handlePointerDown = (event) => {
    touchStart.current = event.clientX;
  };

  const handlePointerUp = (event) => {
    if (touchStart.current === null) return;
    const distance = event.clientX - touchStart.current;
    if (Math.abs(distance) > 50) move(distance < 0 ? 1 : -1);
    touchStart.current = null;
  };

  return (
    <section className="home-solutions-carousel" id="audienceCardsSection" aria-labelledby="home-solutions-title">
      <div className="home-solutions-heading">
        <span>Who we serve</span>
        <h2 id="home-solutions-title">Solutions for <em>Every Property.</em></h2>
        <p>From private homes to managed properties and investment projects, we provide tailored painting, renovation and maintenance solutions.</p>
      </div>

      <div className="home-solutions-stage-wrap">
        <div
          className="home-solutions-stage"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => { touchStart.current = null; }}
        >
          <div className="home-solutions-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {slides.map((slide, index) => (
              <article className={`home-solutions-slide${index === activeIndex ? " is-active" : ""}`} key={slide.label} aria-hidden={index !== activeIndex}>
                <div className="home-solutions-copy">
                  <div className="home-solutions-icon"><SlideIcon name={slide.icon} /></div>
                  <p className="home-solutions-label">{slide.label}</p>
                  <h3>{slide.title}</h3>
                  <p className="home-solutions-description">{slide.description}</p>
                  <a id={`homeSolutionsExplore${index + 1}`} href={slide.href} tabIndex={index === activeIndex ? 0 : -1}>
                    Explore Solutions
                  </a>
                </div>
                <div className="home-solutions-media">
                  <img src={slide.image} alt={slide.imageAlt} loading={index === 0 ? "eager" : "lazy"} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="home-solutions-controls">
        <div className="home-solutions-dots" role="tablist" aria-label="Choose a solution">
          {slides.map((slide, index) => (
            <button
              key={slide.label}
              className={`home-solutions-dot${index === activeIndex ? " is-active" : ""}`}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Show ${slide.label}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <div className="home-solutions-progress" aria-hidden="true"><span style={{ width: `${((activeIndex + 1) / slides.length) * 100}%` }} /></div>
        <button className="home-solutions-pause" type="button" onClick={() => setIsPaused((paused) => !paused)} aria-label={isPaused ? "Resume automatic slides" : "Pause automatic slides"}>{isPaused ? "▶" : "Ⅱ"}</button>
      </div>
    </section>
  );
}
