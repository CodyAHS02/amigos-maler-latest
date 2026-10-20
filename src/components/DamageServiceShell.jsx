import fs from "node:fs";
import path from "node:path";
import SharedPageShell from "./SharedPageShell";

const damageStyles = fs.readFileSync(
  path.join(process.cwd(), "src", "styles", "legacy", "damage-service.css"),
  "utf8"
);

export default function DamageServiceShell({ children }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: damageStyles }} data-page-style="damage-service" />
      <SharedPageShell>{children}</SharedPageShell>
    </>
  );
}
