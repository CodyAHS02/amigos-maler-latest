import AssetPageShell from "@/components/AssetPageShell";
import PlasteringContent from "./PlasteringContent";

export const metadata = {
  title: "Plastering | Amigos Maler"
};

export default function Page() {
  return (
    <AssetPageShell css={["/plastering.css"]} scripts={["/plastering.js", "/script.js"]}>
      <PlasteringContent />
    </AssetPageShell>
  );
}
