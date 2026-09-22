import sys

file_path = '/Users/apple/Downloads/amigos-maler-2026-09-12/src/styles/legacy/partial.css'

with open(file_path, 'a', encoding='utf-8') as f:
    f.write('''\n
/* Property Preservation Light Mode Fixes */
html:not([data-theme="amigos-dark"]) .property-preservation-section .property-overlay,
html:not([data-theme="amigos-dark"]) .property-care .property-overlay,
html:not([data-theme="amigos-dark"]) .property-value-section .property-overlay {
    background:
        radial-gradient(circle at 18% 28%, rgba(230, 36, 83, .18), transparent 32%),
        radial-gradient(circle at 78% 30%, rgba(255, 122, 26, .14), transparent 34%),
        linear-gradient(90deg, rgba(255, 255, 255, .90) 0%, rgba(255, 255, 255, .75) 48%, rgba(255, 255, 255, .50) 100%),
        linear-gradient(180deg, rgba(255, 255, 255, .30), rgba(255, 255, 255, .85)) !important;
}

html:not([data-theme="amigos-dark"]) .property-preservation-section .property-content,
html:not([data-theme="amigos-dark"]) .property-preservation-section .property-content h2,
html:not([data-theme="amigos-dark"]) .property-preservation-section .property-content p,
html:not([data-theme="amigos-dark"]) .property-preservation-section .section-tag,
html:not([data-theme="amigos-dark"]) .property-care .property-content,
html:not([data-theme="amigos-dark"]) .property-care .property-content h2,
html:not([data-theme="amigos-dark"]) .property-care .property-content p,
html:not([data-theme="amigos-dark"]) .property-care .section-tag,
html:not([data-theme="amigos-dark"]) .property-value-section .property-content,
html:not([data-theme="amigos-dark"]) .property-value-section .property-content h2,
html:not([data-theme="amigos-dark"]) .property-value-section .property-content p,
html:not([data-theme="amigos-dark"]) .property-value-section .section-tag {
    color: #050505 !important;
    -webkit-text-fill-color: #050505 !important;
}

html:not([data-theme="amigos-dark"]) .property-floating-cards .floating-card {
    background: rgba(255, 255, 255, 0.8) !important;
    border: 1px solid rgba(0, 0, 0, 0.1) !important;
}

html:not([data-theme="amigos-dark"]) .property-floating-cards .floating-card strong {
    color: #e62453 !important;
    -webkit-text-fill-color: #e62453 !important;
}

html:not([data-theme="amigos-dark"]) .property-floating-cards .floating-card span {
    color: #050505 !important;
    -webkit-text-fill-color: #050505 !important;
}
''')

print("SUCCESS")
