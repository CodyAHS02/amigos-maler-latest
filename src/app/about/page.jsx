import AssetPageShell from "@/components/AssetPageShell";
import AboutRedesign from "./AboutRedesign";

export const metadata = {
  title: "About | Amigos Maler"
};

const forcedAboutDarkThemeCss = `
html[data-theme="amigos-dark"] body[data-page="about"],
html[data-theme="amigos-dark"] body {
  --about-logo-gradient: linear-gradient(120deg, #FFD21F 0%, #FF7A1A 44%, #E62453 100%);
}
html[data-theme="amigos-dark"] body .numbers-section.numbers-section,
html[data-theme="amigos-dark"] body .values-section.values-section,
html[data-theme="amigos-dark"] body .final-cta.final-cta,
html[data-theme="amigos-dark"] body[data-page="about"] .numbers-section,
html[data-theme="amigos-dark"] body[data-page="about"] .values-section,
html[data-theme="amigos-dark"] body[data-page="about"] .final-cta {
  background:
    var(--about-logo-gradient) !important;
  background-size: 320% 320% !important;
  animation: aboutMovingGradient 12s ease-in-out infinite !important;
}
html[data-theme="amigos-dark"] body .values-section.values-section .value-row,
html[data-theme="amigos-dark"] body[data-page="about"] .values-section .value-row {
  background: var(--about-logo-gradient) !important;
  background-size: 320% 320% !important;
  animation: aboutMovingGradient 10s ease-in-out infinite !important;
  padding-left: clamp(52px, 4vw, 82px) !important;
  padding-right: clamp(34px, 3vw, 64px) !important;
  border-color: rgba(255, 255, 255, .42) !important;
}
html[data-theme="amigos-dark"] body .values-section.values-section .value-icon::before,
html[data-theme="amigos-dark"] body .values-section.values-section .value-icon::after,
html[data-theme="amigos-dark"] body[data-page="about"] .values-section .value-icon::before,
html[data-theme="amigos-dark"] body[data-page="about"] .values-section .value-icon::after {
  background: #fff !important;
}
html[data-theme="amigos-dark"] body .numbers-section.numbers-section *,
html[data-theme="amigos-dark"] body .values-section.values-section *,
html[data-theme="amigos-dark"] body .final-cta.final-cta *,
html[data-theme="amigos-dark"] body[data-page="about"] .numbers-section *,
html[data-theme="amigos-dark"] body[data-page="about"] .values-section *,
html[data-theme="amigos-dark"] body[data-page="about"] .final-cta * {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}
html[data-theme="amigos-dark"] body .final-cta.final-cta .btn,
html[data-theme="amigos-dark"] body .final-cta.final-cta .btn-light,
html[data-theme="amigos-dark"] body[data-page="about"] .final-cta .btn,
html[data-theme="amigos-dark"] body[data-page="about"] .final-cta .btn-light {
  background: #fff !important;
  border-color: #fff !important;
  color: #050505 !important;
  -webkit-text-fill-color: #050505 !important;
}

/* Dark theme surfaces stay navy; the logo gradient remains an accent, not the whole background. */
html[data-theme="amigos-dark"] body main > .values-section,
html[data-theme="amigos-dark"] body[data-page="about"] main > .values-section {
  background:
    radial-gradient(circle at 86% 8%, rgba(230, 36, 83, .16), transparent 32%),
    linear-gradient(145deg, #071a33 0%, #0d2542 58%, #071a33 100%) !important;
  background-size: 100% 100% !important;
  animation: none !important;
}
html[data-theme="amigos-dark"] body main > .values-section .value-row,
html[data-theme="amigos-dark"] body[data-page="about"] main > .values-section .value-row {
  background: rgba(255, 255, 255, .045) !important;
  border-color: rgba(255, 255, 255, .18) !important;
  transition: background .35s ease, border-color .35s ease, transform .35s ease !important;
}
html[data-theme="amigos-dark"] body main > .values-section .value-row:hover,
html[data-theme="amigos-dark"] body main > .values-section .value-row.is-selected {
  background: linear-gradient(90deg, rgba(246, 190, 16, .16), rgba(230, 36, 83, .14), transparent) !important;
  border-color: rgba(246, 190, 16, .58) !important;
}

/* Numbers: navy section surface with separate gradient panels. */
html[data-theme="amigos-dark"] body main > .numbers-section,
html[data-theme="amigos-dark"] body[data-page="about"] main > .numbers-section {
  background: #061629 !important;
  background-image: radial-gradient(circle at 82% 8%, rgba(26, 77, 120, .28), transparent 34%) !important;
  animation: none !important;
}
html[data-theme="amigos-dark"] body main > .numbers-section .number-item,
html[data-theme="amigos-dark"] body[data-page="about"] main > .numbers-section .number-item {
  background: linear-gradient(135deg, #143b60 0%, #0d2947 48%, #1a4266 100%) !important;
  background-size: 220% 220% !important;
  border-color: rgba(255, 255, 255, .16) !important;
  animation: aboutMovingGradient 10s ease-in-out infinite !important;
}
html[data-theme="amigos-dark"] body main > .numbers-section .number-item:hover,
html[data-theme="amigos-dark"] body[data-page="about"] main > .numbers-section .number-item:hover {
  background: linear-gradient(135deg, #1b4d77 0%, #113250 48%, #24577e 100%) !important;
  background-size: 220% 220% !important;
}

/* Final page-scoped lock: Numbers keeps the navy treatment in both themes. */
html body[data-page="about"] main > .numbers-section,
html body main > .numbers-section {
  background: #061629 !important;
  background-image: radial-gradient(circle at 82% 8%, rgba(26, 77, 120, .28), transparent 34%) !important;
  background-size: 100% 100% !important;
  animation: none !important;
}
html body[data-page="about"] main > .numbers-section .number-item,
html body main > .numbers-section .number-item {
  background: linear-gradient(135deg, #143b60 0%, #0d2947 48%, #1a4266 100%) !important;
  background-size: 220% 220% !important;
  border-color: rgba(255, 255, 255, .16) !important;
  animation: aboutMovingGradient 10s ease-in-out infinite !important;
}
html body[data-page="about"] main > .numbers-section .number-item > strong,
html body[data-page="about"] main > .numbers-section .number-item > span,
html body main > .numbers-section .number-item > strong,
html body main > .numbers-section .number-item > span {
  background-image: linear-gradient(105deg, #f6be10 0%, #f39125 44%, #e62453 100%) !important;
  background-size: 220% 220% !important;
  background-clip: text !important;
  -webkit-background-clip: text !important;
  color: transparent !important;
  -webkit-text-fill-color: transparent !important;
  animation: aboutMovingGradient 10s ease-in-out infinite !important;
}
html body[data-page="about"] main > .numbers-section .number-item::before,
html body main > .numbers-section .number-item::before {
  content: none !important;
  display: none !important;
  width: 0 !important;
  opacity: 0 !important;
  background: none !important;
}

/* Light theme: gradient cards with white Numbers copy. */
html:not([data-theme="amigos-dark"]) body[data-page="about"] main > .numbers-section .number-item,
html[data-theme="amigos-light"] body[data-page="about"] main > .numbers-section .number-item {
  background: linear-gradient(105deg, #f6be10 0%, #f39125 44%, #e62453 100%) !important;
  background-size: 220% 220% !important;
  animation: aboutMovingGradient 10s ease-in-out infinite !important;
}
html:not([data-theme="amigos-dark"]) body[data-page="about"] main > .numbers-section .number-item > strong,
html:not([data-theme="amigos-dark"]) body[data-page="about"] main > .numbers-section .number-item > span,
html[data-theme="amigos-light"] body[data-page="about"] main > .numbers-section .number-item > strong,
html[data-theme="amigos-light"] body[data-page="about"] main > .numbers-section .number-item > span {
  background-image: none !important;
  background-clip: border-box !important;
  -webkit-background-clip: border-box !important;
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
  animation: none !important;
}

/* Values section: keep the surface navy in both themes. */
html body[data-page="about"] main > .values-section,
html body main > .values-section {
  background:
    radial-gradient(circle at 86% 8%, rgba(26, 77, 120, .28), transparent 34%),
    linear-gradient(145deg, #061629 0%, #0b213b 58%, #061629 100%) !important;
  background-size: 100% 100% !important;
  animation: none !important;
}
html body[data-page="about"] main > .values-section .value-row,
html body main > .values-section .value-row {
  background: linear-gradient(105deg, #f6be10 0%, #f39125 44%, #e62453 100%) !important;
  background-size: 320% 320% !important;
  border-color: rgba(255, 255, 255, .18) !important;
  animation: aboutMovingGradient 10s ease-in-out infinite !important;
}
html body[data-page="about"] main > .values-section .value-row > *,
html body main > .values-section .value-row > * {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

/* Keep the five-step timeline compact; the global readability floor must not stretch it. */
html[data-theme="amigos-dark"] body main > .process-section .process-track .process-step,
html[data-theme="amigos-dark"] body[data-page="about"] main > .process-section .process-track .process-step {
  padding: 84px 20px 0 0 !important;
  min-height: 0 !important;
}
html[data-theme="amigos-dark"] body main > .process-section .process-track .process-step h3,
html[data-theme="amigos-dark"] body[data-page="about"] main > .process-section .process-track .process-step h3 {
  margin-bottom: 12px !important;
  font-size: 17px !important;
  line-height: 1.25 !important;
}
html[data-theme="amigos-dark"] body main > .process-section .process-track .process-step p,
html[data-theme="amigos-dark"] body[data-page="about"] main > .process-section .process-track .process-step p {
  font-size: 13.5px !important;
  line-height: 1.55 !important;
}

`;

