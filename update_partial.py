import re

file_path = '/Users/apple/Downloads/amigos-maler-2026-09-12/src/styles/legacy/partial.css'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Define the start and end of the block to replace
start_marker = "/* =========================================\n   GLOBAL LIGHT MODE OVERRIDES FOR ALL SERVICE HEROES"

if start_marker in content:
    content = content[:content.find(start_marker)]
else:
    print("Could not find start marker!")
    exit(1)

new_block = """/* =========================================
   GLOBAL LIGHT MODE OVERRIDES FOR ALL SERVICE HEROES
   And Image Cover Fixes
========================================= */

/* Hero Image Cover Fix */
section[class*="hero"] [class*="hero-bg"] img,
section[class*="hero"] [class*="hero-image"] img,
section.hero [class*="hero-bg"] img,
section.hero [class*="hero-image"] img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    object-position: center !important;
    display: block !important;
}

/* Light Mode Overlays */
html:not([data-theme="amigos-dark"]) section[class*="hero"] [class*="overlay"],
html:not([data-theme="amigos-dark"]) section.hero [class*="overlay"] {
    background:
        radial-gradient(circle at 18% 28%, rgba(230, 36, 83, .18), transparent 32%),
        radial-gradient(circle at 78% 30%, rgba(255, 122, 26, .14), transparent 34%),
        linear-gradient(90deg, rgba(255, 255, 255, .82) 0%, rgba(255, 255, 255, .58) 48%, rgba(255, 255, 255, .34) 100%),
        linear-gradient(180deg, rgba(255, 255, 255, .20), rgba(255, 255, 255, .72)) !important;
}

/* Light Mode Typography */
html:not([data-theme="amigos-dark"]) section[class*="hero"] h1,
html:not([data-theme="amigos-dark"]) section[class*="hero"] p,
html:not([data-theme="amigos-dark"]) section[class*="hero"] strong,
html:not([data-theme="amigos-dark"]) section[class*="hero"] h4,
html:not([data-theme="amigos-dark"]) section.hero h1,
html:not([data-theme="amigos-dark"]) section.hero p,
html:not([data-theme="amigos-dark"]) section.hero strong,
html:not([data-theme="amigos-dark"]) section.hero h4 {
    color: #050505 !important;
    -webkit-text-fill-color: #050505 !important;
}

html:not([data-theme="amigos-dark"]) section[class*="hero"] [class*="label"],
html:not([data-theme="amigos-dark"]) section[class*="hero"] [class*="eyebrow"],
html:not([data-theme="amigos-dark"]) section.hero [class*="label"],
html:not([data-theme="amigos-dark"]) section.hero [class*="eyebrow"] {
    color: #e62453 !important;
    -webkit-text-fill-color: #e62453 !important;
}

html:not([data-theme="amigos-dark"]) section[class*="hero"] span:not([class*="label"]):not([class*="eyebrow"]):not([class*="line"]),
html:not([data-theme="amigos-dark"]) section.hero span:not([class*="label"]):not([class*="eyebrow"]):not([class*="line"]) {
    color: #4a4a4a !important;
    -webkit-text-fill-color: #4a4a4a !important;
}

/* Light Mode Secondary Buttons */
html:not([data-theme="amigos-dark"]) section[class*="hero"] [class*="btn-secondary"],
html:not([data-theme="amigos-dark"]) section[class*="hero"] [class*="secondary-btn"],
html:not([data-theme="amigos-dark"]) section[class*="hero"] [class*="outline-btn"],
html:not([data-theme="amigos-dark"]) section[class*="hero"] [class*="btn-outline"],
html:not([data-theme="amigos-dark"]) section.hero [class*="btn-secondary"],
html:not([data-theme="amigos-dark"]) section.hero [class*="secondary-btn"],
html:not([data-theme="amigos-dark"]) section.hero [class*="outline-btn"],
html:not([data-theme="amigos-dark"]) section.hero [class*="btn-outline"] {
    background-image:
        linear-gradient(rgba(255, 255, 255, .42), rgba(255, 255, 255, .42)),
        var(--logo-gradient-moving) !important;
    background-origin: padding-box, border-box !important;
    background-clip: padding-box, border-box !important;
    background-size: 100% 100%, 260% 260% !important;
    border: 1px solid transparent !important;
    color: #071A33 !important;
    -webkit-text-fill-color: #071A33 !important;
    font-weight: 700 !important;
    animation: svcLogoGradientShift 8s ease-in-out infinite !important;
}

html:not([data-theme="amigos-dark"]) section[class*="hero"] [class*="btn-secondary"]:hover,
html:not([data-theme="amigos-dark"]) section[class*="hero"] [class*="secondary-btn"]:hover,
html:not([data-theme="amigos-dark"]) section[class*="hero"] [class*="outline-btn"]:hover,
html:not([data-theme="amigos-dark"]) section[class*="hero"] [class*="btn-outline"]:hover,
html:not([data-theme="amigos-dark"]) section.hero [class*="btn-secondary"]:hover,
html:not([data-theme="amigos-dark"]) section.hero [class*="secondary-btn"]:hover,
html:not([data-theme="amigos-dark"]) section.hero [class*="outline-btn"]:hover,
html:not([data-theme="amigos-dark"]) section.hero [class*="btn-outline"]:hover {
    box-shadow: 0 12px 24px rgba(243, 145, 37, .12) !important;
}
"""

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content + new_block)

print("SUCCESS")
