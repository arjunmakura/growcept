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
  const companyText = company || "—";
  const roleText = role || "—";

  // ── Admin notification ──────────────────────────────────────────────────────
  await transporter.sendMail({
    from: `"Growcept Contact" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: `New brief from ${name}${company ? ` · ${company}` : ""}`,
    html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F1F3F3;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#F1F3F3;padding:40px 16px">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(44,54,56,0.10)">

      <!-- Header -->
      <tr>
        <td style="background:linear-gradient(135deg,#2FB7FF 0%,#11A1DE 100%);padding:36px 40px">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <span style="font-family:'Helvetica Neue',Helvetica,sans-serif;font-weight:800;font-size:22px;color:#ffffff;letter-spacing:-0.02em">GROWCEPT</span>
              </td>
              <td align="right">
                <span style="display:inline-block;background:rgba(255,255,255,0.2);color:#ffffff;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;padding:5px 12px;border-radius:20px">New Brief</span>
              </td>
            </tr>
            <tr>
              <td colspan="2" style="padding-top:12px">
                <p style="margin:0;color:rgba(255,255,255,0.85);font-size:15px;line-height:1.5">A new project brief just landed.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Sender card -->
      <tr>
        <td style="padding:32px 40px 0">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#F7F9FA;border-radius:12px;border:1px solid #DDE1E2">
            <tr>
              <td style="padding:20px 24px">
                <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#8A9498">From</p>
                <p style="margin:0;font-size:20px;font-weight:800;color:#2C3638;letter-spacing:-0.02em">${name}</p>
                ${company ? `<p style="margin:4px 0 0;font-size:14px;color:#505D5F">${roleText} · ${companyText}</p>` : ""}
                <p style="margin:8px 0 0">
                  <a href="mailto:${email}" style="color:#11A1DE;font-size:14px;font-weight:600;text-decoration:none">${email}</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Details grid -->
      <tr>
        <td style="padding:24px 40px 0">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td width="50%" style="padding-right:8px;vertical-align:top">
                <table width="100%" cellpadding="0" cellspacing="0" style="background:#F7F9FA;border-radius:10px;border:1px solid #DDE1E2">
                  <tr><td style="padding:16px 18px">
                    <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#8A9498">Scope</p>
                    <p style="margin:0;font-size:14px;font-weight:600;color:#2C3638;line-height:1.5">${scopeText}</p>
                  </td></tr>
                </table>
              </td>
              <td width="50%" style="padding-left:8px;vertical-align:top">
                <table width="100%" cellpadding="0" cellspacing="0" style="background:#F7F9FA;border-radius:10px;border:1px solid #DDE1E2">
                  <tr><td style="padding:16px 18px">
                    <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#8A9498">Timeline</p>
                    <p style="margin:0;font-size:14px;font-weight:600;color:#2C3638">${timelineText}</p>
                  </td></tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Brief -->
      <tr>
        <td style="padding:24px 40px 0">
          <p style="margin:0 0 10px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#8A9498">Project brief</p>
          <div style="background:#F7F9FA;border-radius:12px;border:1px solid #DDE1E2;padding:20px 24px">
            <p style="margin:0;font-size:15px;color:#505D5F;line-height:1.7;white-space:pre-wrap">${message}</p>
          </div>
        </td>
      </tr>

      <!-- CTA -->
      <tr>
        <td style="padding:32px 40px">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td style="border-radius:10px;background:linear-gradient(135deg,#2FB7FF 0%,#11A1DE 100%)">
                <a href="mailto:${email}" style="display:inline-block;padding:13px 24px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;letter-spacing:-0.01em">Reply to ${name} →</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#F7F9FA;border-top:1px solid #DDE1E2;padding:20px 40px">
          <p style="margin:0;font-size:12px;color:#8A9498;line-height:1.6">
            Growcept · Grow. Succeed. Scale.<br>
            This notification was sent to you because you are the site administrator.
          </p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>`,
  });

  // ── User confirmation ────────────────────────────────────────────────────────
  await transporter.sendMail({
    from: `"Growcept" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: `Got your brief, ${name.split(" ")[0]} — we'll be in touch`,
    html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F1F3F3;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#F1F3F3;padding:40px 16px">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(44,54,56,0.10)">

      <!-- Header -->
      <tr>
        <td style="background:linear-gradient(135deg,#2FB7FF 0%,#11A1DE 100%);padding:40px 40px 36px;text-align:center">
          <span style="font-family:'Helvetica Neue',Helvetica,sans-serif;font-weight:800;font-size:24px;color:#ffffff;letter-spacing:-0.02em">GROWCEPT</span>
          <p style="margin:16px 0 0;color:rgba(255,255,255,0.9);font-size:16px;line-height:1.5">We've got your brief.</p>
        </td>
      </tr>

      <!-- Check icon row -->
      <tr>
        <td align="center" style="padding:0">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td style="background:linear-gradient(135deg,#2FB7FF 0%,#11A1DE 100%);width:64px;height:64px;border-radius:50%;text-align:center;vertical-align:middle;margin-top:-32px">
                <!--[if !mso]><!-->
                <div style="width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,#2FB7FF 0%,#11A1DE 100%);display:flex;align-items:center;justify-content:center;margin-top:-32px;border:4px solid #ffffff">
                  <span style="font-size:28px;color:#ffffff;line-height:1">✓</span>
                </div>
                <!--<![endif]-->
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding:36px 40px 0;text-align:center">
          <h1 style="margin:0 0 16px;font-family:'Helvetica Neue',Helvetica,sans-serif;font-weight:800;font-size:28px;letter-spacing:-0.02em;color:#2C3638;line-height:1.1">
            Hi ${name.split(" ")[0]}, you're in the queue.
          </h1>
          <p style="margin:0;font-size:16px;color:#505D5F;line-height:1.7;max-width:460px;margin:0 auto">
            Thanks for reaching out. We've received your brief and one of our team will respond to you personally — usually within 48 hours.
          </p>
        </td>
      </tr>

      <!-- Divider -->
      <tr><td style="padding:32px 40px 0"><hr style="border:none;border-top:1px solid #DDE1E2;margin:0"></td></tr>

      <!-- Brief recap -->
      <tr>
        <td style="padding:28px 40px 0">
          <p style="margin:0 0 12px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#8A9498">Your brief</p>
          <div style="background:#F7F9FA;border-radius:12px;border-left:3px solid #2FB7FF;padding:18px 20px">
            <p style="margin:0;font-size:14px;color:#505D5F;line-height:1.7;white-space:pre-wrap">${message}</p>
          </div>
        </td>
      </tr>

      <!-- What happens next -->
      <tr>
        <td style="padding:28px 40px 0">
          <p style="margin:0 0 16px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#8A9498">What happens next</p>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:0 0 14px">
                <table cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="width:28px;height:28px;border-radius:50%;background:#EAF7FE;text-align:center;vertical-align:middle;font-size:12px;font-weight:700;color:#11A1DE">1</td>
                    <td style="padding-left:12px;font-size:14px;color:#505D5F;line-height:1.5">We review your brief and assess the fit.</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:0 0 14px">
                <table cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="width:28px;height:28px;border-radius:50%;background:#EAF7FE;text-align:center;vertical-align:middle;font-size:12px;font-weight:700;color:#11A1DE">2</td>
                    <td style="padding-left:12px;font-size:14px;color:#505D5F;line-height:1.5">You'll hear back personally — not a template — within 48 hours.</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="width:28px;height:28px;border-radius:50%;background:#EAF7FE;text-align:center;vertical-align:middle;font-size:12px;font-weight:700;color:#11A1DE">3</td>
                    <td style="padding-left:12px;font-size:14px;color:#505D5F;line-height:1.5">If it's a match, we'll schedule a short discovery call.</td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- CTA -->
      <tr>
        <td style="padding:36px 40px;text-align:center">
          <p style="margin:0 0 20px;font-size:14px;color:#8A9498">While you wait, explore what we do:</p>
          <table cellpadding="0" cellspacing="0" align="center">
            <tr>
              <td style="border-radius:10px;background:linear-gradient(135deg,#2FB7FF 0%,#11A1DE 100%)">
                <a href="https://growcept.com/services.html" style="display:inline-block;padding:13px 28px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;letter-spacing:-0.01em">See our services →</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#F7F9FA;border-top:1px solid #DDE1E2;padding:24px 40px;text-align:center">
          <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:#2C3638">Growcept</p>
          <p style="margin:0;font-size:12px;color:#8A9498;line-height:1.6">
            Grow. Succeed. Scale.<br>
            You're receiving this because you submitted a brief at growcept.com.<br>
            Just reply to this email if you have anything to add.
          </p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>`,
  });

  return res.status(200).json({ ok: true });
};