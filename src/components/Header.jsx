"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useAmigosAudio } from "@/lib/useAmigosAudio";
import ServicesMegaMenu from "./ServicesMegaMenu";
import styles from "./Header.module.css";

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

const servicePaths = new Set([
  "/services",
  "/appartment-renovation",
  "/color-and-material",
  "/Drywall",
  "/exterior-painting",
  "/Facade-Renovation",
  "/interior-painting",
  "/mold",
  "/molding",
  "/Plastering",
  "/spray-painting",
  "/water-damage",
]);

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isProjects = pathname === "/projects";
  const isDamageService = pathname === "/schadensservice";
  const hasImageHero = imageHeroPaths.has(pathname);
  const isServicesPage = servicePaths.has(pathname);
  const isActive = (href) => pathname === href;
  const [isCustomerLoggedIn, setIsCustomerLoggedIn] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const { isPlaying: isAudioPlaying, toggleSound } = useAmigosAudio();

  useEffect(() => {
    if (isHome) return undefined;

    const header = document.getElementById("siteHeader");
    if (!header) return;
    if (isProjects) {
      header.classList.remove("is-scrolled");
      return undefined;
    }
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
  }, [isHome, isProjects]);

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

  return (
      <header className={`site-header${isHome ? " home-initial" : ""}${isAbout || isProjects ? " about-header" : ""}${isDamageService ? " damage-service-header" : ""}${hasImageHero ? " image-hero-header" : ""}`} id="siteHeader">
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
        <a href="/" data-page="home" className={isActive("/") ? "is-active" : undefined} aria-current={isActive("/") ? "page" : undefined}>
          Home
        </a>
        <a href="/about" data-page="about" className={isActive("/about") ? "is-active" : undefined} aria-current={isActive("/about") ? "page" : undefined}>
          About
        </a>

        <div className="nav-dropdown">
          <a href="/services" className={`dropdown-trigger${isServicesPage ? " is-active" : ""}`} aria-current={isServicesPage ? "page" : undefined}>
            Services
          </a>
          <ServicesMegaMenu isDark={isDarkTheme} />
        </div>

        <a href="/schadensservice" data-page="schadensservice" className={isActive("/schadensservice") ? "is-active" : undefined} aria-current={isActive("/schadensservice") ? "page" : undefined}>
          Schadensservice
        </a>

        <a href="/projects" data-page="projects" className={isActive("/projects") ? "is-active" : undefined} aria-current={isActive("/projects") ? "page" : undefined}>
          Projects
        </a>
        <a href="/partners" data-page="partners" className={isActive("/partners") ? "is-active" : undefined} aria-current={isActive("/partners") ? "page" : undefined}>
          Partners
        </a>
        <a href="/contact" data-page="contact" className={isActive("/contact") ? "is-active" : undefined} aria-current={isActive("/contact") ? "page" : undefined}>
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
