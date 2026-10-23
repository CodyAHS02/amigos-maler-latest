import AssetPageShell from "@/components/AssetPageShell";
import HomeBeforeOffer from "@/components/home/HomeBeforeOffer";
import HomeBeforeProjects from "@/components/home/HomeBeforeProjects";
import HomeProjectsAndAfter from "@/components/home/HomeProjectsAndAfter";
import OfferCalculatorHomeCta from "@/components/offer-calculator/OfferCalculatorHomeCta";

// Keep the homepage legacy stylesheet in sync with the responsive hero controls.
export const metadata = {
  title: "Amigos Maler GmbH | Premium Painting & Property Value Preservation"
};

const forcedHomeHeroButtonCss = `
@keyframes homeHeroButtonBorderFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

#homeHeroButtons.hero-buttons > a.btn-primary,
#homeHeroButtons.hero-buttons > a.btn-secondary,
html body #homeHeroButtons.hero-buttons > a.btn-primary,
html body #homeHeroButtons.hero-buttons > a.btn-secondary,
html[data-theme="amigos-dark"] body #homeHeroButtons.hero-buttons > a.btn-primary,
html[data-theme="amigos-dark"] body #homeHeroButtons.hero-buttons > a.btn-secondary {
  position: relative !important;
  isolation: isolate !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  min-width: 210px !important;
  min-height: 54px !important;
  padding: 16px 30px !important;
  overflow: hidden !important;
  border: 0 !important;
  border-radius: 999px !important;
  background: rgba(255, 255, 255, .03) !important;
  background-color: rgba(255, 255, 255, .03) !important;
  background-image: none !important;
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
  font-size: 15px !important;
  font-weight: 700 !important;
  line-height: 1 !important;
  letter-spacing: 0 !important;
  text-transform: none !important;
  box-shadow: none !important;
  backdrop-filter: blur(18px) saturate(1.18) !important;
  -webkit-backdrop-filter: blur(18px) saturate(1.18) !important;
}

#homeHeroButtons.hero-buttons > a.btn-primary::before,
#homeHeroButtons.hero-buttons > a.btn-secondary::before,
html body #homeHeroButtons.hero-buttons > a.btn-primary::before,
html body #homeHeroButtons.hero-buttons > a.btn-secondary::before,
html[data-theme="amigos-dark"] body #homeHeroButtons.hero-buttons > a.btn-primary::before,
html[data-theme="amigos-dark"] body #homeHeroButtons.hero-buttons > a.btn-secondary::before {
  content: "" !important;
  position: absolute !important;
  inset: 0 !important;
  z-index: 0 !important;
  padding: 1.5px !important;
  border-radius: inherit !important;
  background: linear-gradient(105deg, #f6be10 0%, #f39125 28%, #e62453 56%, #f6be10 100%) !important;
  background-size: 260% 260% !important;
  animation: homeHeroButtonBorderFlow 4.5s ease-in-out infinite !important;
  pointer-events: none !important;
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0) !important;
  -webkit-mask-composite: xor !important;
  mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0) !important;
  mask-composite: exclude !important;
}

#homeHeroButtons.hero-buttons > a.btn-primary::after,
#homeHeroButtons.hero-buttons > a.btn-secondary::after,
html body #homeHeroButtons.hero-buttons > a.btn-primary::after,
html body #homeHeroButtons.hero-buttons > a.btn-secondary::after,
html[data-theme="amigos-dark"] body #homeHeroButtons.hero-buttons > a.btn-primary::after,
html[data-theme="amigos-dark"] body #homeHeroButtons.hero-buttons > a.btn-secondary::after {
  content: none !important;
  display: none !important;
}

#homeHeroButtons.hero-buttons > a.btn-primary:hover,
#homeHeroButtons.hero-buttons > a.btn-secondary:hover,
html body #homeHeroButtons.hero-buttons > a.btn-primary:hover,
html body #homeHeroButtons.hero-buttons > a.btn-secondary:hover,
html[data-theme="amigos-dark"] body #homeHeroButtons.hero-buttons > a.btn-primary:hover,
html[data-theme="amigos-dark"] body #homeHeroButtons.hero-buttons > a.btn-secondary:hover {
  transform: translateY(-3px) !important;
  background: linear-gradient(105deg, #f6be10 0%, #f39125 44%, #e62453 100%) !important;
  background-color: transparent !important;
  background-image: linear-gradient(105deg, #f6be10 0%, #f39125 44%, #e62453 100%) !important;
  box-shadow: none !important;
}
`;

const homeHeroOverlayResetCss = `
html:not([data-theme="amigos-dark"]) section[data-home-hero] .hero-overlay {
  background: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  filter: none !important;
}

html:not([data-theme="amigos-dark"]) section[data-home-hero] .intro-title-main,
html:not([data-theme="amigos-dark"]) section[data-home-hero] .intro-title-gmbh,
html:not([data-theme="amigos-dark"]) section[data-home-hero] .intro-title-sub,
html:not([data-theme="amigos-dark"]) section[data-home-hero] .hero-content h1,
html:not([data-theme="amigos-dark"]) section[data-home-hero] .hero-content p {
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
}

/* Hero copy is always white (it sits on the sky/photo), in every theme and regardless of
   legacy per-theme rules. */
html body section[data-home-hero] .hero-overlay .intro-title,
html body section[data-home-hero] .hero-overlay .intro-title *,
html body section[data-home-hero] .hero-overlay .intro-title-main,
html body section[data-home-hero] .hero-overlay .intro-title-gmbh,
html body section[data-home-hero] .hero-overlay .intro-title-sub,
html body section[data-home-hero] .hero-overlay h1,
html body section[data-home-hero] .hero-overlay h1 *,
html body section[data-home-hero] .hero-overlay p {
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
  text-shadow: 0 2px 18px rgba(0, 0, 0, .35) !important;
}
`;

export default function Page() {
  return (
    <AssetPageShell
      css={["/style.css"]}
      externalStyles={["https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.0/css/all.min.css"]}
      scripts={["/script.js", "/app.js"]}
      shell
    >
      <HomeBeforeOffer />
      <OfferCalculatorHomeCta />
      <HomeBeforeProjects />
      <HomeProjectsAndAfter />
      <style dangerouslySetInnerHTML={{ __html: forcedHomeHeroButtonCss }} data-home-hero-button-force />
      <style dangerouslySetInnerHTML={{ __html: homeHeroOverlayResetCss }} data-home-hero-overlay-reset />
    </AssetPageShell>
  );
}
