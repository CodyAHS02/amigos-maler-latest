export async function sendVerificationEmail({ email, code }) {
  if (process.env.RESEND_API_KEY && process.env.OFFER_EMAIL_FROM) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: process.env.OFFER_EMAIL_FROM,
        to: email,
        subject: "Your AMIGOS MALER verification code",
        html: `<p>Your AMIGOS MALER verification code is <strong>${code}</strong>.</p><p>This code expires in 15 minutes.</p>`
      })
    });

    if (!response.ok) {
      throw new Error("Verification e-mail could not be sent.");
    }

    return { delivered: true };
  }

  console.log(`[AMIGOS offer calculator] Verification code for ${email}: ${code}`);

  return {
    delivered: false,
    developmentCode: process.env.NODE_ENV === "production" ? undefined : code
  };
}

export async function sendProjectEnquiryEmail({ to, name, email, phone, projectType, message }) {
  const target = to || process.env.CONTACT_NOTIFICATION_EMAIL || process.env.ADMIN_EMAIL;

  if (!target || !process.env.RESEND_API_KEY || !process.env.OFFER_EMAIL_FROM) {
    return { delivered: false, skipped: true };
  }

  const safe = (value) => String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: process.env.OFFER_EMAIL_FROM,
      to: target,
      reply_to: email,
      subject: `New AMIGOS project enquiry: ${projectType}`,
      html: `
        <h2>New project enquiry</h2>
        <p><strong>Name:</strong> ${safe(name)}</p>
        <p><strong>Email:</strong> ${safe(email)}</p>
        <p><strong>Phone:</strong> ${safe(phone || "Not provided")}</p>
        <p><strong>Project type:</strong> ${safe(projectType)}</p>
        <pre style="white-space:pre-wrap;font-family:Arial,sans-serif">${safe(message)}</pre>
      `
    })
  });

  if (!response.ok) {
    throw new Error("Project enquiry e-mail could not be sent.");
  }

  return { delivered: true };
}
