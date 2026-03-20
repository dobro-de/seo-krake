import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { cities } from "./[stadt]/cityData";
import { getBrancheBySlug, BRANCHEN } from "@/lib/branchen";

export const metadata: Metadata = {
  title: "KI Beratung für Logistik & Supply Chain | kiberatung.de",
  description:
    "KI-Lösungen für Logistikunternehmen: Sendungsstatus-Automatisierung, Abholtermin-Koordination, Reklamations-Erstannahme. Kostenlos beraten lassen.",
  alternates: {
    canonical: "https://kiberatung-v2.vercel.app/logistik",
  },
};

const b = getBrancheBySlug("logistik")!;

// FAQPage JSON-LD Schema
function FAQSchema() {
  const faqs = [
    {
      question: "Was kann KI für mein Logistikunternehmen leisten?",
      answer:
        "KI kann Ihr Logistikunternehmen in mehreren Bereichen entlasten: Sendungsanfragen werden automatisch beantwortet, Abholtermine koordiniert, Reklamationen strukturiert aufgenommen und Routen optimiert. Das Ergebnis: Disponenten werden von Routinearbeit befreit und können sich auf komplexe Aufgaben konzentrieren.",
    },
    {
      question: "Wie beantwortet KI Sendungsstatusanfragen automatisch?",
      answer:
        "KI verbindet sich mit Ihrem TMS oder Tracking-System und beantwortet Sendungsstatusanfragen sofort per WhatsApp, Website-Chat oder E-Mail — ohne Einbindung eines Disponenten. Kunden erhalten in Sekunden eine Antwort, rund um die Uhr.",
    },
    {
      question: "Kann KI Abholtermine automatisch koordinieren?",
      answer:
        "Ja — KI prüft Zeitfenster, Fahrzeugverfügbarkeit und Laderampenkapazitäten und koordiniert Abholtermine vollautomatisch. Kunden erhalten Bestätigungen und Erinnerungen per SMS oder E-Mail — ohne manuellen Aufwand.",
    },
    {
      question: "Wie hilft KI beim Reklamationsmanagement in der Logistik?",
      answer:
        "KI nimmt Reklamationen strukturiert auf, kategorisiert sie nach Art (Beschädigung, Verlust, Verzögerung) und leitet sie priorisiert an den zuständigen Sachbearbeiter weiter. Kunden erhalten sofort eine Eingangsbestätigung — auch außerhalb der Bürozeiten.",
    },
    {
      question: "Was kostet KI-Beratung für ein Logistikunternehmen?",
      answer:
        "Das erste Beratungsgespräch ist immer kostenlos. Viele Logistiker starten mit einem konkreten Pilotprojekt — z. B. einem Sendungsstatus-Bot — ab 500 bis 1.500 Euro monatlich. Das zahlt sich durch Disponenten-Entlastung meist in wenigen Monaten aus.",
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }),
      }}
    />
  );
}

export default function LogistikPage() {
  return (
    <>
      <FAQSchema />
      <Nav />
      <main>

        {/* ── HERO ── */}
        <section className="branche-hero" style={{ paddingBottom: "4rem" }}>
          <div className="container">
            <nav className="branche-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Startseite</Link>
              <span>›</span>
              <Link href="/branchen">Branchen</Link>
              <span>›</span>
              <span>Logistik</span>
            </nav>

            {/* Big icon */}
            <div className="branche-hero-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z"/>
                <circle cx="5.5" cy="18.5" r="2.5"/>
                <circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
            </div>

            <h1 className="branche-title font-display">
              KI BERATUNG FÜR <span className="text-accent">LOGISTIK</span>
            </h1>
            <p className="branche-subtitle">{b.heroSubtitle}</p>

            {/* Hero stats */}
            <div className="branche-hero-stats">
              <div className="branche-hero-stat">
                <span className="branche-hero-stat-val">−70%</span>
                <span className="branche-hero-stat-lbl">Sendungsanfragen manuell</span>
              </div>
              <div className="branche-hero-stat-divider" />
              <div className="branche-hero-stat">
                <span className="branche-hero-stat-val">24/7</span>
                <span className="branche-hero-stat-lbl">Statusauskünfte automatisch</span>
              </div>
              <div className="branche-hero-stat-divider" />
              <div className="branche-hero-stat">
                <span className="branche-hero-stat-val">−50%</span>
                <span className="branche-hero-stat-lbl">Fahrzeugausfälle durch Predictive Maintenance</span>
              </div>
            </div>

            <div className="branche-actions" style={{ marginTop: "2rem" }}>
              <a href="#loesungen" className="btn-accent">Lösungen ansehen</a>
              <a href="mailto:info@kiberatung.de" className="btn-ghost">Kostenloses Erstgespräch</a>
            </div>
          </div>
        </section>

        {/* ── HERAUSFORDERUNGEN ── */}
        <section className="branche-section branche-challenges-bg">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">Herausforderungen</span>
              <h2 className="section-heading section-heading-center">Was hält Logistikunternehmen zurück?</h2>
            </div>
            <div className="branche-challenges-grid">
              {b.challenges.map((c, i) => (
                <div key={i} className="branche-challenge-card">
                  <span className="branche-num">0{i + 1}</span>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LÖSUNGEN ── */}
        <section id="loesungen" className="branche-section">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">KI-Lösungen</span>
              <h2 className="section-heading section-heading-center">Was wir für Ihre Logistik tun</h2>
            </div>
            <div className="branche-solutions-grid">
              {b.loesungen.map((l, i) => (
                <div key={i} className="branche-solution-card">
                  <div className="branche-sol-icon" dangerouslySetInnerHTML={{ __html: l.icon }} />
                  <h3 className="branche-sol-title">{l.title}</h3>
                  <p className="branche-sol-desc">{l.desc}</p>
                  <div className="branche-sol-stat">
                    <span className="branche-sol-val">{l.stat}</span>
                    <span className="branche-sol-lbl">{l.statLabel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STÄDTE ── */}
        <section className="branche-section branche-challenges-bg">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">Lokale Beratung</span>
              <h2 className="section-heading section-heading-center">
                KI Beratung für Logistik in Ihrer Stadt
              </h2>
              <p className="section-sub section-sub-center" style={{ maxWidth: 560, margin: "0.75rem auto 0" }}>
                Wir beraten Logistikunternehmen in ganz Deutschland — mit lokalen Kenntnissen und erprobten Lösungen.
              </p>
            </div>
            <div className="gastro-cities-grid">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/logistik/${city.slug}`}
                  className="gastro-city-card"
                >
                  <span className="gastro-city-name">{city.name}</span>
                  <span className="gastro-city-stat">{city.stats.betriebe} Betriebe</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="branche-cta-section">
          <div className="container">
            <div className="branche-cta-inner">
              <h2 className="section-heading">Bereit für KI in Ihrer Logistik?</h2>
              <p>In einem kostenlosen 30-Minuten-Gespräch analysieren wir Ihre größten Hebel und zeigen konkrete Einstiegspunkte.</p>
              <a href="mailto:info@kiberatung.de" className="btn-accent btn-accent-lg">
                Jetzt kostenloses Gespräch buchen →
              </a>
            </div>
          </div>
        </section>

        {/* ── WEITERE BRANCHEN ── */}
        <section className="branche-section branche-challenges-bg">
          <div className="container">
            <h3 className="branche-more-label">Weitere Branchen</h3>
            <div className="branche-more-pills">
              {BRANCHEN.filter((x) => x.slug !== "logistik").map((x) => (
                <Link key={x.slug} href={`/${x.slug}`} className="branche-pill">{x.name}</Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
