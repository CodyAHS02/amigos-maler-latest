# Amigos Maler — Button System

Two button types. When the user says "primary" or "secondary" button, use exactly these specs.
Reference implementation: About page hero (`src/app/about/page.jsx`, "Our Story" = primary, "Our Process" = secondary).

## Shared anatomy (both types)
- Pill: `border-radius: 999px`, `min-height: 58px`, `padding: 16px 30px 16px 72px`, `display: inline-flex`, centered, `position: relative; isolation: isolate`.
- Left badge (`::before`): white circle, `40px × 40px`, `left: 10px`, `top: 50%`, `transform: translateY(-50%)`, `background: #fff`, `box-shadow: 0 8px 18px rgba(7,26,51,.16)`.
- Arrow (`::after`): `content: "→"`, `left: 22px`, `top: 50%`, `transform: translateY(-52%)`, `color: #071a33`, `font-size: 22px`, `font-weight: 900`, `line-height: 1`.
- Hover: badge and arrow slide right 6px — `::before → translate(6px, -50%)`, `::after → translate(6px, -52%)`, `transition: transform .25s ease`.
- No border, no outline ring.
- Mobile (≤640px): `width: 100%`, `max-width: 360px`, `min-height: 54px`, `padding: 15px 24px 15px 66px`.

## Primary (filled)
- Background: `linear-gradient(105deg, #f6be10 0%, #f39125 44%, #e62453 100%)` (token `--audit-cta-gradient`).
- Text: `#ffffff`, `font-weight: 800`, normal case.
- Shadow: `0 18px 38px rgba(230, 36, 83, .18)`.
- Hover: lifts `translateY(-3px)`, background `#000`, shadow `0 20px 42px rgba(0,0,0,.18)`.

## Secondary (non-filled)
- Background: transparent, no border.
- Text: `#071a33` (dark navy).
- Same white badge + arrow as primary.
- Hover: badge/arrow nudge right 6px (fill on hover is optional — currently the gradient fill with white text on the About hero).

## Gotchas
- `src/styles/legacy/site-audit.css` applies the primary style globally to most `.btn`/`*button*`/`*cta*` links via `!important`. Secondary buttons must be excluded there (see `:not(.about-process-button):not([href="#process"])`) or overridden with higher-specificity `!important` rules.
