// Custom SVG illustrations for Growcept — abstract, on-brand, animated.

// ── Hero data showcase ──────────────────────────────────────────────────
// Three layouts available via `variant` prop:
//   "stacked"  (default) — open, no card chrome; KPI on top, chart below, footnote
//   "ribbon"            — vertical sidebar list of all stats, active one expands
//   "ticker"            — single big KPI with chart, dot indicators below

const HERO_STATS = [
  {
    kpi: "+34%",
    headline: "Team adoption",
    sub: "Active AI use across piloted workflows in 90 days.",
    icon: "users",
    chart: "bars",
    data: [22, 28, 31, 38, 44, 52, 58, 64, 71, 78, 84, 90],
    caption: "Weekly active users · 12-week cohort",
  },
  {
    kpi: "+500%",
    headline: "Productivity lift",
    sub: "Tickets resolved per agent in support and ops workflows.",
    icon: "zap",
    chart: "compare",
    before: { label: "Before AI", value: 100 },
    after: { label: "After integration", value: 600 },
    caption: "Tickets resolved per agent · per week",
  },
  {
    kpi: "72%",
    headline: "Faster decisions",
    sub: "Reduction in time-to-decision for managers using AI-augmented briefs.",
    icon: "gauge",
    chart: "gauge",
    value: 72,
    caption: "Median across 6 management cohorts",
  },
  {
    kpi: "9.2×",
    headline: "ROI on training",
    sub: "Cumulative value returned vs. training cost in the first 12 months.",
    icon: "trending-up",
    chart: "line",
    data: [10, 14, 22, 30, 42, 58, 76, 92],
    caption: "Tracked across 18 organizations",
  },
  {
    kpi: "240+",
    headline: "Learners trained",
    sub: "Across executives, managers, builders, marketing, HR and finance tracks.",
    icon: "badge-check",
    chart: "roles",
    caption: "All cohorts since 2021",
  },
  {
    kpi: "12wk",
    headline: "Time to AI-native",
    sub: "Median engagement length from kickoff to operational handoff.",
    icon: "calendar-check",
    chart: "stages",
    stages: ["Listen", "Frame", "Pilot", "Embed"],
    caption: "Across full three-pillar engagements",
  },
];

function HeroDataShow({ variant = "stacked" }) {
  if (variant === "ribbon") return <RibbonLayout />;
  if (variant === "ticker") return <TickerLayout />;
  return <StackedLayout />;
}

