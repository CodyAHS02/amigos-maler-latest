import fs from "node:fs";
import path from "node:path";
import Script from "next/script";
import SharedPageShell from "./SharedPageShell";
import LegacyMarkup from "./LegacyMarkup";

function readAsset(name, type) {
  const cleanName = name.replace(/^\//, "").replace(/[?#].*$/, "");
  return fs.readFileSync(path.join(process.cwd(), "src", type, "legacy", cleanName), "utf8");
}

function assetId(prefix, name) {
  return `${prefix}-${name.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "")}`;
}

export default function AssetPageShell({ children, html, styles = [], css, externalStyles = [], scripts = [], gsap = true }) {
  const pageStyles = css ?? styles;

  return (
    <>
      {pageStyles.map((name) => <style key={name} dangerouslySetInnerHTML={{ __html: readAsset(name, "styles") }} data-page-style={name} />)}
      {externalStyles.map((href) => <link key={href} rel="stylesheet" href={href} />)}
      <SharedPageShell>
        {html && <LegacyMarkup html={html} />}
        {children}
      </SharedPageShell>
      {gsap && <>
        <Script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js" strategy="afterInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js" strategy="afterInteractive" />
      </>}
      <Script id="partials-ready-bridge" strategy="beforeInteractive">
        window.__partialsLoaded = true;
      </Script>
      {scripts.map((name) => {
        const source = readAsset(name, "scripts");
        const body = gsap ? `(function waitForPageRuntime() {
  if (!window.gsap || !window.ScrollTrigger) {
    if (document.querySelector(".loader") && !window.__amigosLoaderFallbackScheduled) {
      window.__amigosLoaderFallbackScheduled = true;
      window.setTimeout(() => {
        const loader = document.querySelector(".loader");
        if (loader && !window.__amigosLoaderFinished && !window.__amigosPageRuntimeStarted) {
          loader.style.display = "none";
          document.documentElement.style.overflow = "";
          document.body.style.overflow = "";
          window.__amigosLoaderFinished = true;
        }
      }, 2000);
    }
    window.setTimeout(waitForPageRuntime, 50);
    return;
  }
  if (window.__amigosLoaderFinished) return;
  window.__amigosPageRuntimeStarted = true;
${source}
})();` : source;
        return <Script key={name} id={assetId("page-script", name)} strategy="afterInteractive">{body}</Script>;
      })}
    </>
  );
}
