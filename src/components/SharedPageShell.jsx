import fs from "node:fs";
import path from "node:path";
import Footer from "./Footer";
import Header from "./Header";

function readLegacyStyle(name) {
  return fs.readFileSync(path.join(process.cwd(), "src", "styles", "legacy", name), "utf8");
}

export default function SharedPageShell({ children }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: readLegacyStyle("partial.css") }} data-shared-page-style="partial" />
      <style dangerouslySetInnerHTML={{ __html: readLegacyStyle("site-audit.css") }} data-shared-page-style="audit" />
      <style dangerouslySetInnerHTML={{ __html: readLegacyStyle("services-mega-menu.css") }} data-shared-page-style="services-mega-menu" />
      <Header />
      <style dangerouslySetInnerHTML={{ __html: `
        html body:has(.color-hero) .site-header .header-actions .customer-header-btn,
        html body:has(.color-hero) .site-header .header-actions .header-btn,
        html body:has(.color-hero) .site-header .header-actions .customer-header-btn *,
        html body:has(.color-hero) .site-header .header-actions .header-btn * {
          color: #000 !important;
          -webkit-text-fill-color: #000 !important;
          stroke: currentColor !important;
        }
      ` }} data-color-material-header-contrast />
      {children}
      <Footer />
    </>
  );
}
