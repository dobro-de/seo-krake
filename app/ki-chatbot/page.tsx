'use client';

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const QA: Record<string, string> = {
  "Wann habt ihr geöffnet?":
    "Unsere Öffnungszeiten sind Mo–Fr 9–18 Uhr und Sa 10–14 Uhr. Außerhalb dieser Zeiten können Sie uns gerne eine Nachricht hinterlassen — wir melden uns schnellstmöglich!",
  "Wie kann ich einen Termin buchen?":
    "Einen Termin können Sie direkt über unser Online-Buchungssystem buchen. Klicken Sie einfach auf »Termin buchen« oben auf der Seite — in weniger als 2 Minuten sind Sie fertig.",
  "Was kostet das?":
    "Unsere Preise beginnen ab €149/Monat für den Starter-Plan. Alle Details finden Sie auf unserer Preisseite. Das erste Gespräch ist immer kostenlos und unverbindlich!",
};

const QUESTIONS = Object.keys(QA);

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "FAQ beantworten",
    sub: "24/7",
    desc: "Der Chatbot beantwortet die häufigsten Fragen Ihrer Kunden sofort — rund um die Uhr, auch an Feiertagen.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Termine buchen",
    sub: "automatisch",
    desc: "Kunden buchen Termine direkt im Chat — ohne Telefonat, ohne Wartezeit, ohne manuelle Nacharbeit.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Lead-Qualifizierung",
    sub: "Name, Interesse, Budget",
    desc: "Der Bot erfasst Name, Bedarf und Budget — so kommen bei Ihnen nur qualifizierte Anfragen an.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Übergabe an Mensch",
    sub: "bei komplexen Anfragen",
    desc: "Erkennt der Bot eine komplexe Frage, leitet er nahtlos an Ihr Team weiter — mit vollem Gesprächsverlauf.",
  },
];

const STEPS = [
  { num: "01", title: "Onboarding", desc: "Wir verstehen Ihr Business, Ihre Kunden und häufigsten Fragen in einem 30-min-Gespräch." },
  { num: "02", title: "FAQ eingeben", desc: "Sie geben uns Ihre Top-10-Fragen — wir trainieren den Chatbot auf Ihre Inhalte und Tonalität." },
  { num: "03", title: "Widget-Code erhalten", desc: "Innerhalb von 48h erhalten Sie einen einzeiligen Code-Snippet für Ihre Website." },
  { num: "04", title: "Einbauen & live gehen", desc: "Code einfügen, testen, fertig. Ihr KI-Chatbot ist live — ganz ohne technisches Vorwissen." },
];

const USE_CASES = [
  {
    branche: "Gastronomie",
    icon: "🍽️",
    cases: ["Öffnungszeiten & Speisekarte", "Tisch reservieren", "Allergene & Sonderwünsche"],
    href: "/gastronomie",
  },
  {
    branche: "Handwerk",
    icon: "🔧",
    cases: ["Kostenvoranschlag anfordern", "Notfall-Hotline weiterleiten", "Terminbuchung für Besichtigung"],
    href: "/handwerk",
  },
  {
    branche: "Arztpraxis",
    icon: "🏥",
    cases: ["Terminvergabe 24/7", "Kassenärztl. Zulassung Info", "Rezept-Anfragen weiterleiten"],
    href: "/gesundheitswesen",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie schnell ist der Chatbot einsatzbereit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In der Regel innerhalb von 48 Stunden nach dem Onboarding-Gespräch. Sie erhalten einen fertigen Widget-Code, den Sie auf Ihrer Website einbinden.",
      },
    },
    {
      "@type": "Question",
      name: "Muss ich technische Kenntnisse haben?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein. Sie brauchen nur Ihre häufigsten Fragen und Antworten — wir erledigen den Rest. Das Einbinden dauert weniger als 5 Minuten.",
      },
    },
    {
      "@type": "Question",
      name: "Was passiert bei Fragen, die der Bot nicht kennt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der Chatbot erkennt unbekannte Anfragen und leitet den Nutzer an Ihr Team weiter — per E-Mail, Telefon oder Formular.",
      },
    },
    {
      "@type": "Question",
      name: "Ist der Chatbot DSGVO-konform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Alle Daten werden auf EU-Servern verarbeitet. Wir stellen Ihnen eine datenschutzkonforme Einbindung inklusive Datenschutzhinweis bereit.",
      },
    },
  ],
};

