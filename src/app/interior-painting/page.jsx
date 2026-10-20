import AssetPageShell from "@/components/AssetPageShell";
import InteriorPaintingContent from "./InteriorPaintingContent";

export const metadata = {
  title: "Interior Painting | Amigos Maler"
};

export default function Page() {
  return (
    <AssetPageShell
      css={["/interior-painting-service.css"]}
      scripts={["/interior-painting-service.js","/script.js"]}
      shell
      >
      <InteriorPaintingContent />
    </AssetPageShell>
  );
}
