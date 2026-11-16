import Script from "next/script";
import SharedPageShell from "./SharedPageShell";

export default function ServicePageShell({ children }) {
  return (
    <>
      <link rel="stylesheet" href="/legacy/styles/service.css" precedence="amigos-page" data-page-style="service" />
      <SharedPageShell>{children}</SharedPageShell>
      <Script src="/vendor/gsap.min.js" strategy="beforeInteractive" />
      <Script src="/vendor/ScrollTrigger.min.js" strategy="beforeInteractive" />
      <Script id="service-page-script" src="/legacy/scripts/service.js" strategy="afterInteractive" />
    </>
  );
}
