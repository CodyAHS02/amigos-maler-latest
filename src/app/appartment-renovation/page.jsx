import AssetPageShell from "@/components/AssetPageShell";
import AppartmentRenovationContent from "./AppartmentRenovationContent";

export const metadata = {
  title: "Appartment Renovation | Amigos Maler"
};

export default function Page() {
  return (
    <AssetPageShell
      css={["/appartment-renovation.css"]}
      scripts={["/appartment-renovation.js","/script.js"]}
      shell
      >
      <AppartmentRenovationContent />
    </AssetPageShell>
  );
}
