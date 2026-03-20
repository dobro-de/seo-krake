import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Preise | KI-Chatbot & Telefonassistent | kiberatung.de",
  description:
    "Transparente Preise für KI-Lösungen: Starter ab €149/Monat, Professional ab €349/Monat, Enterprise auf Anfrage. Monatlich kündbar. DSGVO-konform.",
  alternates: {
    canonical: "https://kiberatung-v2.vercel.app/preise",
  },
};

const TIERS = [
  {
    name: "Starter",
    price: "€149",
    period: "/Monat",
    desc: "Ideal für kleine Unternehmen, die ihren Kundensupport automatisieren möchten.",
    highlight: false,
    tag: null,
    features: [
      "KI-Chatbot für Ihre Website",
      "Bis zu 500 Anfragen/Monat",
      "FAQ-Training (bis 30 Fragen)",
      "E-Mail-Support",
      "Onboarding inklusive",
      "DSGVO-konform (EU-Server)",
    ],
    cta: "Jetzt starten",
    ctaHref: "mailto:info@kiberatung.de?subject=Starter Plan Anfrage",
  },
  {
    name: "Professional",
    price: "€349",
    period: "/Monat",
    desc: "Für wachsende Unternehmen mit höherem Volumen und Bedarf an Analysen.",
    highlight: true,
    tag: "Empfohlen",
    features: [
      "KI-Chatbot + Telefonassistent",
      "Bis zu 2.000 Anfragen/Monat",
      "FAQ-Training (unbegrenzt)",
      "Priority-Support",
      "Analytics Dashboard",
      "Lead-Qualifizierung",
      "Onboarding inklusive",
      "DSGVO-konform (EU-Server)",
    ],
    cta: "Professional wählen",
    ctaHref: "mailto:info@kiberatung.de?subject=Professional Plan Anfrage",
  },
  {
    name: "Enterprise",
    price: "auf Anfrage",
    period: "",
    desc: "Für große Unternehmen mit individuellen Anforderungen und garantierten SLAs.",
    highlight: false,
    tag: null,
    features: [
      "Unbegrenzte Anfragen",
      "Dedizierter Ansprechpartner",
      "Individuelle Integration",
      "SLA-Garantie",
      "Custom Branding",
      "API-Zugang",
      "Onboarding inklusive",
      "DSGVO-konform (EU-Server)",
    ],
    cta: "Angebot anfragen",
    ctaHref: "mailto:info@kiberatung.de?subject=Enterprise Plan Anfrage",
  },
];

const FEATURE_ROWS = [
  { label: "Onboarding", starter: true, pro: true, enterprise: true },
  { label: "Setup & Konfiguration", starter: true, pro: true, enterprise: true },
  { label: "FAQ-Training", starter: true, pro: true, enterprise: true },
  { label: "Analytics Dashboard", starter: false, pro: true, enterprise: true },
  { label: "DSGVO-Konformität (EU)", starter: true, pro: true, enterprise: true },
  { label: "Telefonassistent", starter: false, pro: true, enterprise: true },
  { label: "Priority-Support", starter: false, pro: true, enterprise: true },
  { label: "SLA-Garantie", starter: false, pro: false, enterprise: true },
  { label: "Dedizierter Ansprechpartner", starter: false, pro: false, enterprise: true },
];

