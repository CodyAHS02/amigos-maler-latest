import AssetPageShell from "@/components/AssetPageShell";
import ExteriorPaintingContent from "./ExteriorPaintingContent";

export const metadata = {
  title: "Exterior Painting | Amigos Maler"
};

export default function Page() {
  return (
    <AssetPageShell
      css={["/exterior-painting-service.css"]}
      scripts={["/exterior-painting-service.js","/script.js"]}
      shell
      >
      <ExteriorPaintingContent />
    </AssetPageShell>
  );
}
