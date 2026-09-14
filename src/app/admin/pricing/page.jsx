import AdminShell from "@/components/admin/AdminShell";
import { getCurrentAdmin } from "@/lib/currentAdmin";
import { loadPricingSettings } from "@/lib/offerCalculator/pricingStore";
import PricingEditor from "./PricingEditor";

export const metadata = {
  title: "Calculator Pricing | Amigos Maler Admin",
  robots: {
    index: false,
    follow: false
  }
};

export const dynamic = "force-dynamic";

export default async function AdminPricingPage() {
  const admin = await getCurrentAdmin();
  const settings = await loadPricingSettings();

  return (
    <AdminShell activePath="/admin/pricing" admin={admin} eyebrow="Offer Calculators" title="Calculator Pricing Manager">
      <PricingEditor initialSettings={settings} />
    </AdminShell>
  );
}
