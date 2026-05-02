const nodemailer = require("nodemailer");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, company, role, scope, timeline, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const scopeText = Array.isArray(scope) && scope.length ? scope.join(", ") : "Not specified";
  const timelineText = timeline || "Not specified";
  const companyText = company || "Not provided";
  const roleText = role || "Not provided";

  // Notification to admin
  await transporter.sendMail({
    from: `"Growcept Contact" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: `New brief from ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a202c">
        <h2 style="margin-bottom:4px">New contact brief</h2>
        <p style="color:#718096;margin-top:0">Submitted via growcept.com</p>
        <table style="width:100%;border-collapse:collapse;margin-top:24px">
          <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:600;width:140px">Name</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0">${name}</td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:600">Email</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:600">Company</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0">${companyText}</td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:600">Role</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0">${roleText}</td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:600">Scope</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0">${scopeText}</td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:600">Timeline</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0">${timelineText}</td></tr>
        </table>
        <div style="margin-top:24px">
          <div style="font-weight:600;margin-bottom:8px">Project brief</div>
          <div style="background:#f7fafc;border-radius:8px;padding:16px;line-height:1.6;white-space:pre-wrap">${message}</div>
        </div>
      </div>
    `,
  });

  // Confirmation to the submitter
  await transporter.sendMail({
    from: `"Growcept" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: `We got your brief, ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a202c">
        <h2 style="margin-bottom:4px">We got it.</h2>
        <p style="color:#718096;margin-top:0;line-height:1.6">
          Hi ${name}, thanks for reaching out. We've received your brief and will be in touch personally within 48 hours.
        </p>
        <div style="margin-top:24px;background:#f7fafc;border-radius:8px;padding:16px">
          <div style="font-weight:600;margin-bottom:8px;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;color:#718096">Your brief</div>
          <div style="line-height:1.6;white-space:pre-wrap">${message}</div>
        </div>
        <p style="margin-top:24px;color:#718096;font-size:14px;line-height:1.6">
          If you have anything to add, just reply to this email.<br/>
          — The Growcept team
        </p>
      </div>
    `,
  });

  return res.status(200).json({ ok: true });
};
