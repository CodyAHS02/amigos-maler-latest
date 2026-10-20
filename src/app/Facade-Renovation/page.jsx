import AssetPageShell from "@/components/AssetPageShell";
import FacadeRenovationContent from "./FacadeRenovationContent";

export const metadata = {
  title: "Facade Renovation | Amigos Maler"
};

export default function Page() {
  return (
    <AssetPageShell
      css={["/facade.css"]}
      scripts={["/facade.js","/script.js"]}
      shell
      >
      <FacadeRenovationContent />
    </AssetPageShell>
  );
}
