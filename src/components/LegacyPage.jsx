import fs from "node:fs";
import path from "node:path";
import Script from "next/script";
import Footer from "./Footer";
import Header from "./Header";
import LegacyMarkup from "./LegacyMarkup";

function isExternalAsset(src) {
  return src.startsWith("http://") || src.startsWith("https://");
}

function sourceFilePath(src, type) {
  const cleanName = src.replace(/^\//, "").replace(/[?#].*$/, "");
  const baseDir = type === "style" ? "styles" : "scripts";

  return path.join(process.cwd(), "src", baseDir, "legacy", cleanName);
}

function readSourceAsset(src, type) {
  return fs.readFileSync(sourceFilePath(src, type), "utf8");
}

function assetId(prefix, src) {
  return `${prefix}-${src.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "")}`;
}

function LocalStyle({ href }) {
  return <style dangerouslySetInnerHTML={{ __html: readSourceAsset(href, "style") }} data-legacy-style={href} />;
}

function LocalScript({ src, waitForGsap = false }) {
  const source = readSourceAsset(src, "script");
  const scriptBody = waitForGsap
    ? `
(function runLegacyScriptWhenReady() {
  if (!window.gsap || !window.ScrollTrigger) {
    window.setTimeout(runLegacyScriptWhenReady, 50);
    return;
  }
${source}
})();
`
    : source;

  return (
    <Script id={assetId("legacy-script", src)} strategy="afterInteractive">
      {scriptBody}
    </Script>
  );
}

export default function LegacyPage({ children, css = [], html, scripts = [], shell = true, gsap = true }) {
  return (
    <>
      {css.map((href) =>
        isExternalAsset(href) ? <link key={href} rel="stylesheet" href={href} /> : <LocalStyle href={href} key={href} />
      )}

      {shell && <Header />}
      <LegacyMarkup html={html} />
      {children}
      {shell && <Footer />}

      {gsap && (
        <>
          <Script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js" strategy="beforeInteractive" />
          <Script
            src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"
            strategy="beforeInteractive"
          />
        </>
      )}
      <Script
        id="partials-ready-bridge"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: "window.__partialsLoaded = true;"
        }}
      />
      {scripts.map((src) =>
        isExternalAsset(src) ? <Script key={src} src={src} strategy="afterInteractive" /> : <LocalScript key={src} src={src} waitForGsap={gsap} />
      )}
    </>
  );
}