// ── Layout 1 — Stacked (default) ─────────────────────────────────────────
// Open, no card chrome. KPI on top, chart below, segment dots, no floating cards.
function StackedLayout() {
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI(p => (p + 1) % HERO_STATS.length), 4200);
    return () => clearInterval(t);
  }, [paused]);
  const s = HERO_STATS[i];
  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ position: "relative", width: "100%", maxWidth: 560, padding: "8px 4px" }}
    >
      {/* Soft halo behind */}
      <div style={{
        position: "absolute", inset: "-10% -10% auto -10%", height: "70%",
        background: "radial-gradient(ellipse at 60% 40%, var(--accent-soft) 0%, transparent 70%)",
        opacity: 0.6, pointerEvents: "none", zIndex: 0,
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Eyebrow line */}
        <div style={{
          display: "flex", alignItems: "center", gap: 10,
          fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--brand-slate-300)",
          textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 18,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--success)", boxShadow: "0 0 0 3px rgba(47,179,122,0.18)", animation: "pulseDot 2.4s ease-in-out infinite" }} />
          Outcomes from real engagements
        </div>

        <div key={`k${i}`} style={{ animation: "slideUp 0.6s var(--ease-out)" }}>
          {/* KPI */}
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(72px, 11vw, 128px)", letterSpacing: "-0.045em",
            lineHeight: 0.92, color: "var(--brand-slate-deep)",
            background: `linear-gradient(135deg, var(--brand-slate-deep) 0%, var(--accent-deep) 100%)`,
            WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            {s.kpi}
          </div>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "clamp(20px, 2.4vw, 26px)", letterSpacing: "-0.015em",
            color: "var(--brand-slate-deep)", marginTop: 12,
          }}>
            {s.headline}
          </div>
          <p style={{
            fontSize: 15, lineHeight: 1.6, color: "var(--brand-slate)",
            margin: "8px 0 0", maxWidth: 440,
          }}>{s.sub}</p>
        </div>

        {/* Chart */}
        <div key={`c${i}`} style={{ marginTop: 28, animation: "fadeIn 0.7s var(--ease-out)" }}>
          <ChartFor stat={s} />
          <div style={{
            fontFamily: "var(--font-mono)", fontSize: 11,
            color: "var(--brand-slate-300)", marginTop: 12, letterSpacing: "0.04em",
          }}>{s.caption}</div>
        </div>

        {/* Indicator track */}
        <div style={{ display: "flex", gap: 4, marginTop: 24 }}>
          {HERO_STATS.map((_, j) => (
            <button key={j} onClick={() => setI(j)} aria-label={`Stat ${j+1}`} style={{
              flex: 1, height: 3, borderRadius: 2,
              background: j === i ? "var(--accent)" : "var(--brand-slate-100)",
              border: "none", padding: 0, cursor: "pointer",
              transition: "background 320ms var(--ease-out)",
              position: "relative", overflow: "hidden",
            }}>
              {j === i && !paused && (
                <span style={{
                  position: "absolute", inset: 0,
                  background: "var(--accent-deep)",
                  transformOrigin: "left center",
                  animation: "growX 4.2s linear forwards",
                }} />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Layout 2 — Ribbon ────────────────────────────────────────────────────
// Vertical list of all stats, active one expands with a chart inline.
function RibbonLayout() {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI(p => (p + 1) % HERO_STATS.length), 4500);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 540 }}>
      <div style={{
        position: "absolute", inset: "-8% auto auto -8%", width: "60%", height: "60%",
        background: "radial-gradient(circle, var(--accent-soft) 0%, transparent 70%)",
        opacity: 0.6, pointerEvents: "none", zIndex: 0,
      }} />
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 10,
          fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--brand-slate-300)",
          textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 14,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--success)" }} />
          Receipts
        </div>

        {HERO_STATS.map((s, j) => {
          const active = j === i;
          return (
            <button
              key={j}
              onClick={() => setI(j)}
              style={{
                textAlign: "left", background: "transparent", border: "none", padding: 0,
                cursor: "pointer", borderBottom: j < HERO_STATS.length - 1 ? "1px solid var(--brand-slate-100)" : "none",
                transition: "all 280ms var(--ease-out)",
              }}
            >
              <div style={{
                display: "flex", alignItems: "center", gap: 18, padding: active ? "16px 0" : "12px 0",
              }}>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 800,
                  fontSize: active ? "clamp(40px, 6vw, 64px)" : "clamp(20px, 2.4vw, 28px)",
                  letterSpacing: "-0.035em", lineHeight: 1, minWidth: active ? 160 : 100,
                  color: active ? "var(--accent-deep)" : "var(--brand-slate-300)",
                  transition: "all 320ms var(--ease-out)",
                }}>
                  {s.kpi}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: active ? 700 : 600,
                    fontSize: active ? 18 : 15, letterSpacing: "-0.01em",
                    color: active ? "var(--brand-slate-deep)" : "var(--brand-slate)",
                    transition: "all 280ms var(--ease-out)",
                  }}>
                    {s.headline}
                  </div>
                  {active && (
                    <p style={{
                      fontSize: 13, lineHeight: 1.55, color: "var(--brand-slate)",
                      margin: "4px 0 12px", animation: "fadeIn 0.4s var(--ease-out)",
                    }}>{s.sub}</p>
                  )}
                </div>
                <i data-lucide={active ? "arrow-right" : "chevron-right"} style={{
                  width: 16, height: 16,
                  color: active ? "var(--accent)" : "var(--brand-slate-300)",
                  flexShrink: 0,
                }}></i>
              </div>
              {active && (
                <div key={`r${j}`} style={{ paddingBottom: 12, animation: "slideUp 0.5s var(--ease-out)" }}>
                  <ChartFor stat={s} compact />
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--brand-slate-300)", marginTop: 10, letterSpacing: "0.04em" }}>{s.caption}</div>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── Layout 3 — Ticker ────────────────────────────────────────────────────
// Centered single big KPI, chart below, dots underneath. Compact + bold.
function TickerLayout() {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI(p => (p + 1) % HERO_STATS.length), 4200);
    return () => clearInterval(t);
  }, []);
  const s = HERO_STATS[i];
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 540, textAlign: "left" }}>
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(circle at 50% 30%, var(--accent-soft) 0%, transparent 65%)",
        opacity: 0.55, pointerEvents: "none", zIndex: 0,
      }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Top icon row */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          {HERO_STATS.map((_, j) => (
            <span key={j} style={{
              width: j === i ? 28 : 6, height: 6, borderRadius: 3,
              background: j === i ? "var(--accent)" : "var(--brand-slate-100)",
              transition: "all 320ms var(--ease-out)",
            }} />
          ))}
        </div>

        <div key={`t${i}`} style={{ animation: "slideUp 0.5s var(--ease-out)" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "5px 12px", borderRadius: 9999,
            background: "var(--accent-whisper)", color: "var(--accent-deep)",
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11,
            letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16,
          }}>
            <i data-lucide={s.icon} style={{ width: 12, height: 12 }}></i>
            {s.headline}
          </div>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(96px, 14vw, 168px)", letterSpacing: "-0.05em",
            lineHeight: 0.85, color: "var(--brand-slate-deep)",
          }}>
            {s.kpi}
          </div>
          <p style={{
            fontSize: 16, lineHeight: 1.55, color: "var(--brand-slate)",
            margin: "16px 0 0", maxWidth: 440,
          }}>{s.sub}</p>
        </div>

        <div key={`tc${i}`} style={{
          marginTop: 24, padding: "20px 0",
          borderTop: "1px solid var(--brand-slate-100)",
          borderBottom: "1px solid var(--brand-slate-100)",
          animation: "fadeIn 0.7s var(--ease-out)"
        }}>
          <ChartFor stat={s} />
          <div style={{
            fontFamily: "var(--font-mono)", fontSize: 11,
            color: "var(--brand-slate-300)", marginTop: 12, letterSpacing: "0.04em",
          }}>{s.caption}</div>
        </div>
      </div>
    </div>
  );
}

