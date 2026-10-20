import AssetPageShell from "@/components/AssetPageShell";
import PropertyValuePreservationContent from "./PropertyValuePreservationContent";

export const metadata = {
  title: "Property Value Preservation | Amigos Maler GmbH"
};

const forcedPropertyThemeCss = `
:root {
  --pv-navy: #071A33;
  --pv-navy-2: #0B223D;
  --pv-ink: #050505;
  --pv-muted: #333333;
  --pv-line: rgba(7, 26, 51, .14);
  --pv-brand-gradient: linear-gradient(120deg, #F6BE10 0%, #F39125 28%, #E62453 58%, #C73B8E 78%, #F6BE10 100%);
  --pv-brand-gradient-soft: linear-gradient(120deg, rgba(246, 190, 16, .96) 0%, rgba(243, 145, 37, .94) 28%, rgba(230, 36, 83, .94) 58%, rgba(199, 59, 142, .90) 78%, rgba(246, 190, 16, .96) 100%);
}

@keyframes pvMovingBrandGradient {
  0% { background-position: 0% 18%; }
  50% { background-position: 100% 62%; }
  100% { background-position: 18% 100%; }
}

@keyframes pvTrustGradientBall {
  0% { transform: translate3d(0%, -50%, 0) scale(.92); }
  25% { transform: translate3d(92%, -22%, 0) scale(1.08); }
  50% { transform: translate3d(185%, -58%, 0) scale(.98); }
  75% { transform: translate3d(278%, -30%, 0) scale(1.1); }
  100% { transform: translate3d(370%, -50%, 0) scale(.92); }
}

body:has(.property-hero),
body[data-page="property-value-preservation"] {
  background: var(--pv-navy) !important;
}

body:has(.property-hero) main {
  background: var(--pv-navy) !important;
  color: #fff !important;
}

body:has(.property-hero) .property-hero,
body:has(.property-hero) .property-meaning,
body:has(.property-hero) .property-inspection,
body:has(.property-hero) .property-process,
body:has(.property-hero) .prevention-section,
body:has(.property-hero) .service-system,
body:has(.property-hero) .audience-section,
body:has(.property-hero) .property-lifecycle,
body:has(.property-hero) .digital-value-section,
body:has(.property-hero) .trust-section {
  background:
    radial-gradient(circle at 86% 8%, rgba(199, 59, 142, .14), transparent 30%),
    radial-gradient(circle at 10% 88%, rgba(246, 190, 16, .08), transparent 28%),
    var(--pv-navy) !important;
  color: #fff !important;
}

body:has(.property-hero) .hero-architectural-grid {
  background:
    radial-gradient(circle at 88% 12%, rgba(199, 59, 142, .18), transparent 32%),
    radial-gradient(circle at 12% 86%, rgba(246, 190, 16, .08), transparent 30%),
    var(--pv-navy) !important;
}

body:has(.property-hero) .property-final-cta,
body:has(.property-hero) .meaning-node.active,
body:has(.property-hero) .meaning-node:hover,
body:has(.property-hero) .inspection-hotspot.active,
body:has(.property-hero) .inspection-hotspot:hover,
body:has(.property-hero) .property-hotspot:hover,
body:has(.property-hero) .process-item.active .process-marker,
body:has(.property-hero) .process-item.is-visible .process-marker,
body:has(.property-hero) .service-system-card:hover,
body:has(.property-hero) .interface-card:hover,
body:has(.property-hero) .lifecycle-point:hover,
body:has(.property-hero) .trust-item:hover {
  background-color: #F39125 !important;
  background-image:
    radial-gradient(circle at 12% 18%, rgba(255, 255, 255, .28), transparent 25%),
    radial-gradient(circle at 86% 14%, rgba(255, 255, 255, .18), transparent 28%),
    linear-gradient(120deg, #F6BE10 0%, #F39125 28%, #E62453 58%, #C73B8E 78%, #F6BE10 100%) !important;
  background-size: 160% 160% !important;
  animation: pvMovingBrandGradient 7s ease-in-out infinite alternate !important;
  color: #fff !important;
}

body:has(.property-hero) .property-final-cta {
  background-size: 240% 240% !important;
}

body:has(.property-hero) .property-final-cta::before,
body:has(.property-hero) .property-final-cta::after,
body:has(.property-hero) .final-cta-background,
body:has(.property-hero) .final-cta-grid {
  opacity: .16 !important;
  border-color: rgba(255, 255, 255, .34) !important;
}

body:has(.property-hero) .section-label,
body:has(.property-hero) .hero-label,
body:has(.property-hero) .service-card-content > span,
body:has(.property-hero) .audience-content > span,
body:has(.property-hero) .property-visual-statement > span,
body:has(.property-hero) .trust-item > span,
body:has(.property-hero) .condition-data span,
body:has(.property-hero) .inspection-number,
body:has(.property-hero) .process-item-content > span,
body:has(.property-hero) .active-panel-number {
  color: #E62453 !important;
  -webkit-text-fill-color: #E62453 !important;
}

body:has(.property-hero) .meaning-intro h2,
body:has(.property-hero) .inspection-heading h2,
body:has(.property-hero) .process-header h2,
body:has(.property-hero) .prevention-heading h2,
body:has(.property-hero) .service-system-header h2,
body:has(.property-hero) .audience-header h2,
body:has(.property-hero) .lifecycle-copy h2,
body:has(.property-hero) .digital-value-content h2,
body:has(.property-hero) .trust-heading h2,
body:has(.property-hero) .final-cta-content h2 {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

body:has(.property-hero) .hero-introduction > p,
body:has(.property-hero) .meaning-lead,
body:has(.property-hero) .inspection-heading > p,
body:has(.property-hero) .process-header > p,
body:has(.property-hero) .prevention-heading p,
body:has(.property-hero) .service-system-header > p,
body:has(.property-hero) .lifecycle-copy p,
body:has(.property-hero) .digital-value-content > p,
body:has(.property-hero) .trust-item p,
body:has(.property-hero) .process-item-content p {
  color: rgba(255, 255, 255, .74) !important;
  -webkit-text-fill-color: rgba(255, 255, 255, .74) !important;
}

body:has(.property-hero) .meaning-center,
body:has(.property-hero) .meaning-active-panel,
body:has(.property-hero) .inspection-stage,
body:has(.property-hero) .service-system-card,
body:has(.property-hero) .digital-interface,
body:has(.property-hero) .interface-card,
body:has(.property-hero) .trust-item,
body:has(.property-hero) .building-status-card,
body:has(.property-hero) .lifecycle-center,
body:has(.property-hero) .condition-data {
  background: rgba(13, 37, 66, .86) !important;
  border-color: rgba(255, 255, 255, .16) !important;
  color: #fff !important;
}

body:has(.property-hero) .meaning-node,
body:has(.property-hero) .lifecycle-point {
  background: rgba(255, 255, 255, .06) !important;
  border-color: rgba(255, 255, 255, .18) !important;
  color: #fff !important;
}

body:has(.property-hero) .meaning-node strong,
body:has(.property-hero) .meaning-node small,
body:has(.property-hero) .condition-data strong,
body:has(.property-hero) .condition-data small,
body:has(.property-hero) .lifecycle-point strong,
body:has(.property-hero) .service-card-content h3,
body:has(.property-hero) .trust-item h3 {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

body:has(.property-hero) .service-system-card:hover *,
body:has(.property-hero) .interface-card:hover *,
body:has(.property-hero) .trust-item:hover *,
body:has(.property-hero) .meaning-node:hover *,
body:has(.property-hero) .meaning-node.active * {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

body:has(.property-hero) .property-button-primary {
  background-color: #F39125 !important;
  background-image:
    radial-gradient(circle at 12% 18%, rgba(255, 255, 255, .28), transparent 25%),
    radial-gradient(circle at 86% 14%, rgba(255, 255, 255, .18), transparent 28%),
    linear-gradient(120deg, #F6BE10 0%, #F39125 28%, #E62453 58%, #C73B8E 78%, #F6BE10 100%) !important;
  background-size: 160% 160% !important;
  border: 2px solid transparent !important;
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
  animation: pvMovingBrandGradient 7s ease-in-out infinite alternate !important;
  box-shadow: 0 18px 44px rgba(230, 36, 83, .22), 0 12px 28px rgba(246, 190, 16, .14) !important;
}

body:has(.property-hero) .property-button-primary *,
body:has(.property-hero) .property-button-primary span {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

body:has(.property-hero) .property-button-outline,
body:has(.property-hero) .property-button-light,
body:has(.property-hero) .hero-actions .property-button:nth-child(2),
body:has(.property-hero) .final-cta-actions .property-button:nth-child(2) {
  background-color: transparent !important;
  background-image:
    linear-gradient(var(--pv-navy), var(--pv-navy)),
    linear-gradient(120deg, #F6BE10 0%, #F39125 28%, #E62453 58%, #C73B8E 78%, #F6BE10 100%) !important;
  background-origin: border-box !important;
  background-clip: padding-box, border-box !important;
  background-size: 100% 100%, 240% 240% !important;
  border: 2px solid transparent !important;
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
  box-shadow: none !important;
  animation: pvMovingBrandGradient 7s ease-in-out infinite alternate !important;
}

body:has(.property-hero) .property-button-outline *,
body:has(.property-hero) .property-button-light *,
body:has(.property-hero) .hero-actions .property-button:nth-child(2) *,
body:has(.property-hero) .final-cta-actions .property-button:nth-child(2) * {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero),
html:not([data-theme="amigos-dark"]) body:has(.property-hero) main {
  background: #fff !important;
  color: var(--pv-ink) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .site-header {
  background: rgba(255, 255, 255, .94) !important;
  border-color: rgba(7, 26, 51, .08) !important;
  box-shadow: 0 16px 44px rgba(7, 26, 51, .08) !important;
  backdrop-filter: blur(18px) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .site-header .site-nav a,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .site-header .dropdown-trigger,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .site-header .nav-link {
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .site-header .site-nav a:hover {
  color: #F6BE10 !important;
  -webkit-text-fill-color: #F6BE10 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .site-header .customer-header-btn {
  background: #000000 !important;
  background-image: none !important;
  border-color: #000000 !important;
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .site-header .header-btn {
  background: #000000 !important;
  background-image: none !important;
  border-color: #000000 !important;
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .site-header .customer-header-btn:hover,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .site-header .header-btn:hover {
  background: #111111 !important;
  background-image: none !important;
  border-color: #111111 !important;
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
  opacity: 1 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-hero,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-meaning,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-inspection,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-process,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .prevention-section,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .service-system,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .audience-section,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-lifecycle,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .digital-value-section,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .trust-section {
  background: #fff !important;
  color: var(--pv-ink) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .hero-architectural-grid {
  background:
    radial-gradient(circle at 86% 12%, rgba(230, 36, 83, .14), transparent 30%),
    radial-gradient(circle at 10% 86%, rgba(246, 190, 16, .12), transparent 28%),
    #fff !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .hero-content,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .hero-introduction h1,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .meaning-intro h2,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-heading h2,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .process-header h2,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .prevention-heading h2,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .service-system-header h2,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .audience-header h2,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-copy h2,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .digital-value-content h2,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .trust-heading h2 {
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .hero-introduction > p,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .meaning-lead,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-heading > p,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .process-header > p,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .prevention-heading p,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .service-system-header > p,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-copy p,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .digital-value-content > p,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .trust-item p,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .process-item-content p {
  color: var(--pv-muted) !important;
  -webkit-text-fill-color: var(--pv-muted) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-button-outline,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-button-light,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .hero-actions .property-button:nth-child(2),
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .final-cta-actions .property-button:nth-child(2) {
  background-image:
    linear-gradient(#fff, #fff),
    linear-gradient(120deg, #F6BE10 0%, #F39125 28%, #E62453 58%, #C73B8E 78%, #F6BE10 100%) !important;
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-button-outline *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-button-light *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .hero-actions .property-button:nth-child(2) *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .final-cta-actions .property-button:nth-child(2) * {
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-final-cta,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-final-cta *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-final-cta h2,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-final-cta p {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .site-footer {
  background: #fff !important;
  border-top: 1px solid rgba(7, 26, 51, .10) !important;
  color: var(--pv-ink) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .site-footer h3,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .site-footer h4,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .site-footer p,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .site-footer a,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .site-footer span {
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .site-footer a:hover {
  color: #E62453 !important;
  -webkit-text-fill-color: #E62453 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-hero {
  min-height: 100svh !important;
  padding-top: clamp(92px, 9vh, 130px) !important;
  padding-bottom: clamp(36px, 5vh, 64px) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-condition-visual,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-building {
  color: var(--pv-ink) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .condition-data,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .building-status-card,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-hotspot,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .meaning-center,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .meaning-active-panel,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-information,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .service-system-card,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .interface-card,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-center,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-point {
  background: #FFF4DF !important;
  border-color: rgba(5, 5, 5, .16) !important;
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
  box-shadow: 0 18px 46px rgba(5, 5, 5, .08) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .condition-data *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .building-status-card *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-hotspot *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .meaning-center *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .meaning-active-panel *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-information *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .service-system-card *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .interface-card *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-center *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-point * {
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .condition-data span,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .building-status-card .status-card-label,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-hotspot strong,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .meaning-node span,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-number,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .interface-card > span,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-center span,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-point span {
  color: #E62453 !important;
  -webkit-text-fill-color: #E62453 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-meaning {
  min-height: 100svh !important;
  padding-top: clamp(72px, 8vh, 96px) !important;
  padding-bottom: clamp(48px, 6vh, 72px) !important;
  overflow: hidden !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .meaning-diagram {
  min-height: min(58vh, 560px) !important;
  margin-top: clamp(28px, 4vh, 48px) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .meaning-node {
  background: #FFF4DF !important;
  border: 1px solid rgba(5, 5, 5, .16) !important;
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
  box-shadow: 0 16px 38px rgba(5, 5, 5, .08) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .meaning-node *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .meaning-node strong,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .meaning-node small {
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .meaning-node:hover,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .meaning-node.active,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-hotspot:hover,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-hotspot.active,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-hotspot:hover,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-point:hover {
  background-color: #F39125 !important;
  background-image:
    radial-gradient(circle at 12% 18%, rgba(255, 255, 255, .28), transparent 25%),
    radial-gradient(circle at 86% 14%, rgba(255, 255, 255, .18), transparent 28%),
    linear-gradient(120deg, #F6BE10 0%, #F39125 28%, #E62453 58%, #C73B8E 78%, #F6BE10 100%) !important;
  background-size: 160% 160% !important;
  animation: pvMovingBrandGradient 7s ease-in-out infinite alternate !important;
  border-color: rgba(255, 255, 255, .42) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .meaning-node:hover *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .meaning-node.active *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-hotspot:hover *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-hotspot.active *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-hotspot:hover *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-point:hover * {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-inspection,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .digital-value-section {
  min-height: 100svh !important;
  padding-top: clamp(64px, 7vh, 86px) !important;
  padding-bottom: clamp(42px, 5vh, 64px) !important;
  background-color: #F39125 !important;
  background-image:
    radial-gradient(circle at 12% 18%, rgba(255, 255, 255, .28), transparent 25%),
    radial-gradient(circle at 86% 14%, rgba(255, 255, 255, .18), transparent 28%),
    linear-gradient(120deg, #F6BE10 0%, #F39125 28%, #E62453 58%, #C73B8E 78%, #F6BE10 100%) !important;
  background-size: 240% 240% !important;
  animation: pvMovingBrandGradient 7s ease-in-out infinite alternate !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-inspection h2,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-inspection p,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-inspection .section-label,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .digital-value-section h2,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .digital-value-section p,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .digital-value-section .section-label,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .digital-note {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-stage,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .digital-interface {
  background: rgba(255, 244, 223, .92) !important;
  border-color: rgba(255, 255, 255, .48) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-stage *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .digital-interface * {
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .service-card-content {
  background: #FFF4DF !important;
  color: var(--pv-ink) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .service-system-card:hover .service-card-content,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .interface-card:hover {
  background-color: #F39125 !important;
  background-image:
    radial-gradient(circle at 12% 18%, rgba(255, 255, 255, .28), transparent 25%),
    radial-gradient(circle at 86% 14%, rgba(255, 255, 255, .18), transparent 28%),
    linear-gradient(120deg, #F6BE10 0%, #F39125 28%, #E62453 58%, #C73B8E 78%, #F6BE10 100%) !important;
  background-size: 160% 160% !important;
  animation: pvMovingBrandGradient 7s ease-in-out infinite alternate !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .service-system-card:hover .service-card-content *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .interface-card:hover * {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .audience-section,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-lifecycle {
  min-height: 100svh !important;
  padding-top: clamp(64px, 7vh, 90px) !important;
  padding-bottom: clamp(44px, 5vh, 70px) !important;
  overflow: hidden !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .audience-grid {
  min-height: 0 !important;
  height: min(62vh, 650px) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-lifecycle .lifecycle-visual {
  transform: scale(.88) !important;
  transform-origin: center !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-visual-overlay {
  background:
    linear-gradient(90deg, rgba(255, 255, 255, .82) 0%, rgba(255, 255, 255, .44) 48%, rgba(255, 255, 255, .18) 100%),
    linear-gradient(0deg, rgba(255, 255, 255, .20), rgba(255, 255, 255, .20)) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-visual-statement h2,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-visual-statement span,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-visual-meta span {
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .trust-section {
  position: relative !important;
  background: #fff !important;
  overflow: hidden !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .trust-grid {
  position: relative !important;
  isolation: isolate !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .trust-grid::before {
  content: "" !important;
  position: absolute !important;
  z-index: 0 !important;
  left: 3% !important;
  top: 50% !important;
  width: clamp(92px, 9vw, 150px) !important;
  aspect-ratio: 1 !important;
  border-radius: 999px !important;
  background-color: #F39125 !important;
  background-image:
    radial-gradient(circle at 24% 22%, rgba(255, 255, 255, .42), transparent 28%),
    linear-gradient(120deg, #F6BE10 0%, #F39125 28%, #E62453 58%, #C73B8E 78%, #F6BE10 100%) !important;
  background-size: 180% 180% !important;
  box-shadow: 0 22px 80px rgba(230, 36, 83, .30), 0 10px 42px rgba(246, 190, 16, .20) !important;
  filter: saturate(1.12) !important;
  animation: pvTrustGradientBall 9s ease-in-out infinite alternate, pvMovingBrandGradient 7s ease-in-out infinite alternate !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .trust-item {
  position: relative !important;
  z-index: 1 !important;
  background: transparent !important;
  border: 1.5px solid #050505 !important;
  box-shadow: none !important;
  color: var(--pv-ink) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .trust-item:hover {
  background: rgba(255, 244, 223, .72) !important;
  border-color: #050505 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .trust-item *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .trust-item:hover * {
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
}

body:has(.property-hero) .hero-introduction > p,
body:has(.property-hero) .meaning-lead,
body:has(.property-hero) .inspection-heading > p,
body:has(.property-hero) .process-header > p,
body:has(.property-hero) .prevention-heading p,
body:has(.property-hero) .service-system-header > p,
body:has(.property-hero) .audience-header p,
body:has(.property-hero) .lifecycle-copy p,
body:has(.property-hero) .digital-value-content > p,
body:has(.property-hero) .trust-item p,
body:has(.property-hero) .final-cta-content p,
body:has(.property-hero) .building-status-card p,
body:has(.property-hero) .inspection-information p,
body:has(.property-hero) .process-item-content p,
body:has(.property-hero) .meaning-active-panel p {
  font-size: 17px !important;
  line-height: 1.7 !important;
}

body:has(.property-hero) .hero-introduction > p {
  font-size: clamp(16px, 1.12vw, 20px) !important;
  line-height: 1.62 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .condition-data,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .building-status-card,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-hotspot,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .meaning-center,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .meaning-active-panel,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-information,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .service-system-card,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .interface-card,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-center,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-point,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .meaning-node,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .service-card-content {
  background-color: #F39125 !important;
  background-image:
    radial-gradient(circle at 12% 18%, rgba(255, 255, 255, .28), transparent 25%),
    radial-gradient(circle at 86% 14%, rgba(255, 255, 255, .18), transparent 28%),
    linear-gradient(120deg, #F6BE10 0%, #F39125 28%, #E62453 58%, #C73B8E 78%, #F6BE10 100%) !important;
  background-size: 170% 170% !important;
  border-color: rgba(255, 255, 255, .42) !important;
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
  box-shadow: 0 18px 46px rgba(230, 36, 83, .18), 0 10px 28px rgba(246, 190, 16, .12) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .condition-data *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .building-status-card *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-hotspot *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .meaning-center *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .meaning-active-panel *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-information *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .service-system-card *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .interface-card *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-center *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-point *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .meaning-node *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .service-card-content * {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-stage,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .digital-interface {
  background: rgba(255, 255, 255, .94) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .building-status-card {
  background: rgba(255, 255, 255, .96) !important;
  background-image: none !important;
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
  border: 1px solid rgba(7, 26, 51, .12) !important;
  box-shadow: 0 26px 70px rgba(7, 26, 51, .18) !important;
  backdrop-filter: blur(18px) saturate(1.05) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .building-status-card::before {
  content: "" !important;
  position: absolute !important;
  inset: 0 auto 0 0 !important;
  width: 6px !important;
  background: linear-gradient(180deg, #F6BE10 0%, #F39125 32%, #E62453 70%, #C73B8E 100%) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .building-status-card *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .building-status-card .status-card-title,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .building-status-card .status-progress-labels {
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .building-status-card .status-card-label {
  color: #E62453 !important;
  -webkit-text-fill-color: #E62453 !important;
  font-size: clamp(11px, .72vw, 14px) !important;
  letter-spacing: .22em !important;
  font-weight: 800 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .building-status-card .status-card-title {
  font-size: clamp(30px, 2.8vw, 44px) !important;
  line-height: 1.08 !important;
  font-weight: 700 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .building-status-card p {
  max-width: 620px !important;
  font-size: clamp(17px, 1.35vw, 22px) !important;
  line-height: 1.55 !important;
  color: #26364A !important;
  -webkit-text-fill-color: #26364A !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .building-status-card .status-progress {
  background: rgba(7, 26, 51, .12) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .building-status-card .status-progress span {
  background: linear-gradient(90deg, #F6BE10 0%, #F39125 36%, #E62453 78%, #C73B8E 100%) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .condition-data,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-hotspot {
  border-color: rgba(255, 255, 255, .52) !important;
  box-shadow: 0 14px 34px rgba(230, 36, 83, .18), 0 8px 22px rgba(7, 26, 51, .10) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .condition-data small,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-hotspot small {
  line-height: 1.35 !important;
}

body:has(.property-hero) .property-hotspot,
body:has(.property-hero) .condition-data {
  display: none !important;
}

body:has(.property-hero) .building-status-card {
  left: clamp(18px, 3.2vw, 52px) !important;
  right: clamp(18px, 3.2vw, 52px) !important;
  bottom: clamp(18px, 3vw, 40px) !important;
  width: auto !important;
  max-width: none !important;
  min-height: 0 !important;
  padding: clamp(18px, 2.4vw, 34px) clamp(24px, 4vw, 56px) !important;
  display: grid !important;
  grid-template-columns: minmax(140px, .55fr) minmax(280px, 1.45fr) !important;
  column-gap: clamp(24px, 4vw, 64px) !important;
  row-gap: 14px !important;
  align-items: center !important;
}

body:has(.property-hero) .building-status-card .status-card-label,
body:has(.property-hero) .building-status-card .status-card-title {
  grid-column: 1 !important;
}

body:has(.property-hero) .building-status-card .status-card-label {
  margin-bottom: 2px !important;
}

body:has(.property-hero) .building-status-card .status-card-title {
  font-size: clamp(30px, 3vw, 52px) !important;
}

body:has(.property-hero) .building-status-card p,
body:has(.property-hero) .building-status-card .status-progress,
body:has(.property-hero) .building-status-card .status-progress-labels {
  grid-column: 2 !important;
}

body:has(.property-hero) .building-status-card p {
  margin-top: 0 !important;
  max-width: 820px !important;
  font-size: clamp(16px, 1.25vw, 21px) !important;
  line-height: 1.48 !important;
}

body:has(.property-hero) .building-status-card .status-progress {
  margin-top: clamp(8px, 1.2vw, 14px) !important;
}

body:has(.property-hero) .building-status-card .status-progress-labels {
  margin-top: 6px !important;
  font-size: clamp(12px, .92vw, 16px) !important;
}

@media (max-width: 900px) {
  body:has(.property-hero) .building-status-card {
    grid-template-columns: 1fr !important;
    row-gap: 10px !important;
  }

  body:has(.property-hero) .building-status-card .status-card-label,
  body:has(.property-hero) .building-status-card .status-card-title,
  body:has(.property-hero) .building-status-card p,
  body:has(.property-hero) .building-status-card .status-progress,
  body:has(.property-hero) .building-status-card .status-progress-labels {
    grid-column: 1 !important;
  }
}

body:has(.property-hero) .property-button-primary > span,
body:has(.property-hero) .property-button-primary:hover > span,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-button-primary > span,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-button-primary:hover > span {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-information {
  background: #fff !important;
  background-image: none !important;
  border: 1px solid rgba(5, 5, 5, .14) !important;
  color: #050505 !important;
  -webkit-text-fill-color: #050505 !important;
  box-shadow: 0 20px 50px rgba(5, 5, 5, .12) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-information *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-information-top,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-information-content h3,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-information-content p,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-information-footer span {
  color: #050505 !important;
  -webkit-text-fill-color: #050505 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-information-footer {
  border-top-color: rgba(5, 5, 5, .18) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-hotspot,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-hotspot:hover,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-hotspot.active {
  background: #fff !important;
  background-image: none !important;
  border: 1px solid rgba(5, 5, 5, .22) !important;
  color: #050505 !important;
  -webkit-text-fill-color: #050505 !important;
  box-shadow: 0 10px 26px rgba(5, 5, 5, .20) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-hotspot *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-hotspot:hover *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-hotspot.active * {
  color: #050505 !important;
  -webkit-text-fill-color: #050505 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-hotspot span,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-hotspot:hover span,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-hotspot.active span {
  background: linear-gradient(120deg, #F39125 0%, #E62453 55%, #C73B8E 100%) !important;
  color: transparent !important;
  -webkit-text-fill-color: transparent !important;
}

body:has(.property-hero) .building-status-card {
  padding: clamp(12px, 1.45vw, 22px) clamp(22px, 3.2vw, 46px) !important;
  grid-template-columns: minmax(150px, .48fr) minmax(320px, 1.52fr) !important;
  column-gap: clamp(20px, 3vw, 48px) !important;
  row-gap: 6px !important;
}

body:has(.property-hero) .building-status-card .status-card-label {
  font-size: clamp(9px, .55vw, 12px) !important;
  margin-bottom: 0 !important;
}

body:has(.property-hero) .building-status-card .status-card-title {
  font-size: clamp(28px, 2.35vw, 42px) !important;
}

body:has(.property-hero) .building-status-card p {
  max-width: 760px !important;
  font-size: clamp(15px, 1.05vw, 18px) !important;
  line-height: 1.36 !important;
}

body:has(.property-hero) .building-status-card .status-progress {
  margin-top: 4px !important;
}

body:has(.property-hero) .building-status-card .status-progress-labels {
  margin-top: 2px !important;
  font-size: clamp(10px, .72vw, 13px) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-information-content p,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .inspection-information p {
  font-size: clamp(13px, .9vw, 16px) !important;
  line-height: 1.65 !important;
  font-weight: 400 !important;
  max-width: 34ch !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .building-status-card {
  background: rgba(255, 255, 255, .68) !important;
  background-image:
    linear-gradient(135deg, rgba(255, 255, 255, .92), rgba(255, 255, 255, .46)) !important;
  border-color: rgba(255, 255, 255, .72) !important;
  box-shadow: 0 22px 64px rgba(7, 26, 51, .18), inset 0 1px 0 rgba(255, 255, 255, .85) !important;
  backdrop-filter: blur(22px) saturate(1.18) !important;
  -webkit-backdrop-filter: blur(22px) saturate(1.18) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .service-system-card,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .service-system-card:hover {
  background: #fff !important;
  background-image: none !important;
  border: 1px solid rgba(7, 26, 51, .12) !important;
  box-shadow: 0 16px 40px rgba(7, 26, 51, .10) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .service-card-content,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .service-system-card:hover .service-card-content {
  min-height: 238px !important;
  padding: clamp(22px, 2.4vw, 34px) !important;
  display: flex !important;
  flex-direction: column !important;
  background: #fff !important;
  background-image: none !important;
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .service-card-content::before {
  content: "" !important;
  position: absolute !important;
  inset: 0 0 auto 0 !important;
  height: 5px !important;
  background: linear-gradient(90deg, #F6BE10 0%, #F39125 34%, #E62453 72%, #C73B8E 100%) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .service-card-content *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .service-system-card:hover .service-card-content * {
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .service-card-content > span {
  color: #E62453 !important;
  -webkit-text-fill-color: #E62453 !important;
  font-size: clamp(12px, .78vw, 14px) !important;
  font-weight: 800 !important;
  letter-spacing: .22em !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .service-card-content h3 {
  margin: 14px 0 10px !important;
  font-size: clamp(22px, 1.65vw, 30px) !important;
  line-height: 1.15 !important;
  font-weight: 650 !important;
  letter-spacing: 0 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .service-card-content p {
  min-height: 0 !important;
  margin: 0 !important;
  font-size: clamp(16px, 1.12vw, 19px) !important;
  line-height: 1.6 !important;
  color: #314154 !important;
  -webkit-text-fill-color: #314154 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .service-card-content a {
  margin-top: auto !important;
  padding-top: 22px !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 8px !important;
  width: max-content !important;
  font-size: clamp(14px, .95vw, 16px) !important;
  font-weight: 800 !important;
  color: #E62453 !important;
  -webkit-text-fill-color: #E62453 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .service-card-content a span {
  color: #E62453 !important;
  -webkit-text-fill-color: #E62453 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .building-status-card {
  background: rgba(255, 255, 255, .30) !important;
  background-image:
    linear-gradient(135deg, rgba(255, 255, 255, .72) 0%, rgba(255, 255, 255, .26) 48%, rgba(255, 255, 255, .16) 100%) !important;
  border: 1px solid rgba(255, 255, 255, .82) !important;
  box-shadow:
    0 28px 80px rgba(7, 26, 51, .22),
    0 10px 34px rgba(7, 26, 51, .12),
    inset 0 1px 0 rgba(255, 255, 255, .95),
    inset 0 -1px 0 rgba(255, 255, 255, .42) !important;
  backdrop-filter: blur(34px) saturate(1.75) contrast(1.05) !important;
  -webkit-backdrop-filter: blur(34px) saturate(1.75) contrast(1.05) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .building-status-card::after {
  content: "" !important;
  position: absolute !important;
  inset: 1px !important;
  pointer-events: none !important;
  background:
    radial-gradient(circle at 14% 0%, rgba(255, 255, 255, .72), transparent 34%),
    linear-gradient(120deg, rgba(255, 255, 255, .38), transparent 44%) !important;
  opacity: .72 !important;
  mix-blend-mode: screen !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .building-status-card > * {
  position: relative !important;
  z-index: 1 !important;
}

body:has(.property-hero) .lifecycle-arrow {
  display: none !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-visual {
  min-height: 620px !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-ring {
  width: min(560px, 78vw) !important;
  height: min(560px, 78vw) !important;
  border: 1px solid rgba(7, 26, 51, .18) !important;
  background:
    radial-gradient(circle at center, rgba(230, 36, 83, .06), transparent 34%),
    rgba(255, 255, 255, .72) !important;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .78), 0 28px 80px rgba(7, 26, 51, .08) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-ring::before {
  border-color: rgba(7, 26, 51, .16) !important;
  animation: none !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-center {
  width: clamp(180px, 18vw, 230px) !important;
  height: clamp(180px, 18vw, 230px) !important;
  background: #fff !important;
  background-image: none !important;
  border: 1px solid rgba(7, 26, 51, .12) !important;
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
  box-shadow: 0 22px 54px rgba(7, 26, 51, .14) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-center::before {
  content: "" !important;
  position: absolute !important;
  inset: 0 !important;
  border-radius: inherit !important;
  border: 5px solid transparent !important;
  background: linear-gradient(135deg, #F6BE10, #F39125, #E62453, #C73B8E) border-box !important;
  -webkit-mask: linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0) !important;
  -webkit-mask-composite: xor !important;
  mask: linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0) !important;
  mask-composite: exclude !important;
  pointer-events: none !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-center *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-center span,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-center strong,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-center small {
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-center span {
  color: #E62453 !important;
  -webkit-text-fill-color: #E62453 !important;
  font-size: clamp(10px, .7vw, 12px) !important;
  font-weight: 800 !important;
  letter-spacing: .32em !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-center strong {
  margin: 10px 0 8px !important;
  font-size: clamp(32px, 3vw, 46px) !important;
  line-height: 1 !important;
  font-weight: 750 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-center small {
  font-size: clamp(13px, .9vw, 16px) !important;
  font-weight: 700 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-point,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-point:hover {
  width: clamp(150px, 13vw, 190px) !important;
  height: auto !important;
  min-height: 112px !important;
  padding: 22px 18px !important;
  border-radius: 18px !important;
  background: rgba(255, 255, 255, .96) !important;
  background-image: none !important;
  border: 1px solid rgba(7, 26, 51, .14) !important;
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
  box-shadow: 0 18px 46px rgba(7, 26, 51, .13) !important;
  transform: none !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-point::before {
  content: "" !important;
  position: absolute !important;
  inset: 0 0 auto 0 !important;
  height: 5px !important;
  border-radius: 18px 18px 0 0 !important;
  background: linear-gradient(90deg, #F6BE10, #F39125, #E62453) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-point *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-point:hover * {
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-point span {
  color: #E62453 !important;
  -webkit-text-fill-color: #E62453 !important;
  font-size: clamp(13px, .9vw, 16px) !important;
  font-weight: 800 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .lifecycle-point strong {
  margin-top: 8px !important;
  font-size: clamp(15px, 1vw, 18px) !important;
  line-height: 1.2 !important;
  font-weight: 750 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .digital-value-section {
  background: #fff !important;
  background-image:
    linear-gradient(180deg, #fff 0%, #F7F9FC 100%) !important;
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
  animation: none !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .digital-grid-pattern {
  opacity: .08 !important;
  background-image:
    linear-gradient(rgba(7, 26, 51, .12) 1px, transparent 1px),
    linear-gradient(90deg, rgba(7, 26, 51, .12) 1px, transparent 1px) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .digital-value-section h2,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .digital-value-section p,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .digital-value-section .section-label,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .digital-note {
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .digital-value-section .section-label {
  color: #E62453 !important;
  -webkit-text-fill-color: #E62453 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .digital-value-content h2 {
  font-size: clamp(44px, 5.4vw, 82px) !important;
  line-height: .95 !important;
  font-weight: 650 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .digital-value-content > p {
  max-width: 560px !important;
  font-size: clamp(17px, 1.35vw, 22px) !important;
  line-height: 1.65 !important;
  color: #314154 !important;
  -webkit-text-fill-color: #314154 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .digital-note {
  border-color: rgba(7, 26, 51, .14) !important;
  background: #fff !important;
  font-size: 22px !important;
  padding: 14px 22px !important;
  box-shadow: 0 12px 28px rgba(7, 26, 51, .08) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .digital-interface {
  background: #fff !important;
  background-image: none !important;
  border: 1px solid rgba(7, 26, 51, .12) !important;
  box-shadow: 0 24px 70px rgba(7, 26, 51, .12) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .digital-interface *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .interface-topbar,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .interface-topbar * {
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .interface-topbar {
  border-bottom-color: rgba(7, 26, 51, .12) !important;
  font-weight: 800 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .interface-card,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .interface-card:hover {
  min-height: 210px !important;
  padding: clamp(22px, 2.2vw, 34px) !important;
  background: #fff !important;
  background-image: none !important;
  border: 1px solid rgba(7, 26, 51, .12) !important;
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
  box-shadow: 0 14px 34px rgba(7, 26, 51, .08) !important;
  transform: none !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .interface-card::before {
  content: "" !important;
  position: absolute !important;
  inset: 0 0 auto 0 !important;
  height: 5px !important;
  background: linear-gradient(90deg, #F6BE10, #F39125, #E62453, #C73B8E) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .interface-card *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .interface-card:hover * {
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .interface-card > span {
  color: #E62453 !important;
  -webkit-text-fill-color: #E62453 !important;
  font-size: clamp(12px, .78vw, 14px) !important;
  font-weight: 800 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .interface-card strong {
  margin-top: 34px !important;
  font-size: clamp(21px, 1.5vw, 28px) !important;
  line-height: 1.15 !important;
  font-weight: 700 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .interface-card small {
  margin-top: 12px !important;
  font-size: clamp(14px, .95vw, 17px) !important;
  line-height: 1.5 !important;
  color: #314154 !important;
  -webkit-text-fill-color: #314154 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .interface-progress {
  background: rgba(7, 26, 51, .10) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .interface-progress span,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .interface-visual-lines i,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .interface-dots i {
  background: linear-gradient(90deg, #F39125, #E62453) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .process-item {
  opacity: .82 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .process-item.active,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .process-item.is-visible {
  opacity: 1 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .process-item-side {
  align-self: start !important;
  justify-self: end !important;
  width: max-content !important;
  max-width: 190px !important;
  padding: 10px 14px !important;
  border: 1px solid rgba(7, 26, 51, .12) !important;
  border-radius: 999px !important;
  background: #fff !important;
  box-shadow: 0 10px 26px rgba(7, 26, 51, .08) !important;
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
  font-size: clamp(14px, .95vw, 17px) !important;
  line-height: 1.2 !important;
  font-weight: 750 !important;
  letter-spacing: .04em !important;
  text-align: center !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .audience-grid {
  padding-bottom: clamp(28px, 4vw, 64px) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .audience-card {
  min-height: clamp(560px, 58vw, 700px) !important;
  overflow: hidden !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .audience-overlay {
  background:
    linear-gradient(180deg, rgba(7, 26, 51, .10) 0%, rgba(7, 26, 51, .10) 34%, rgba(7, 26, 51, .76) 74%, rgba(7, 26, 51, .95) 100%) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .audience-content {
  bottom: clamp(78px, 7vw, 120px) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .audience-content > span {
  display: inline-flex !important;
  width: max-content !important;
  max-width: 100% !important;
  padding: 7px 10px !important;
  border-radius: 999px !important;
  background: rgba(7, 26, 51, .78) !important;
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
  font-size: clamp(11px, .8vw, 13px) !important;
  line-height: 1.1 !important;
  font-weight: 800 !important;
  letter-spacing: .2em !important;
  text-shadow: none !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .audience-content h3 {
  margin-top: 16px !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .audience-content p {
  max-width: 92% !important;
  font-size: clamp(15px, 1vw, 18px) !important;
  line-height: 1.55 !important;
  color: rgba(255, 255, 255, .92) !important;
  -webkit-text-fill-color: rgba(255, 255, 255, .92) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .audience-section {
  padding-bottom: clamp(90px, 10vh, 140px) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .audience-card {
  min-height: clamp(620px, 62vw, 760px) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .audience-section {
  overflow: visible !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .audience-grid {
  height: auto !important;
  min-height: 0 !important;
  align-items: stretch !important;
  overflow: visible !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .audience-card,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .audience-card:last-child {
  min-height: clamp(680px, 64vw, 820px) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .audience-content {
  bottom: clamp(130px, 10vw, 180px) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .audience-content h3 {
  font-size: clamp(34px, 3vw, 54px) !important;
  line-height: 1.02 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .audience-section {
  min-height: 100svh !important;
  padding-top: clamp(42px, 5vh, 68px) !important;
  padding-bottom: clamp(40px, 5vh, 68px) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .audience-grid {
  margin-top: clamp(24px, 3.6vh, 42px) !important;
  height: min(68vh, 640px) !important;
  padding-bottom: 0 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .audience-card,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .audience-card:last-child {
  min-height: 0 !important;
  height: 100% !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .audience-content {
  bottom: clamp(34px, 4.5vh, 56px) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .audience-content > span {
  font-size: clamp(10px, .68vw, 12px) !important;
  padding: 6px 10px !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .audience-content h3 {
  font-size: clamp(32px, 2.6vw, 48px) !important;
  margin-top: 14px !important;
  margin-bottom: 10px !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .audience-content p {
  font-size: clamp(14px, .9vw, 17px) !important;
  line-height: 1.45 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-visual-overlay {
  background:
    linear-gradient(180deg, rgba(7, 26, 51, .12) 0%, rgba(7, 26, 51, .18) 56%, rgba(7, 26, 51, .70) 100%),
    linear-gradient(90deg, rgba(255, 255, 255, .22), rgba(255, 255, 255, .05)) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-visual-meta {
  left: clamp(18px, 4vw, 72px) !important;
  right: clamp(18px, 4vw, 72px) !important;
  bottom: clamp(18px, 3vw, 42px) !important;
  padding: 14px clamp(14px, 2vw, 26px) !important;
  align-items: center !important;
  border: 1px solid rgba(255, 255, 255, .26) !important;
  border-radius: 999px !important;
  background: rgba(7, 26, 51, .72) !important;
  box-shadow: 0 16px 40px rgba(7, 26, 51, .22) !important;
  backdrop-filter: blur(14px) saturate(1.2) !important;
  -webkit-backdrop-filter: blur(14px) saturate(1.2) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-visual-meta span {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
  font-size: clamp(12px, .85vw, 15px) !important;
  line-height: 1.15 !important;
  font-weight: 800 !important;
  letter-spacing: .16em !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-visual-statement {
  max-width: min(760px, 78vw) !important;
  padding: clamp(26px, 3vw, 46px) !important;
  border-radius: 0 !important;
  background: rgba(7, 26, 51, .64) !important;
  box-shadow: 0 24px 70px rgba(7, 26, 51, .24) !important;
  backdrop-filter: blur(10px) saturate(1.15) !important;
  -webkit-backdrop-filter: blur(10px) saturate(1.15) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-visual-statement h2,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-visual-statement span {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-visual-statement > span {
  font-size: clamp(11px, .8vw, 14px) !important;
  font-weight: 800 !important;
  letter-spacing: .24em !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .property-visual-statement h2 {
  font-size: clamp(42px, 4.6vw, 74px) !important;
  line-height: .98 !important;
  font-weight: 700 !important;
  text-shadow: 0 2px 18px rgba(0, 0, 0, .22) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .trust-grid::before {
  content: none !important;
  display: none !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .trust-grid {
  gap: 14px !important;
  border: 0 !important;
}

body:has(.property-hero) .trust-grid,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .trust-grid,
html[data-theme="amigos-dark"] body:has(.property-hero) .trust-grid {
  border-top: 0 !important;
  border-bottom: 0 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .trust-item,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .trust-item:hover {
  position: relative !important;
  overflow: hidden !important;
  min-height: 300px !important;
  padding: clamp(26px, 2.2vw, 38px) !important;
  background: #fff !important;
  border: 1px solid rgba(7, 26, 51, .14) !important;
  box-shadow: 0 12px 32px rgba(7, 26, 51, .08) !important;
  transform: none !important;
  transition: transform .28s ease, box-shadow .28s ease, border-color .28s ease !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .trust-item:hover {
  border-color: rgba(230, 36, 83, .34) !important;
  box-shadow: 0 22px 54px rgba(7, 26, 51, .13) !important;
  transform: translateY(-8px) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .trust-item::before {
  content: "" !important;
  position: absolute !important;
  left: 0 !important;
  top: 0 !important;
  width: 100% !important;
  height: 5px !important;
  background: linear-gradient(90deg, #F6BE10 0%, #F39125 34%, #E62453 72%, #C73B8E 100%) !important;
  opacity: .22 !important;
  transition: opacity .28s ease, height .28s ease !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .trust-item:hover::before {
  height: 7px !important;
  opacity: 1 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .trust-item::after {
  content: "" !important;
  position: absolute !important;
  right: 22px !important;
  top: 22px !important;
  width: 34px !important;
  height: 34px !important;
  border-radius: 50% !important;
  border: 1px solid rgba(230, 36, 83, .22) !important;
  background: rgba(230, 36, 83, .06) !important;
  opacity: 0 !important;
  transform: scale(.7) !important;
  transition: opacity .28s ease, transform .28s ease !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .trust-item:hover::after {
  opacity: 1 !important;
  transform: scale(1) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .trust-item *,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .trust-item:hover * {
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .trust-item > span {
  color: #E62453 !important;
  -webkit-text-fill-color: #E62453 !important;
  font-size: clamp(13px, .9vw, 16px) !important;
  line-height: 1 !important;
  font-weight: 850 !important;
  letter-spacing: .14em !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .trust-item h3 {
  font-size: clamp(24px, 1.8vw, 34px) !important;
  line-height: 1.12 !important;
  font-weight: 720 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .trust-item p {
  font-size: 17px !important;
  line-height: 1.58 !important;
  color: #314154 !important;
  -webkit-text-fill-color: #314154 !important;
}

body:has(.property-hero) .trust-item,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .trust-item,
html[data-theme="amigos-dark"] body:has(.property-hero) .trust-item {
  border-top: 0 !important;
  border-bottom: 0 !important;
}

body:has(.property-hero) .property-final-cta {
  min-height: clamp(560px, 68vh, 720px) !important;
  padding-top: clamp(84px, 9vh, 120px) !important;
  padding-bottom: clamp(34px, 5vh, 52px) !important;
}

body:has(.property-hero) .final-cta-content {
  width: min(920px, 100%) !important;
}

body:has(.property-hero) .final-cta-content h2 {
  max-width: 860px !important;
  margin: clamp(18px, 2.2vw, 28px) auto !important;
  font-size: clamp(42px, 4.8vw, 76px) !important;
  line-height: .96 !important;
  letter-spacing: 0 !important;
  font-weight: 650 !important;
}

body:has(.property-hero) .final-cta-content > p {
  max-width: 620px !important;
  font-size: 17px !important;
  line-height: 1.65 !important;
}

body:has(.property-hero) .final-cta-actions {
  margin-top: clamp(26px, 3vw, 38px) !important;
}

body:has(.property-hero) .digital-value-section {
  background: #fff !important;
  background-image:
    linear-gradient(180deg, #fff 0%, #F7F9FC 100%) !important;
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
  animation: none !important;
}

body:has(.property-hero) .digital-value-background {
  background: transparent !important;
}

body:has(.property-hero) .digital-value-section .section-label {
  color: #E62453 !important;
  -webkit-text-fill-color: #E62453 !important;
}

body:has(.property-hero) .digital-value-content h2 {
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
  font-size: clamp(44px, 5vw, 78px) !important;
  line-height: .98 !important;
  font-weight: 650 !important;
}

body:has(.property-hero) .digital-value-content > p {
  max-width: 560px !important;
  color: #314154 !important;
  -webkit-text-fill-color: #314154 !important;
  font-size: 17px !important;
  line-height: 1.65 !important;
}

body:has(.property-hero) .digital-note {
  background: #fff !important;
  border-color: rgba(7, 26, 51, .14) !important;
  color: #314154 !important;
  -webkit-text-fill-color: #314154 !important;
  font-size: 22px !important;
  padding: 14px 22px !important;
  box-shadow: 0 12px 28px rgba(7, 26, 51, .08) !important;
}

body:has(.property-hero) .property-care-hub {
  min-height: 100svh !important;
  padding: clamp(52px, 6vh, 78px) clamp(24px, 5vw, 92px) !important;
  background:
    radial-gradient(circle at 50% 46%, rgba(250, 178, 22, .09), transparent 32%),
    linear-gradient(180deg, #fff 0%, #fbfaf7 100%) !important;
  color: var(--pv-ink) !important;
  overflow: hidden !important;
}

body:has(.property-hero) .care-hub-header {
  width: min(880px, 100%) !important;
  margin: 0 auto clamp(28px, 4vh, 42px) !important;
  text-align: center !important;
}

body:has(.property-hero) .care-hub-label {
  display: inline-flex !important;
  align-items: center !important;
  gap: 16px !important;
  margin-bottom: 12px !important;
  color: #9b6a20 !important;
  font-size: clamp(12px, .8vw, 15px) !important;
  font-weight: 650 !important;
  letter-spacing: .32em !important;
}

body:has(.property-hero) .care-hub-label::before,
body:has(.property-hero) .care-hub-label::after {
  content: "" !important;
  width: 38px !important;
  height: 1px !important;
  background: rgba(183, 123, 34, .75) !important;
}

body:has(.property-hero) .care-hub-header h2 {
  margin: 0 !important;
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
  font-size: clamp(40px, 4.1vw, 68px) !important;
  line-height: .98 !important;
  letter-spacing: 0 !important;
  font-weight: 700 !important;
}

body:has(.property-hero) .care-hub-header p {
  max-width: 720px !important;
  margin: 14px auto 0 !important;
  color: #657386 !important;
  -webkit-text-fill-color: #657386 !important;
  font-size: clamp(16px, 1.05vw, 20px) !important;
  line-height: 1.45 !important;
}

body:has(.property-hero) .property-meaning.property-care-hub {
  padding-top: clamp(54px, 6vh, 78px) !important;
  padding-bottom: clamp(52px, 6vh, 78px) !important;
}

body:has(.property-hero) .property-meaning.property-care-hub .care-meaning-header {
  display: grid !important;
  grid-template-columns: minmax(360px, .95fr) minmax(320px, .72fr) !important;
  align-items: start !important;
  gap: clamp(42px, 9vw, 170px) !important;
  width: min(1420px, 100%) !important;
  max-width: 1420px !important;
  margin: 0 auto clamp(30px, 4vh, 46px) !important;
  text-align: left !important;
}

body:has(.property-hero) .property-meaning.property-care-hub .care-meaning-header .care-hub-label {
  justify-content: flex-start !important;
}

body:has(.property-hero) .property-meaning.property-care-hub .care-meaning-header .care-hub-label::before,
body:has(.property-hero) .property-meaning.property-care-hub .care-meaning-header .care-hub-label::after {
  display: none !important;
}

body:has(.property-hero) .property-meaning.property-care-hub .care-meaning-header h2 {
  max-width: 680px !important;
  font-size: clamp(46px, 4.8vw, 86px) !important;
  line-height: .96 !important;
  font-weight: 600 !important;
}

body:has(.property-hero) .property-meaning.property-care-hub .care-meaning-header .meaning-lead {
  max-width: 560px !important;
  margin: 0 !important;
  justify-self: end !important;
  color: #252525 !important;
  -webkit-text-fill-color: #252525 !important;
  font-size: 17px !important;
  line-height: 1.6 !important;
}

body:has(.property-hero) .property-meaning.property-care-hub .care-meaning-map {
  min-height: clamp(440px, 50vh, 560px) !important;
}

body:has(.property-hero) .care-hub-map {
  position: relative !important;
  z-index: 1 !important;
  display: grid !important;
  grid-template-columns: minmax(340px, 1fr) clamp(260px, 22vw, 360px) minmax(340px, 1fr) !important;
  align-items: center !important;
  gap: clamp(28px, 4.2vw, 70px) !important;
  max-width: 1720px !important;
  min-height: 500px !important;
  margin: 0 auto !important;
}

body:has(.property-hero) .care-hub-lines {
  position: absolute !important;
  inset: 0 !important;
  z-index: -1 !important;
  width: 100% !important;
  height: 100% !important;
  pointer-events: none !important;
}

body:has(.property-hero) .care-hub-lines path {
  fill: none !important;
  stroke: rgba(205, 139, 38, .48) !important;
  stroke-width: 1.4 !important;
  vector-effect: non-scaling-stroke !important;
}

body:has(.property-hero) .care-hub-column {
  display: grid !important;
  gap: clamp(14px, 1.8vh, 22px) !important;
}

body:has(.property-hero) .care-service-card {
  position: relative !important;
  display: grid !important;
  grid-template-columns: clamp(92px, 7.5vw, 126px) 42px minmax(0, 1fr) 42px !important;
  align-items: center !important;
  gap: clamp(14px, 1.4vw, 22px) !important;
  min-height: clamp(112px, 12.4vh, 140px) !important;
  padding: 14px clamp(16px, 1.5vw, 24px) 14px 14px !important;
  border: 1px solid rgba(7, 26, 51, .08) !important;
  border-radius: 22px !important;
  background: rgba(255, 255, 255, .84) !important;
  box-shadow: 0 18px 46px rgba(7, 26, 51, .08) !important;
  backdrop-filter: blur(14px) !important;
  -webkit-backdrop-filter: blur(14px) !important;
  overflow: hidden !important;
  transform: translateZ(0) !important;
  transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease !important;
}

body:has(.property-hero) .care-service-card:hover {
  transform: translateY(-3px) !important;
  border-color: rgba(230, 36, 83, .18) !important;
  box-shadow: 0 24px 58px rgba(7, 26, 51, .12) !important;
}

body:has(.property-hero) .care-card-media {
  width: 100% !important;
  aspect-ratio: 1.18 / 1 !important;
  border-radius: 14px !important;
  overflow: hidden !important;
  background: #eef1f4 !important;
}

body:has(.property-hero) .care-card-media img {
  display: block !important;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
}

body:has(.property-hero) .care-card-icon,
body:has(.property-hero) .care-card-arrow {
  display: grid !important;
  place-items: center !important;
  width: 42px !important;
  height: 42px !important;
  border-radius: 999px !important;
  background: rgba(250, 178, 22, .12) !important;
  color: #b87513 !important;
  -webkit-text-fill-color: #b87513 !important;
  font-size: 13px !important;
  font-weight: 750 !important;
}

body:has(.property-hero) .care-card-arrow {
  background: rgba(7, 26, 51, .045) !important;
  color: #9b6a20 !important;
  -webkit-text-fill-color: #9b6a20 !important;
  font-size: 18px !important;
}

body:has(.property-hero) .care-card-copy {
  min-width: 0 !important;
}

body:has(.property-hero) .care-card-copy h3 {
  margin: 0 0 7px !important;
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
  font-size: clamp(17px, 1.05vw, 21px) !important;
  line-height: 1.14 !important;
  font-weight: 650 !important;
  letter-spacing: 0 !important;
}

body:has(.property-hero) .care-card-copy p {
  margin: 0 !important;
  max-width: 28ch !important;
  color: #6d7a8d !important;
  -webkit-text-fill-color: #6d7a8d !important;
  font-size: clamp(14px, .85vw, 16px) !important;
  line-height: 1.38 !important;
}

body:has(.property-hero) .care-hub-center {
  position: relative !important;
  display: grid !important;
  place-items: center !important;
  min-height: clamp(280px, 35vh, 380px) !important;
}

body:has(.property-hero) .care-hub-orbit {
  position: absolute !important;
  inset: 0 !important;
  margin: auto !important;
  width: min(100%, 360px) !important;
  aspect-ratio: 1 !important;
  border-radius: 50% !important;
  border: 1px solid rgba(205, 139, 38, .24) !important;
}

body:has(.property-hero) .care-hub-orbit::before {
  content: "" !important;
  position: absolute !important;
  inset: 16px !important;
  border-radius: inherit !important;
  border: 1px solid rgba(205, 139, 38, .16) !important;
}

body:has(.property-hero) .care-hub-circle {
  position: relative !important;
  display: grid !important;
  place-items: center !important;
  width: clamp(220px, 18vw, 300px) !important;
  aspect-ratio: 1 !important;
  padding: 34px !important;
  border-radius: 50% !important;
  text-align: center !important;
  background:
    radial-gradient(circle at 42% 24%, rgba(255, 255, 255, .96), rgba(255, 255, 255, .76) 48%, rgba(252, 246, 233, .82) 100%) !important;
  border: 1px solid rgba(205, 139, 38, .18) !important;
  box-shadow: 0 28px 70px rgba(7, 26, 51, .10), inset 0 0 0 12px rgba(255, 255, 255, .52) !important;
}

body:has(.property-hero) .care-hub-circle span {
  color: #E62453 !important;
  -webkit-text-fill-color: #E62453 !important;
  font-size: 11px !important;
  font-weight: 700 !important;
  letter-spacing: .32em !important;
}

body:has(.property-hero) .care-hub-circle strong {
  display: block !important;
  margin-top: 14px !important;
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
  font-size: clamp(25px, 1.75vw, 34px) !important;
  line-height: 1.08 !important;
  letter-spacing: 0 !important;
  font-weight: 650 !important;
}

body:has(.property-hero) .care-hub-circle i {
  display: block !important;
  width: 68px !important;
  height: 3px !important;
  margin: 12px auto 0 !important;
  border-radius: 99px !important;
  background: linear-gradient(90deg, #FAB216, #F2602D, #E62453) !important;
}

body:has(.property-hero) .care-hub-circle p {
  margin: 12px 0 0 !important;
  color: #657386 !important;
  -webkit-text-fill-color: #657386 !important;
  font-size: clamp(13px, .86vw, 16px) !important;
  line-height: 1.42 !important;
}

@media (max-width: 1180px) {
  body:has(.property-hero) .property-care-hub {
    min-height: auto !important;
  }

  body:has(.property-hero) .care-hub-map {
    grid-template-columns: 1fr !important;
    max-width: 760px !important;
    min-height: 0 !important;
  }

  body:has(.property-hero) .care-hub-center {
    order: -1 !important;
    min-height: 300px !important;
  }

  body:has(.property-hero) .care-hub-lines {
    display: none !important;
  }
}

@media (max-width: 640px) {
  body:has(.property-hero) .property-care-hub {
    padding: 54px 18px !important;
  }

  body:has(.property-hero) .care-hub-header {
    text-align: left !important;
  }

  body:has(.property-hero) .care-hub-label::before,
  body:has(.property-hero) .care-hub-label::after {
    display: none !important;
  }

  body:has(.property-hero) .care-service-card {
    grid-template-columns: 86px 1fr 38px !important;
    gap: 14px !important;
    min-height: 112px !important;
    border-radius: 18px !important;
  }

  body:has(.property-hero) .care-card-icon {
    position: absolute !important;
    left: 84px !important;
    top: 12px !important;
    width: 30px !important;
    height: 30px !important;
    font-size: 11px !important;
  }

  body:has(.property-hero) .care-card-copy {
    padding-left: 12px !important;
  }

  body:has(.property-hero) .care-card-copy h3 {
    font-size: 17px !important;
  }

  body:has(.property-hero) .care-card-copy p {
    font-size: 14px !important;
  }
}

html[data-theme="amigos-dark"] body:has(.property-hero) .building-status-card {
  background:
    linear-gradient(105deg, rgba(255, 255, 255, .92) 0%, rgba(255, 255, 255, .78) 48%, rgba(238, 208, 170, .72) 100%) !important;
  border: 1px solid rgba(255, 255, 255, .82) !important;
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
  box-shadow: 0 28px 70px rgba(0, 0, 0, .28), inset 0 1px 0 rgba(255, 255, 255, .86) !important;
  backdrop-filter: blur(22px) saturate(1.22) !important;
  -webkit-backdrop-filter: blur(22px) saturate(1.22) !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .building-status-card::before {
  content: "" !important;
  position: absolute !important;
  inset: 0 auto 0 0 !important;
  width: 6px !important;
  background: linear-gradient(180deg, #F6BE10 0%, #F39125 32%, #E62453 70%, #C73B8E 100%) !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .building-status-card *,
html[data-theme="amigos-dark"] body:has(.property-hero) .building-status-card .status-card-title,
html[data-theme="amigos-dark"] body:has(.property-hero) .building-status-card .status-progress-labels {
  color: var(--pv-ink) !important;
  -webkit-text-fill-color: var(--pv-ink) !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .building-status-card .status-card-label {
  color: #E62453 !important;
  -webkit-text-fill-color: #E62453 !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .building-status-card p {
  color: #26364A !important;
  -webkit-text-fill-color: #26364A !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .building-status-card .status-progress {
  background: rgba(7, 26, 51, .14) !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .building-status-card .status-progress span {
  background: linear-gradient(90deg, #F6BE10 0%, #F39125 36%, #E62453 78%, #C73B8E 100%) !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .property-meaning.property-care-hub .care-meaning-header h2 {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .property-meaning.property-care-hub .care-meaning-header .meaning-lead {
  color: rgba(255, 255, 255, .82) !important;
  -webkit-text-fill-color: rgba(255, 255, 255, .82) !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .property-meaning.property-care-hub .care-card-copy h3,
html[data-theme="amigos-dark"] body:has(.property-hero) .property-meaning.property-care-hub .care-hub-circle strong {
  color: #071A33 !important;
  -webkit-text-fill-color: #071A33 !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .property-meaning.property-care-hub .care-card-copy p,
html[data-theme="amigos-dark"] body:has(.property-hero) .property-meaning.property-care-hub .care-hub-circle p {
  color: #647287 !important;
  -webkit-text-fill-color: #647287 !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .property-meaning.property-care-hub .care-service-card {
  background: rgba(255, 255, 255, .88) !important;
  border-color: rgba(255, 255, 255, .34) !important;
  box-shadow: 0 18px 44px rgba(0, 0, 0, .22) !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .property-meaning.property-care-hub .care-service-card:hover {
  transform: translateY(-6px) scale(1.012) !important;
  background: rgba(255, 255, 255, .95) !important;
  border-color: rgba(230, 36, 83, .55) !important;
  box-shadow: 0 26px 68px rgba(230, 36, 83, .20), 0 18px 48px rgba(0, 0, 0, .28) !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .property-meaning.property-care-hub .care-card-icon,
html[data-theme="amigos-dark"] body:has(.property-hero) .property-meaning.property-care-hub .care-card-arrow {
  background: linear-gradient(135deg, #FAB216 0%, #F2602D 48%, #E62453 100%) !important;
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
  box-shadow: 0 12px 26px rgba(230, 36, 83, .22) !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .property-meaning.property-care-hub .care-service-card:hover .care-card-icon,
html[data-theme="amigos-dark"] body:has(.property-hero) .property-meaning.property-care-hub .care-service-card:hover .care-card-arrow {
  transform: scale(1.08) !important;
  box-shadow: 0 16px 34px rgba(230, 36, 83, .34) !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .property-meaning.property-care-hub .care-card-icon,
html[data-theme="amigos-dark"] body:has(.property-hero) .property-meaning.property-care-hub .care-card-arrow {
  transition: transform .22s ease, box-shadow .22s ease !important;
}

body:has(.property-hero) .inspection-heading > p,
body:has(.property-hero) .inspection-information p,
body:has(.property-hero) .process-header > p,
body:has(.property-hero) .process-item-content p,
body:has(.property-hero) .prevention-heading p,
body:has(.property-hero) .service-system-header > p,
body:has(.property-hero) .lifecycle-copy p,
body:has(.property-hero) .digital-value-content > p,
body:has(.property-hero) .final-cta-content p,
body:has(.property-hero) .trust-item p,
body:has(.property-hero) .meaning-active-panel p {
  font-size: 17px !important;
  line-height: 1.58 !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .inspection-heading > p,
html[data-theme="amigos-dark"] body:has(.property-hero) .inspection-information p,
html[data-theme="amigos-dark"] body:has(.property-hero) .process-header > p,
html[data-theme="amigos-dark"] body:has(.property-hero) .process-item-content p,
html[data-theme="amigos-dark"] body:has(.property-hero) .prevention-heading p,
html[data-theme="amigos-dark"] body:has(.property-hero) .service-system-header > p,
html[data-theme="amigos-dark"] body:has(.property-hero) .lifecycle-copy p,
html[data-theme="amigos-dark"] body:has(.property-hero) .digital-value-content > p,
html[data-theme="amigos-dark"] body:has(.property-hero) .final-cta-content p,
html[data-theme="amigos-dark"] body:has(.property-hero) .trust-item p,
html[data-theme="amigos-dark"] body:has(.property-hero) .meaning-active-panel p {
  font-size: 17px !important;
  line-height: 1.58 !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .process-timeline {
  background: transparent !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .process-item,
html[data-theme="amigos-dark"] body:has(.property-hero) .process-item.active,
html[data-theme="amigos-dark"] body:has(.property-hero) .process-item.is-visible {
  background:
    linear-gradient(90deg, rgba(255, 255, 255, .055), rgba(255, 255, 255, .025)) !important;
  border: 1px solid rgba(255, 255, 255, .08) !important;
  border-radius: 28px !important;
  box-shadow: none !important;
  backdrop-filter: blur(10px) !important;
  -webkit-backdrop-filter: blur(10px) !important;
  overflow: hidden !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .process-item::before,
html[data-theme="amigos-dark"] body:has(.property-hero) .process-item::after {
  display: none !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .process-item-content {
  background: transparent !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .process-item:hover {
  background:
    linear-gradient(90deg, rgba(255, 255, 255, .085), rgba(255, 255, 255, .035)) !important;
  border-color: rgba(230, 36, 83, .24) !important;
  transform: translateY(-2px) !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .process-marker {
  border: 0 !important;
  box-shadow: 0 14px 32px rgba(230, 36, 83, .22) !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .process-item-side {
  color: rgba(255, 255, 255, .42) !important;
  -webkit-text-fill-color: rgba(255, 255, 255, .42) !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .service-card-content a {
  display: inline-flex !important;
  align-items: center !important;
  gap: 8px !important;
  width: fit-content !important;
  margin-top: clamp(18px, 2vw, 28px) !important;
  padding: 10px 14px !important;
  border-radius: 999px !important;
  background: rgba(255, 255, 255, .10) !important;
  border: 1px solid rgba(255, 255, 255, .18) !important;
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
  font-size: 14px !important;
  line-height: 1 !important;
  font-weight: 650 !important;
  text-decoration: none !important;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .10) !important;
  transition: transform .22s ease, background .22s ease, border-color .22s ease, box-shadow .22s ease !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .service-card-content a span {
  display: inline-grid !important;
  place-items: center !important;
  width: 20px !important;
  height: 20px !important;
  border-radius: 50% !important;
  background: linear-gradient(135deg, #FAB216 0%, #F2602D 46%, #E62453 100%) !important;
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
  font-size: 12px !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .service-system-card:hover .service-card-content a {
  background: rgba(255, 255, 255, .16) !important;
  border-color: rgba(255, 255, 255, .32) !important;
  transform: translateY(-1px) !important;
  box-shadow: 0 12px 28px rgba(0, 0, 0, .18) !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .lifecycle-point:hover *,
html[data-theme="amigos-dark"] body:has(.property-hero) .lifecycle-point:hover span,
html[data-theme="amigos-dark"] body:has(.property-hero) .lifecycle-point:hover strong {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .lifecycle-point:hover span {
  color: #FFE16A !important;
  -webkit-text-fill-color: #FFE16A !important;
}

body:has(.property-hero) .lifecycle-point span,
html[data-theme="amigos-dark"] body:has(.property-hero) .lifecycle-point span {
  color: #FFE16A !important;
  -webkit-text-fill-color: #FFE16A !important;
  font-size: 22px !important;
  line-height: 1 !important;
  font-weight: 800 !important;
  text-shadow: 0 2px 10px rgba(0, 0, 0, .35) !important;
}

body:has(.property-hero) .lifecycle-point strong,
html[data-theme="amigos-dark"] body:has(.property-hero) .lifecycle-point strong {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
  margin-top: 12px !important;
  font-size: 18px !important;
  line-height: 1.2 !important;
  font-weight: 700 !important;
  text-shadow: 0 2px 12px rgba(0, 0, 0, .42) !important;
}

body:has(.property-hero) .lifecycle-point,
html[data-theme="amigos-dark"] body:has(.property-hero) .lifecycle-point {
  background: rgba(255, 255, 255, .10) !important;
  border-color: rgba(255, 255, 255, .28) !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .digital-value-section .section-label {
  color: #E62453 !important;
  -webkit-text-fill-color: #E62453 !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .digital-value-content h2 {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .digital-value-content > p {
  color: rgba(255, 255, 255, .78) !important;
  -webkit-text-fill-color: rgba(255, 255, 255, .78) !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .digital-note {
  background: rgba(255, 255, 255, .10) !important;
  border-color: rgba(255, 255, 255, .16) !important;
  color: rgba(255, 255, 255, .82) !important;
  -webkit-text-fill-color: rgba(255, 255, 255, .82) !important;
  font-size: 22px !important;
  padding: 14px 22px !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .digital-interface,
html[data-theme="amigos-dark"] body:has(.property-hero) .interface-card {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .interface-topbar span,
html[data-theme="amigos-dark"] body:has(.property-hero) .interface-card > span {
  color: rgba(255, 255, 255, .72) !important;
  -webkit-text-fill-color: rgba(255, 255, 255, .72) !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .interface-card strong {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .interface-card small {
  color: rgba(255, 255, 255, .76) !important;
  -webkit-text-fill-color: rgba(255, 255, 255, .76) !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .interface-card:nth-child(2),
html[data-theme="amigos-dark"] body:has(.property-hero) .interface-card:nth-child(2) * {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

body:has(.property-hero) .process-timeline {
  width: min(1120px, 100%) !important;
  margin-top: clamp(34px, 4.5vw, 54px) !important;
  display: grid !important;
  grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  gap: 14px !important;
}

body:has(.property-hero) .process-line,
body:has(.property-hero) .process-line-progress {
  display: none !important;
}

body:has(.property-hero) .process-item,
body:has(.property-hero) .process-item.active,
body:has(.property-hero) .process-item.is-visible,
html[data-theme="amigos-dark"] body:has(.property-hero) .process-item,
html[data-theme="amigos-dark"] body:has(.property-hero) .process-item.active,
html[data-theme="amigos-dark"] body:has(.property-hero) .process-item.is-visible,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .process-item,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .process-item.active,
html:not([data-theme="amigos-dark"]) body:has(.property-hero) .process-item.is-visible {
  position: relative !important;
  display: grid !important;
  grid-template-columns: 52px minmax(0, 1fr) !important;
  align-items: start !important;
  gap: 18px !important;
  min-height: 0 !important;
  padding: 22px 22px 24px !important;
  opacity: 1 !important;
  overflow: visible !important;
  border-radius: 18px !important;
  border: 1px solid rgba(255, 255, 255, .12) !important;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, .085), rgba(255, 255, 255, .028)) !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  transform: none !important;
}

body:has(.property-hero) .process-item:hover,
html[data-theme="amigos-dark"] body:has(.property-hero) .process-item:hover {
  border-color: rgba(230, 36, 83, .34) !important;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, .11), rgba(255, 255, 255, .04)) !important;
  transform: translateY(-2px) !important;
}

body:has(.property-hero) .process-marker,
html[data-theme="amigos-dark"] body:has(.property-hero) .process-marker {
  position: static !important;
  width: 52px !important;
  height: 52px !important;
  min-height: 0 !important;
  border: 0 !important;
  border-radius: 15px !important;
  background: linear-gradient(145deg, #F6BE10 0%, #F39125 34%, #E62453 70%, #C73B8E 100%) !important;
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
  font-size: 15px !important;
  font-weight: 800 !important;
  letter-spacing: .04em !important;
  box-shadow: 0 14px 30px rgba(230, 36, 83, .22) !important;
}

body:has(.property-hero) .process-item-content,
html[data-theme="amigos-dark"] body:has(.property-hero) .process-item-content {
  position: relative !important;
  min-width: 0 !important;
  padding: 0 !important;
  background: transparent !important;
}

body:has(.property-hero) .process-item-content::after {
  display: none !important;
}

body:has(.property-hero) .process-item-content > span {
  font-size: 11px !important;
  line-height: 1 !important;
  letter-spacing: .22em !important;
  color: #FF3D6E !important;
  -webkit-text-fill-color: #FF3D6E !important;
  font-weight: 800 !important;
}

body:has(.property-hero) .process-item-content h3 {
  max-width: 460px !important;
  margin: 10px 0 8px !important;
  font-size: clamp(22px, 1.9vw, 31px) !important;
  line-height: 1.12 !important;
  font-weight: 650 !important;
  letter-spacing: 0 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.property-hero) .process-item-content h3 {
  color: #071A33 !important;
  -webkit-text-fill-color: #071A33 !important;
}

html[data-theme="amigos-dark"] body:has(.property-hero) .process-item-content h3 {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

body:has(.property-hero) .process-item-content p,
html[data-theme="amigos-dark"] body:has(.property-hero) .process-item-content p {
  max-width: 500px !important;
  font-size: 16px !important;
  line-height: 1.5 !important;
  color: rgba(255, 255, 255, .76) !important;
  -webkit-text-fill-color: rgba(255, 255, 255, .76) !important;
}

body:has(.property-hero) .process-item-side,
html[data-theme="amigos-dark"] body:has(.property-hero) .process-item-side {
  align-self: start !important;
  justify-self: end !important;
  position: absolute !important;
  right: 18px !important;
  top: 18px !important;
  width: auto !important;
  max-width: none !important;
  margin: 0 !important;
  padding: 7px 10px !important;
  border: 1px solid rgba(255, 255, 255, .14) !important;
  border-radius: 999px !important;
  color: rgba(255, 255, 255, .56) !important;
  -webkit-text-fill-color: rgba(255, 255, 255, .56) !important;
  font-size: 10px !important;
  line-height: 1 !important;
  letter-spacing: .14em !important;
  text-align: right !important;
}

@media (max-width: 820px) {
  body:has(.property-hero) .process-timeline {
    grid-template-columns: 1fr !important;
  }

  body:has(.property-hero) .process-item,
  body:has(.property-hero) .process-item.active,
  body:has(.property-hero) .process-item.is-visible {
    grid-template-columns: 48px minmax(0, 1fr) !important;
  }

  body:has(.property-hero) .process-marker {
    width: 48px !important;
    height: 48px !important;
    min-height: 0 !important;
  }

  body:has(.property-hero) .process-item-side {
    display: none !important;
  }
}

@media (max-width: 640px) {
  .property-hero {
    overflow: hidden !important;
    padding: 110px 30px 46px !important;
  }

  .property-hero .hero-content,
  .property-hero .hero-introduction {
    display: block !important;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
  }

  .property-hero .hero-label {
    max-width: 100% !important;
    letter-spacing: .18em !important;
    line-height: 1.5 !important;
    white-space: normal !important;
    overflow-wrap: anywhere !important;
  }

  .property-hero .hero-introduction h1 {
    width: 100% !important;
    max-width: 300px !important;
    font-size: 30px !important;
    line-height: 1.14 !important;
    letter-spacing: 0 !important;
    white-space: normal !important;
    overflow-wrap: anywhere !important;
  }

  .property-hero .hero-introduction > p {
    width: 100% !important;
    max-width: 300px !important;
    font-size: 16px !important;
    line-height: 1.6 !important;
    white-space: normal !important;
    overflow-wrap: anywhere !important;
  }

  .property-hero .hero-actions {
    width: 100% !important;
    max-width: 300px !important;
  }

  .property-hero .hero-actions .property-button {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
    justify-content: center !important;
    white-space: normal !important;
  }
}
`;

export default function Page() {
  return (
    <AssetPageShell
      css={["/werterhalt.css"]}
      scripts={["/werterhalt.js", "/script.js"]}
    >
      <PropertyValuePreservationContent />
      <style dangerouslySetInnerHTML={{ __html: forcedPropertyThemeCss }} data-property-theme-force />
    </AssetPageShell>
  );
}
