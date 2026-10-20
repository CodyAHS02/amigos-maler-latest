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

html:not([data-theme="amigos-dark"]) .partner-cta .partners-btn-primary,
html:not([data-theme="amigos-dark"]) .partner-cta .partners-btn-outline {
  background: #fff !important;
  border: 1px solid rgba(255, 255, 255, .72) !important;
  color: #050505 !important;
  -webkit-text-fill-color: #050505 !important;
  box-shadow: 0 18px 44px rgba(230, 36, 83, .18), 0 12px 28px rgba(246, 190, 16, .14) !important;
  overflow: hidden !important;
}

html:not([data-theme="amigos-dark"]) .partner-cta .partners-btn-primary *,
html:not([data-theme="amigos-dark"]) .partner-cta .partners-btn-outline * {
  color: #050505 !important;
  -webkit-text-fill-color: #050505 !important;
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
  background-color: #F39125 !important;
  background-image:
    radial-gradient(circle at 12% 18%, rgba(255, 255, 255, .28), transparent 25%),
    radial-gradient(circle at 86% 14%, rgba(255, 255, 255, .18), transparent 28%),
    linear-gradient(120deg, #F6BE10 0%, #F39125 28%, #E62453 58%, #C73B8E 78%, #F6BE10 100%) !important;
  background-size: 240% 240% !important;
  animation: homeMovingBrandGradient 7s ease-in-out infinite alternate !important;
  animation-delay: -3.5s !important;
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

html:not([data-theme="amigos-dark"]) .partner-cta .partners-btn-primary,
html:not([data-theme="amigos-dark"]) .partner-cta .partners-btn-outline,
html[data-theme="amigos-dark"] .partner-cta .partners-btn-primary,
html[data-theme="amigos-dark"] .partner-cta .partners-btn-outline {
  position: relative !important;
  isolation: isolate !important;
  overflow: hidden !important;
  background: #fff !important;
  background-image: none !important;
  border: 1px solid rgba(255, 255, 255, .78) !important;
  color: #050505 !important;
  -webkit-text-fill-color: #050505 !important;
}

html:not([data-theme="amigos-dark"]) .partner-cta .partners-btn-primary::before,
html:not([data-theme="amigos-dark"]) .partner-cta .partners-btn-outline::before,
html[data-theme="amigos-dark"] .partner-cta .partners-btn-primary::before,
html[data-theme="amigos-dark"] .partner-cta .partners-btn-outline::before {
  content: none !important;
  display: none !important;
}

html:not([data-theme="amigos-dark"]) .partner-cta .partners-btn-primary *,
html:not([data-theme="amigos-dark"]) .partner-cta .partners-btn-outline *,
html[data-theme="amigos-dark"] .partner-cta .partners-btn-primary *,
html[data-theme="amigos-dark"] .partner-cta .partners-btn-outline * {
  color: #050505 !important;
  -webkit-text-fill-color: #050505 !important;
}

html[data-theme="amigos-dark"] .partners-btn-outline,
html[data-theme="amigos-dark"] .partners-hero .partners-hero-actions .partners-btn:nth-child(2),
html[data-theme="amigos-dark"] .partner-cta .partners-btn-outline,
html[data-theme="amigos-dark"] .partner-cta .partners-hero-actions .partners-btn:nth-child(2) {
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
html[data-theme="amigos-dark"] .partners-hero .partners-hero-actions .partners-btn:nth-child(2) *,
html[data-theme="amigos-dark"] .partner-cta .partners-btn-outline *,
html[data-theme="amigos-dark"] .partner-cta .partners-hero-actions .partners-btn:nth-child(2) * {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}

html[data-theme="amigos-dark"] .partners-btn-outline::before,
html[data-theme="amigos-dark"] .partners-hero .partners-hero-actions .partners-btn:nth-child(2)::before,
html[data-theme="amigos-dark"] .partner-cta .partners-btn-outline::before,
html[data-theme="amigos-dark"] .partner-cta .partners-hero-actions .partners-btn:nth-child(2)::before {
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
