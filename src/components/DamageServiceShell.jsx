import SharedPageShell from "./SharedPageShell";

export default function DamageServiceShell({ children }) {
  return (
    <>
      <link rel="stylesheet" href="/legacy/styles/damage-service.css" precedence="amigos-page" data-page-style="damage-service" />
      <SharedPageShell>{children}</SharedPageShell>
    </>
  );
}
