import re

file_path = '/Users/apple/Downloads/amigos-maler-2026-09-12/src/styles/legacy/partial.css'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('''html:not([data-theme="amigos-dark"]) .property-value-section .property-overlay {
    background:''', '''html:not([data-theme="amigos-dark"]) .property-value-section .property-overlay {
    display: block !important;
    background:''')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("SUCCESS")
