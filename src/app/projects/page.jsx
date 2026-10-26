import AssetPageShell from "@/components/AssetPageShell";
import ProjectsContent from "./ProjectsContent";

export const metadata = { title: "Projects | Amigos Maler" };

export default function Page() {
  return (
    <AssetPageShell
      css={["/style.css","amigos/styles.css","amigos/premium.css","amigos/theme.css","amigos/projects-theme.css"]}
      scripts={["amigos/main.js","amigos/calc.js","amigos/projects-hero.js"]}
      shell
      gsap>
      <ProjectsContent />
    </AssetPageShell>
  );
}
