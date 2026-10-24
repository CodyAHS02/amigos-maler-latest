"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useAmigosAudio } from "@/lib/useAmigosAudio";
import styles from "./Header.module.css";

const serviceHoverGradients = [
  {
    background: "linear-gradient(135deg, rgba(246, 190, 16, .94), rgba(243, 145, 37, .94))",
    border: "rgba(246, 190, 16, .58)",
  },
  {
    background: "linear-gradient(135deg, rgba(199, 59, 142, .94), rgba(230, 36, 83, .94))",
    border: "rgba(199, 59, 142, .6)",
  },
  {
    background: "linear-gradient(135deg, rgba(230, 36, 83, .94), rgba(199, 59, 142, .94))",
    border: "rgba(230, 36, 83, .6)",
  },
  {
    background: "linear-gradient(135deg, rgba(243, 145, 37, .94), rgba(230, 36, 83, .94))",
    border: "rgba(243, 145, 37, .58)",
  },
];

const serviceCategories = [
  {
    id: "painting",
    label: "Painting & Finishes",
    title: "Painting & Finishes",
    description: "Interior, exterior and precision coating services for clean surfaces, durable protection and polished details.",
    cta: "Explore Painting Services",
    href: "/services",
    links: [
      {
        href: "/interior-painting",
        title: "Interior Painting",
        desc: "Walls, ceilings, doors and refined coatings",
      },
      {
        href: "/exterior-painting",
        title: "Exterior Painting",
        desc: "Facades, woodwork and weather protection",
      },
      {
        href: "/spray-painting",
        title: "Spray Painting",
        desc: "Doors, frames, shutters and precision parts",
      },
      {
        href: "/color-and-material",
        title: "Color & Material Consultation",
        desc: "Color concepts and suitable coating systems",
      },
    ],
  },
  {
    id: "renovation",
    label: "Renovation & Repair",
    title: "Renovation & Repair",
    description: "Surface repairs, plastering, drywall and renovation work for apartments, rooms and building elements.",
    cta: "Explore Renovation Services",
    href: "/appartment-renovation",
    links: [
      {
        href: "/appartment-renovation",
        title: "Apartment Renovation",
        desc: "Tenant changes, sales preparation and updates",
      },
      {
        href: "/Plastering",
        title: "Plastering Work",
        desc: "Filling, smoothing and surface preparation",
      },
      {
        href: "/Drywall",
        title: "Drywall Construction",
        desc: "Walls, ceilings and custom room solutions",
      },
      {
        href: "/Facade-Renovation",
        title: "Facade Renovation",
        desc: "Protection, repair and exterior redesign",
      },
    ],
  },
  {
    id: "care",
    label: "Property Care",
    title: "Property Care",
    description: "Maintenance, damage response and value-preservation services for homes, villas and managed properties.",
    cta: "Explore Property Care",
    href: "/property-value-preservation",
    links: [
      {
        href: "/property-value-preservation",
        title: "Property Value Preservation",
        desc: "Maintenance plans and long-term care concepts",
      },
      {
        href: "/mold",
        title: "Mold Remediation",
        desc: "Analysis, removal and durable prevention",
      },
      {
        href: "/water-damage",
        title: "Water Damage",
        desc: "Drying coordination and surface restoration",
      },
      {
        href: "/schadensservice",
        title: "Schadensservice",
        desc: "Fast support for damage cases and restoration work",
      },
    ],
  },
];

