import AssetPageShell from "@/components/AssetPageShell";
import ServicesContent from "./ServicesContent";

export const metadata = { title: "Services | Amigos Maler" };

export default function Page() {
  return (
    <AssetPageShell
      css={["/service.css"]}
      scripts={["/service.js"]}
      shell>
      <ServicesContent />
    </AssetPageShell>
  );
}