export default function KiChatbotPage() {
  const [activeQ, setActiveQ] = useState<string | null>(null);

  const handleQuestion = (q: string) => {
    setActiveQ((prev) => (prev === q ? null : q));
  };

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
              <Link href="/loesungen">Lösungen</Link>
              <span>›</span>
              <span>KI-Chatbot</span>
            </nav>

            <div className="branche-hero-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>

            <h1 className="branche-title font-display">
              BEANTWORTEN SIE KUNDENFRAGEN AUTOMATISCH —{" "}
              <span className="text-accent">24/7</span>
            </h1>
            <p className="branche-subtitle">
              80% der Website-Besucher stellen die gleichen 10 Fragen. Ihr KI-Chatbot beantwortet sie sofort — damit Ihr Team sich um das Wesentliche kümmern kann.
            </p>

            <div className="branche-hero-stats">
              <div className="branche-hero-stat">
                <span className="branche-hero-stat-val">24/7</span>
                <span className="branche-hero-stat-lbl">Verfügbarkeit</span>
              </div>
              <div className="branche-hero-stat-divider" />
              <div className="branche-hero-stat">
                <span className="branche-hero-stat-val">−80%</span>
                <span className="branche-hero-stat-lbl">Support-Anfragen</span>
              </div>
              <div className="branche-hero-stat-divider" />
              <div className="branche-hero-stat">
                <span className="branche-hero-stat-val">48h</span>
                <span className="branche-hero-stat-lbl">Implementierung</span>
              </div>
            </div>

            <div className="branche-actions" style={{ marginTop: "2rem" }}>
              <a href="#demo" className="btn-accent">Demo-Chatbot ausprobieren</a>
              <a href="mailto:info@kiberatung.de" className="btn-ghost">Kostenloses Erstgespräch</a>
            </div>
          </div>
        </section>

        {/* ── LIVE DEMO ── */}
        <section id="demo" className="branche-section branche-challenges-bg">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">Live-Demo</span>
              <h2 className="section-heading section-heading-center">Probieren Sie es aus</h2>
              <p className="section-sub section-sub-center" style={{ maxWidth: 520, margin: "0.75rem auto 0" }}>
                Klicken Sie auf eine Frage und sehen Sie, wie Ihr Chatbot antworten würde.
              </p>
            </div>

            {/* Chat UI */}
            <div style={{
              maxWidth: 560,
              margin: "0 auto",
              background: "var(--bg-primary)",
              border: "1px solid var(--border-subtle)",
              borderRadius: 16,
              overflow: "hidden",
            }}>
              {/* Chat header */}
              <div style={{
                padding: "1rem 1.25rem",
                borderBottom: "1px solid var(--border-subtle)",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "var(--accent-dim)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--text-white)" }}>KI-Assistent</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--accent)", display: "flex", alignItems: "center", gap: 4 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} />
                    Online
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div style={{ padding: "1.25rem", minHeight: 220, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {/* Bot welcome */}
                <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: "50%",
                    background: "var(--accent-dim)", border: "1px solid var(--border)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <div style={{
                    background: "var(--bg-card)", borderRadius: "0 12px 12px 12px",
                    padding: "0.65rem 1rem", fontSize: "0.875rem", color: "var(--text-white)",
                    maxWidth: "80%", lineHeight: 1.55,
                  }}>
                    Hallo! Ich bin Ihr KI-Assistent. Wie kann ich Ihnen helfen?
                  </div>
                </div>

                {/* User question */}
                {activeQ && (
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div style={{
                      background: "var(--accent)", color: "#fff",
                      borderRadius: "12px 12px 0 12px", padding: "0.65rem 1rem",
                      fontSize: "0.875rem", maxWidth: "80%", lineHeight: 1.55,
                    }}>
                      {activeQ}
                    </div>
                  </div>
                )}

                {/* Bot answer */}
                {activeQ && (
                  <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: "50%",
                      background: "var(--accent-dim)", border: "1px solid var(--border)",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>
                    <div style={{
                      background: "var(--bg-card)", borderRadius: "0 12px 12px 12px",
                      padding: "0.65rem 1rem", fontSize: "0.875rem", color: "var(--text-white)",
                      maxWidth: "80%", lineHeight: 1.55,
                    }}>
                      {QA[activeQ]}
                    </div>
                  </div>
                )}
              </div>

              {/* Quick questions */}
              <div style={{
                padding: "0.75rem 1.25rem 1.25rem",
                borderTop: "1px solid var(--border-subtle)",
              }}>
                <p style={{ fontSize: "0.75rem", color: "var(--text-gray)", marginBottom: "0.5rem" }}>
                  Häufige Fragen — klicken zum Ausprobieren:
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleQuestion(q)}
                      style={{
                        background: activeQ === q ? "var(--accent-dim)" : "transparent",
                        border: `1px solid ${activeQ === q ? "var(--border)" : "var(--border-subtle)"}`,
                        borderRadius: 8,
                        padding: "0.5rem 0.875rem",
                        fontSize: "0.825rem",
                        color: activeQ === q ? "var(--accent)" : "var(--text-gray)",
                        cursor: "pointer",
                        textAlign: "left",
                        transition: "all 0.2s",
                        fontFamily: "inherit",
                      }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WAS DER CHATBOT KANN ── */}
        <section className="branche-section">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">Features</span>
              <h2 className="section-heading section-heading-center">Was der Chatbot kann</h2>
            </div>
            <div className="branche-solutions-grid">
              {FEATURES.map((f, i) => (
                <div key={i} className="branche-solution-card">
                  <div className="branche-sol-icon" style={{ color: "var(--accent)" }}>
                    {f.icon}
                  </div>
                  <h3 className="branche-sol-title">{f.title}</h3>
                  <p className="branche-sol-desc">{f.desc}</p>
                  <div className="branche-sol-stat">
                    <span className="branche-sol-val">{f.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── IMPLEMENTIERUNG IN 48H ── */}
        <section className="branche-section branche-challenges-bg">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">Implementierung</span>
              <h2 className="section-heading section-heading-center">In 48 Stunden live</h2>
              <p className="section-sub section-sub-center" style={{ maxWidth: 500, margin: "0.75rem auto 0" }}>
                Kein langer Einführungsprozess. Kein IT-Projekt. Nur vier einfache Schritte.
              </p>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.5rem",
            }}>
              {STEPS.map((s) => (
                <div key={s.num} className="branche-challenge-card" style={{ position: "relative" }}>
                  <span className="branche-num">{s.num}</span>
                  <h3 style={{ color: "var(--text-white)", fontWeight: 600, marginBottom: "0.5rem" }}>{s.title}</h3>
                  <p style={{ color: "var(--text-gray)", fontSize: "0.875rem", lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VERGLEICH MIT / OHNE CHATBOT ── */}
        <section className="branche-section">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">Vergleich</span>
              <h2 className="section-heading section-heading-center">Mit vs. ohne Chatbot</h2>
            </div>
            <div style={{
              maxWidth: 760,
              margin: "0 auto",
              border: "1px solid var(--border-subtle)",
              borderRadius: 16,
              overflow: "hidden",
            }}>
              {/* Header row */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                background: "var(--bg-card)",
                borderBottom: "1px solid var(--border-subtle)",
              }}>
                <div style={{ padding: "0.875rem 1.25rem", fontSize: "0.8rem", color: "var(--text-gray)", fontWeight: 600 }}>
                  Kriterium
                </div>
                <div style={{
                  padding: "0.875rem 1.25rem", fontSize: "0.875rem",
                  fontWeight: 700, color: "var(--accent)",
                  borderLeft: "1px solid var(--border-subtle)",
                }}>
                  ✓ Mit Chatbot
                </div>
                <div style={{
                  padding: "0.875rem 1.25rem", fontSize: "0.875rem",
                  fontWeight: 700, color: "var(--text-gray)",
                  borderLeft: "1px solid var(--border-subtle)",
                }}>
                  ✗ Ohne Chatbot
                </div>
              </div>

              {[
                {
                  label: "Kundenzufriedenheit",
                  mit: "24/7 erreichbar",
                  ohne: "nur Öffnungszeiten",
                },
                {
                  label: "Mitarbeiterzeit",
                  mit: "vollautomatisch",
                  ohne: "∅ 2h/Tag manuelle Anfragen",
                },
                {
                  label: "Antwortgeschwindigkeit",
                  mit: "< 1 Sekunde",
                  ohne: "∅ 4 Stunden",
                },
              ].map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    borderBottom: i < 2 ? "1px solid var(--border-subtle)" : "none",
                  }}
                >
                  <div style={{ padding: "0.875rem 1.25rem", fontSize: "0.875rem", color: "var(--text-white)", fontWeight: 500 }}>
                    {row.label}
                  </div>
                  <div style={{
                    padding: "0.875rem 1.25rem", fontSize: "0.875rem",
                    color: "var(--accent)", borderLeft: "1px solid var(--border-subtle)",
                  }}>
                    {row.mit}
                  </div>
                  <div style={{
                    padding: "0.875rem 1.25rem", fontSize: "0.875rem",
                    color: "var(--text-gray)", borderLeft: "1px solid var(--border-subtle)",
                  }}>
                    {row.ohne}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BRANCHEN-USE CASES ── */}
        <section className="branche-section branche-challenges-bg">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">Branchen</span>
              <h2 className="section-heading section-heading-center">Für Ihre Branche gemacht</h2>
            </div>
            <div className="branche-challenges-grid">
              {USE_CASES.map((uc) => (
                <Link key={uc.branche} href={uc.href} style={{ textDecoration: "none" }}>
                  <div className="branche-challenge-card" style={{ height: "100%", transition: "border-color 0.2s" }}>
                    <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{uc.icon}</div>
                    <h3 style={{ color: "var(--text-white)", fontWeight: 600, marginBottom: "0.75rem" }}>{uc.branche}</h3>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                      {uc.cases.map((c) => (
                        <li key={c} style={{ fontSize: "0.875rem", color: "var(--text-gray)", display: "flex", alignItems: "flex-start", gap: "0.4rem" }}>
                          <span style={{ color: "var(--accent)", flexShrink: 0 }}>→</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING HINT ── */}
        <section className="branche-section">
          <div className="container" style={{ textAlign: "center" }}>
            <span className="section-eyebrow">Preise</span>
            <h2 className="section-heading section-heading-center">
              Ab <span className="text-accent">€149/Monat</span>
            </h2>
            <p className="section-sub section-sub-center" style={{ marginBottom: "1.75rem" }}>
              Keine versteckten Kosten. Monatlich kündbar. Starter, Professional und Enterprise — transparent auf unserer Preisseite.
            </p>
            <Link href="/preise" className="btn-accent">
              Alle Preise ansehen →
            </Link>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="branche-cta-section">
          <div className="container">
            <div className="branche-cta-inner">
              <h2 className="section-heading">Bereit für Ihren KI-Chatbot?</h2>
              <p>In einem kostenlosen 30-Minuten-Gespräch zeigen wir Ihnen, wie der Chatbot auf Ihrer Website aussieht — live, mit echten Beispielen aus Ihrer Branche.</p>
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
