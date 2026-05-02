// About page sections

function AboutHero() {
  return (
    <section style={{ padding: "80px 0 64px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, right: -100, width: 420, height: 420, borderRadius: "50%",
        background: "radial-gradient(circle, var(--accent-soft) 0%, transparent 65%)", opacity: 0.5, pointerEvents: "none" }} />
      <div className="container">
        <div className="eyebrow" style={{ marginBottom: 20 }}>About Growcept</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(44px, 7vw, 96px)", letterSpacing: "-0.03em", lineHeight: 0.98, color: "var(--brand-slate-deep)", margin: 0, maxWidth: 1100 }}>
          A boutique consultancy<br />
          <span style={{ color: "var(--accent)" }}>for the AI-native</span> era.
        </h1>
        <p style={{ fontSize: 22, lineHeight: 1.5, color: "var(--brand-slate)", marginTop: 32, maxWidth: 720 }}>
          We're senior practitioners who've shipped, taught, and governed AI inside real organizations.
          Growcept exists to give that operating muscle to the teams that need it most — without the
          theatre, the acronyms, or the fifty-slide decks.
        </p>
      </div>
    </section>
  );
}

function ManifestoSection() {
  const beliefs = [
    { n: "01", t: "Adoption beats capability.", b: "The best AI feature in your stack is the one your team actually uses on Tuesday morning. We optimize for that." },
    { n: "02", t: "AI policy is product work.", b: "Good policy enables — it doesn't block. We write it with the same care a senior PM brings to a feature spec." },
    { n: "03", t: "Senior people, on the ground.", b: "Every Growcept engagement is led by a partner. No bait-and-switch. No offshored juniors. No exceptions." },
    { n: "04", t: "Measure the boring things.", b: "Throughput. Error rate. Confidence. Cycle time. We instrument before we intervene — and we always tell you the truth." },
  ];
  return (
    <section className="section section-tinted">
      <div className="container">
        <div style={{ marginBottom: 48 }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>What we believe</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.025em", lineHeight: 1.05, color: "var(--brand-slate-deep)", margin: 0 }}>
            Four convictions that shape every engagement.
          </h2>
        </div>
        <div className="g2" style={{ gap: 24 }}>
          {beliefs.map((b, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 20, padding: 36, border: "1px solid var(--brand-slate-100)", display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--accent-deep)" }}>{b.n}</div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28, letterSpacing: "-0.02em", lineHeight: 1.15, color: "var(--brand-slate-deep)" }}>{b.t}</div>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--brand-slate)", margin: 0 }}>{b.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section className="section" id="approach">
      <div className="container split" style={{ gap: 64, alignItems: "center" }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 14 }}>Our approach</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.025em", lineHeight: 1.05, color: "var(--brand-slate-deep)", margin: 0 }}>
            Three pillars,<br />
            <span style={{ color: "var(--accent)" }}>one outcome.</span>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--brand-slate)", marginTop: 24 }}>
            Training without integration produces frustrated graduates. Integration without policy produces
            risk. Policy without training produces shelf-ware. We do all three because that's what works.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--brand-slate)", marginTop: 16 }}>
            The output isn't a deliverable — it's an organization that knows how to absorb the next
            wave of AI on its own.
          </p>
        </div>
        <div style={{ background: "#fff", borderRadius: 24, border: "1px solid var(--brand-slate-100)", padding: 40, boxShadow: "var(--shadow-sm)" }}>
          <PillarDiagram />
        </div>
      </div>
    </section>
  );
}

function FounderSection() {
  return (
    <section className="section section-deep" style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -100, left: -100, width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, var(--accent) 0%, transparent 65%)", opacity: 0.18 }} />
      <div className="container split-1-14" style={{ position: "relative", gap: 64, alignItems: "center" }}>
        <div>
          <div className="founder-img-block" style={{ width: "100%", aspectRatio: "1/1", maxWidth: 380, borderRadius: 24, background: "linear-gradient(135deg, var(--accent), var(--accent-deep))", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 120, letterSpacing: "-0.04em", boxShadow: "var(--shadow-xl)" }}>
            CG
          </div>
        </div>
        <div>
          <div className="eyebrow" style={{ color: "var(--accent)", marginBottom: 14 }}>Founder note</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.025em", lineHeight: 1.15, color: "#fff", margin: 0 }}>
            "I started Growcept because most AI consulting felt like theatre."
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(241,243,243,0.78)", marginTop: 24 }}>
            Big logos. Bigger decks. Very little change on the ground. The teams who actually win with AI
            aren't the ones with the biggest budgets — they're the ones whose people use it confidently,
            day after day. That's what we build for.
          </p>
          <div style={{ marginTop: 32, display: "flex", alignItems: "center", gap: 14 }}>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: "#fff" }}>Chandan Goopta</div>
              <div style={{ fontSize: 14, color: "rgba(241,243,243,0.5)" }}>Founder & Principal · Growcept</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  const items = [
    { y: "2018", t: "First AI engagement", b: "A four-person ops team at a logistics SMB. We didn't call it 'AI' yet — we called it automation that learns." },
    { y: "2021", t: "Training practice formalized", b: "Codified our role-based curriculum after running it for the third time. The third time is when patterns become products." },
    { y: "2024", t: "Policy practice launched", b: "Clients kept asking the same question — 'how do we let people use this safely?' We answered, then turned the answer into a service." },
    { y: "2026", t: "Growcept today", b: "Three pillars. 240 people trained. 18 organizations. Still senior-led, still tool-agnostic, still telling the truth." },
  ];
  return (
    <section className="section">
      <div className="container">
        <div style={{ marginBottom: 48 }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>Our story</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.025em", lineHeight: 1.05, color: "var(--brand-slate-deep)", margin: 0 }}>
            How we got here.
          </h2>
        </div>
        <div style={{ position: "relative", paddingLeft: 40 }}>
          <div style={{ position: "absolute", left: 8, top: 8, bottom: 8, width: 2, background: "linear-gradient(to bottom, var(--accent), var(--brand-slate-100))" }} />
          {items.map((it, i) => (
            <div key={i} style={{ position: "relative", paddingBottom: i < items.length - 1 ? 40 : 0 }}>
              <div style={{ position: "absolute", left: -40, top: 4, width: 18, height: 18, borderRadius: "50%", background: "#fff", border: "3px solid var(--accent)" }} />
              <div className="timeline-row" style={{ gap: 32, alignItems: "start" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 15, color: "var(--accent-deep)", paddingTop: 4 }}>{it.y}</div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, letterSpacing: "-0.01em", color: "var(--brand-slate-deep)" }}>{it.t}</div>
                  <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--brand-slate)", marginTop: 8, maxWidth: 640 }}>{it.b}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { AboutHero, ManifestoSection, ApproachSection, FounderSection, TimelineSection });