// ── Charts ───────────────────────────────────────────────────────────────
function ChartFor({ stat, compact }) {
  const accent = "var(--accent)";
  if (stat.chart === "bars")    return <BarsChart data={stat.data} accent={accent} />;
  if (stat.chart === "compare") return <CompareChart before={stat.before} after={stat.after} accent={accent} />;
  if (stat.chart === "gauge")   return <GaugeChart value={stat.value} accent={accent} />;
  if (stat.chart === "line")    return <LineChart data={stat.data} accent={accent} />;
  if (stat.chart === "roles")   return <RolesChart accent={accent} />;
  if (stat.chart === "stages")  return <StagesChart stages={stat.stages} accent={accent} />;
  return null;
}

function BarsChart({ data, accent }) {
  const max = Math.max(...data);
  return (
    <svg viewBox="0 0 360 90" style={{ width: "100%", height: 90, display: "block" }}>
      {data.map((v, i) => {
        const h = (v / max) * 78;
        const x = i * 30 + 6;
        return (
          <rect key={i} x={x} y={86 - h} width="20" height={h} rx="4"
            fill={accent} opacity={0.35 + (i / data.length) * 0.65}
            style={{ transformOrigin: `${x + 10}px 86px`, transform: "scaleY(0)",
              animation: `growBar 0.7s ${i * 0.05}s var(--ease-out) forwards` }} />
        );
      })}
    </svg>
  );
}

function CompareChart({ before, after, accent }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 18, height: 96 }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "stretch", gap: 6, maxWidth: 90 }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12, color: "var(--brand-slate-300)", textAlign: "center" }}>{before.value}</div>
        <div style={{ width: "100%", height: 14, background: "var(--brand-slate-100)", borderRadius: 4 }} />
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--brand-slate-300)", textAlign: "center", letterSpacing: "0.04em" }}>{before.label}</div>
      </div>
      <div style={{ flex: 5, display: "flex", flexDirection: "column", alignItems: "stretch", gap: 6 }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, color: accent, textAlign: "right" }}>{after.value}</div>
        <div style={{ width: "100%", height: 14, background: accent, borderRadius: 4,
          transformOrigin: "left center", transform: "scaleX(0)",
          animation: "growX 1.2s 0.2s var(--ease-out) forwards" }} />
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--brand-slate-300)", letterSpacing: "0.04em" }}>{after.label}</div>
      </div>
    </div>
  );
}