const FAQS = [
  {
    q: "Gibt es eine Mindestlaufzeit?",
    a: "Nein. Alle Pläne sind monatlich kündbar — ohne Kündigungsfristen und ohne versteckte Kosten. Sie können jederzeit upgraden, downgraden oder kündigen.",
  },
  {
    q: "Was passiert bei mehr Anfragen als im Plan enthalten?",
    a: "Ihr Chatbot skaliert automatisch mit. Bei dauerhaft höherem Volumen empfehlen wir ein Upgrade. Einmalige Spitzen werden fair abgerechnet — Sie werden vorab informiert.",
  },
  {
    q: "Ist das DSGVO-konform?",
    a: "Ja. Alle Daten werden ausschließlich auf EU-Servern verarbeitet. Wir stellen Ihnen eine vollständige Datenschutz-Dokumentation und einen AV-Vertrag bereit.",
  },
  {
    q: "Kann ich vorher testen?",
    a: "Ja. Wir bieten eine 30-Tage-Testphase an. So können Sie den Chatbot in Ihrer Umgebung testen, bevor Sie sich entscheiden.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export default function PreisePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <main>

        {/* ── HERO ── */}
        <section className="branche-hero" style={{ paddingBottom: "4rem" }}>
          <div className="container">
            <nav className="branche-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Startseite</Link>
              <span>›</span>
              <span>Preise</span>
            </nav>

            <div className="branche-hero-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>

            <h1 className="branche-title font-display">
              TRANSPARENT. FAIR.{" "}
              <span className="text-accent">FÜR JEDE BETRIEBSGRÖSSE.</span>
            </h1>
            <p className="branche-subtitle">
              KI für Unternehmen muss nicht teuer sein. Wählen Sie den Plan, der zu Ihnen passt — monatlich kündbar, ohne versteckte Kosten.
            </p>

            <div className="branche-actions" style={{ marginTop: "2rem" }}>
              <a href="#plaene" className="btn-accent">Pläne ansehen</a>
              <a href="mailto:info@kiberatung.de" className="btn-ghost">Kostenloses Erstgespräch</a>
            </div>
          </div>
        </section>

        {/* ── PRICING TIERS ── */}
        <section id="plaene" className="branche-section">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">Pläne & Preise</span>
              <h2 className="section-heading section-heading-center">Ihr Plan. Ihr Tempo.</h2>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              alignItems: "stretch",
            }}>
              {TIERS.map((tier) => (
                <div
                  key={tier.name}
                  style={{
                    background: tier.highlight ? "var(--bg-card)" : "var(--bg-primary)",
                    border: `1px solid ${tier.highlight ? "var(--accent)" : "var(--border-subtle)"}`,
                    borderRadius: 16,
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    boxShadow: tier.highlight ? "0 0 32px rgba(249,115,22,0.12)" : "none",
                  }}
                >
                  {tier.tag && (
                    <div style={{
                      position: "absolute",
                      top: "-14px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "var(--accent)",
                      color: "#fff",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      padding: "4px 14px",
                      borderRadius: 999,
                      whiteSpace: "nowrap",
                    }}>
                      {tier.tag}
                    </div>
                  )}

                  <div style={{ marginBottom: "1.5rem" }}>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-white)", marginBottom: "0.25rem" }}>
                      {tier.name}
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "var(--text-gray)", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                      {tier.desc}
                    </p>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem" }}>
                      <span style={{
                        fontSize: tier.price === "auf Anfrage" ? "1.5rem" : "2.5rem",
                        fontWeight: 800,
                        color: tier.highlight ? "var(--accent)" : "var(--text-white)",
                        lineHeight: 1,
                      }}>
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span style={{ fontSize: "0.875rem", color: "var(--text-gray)" }}>{tier.period}</span>
                      )}
                    </div>
                  </div>

                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.75rem", display: "flex", flexDirection: "column", gap: "0.6rem", flexGrow: 1 }}>
                    {tier.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.875rem", color: "var(--text-gray)" }}>
                        <span style={{ color: "var(--accent)", flexShrink: 0, fontWeight: 700 }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={tier.ctaHref}
                    className={tier.highlight ? "btn-accent" : "btn-ghost"}
                    style={{ textAlign: "center", justifyContent: "center" }}
                  >
                    {tier.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURE COMPARISON TABLE ── */}
        <section className="branche-section branche-challenges-bg">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">Was ist inbegriffen</span>
              <h2 className="section-heading section-heading-center">Detaillierter Vergleich</h2>
            </div>

            <div style={{
              maxWidth: 760,
              margin: "0 auto",
              border: "1px solid var(--border-subtle)",
              borderRadius: 16,
              overflow: "hidden",
            }}>
              {/* Header */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 80px 80px 80px",
                background: "var(--bg-primary)",
                borderBottom: "1px solid var(--border-subtle)",
                padding: "0.875rem 1.25rem",
              }}>
                <div style={{ fontSize: "0.8rem", color: "var(--text-gray)", fontWeight: 600 }}>Feature</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-gray)", fontWeight: 600, textAlign: "center" }}>Starter</div>
                <div style={{ fontSize: "0.8rem", color: "var(--accent)", fontWeight: 700, textAlign: "center" }}>Pro</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-gray)", fontWeight: 600, textAlign: "center" }}>Enterprise</div>
              </div>

              {FEATURE_ROWS.map((row, i) => (
                <div
                  key={row.label}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 80px 80px 80px",
                    padding: "0.875rem 1.25rem",
                    borderBottom: i < FEATURE_ROWS.length - 1 ? "1px solid var(--border-subtle)" : "none",
                    background: i % 2 === 0 ? "var(--bg-card)" : "transparent",
                    alignItems: "center",
                  }}
                >
                  <div style={{ fontSize: "0.875rem", color: "var(--text-white)" }}>{row.label}</div>
                  <div style={{ textAlign: "center", fontSize: "1rem" }}>
                    {row.starter ? <span style={{ color: "var(--accent)" }}>✓</span> : <span style={{ color: "var(--text-gray)", opacity: 0.4 }}>—</span>}
                  </div>
                  <div style={{ textAlign: "center", fontSize: "1rem" }}>
                    {row.pro ? <span style={{ color: "var(--accent)" }}>✓</span> : <span style={{ color: "var(--text-gray)", opacity: 0.4 }}>—</span>}
                  </div>
                  <div style={{ textAlign: "center", fontSize: "1rem" }}>
                    {row.enterprise ? <span style={{ color: "var(--accent)" }}>✓</span> : <span style={{ color: "var(--text-gray)", opacity: 0.4 }}>—</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="branche-section">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">FAQ</span>
              <h2 className="section-heading section-heading-center">Häufige Fragen</h2>
            </div>

            <div style={{
              maxWidth: 700,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}>
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className="branche-challenge-card"
                >
                  <h3 style={{ color: "var(--text-white)", fontWeight: 600, fontSize: "1rem", marginBottom: "0.6rem" }}>
                    {faq.q}
                  </h3>
                  <p style={{ color: "var(--text-gray)", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="branche-cta-section">
          <div className="container">
            <div className="branche-cta-inner">
              <h2 className="section-heading">Kostenloses Erstgespräch buchen</h2>
              <p>
                In 30 Minuten zeigen wir Ihnen, welcher Plan zu Ihrem Unternehmen passt — und wie schnell Sie live gehen können.
                Keine versteckten Kosten, kein Verkaufsdruck.
              </p>
              <a href="mailto:info@kiberatung.de" className="btn-accent btn-accent-lg">
                Jetzt kostenloses Gespräch buchen →
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
