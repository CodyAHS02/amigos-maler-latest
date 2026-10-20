# Legacy Page Migration Inventory

This checklist records the current `LegacyPage` implementation before any route is migrated. Legacy routes remain active until their React replacement has been implemented and compared.

## Shared Runtime

- Wrapper: `src/components/LegacyPage.jsx`
- Raw markup renderer: `src/components/LegacyMarkup.jsx`
- Transitional asset shell: `src/components/AssetPageShell.jsx` (shared shell for routes whose original markup/runtime still need full JSX/CSS extraction; shared styles come from `SharedPageShell`)
- Shared browser script: `src/scripts/legacy/script.js`
- Shared partial stylesheet: `src/styles/legacy/partial.css`
- Service stylesheet: `src/styles/legacy/service.css` (loaded only by service-page shells)
- Main homepage stylesheet: `src/styles/legacy/style.css`
- Shared dependencies: GSAP/ScrollTrigger, site shell/header/footer, theme attributes, global floating widgets, and asset URLs under `public/assets`.
- Audit result: `AssetPageShell` now delegates shared `partial.css` and `site-audit.css` loading to `SharedPageShell`; route-specific styles are loaded once per route. No legacy assets were deleted.
- Homepage regression root cause and fix: `AssetPageShell` previously rendered either `html` or `children`, so every React child after `pageHtmlBeforeOffer` was discarded. It now renders preserved markup followed by React children. A local production response confirmed the restored Digital Tools, quote wizard, success modal, AI, projects, plans, and testimonials markers.

## Route Inventory

