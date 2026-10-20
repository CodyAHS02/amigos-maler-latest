import AssetPageShell from "@/components/AssetPageShell";
import DrywallContent from "./DrywallContent";

export const metadata = {
  title: "Drywall | Amigos Maler"
};

export default function Page() {
  return (
    <AssetPageShell
      css={["/drywall.css"]}
      scripts={["/drywall.js","/script.js"]}
      shell
      >
      <DrywallContent />
    </AssetPageShell>
  );
}
