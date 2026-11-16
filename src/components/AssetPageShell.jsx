import Script from "next/script";
import SharedPageShell from "./SharedPageShell";
import LegacyMarkup from "./LegacyMarkup";

function assetId(prefix, name) {
  return `${prefix}-${name.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "")}`;
}

export default function AssetPageShell({ children, html, styles = [], css, externalStyles = [], scripts = [], gsap = true }) {
  const pageStyles = css ?? styles;

  return (
    <>
      {pageStyles.map((name) => {
        const cleanName = name.replace(/^\//, "").replace(/[?#].*$/, "");
        return (
          <link
            key={cleanName}
            rel="stylesheet"
            href={`/legacy/styles/${cleanName}`}
            precedence="amigos-page"
            data-page-style={cleanName}
          />
        );
      })}
      {externalStyles.map((href) => (
        <link key={href} rel="stylesheet" href={href} precedence="amigos-external" />
      ))}
      <SharedPageShell>
        {html && <LegacyMarkup html={html} />}
        {children}
      </SharedPageShell>
      {gsap && (
        <>
          <Script src="/vendor/gsap.min.js" strategy="beforeInteractive" />
          <Script src="/vendor/ScrollTrigger.min.js" strategy="beforeInteractive" />
        </>
      )}
      <Script id="partials-ready-bridge" strategy="beforeInteractive">
        {`window.__partialsLoaded = true;
        if (typeof window !== "undefined") {
          window.__amigosLoaderFallbackScheduled = true;
          window.setTimeout(function() {
            var loader = document.querySelector(".loader");
            if (loader && !window.__amigosLoaderFinished) {
              loader.style.display = "none";
              document.documentElement.style.overflow = "";
              document.body.style.overflow = "";
            }
          }, 1200);
        }`}
      </Script>
      {scripts.map((name) => {
        const cleanName = name.replace(/^\//, "").replace(/[?#].*$/, "");
        const scriptId = assetId("page-script", cleanName);
        return (
          <Script
            key={name}
            id={scriptId}
            src={`/legacy/scripts/${cleanName}`}
            strategy="afterInteractive"
          />
        );
      })}
    </>
  );
}