| Status | Route | Template source | CSS | JS | Notes |
| --- | --- | --- | --- | --- | --- |
| JSX markup converted; build verified; visual and functional verification pending | `/` | `src/app/page.jsx` plus `src/components/home/HomeBeforeOffer.jsx`, `HomeBeforeProjects.jsx`, and `HomeProjectsAndAfter.jsx` | `/style.css`, Font Awesome CDN through `AssetPageShell` | `/script.js`, `/app.js` through `AssetPageShell` | Digital Tools and quote-wizard sections were intentionally removed per request; visual comparison remains pending |
| JSX markup converted; build verified; visual and functional verification pending | `/about` | `src/app/about/page.jsx`, `src/app/about/AboutContent.jsx` | `/style.css`, `/about.css` through `AssetPageShell` | `/about.js`, `/script.js` through `AssetPageShell` | Page body is JSX; GSAP reveals, process timeline, founder interaction, testimonials, and theme overrides preserved while visual comparison remains pending |
| JSX markup converted; build verified; visual and functional verification pending | `/Drywall` | `src/app/Drywall/page.jsx`, `src/app/Drywall/DrywallContent.jsx` | `/drywall.css` through `AssetPageShell` | `/drywall.js`, `/script.js` through `AssetPageShell` | Page body is JSX; original service runtime preserved while visual comparison remains pending |
| JSX markup converted; build verified; visual and functional verification pending | `/Facade-Renovation` | `src/app/Facade-Renovation/page.jsx`, `src/app/Facade-Renovation/FacadeRenovationContent.jsx` | `/facade.css` through `AssetPageShell` | `/facade.js`, `/script.js` through `AssetPageShell` | Page body is JSX; original service runtime preserved while visual comparison remains pending |
| JSX markup converted; build verified; visual and functional verification pending | `/Plastering` | `src/app/Plastering/PlasteringContent.jsx` | `/plastering.css` through `AssetPageShell` | `/plastering.js`, `/script.js` through `AssetPageShell` | Full service markup is JSX; legacy stylesheet/runtime retained intentionally for the existing animations and interactions |
| JSX markup converted; build verified; visual and functional verification pending | `/appartment-renovation` | `src/app/appartment-renovation/page.jsx`, `src/app/appartment-renovation/AppartmentRenovationContent.jsx` | `/appartment-renovation.css` through `AssetPageShell` | `/appartment-renovation.js`, `/script.js` through `AssetPageShell` | Page body is JSX; original service runtime preserved while visual comparison remains pending |
| JSX markup converted; build verified; visual and functional verification pending | `/color-and-material` | `src/app/color-and-material/page.jsx`, `src/app/color-and-material/ColorAndMaterialContent.jsx` | `/color-and-material.css` through `AssetPageShell` | `/color-and-material.js`, `/script.js` through `AssetPageShell` | Page body is JSX; original interactive runtime preserved while visual comparison remains pending |
| Replacement implemented; build verified; visual and functional verification pending | `/contact` | `src/app/contact/page.jsx` (React sections) | `src/components/AssetPageShell.jsx` loads `/contact.css` and shared styles | `AssetPageShell` preserves GSAP/ScrollTrigger, `/contact.js`, and `/script.js` | Markup converted to React; original contact animations and form behavior remain until browser comparison |
| JSX markup converted; build verified; visual and functional verification pending | `/exterior-painting` | `src/app/exterior-painting/page.jsx`, `src/app/exterior-painting/ExteriorPaintingContent.jsx` | `/exterior-painting-service.css` through `AssetPageShell` | `/exterior-painting-service.js`, `/script.js` through `AssetPageShell` | Page body is JSX; original service runtime preserved while visual comparison remains pending |
| JSX markup converted; build verified; visual and functional verification pending | `/interior-painting` | `src/app/interior-painting/page.jsx`, `src/app/interior-painting/InteriorPaintingContent.jsx` | `/interior-painting-service.css` through `AssetPageShell` | `/interior-painting-service.js`, `/script.js` through `AssetPageShell` | Page body is JSX; original service runtime preserved while visual comparison remains pending |
| Replacement implemented; build verified; visual and functional verification pending | `/mold` | `src/app/mold/page.jsx` (React sections) | shared `/service.css`, `/partial.css`, `/site-audit.css` through `src/components/ServicePageShell.jsx` | `ServicePageShell` preserves GSAP/ScrollTrigger and `/service.js` behavior | Markup converted to React; original service animation script remains until visual and functional comparison |
| Replacement implemented; build verified; visual and functional verification pending | `/molding` | `src/app/molding/page.jsx` (React sections) | shared `/service.css`, `/partial.css`, `/site-audit.css` through `src/components/ServicePageShell.jsx` | `ServicePageShell` preserves GSAP/ScrollTrigger and `/service.js` behavior | Markup converted to React; original service animation script remains until visual and functional comparison |
| JSX markup converted; build verified; visual and functional verification pending | `/partners` | `src/app/partners/page.jsx`, `src/app/partners/PartnersContent.jsx` | `/partners.css` through `AssetPageShell` | `/partners.js`, `/script.js` through `AssetPageShell` | Page body is JSX; forced theme rules and interactions preserved while visual comparison remains pending |
| JSX markup converted; build verified; visual and functional verification pending | `/projects` | `src/app/projects/page.jsx`, `src/app/projects/ProjectsContent.jsx` | `/style.css` and `amigos/*.css` through `AssetPageShell` | `amigos/*.js` through `AssetPageShell` | Page body is JSX; separate projects system and interactions preserved while visual comparison remains pending |
| JSX markup converted; build verified; visual and functional verification pending | `/property-value-preservation` | `src/app/property-value-preservation/PropertyValuePreservationContent.jsx` | `/werterhalt.css` through `AssetPageShell`; forced theme override remains inline pending CSS extraction | `/werterhalt.js`, `/script.js` through `AssetPageShell` | Full page markup is JSX; legacy stylesheet/runtime retained intentionally for the existing interactive property experience |
| Replacement implemented; build verified; visual and functional verification pending | `/schadensservice` | `src/app/schadensservice/page.jsx` (React sections) | `src/components/DamageServiceShell.jsx` loads `/damage-service.css`; shared shell styles through `src/components/SharedPageShell.jsx` | None; GSAP and generic legacy script removed after dependency audit | Existing React content preserved; dedicated stylesheet remains temporarily source-loaded and is namespaced under `.damage-*` |
| JSX markup converted; build verified; visual and functional verification pending | `/services` | `src/app/services/page.jsx`, `src/app/services/ServicesContent.jsx` | `/service.css` through `AssetPageShell` | `/service.js` through `AssetPageShell` | Page body is JSX; original service runtime preserved while visual comparison remains pending |
| JSX markup converted; build verified; visual and functional verification pending | `/spray-painting` | `src/app/spray-painting/page.jsx`, `src/app/spray-painting/SprayPaintingContent.jsx` | `/spray-painting.css` through `AssetPageShell` | `/spray-painting.js`, `/script.js` through `AssetPageShell` | Page body is JSX; original service runtime preserved while visual comparison remains pending |
| Replacement implemented; build verified; visual and functional verification pending | `/water-damage` | `src/app/water-damage/page.jsx` (React sections) | shared `/service.css`, `/partial.css`, `/site-audit.css` through `src/components/ServicePageShell.jsx` | `ServicePageShell` preserves GSAP/ScrollTrigger and `/service.js` behavior | Markup converted to React; original service animation script remains until visual and functional comparison |
| Implemented; build verified; visual and functional verification pending | `/agb` | `src/app/agb/page.jsx` (React sections) | `src/components/LegalDocument.module.css`; shared styles through `src/components/SharedPageShell.jsx` | None | React replacement preserves all four legal sections and metadata; shared shell CSS remains a traced dependency |
| Implemented; build verified; visual and functional verification pending | `/datenschutz` | `src/app/datenschutz/page.jsx` (React sections) | `src/components/LegalDocument.module.css`; shared styles through `src/components/SharedPageShell.jsx` | None | React replacement preserves all four privacy sections and metadata |
| Implemented; build verified; visual and functional verification pending | `/impressum` | `src/app/impressum/page.jsx` (React sections) | `src/components/LegalDocument.module.css`; shared styles through `src/components/SharedPageShell.jsx` | None | React replacement preserves all legal sections and metadata |

