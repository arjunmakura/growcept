// Home page sections — Hero, Trust, Services, Training, Methodology, Sectors, Numbers, Quote, FAQ, CTA

function Hero({ heroVariant = "diagram", headline = "default", animation = "stacked" }) {
  const headlines = {
    default: { eye: "AI consulting · Train · Integrate · Govern", title: ["Make your team", "AI-native."], sub: "We help companies train people, integrate AI into operations, and write the policies that hold it together — quietly, safely, and on your timeline." },
    poetic: { eye: "Boutique AI consultancy", title: ["Grow with AI.", "On purpose."], sub: "Most teams aren't behind on AI — they're behind on the operating muscle to use it well. That's the gap we close." },
    direct: { eye: "AI training · integration · policy", title: ["Less hype.", "More throughput."], sub: "We work with leadership, IT, and HR to roll AI out across your organization — with measurable adoption, real safeguards, and zero theatre." },
  };
  const h = headlines[headline] || headlines.default;
  return (
    <section className="hero" style={{ position: "relative", overflow: "hidden", paddingTop: 80, paddingBottom: 120 }}>
      {/* Background grain */}
      <div style={{ position: "absolute", top: -200, right: -200, width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, var(--accent-soft) 0%, transparent 60%)", opacity: 0.5, pointerEvents: "none" }} />
      <div className={`container ${heroVariant === "centered" ? "" : "split-asym"}`} style={{ display: "grid", gridTemplateColumns: heroVariant === "centered" ? "1fr" : undefined, gap: 60, alignItems: "center" }}>
        <div style={{ textAlign: heroVariant === "centered" ? "center" : "left", maxWidth: heroVariant === "centered" ? 880 : "none", margin: heroVariant === "centered" ? "0 auto" : "0" }}>
          <div className="eyebrow" style={{ marginBottom: 24 }}>{h.eye}</div>
          <h1 className="t-display-xl" style={{ marginBottom: 24 }}>
            {h.title[0]}<br />
            <span style={{ color: "var(--accent)", display: "inline-block", position: "relative" }}>
              {h.title[1]}
              <UnderlineSquiggle />
            </span>
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 20, lineHeight: 1.6, color: "var(--brand-slate)", maxWidth: 560, margin: heroVariant === "centered" ? "0 auto" : "0" }}>
            {h.sub}
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 36, justifyContent: heroVariant === "centered" ? "center" : "flex-start", flexWrap: "wrap" }}>
            <a href="contact.html" className="btn btn-primary">
              Start a conversation
              <i data-lucide="arrow-up-right" style={{ width: 16, height: 16 }}></i>
            </a>
            <a href="services.html" className="btn btn-secondary">
              Explore our services
            </a>
          </div>
          <div style={{ marginTop: 56, display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--success)", boxShadow: "0 0 0 4px rgba(47,179,122,0.18)" }}></span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--brand-slate)" }}>Taking on Q3 engagements</span>
            </div>
            <span style={{ width: 1, height: 16, background: "var(--brand-slate-100)" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--brand-slate-300)" }}>Engagements from 4 weeks</span>
          </div>
        </div>
        {heroVariant === "diagram" && (
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <HeroDataShow variant={animation} />
          </div>
        )}
      </div>
    </section>
  );
}

function UnderlineSquiggle() {
  return (
    <svg viewBox="0 0 280 14" style={{ position: "absolute", left: 0, right: 0, bottom: -6, width: "100%", height: 12 }}>
      <path d="M 4 8 Q 35 2, 70 7 T 140 7 T 210 7 T 276 7" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
    </svg>
  );
}

