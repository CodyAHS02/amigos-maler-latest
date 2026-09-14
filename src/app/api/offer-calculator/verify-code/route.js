import { NextResponse } from "next/server";
import { verifySessionCode } from "@/lib/offerCalculator/store";
import { validateCodePayload } from "@/lib/offerCalculator/validation";

function formatChfRange(session) {
  const formatter = new Intl.NumberFormat("de-CH");
  const min = Math.round((session.minCents || session.estimated_min_cents || 0) / 100);
  const max = Math.round((session.maxCents || session.estimated_max_cents || 0) / 100);

  // Both Quick Quote and Detailed Quote render a single estimated price figure (spec §12/1.4): CHF X'XXX.–
  const amount = max || min;
  const formatted = formatter.format(amount).replace(/’/g, "'");
  return `CHF ${formatted}.–`;
}

export async function POST(request) {
  const payload = await request.json().catch(() => ({}));
  const sessionId = String(payload.sessionId || "");
  const validation = validateCodePayload(payload);

  if (!sessionId) {
    return NextResponse.json({ error: "Calculation session is required." }, { status: 400 });
  }

  if (!validation.valid) {
    return NextResponse.json({ errors: validation.errors }, { status: 400 });
  }

  const result = await verifySessionCode({ sessionId, code: validation.values.code });

  if (result.error) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    priceRange: formatChfRange(result.session),
    currency: result.session.currency
  });
}
