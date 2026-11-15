import fs from "node:fs";
import path from "node:path";
import Script from "next/script";
import SharedPageShell from "./SharedPageShell";

const serviceScript = fs.readFileSync(
  path.join(process.cwd(), "src", "scripts", "legacy", "service.js"),
  "utf8"
);
const serviceStyles = fs.readFileSync(
  path.join(process.cwd(), "src", "styles", "legacy", "service.css"),
  "utf8"
);

export default function ServicePageShell({ children }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: serviceStyles }} data-page-style="service" />
      <SharedPageShell>{children}</SharedPageShell>
      <Script src="/vendor/gsap.min.js" strategy="beforeInteractive" />
      <Script src="/vendor/ScrollTrigger.min.js" strategy="beforeInteractive" />
      <Script id="service-page-script" strategy="afterInteractive">
        {`(function runServiceScriptWhenReady() {
  if (!window.gsap || !window.ScrollTrigger) {
    window.setTimeout(runServiceScriptWhenReady, 50);
    return;
  }
${serviceScript}
})();`}
      </Script>
    </>
  );
}