function GaugeChart({ value, accent }) {
  const r = 38, c = 2 * Math.PI * r;
  const off = c - (value / 100) * c;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 22, height: 96 }}>
      <svg viewBox="0 0 100 100" style={{ width: 96, height: 96, flexShrink: 0 }}>
        <circle cx="50" cy="50" r={r} fill="none" stroke="var(--brand-slate-100)" strokeWidth="8" />
        <circle cx="50" cy="50" r={r} fill="none" stroke={accent} strokeWidth="8" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={c}
          transform="rotate(-90 50 50)"
          style={{ animation: `gaugeFill 1.4s var(--ease-out) forwards`, "--off": off }} />
        <text x="50" y="56" textAnchor="middle" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, fill: "var(--brand-slate-deep)", letterSpacing: "-0.02em" }}>{value}%</text>
      </svg>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
        {["Briefs prepped in seconds","Cross-team alignment","Decisions logged with rationale"].map((l, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "var(--brand-slate)", lineHeight: 1.4 }}>
            <i data-lucide="check" style={{ width: 12, height: 12, color: accent, flexShrink: 0 }}></i>{l}
          </div>
        ))}
      </div>
    </div>
  );
}

function LineChart({ data, accent }) {
  const max = Math.max(...data), min = Math.min(...data);
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * 340 + 10;
    const y = 80 - ((v - min) / (max - min || 1)) * 70;
    return [x, y];
  });
  const path = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`).join(" ");
  const area = path + ` L 350 86 L 10 86 Z`;
  return (
    <svg viewBox="0 0 360 90" style={{ width: "100%", height: 90, display: "block" }}>
      <defs>
        <linearGradient id="lcArea" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.28" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#lcArea)" style={{ opacity: 0, animation: "fadeIn 1.4s 0.4s forwards" }} />
      <path d={path} fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        style={{ strokeDasharray: 600, strokeDashoffset: 600, animation: "drawIn 1.6s var(--ease-out) forwards", "--len": 600 }} />
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill={accent}
          style={{ opacity: 0, animation: `fadeIn 0.4s ${0.6 + i * 0.08}s forwards` }} />
      ))}
    </svg>
  );
}

function RolesChart({ accent }) {
  // Bars showing learner distribution across role tracks
  const roles = [
    { label: "Executives",  count: 38 },
    { label: "Managers",    count: 64 },
    { label: "Builders",    count: 52 },
    { label: "Marketing",   count: 28 },
    { label: "HR / People", count: 32 },
    { label: "Finance/Legal", count: 26 },
  ];
  const max = Math.max(...roles.map(r => r.count));
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {roles.map((r, i) => (
        <div key={r.label} style={{ display: "grid", gridTemplateColumns: "108px 1fr 32px", alignItems: "center", gap: 12, fontSize: 12 }}>
          <div style={{ color: "var(--brand-slate)", lineHeight: 1.2 }}>{r.label}</div>
          <div style={{ height: 8, background: "var(--brand-slate-100)", borderRadius: 4, overflow: "hidden" }}>
            <div style={{
              height: "100%", background: accent, borderRadius: 4,
              width: `${(r.count / max) * 100}%`,
              transformOrigin: "left center", transform: "scaleX(0)",
              animation: `growX 0.8s ${i * 0.08}s var(--ease-out) forwards`,
            }} />
          </div>
          <div style={{ fontFamily: "var(--font-mono)", color: "var(--brand-slate-300)", textAlign: "right" }}>{r.count}</div>
        </div>
      ))}
    </div>
  );
}

function StagesChart({ stages, accent }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 90, padding: "0 4px" }}>
      {stages.map((label, i) => (
        <React.Fragment key={label}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
            opacity: 0, animation: `slideUp 0.5s ${i * 0.18}s var(--ease-out) forwards` }}>
            <div style={{
              width: 32, height: 32, borderRadius: "50%",
              background: accent, color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13
            }}>{i + 1}</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, color: "var(--brand-slate-deep)" }}>{label}</div>
          </div>
          {i < stages.length - 1 && (
            <div style={{ flex: 1, height: 2, background: `linear-gradient(to right, ${accent}, var(--brand-slate-100))`, margin: "0 8px",
              transformOrigin: "left center", transform: "scaleX(0)",
              animation: `growX 0.6s ${0.3 + i * 0.18}s var(--ease-out) forwards` }} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

// ── Other illustrations ─────────────────────────────────────────────────
function MaturityLadder() {
  return (
    <svg viewBox="0 0 800 280" style={{ width: "100%", height: "auto" }}>
      <defs>
        <linearGradient id="ladderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--brand-slate-200)" />
          <stop offset="100%" stopColor="var(--accent)" />
        </linearGradient>
      </defs>
      <line x1="40" y1="240" x2="760" y2="240" stroke="var(--brand-slate-100)" strokeWidth="1" strokeDasharray="2 4" />
      <path d="M 60 220 C 200 220, 240 180, 280 170 C 360 152, 400 140, 460 110 C 540 70, 600 60, 740 30"
        fill="none" stroke="url(#ladderGrad)" strokeWidth="3" strokeLinecap="round"
        style={{ strokeDasharray: 1200, strokeDashoffset: 1200, animation: "drawIn 2.4s 0.2s var(--ease-out) forwards", "--len": 1200 }} />
      {[
        { x: 80,  y: 220, label: "Curious",    sub: "Stage 0" },
        { x: 280, y: 170, label: "Piloting",   sub: "Stage 1" },
        { x: 460, y: 110, label: "Integrated", sub: "Stage 2" },
        { x: 720, y: 32,  label: "AI-native",  sub: "Stage 3" },
      ].map((s, i) => (
        <g key={i} style={{ animation: `slideUp 0.6s ${0.6 + i * 0.2}s var(--ease-out) backwards` }}>
          <line x1={s.x} y1={s.y} x2={s.x} y2={240} stroke="var(--brand-slate-100)" strokeWidth="1" strokeDasharray="2 3" />
          <circle cx={s.x} cy={s.y} r="9" fill="#fff" stroke="var(--accent)" strokeWidth="2.5" />
          <circle cx={s.x} cy={s.y} r="4" fill="var(--accent)" />
          <text x={s.x} y={s.y - 18} textAnchor="middle" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, fill: "var(--brand-slate-deep)", letterSpacing: "-0.01em" }}>{s.label}</text>
          <text x={s.x} y={260} textAnchor="middle" style={{ fontFamily: "var(--font-mono)", fontSize: 11, fill: "var(--brand-slate-300)" }}>{s.sub}</text>
        </g>
      ))}
    </svg>
  );
}

function PillarDiagram() {
  return (
    <svg viewBox="0 0 560 320" style={{ width: "100%", height: "auto" }}>
      <defs>
        <linearGradient id="pdLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--brand-slate-200)" />
          <stop offset="100%" stopColor="var(--accent)" />
        </linearGradient>
      </defs>
      <path d="M 100 80 Q 280 160, 460 240" fill="none" stroke="url(#pdLine)" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M 100 160 L 460 240" fill="none" stroke="url(#pdLine)" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M 100 240 Q 280 160, 460 240" fill="none" stroke="url(#pdLine)" strokeWidth="2" strokeDasharray="4 4" />
      {[
        { y: 80,  label: "Train" },
        { y: 160, label: "Integrate" },
        { y: 240, label: "Govern" },
      ].map((p, i) => (
        <g key={i}>
          <rect x="20" y={p.y - 28} width="160" height="56" rx="12" fill="#fff" stroke="var(--brand-slate-100)" />
          <circle cx="50" cy={p.y} r="14" fill="var(--accent-whisper)" />
          <text x="76" y={p.y + 5} style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, fill: "var(--brand-slate-deep)" }}>{p.label}</text>
        </g>
      ))}
      <rect x="380" y="210" width="160" height="60" rx="14" fill="var(--accent)" />
      <text x="460" y="246" textAnchor="middle" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, fill: "#fff", letterSpacing: "-0.01em" }}>AI-native org</text>
    </svg>
  );
}

Object.assign(window, { HeroDataShow, MaturityLadder, PillarDiagram });
