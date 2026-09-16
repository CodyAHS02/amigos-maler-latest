import { NextResponse } from "next/server";
import { createConsultationRequest } from "@/lib/customerStore";
import { sendProjectEnquiryEmail } from "@/lib/offerCalculator/email";
import { SESSION_COOKIE, verifyCustomerSession } from "@/lib/session";
import { cleanText, validateConsultationInput } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request) {
  const formData = await request.formData();
  const validation = validateConsultationInput({
    name: formData.get("name") || formData.get("Name"),
    email: formData.get("email") || formData.get("Email"),
    projectType: formData.get("projectType") || formData.get("Project type"),
    message: formData.get("message") || formData.get("Message")
  });

  if (!validation.valid) {
    return NextResponse.json({ error: "Please fix the highlighted fields.", errors: validation.errors }, { status: 400 });
  }

  const session = await verifyCustomerSession(request.cookies.get(SESSION_COOKIE)?.value);
  const phone = cleanText(formData.get("phone") || formData.get("Phone"));
  let result;

  try {
    result = await createConsultationRequest({
      customerEmail: session?.email,
      ...validation.values,
      phone
    });

    try {
      await sendProjectEnquiryEmail({ ...validation.values, phone });
    } catch (emailError) {
      console.error("Consultation notification e-mail failed:", emailError);
    }
  } catch (error) {
    console.error("Consultation request failed:", error);
    return NextResponse.json({ error: "Unable to save your enquiry right now." }, { status: 500 });
  }

  return NextResponse.json({
    ok: true,
    message: "Your enquiry has been saved.",
    ...result
  });
}
