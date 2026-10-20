import AssetPageShell from "@/components/AssetPageShell";
import ColorAndMaterialContent from "./ColorAndMaterialContent";

export const metadata = {
  title: "Color & Material | Amigos Maler"
};

export default function Page() {
  return (
    <AssetPageShell
      css={["/color-and-material.css"]}
      scripts={["/color-and-material.js","/script.js"]}
      shell
      >
      <ColorAndMaterialContent />
    </AssetPageShell>
  );
}
