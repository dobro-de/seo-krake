import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { cities } from "./[stadt]/cityData";
import { variantenMap, VARIANTEN_SLUGS } from "./[stadt]/variantenData";
import { getBrancheBySlug, BRANCHEN } from "@/lib/branchen";

export const metadata: Metadata = {
  title: "KI Beratung für Dienstleistungsunternehmen | kiberatung.de",
  description:
    "KI-Lösungen für Dienstleister: automatischer Kundensupport, smarte Terminverwaltung und KI-gestütztes Angebotswesen. Kostenlos beraten lassen.",
  alternates: {
    canonical: "https://kiberatung.de/dienstleistungen",
  },
};

const b = getBrancheBySlug("dienstleistungen")!;

// FAQPage JSON-LD Schema
function FAQSchema() {
  const faqs = [
    {
      question: "Welche KI-Lösungen gibt es für Dienstleistungsunternehmen?",
      answer:
        "Für Dienstleistungsunternehmen bieten sich KI-Lösungen in mehreren Bereichen an: automatisierter Kundensupport per Chatbot, intelligentes Terminmanagement mit automatischen Erinnerungen, KI-gestützte Angebotserstellung, automatische Rechnungsstellung und Service-Analytics-Dashboards. Jede Lösung ist modular einsetzbar und auf den spezifischen Bedarf abstimmbar.",
    },
    {
      question: "Wie hilft KI Dienstleistern, mehr Kunden zu betreuen?",
      answer:
        "KI durchbricht das lineare Verhältnis von Kunden zu Personal: Automatisierter Support, Terminmanagement und Angebotserstellung ermöglichen es, deutlich mehr Kunden mit gleichem Team zu betreuen. Dienstleister berichten oft von einer 40–100%igen Kapazitätssteigerung nach KI-Implementierung.",
    },
    {
      question: "Was kostet KI-Beratung für ein Dienstleistungsunternehmen?",
      answer:
        "Die Kosten hängen vom Umfang ab. Viele Dienstleister starten mit einem konkreten Pilot-Projekt — z. B. einem KI-Chatbot oder einer Terminautomatisierung — für 500 bis 2.000 Euro. Das erste Beratungsgespräch ist immer kostenlos.",
    },
    {
      question: "Wie lange dauert die Implementierung einer KI-Lösung?",
      answer:
        "Einfache Lösungen wie KI-Chatbots und Terminbuchungssysteme sind in 1–2 Wochen live. Komplexere Systeme mit tiefer Integration in bestehende Software benötigen 4–8 Wochen. Wir begleiten Sie durch den gesamten Prozess.",
    },
    {
      question: "Ist KI-Automatisierung für Dienstleistungsunternehmen DSGVO-konform?",
      answer:
        "Alle unsere KI-Lösungen laufen auf deutschen Servern und sind vollständig DSGVO-konform. Kundendaten werden niemals für Modelltraining genutzt. Wir stellen alle notwendigen Auftragsverarbeitungsverträge bereit.",
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

export default function DienstleistungenPage() {
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
              <span>Dienstleistungen</span>
            </nav>

            {/* Big icon */}
            <div className="branche-hero-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>

            <h1 className="branche-title font-display">
              KI BERATUNG FÜR <span className="text-accent">DIENSTLEISTUNGEN</span>
            </h1>
            <p className="branche-subtitle">{b.heroSubtitle}</p>

            {/* Hero stats */}
            <div className="branche-hero-stats">
              <div className="branche-hero-stat">
                <span className="branche-hero-stat-val">3,2 Mio+</span>
                <span className="branche-hero-stat-lbl">Dienstleistungsunternehmen in DE</span>
              </div>
              <div className="branche-hero-stat-divider" />
              <div className="branche-hero-stat">
                <span className="branche-hero-stat-val">−45%</span>
                <span className="branche-hero-stat-lbl">No-Shows mit KI-Terminerinnerungen</span>
              </div>
              <div className="branche-hero-stat-divider" />
              <div className="branche-hero-stat">
                <span className="branche-hero-stat-val">+70%</span>
                <span className="branche-hero-stat-lbl">Kapazität durch KI-Automatisierung</span>
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
              <h2 className="section-heading section-heading-center">Was Dienstleister täglich bremst</h2>
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
              <h2 className="section-heading section-heading-center">Was wir für Ihren Dienstleistungsbetrieb tun</h2>
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
                KI Beratung für Dienstleister in Ihrer Stadt
              </h2>
              <p className="section-sub section-sub-center" style={{ maxWidth: 560, margin: "0.75rem auto 0" }}>
                Wir beraten Dienstleistungsunternehmen in ganz Deutschland — mit lokalen Kenntnissen und erprobten Lösungen.
              </p>
            </div>
            <div className="gastro-cities-grid">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/dienstleistungen/${city.slug}`}
                  className="gastro-city-card"
                >
                  <span className="gastro-city-name">{city.name}</span>
                  <span className="gastro-city-stat">{city.stats.betriebe} Unternehmen</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="branche-cta-section">
          <div className="container">
            <div className="branche-cta-inner">
              <h2 className="section-heading">Bereit für KI in Ihrem Dienstleistungsbetrieb?</h2>
              <p>In einem kostenlosen 30-Minuten-Gespräch analysieren wir Ihre größten Hebel und zeigen konkrete Einstiegspunkte.</p>
              <a href="mailto:info@kiberatung.de" className="btn-accent btn-accent-lg">
                Jetzt kostenloses Gespräch buchen →
              </a>
            </div>
          </div>
        </section>

        {/* ── VARIANTEN ── */}
        <section className="branche-section">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">Spezialisierung</span>
              <h2 className="section-heading section-heading-center">
                KI Beratung nach Dienstleistungs-Segment
              </h2>
              <p className="section-sub section-sub-center" style={{ maxWidth: 560, margin: "0.75rem auto 0" }}>
                Jedes Segment hat eigene Herausforderungen — und eigene KI-Lösungen.
              </p>
            </div>
            <div className="gastro-cities-grid">
              {VARIANTEN_SLUGS.map((slug) => {
                const v = variantenMap[slug];
                return (
                  <Link key={slug} href={`/dienstleistungen/${slug}`} className="gastro-city-card">
                    <span className="gastro-city-name">{v.name}</span>
                    <span className="gastro-city-stat">{v.stats.betriebe} Betriebe</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── WEITERE BRANCHEN ── */}
        <section className="branche-section branche-challenges-bg">
          <div className="container">
            <h3 className="branche-more-label">Weitere Branchen</h3>
            <div className="branche-more-pills">
              {BRANCHEN.filter((x) => x.slug !== "dienstleistungen").map((x) => (
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
