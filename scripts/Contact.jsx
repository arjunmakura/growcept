// Contact page

function ContactPage() {
  const [form, setForm] = React.useState({ name: "", email: "", company: "", role: "", scope: [], timeline: "", message: "" });
  const [sent, setSent] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [submitting, setSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState(null);
  const update = (k, v) => { setForm(f => ({ ...f, [k]: v })); setErrors(e => ({ ...e, [k]: undefined })); };
  const toggleScope = s => setForm(f => ({ ...f, scope: f.scope.includes(s) ? f.scope.filter(x => x !== s) : [...f.scope, s] }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Project brief is required";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Server error");
      setSent(true);
    } catch {
      setSubmitError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section style={{ padding: "80px 0 120px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 100, right: -200, width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, var(--accent-soft) 0%, transparent 65%)", opacity: 0.5, pointerEvents: "none" }} />
      <div className="container split-1-13" style={{ gap: 64, position: "relative" }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 20 }}>Contact</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(40px, 5.5vw, 72px)", letterSpacing: "-0.03em", lineHeight: 1, color: "var(--brand-slate-deep)", margin: 0 }}>
            Tell us about<br /><span style={{ color: "var(--accent)" }}>your project.</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--brand-slate)", marginTop: 24, maxWidth: 420 }}>
            One short brief. We read every one and respond personally — usually within 48 hours.
          </p>
          <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 20 }}>
            <ContactRow icon="mail" label="Email" value="chandangoopta@gmail.com" href="mailto:chandangoopta@gmail.com" />
            <ContactRow icon="clock" label="Response time" value="Within 48 hours" />
            <ContactRow icon="calendar-check" label="Availability" value="Taking on Q3 engagements" />
          </div>
          <div style={{ marginTop: 48, padding: 24, borderRadius: 16, background: "var(--surface-sunken)", border: "1px solid var(--brand-slate-100)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: "var(--brand-slate-deep)", marginBottom: 8 }}>Not sure if we're a fit?</div>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--brand-slate)", margin: 0 }}>
              Send a note anyway. If we're not the right call we'll tell you, and usually we'll know someone who is.
            </p>
          </div>
        </div>

        <div className="card form-card" style={{ padding: 40 }}>
          {!sent ? (
            <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div className="g2" style={{ gap: 16 }}>
                <Field label="Your name" required error={errors.name}>
                  <input value={form.name} onChange={e => update("name", e.target.value)} placeholder="Riya M." style={inputStyle(!!errors.name)} />
                </Field>
                <Field label="Email" required error={errors.email}>
                  <input type="email" value={form.email} onChange={e => update("email", e.target.value)} placeholder="you@company.com" style={inputStyle(!!errors.email)} />
                </Field>
              </div>
              <div className="g2" style={{ gap: 16 }}>
                <Field label="Company">
                  <input value={form.company} onChange={e => update("company", e.target.value)} placeholder="Acme Corp." style={inputStyle()} />
                </Field>
                <Field label="Your role">
                  <input value={form.role} onChange={e => update("role", e.target.value)} placeholder="VP Operations" style={inputStyle()} />
                </Field>
              </div>
              <Field label="What can we help with?" hint="Pick any that apply.">
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {["AI training", "Integration", "Policy & governance", "Workshops", "Advisory", "Not sure yet"].map(s => (
                    <button type="button" key={s} onClick={() => toggleScope(s)} style={{
                      padding: "8px 14px", borderRadius: 9999, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13,
                      border: form.scope.includes(s) ? "1.5px solid var(--accent)" : "1.5px solid var(--brand-slate-100)",
                      background: form.scope.includes(s) ? "var(--accent-whisper)" : "#fff",
                      color: form.scope.includes(s) ? "var(--accent-deep)" : "var(--brand-slate-deep)",
                      cursor: "pointer", transition: "all 140ms var(--ease-out)"
                    }}>{s}</button>
                  ))}
                </div>
              </Field>
              <Field label="Timeline">
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {["This month", "Next quarter", "Just exploring"].map(t => (
                    <button type="button" key={t} onClick={() => update("timeline", t)} style={{
                      flex: "1 1 140px", padding: "10px 14px", borderRadius: 12, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13,
                      border: form.timeline === t ? "1.5px solid var(--accent)" : "1.5px solid var(--brand-slate-100)",
                      background: form.timeline === t ? "var(--accent-whisper)" : "#fff",
                      color: form.timeline === t ? "var(--accent-deep)" : "var(--brand-slate-deep)",
                      cursor: "pointer", transition: "all 140ms var(--ease-out)"
                    }}>{t}</button>
                  ))}
                </div>
              </Field>
              <Field label="Project brief" required error={errors.message} hint="A short paragraph is fine. What problem are you trying to solve?">
                <textarea value={form.message} onChange={e => update("message", e.target.value)} rows="5" placeholder="We have ~200 ops staff and want to roll out AI for ticket triage and internal docs. Looking for training and integration help…" style={{ ...inputStyle(!!errors.message), resize: "vertical", fontFamily: "var(--font-body)" }} />
              </Field>
              <button type="submit" disabled={submitting} className="btn btn-primary" style={{ marginTop: 12, justifyContent: "center", padding: "16px 28px", fontSize: 15, opacity: submitting ? 0.7 : 1, cursor: submitting ? "not-allowed" : "pointer" }}>
                {submitting ? "Sending…" : <>{" Send brief "}<i data-lucide="send" style={{ width: 16, height: 16 }}></i></>}
              </button>
              {submitError && (
                <p style={{ fontSize: 13, color: "var(--error, #e53e3e)", margin: 0, textAlign: "center" }}>{submitError}</p>
              )}
              <p style={{ fontSize: 12, color: "var(--brand-slate-300)", margin: 0, textAlign: "center" }}>
                We'll never share your details. <a href="#">Privacy policy</a>.
              </p>
            </form>
          ) : (
            <div style={{ textAlign: "center", padding: "48px 0" }}>
              <div style={{ width: 72, height: 72, borderRadius: "50%", background: "var(--success-soft)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                <i data-lucide="check" style={{ color: "var(--success)", width: 36, height: 36 }}></i>
              </div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32, letterSpacing: "-0.02em", color: "var(--brand-slate-deep)", margin: 0 }}>Got it.</h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--brand-slate)", marginTop: 12, maxWidth: 380, margin: "12px auto 0" }}>
                Thanks {form.name || "for reaching out"}. We'll be in touch within 48 hours from chandangoopta@gmail.com.
              </p>
              <button onClick={() => { setSent(false); setForm({ name: "", email: "", company: "", role: "", scope: [], timeline: "", message: "" }); setErrors({}); }} className="btn btn-secondary" style={{ marginTop: 24 }}>
                Send another
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const inputStyle = (hasError = false) => ({
  width: "100%", boxSizing: "border-box", fontFamily: "var(--font-body)", fontSize: 15,
  padding: "12px 14px", background: "#fff", color: "var(--brand-slate-deep)",
  border: hasError ? "1.5px solid var(--error, #e53e3e)" : "1px solid var(--brand-slate-100)",
  borderRadius: 12, outline: "none",
  transition: "all 140ms var(--ease-out)"
});

function Field({ label, hint, required, error, children }) {
  return (
    <label style={{ display: "block" }}>
      <span style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, color: "var(--brand-slate-deep)", marginBottom: 8 }}>
        {label} {required && <span style={{ color: "var(--accent)" }}>*</span>}
      </span>
      {children}
      {error
        ? <span style={{ display: "block", fontSize: 12, color: "var(--error, #e53e3e)", marginTop: 6 }}>{error}</span>
        : hint && <span style={{ display: "block", fontSize: 12, color: "var(--brand-slate-300)", marginTop: 6 }}>{hint}</span>
      }
    </label>
  );
}

function ContactRow({ icon, label, value, href }) {
  const Inner = (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--accent-whisper)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <i data-lucide={icon} style={{ width: 18, height: 18, color: "var(--accent-deep)" }}></i>
      </div>
      <div>
        <div style={{ fontSize: 12, color: "var(--brand-slate-300)", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "var(--font-display)", fontWeight: 700 }}>{label}</div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--brand-slate-deep)", marginTop: 2 }}>{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} style={{ textDecoration: "none" }}>{Inner}</a> : Inner;
}

Object.assign(window, { ContactPage });