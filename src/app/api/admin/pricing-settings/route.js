import { NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, verifyAdminSession } from "@/lib/session";
import { loadPricingSettings, savePricingSettings, resetToAverageDefaults } from "@/lib/offerCalculator/pricingStore";

export const runtime = "nodejs";

async function requireAdmin(request) {
  const session = await verifyAdminSession(request.cookies.get(ADMIN_SESSION_COOKIE)?.value);
  return session ? null : NextResponse.json({ error: "Unauthorized." }, { status: 401 });
}

export async function GET(request) {
  const denied = await requireAdmin(request);
  if (denied) return denied;

  try {
    const settings = await loadPricingSettings();
    return NextResponse.json({ ok: true, settings });
  } catch (err) {
    console.error("Failed to load pricing settings:", err);
    return NextResponse.json({ error: "Failed to load pricing settings." }, { status: 500 });
  }
}

export async function PUT(request) {
  const denied = await requireAdmin(request);
  if (denied) return denied;

  try {
    const body = await request.json();
    const { updates, action } = body;

    if (action === "reset_defaults") {
      const settings = await resetToAverageDefaults();
      return NextResponse.json({ ok: true, settings });
    }

    if (!Array.isArray(updates)) {
      return NextResponse.json({ error: "Invalid updates format. Array expected." }, { status: 400 });
    }

    const settings = await savePricingSettings(updates);
    return NextResponse.json({ ok: true, settings });
  } catch (err) {
    console.error("Failed to update pricing settings:", err);
    return NextResponse.json({ error: "Failed to update pricing settings." }, { status: 500 });
  }
}
