import AssetPageShell from "@/components/AssetPageShell";
import PropertyValuePreservationContent from "./PropertyValuePreservationContent";

export const metadata = {
  title: "Immobilienpflege | Amigos Maler GmbH"
};

export default function Page() {
  return (
    <AssetPageShell gsap={false}>
      <PropertyValuePreservationContent />
    </AssetPageShell>
  );
}