const imageHeroPaths = new Set([
  "/",
  "/about",
  "/appartment-renovation",
  "/color-and-material",
  "/Drywall",
  "/exterior-painting",
  "/Facade-Renovation",
  "/interior-painting",
  "/mold",
  "/molding",
  "/Plastering",
  "/projects",
  "/services",
  "/spray-painting",
  "/water-damage",
]);

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isProjects = pathname === "/projects";
  const hasImageHero = imageHeroPaths.has(pathname);
  const [isCustomerLoggedIn, setIsCustomerLoggedIn] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [activeServiceCategory, setActiveServiceCategory] = useState(serviceCategories[0].id);
  const { isPlaying: isAudioPlaying, toggleSound } = useAmigosAudio();
  const lastHoverVariants = useRef(new WeakMap());
  const activeServiceGroup =
    serviceCategories.find((category) => category.id === activeServiceCategory) || serviceCategories[0];

  useEffect(() => {
    if (isHome) return undefined;

    const header = document.getElementById("siteHeader");
    if (!header) return;
    const hero = document.querySelector("[data-hero]");

    const updateHeaderState = () => {
      const heroHasPassed = hero
        ? hero.getBoundingClientRect().bottom <= header.offsetHeight
        : window.scrollY > 20;

      header.classList.toggle("is-scrolled", heroHasPassed);
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    return () => window.removeEventListener("scroll", updateHeaderState);
  }, [isHome]);

  useEffect(() => {
    let active = true;

    fetch("/api/customer/me", { cache: "no-store" })
      .then((response) => {
        if (active) setIsCustomerLoggedIn(response.ok);
      })
      .catch(() => {
        if (active) setIsCustomerLoggedIn(false);
      });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("amigos-theme");
    const shouldUseDarkTheme = savedTheme === "amigos-dark";

    document.documentElement.dataset.theme = shouldUseDarkTheme ? "amigos-dark" : "amigos-light";
    const frame = window.requestAnimationFrame(() => setIsDarkTheme(shouldUseDarkTheme));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme((currentTheme) => {
      const nextTheme = !currentTheme;
      const themeName = nextTheme ? "amigos-dark" : "amigos-light";

      document.documentElement.dataset.theme = themeName;
      window.localStorage.setItem("amigos-theme", themeName);

      return nextTheme;
    });
  };

  const setRandomServiceHover = (event) => {
    const item = event.currentTarget;
    const previousVariant = lastHoverVariants.current.get(item);
    let nextVariant = Math.floor(Math.random() * serviceHoverGradients.length);

    if (serviceHoverGradients.length > 1) {
      while (nextVariant === previousVariant) {
        nextVariant = Math.floor(Math.random() * serviceHoverGradients.length);
      }
    }

    lastHoverVariants.current.set(item, nextVariant);
    item.style.setProperty("--dropdown-hover-bg", serviceHoverGradients[nextVariant].background);
    item.style.setProperty("--dropdown-hover-border", serviceHoverGradients[nextVariant].border);
  };

  return (
      <header className={`site-header${isHome ? " home-initial" : ""}${isAbout ? " about-header" : ""}${hasImageHero ? " image-hero-header" : ""}`} id="siteHeader">
      <a className={`logo ${styles.logoLink}`} href="/" aria-label="Amigos Maler home">
        <span className={styles.logoSymbol} aria-hidden="true">
          <img src="/logo.webp" alt="" />
        </span>
        <span className={styles.logoWordmark}>
          <strong>AMIGOS MALER</strong>
          <small>KOMPETENZ VERBINDET</small>
        </span>
      </a>

      <nav className="site-nav">
        <a href="/" data-page="home">
          Home
        </a>
        <a href="/about" data-page="about">
          About
        </a>

        <div className="nav-dropdown">
          <a href="/services" className="dropdown-trigger">
            Services
            <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <div className="dropdown-menu services-mega-menu">
            <aside className="services-mega-sidebar" aria-label="Service categories">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  className={`services-mega-tab${activeServiceGroup.id === category.id ? " is-active" : ""}`}
                  onClick={() => setActiveServiceCategory(category.id)}
                  onMouseEnter={() => setActiveServiceCategory(category.id)}
                >
                  {category.label}
                </button>
              ))}
              <a className="services-mega-cta" href={activeServiceGroup.href}>
                <span>{activeServiceGroup.cta}</span>
                <i aria-hidden="true">↗</i>
              </a>
            </aside>

            <div className="services-mega-content">
              <div className="services-mega-intro">
                <strong>{activeServiceGroup.title}</strong>
                <span>{activeServiceGroup.description}</span>
              </div>

              <div className="services-mega-grid">
                {activeServiceGroup.links.map((service, index) => (
                  <a key={service.href} href={service.href} className="dropdown-item" onMouseEnter={setRandomServiceHover}>
                    <span className="item-num">{String(index + 1).padStart(2, "0")}</span>
                    <div className="item-info">
                      <span className="item-title">{service.title}</span>
                      <span className="item-desc">{service.desc}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <a href="/schadensservice" data-page="schadensservice">
          Schadensservice
        </a>

        <a href="/projects" data-page="projects">
          Projects
        </a>
        <a href="/partners" data-page="partners">
          Partners
        </a>
        <a href="/contact" data-page="contact">
          Contact
        </a>
      </nav>

      <div className="header-actions">
        <a
          href={isCustomerLoggedIn ? "/customer/dashboard" : "/customer/login"}
          className="customer-header-btn"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <path
              d="M20 21a8 8 0 1 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {isCustomerLoggedIn ? "Customer Portal" : "Customer Login"}
        </a>

        <a href="/#quote" className="header-btn">
          Request A Quote
        </a>
      </div>

      <div className="header-toggle-group">
        <button
          className={`sound-toggle${isAudioPlaying ? " is-playing" : ""}`}
          type="button"
          aria-label={isAudioPlaying ? "Musik stummschalten" : "Musik abspielen"}
          aria-pressed={isAudioPlaying}
          title={isAudioPlaying ? "Musik an: Smooth Lounge Jazz" : "Musik aus"}
          onClick={toggleSound}
        >
          <span className="sound-toggle-icon" aria-hidden="true">
            {isAudioPlaying ? (
              <span className="sound-bars">
                <span className="sound-bar bar-1"></span>
                <span className="sound-bar bar-2"></span>
                <span className="sound-bar bar-3"></span>
              </span>
            ) : (
              <svg className="sound-icon sound-icon-muted" viewBox="0 0 24 24" fill="none">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                <line x1="22" y1="9" x2="16" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="16" y1="9" x2="22" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </span>
        </button>

        <button
          className="theme-toggle"
          type="button"
          aria-label={`Switch to ${isDarkTheme ? "light" : "navy"} theme`}
          aria-pressed={isDarkTheme}
          onClick={toggleTheme}
        >
          <span className="theme-toggle-icon" aria-hidden="true">
            {isDarkTheme ? (
              <svg className="theme-icon theme-icon-moon" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20.2 14.2A7.6 7.6 0 0 1 9.8 3.8 8.5 8.5 0 1 0 20.2 14.2Z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <svg className="theme-icon theme-icon-sun" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="4.2" fill="currentColor" />
                <path
                  d="M12 2.8v2.4M12 18.8v2.4M21.2 12h-2.4M5.2 12H2.8M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7M18.5 18.5l-1.7-1.7M7.2 7.2 5.5 5.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </span>
        </button>
      </div>

      <button className="hamburger" aria-label="Toggle menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