function TrustStrip() {
  const logos = ["NORTHGATE", "COREVAULT", "Atlas Bio", "FIDELITY ARC", "Penrose", "Helio Labs", "BLUE SHIFT", "Mercato"];
  return (
    <section className="trust-strip" style={{ padding: "32px 0 56px", borderTop: "1px solid var(--brand-slate-100)", borderBottom: "1px solid var(--brand-slate-100)", background: "var(--surface-canvas)" }}>
      <div className="container" style={{ display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
        <div className="trust-strip-eyebrow" style={{ flex: "0 0 auto", maxWidth: 220 }}>
          <div className="eyebrow">Trusted by leaders at</div>
          <div style={{ fontSize: 13, color: "var(--brand-slate-300)", marginTop: 6, fontFamily: "var(--font-mono)" }}>Logos placeholder</div>
        </div>
        <div className="marquee" style={{ flex: 1 }}>
          <div className="marquee-track">
            {[...logos, ...logos].map((l, i) => (
              <span key={i} style={{
                fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, letterSpacing: "0.04em",
                color: "var(--brand-slate-300)", whiteSpace: "nowrap"
              }}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: "graduation-cap",
      title: "AI training",
      blurb: "Role-based programs that turn execs, managers, designers, developers, and ops teams into confident AI operators.",
      bullets: ["Cohort-based, 4–12 weeks", "Live workshops + async lab", "Outcomes tied to your KPIs"],
      featured: true,
      href: "services.html#training",
    },
    {
      icon: "git-branch",
      title: "Integration & operations",
      blurb: "We embed AI into the workflows that matter — support, sales, ops, marketing — and measure where it actually moves the needle.",
      bullets: ["Workflow mapping & ROI sizing", "Build, buy, or hybrid decisions", "Hands-on rollout with your team"],
      href: "services.html#integration",
    },
    {
      icon: "shield-check",
      title: "Policy & governance",
      blurb: "Company-wide AI guidelines, acceptable-use policies, and risk frameworks that engineers respect and lawyers approve.",
      bullets: ["AI use policy + employee charter", "Risk register + review cadence", "Regulator-ready documentation"],
      href: "services.html#policy",
    },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="split" style={{ gap: 48, alignItems: "end", marginBottom: 56 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Three pillars</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(36px, 4.5vw, 56px)", letterSpacing: "-0.025em", lineHeight: 1.05, color: "var(--brand-slate-deep)", margin: 0 }}>
              We do three things,<br />
              <span style={{ color: "var(--accent)" }}>thoroughly.</span>
            </h2>
          </div>
          <p style={{ fontSize: 18, color: "var(--brand-slate)", lineHeight: 1.6, maxWidth: 480, justifySelf: "end" }}>
            Most consultancies sell a tool, a deck, or a buzzword. We sell durable change — measured in adoption, throughput, and risk reduced.
          </p>
        </div>
        <div className="g3" style={{ gap: 24 }}>
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, blurb, bullets, featured, href }) {
  return (
    <a href={href} className="card" style={{
      display: "flex", flexDirection: "column", gap: 16,
      background: featured ? "var(--surface-deep)" : "#fff",
      color: featured ? "var(--fg-on-dark)" : "inherit",
      borderColor: featured ? "transparent" : "var(--brand-slate-100)",
      textDecoration: "none", height: "100%", padding: 32, position: "relative", overflow: "hidden"
    }}>
      {featured && (
        <div style={{ position: "absolute", top: -80, right: -80, width: 220, height: 220, borderRadius: "50%",
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)", opacity: 0.18 }} />
      )}
      <div style={{
        width: 48, height: 48, borderRadius: 12,
        background: featured ? "rgba(255,255,255,0.08)" : "var(--accent-whisper)",
        display: "flex", alignItems: "center", justifyContent: "center"
      }}>
        <i data-lucide={icon} style={{ width: 22, height: 22, color: featured ? "var(--accent)" : "var(--accent-deep)" }}></i>
      </div>
      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, letterSpacing: "-0.02em", color: featured ? "#fff" : "var(--brand-slate-deep)", margin: 0 }}>{title}</h3>
      <p style={{ fontSize: 15, lineHeight: 1.65, color: featured ? "rgba(241,243,243,0.78)" : "var(--brand-slate)", margin: 0 }}>{blurb}</p>
      <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0", display: "flex", flexDirection: "column", gap: 10 }}>
        {bullets.map((b, i) => (
          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: featured ? "rgba(241,243,243,0.85)" : "var(--brand-slate)" }}>
            <i data-lucide="check" style={{ width: 14, height: 14, color: "var(--accent)", marginTop: 4, flexShrink: 0 }}></i>
            {b}
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "auto", paddingTop: 20, display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: featured ? "var(--accent)" : "var(--accent-deep)" }}>
        Learn more <i data-lucide="arrow-right" style={{ width: 14, height: 14 }}></i>
      </div>
    </a>
  );
}

function TrainingSection() {
  const tracks = [
    { role: "Executives & leadership", icon: "compass", duration: "4 weeks", outcomes: ["Frame AI strategy", "Brief the board", "Make build/buy calls"] },
    { role: "Managers & operators", icon: "users", duration: "6 weeks", outcomes: ["Redesign workflows", "Coach AI-using teams", "Measure adoption"] },
    { role: "Designers & developers", icon: "wand-sparkles", duration: "8 weeks", outcomes: ["Ship AI features safely", "Eval & guardrail patterns", "Prompt + agent design"] },
    { role: "Marketing, social, content", icon: "megaphone", duration: "4 weeks", outcomes: ["Brand-safe content ops", "Campaign automation", "AI editorial review"] },
    { role: "HR, L&D, people ops", icon: "heart-handshake", duration: "5 weeks", outcomes: ["Hiring with AI", "L&D refresh", "Internal AI rollout"] },
    { role: "Finance, legal, ops", icon: "scale", duration: "6 weeks", outcomes: ["Risk-aware automation", "Vendor due diligence", "Audit-ready records"] },
  ];
  return (
    <section className="section section-tinted" id="training">
      <div className="container">
        <div className="split" style={{ gap: 48, alignItems: "end", marginBottom: 56 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>AI-native, role by role</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(36px, 4.5vw, 56px)", letterSpacing: "-0.025em", lineHeight: 1.05, color: "var(--brand-slate-deep)", margin: 0 }}>
              Training programs<br />for the whole org.
            </h2>
          </div>
          <p style={{ fontSize: 18, color: "var(--brand-slate)", lineHeight: 1.6, maxWidth: 480, justifySelf: "end" }}>
            Generic prompt courses don't move the needle. Our tracks are scoped by role and outcome — and built to be embedded in your team's actual work.
          </p>
        </div>
        <div className="g3" style={{ gap: 20 }}>
          {tracks.map((t, i) => <TrackCard key={i} {...t} />)}
        </div>
        <div style={{ marginTop: 32, display: "flex", justifyContent: "center" }}>
          <a href="services.html#training" className="btn btn-secondary">
            See full curriculum <i data-lucide="arrow-right" style={{ width: 14, height: 14 }}></i>
          </a>
        </div>
      </div>
    </section>
  );
}

function TrackCard({ role, icon, duration, outcomes }) {
  return (
    <div className="card" style={{ display: "flex", flexDirection: "column", gap: 14, padding: 24 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--accent-whisper)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <i data-lucide={icon} style={{ width: 18, height: 18, color: "var(--accent-deep)" }}></i>
        </div>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--brand-slate-300)" }}>{duration}</span>
      </div>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, letterSpacing: "-0.01em", color: "var(--brand-slate-deep)" }}>{role}</div>
      <div style={{ fontSize: 12, color: "var(--brand-slate-300)", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "var(--font-display)", fontWeight: 700 }}>Outcomes</div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
        {outcomes.map((o, i) => (
          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 14, color: "var(--brand-slate)", lineHeight: 1.5 }}>
            <span style={{ marginTop: 8, width: 4, height: 4, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
            {o}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MethodologySection() {
  const stages = [
    { n: "01", title: "Listen", body: "Two weeks embedded with your team. We map workflows, talk to ICs, and find the friction nobody's logging." },
    { n: "02", title: "Frame", body: "We rank opportunities by adoption-likelihood × impact. You get a roadmap — not a slide deck." },
    { n: "03", title: "Pilot", body: "One workflow, one cohort, one quarter. We measure throughput, error rate, and team confidence before scaling." },
    { n: "04", title: "Embed", body: "Training, policy, and integration ship together. Your team owns it; we transfer knowledge and step back." },
  ];
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64, maxWidth: 720, margin: "0 auto 64px" }}>
          <div className="eyebrow" style={{ justifyContent: "center", marginBottom: 16 }}>How we work</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(36px, 4.5vw, 56px)", letterSpacing: "-0.025em", lineHeight: 1.05, color: "var(--brand-slate-deep)", margin: 0 }}>
            A four-step engagement,<br />tuned to your stage.
          </h2>
        </div>
        <div style={{ background: "#fff", borderRadius: 24, border: "1px solid var(--brand-slate-100)", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
          <div style={{ padding: "48px 48px 0" }}>
            <MaturityLadder />
          </div>
          <div className="g4 stage-grid" style={{ borderTop: "1px solid var(--brand-slate-100)" }}>
            {stages.map((s, i) => (
              <div key={i} style={{ padding: 28, borderRight: i < 3 ? "1px solid var(--brand-slate-100)" : "none" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent-deep)", marginBottom: 12 }}>{s.n}</div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, letterSpacing: "-0.01em", color: "var(--brand-slate-deep)", marginBottom: 8 }}>{s.title}</div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--brand-slate)", margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function NumbersSection() {
  const stats = [
    { value: "240+", label: "People trained", sub: "across 18 organizations" },
    { value: "12wk", label: "Avg. engagement", sub: "from kickoff to handoff" },
    { value: "34%", label: "Reported throughput lift", sub: "in piloted workflows" },
    { value: "1:1", label: "Senior-led", sub: "no offshored juniors" },
  ];
  return (
    <section className="section section-deep" style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, var(--accent) 0%, transparent 65%)", opacity: 0.18 }} />
      <div className="container" style={{ position: "relative" }}>
        <div className="split" style={{ gap: 48, alignItems: "end", marginBottom: 56 }}>
          <div>
            <div className="eyebrow" style={{ color: "var(--accent)", marginBottom: 16 }}>Receipts, not adjectives</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(36px, 4.5vw, 56px)", letterSpacing: "-0.025em", lineHeight: 1.05, color: "#fff", margin: 0 }}>
              We measure outcomes,<br />not hours.
            </h2>
          </div>
          <p style={{ fontSize: 18, color: "rgba(241,243,243,0.7)", lineHeight: 1.6, maxWidth: 480, justifySelf: "end" }}>
            Every engagement opens with a measurement plan. Here's what we've delivered for the teams who've trusted us.
          </p>
        </div>
        <div className="g4 stats-grid" style={{ gap: 32 }}>
          {stats.map((s, i) => (
            <div key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 24 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 64, letterSpacing: "-0.03em", lineHeight: 1, color: "#fff" }}>{s.value}</div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "var(--accent)", marginTop: 16 }}>{s.label}</div>
              <div style={{ fontSize: 13, color: "rgba(241,243,243,0.55)", marginTop: 4 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteSection() {
  return (
    <section className="section">
      <div className="container-narrow" style={{ textAlign: "center" }}>
        <svg viewBox="0 0 60 40" style={{ width: 56, height: 40, color: "var(--accent)", margin: "0 auto 24px", display: "block" }}>
          <path d="M 5 35 L 5 22 C 5 14, 9 8, 18 4 L 21 9 C 16 12, 13 16, 13 22 L 22 22 L 22 35 Z M 35 35 L 35 22 C 35 14, 39 8, 48 4 L 51 9 C 46 12, 43 16, 43 22 L 52 22 L 52 35 Z" fill="currentColor" opacity="0.2" />
        </svg>
        <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(24px, 3vw, 36px)", lineHeight: 1.35, letterSpacing: "-0.02em", color: "var(--brand-slate-deep)", margin: 0 }}>
          "Growcept didn't sell us a platform. They sat with our ops team for three weeks, found four AI moves nobody else would have spotted, and helped us ship them. Best AI money we've spent."
        </p>
        <div style={{ marginTop: 32, display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <div style={{ width: 52, height: 52, borderRadius: "50%", background: "linear-gradient(135deg, var(--accent), var(--accent-deep))", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18 }}>RM</div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--brand-slate-deep)" }}>Riya M.</div>
            <div style={{ fontSize: 13, color: "var(--brand-slate-300)" }}>VP Operations · Mid-market retailer (placeholder)</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    { q: "Do you work with non-technical teams?", a: "Yes — most of our work is with operations, marketing, HR, finance, and leadership. We translate AI into the language each function actually uses." },
    { q: "What size companies fit best?", a: "We're tuned for organizations between 50 and 5,000 people — large enough to need real policy, small enough to move quickly." },
    { q: "Do you build software for us?", a: "Sometimes. We're tool-agnostic and prefer integrating off-the-shelf where possible. When custom is the right call, we partner with senior engineers we trust." },
    { q: "How do you handle confidentiality and IP?", a: "Standard mutual NDA up front. All client materials are scoped, time-bound, and never used to train external models. We can work inside your VPN or supply our own secure environment." },
    { q: "What does an engagement cost?", a: "Engagements start at 4 weeks. We share a fixed-scope quote after a 30-minute discovery call — no surprises mid-project." },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section section-tinted">
      <div className="container split-1-14" style={{ gap: 64, alignItems: "start" }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Common questions</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.025em", lineHeight: 1.05, color: "var(--brand-slate-deep)", margin: 0 }}>
            Things founders<br />and ops leaders ask.
          </h2>
          <p style={{ fontSize: 16, color: "var(--brand-slate)", lineHeight: 1.7, marginTop: 20 }}>
            Don't see yours? <a href="contact.html" style={{ fontWeight: 600 }}>Drop us a note</a> — we read every one.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((f, i) => (
            <div key={i} style={{
              background: "#fff", borderRadius: 16, border: "1px solid var(--brand-slate-100)",
              overflow: "hidden", transition: "all 220ms var(--ease-out)",
              boxShadow: open === i ? "var(--shadow-sm)" : "none",
            }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                width: "100%", textAlign: "left", padding: "20px 24px", background: "transparent", border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: "var(--brand-slate-deep)"
              }}>
                {f.q}
                <i data-lucide={open === i ? "minus" : "plus"} style={{ width: 18, height: 18, color: "var(--accent-deep)", flexShrink: 0 }}></i>
              </button>
              {open === i && (
                <div style={{ padding: "0 24px 22px", animation: "fadeIn 220ms var(--ease-out)" }}>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--brand-slate)", margin: 0 }}>{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section style={{ padding: "80px 0" }}>
      <div className="container">
        <div className="cta-card" style={{
          background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-deep) 100%)",
          borderRadius: 32, padding: "64px 56px", color: "#fff", position: "relative", overflow: "hidden",
          boxShadow: "var(--shadow-accent)",
        }}>
          <div style={{ position: "absolute", top: -120, right: -120, width: 380, height: 380, borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.18)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.18)", pointerEvents: "none" }} />
          <div className="split-15-1" style={{ position: "relative", gap: 48, alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.025em", lineHeight: 1.05, color: "#fff", margin: 0 }}>
                Ready to make AI<br />actually work for your team?
              </h2>
              <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", lineHeight: 1.6, marginTop: 20, maxWidth: 540 }}>
                A 30-minute discovery call. We'll listen, ask sharp questions, and tell you honestly whether we're the right fit.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start", justifySelf: "end" }}>
              <a href="contact.html" className="btn btn-on-dark" style={{ padding: "16px 30px", fontSize: 16 }}>
                Book a discovery call
                <i data-lucide="arrow-up-right" style={{ width: 18, height: 18 }}></i>
              </a>
              <a href="mailto:chandangoopta@gmail.com" className="btn btn-outline-dark">
                Or email us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, TrustStrip, ServicesSection, TrainingSection, MethodologySection, NumbersSection, QuoteSection, FAQSection, CTASection });
