// Services page sections

function ServicesHero() {
  return (
    <section style={{ padding: "80px 0 64px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 60, right: -150, width: 380, height: 380, borderRadius: "50%",
        background: "radial-gradient(circle, var(--accent-soft) 0%, transparent 65%)", opacity: 0.55, pointerEvents: "none" }} />
      <div className="container split-14-1" style={{ gap: 56, alignItems: "end" }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 20 }}>What we do</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(44px, 6.5vw, 88px)", letterSpacing: "-0.03em", lineHeight: 1, color: "var(--brand-slate-deep)", margin: 0 }}>
            Three pillars.<br />
            <span style={{ color: "var(--accent)" }}>One operating system.</span>
          </h1>
        </div>
        <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--brand-slate)", maxWidth: 460 }}>
          Our work spans training, integration, and policy — three pillars that only work together. We rarely do one without the others.
        </p>
      </div>
    </section>
  );
}

function ServiceDeep({ id, num, icon, title, lead, deliverables, outcomes, timeline, accent = false }) {
  return (
    <section id={id} style={{
      padding: "96px 0", borderTop: "1px solid var(--brand-slate-100)",
      background: accent ? "var(--surface-tinted)" : "transparent"
    }}>
      <div className="container">
        <div className="split-1-14" style={{ gap: 64, alignItems: "start" }}>
          <div className="sticky-col" style={{ position: "sticky", top: 100 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--accent-deep)", marginBottom: 24 }}>{num}</div>
            <div style={{ width: 64, height: 64, borderRadius: 16, background: "var(--accent)",
              display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, boxShadow: "var(--shadow-accent)" }}>
              <i data-lucide={icon} style={{ width: 28, height: 28, color: "#fff" }}></i>
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(34px, 4.5vw, 52px)", letterSpacing: "-0.025em", lineHeight: 1.05, color: "var(--brand-slate-deep)", margin: 0 }}>
              {title}
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--brand-slate)", marginTop: 20 }}>
              {lead}
            </p>
            <div style={{ marginTop: 28, display: "inline-flex", alignItems: "center", gap: 10, padding: "10px 16px", borderRadius: 9999, background: "#fff", border: "1px solid var(--brand-slate-100)" }}>
              <i data-lucide="clock" style={{ width: 14, height: 14, color: "var(--brand-slate-300)" }}></i>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--brand-slate)" }}>{timeline}</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div className="card" style={{ padding: 32 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--brand-slate-300)", marginBottom: 18 }}>What you get</div>
              <ul className="deliverables-grid" style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {deliverables.map((d, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 15, color: "var(--brand-slate-deep)", lineHeight: 1.5 }}>
                    <i data-lucide="check" style={{ width: 16, height: 16, color: "var(--accent)", marginTop: 4, flexShrink: 0 }}></i>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: "var(--surface-deep)", color: "var(--fg-on-dark)", padding: 32, borderRadius: 16 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 18 }}>Outcomes we measure</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {outcomes.map((o, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: 14, paddingBottom: 14, borderBottom: i < outcomes.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28, color: "#fff", letterSpacing: "-0.02em", minWidth: 80 }}>{o.k}</span>
                    <span style={{ fontSize: 14, color: "rgba(241,243,243,0.7)", lineHeight: 1.5 }}>{o.v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrainingDeep() {
  const tracks = [
    { role: "Executives & leadership", duration: "4 weeks", icon: "compass", lessons: 8, learners: "C-suite, founders" },
    { role: "Managers & operators", duration: "6 weeks", icon: "users", lessons: 12, learners: "VP, director, lead" },
    { role: "Designers & developers", duration: "8 weeks", icon: "wand-sparkles", lessons: 16, learners: "IC builders" },
    { role: "Marketing & social", duration: "4 weeks", icon: "megaphone", lessons: 8, learners: "Content & brand teams" },
    { role: "HR, L&D, people ops", duration: "5 weeks", icon: "heart-handshake", lessons: 10, learners: "People functions" },
    { role: "Finance, legal, ops", duration: "6 weeks", icon: "scale", lessons: 12, learners: "Risk-aware functions" },
  ];
  return (
    <section id="training-tracks" style={{ padding: "96px 0", background: "var(--surface-sunken)" }}>
      <div className="container">
        <div style={{ marginBottom: 48 }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>All training tracks</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.025em", color: "var(--brand-slate-deep)", margin: 0 }}>
            Pick the tracks that fit your org.
          </h2>
        </div>
        <div className="g3" style={{ gap: 16 }}>
          {tracks.map((t, i) => (
            <div key={i} className="card" style={{ display: "flex", flexDirection: "column", gap: 12, padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--accent-whisper)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i data-lucide={t.icon} style={{ width: 18, height: 18, color: "var(--accent-deep)" }}></i>
                </div>
                <span className="pill" style={{ fontSize: 11 }}>{t.duration}</span>
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--brand-slate-deep)", letterSpacing: "-0.01em" }}>{t.role}</div>
              <div style={{ display: "flex", gap: 16, fontSize: 13, color: "var(--brand-slate-300)", marginTop: "auto" }}>
                <span>{t.lessons} sessions</span>
                <span style={{ width: 1, background: "var(--brand-slate-100)" }} />
                <span>{t.learners}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EngagementModels() {
  const models = [
    { name: "Sprint", duration: "4 weeks", price: "Fixed-scope", best: "One workflow, one cohort, one decision.", points: ["Discovery + roadmap", "Single training cohort or pilot", "Final readout"] },
    { name: "Embed", duration: "12 weeks", price: "Most popular", best: "Full pillar rollout — typically training + integration + policy.", points: ["Multi-team rollout", "Cross-functional working group", "Measurement + handoff"], featured: true },
    { name: "Retainer", duration: "Quarterly", price: "Ongoing", best: "Long-term advisory after a successful Embed.", points: ["Office hours + reviews", "Quarterly strategy refresh", "On-call for major decisions"] },
  ];
  return (
    <section style={{ padding: "96px 0" }}>
      <div className="container">
        <div style={{ marginBottom: 48, textAlign: "center", maxWidth: 720, margin: "0 auto 48px" }}>
          <div className="eyebrow" style={{ justifyContent: "center", marginBottom: 14 }}>Engagement models</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.025em", color: "var(--brand-slate-deep)", margin: 0 }}>
            Three ways to work with us.
          </h2>
        </div>
        <div className="g3" style={{ gap: 20 }}>
          {models.map((m, i) => (
            <div key={i} className="card" style={{
              padding: 32,
              background: m.featured ? "var(--surface-deep)" : "#fff",
              color: m.featured ? "#fff" : "inherit",
              borderColor: m.featured ? "transparent" : "var(--brand-slate-100)",
              position: "relative", overflow: "hidden"
            }}>
              {m.featured && (
                <div style={{ position: "absolute", top: 16, right: 16, padding: "4px 10px", borderRadius: 9999, background: "var(--accent)", color: "#fff", fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Most popular</div>
              )}
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: m.featured ? "var(--accent)" : "var(--brand-slate-300)", marginBottom: 8 }}>{m.duration}</div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32, letterSpacing: "-0.02em", color: m.featured ? "#fff" : "var(--brand-slate-deep)", marginBottom: 8 }}>{m.name}</div>
              <div style={{ fontSize: 14, color: m.featured ? "rgba(255,255,255,0.7)" : "var(--brand-slate-300)", marginBottom: 20 }}>{m.price}</div>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: m.featured ? "rgba(241,243,243,0.85)" : "var(--brand-slate)", margin: 0, paddingBottom: 20, borderBottom: m.featured ? "1px solid rgba(255,255,255,0.1)" : "1px solid var(--brand-slate-100)" }}>{m.best}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0", display: "flex", flexDirection: "column", gap: 12 }}>
                {m.points.map((p, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: m.featured ? "rgba(241,243,243,0.85)" : "var(--brand-slate)" }}>
                    <i data-lucide="check" style={{ width: 14, height: 14, color: "var(--accent)", marginTop: 4, flexShrink: 0 }}></i>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ServicesHero, ServiceDeep, TrainingDeep, EngagementModels });
