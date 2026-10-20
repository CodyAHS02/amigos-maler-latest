import AssetPageShell from "@/components/AssetPageShell";
import SprayPaintingContent from "./SprayPaintingContent";

export const metadata = { title: "Spray Painting | Amigos Maler" };

export default function Page() {
  return (
    <AssetPageShell
      css={["/spray-painting.css"]}
      scripts={["/spray-painting.js","/script.js"]}
      shell>
      <SprayPaintingContent />
    </AssetPageShell>
  );
}
