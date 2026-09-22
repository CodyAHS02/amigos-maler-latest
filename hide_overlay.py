import re

file_path = '/Users/apple/Downloads/amigos-maler-2026-09-12/src/styles/legacy/plastering.css'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('''.property-overlay {
    position: absolute;
    inset: 0;
    background: rgba(11, 35, 63, .72);
}''', '''.property-overlay {
    display: none !important;
    position: absolute;
    inset: 0;
    background: rgba(11, 35, 63, .72);
}''')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("SUCCESS")
