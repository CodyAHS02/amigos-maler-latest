import re

with open('public/amigos/amigos.html', 'r') as f:
    html = f.read()

# Extract content between <body> and </body>
body_match = re.search(r'<body>(.*?)</body>', html, re.DOTALL)
if body_match:
    body_content = body_match.group(1)
    
    # Remove the custom header
    body_content = re.sub(r'<header class="site-header">.*?</header>', '', body_content, flags=re.DOTALL)
    
    # Replace img/ with /amigos/img/
    body_content = re.sub(r'(src|poster|srcset)=["\']img/', r'\1="/amigos/img/', body_content)
    
    # Replace js/ with /amigos/js/ (just in case there are inline scripts not handled by LegacyPage)
    # Actually wait, LegacyPage handles scripts array, but if there's any other assets:
    # We will leave JS out of the HTML body since we pass them to LegacyPage.
    # The original file has scripts at the bottom:
    # <script src="js/theme.js"></script>
    # <script src="js/main.js"></script>
    # <script src="js/calc.js"></script>
    # <script src="js/ba.js"></script>
    # <script src="js/premium.js"></script>
    body_content = re.sub(r'<script src="js/.*?".*?</script>', '', body_content)
    
    # Escape backticks and ${}
    body_content = body_content.replace('`', '\\`').replace('${', '\\${')
    
    with open('src/app/projects/page.jsx', 'w') as out:
        out.write(f'''import LegacyPage from "@/components/LegacyPage";

export const metadata = {{
  title: "Real Estate & Projects | Amigos Immo · Amigos Maler GmbH",
  description: "Amigo Immo AI-powered property intelligence platform. Predictive maintenance, computer-vision damage detection, and instant AI quotes for luxury real estate."
}};

const pageHtml = `{body_content}`;

export default function ProjectsPage() {{
  return (
    <LegacyPage 
      html={{pageHtml}} 
      css={{{["amigos/styles.css", "amigos/premium.css", "amigos/theme.css"]}}}
      scripts={{{["amigos/theme.js", "amigos/main.js", "amigos/calc.js", "amigos/ba.js", "amigos/premium.js"]}}}
      shell={{true}}
    />
  );
}}
''')
    print("Done extracting and writing to page.jsx")
else:
    print("Could not find body tag")
