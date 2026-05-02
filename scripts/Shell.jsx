// Shared site components: Nav, Footer, and SVG illustrations
// All exported to window for use across pages.

const NAV_LINKS = [
  { href: "index.html", label: "Home" },
  { href: "services.html", label: "Services" },
  { href: "about.html", label: "About" },
  { href: "contact.html", label: "Contact" },
];

function Nav({ current = "Home" }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 50,
      background: scrolled ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.6)",
      backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
      borderBottom: scrolled ? "1px solid var(--brand-slate-100)" : "1px solid transparent",
      transition: "all 220ms var(--ease-out)"
    }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0" }}>
        <a href="index.html" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img src="assets/logo-horizontal.png" alt="Growcept" style={{ height: 28 }} />
        </a>
        <div className="nav-links-desktop" style={{ display: "flex", gap: 4, alignItems: "center" }}>
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} style={{
              padding: "8px 16px",
              fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14,
              color: l.label === current ? "var(--accent-deep)" : "var(--brand-slate-deep)",
              textDecoration: "none", borderRadius: 9999,
              transition: "all 140ms var(--ease-out)",
              background: l.label === current ? "var(--accent-whisper)" : "transparent"
            }}
            onMouseEnter={e => { if (l.label !== current) e.currentTarget.style.background = "var(--surface-sunken)"; }}
            onMouseLeave={e => { if (l.label !== current) e.currentTarget.style.background = "transparent"; }}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="nav-cta-desktop" style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a href="contact.html" className="btn btn-primary">
            Book a consult
            <i data-lucide="arrow-up-right" style={{ width: 16, height: 16 }}></i>
          </a>
        </div>
        <button
          className="nav-toggle"
          aria-label="Open menu"
          onClick={() => setOpen(o => !o)}
          style={{
            display: "none", width: 40, height: 40, borderRadius: 10,
            background: open ? "var(--accent-whisper)" : "transparent",
            border: "1px solid var(--brand-slate-100)",
            alignItems: "center", justifyContent: "center", cursor: "pointer", padding: 0
          }}
        >
          <i data-lucide={open ? "x" : "menu"} style={{ width: 20, height: 20, color: "var(--brand-slate-deep)" }}></i>
        </button>
      </div>
      <div className={`nav-mobile-menu ${open ? "open" : ""}`} style={{
        display: "none",
        flexDirection: "column",
        padding: "12px 20px 28px",
        gap: 4,
        background: "rgba(255,255,255,0.96)",
        borderTop: "1px solid var(--brand-slate-100)"
      }}>
        {NAV_LINKS.map(l => (
          <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
            padding: "14px 16px",
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18,
            color: l.label === current ? "var(--accent-deep)" : "var(--brand-slate-deep)",
            textDecoration: "none", borderRadius: 12,
            background: l.label === current ? "var(--accent-whisper)" : "transparent",
            display: "flex", justifyContent: "space-between", alignItems: "center"
          }}>
            {l.label}
            <i data-lucide="arrow-right" style={{ width: 16, height: 16, opacity: 0.5 }}></i>
          </a>
        ))}
        <a href="contact.html" onClick={() => setOpen(false)} className="btn btn-primary" style={{ marginTop: 16, justifyContent: "center", padding: "16px 24px" }}>
          Book a consult <i data-lucide="arrow-up-right" style={{ width: 16, height: 16 }}></i>
        </a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer style={{ background: "var(--surface-deep)", color: "var(--fg-on-dark)", padding: "80px 0 32px" }}>
      <div className="container split-footer footer-grid" style={{ gap: 48 }}>
        <div>
          <img src="assets/logo-horizontal-onbrand.png" alt="Growcept" style={{ height: 32, marginBottom: 20 }} />
          <p style={{ color: "rgba(241,243,243,0.65)", fontSize: 15, lineHeight: 1.7, maxWidth: 320 }}>
            A boutique AI consultancy helping organizations train, integrate, and govern AI with intent.
          </p>
          <div style={{ marginTop: 24, display: "flex", gap: 10 }}>
            <SocialBtn icon="linkedin-icon" />
            <SocialBtn icon="x" />
            <SocialBtn icon="mail" />
          </div>
        </div>
        <FooterCol title="Services" links={[
          ["AI training", "services.html#training"],
          ["Integration & ops", "services.html#integration"],
          ["Policy & governance", "services.html#policy"],
          ["Workshops", "services.html#workshops"],
        ]} />
        <FooterCol title="Company" links={[
          ["About", "about.html"],
          ["Approach", "about.html#approach"],
          ["Insights", "#"],
          ["Contact", "contact.html"],
        ]} />
        <FooterCol title="Get in touch" links={[
          ["chandangoopta@gmail.com", "mailto:chandangoopta@gmail.com"],
          ["Book a discovery call", "contact.html"],
          ["Press inquiries", "mailto:chandangoopta@gmail.com"],
        ]} />
      </div>
      <div className="container" style={{ marginTop: 64, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <span style={{ color: "rgba(241,243,243,0.5)", fontSize: 13, fontFamily: "var(--font-mono)" }}>© 2026 Growcept · Grow. Succeed. Scale.</span>
        <div style={{ display: "flex", gap: 24 }}>
          <a href="#" style={{ color: "rgba(241,243,243,0.5)", fontSize: 13, textDecoration: "none" }}>Privacy</a>
          <a href="#" style={{ color: "rgba(241,243,243,0.5)", fontSize: 13, textDecoration: "none" }}>Terms</a>
          <a href="#" style={{ color: "rgba(241,243,243,0.5)", fontSize: 13, textDecoration: "none" }}>AI ethics charter</a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 18 }}>{title}</div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} style={{ color: "var(--fg-on-dark)", fontSize: 14, textDecoration: "none", transition: "color 140ms" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--brand-cyan)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--fg-on-dark)"}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialBtn({ icon }) {
  return (
    <a href="#" style={{
      width: 38, height: 38, borderRadius: "50%",
      background: "rgba(255,255,255,0.08)", display: "inline-flex",
      alignItems: "center", justifyContent: "center", color: "#fff",
      transition: "all 220ms var(--ease-out)"
    }}
      onMouseEnter={e => { e.currentTarget.style.background = "var(--brand-cyan)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "none"; }}>
      <i data-lucide={icon} style={{ width: 16, height: 16 }}></i>
    </a>
  );
}

// ---------- Reveal-on-scroll wrapper ----------
function Reveal({ children, delay = 0, style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className="reveal" style={{ ...style, transitionDelay: `${delay}ms` }}>{children}</div>;
}

// ---------- Lucide refresher ----------
function useLucide(deps = []) {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
}

Object.assign(window, { Nav, Footer, Reveal, useLucide, NAV_LINKS });
