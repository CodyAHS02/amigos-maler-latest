import Footer from "./Footer";
import Header from "./Header";

export default function SharedPageShell({ children }) {
  return (
    <>
      <link rel="stylesheet" href="/legacy/styles/partial.css" precedence="amigos-shared" />
      <link rel="stylesheet" href="/legacy/styles/site-audit.css" precedence="amigos-shared" />
      <link rel="stylesheet" href="/legacy/styles/services-mega-menu.css" precedence="amigos-shared" />
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