## Migration Status

- Not inspected: none of the 23 listed routes.
- Source/runtime inspected: all 23 listed routes; visual comparison remains pending.
- Replacement implemented: `/agb`, `/datenschutz`, `/impressum`, `/schadensservice`, `/water-damage`, `/mold`, `/molding`, `/contact`.
- Partial JSX migration: `/` (Digital Tools and quote wizard restored as JSX and verified in the local HTML response; other sections remain legacy strings).
- The route bodies are now JSX components. Legacy CSS and JavaScript runtimes remain intentionally loaded through `AssetPageShell` where they still provide the original page behavior. The homepage also retains the original shared runtime while its former HTML fragments are now JSX components.
- JSX markup converted: `/Plastering` and `/property-value-preservation` (page-specific stylesheets/runtimes still retained intentionally).
- Visual comparison completed: none in this inventory pass.
- Functional verification completed: source/runtime dependency audit and production build only; no browser interaction pass has been completed.
- Legacy dependencies resolved: `/agb` page markup and page-specific inline styles replaced; `/schadensservice` no longer loads `LegacyPage`, GSAP, or the generic legacy browser script. Shared shell styles and the namespaced damage stylesheet remain intentionally in use.

## Current Blocker

The repository contains `check_box.mjs` and `test-footer.mjs`, but Puppeteer is not installed; no Playwright/Puppeteer package, browser executable, or visual-regression runner is available. The browser automation kernel also exits before opening a route. Routes therefore remain unmarked for visual or functional verification.

## Manual Verification Workflow

1. Start the app with `npm run dev -- --port 3001`.
2. Open each migrated route at `http://localhost:3001/`, `/about`, `/Drywall`, `/Facade-Renovation`, `/Plastering`, `/appartment-renovation`, `/color-and-material`, `/contact`, `/exterior-painting`, `/interior-painting`, `/mold`, `/molding`, `/partners`, `/projects`, `/property-value-preservation`, `/schadensservice`, `/services`, `/spray-painting`, `/water-damage`, `/agb`, `/datenschutz`, and `/impressum` at 1440x900 and 390x844. The repository currently contains 23 listed public routes, although the migration request referred to 22.
3. Compare against the original route from the pre-migration Git revision at the same viewport sizes. Check header/footer position, typography, spacing, image crops, section order, and theme state.
4. In DevTools, check Console and Network for hydration errors, failed images, failed fonts, and failed scripts.
5. On `/schadensservice`, test card/button hover states, responsive stacking, theme toggle, footer accordions, and scroll-to-top. On `/water-damage`, test hero entrance, scroll reveals, hero parallax/Ken Burns, header transition, and CTA links.

## Safe Migration Rule

Keep every listed route on its current legacy implementation until its replacement has equivalent markup, styles, assets, interactions, responsive behavior, and runtime verification. Do not delete or rename the legacy CSS, JavaScript, or template sources while they are still referenced by any route.
