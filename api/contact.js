// POST /api/contact
// Sends an email via Resend when RESEND_API_KEY is set.
// If delivery is not configured, returns a clear error instead of
// pretending the message was sent.

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const { name, email, subject, message, website } = req.body ?? {};

  // Honeypot — bots fill the hidden `website` field
  if (website) {
    return res.status(200).json({ ok: true });
  }

  // Basic validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ ok: false, error: "Name, email and message are required." });
  }

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ ok: false, error: "Invalid email address." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "rkholofelo@gmail.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "noreply@kholofelorababalela.vercel.app";

  if (!apiKey) {
    return res.status(503).json({
      ok: false,
      error: "Contact delivery is not configured yet. Please email rkholofelo@gmail.com directly.",
    });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `Portfolio contact: ${subject || `Message from ${name}`}`,
        html: `
          <h2>New portfolio contact</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || "(none)"}</p>
          <hr/>
          <p>${message.replace(/\n/g, "<br/>")}</p>
        `,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("[contact] Resend error:", err);
      return res.status(500).json({ ok: false, error: "Failed to send message. Please try again." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[contact] fetch error:", err);
    return res.status(500).json({ ok: false, error: "Server error. Please try again." });
  }
}
