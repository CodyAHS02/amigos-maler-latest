import { NextResponse } from "next/server";
import { sendVerificationEmail } from "@/lib/offerCalculator/email";
import { attachVerificationCode, createVerificationCode } from "@/lib/offerCalculator/store";
import { validateEmailPayload } from "@/lib/offerCalculator/validation";

export async function POST(request) {
  const payload = await request.json().catch(() => ({}));
  const sessionId = String(payload.sessionId || "");
  const validation = validateEmailPayload(payload);

  if (!sessionId) {
    return NextResponse.json({ error: "Calculation session is required." }, { status: 400 });
  }

  if (!validation.valid) {
    return NextResponse.json({ errors: validation.errors }, { status: 400 });
  }

  const code = createVerificationCode();
  const session = await attachVerificationCode({
    sessionId,
    email: validation.values.email,
    code,
    customerInfo: {
      firstName: validation.values.firstName,
      lastName: validation.values.lastName,
      phone: validation.values.phone,
      email: validation.values.email
    }
  });

  if (!session) {
    return NextResponse.json({ error: "Calculation session not found." }, { status: 404 });
  }

  if (session.rateLimited) {
    return NextResponse.json({ error: session.message }, { status: 429 });
  }

  const delivery = await sendVerificationEmail({ email: validation.values.email, code });
  const isDev = process.env.NODE_ENV !== "production";

  return NextResponse.json({
    ok: true,
    delivered: delivery.delivered,
    developmentCode: isDev ? delivery.developmentCode : undefined
  });
}