const forcedAboutSecondaryButtonCss = `
@keyframes aboutSecondaryButtonBorderFlow {
  0% { background-position: 0% 50%, 0% 50%; }
  50% { background-position: 100% 50%, 100% 50%; }
  100% { background-position: 0% 50%, 0% 50%; }
}

html body[data-page="about"] main .about-hero .hero-actions > a.btn.btn-ghost,
html[data-theme="amigos-dark"] body[data-page="about"] main .about-hero .hero-actions > a.btn.btn-ghost {
  position: relative !important;
  z-index: 1 !important;
  isolation: isolate !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  min-height: 58px !important;
  padding: 16px 30px !important;
  border: 1.5px solid transparent !important;
  border-radius: 999px !important;
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  overflow: visible !important;
  color: #071a33 !important;
  -webkit-text-fill-color: #071a33 !important;
  box-shadow: none !important;
}

html body[data-page="about"] main .about-hero .hero-actions > a.btn.btn-ghost:hover,
html[data-theme="amigos-dark"] body[data-page="about"] main .about-hero .hero-actions > a.btn.btn-ghost:hover {
  background: linear-gradient(105deg, #f6be10 0%, #f39125 44%, #e62453 100%) !important;
  background-image: linear-gradient(105deg, #f6be10 0%, #f39125 44%, #e62453 100%) !important;
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
  box-shadow: none !important;
}

/* Final About hero lock: target the process link itself so broad CTA rules cannot repaint it. */
html body main .about-hero.about-hero .hero-actions.hero-actions > a.btn[href="#process"],
html body main .about-hero.about-hero .hero-actions.hero-actions > a.btn[href="#process"]:visited {
  position: relative !important;
  z-index: 1 !important;
  isolation: isolate !important;
  display: inline-flex !important;
  flex-direction: row !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 8px !important;
  min-height: 58px !important;
  height: auto !important;
  padding: 16px 30px 16px 72px !important;
  margin: 0 !important;
  line-height: 1 !important;
  white-space: nowrap !important;
  transform: none !important;
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  border: 0 !important;
  outline: 0 !important;
  border-radius: 999px !important;
  overflow: hidden !important;
  transition: background .25s ease, color .25s ease !important;
  color: #071a33 !important;
  -webkit-text-fill-color: #071a33 !important;
  box-shadow: none !important;
}

/* White circle badge (matches the Our Story button). */
html body main .about-hero.about-hero .hero-actions.hero-actions > a.btn[href="#process"]::before {
  content: "" !important;
  display: block !important;
  position: absolute !important;
  inset: auto auto auto 10px !important;
  top: 50% !important;
  left: 10px !important;
  z-index: 0 !important;
  width: 40px !important;
  height: 40px !important;
  margin: 0 !important;
  padding: 0 !important;
  border: 0 !important;
  border-radius: 50% !important;
  background: #ffffff !important;
  background-image: none !important;
  opacity: 1 !important;
  box-shadow: 0 8px 18px rgba(7, 26, 51, .16) !important;
  transform: translateY(-50%) !important;
  transition: transform .25s ease !important;
  -webkit-mask: none !important;
  mask: none !important;
  animation: none !important;
  pointer-events: none !important;
}

/* Arrow inside the circle. */
html body main .about-hero.about-hero .hero-actions.hero-actions > a.btn[href="#process"]::after {
  content: "\\2192" !important;
  display: block !important;
  position: absolute !important;
  inset: auto auto auto 22px !important;
  top: 50% !important;
  left: 22px !important;
  z-index: 1 !important;
  width: auto !important;
  height: auto !important;
  margin: 0 !important;
  padding: 0 !important;
  border: 0 !important;
  background: transparent !important;
  color: #071a33 !important;
  -webkit-text-fill-color: #071a33 !important;
  font-family: "themeFont", Arial, sans-serif !important;
  font-size: 22px !important;
  font-weight: 900 !important;
  line-height: 1 !important;
  opacity: 1 !important;
  transform: translateY(-52%) !important;
  transition: transform .25s ease !important;
  -webkit-mask: none !important;
  mask: none !important;
  animation: none !important;
  pointer-events: none !important;
}

/* Hover: badge + arrow nudge right. */
html body main .about-hero.about-hero .hero-actions.hero-actions > a.btn[href="#process"]:hover::before,
html body main .about-hero.about-hero .hero-actions.hero-actions > a.btn[href="#process"]:focus-visible::before {
  transform: translate(6px, -50%) !important;
}

html body main .about-hero.about-hero .hero-actions.hero-actions > a.btn[href="#process"]:hover::after,
html body main .about-hero.about-hero .hero-actions.hero-actions > a.btn[href="#process"]:focus-visible::after {
  transform: translate(6px, -52%) !important;
}

html body main .about-hero.about-hero .hero-actions.hero-actions > a.btn[href="#process"]:hover,
html body main .about-hero.about-hero .hero-actions.hero-actions > a.btn[href="#process"]:focus-visible {
  background: linear-gradient(105deg, #f6be10 0%, #f39125 44%, #e62453 100%) !important;
  background-image: linear-gradient(105deg, #f6be10 0%, #f39125 44%, #e62453 100%) !important;
  background-color: transparent !important;
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
  box-shadow: none !important;
}

/* ===== Final CTA: "Free Consultation" = SECONDARY button (see .agents/rules/button-styles.md) ===== */
html body main .final-cta.final-cta .hero-actions.hero-actions > a.btn.btn-ghost[href],
html body main .final-cta.final-cta .hero-actions.hero-actions > a.btn.btn-ghost[href]:visited {
  position: relative !important;
  isolation: isolate !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 12px !important;
  min-height: 58px !important;
  padding: 16px 30px 16px 72px !important;
  border: 0 !important;
  outline: 0 !important;
  border-radius: 999px !important;
  overflow: hidden !important;
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  color: #071a33 !important;
  -webkit-text-fill-color: #071a33 !important;
  font-weight: 800 !important;
  line-height: 1.1 !important;
  text-decoration: none !important;
  box-shadow: none !important;
  transform: none !important;
  transition: background .25s ease, color .25s ease !important;
}

html body main .final-cta.final-cta .hero-actions.hero-actions > a.btn.btn-ghost[href]::before {
  content: "" !important;
  display: block !important;
  position: absolute !important;
  inset: auto auto auto 10px !important;
  top: 50% !important;
  left: 10px !important;
  z-index: 0 !important;
  width: 40px !important;
  height: 40px !important;
  margin: 0 !important;
  padding: 0 !important;
  border: 0 !important;
  border-radius: 50% !important;
  background: #ffffff !important;
  background-image: none !important;
  opacity: 1 !important;
  box-shadow: 0 8px 18px rgba(7, 26, 51, .16) !important;
  transform: translateY(-50%) !important;
  transition: transform .25s ease !important;
  -webkit-mask: none !important;
  mask: none !important;
  animation: none !important;
  pointer-events: none !important;
}

html body main .final-cta.final-cta .hero-actions.hero-actions > a.btn.btn-ghost[href]::after {
  content: "\\2192" !important;
  display: block !important;
  position: absolute !important;
  inset: auto auto auto 22px !important;
  top: 50% !important;
  left: 22px !important;
  z-index: 1 !important;
  width: auto !important;
  height: auto !important;
  margin: 0 !important;
  padding: 0 !important;
  border: 0 !important;
  background: transparent !important;
  color: #071a33 !important;
  -webkit-text-fill-color: #071a33 !important;
  font-size: 22px !important;
  font-weight: 900 !important;
  line-height: 1 !important;
  opacity: 1 !important;
  transform: translateY(-52%) !important;
  transition: transform .25s ease !important;
  -webkit-mask: none !important;
  mask: none !important;
  animation: none !important;
  pointer-events: none !important;
}

html body main .final-cta.final-cta .hero-actions.hero-actions > a.btn.btn-ghost[href]:hover,
html body main .final-cta.final-cta .hero-actions.hero-actions > a.btn.btn-ghost[href]:focus-visible {
  background: linear-gradient(105deg, #f6be10 0%, #f39125 44%, #e62453 100%) !important;
  background-image: linear-gradient(105deg, #f6be10 0%, #f39125 44%, #e62453 100%) !important;
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
  transform: none !important;
  box-shadow: none !important;
}

html body main .final-cta.final-cta .hero-actions.hero-actions > a.btn.btn-ghost[href]:hover::before,
html body main .final-cta.final-cta .hero-actions.hero-actions > a.btn.btn-ghost[href]:focus-visible::before {
  transform: translate(6px, -50%) !important;
}

html body main .final-cta.final-cta .hero-actions.hero-actions > a.btn.btn-ghost[href]:hover::after,
html body main .final-cta.final-cta .hero-actions.hero-actions > a.btn.btn-ghost[href]:focus-visible::after {
  transform: translate(6px, -52%) !important;
}

/* Dark theme: final CTA sits on the brand gradient, so secondary text goes white. */
html[data-theme="amigos-dark"] body main .final-cta.final-cta .hero-actions.hero-actions > a.btn.btn-ghost[href] {
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
}

html[data-theme="amigos-dark"] body main .final-cta.final-cta .hero-actions.hero-actions > a.btn.btn-ghost[href]:hover,
html[data-theme="amigos-dark"] body main .final-cta.final-cta .hero-actions.hero-actions > a.btn.btn-ghost[href]:focus-visible {
  background: rgba(255, 255, 255, .16) !important;
  background-image: none !important;
}

/* Keep the About hero CTA readable when the global button hover pass runs. */
html[data-theme="amigos-dark"] body[data-page="about"] main #aboutHeroStoryCta:hover,
html[data-theme="amigos-dark"] body[data-page="about"] main #aboutHeroStoryCta:focus-visible {
  background: #fff !important;
  background-image: none !important;
  color: #050505 !important;
  -webkit-text-fill-color: #050505 !important;
}

html[data-theme="amigos-dark"] body[data-page="about"] main #aboutHeroStoryCta:hover::before,
html[data-theme="amigos-dark"] body[data-page="about"] main #aboutHeroStoryCta:focus-visible::before {
  background: #071a33 !important;
  color: #fff !important;
}

html[data-theme="amigos-dark"] body[data-page="about"] main #aboutHeroStoryCta:hover::after,
html[data-theme="amigos-dark"] body[data-page="about"] main #aboutHeroStoryCta:focus-visible::after {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

/* Apply the same dark-theme hover treatment to every full-size About CTA. */
html[data-theme="amigos-dark"] body[data-page="about"] main#aboutPage :is(
  a[class*="gradientButton"],
  a[class*="primaryButton"],
  a[class*="secondaryButton"]
):hover,
html[data-theme="amigos-dark"] body[data-page="about"] main#aboutPage :is(
  a[class*="gradientButton"],
  a[class*="primaryButton"],
  a[class*="secondaryButton"]
):focus-visible {
  background: #fff !important;
  background-image: none !important;
  border-color: #fff !important;
  color: #050505 !important;
  -webkit-text-fill-color: #050505 !important;
}

html[data-theme="amigos-dark"] body[data-page="about"] main#aboutPage :is(
  a[class*="gradientButton"],
  a[class*="primaryButton"],
  a[class*="secondaryButton"]
):hover::before,
html[data-theme="amigos-dark"] body[data-page="about"] main#aboutPage :is(
  a[class*="gradientButton"],
  a[class*="primaryButton"],
  a[class*="secondaryButton"]
):focus-visible::before {
  background: #071a33 !important;
  color: #fff !important;
}

html[data-theme="amigos-dark"] body[data-page="about"] main#aboutPage :is(
  a[class*="gradientButton"],
  a[class*="primaryButton"],
  a[class*="secondaryButton"]
):hover::after,
html[data-theme="amigos-dark"] body[data-page="about"] main#aboutPage :is(
  a[class*="gradientButton"],
  a[class*="primaryButton"],
  a[class*="secondaryButton"]
):focus-visible::after {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

html[data-theme="amigos-dark"] body[data-page="about"] main#aboutPage a.founder-cta-btn:hover,
html[data-theme="amigos-dark"] body[data-page="about"] main#aboutPage a.founder-cta-btn:focus-visible {
  background: #fff !important;
  background-image: none !important;
  color: #050505 !important;
  -webkit-text-fill-color: #050505 !important;
}

html body[data-page="about"] main#aboutPage a.founder-cta-btn::before,
html body[data-page="about"] main#aboutPage a.founder-cta-btn::after {
  content: none !important;
  display: none !important;
}

html body[data-page="about"] main#aboutPage a.founder-cta-btn > .founder-arrow {
  position: absolute !important;
  left: 10px !important;
  top: 50% !important;
  z-index: 2 !important;
  color: #071a33 !important;
  -webkit-text-fill-color: #071a33 !important;
  font-family: Arial, sans-serif !important;
  font-size: 24px !important;
  font-weight: 900 !important;
  -webkit-text-stroke: .45px currentColor !important;
}

html body[data-page="about"] main#aboutPage a.founder-cta-btn .founder-arrow-icon {
  stroke: #071a33 !important;
  opacity: 1 !important;
}

html[data-theme="amigos-dark"] body[data-page="about"] main#aboutPage a.founder-cta-btn:hover .founder-arrow,
html[data-theme="amigos-dark"] body[data-page="about"] main#aboutPage a.founder-cta-btn:focus-visible .founder-arrow {
  background: #071a33 !important;
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

html[data-theme="amigos-dark"] body[data-page="about"] main#aboutPage a.founder-cta-btn:hover .founder-arrow-icon,
html[data-theme="amigos-dark"] body[data-page="about"] main#aboutPage a.founder-cta-btn:focus-visible .founder-arrow-icon {
  stroke: #fff !important;
}

/* Dark theme: the process label must remain readable over the navy hero image. */
html[data-theme="amigos-dark"] body main .about-hero.about-hero .hero-actions.hero-actions > a.btn[href="#process"],
html[data-theme="amigos-dark"] body main .about-hero.about-hero .hero-actions.hero-actions > a.btn[href="#process"]:visited {
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
}

html[data-theme="amigos-dark"] body main .about-hero.about-hero .hero-actions.hero-actions > a.btn[href="#process"]:hover,
html[data-theme="amigos-dark"] body main .about-hero.about-hero .hero-actions.hero-actions > a.btn[href="#process"]:focus-visible {
  color: #071a33 !important;
  -webkit-text-fill-color: #071a33 !important;
}
`;

export default function Page() {
  return (
    <AssetPageShell
      css={["/style.css","/about.css"]}
      scripts={["/about.js","/script.js"]}
      shell
      >
      <style dangerouslySetInnerHTML={{ __html: forcedAboutDarkThemeCss }} data-forcedAboutDarkThemeCss />
      <style dangerouslySetInnerHTML={{ __html: forcedAboutSecondaryButtonCss }} data-forcedAboutSecondaryButtonCss />
      <AboutRedesign />
    </AssetPageShell>
  );
}
