import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { BRANCHEN } from "@/lib/branchen";
import LeistungenClient from "./LeistungenClient";

export const metadata: Metadata = {
  title: "KI-Lösungen & Leistungen für Unternehmen | kiberatung.de",
  description:
    "Unsere KI-Lösungen: Telefonassistent, Chatbot, Prozessautomatisierung, Buchungssystem, Bewertungsmanagement und mehr. Kostenlose Erstberatung.",
  alternates: {
    canonical: "https://kiberatung.de/leistungen",
  },
};

const LEISTUNGEN = [
  {
    title: "KI-Telefonassistent",
    desc: "24/7 Erreichbarkeit — kein verpasster Anruf mehr. Die KI nimmt ab, versteht das Anliegen und leitet weiter.",
    href: "/ki-telefonassistent",
    stat: "−85%",
    statLabel: "Anrufaufwand",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12 19.79 19.79 0 0 1 1.21 3.59 2 2 0 0 1 3.22 1.42h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 5.9 5.9l1.58-1.58a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.92 16.92z" />
      </svg>
    ),
    isNew: false,
  },
  {
    title: "KI-Chatbot",
    desc: "Beantwortet Kundenfragen rund um die Uhr direkt auf Ihrer Website — ohne manuellen Aufwand.",
    href: "/ki-chatbot",
    stat: "−80%",
    statLabel: "Support-Anfragen",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    isNew: false,
  },
  {
    title: "Prozessautomatisierung",
    desc: "Repetitive Abläufe automatisch erledigen — von der Rechnungsverarbeitung bis zur Datenpflege.",
    href: "/#kontakt",
    stat: "−60%",
    statLabel: "Prozessaufwand",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <polyline points="16 3 21 3 21 8" />
        <line x1="4" y1="20" x2="21" y2="3" />
        <polyline points="21 16 21 21 16 21" />
        <line x1="15" y1="15" x2="21" y2="21" />
      </svg>
    ),
    isNew: false,
  },
  {
    title: "KI-Buchungssystem",
    desc: "Termine automatisch vergeben — per Telefon, Chat oder Website-Widget. Kalender-Sync inklusive.",
    href: "/#kontakt",
    stat: "24/7",
    statLabel: "Buchungen möglich",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    isNew: false,
  },
  {
    title: "KI-Bewertungsmanagement",
    desc: "Google-Bewertungen automatisch beantworten und Ihren Ruf aktiv schützen — in Ihrem Ton.",
    href: "/#kontakt",
    stat: "+42%",
    statLabel: "Bewertungsrate",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    isNew: false,
  },
  {
    title: "Lead-Qualifizierung",
    desc: "KI erfasst Name, Bedarf und Budget — bei Ihnen kommen nur qualifizierte Interessenten an.",
    href: "/#kontakt",
    stat: "3×",
    statLabel: "mehr Abschlüsse",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    isNew: false,
  },
  {
    title: "KI-Content-Erstellung",
    desc: "Blog, Social Media, Newsletter — KI erstellt Inhalte in Ihrem Stil und für Ihre Zielgruppe.",
    href: "/#kontakt",
    stat: "10×",
    statLabel: "mehr Content",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    isNew: true,
  },
  {
    title: "Analytics & Reporting",
    desc: "Dashboards und KI-Berichte die Ihnen täglich zeigen, was wirklich in Ihrem Unternehmen passiert.",
    href: "/#kontakt",
    stat: "Echtzeit",
    statLabel: "Einblicke",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    isNew: false,
  },
];

const TRUST_STATS = [
  { val: "500+", label: "KI-Implementierungen" },
  { val: "−75%", label: "Routineaufwand" },
  { val: "24/7", label: "Verfügbarkeit" },
];

export default function LeistungenPage() {
  const otherBranchen = BRANCHEN.filter((b) =>
    ["gastronomie", "handwerk", "gesundheitswesen", "einzelhandel", "immobilien", "logistik", "bildung", "rechtsanwaelte"].includes(b.slug)
  );

  return (
    <>
      <Nav />
      <main>

        {/* ── HERO ── */}
        <LeistungenClient />

        {/* ── LEISTUNGS-GRID ── */}
        <section className="branche-section branche-challenges-bg" id="loesungen">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">Alle Lösungen</span>
              <h2 className="section-heading section-heading-center">
                Was wir für Sie umsetzen
              </h2>
              <p className="section-sub section-sub-center" style={{ maxWidth: 540, margin: "0.75rem auto 0" }}>
                Von der ersten Automatisierung bis zur vollständigen KI-Infrastruktur — maßgeschneidert für Ihr Unternehmen.
              </p>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.25rem",
              marginTop: "2.5rem",
            }}>
              {LEISTUNGEN.map((l) => (
                <Link
                  key={l.title}
                  href={l.href}
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <div className="branche-solution-card" style={{ height: "100%", position: "relative" }}>
                    {l.isNew && (
                      <span style={{
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                        background: "var(--accent-dim)",
                        border: "1px solid var(--border)",
                        borderRadius: "var(--radius-pill)",
                        padding: "2px 10px",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "var(--accent)",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}>
                        Neu
                      </span>
                    )}
                    <div className="branche-sol-icon" style={{ color: "var(--accent)" }}>
                      {l.icon}
                    </div>
                    <h3 className="branche-sol-title">{l.title}</h3>
                    <p className="branche-sol-desc">{l.desc}</p>
                    <div className="branche-sol-stat">
                      <span className="branche-sol-val">{l.stat}</span>
                      <span className="branche-sol-lbl">{l.statLabel}</span>
                    </div>
                    <div style={{
                      marginTop: "1rem",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                    }}>
                      {l.href.startsWith("/ki-") ? "Mehr erfahren →" : "Termin vereinbaren →"}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRUST STATS ── */}
        <section className="branche-section">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">Zahlen & Fakten</span>
              <h2 className="section-heading section-heading-center">
                Bewährte Ergebnisse
              </h2>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
              marginTop: "2.5rem",
            }}>
              {TRUST_STATS.map((s) => (
                <div key={s.val} className="stat-item">
                  <div className="stat-number">{s.val}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BRANCHEN LINKS ── */}
        <section className="branche-section branche-challenges-bg">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">Branchen</span>
              <h2 className="section-heading section-heading-center">
                KI-Lösungen für Ihre Branche
              </h2>
              <p className="section-sub section-sub-center" style={{ maxWidth: 520, margin: "0.75rem auto 0" }}>
                Jede Branche hat eigene Herausforderungen. Wählen Sie Ihre, um branchenspezifische Lösungen zu sehen.
              </p>
            </div>
            <div className="branche-more-pills" style={{ marginTop: "2rem" }}>
              {otherBranchen.map((b) => (
                <Link key={b.slug} href={`/${b.slug}`} className="branche-pill">
                  {b.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="branche-cta-section">
          <div className="container">
            <div className="branche-cta-inner">
              <h2 className="section-heading">Bereit für Ihre KI-Transformation?</h2>
              <p>In einem kostenlosen 30-Minuten-Gespräch analysieren wir Ihre größten Hebel und zeigen konkrete Einstiegspunkte.</p>
              <Link href="/termin-buchen" className="btn-accent btn-accent-lg">
                Kostenlosen Termin buchen →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
