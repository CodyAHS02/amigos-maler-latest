import AssetPageShell from "@/components/AssetPageShell";
import PartnersContent from "./PartnersContent";

export const metadata = { title: "Partners | Amigos Maler" };

const forcedPartnersThemeCss = `
:root {
  --partners-logo-mix: linear-gradient(120deg, #F6BE10 0%, #F39125 28%, #E62453 58%, #C73B8E 78%, #F6BE10 100%);
  --partners-logo-mix-soft: linear-gradient(120deg, rgba(246, 190, 16, .96) 0%, rgba(243, 145, 37, .94) 28%, rgba(230, 36, 83, .94) 58%, rgba(199, 59, 142, .90) 78%, rgba(246, 190, 16, .96) 100%);
  --partners-navy: #071A33;
  --partners-ink: #050505;
}

@keyframes homeMovingBrandGradient {
  0% { background-position: 0% 18%; }
  50% { background-position: 100% 62%; }
  100% { background-position: 18% 100%; }
}

body:has(.partners-page),
body[data-page="partners"] {
  background: var(--partners-navy) !important;
}

.partners-page {
  background: var(--partners-navy) !important;
  color: #fff !important;
}

.partners-kicker {
  color: #E62453 !important;
  -webkit-text-fill-color: #E62453 !important;
}

html:not([data-theme="amigos-dark"]) .partners-section-heading h2,
html:not([data-theme="amigos-dark"]) .standards-copy h2,
html:not([data-theme="amigos-dark"]) .partners-hero-copy h1,
html:not([data-theme="amigos-dark"]) .partner-cta h2 {
  background: var(--partners-logo-mix) !important;
  background-size: 320% 320% !important;
  color: transparent !important;
  -webkit-text-fill-color: transparent !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  animation: homeMovingBrandGradient 7s ease-in-out infinite alternate !important;
}

.partners-hero,
.partner-imagery,
.partners-intro,
.partner-types,
.partner-flow,
.partner-standards,
.partner-cta {
  background: var(--partners-navy) !important;
  color: #fff !important;
}

.partners-hero::before,
.partners-hero::after,
.partner-cta::before {
  opacity: 0 !important;
}

.partner-marquee,
.partner-cta,
.network-node::before,
.partner-card::before,
.flow-step::before {
  background: var(--partners-logo-mix) !important;
  background-size: 240% 240% !important;
  animation: homeMovingBrandGradient 7s ease-in-out infinite alternate !important;
}

.partner-network .network-core,
.imagery-card,
.partner-card-grid,
.partner-card,
.flow-track,
.flow-step,
.standards-list,
.standard-row {
  background: rgba(255, 255, 255, .055) !important;
  border-color: rgba(255, 255, 255, .18) !important;
}

.network-node:nth-of-type(1),
.network-node:nth-of-type(2),
.network-node:nth-of-type(3),
.network-node:nth-of-type(4),
.partner-card:nth-child(1),
.partner-card:nth-child(2),
.partner-card:nth-child(3),
.partner-card:nth-child(4) {
  background: var(--partners-logo-mix) !important;
  background-size: 240% 240% !important;
  animation: homeMovingBrandGradient 7s ease-in-out infinite alternate !important;
  color: #fff !important;
}

html[data-theme="amigos-dark"] .network-node *,
html[data-theme="amigos-dark"] .partner-card *,
html[data-theme="amigos-dark"] .flow-step:hover *,
html[data-theme="amigos-dark"] .partner-cta *,
html[data-theme="amigos-dark"] .partner-marquee *,
html[data-theme="amigos-dark"] .partner-flow *,
html[data-theme="amigos-dark"] .partners-page .partner-cta .partners-kicker {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

html[data-theme="amigos-dark"] .partners-hero-copy > p,
html[data-theme="amigos-dark"] .partners-lead p,
html[data-theme="amigos-dark"] .standards-copy > p,
html[data-theme="amigos-dark"] .network-core span,
html[data-theme="amigos-dark"] .partner-cta-inner > p {
  color: rgba(255, 255, 255, .78) !important;
  -webkit-text-fill-color: rgba(255, 255, 255, .78) !important;
}

html[data-theme="amigos-dark"] .standard-row p,
html[data-theme="amigos-dark"] .partner-card p,
html[data-theme="amigos-dark"] .flow-step p {
  color: rgba(255, 255, 255, .86) !important;
  -webkit-text-fill-color: rgba(255, 255, 255, .86) !important;
}

html[data-theme="amigos-dark"] .partners-btn-primary {
  background: var(--partners-logo-mix) !important;
  background-size: 240% 240% !important;
  border-color: transparent !important;
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

.partners-btn-outline {
  background:
    linear-gradient(var(--partners-navy), var(--partners-navy)) padding-box,
    var(--partners-logo-mix) border-box !important;
  background-size: 100% 100%, 240% 240% !important;
  border: 1px solid transparent !important;
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

html:not([data-theme="amigos-dark"]) body:has(.partners-page),
html:not([data-theme="amigos-dark"]) body[data-page="partners"] {
  background: #fff !important;
}

html:not([data-theme="amigos-dark"]) .partners-page,
html:not([data-theme="amigos-dark"]) .partners-hero,
html:not([data-theme="amigos-dark"]) .partner-imagery,
html:not([data-theme="amigos-dark"]) .partners-intro,
html:not([data-theme="amigos-dark"]) .partner-types,
html:not([data-theme="amigos-dark"]) .partner-flow,
html:not([data-theme="amigos-dark"]) .partner-standards,
html:not([data-theme="amigos-dark"]) .partner-cta {
  background: #fff !important;
  color: #071A33 !important;
}

html:not([data-theme="amigos-dark"]) .partners-page,
html:not([data-theme="amigos-dark"]) .partners-hero,
html:not([data-theme="amigos-dark"]) .partner-imagery,
html:not([data-theme="amigos-dark"]) .partners-intro,
html:not([data-theme="amigos-dark"]) .partner-types,
html:not([data-theme="amigos-dark"]) .partner-flow,
html:not([data-theme="amigos-dark"]) .partner-standards,
html:not([data-theme="amigos-dark"]) .partner-cta {
  color: #050505 !important;
}

html:not([data-theme="amigos-dark"]) .partners-hero {
  min-height: 100vh !important;
  padding: clamp(124px, 12vh, 150px) 0 clamp(54px, 7vh, 84px) !important;
}

html:not([data-theme="amigos-dark"]) .partners-hero::before {
  opacity: .34 !important;
  background-image:
    linear-gradient(rgba(255, 122, 26, .20) 1px, transparent 1px),
    linear-gradient(90deg, rgba(230, 36, 83, .18) 1px, transparent 1px) !important;
}

html:not([data-theme="amigos-dark"]) .partners-hero::after {
  opacity: .20 !important;
  background: radial-gradient(circle, rgba(230, 36, 83, .30), transparent 68%) !important;
}

html:not([data-theme="amigos-dark"]) .partners-section-heading h2,
html:not([data-theme="amigos-dark"]) .standards-copy h2,
html:not([data-theme="amigos-dark"]) .partner-cta h2 {
  background: var(--partners-logo-mix) !important;
  background-size: 240% 240% !important;
  color: transparent !important;
  -webkit-text-fill-color: transparent !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
}

html:not([data-theme="amigos-dark"]) .partners-hero-copy > p,
html:not([data-theme="amigos-dark"]) .partners-lead p,
html:not([data-theme="amigos-dark"]) .standards-copy > p,
html:not([data-theme="amigos-dark"]) .standard-row p,
html:not([data-theme="amigos-dark"]) .partner-card p,
html:not([data-theme="amigos-dark"]) .flow-step p,
html:not([data-theme="amigos-dark"]) .network-core span,
html:not([data-theme="amigos-dark"]) .partner-cta-inner > p {
  color: #333 !important;
  -webkit-text-fill-color: #333 !important;
}

html:not([data-theme="amigos-dark"]) .partners-hero-copy h1,
html:not([data-theme="amigos-dark"]) .partners-hero-copy h1 * {
  background: none !important;
  color: #050505 !important;
  -webkit-text-fill-color: #050505 !important;
}

html:not([data-theme="amigos-dark"]) .partner-card-grid,
html:not([data-theme="amigos-dark"]) .partner-card,
html:not([data-theme="amigos-dark"]) .flow-track,
html:not([data-theme="amigos-dark"]) .flow-step,
html:not([data-theme="amigos-dark"]) .standard-row,
html:not([data-theme="amigos-dark"]) .standards-list,
html:not([data-theme="amigos-dark"]) .network-core {
  background: #fff !important;
  border-color: rgba(7, 26, 51, .14) !important;
}

html:not([data-theme="amigos-dark"]) .partner-card,
html:not([data-theme="amigos-dark"]) .flow-step,
html:not([data-theme="amigos-dark"]) .network-node {
  background: var(--partners-logo-mix) !important;
  background-size: 240% 240% !important;
  border-color: rgba(255, 122, 26, .58) !important;
  box-shadow: 0 24px 64px rgba(230, 36, 83, .12), 0 16px 42px rgba(255, 122, 26, .12) !important;
  animation: homeMovingBrandGradient 7s ease-in-out infinite alternate !important;
}

html:not([data-theme="amigos-dark"]) .network-node *,
html:not([data-theme="amigos-dark"]) .partner-card *,
html:not([data-theme="amigos-dark"]) .flow-step *,
html:not([data-theme="amigos-dark"]) .partner-card h3,
html:not([data-theme="amigos-dark"]) .flow-step h3,
html:not([data-theme="amigos-dark"]) .partner-card p,
html:not([data-theme="amigos-dark"]) .flow-step p {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

html:not([data-theme="amigos-dark"]) .partner-card:hover,
html:not([data-theme="amigos-dark"]) .flow-step:hover {
  background: var(--partners-logo-mix) !important;
  background-size: 240% 240% !important;
  opacity: .82 !important;
  box-shadow: 0 0 0 1px rgba(255, 210, 31, .85), 0 24px 72px rgba(230, 36, 83, .24), 0 18px 52px rgba(255, 122, 26, .22) !important;
}

html:not([data-theme="amigos-dark"]) .partner-card:hover *,
html:not([data-theme="amigos-dark"]) .flow-step:hover * {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

html:not([data-theme="amigos-dark"]) .partners-kicker,
html:not([data-theme="amigos-dark"]) .imagery-card figcaption span {
  color: #050505 !important;
  -webkit-text-fill-color: #050505 !important;
}

html:not([data-theme="amigos-dark"]) .partners-btn-primary {
  background: var(--partners-logo-mix) !important;
  background-size: 240% 240% !important;
  border-color: transparent !important;
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
  animation: homeMovingBrandGradient 7s ease-in-out infinite alternate !important;
}

html:not([data-theme="amigos-dark"]) .partners-btn-primary * {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

html:not([data-theme="amigos-dark"]) .partners-btn-outline {
  background:
    linear-gradient(#fff, #fff) padding-box,
    var(--partners-logo-mix) border-box !important;
  background-size: 100% 100%, 240% 240% !important;
  border: 2px solid transparent !important;
  color: #050505 !important;
  -webkit-text-fill-color: #050505 !important;
}

html:not([data-theme="amigos-dark"]) .partners-btn-outline * {
  color: #050505 !important;
  -webkit-text-fill-color: #050505 !important;
}

html:not([data-theme="amigos-dark"]) .partner-network .network-rings,
html:not([data-theme="amigos-dark"]) .partner-network .network-rings::before,
html:not([data-theme="amigos-dark"]) .partner-network .network-rings::after {
  border-color: rgba(230, 36, 83, .34) !important;
}

html:not([data-theme="amigos-dark"]) .partner-network .network-core {
  background: rgba(255, 255, 255, .86) !important;
  border-color: rgba(230, 36, 83, .25) !important;
  box-shadow: 0 28px 80px rgba(5, 5, 5, .10) !important;
}

html:not([data-theme="amigos-dark"]) .partner-network .network-core span {
  color: #333 !important;
  -webkit-text-fill-color: #333 !important;
}

html:not([data-theme="amigos-dark"]) .partner-imagery {
  min-height: 100vh !important;
  padding: clamp(70px, 8vh, 96px) 0 !important;
}

html:not([data-theme="amigos-dark"]) .imagery-grid {
  height: min(680px, calc(100vh - 160px)) !important;
  grid-template-rows: repeat(2, minmax(0, 1fr)) !important;
}

html:not([data-theme="amigos-dark"]) .imagery-card,
html:not([data-theme="amigos-dark"]) .imagery-card-large {
  min-height: 0 !important;
  background: #F7F1E7 !important;
  box-shadow: 0 18px 54px rgba(5, 5, 5, .10) !important;
}

html:not([data-theme="amigos-dark"]) .imagery-card::after {
  background: linear-gradient(0deg, rgba(255, 255, 255, .92), rgba(255, 255, 255, .18) 62%) !important;
}

html:not([data-theme="amigos-dark"]) .imagery-card figcaption,
html:not([data-theme="amigos-dark"]) .imagery-card figcaption strong {
  color: #050505 !important;
  -webkit-text-fill-color: #050505 !important;
}

html:not([data-theme="amigos-dark"]) .standard-row {
  padding: 34px 28px !important;
  transition: background .35s ease, box-shadow .35s ease, opacity .35s ease, transform .35s ease !important;
}

html:not([data-theme="amigos-dark"]) .standard-row:hover {
  background: var(--partners-logo-mix) !important;
  background-size: 240% 240% !important;
  box-shadow: 0 18px 50px rgba(230, 36, 83, .16), 0 10px 32px rgba(255, 122, 26, .14) !important;
  transform: translateX(10px) !important;
}

html:not([data-theme="amigos-dark"]) .standard-row:hover *,
html:not([data-theme="amigos-dark"]) .standard-row:hover span,
html:not([data-theme="amigos-dark"]) .standard-row:hover p {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

html:not([data-theme="amigos-dark"]) .partner-cta {
  background: var(--partners-logo-mix) !important;
  background-size: 240% 240% !important;
  animation: homeMovingBrandGradient 7s ease-in-out infinite alternate !important;
}

html:not([data-theme="amigos-dark"]) .partner-cta h2,
html:not([data-theme="amigos-dark"]) .partner-cta .partners-kicker,
html:not([data-theme="amigos-dark"]) .partner-cta p {
  background: none !important;
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

html:not([data-theme="amigos-dark"]) .partners-page .site-header:not(.is-scrolled):not(.scrolled) .site-nav a,
html:not([data-theme="amigos-dark"]) body:has(.partners-page) .site-header:not(.is-scrolled):not(.scrolled) .site-nav a,
html:not([data-theme="amigos-dark"]) body[data-page="partners"] .site-header:not(.is-scrolled):not(.scrolled) .site-nav a,
html:not([data-theme="amigos-dark"]) body:has(.partners-page) .site-header:not(.is-scrolled):not(.scrolled) .dropdown-trigger,
html:not([data-theme="amigos-dark"]) body[data-page="partners"] .site-header:not(.is-scrolled):not(.scrolled) .dropdown-trigger,
html:not([data-theme="amigos-dark"]) body:has(.partners-page) .site-header:not(.is-scrolled):not(.scrolled) .nav-link,
html:not([data-theme="amigos-dark"]) body[data-page="partners"] .site-header:not(.is-scrolled):not(.scrolled) .nav-link {
  color: #050505 !important;
  -webkit-text-fill-color: #050505 !important;
}

html:not([data-theme="amigos-dark"]) body:has(.partners-page) .site-header:not(.is-scrolled):not(.scrolled) .site-nav a:hover,
html:not([data-theme="amigos-dark"]) body[data-page="partners"] .site-header:not(.is-scrolled):not(.scrolled) .site-nav a:hover {
  color: #FFD21F !important;
  -webkit-text-fill-color: #FFD21F !important;
}

html:not([data-theme="amigos-dark"]) body:has(.partners-page) .site-header:not(.is-scrolled):not(.scrolled) .customer-header-btn,
html:not([data-theme="amigos-dark"]) body[data-page="partners"] .site-header:not(.is-scrolled):not(.scrolled) .customer-header-btn {
  background: #000000 !important;
  background-image: none !important;
  border-color: #000000 !important;
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
}

html:not([data-theme="amigos-dark"]) body:has(.partners-page) .site-header:not(.is-scrolled):not(.scrolled) .header-btn,
html:not([data-theme="amigos-dark"]) body[data-page="partners"] .site-header:not(.is-scrolled):not(.scrolled) .header-btn {
  background: #000000 !important;
  background-image: none !important;
  border-color: #000000 !important;
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

html:not([data-theme="amigos-dark"]) body:has(.partners-page) .site-header:not(.is-scrolled):not(.scrolled) .customer-header-btn:hover,
html:not([data-theme="amigos-dark"]) body:has(.partners-page) .site-header:not(.is-scrolled):not(.scrolled) .header-btn:hover,
html:not([data-theme="amigos-dark"]) body[data-page="partners"] .site-header:not(.is-scrolled):not(.scrolled) .customer-header-btn:hover,
html:not([data-theme="amigos-dark"]) body[data-page="partners"] .site-header:not(.is-scrolled):not(.scrolled) .header-btn:hover {
  background: #111111 !important;
  background-image: none !important;
  border-color: #111111 !important;
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
  opacity: 1 !important;
}

/* Final Partners correction: homepage calculator gradient, plain boxes until hover. */
html:not([data-theme="amigos-dark"]) .partner-card,
html:not([data-theme="amigos-dark"]) .flow-step {
  background: #fff !important;
  border-color: rgba(7, 26, 51, .14) !important;
  box-shadow: none !important;
  opacity: 1 !important;
  animation: none !important;
}

html:not([data-theme="amigos-dark"]) .partner-card::before,
html:not([data-theme="amigos-dark"]) .flow-step::before {
  background:
    radial-gradient(circle at 12% 18%, rgba(255, 255, 255, .26), transparent 25%),
    radial-gradient(circle at 86% 14%, rgba(255, 255, 255, .16), transparent 28%),
    var(--partners-logo-mix) !important;
  background-size: 240% 240% !important;
  animation: homeMovingBrandGradient 7s ease-in-out infinite alternate !important;
  opacity: 0 !important;
}

html:not([data-theme="amigos-dark"]) .partner-card *,
html:not([data-theme="amigos-dark"]) .flow-step *,
html:not([data-theme="amigos-dark"]) .partner-card h3,
html:not([data-theme="amigos-dark"]) .flow-step h3,
html:not([data-theme="amigos-dark"]) .partner-card p,
html:not([data-theme="amigos-dark"]) .flow-step p {
  color: #071A33 !important;
  -webkit-text-fill-color: #071A33 !important;
}

html:not([data-theme="amigos-dark"]) .partner-card span,
html:not([data-theme="amigos-dark"]) .flow-step span {
  color: #E62453 !important;
  -webkit-text-fill-color: #E62453 !important;
}

html:not([data-theme="amigos-dark"]) .partner-card:hover,
html:not([data-theme="amigos-dark"]) .flow-step:hover {
  opacity: .9 !important;
  box-shadow: 0 0 0 1px rgba(246, 190, 16, .58), 0 24px 72px rgba(230, 36, 83, .22), 0 18px 52px rgba(243, 145, 37, .20) !important;
}

html:not([data-theme="amigos-dark"]) .partner-card:hover::before,
html:not([data-theme="amigos-dark"]) .flow-step:hover::before {
  opacity: 1 !important;
  height: 100% !important;
}

html:not([data-theme="amigos-dark"]) .partner-card:hover *,
html:not([data-theme="amigos-dark"]) .flow-step:hover *,
html:not([data-theme="amigos-dark"]) .partner-card:hover h3,
html:not([data-theme="amigos-dark"]) .flow-step:hover h3,
html:not([data-theme="amigos-dark"]) .partner-card:hover p,
html:not([data-theme="amigos-dark"]) .flow-step:hover p,
html:not([data-theme="amigos-dark"]) .partner-card:hover span,
html:not([data-theme="amigos-dark"]) .flow-step:hover span {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

html:not([data-theme="amigos-dark"]) .standard-row:hover {
  background:
    radial-gradient(circle at 12% 18%, rgba(255, 255, 255, .26), transparent 25%),
    radial-gradient(circle at 86% 14%, rgba(255, 255, 255, .16), transparent 28%),
    var(--partners-logo-mix) !important;
  background-size: 240% 240% !important;
  animation: homeMovingBrandGradient 7s ease-in-out infinite alternate !important;
  opacity: .92 !important;
}

html:not([data-theme="amigos-dark"]) .partner-cta {
  background:
    radial-gradient(circle at 12% 18%, rgba(255, 255, 255, .26), transparent 25%),
    radial-gradient(circle at 86% 14%, rgba(255, 255, 255, .16), transparent 28%),
    var(--partners-logo-mix) !important;
  background-size: 240% 240% !important;
  animation: homeMovingBrandGradient 7s ease-in-out infinite alternate !important;
}

html[data-theme="amigos-dark"] .network-node,
html[data-theme="amigos-dark"] .partner-card:hover,
html[data-theme="amigos-dark"] .flow-step:hover,
html[data-theme="amigos-dark"] .partner-cta {
  background:
    radial-gradient(circle at 12% 18%, rgba(255, 255, 255, .26), transparent 25%),
    radial-gradient(circle at 86% 14%, rgba(255, 255, 255, .16), transparent 28%),
    var(--partners-logo-mix) !important;
  background-size: 240% 240% !important;
  animation: homeMovingBrandGradient 7s ease-in-out infinite alternate !important;
}

/* Hard final pass: exact homepage calculator colors/layers, offset so pink/orange/yellow are visible immediately. */
html:not([data-theme="amigos-dark"]) .partner-cta,
html[data-theme="amigos-dark"] .partner-cta {
  background-color: #071A33 !important;
  background-image:
    linear-gradient(rgba(7, 26, 51, .62), rgba(7, 26, 51, .62)),
    url("/partners/partner-network-cta.png") !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  animation: none !important;
  color: #fff !important;
}

html:not([data-theme="amigos-dark"]) .partner-card::before,
html:not([data-theme="amigos-dark"]) .flow-step::before,
html:not([data-theme="amigos-dark"]) .standard-row:hover,
html[data-theme="amigos-dark"] .network-node,
html[data-theme="amigos-dark"] .partner-card:hover,
html[data-theme="amigos-dark"] .flow-step:hover,
html[data-theme="amigos-dark"] .standard-row:hover {
  background-color: #F39125 !important;
  background-image:
    radial-gradient(circle at 12% 18%, rgba(255, 255, 255, .28), transparent 25%),
    radial-gradient(circle at 86% 14%, rgba(255, 255, 255, .18), transparent 28%),
    linear-gradient(120deg, #F6BE10 0%, #F39125 28%, #E62453 58%, #C73B8E 78%, #F6BE10 100%) !important;
  background-size: 160% 160% !important;
  animation: homeMovingBrandGradient 7s ease-in-out infinite alternate !important;
  animation-delay: -3.5s !important;
}

html:not([data-theme="amigos-dark"]) .partner-card,
html:not([data-theme="amigos-dark"]) .flow-step {
  background: #fff !important;
  border-color: rgba(7, 26, 51, .14) !important;
  color: #071A33 !important;
  box-shadow: none !important;
}

html:not([data-theme="amigos-dark"]) .partner-card:hover,
html:not([data-theme="amigos-dark"]) .flow-step:hover {
  border-color: rgba(230, 36, 83, .46) !important;
  box-shadow: 0 0 0 1px rgba(246, 190, 16, .42), 0 24px 76px rgba(230, 36, 83, .22), 0 16px 46px rgba(243, 145, 37, .20) !important;
  opacity: 1 !important;
}

html:not([data-theme="amigos-dark"]) .partner-card:hover::before,
html:not([data-theme="amigos-dark"]) .flow-step:hover::before {
  opacity: 1 !important;
  height: 100% !important;
}

html[data-theme="amigos-dark"] .partners-btn-outline,
html[data-theme="amigos-dark"] .partner-cta .partners-btn-outline {
  background:
    linear-gradient(var(--partners-navy), var(--partners-navy)) padding-box,
    linear-gradient(120deg, #F6BE10 0%, #F39125 28%, #E62453 58%, #C73B8E 78%, #F6BE10 100%) border-box !important;
  background-size: 100% 100%, 240% 240% !important;
  border: 2px solid transparent !important;
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
  box-shadow: none !important;
  animation: homeMovingBrandGradient 7s ease-in-out infinite alternate !important;
}

html[data-theme="amigos-dark"] .partners-btn-outline *,
html[data-theme="amigos-dark"] .partner-cta .partners-btn-outline * {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

html[data-theme="amigos-dark"] .partners-btn-outline::before,
html[data-theme="amigos-dark"] .partner-cta .partners-btn-outline::before {
  content: none !important;
  display: none !important;
}

body[data-page="partners"] .partners-page .partners-hero .partners-hero-actions .partners-btn.partners-btn-outline,
.partners-page .partners-hero .partners-hero-actions .partners-btn.partners-btn-outline,
html[data-theme="amigos-dark"] body[data-page="partners"] .partners-page .partners-hero .partners-hero-actions .partners-btn.partners-btn-outline {
  background-color: transparent !important;
  background-image:
    linear-gradient(#071A33, #071A33),
    linear-gradient(120deg, #F6BE10 0%, #F39125 28%, #E62453 58%, #C73B8E 78%, #F6BE10 100%) !important;
  background-origin: border-box !important;
  background-clip: padding-box, border-box !important;
  background-size: 100% 100%, 240% 240% !important;
  border: 2px solid transparent !important;
  box-shadow: none !important;
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
  animation: homeMovingBrandGradient 7s ease-in-out infinite alternate !important;
}

body[data-page="partners"] .partners-page .partners-hero .partners-hero-actions .partners-btn.partners-btn-outline::before,
.partners-page .partners-hero .partners-hero-actions .partners-btn.partners-btn-outline::before,
html[data-theme="amigos-dark"] body[data-page="partners"] .partners-page .partners-hero .partners-hero-actions .partners-btn.partners-btn-outline::before {
  content: none !important;
  display: none !important;
}

body[data-page="partners"] .partners-page .partners-hero .partners-hero-actions .partners-btn.partners-btn-outline *,
.partners-page .partners-hero .partners-hero-actions .partners-btn.partners-btn-outline *,
html[data-theme="amigos-dark"] body[data-page="partners"] .partners-page .partners-hero .partners-hero-actions .partners-btn.partners-btn-outline * {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

html:not([data-theme="amigos-dark"]) body[data-page="partners"] .partners-page .partners-hero .partners-hero-actions .partners-btn.partners-btn-outline,
html:not([data-theme="amigos-dark"]) .partners-page .partners-hero .partners-hero-actions .partners-btn.partners-btn-outline {
  background-image:
    linear-gradient(#fff, #fff),
    linear-gradient(120deg, #F6BE10 0%, #F39125 28%, #E62453 58%, #C73B8E 78%, #F6BE10 100%) !important;
  color: #050505 !important;
  -webkit-text-fill-color: #050505 !important;
}

html:not([data-theme="amigos-dark"]) body[data-page="partners"] .partners-page .partners-hero .partners-hero-actions .partners-btn.partners-btn-outline *,
html:not([data-theme="amigos-dark"]) .partners-page .partners-hero .partners-hero-actions .partners-btn.partners-btn-outline * {
  color: #050505 !important;
  -webkit-text-fill-color: #050505 !important;
}

/* Fix footer on Partners Page */
html[data-theme="amigos-dark"] body[data-page="partners"] .site-footer {
  background: var(--partners-navy) !important;
  border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
}
html[data-theme="amigos-dark"] body[data-page="partners"] .site-footer * {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

html:not([data-theme="amigos-dark"]) body[data-page="partners"] .site-footer {
  background: #fff !important;
  border-top: 1px solid rgba(5, 5, 5, 0.16) !important;
}
html:not([data-theme="amigos-dark"]) body[data-page="partners"] .site-footer * {
  color: #050505 !important;
  -webkit-text-fill-color: #050505 !important;
}

html[data-theme="amigos-dark"] .partners-section-heading,
html[data-theme="amigos-dark"] .partners-section-heading h2,
html[data-theme="amigos-dark"] .partners-reveal {
  background: none !important;
  background-image: none !important;
  background-color: transparent !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
html[data-theme="amigos-dark"] .partners-kicker {
  background: var(--am-brand-gradient) !important;
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
  background-clip: border-box !important;
  -webkit-background-clip: border-box !important;
  padding: 6px 18px !important;
  border-radius: 24px !important;
  display: inline-block !important;
  margin-bottom: 24px !important;
}

/* Light CTA uses a real collaboration image; the veil keeps the existing copy readable. */
html:not([data-theme="amigos-dark"]) body[data-page="partners"] .partners-page .partner-cta,
html[data-theme="amigos-dark"] body[data-page="partners"] .partners-page .partner-cta {
  background-color: #071A33 !important;
  background:
    linear-gradient(rgba(7, 26, 51, .62), rgba(7, 26, 51, .62)),
    url("/partners/partner-network-cta.png") center / cover no-repeat !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  animation: none !important;
}

html:not([data-theme="amigos-dark"]) body[data-page="partners"] .partners-page .partner-cta::before,
html[data-theme="amigos-dark"] body[data-page="partners"] .partners-page .partner-cta::before {
  content: "" !important;
  position: absolute !important;
  inset: 0 !important;
  z-index: -1 !important;
  opacity: 1 !important;
  background:
    linear-gradient(rgba(7, 26, 51, .62), rgba(7, 26, 51, .62)),
    url("/partners/partner-network-cta.png") center / cover no-repeat !important;
  animation: none !important;
}

/* Final CTA buttons use the same shared gradient and arrow-circle as the rest of the site. */
html body[data-page="partners"] .partner-cta .partners-hero-actions > a.partners-btn-primary {
  position: relative !important;
  isolation: isolate !important;
  overflow: hidden !important;
  background: linear-gradient(105deg, #f6be10 0%, #f39125 44%, #e62453 100%) !important;
  background-image: linear-gradient(105deg, #f6be10 0%, #f39125 44%, #e62453 100%) !important;
  border: 0 !important;
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

html body[data-page="partners"] .partner-cta .partners-hero-actions > a.partners-btn-primary::before {
  content: "" !important;
  display: block !important;
  position: absolute !important;
  inset: auto auto auto 10px !important;
  top: 50% !important;
  z-index: 0 !important;
  width: 40px !important;
  height: 40px !important;
  border-radius: 50% !important;
  background: #fff !important;
  box-shadow: 0 8px 18px rgba(7, 26, 51, .16) !important;
  transform: translateY(-50%) !important;
}

html[data-theme="amigos-dark"] body[data-page="partners"] .partner-cta .partners-hero-actions > a.partners-btn-primary::before {
  content: "" !important;
  display: block !important;
}

html body[data-page="partners"] .partner-cta .partners-hero-actions > a.partners-btn-primary::after {
  content: "→" !important;
  display: block !important;
  position: absolute !important;
  inset: auto auto auto 22px !important;
  top: 50% !important;
  z-index: 1 !important;
  color: #071a33 !important;
  -webkit-text-fill-color: #071a33 !important;
  font-size: 22px !important;
  font-weight: 900 !important;
  line-height: 1 !important;
  transform: translateY(-52%) !important;
}

html[data-theme="amigos-dark"] body[data-page="partners"] .partner-cta .partners-hero-actions > a.partners-btn-primary::after {
  content: "→" !important;
  display: block !important;
}

/* Compact partner-network reference layout. */
.partners-hero-copy h1 span {
  background: var(--partners-logo-mix) !important;
  color: transparent !important;
  -webkit-text-fill-color: transparent !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
}

.partner-standards {
  padding: clamp(110px, 13vw, 190px) 0 !important;
  background: #fff !important;
  color: #071a33 !important;
}

.partner-standards .standards-layout {
  grid-template-columns: minmax(240px, .72fr) minmax(0, 1.7fr) !important;
  align-items: center !important;
}

.partner-standards .standards-copy h2,
.partner-standards .standards-copy > p:not(.partners-kicker) { color: #071a33 !important; -webkit-text-fill-color: #071a33 !important; }

.partner-standards .standards-copy h2 {
  max-width: 420px !important;
  background: var(--partners-logo-mix) !important;
  background-size: 240% 240% !important;
  color: transparent !important;
  -webkit-text-fill-color: transparent !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
}

.partner-standards .standards-list {
  display: grid !important;
  grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
  border-top: 0 !important;
}

.partner-standards .standard-row {
  display: block !important;
  min-height: 150px !important;
  padding: 8px 22px !important;
  border-top: 0 !important;
  border-bottom: 0 !important;
  border-left: 1px solid rgba(255, 255, 255, .28) !important;
  transform: none !important;
}

.partner-standards .standard-row span {
  display: block;
  color: #f6be10 !important;
  -webkit-text-fill-color: #f6be10 !important;
  font-size: 17px;
  line-height: 1.15;
}

.partner-standards .standard-row p {
  margin-top: 18px !important;
  color: rgba(255, 255, 255, .82) !important;
  -webkit-text-fill-color: rgba(255, 255, 255, .82) !important;
  font-size: 14px !important;
  line-height: 1.45 !important;
}

html[data-theme="amigos-dark"] .partner-standards {
  background: var(--partners-navy) !important;
  color: #fff !important;
}

html[data-theme="amigos-dark"] .partner-standards .standards-copy h2 {
  background: none !important;
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

html:not([data-theme="amigos-dark"]) .partner-listing {
  background: #f7f1e7 !important;
}

html[data-theme="amigos-dark"] .partner-listing {
  background: var(--partners-navy) !important;
}

html[data-theme="amigos-dark"] .partner-listing-form {
  background: #0d2542 !important;
  color: #fff !important;
}

html[data-theme="amigos-dark"] .partner-listing-form label,
html[data-theme="amigos-dark"] .partner-listing-form h3 {
  color: #fff !important;
}

html[data-theme="amigos-dark"] .partner-listing-form input,
html[data-theme="amigos-dark"] .partner-listing-form select,
html[data-theme="amigos-dark"] .partner-listing-form textarea {
  border-color: rgba(255, 255, 255, .22) !important;
  background: rgba(255, 255, 255, .06) !important;
  color: #fff !important;
}

html[data-theme="amigos-dark"] .partner-listing-form input::placeholder,
html[data-theme="amigos-dark"] .partner-listing-form textarea::placeholder {
  color: rgba(255, 255, 255, .58) !important;
}

@media (max-width: 900px) {
  .partner-standards .standards-layout {
    grid-template-columns: 1fr !important;
    gap: 42px !important;
  }

  .partner-standards .standards-list {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 24px 0;
  }
}

@media (max-width: 600px) {
  .partner-standards .standards-list {
    grid-template-columns: 1fr !important;
  }

  .partner-standards .standard-row {
    min-height: auto !important;
    padding: 18px 0 !important;
    border-left: 0 !important;
    border-top: 1px solid rgba(255, 255, 255, .22) !important;
  }
}

/* Premium step icons: each symbol stays above the hover surface. */
.partner-flow .flow-step {
  position: relative !important;
}

.partner-flow .flow-step .flow-step-icon {
  display: grid !important;
  position: absolute !important;
  top: 88px !important;
  left: 30px !important;
  width: 54px !important;
  height: 54px !important;
  margin: 0 !important;
  place-items: center !important;
  border: 1px solid rgba(243, 145, 37, .72) !important;
  border-radius: 50% !important;
  background: rgba(255, 255, 255, .72) !important;
  color: #e62453 !important;
  -webkit-text-fill-color: #e62453 !important;
  box-shadow: 0 12px 28px rgba(230, 36, 83, .12) !important;
  z-index: 3 !important;
}

.partner-flow .flow-step .flow-step-icon-svg {
  display: block !important;
  width: 27px !important;
  height: 27px !important;
  color: inherit !important;
  stroke: currentColor !important;
}

.partner-flow .flow-step > span:first-child {
  position: relative !important;
  z-index: 4 !important;
}

.partner-flow .flow-step:hover .flow-step-icon {
  background: #fff !important;
  color: #e62453 !important;
  -webkit-text-fill-color: #e62453 !important;
}

html[data-theme="amigos-dark"] .partner-flow .flow-step .flow-step-icon {
  background: rgba(7, 26, 51, .72) !important;
  border-color: rgba(246, 190, 16, .78) !important;
  color: #f6be10 !important;
  -webkit-text-fill-color: #f6be10 !important;
}

html[data-theme="amigos-dark"] .partner-flow .flow-step:hover .flow-step-icon {
  background: #fff !important;
  color: #e62453 !important;
  -webkit-text-fill-color: #e62453 !important;
}

html:not([data-theme="amigos-dark"]) .partner-card:hover .partner-card-icon,
html[data-theme="amigos-dark"] .partner-card:hover .partner-card-icon {
  background: #fff !important;
  color: #071a33 !important;
  -webkit-text-fill-color: #071a33 !important;
  opacity: 1 !important;
  visibility: visible !important;
  z-index: 4 !important;
}

html[data-theme="amigos-dark"] .partner-card .partner-card-icon {
  background: #fff !important;
  color: #e62453 !important;
  -webkit-text-fill-color: #e62453 !important;
  opacity: 1 !important;
  visibility: visible !important;
  z-index: 4 !important;
}

html[data-theme="amigos-dark"] .partner-benefits .partner-benefit-list,
html[data-theme="amigos-dark"] .partner-benefits .partner-benefit,
html[data-theme="amigos-dark"] .partner-benefits .partner-benefit::before,
html[data-theme="amigos-dark"] .partner-benefits .partner-benefit::after {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  box-shadow: none !important;
}

/* Listing section: one viewport below the header, with no beige surround. */
.partner-listing {
  min-height: calc(100svh - 92px) !important;
  height: auto !important;
  padding: 0 !important;
  background: #fff !important;
}

.partner-listing-grid {
  width: 100% !important;
  max-width: none !important;
  height: auto !important;
  min-height: calc(100svh - 92px) !important;
}

.partner-listing-image {
  min-height: 0 !important;
}

.partner-listing-copy {
  padding: clamp(28px, 4vw, 64px) !important;
}

.partner-listing-form {
  min-height: 0 !important;
  padding: clamp(24px, 3.5vw, 52px) !important;
}

.partner-listing-form h3 {
  margin-bottom: 18px !important;
  font-size: clamp(28px, 3vw, 40px) !important;
}

.partner-form-grid {
  gap: 12px !important;
}

.partner-listing-form input,
.partner-listing-form select {
  min-height: 42px !important;
  padding: 9px 12px !important;
}

.partner-listing-form textarea {
  min-height: 82px !important;
  padding: 10px 12px !important;
}

.partner-listing-form .partner-check {
  margin-top: 8px !important;
}

.partner-listing-form > .partners-btn {
  margin-top: 16px !important;
  min-height: 50px !important;
}

/* Listing form refinement: calm grouping, clear focus, and a deliberate upload control. */
.partner-listing-form {
  border-left: 1px solid rgba(7, 26, 51, .08) !important;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .85) !important;
}

.partner-listing-form h3 {
  margin-bottom: 8px !important;
  letter-spacing: 0 !important;
}

.partner-form-intro {
  max-width: 42ch !important;
  margin: 0 0 26px !important;
  color: rgba(7, 26, 51, .62) !important;
  font-size: 15px !important;
  line-height: 1.5 !important;
}

.partner-form-grid {
  gap: 18px 16px !important;
}

.partner-listing-form label:not(.partner-check) {
  gap: 8px !important;
  color: #071a33 !important;
  font-size: 12px !important;
  font-weight: 750 !important;
  letter-spacing: .02em !important;
}

.partner-listing-form input:not([type="checkbox"]),
.partner-listing-form select,
.partner-listing-form textarea {
  border: 1px solid #d8e0ea !important;
  border-radius: 12px !important;
  background: #fbfcfe !important;
  box-shadow: 0 1px 2px rgba(7, 26, 51, .03) !important;
  color: #071a33 !important;
  font-size: 15px !important;
  font-weight: 550 !important;
  transition: border-color .18s ease, box-shadow .18s ease, background .18s ease !important;
}

.partner-listing-form input:not([type="checkbox"]):focus,
.partner-listing-form select:focus,
.partner-listing-form textarea:focus {
  border-color: #e62453 !important;
  background: #fff !important;
  box-shadow: 0 0 0 4px rgba(230, 36, 83, .12) !important;
  outline: 0 !important;
}

.partner-listing-form textarea {
  min-height: 112px !important;
  line-height: 1.5 !important;
}

.partner-listing-form input[type="file"] {
  min-height: 72px !important;
  padding: 10px !important;
  border-style: dashed !important;
  border-color: rgba(230, 36, 83, .45) !important;
  background: linear-gradient(135deg, rgba(246, 190, 16, .06), rgba(230, 36, 83, .05)) !important;
  cursor: pointer !important;
}

.partner-listing-form input[type="file"]::file-selector-button {
  margin-right: 12px !important;
  padding: 9px 14px !important;
  border: 0 !important;
  border-radius: 8px !important;
  background: #071a33 !important;
  color: #fff !important;
  font: inherit !important;
  font-size: 13px !important;
  font-weight: 700 !important;
  cursor: pointer !important;
}

.partner-listing-form .partner-check {
  gap: 10px !important;
  margin-top: 12px !important;
  color: rgba(7, 26, 51, .78) !important;
  font-size: 14px !important;
  line-height: 1.4 !important;
}

.partner-listing-form .partner-check input {
  width: 19px !important;
  height: 19px !important;
  min-height: 19px !important;
  flex: 0 0 19px !important;
  accent-color: #e62453 !important;
}

.partner-listing-form > .partners-btn {
  min-width: 190px !important;
  margin-top: 24px !important;
}

html[data-theme="amigos-dark"] .partner-form-intro {
  color: rgba(255, 255, 255, .68) !important;
}

html[data-theme="amigos-dark"] .partner-listing-form label:not(.partner-check),
html[data-theme="amigos-dark"] .partner-listing-form .partner-check {
  color: rgba(255, 255, 255, .88) !important;
}

html[data-theme="amigos-dark"] .partner-listing-form input:not([type="checkbox"]),
html[data-theme="amigos-dark"] .partner-listing-form select,
html[data-theme="amigos-dark"] .partner-listing-form textarea {
  border-color: rgba(255, 255, 255, .22) !important;
  background: rgba(255, 255, 255, .06) !important;
  color: #fff !important;
}

html[data-theme="amigos-dark"] .partner-listing-form input[type="file"] {
  border-color: rgba(246, 190, 16, .58) !important;
  background: rgba(255, 255, 255, .06) !important;
}

html:not([data-theme="amigos-dark"]) .partner-listing-copy {
  display: flex !important;
  flex-direction: column !important;
  width: 100% !important;
  max-width: none !important;
  align-self: stretch !important;
  justify-content: flex-end !important;
  padding: clamp(32px, 5vw, 72px) !important;
  color: #071a33 !important;
  background: linear-gradient(90deg, rgba(255, 255, 255, .96) 0%, rgba(255, 255, 255, .82) 52%, rgba(255, 255, 255, .2) 100%) !important;
}

html:not([data-theme="amigos-dark"]) .partner-listing-copy h2,
html:not([data-theme="amigos-dark"]) .partner-listing-copy p {
  color: #071a33 !important;
  -webkit-text-fill-color: #071a33 !important;
}

html[data-theme="amigos-dark"] .partner-listing-copy {
  display: flex !important;
  flex-direction: column !important;
  width: 100% !important;
  max-width: none !important;
  align-self: stretch !important;
  justify-content: flex-end !important;
}

html[data-theme="amigos-dark"] .partner-listing {
  background: var(--partners-navy) !important;
}

@media (max-width: 700px) {
  .partner-listing {
    height: auto !important;
    min-height: 0 !important;
  }

  .partner-listing-grid {
    height: auto !important;
  }
}

/* Premium hero refinement: preserve the network composition while tightening hierarchy. */
.partners-hero {
  min-height: min(900px, 92vh) !important;
  padding: clamp(132px, 14vh, 178px) 0 clamp(70px, 9vh, 112px) !important;
}

.partners-hero-grid {
  grid-template-columns: minmax(0, .92fr) minmax(540px, 1.08fr) !important;
  gap: clamp(40px, 5vw, 92px) !important;
}

.partners-hero-copy {
  position: relative;
  z-index: 2;
}

.partners-hero-copy h1 {
  max-width: 720px !important;
  font-size: clamp(54px, 6.2vw, 96px) !important;
  line-height: .99 !important;
  letter-spacing: -.045em !important;
  font-weight: 700 !important;
}

.partners-hero-copy > p:not(.partners-kicker) {
  max-width: 650px !important;
  margin-top: 34px !important;
  font-size: clamp(17px, 1.35vw, 22px) !important;
  line-height: 1.48 !important;
}

.partners-hero-actions {
  gap: 18px !important;
  margin-top: 42px !important;
}

.partners-hero-actions .partners-btn {
  min-height: 62px !important;
  padding: 17px 30px 17px 72px !important;
  font-size: 14px !important;
  letter-spacing: -.01em !important;
}

.partners-hero-actions .partners-btn::before {
  content: "" !important;
  position: absolute !important;
  left: 10px !important;
  top: 50% !important;
  width: 40px !important;
  height: 40px !important;
  border-radius: 50% !important;
  background: #fff !important;
  transform: translateY(-50%) !important;
}

.partners-hero-actions .partners-btn::after {
  content: "→" !important;
  position: absolute !important;
  left: 22px !important;
  top: 50% !important;
  z-index: 1 !important;
  color: #071a33 !important;
  font-size: 22px !important;
  font-weight: 900 !important;
  line-height: 1 !important;
  transform: translateY(-52%) !important;
}

.partner-card .partner-card-icon {
  position: relative !important;
  z-index: 4 !important;
  opacity: 1 !important;
  visibility: visible !important;
  background: #fff !important;
  color: #e62453 !important;
  -webkit-text-fill-color: #e62453 !important;
  box-shadow: 0 8px 22px rgba(7, 26, 51, .18) !important;
}

.partner-card {
  padding: 0 0 28px !important;
  overflow: hidden !important;
}

.partner-card .partner-card-image {
  display: block !important;
  width: 100% !important;
  height: 174px !important;
  margin: 0 !important;
  object-fit: cover !important;
  object-position: center !important;
}

.partner-card h3,
.partner-card p {
  margin-left: 24px !important;
  margin-right: 24px !important;
}

.partner-card .partner-card-icon {
  margin-left: 24px !important;
}

.partner-card:hover .partner-card-icon {
  opacity: 1 !important;
  visibility: visible !important;
  background: #fff !important;
  color: #e62453 !important;
  -webkit-text-fill-color: #e62453 !important;
}

html:not([data-theme="amigos-dark"]) .partner-flow .flow-step:hover .flow-step-icon,
html[data-theme="amigos-dark"] .partner-flow .flow-step:hover .flow-step-icon,
html:not([data-theme="amigos-dark"]) .partner-flow .flow-step:hover .flow-step-icon-svg,
html[data-theme="amigos-dark"] .partner-flow .flow-step:hover .flow-step-icon-svg {
  color: #000 !important;
  -webkit-text-fill-color: #000 !important;
  stroke: #000 !important;
}

.partners-hero-actions .partners-btn-outline {
  background: transparent !important;
}

.partner-network {
  min-height: 600px !important;
  filter: drop-shadow(0 28px 48px rgba(7, 26, 51, .10));
}

.network-rings {
  width: min(570px, 44vw) !important;
  height: min(570px, 44vw) !important;
  border-color: rgba(230, 36, 83, .25) !important;
}

.network-rings::before {
  border-color: rgba(230, 36, 83, .18) !important;
}

.network-rings::after {
  border-color: rgba(230, 36, 83, .22) !important;
}

.network-core {
  width: 188px !important;
  min-height: 188px !important;
  background: rgba(255, 255, 255, .88) !important;
  border: 1px solid rgba(230, 36, 83, .22) !important;
  box-shadow: 0 26px 70px rgba(7, 26, 51, .13), inset 0 1px 0 rgba(255, 255, 255, .9) !important;
}

.network-core span {
  color: #071a33 !important;
  -webkit-text-fill-color: #071a33 !important;
  font-weight: 700 !important;
}

.network-node {
  width: 230px !important;
  min-height: 164px !important;
  padding: 26px !important;
  border-radius: 26px !important;
  box-shadow: 0 22px 46px rgba(230, 36, 83, .18) !important;
}

.network-node strong {
  font-size: 29px !important;
}

.network-node small {
  font-size: 14px !important;
}

html[data-theme="amigos-dark"] .partners-hero-actions .partners-btn-outline {
  background: rgba(255, 255, 255, .06) !important;
}

html[data-theme="amigos-dark"] .network-core {
  background: rgba(7, 26, 51, .84) !important;
  border-color: rgba(255, 255, 255, .18) !important;
}

html[data-theme="amigos-dark"] .network-core span {
  color: rgba(255, 255, 255, .76) !important;
  -webkit-text-fill-color: rgba(255, 255, 255, .76) !important;
}

@media (max-width: 1180px) {
  .partners-hero-grid {
    grid-template-columns: 1fr !important;
  }

  .partner-network {
    width: min(760px, 100%);
    margin: 0 auto;
  }
}

@media (max-width: 600px) {
  .partners-hero {
    min-height: auto !important;
    padding-top: 118px !important;
  }

  .partners-hero-copy h1 {
    font-size: clamp(48px, 14vw, 70px) !important;
  }

  .partners-hero-actions .partners-btn {
    width: 100%;
  }

  .partner-network {
    min-height: 640px !important;
  }

  .network-rings {
    width: min(440px, 94vw) !important;
    height: min(440px, 94vw) !important;
  }

  .network-node {
    width: min(210px, 58vw) !important;
    min-height: 140px !important;
    padding: 20px !important;
  }
}

/* Service-page hero treatment for the partner network. */
.partner-service-hero {
  position: relative !important;
  min-height: calc(100svh - 92px) !important;
  height: min(900px, calc(100svh - 92px)) !important;
  display: flex !important;
  align-items: center !important;
  overflow: hidden !important;
  padding: 0 !important;
  isolation: isolate !important;
  background: #071a33 !important;
}

.partner-service-hero-bg,
.partner-service-hero-overlay,
.partner-service-hero-lines {
  position: absolute !important;
  inset: 0 !important;
}

.partner-service-hero-bg {
  z-index: -3 !important;
}

.partner-service-hero-bg img {
  width: 100% !important;
  height: 100% !important;
  display: block !important;
  object-fit: cover !important;
  object-position: center !important;
  transform: scale(1.03) !important;
}

.partner-service-hero-overlay {
  z-index: -2 !important;
  background: linear-gradient(90deg, rgba(7, 26, 51, .9) 0%, rgba(7, 26, 51, .68) 48%, rgba(7, 26, 51, .2) 100%) !important;
}

.partner-service-hero-lines {
  z-index: -1 !important;
  display: flex !important;
  justify-content: space-between !important;
  width: min(1200px, 90%) !important;
  margin: 0 auto !important;
  pointer-events: none !important;
}

.partner-service-hero-lines span {
  width: 1px !important;
  height: 100% !important;
  background: rgba(255, 255, 255, .12) !important;
}

.partner-service-hero-shell {
  position: relative !important;
  z-index: 2 !important;
  width: calc(100% - 140px) !important;
  max-width: none !important;
  margin-inline: 70px !important;
}

.partner-service-hero-copy {
  max-width: 720px !important;
  padding: 126px 0 86px !important;
}

.partner-service-hero-copy .partners-kicker {
  display: inline-block !important;
  margin-bottom: 24px !important;
  color: #f6be10 !important;
  -webkit-text-fill-color: #f6be10 !important;
  letter-spacing: .18em !important;
}

.partner-service-hero-copy h1 {
  max-width: 760px !important;
  margin: 0 0 26px !important;
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
  background: none !important;
  font-size: clamp(46px, 5.4vw, 76px) !important;
  line-height: 1.04 !important;
  letter-spacing: -.035em !important;
}

.partner-service-hero-copy h1 span {
  background: var(--partners-logo-mix) !important;
  color: transparent !important;
  -webkit-text-fill-color: transparent !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
}

.partner-service-hero-copy > p:not(.partners-kicker) {
  max-width: 590px !important;
  margin: 0 !important;
  color: rgba(255, 255, 255, .82) !important;
  -webkit-text-fill-color: rgba(255, 255, 255, .82) !important;
  font-size: clamp(17px, 1.35vw, 21px) !important;
  line-height: 1.65 !important;
}

.partner-service-hero .partners-hero-actions {
  margin-top: 34px !important;
}

.partner-service-hero .partners-hero-actions .partners-btn-outline {
  position: relative !important;
  isolation: isolate !important;
  overflow: hidden !important;
  min-height: 62px !important;
  padding: 17px 30px 17px 72px !important;
  border: 0 !important;
  border-radius: 999px !important;
  background: linear-gradient(105deg, #f6be10 0%, #f39125 44%, #e62453 100%) !important;
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

.partner-service-hero .partners-hero-actions .partners-btn-outline::before {
  content: "" !important;
  position: absolute !important;
  left: 10px !important;
  top: 50% !important;
  z-index: 0 !important;
  width: 40px !important;
  height: 40px !important;
  border-radius: 50% !important;
  background: #fff !important;
  transform: translateY(-50%) !important;
}

.partner-service-hero .partners-hero-actions .partners-btn-outline::after {
  content: "→" !important;
  position: absolute !important;
  left: 22px !important;
  top: 50% !important;
  z-index: 1 !important;
  color: #071a33 !important;
  -webkit-text-fill-color: #071a33 !important;
  font-size: 22px !important;
  font-weight: 900 !important;
  line-height: 1 !important;
  transform: translateY(-52%) !important;
}

.partner-service-hero .partners-hero-actions .partners-btn-outline:hover {
  background: linear-gradient(105deg, #f6be10 0%, #f39125 44%, #e62453 100%) !important;
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
  transform: translateY(-3px) !important;
}

body[data-page="partners"] .partners-page .partner-service-hero .partners-hero-actions .partners-btn.partners-btn-outline::before {
  content: "" !important;
  display: block !important;
  position: absolute !important;
  left: 10px !important;
  top: 50% !important;
  z-index: 0 !important;
  width: 40px !important;
  height: 40px !important;
  border: 0 !important;
  border-radius: 50% !important;
  background: #fff !important;
  box-shadow: 0 8px 18px rgba(7, 26, 51, .16) !important;
  transform: translateY(-50%) !important;
}

body[data-page="partners"] .partners-page .partner-service-hero .partners-hero-actions .partners-btn.partners-btn-outline::after {
  content: "→" !important;
  display: block !important;
  position: absolute !important;
  left: 22px !important;
  top: 50% !important;
  z-index: 1 !important;
  color: #071a33 !important;
  -webkit-text-fill-color: #071a33 !important;
  font-size: 22px !important;
  font-weight: 900 !important;
  line-height: 1 !important;
  transform: translateY(-52%) !important;
}

html[data-theme="amigos-dark"] .partners-page .partner-service-hero .partners-hero-actions .partners-btn.partners-btn-outline::before {
  content: "" !important;
  display: block !important;
  position: absolute !important;
  left: 10px !important;
  top: 50% !important;
  z-index: 1 !important;
  width: 40px !important;
  height: 40px !important;
  border: 0 !important;
  border-radius: 50% !important;
  background: #fff !important;
  box-shadow: 0 8px 18px rgba(7, 26, 51, .16) !important;
  transform: translateY(-50%) !important;
}

html[data-theme="amigos-dark"] .partners-page .partner-service-hero .partners-hero-actions .partners-btn.partners-btn-outline::after {
  content: "→" !important;
  display: block !important;
  position: absolute !important;
  left: 22px !important;
  top: 50% !important;
  z-index: 2 !important;
  color: #071a33 !important;
  -webkit-text-fill-color: #071a33 !important;
  font-size: 22px !important;
  font-weight: 900 !important;
  line-height: 1 !important;
  transform: translateY(-52%) !important;
}

html body .partners-page .partner-service-hero .partners-hero-actions > a.partners-btn.partners-btn-outline::before {
  content: "" !important;
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
  position: absolute !important;
  left: 10px !important;
  top: 50% !important;
  z-index: 2 !important;
  width: 40px !important;
  height: 40px !important;
  border: 0 !important;
  border-radius: 50% !important;
  background: #fff !important;
  background-image: none !important;
  box-shadow: 0 8px 18px rgba(7, 26, 51, .16) !important;
  transform: translateY(-50%) !important;
}

html body .partners-page .partner-service-hero .partners-hero-actions > a.partners-btn.partners-btn-outline::after {
  content: "→" !important;
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
  position: absolute !important;
  left: 22px !important;
  top: 50% !important;
  z-index: 3 !important;
  color: #071a33 !important;
  -webkit-text-fill-color: #071a33 !important;
  font-size: 22px !important;
  font-weight: 900 !important;
  line-height: 1 !important;
  transform: translateY(-52%) !important;
}

.partner-service-hero-stats {
  display: flex !important;
  gap: 34px !important;
  margin-top: 52px !important;
}

.partner-service-hero-stats div {
  display: grid !important;
  gap: 4px !important;
  min-width: 130px !important;
  padding-left: 16px !important;
  border-left: 1px solid rgba(255, 255, 255, .36) !important;
}

.partner-service-hero-stats strong {
  color: #fff !important;
  font-size: 30px !important;
  line-height: 1 !important;
}

.partner-service-hero-stats span {
  color: rgba(255, 255, 255, .68) !important;
  font-size: 12px !important;
  letter-spacing: .04em !important;
}

.partner-service-hero-bg-text {
  position: absolute !important;
  right: -2vw !important;
  bottom: -7vw !important;
  z-index: -1 !important;
  color: rgba(255, 255, 255, .07) !important;
  font-size: clamp(140px, 20vw, 300px) !important;
  font-weight: 800 !important;
  letter-spacing: -.08em !important;
  line-height: .8 !important;
  white-space: nowrap !important;
}

.partner-service-hero-scroll {
  position: absolute !important;
  right: 5% !important;
  bottom: 34px !important;
  z-index: 3 !important;
  display: grid !important;
  justify-items: center !important;
  gap: 10px !important;
  color: rgba(255, 255, 255, .72) !important;
}

.partner-service-hero-scroll span {
  width: 1px !important;
  height: 46px !important;
  background: linear-gradient(#f6be10, rgba(255, 255, 255, .1)) !important;
}

.partner-service-hero-scroll p {
  margin: 0 !important;
  font-size: 10px !important;
  letter-spacing: .18em !important;
}

@media (max-width: 700px) {
  .partner-service-hero {
    height: auto !important;
    min-height: calc(100svh - 72px) !important;
  }

  .partner-service-hero-copy {
    padding: 132px 0 100px !important;
  }

  .partner-service-hero-shell {
    width: calc(100% - 48px) !important;
    margin-inline: 24px !important;
  }

  .partner-service-hero-copy h1 {
    font-size: clamp(42px, 12vw, 64px) !important;
  }

  .partner-service-hero-stats {
    flex-wrap: wrap !important;
    gap: 18px 24px !important;
    margin-top: 38px !important;
  }

  .partner-service-hero-stats div {
    min-width: 112px !important;
  }

  .partner-service-hero-scroll {
    display: none !important;
  }
}

@media (min-width: 701px) and (max-width: 1024px) {
  .partner-service-hero-shell {
    width: calc(100% - 64px) !important;
    margin-inline: 32px !important;
  }
}

/* Partner benefits strip: translated, compact version of the supplied reference section. */
.partner-benefits {
  position: relative !important;
  padding: 64px 0 118px !important;
  overflow: hidden !important;
  background: linear-gradient(115deg, #071a33 0%, #13284a 52%, #241a3e 100%) !important;
  color: #fff !important;
}

.partner-benefits-grid {
  display: grid !important;
  grid-template-columns: minmax(250px, .82fr) minmax(0, 2.2fr) !important;
  align-items: stretch !important;
  gap: 44px !important;
}

.partner-benefits-heading {
  align-self: center !important;
}

.partner-benefits-heading .partners-kicker {
  margin: 0 0 18px !important;
  color: #f6be10 !important;
  -webkit-text-fill-color: #f6be10 !important;
}

.partner-benefits-heading h2 {
  max-width: 330px !important;
  margin: 0 !important;
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
  font-size: clamp(34px, 3.5vw, 54px) !important;
  line-height: 1.02 !important;
  letter-spacing: -.025em !important;
}

.partner-benefit-list {
  display: grid !important;
  grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
  background: transparent !important;
  box-shadow: none !important;
}

.partner-benefit {
  min-height: 190px !important;
  padding: 4px 28px 0 !important;
  background: transparent !important;
  box-shadow: none !important;
  border-left: 1px solid rgba(255, 255, 255, .28) !important;
}

.partner-benefit:last-child {
  border-right: 1px solid rgba(255, 255, 255, .28) !important;
}

.benefit-icon-svg {
  width: 42px !important;
  height: 42px !important;
  margin-bottom: 22px !important;
  color: #e62453 !important;
}

.partner-benefit h3 {
  max-width: 190px !important;
  margin: 0 0 16px !important;
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
  font-size: 17px !important;
  line-height: 1.2 !important;
  font-weight: 700 !important;
}

.partner-benefit p {
  max-width: 190px !important;
  margin: 0 !important;
  color: rgba(255, 255, 255, .72) !important;
  -webkit-text-fill-color: rgba(255, 255, 255, .72) !important;
  font-size: 14px !important;
  line-height: 1.45 !important;
}

html:not([data-theme="amigos-dark"]) .partner-benefits {
  background: linear-gradient(115deg, #fff9e8 0%, #fff3ee 48%, #f8edf6 100%) !important;
  color: #071a33 !important;
}

html:not([data-theme="amigos-dark"]) .partner-benefits-heading .partners-kicker {
  background: var(--partners-logo-mix) !important;
  background-size: 240% 240% !important;
  color: transparent !important;
  -webkit-text-fill-color: transparent !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
}

html:not([data-theme="amigos-dark"]) .partner-benefits-heading h2 {
  background: var(--partners-logo-mix) !important;
  background-size: 240% 240% !important;
  color: transparent !important;
  -webkit-text-fill-color: transparent !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
}

html:not([data-theme="amigos-dark"]) .partner-benefit {
  border-color: rgba(7, 26, 51, .16) !important;
}

html:not([data-theme="amigos-dark"]) .partner-benefit h3 {
  color: #071a33 !important;
  -webkit-text-fill-color: #071a33 !important;
}

html:not([data-theme="amigos-dark"]) .partner-benefit p {
  color: rgba(7, 26, 51, .68) !important;
  -webkit-text-fill-color: rgba(7, 26, 51, .68) !important;
}

.partner-types {
  padding-top: 96px !important;
}

@media (max-width: 640px) {
  .partner-types {
    padding-top: 68px !important;
  }
}

@media (max-width: 900px) {
  .partner-benefits-grid {
    grid-template-columns: 1fr !important;
    gap: 34px !important;
  }

  .partner-benefits-heading h2 {
    max-width: none !important;
  }
}

@media (max-width: 640px) {
  .partner-benefits {
    padding: 50px 0 82px !important;
  }

  .partner-benefit-list {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 28px 0 !important;
  }

  .partner-benefit {
    min-height: 0 !important;
    padding: 0 20px !important;
    border-right: 0 !important;
  }

  .partner-benefit:nth-child(odd) {
    border-left: 0 !important;
  }

  .partner-benefit:nth-child(even) {
    border-left: 1px solid rgba(255, 255, 255, .28) !important;
  }
}

`;

export default function Page() {
  return (
    <AssetPageShell
      css={["/partners.css"]}
      scripts={["/partners.js","/script.js"]}
      shell>
      <style dangerouslySetInnerHTML={{ __html: forcedPartnersThemeCss }} data-forcedPartnersThemeCss />
      <PartnersContent />
    </AssetPageShell>
  );
}
