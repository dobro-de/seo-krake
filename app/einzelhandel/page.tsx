import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { cities } from "./[stadt]/cityData";
import { getBrancheBySlug, BRANCHEN } from "@/lib/branchen";

export const metadata: Metadata = {
  title: "KI Beratung für Einzelhandel | kiberatung.de",
  description:
    "KI-Lösungen für Einzelhändler: Bestandsoptimierung, personalisierte Kundenansprache und automatisiertes Marketing. Kostenlos beraten lassen.",
  alternates: {
    canonical: "https://kiberatung-v2.vercel.app/einzelhandel",
  },
};

const b = getBrancheBySlug("einzelhandel")!;

// FAQPage JSON-LD Schema
function FAQSchema() {
  const faqs = [
    {
      question: "Was kann KI für meinen Einzelhandelsbetrieb leisten?",
      answer:
        "KI kann Ihren Einzelhandelsbetrieb in mehreren Bereichen unterstützen: Bestandsoptimierung durch Nachfrageprognosen, personalisierte Kundenansprache per E-Mail und Newsletter, automatisiertes Marketing auf Social Media sowie Echtzeit-Analytics für fundierte Sortimentsentscheidungen. Das Ergebnis: mehr Stammkunden, weniger Lagerkosten und höhere Margen.",
    },
    {
      question: "Wie hilft KI bei der Bestandsoptimierung im Einzelhandel?",
      answer:
        "KI analysiert historische Verkaufsdaten, saisonale Muster, lokale Events und Wetterdaten, um präzise Nachfrageprognosen zu erstellen. So bestellen Sie nur, was wirklich gefragt ist — und vermeiden Überbestände sowie kostspielige Restposten.",
    },
    {
      question: "Kann KI auch kleinen Einzelhändlern helfen, gegen Amazon zu bestehen?",
      answer:
        "Ja. Große Online-Plattformen nutzen seit Jahren KI-Personalisierung. Mit unseren Lösungen erhalten auch kleine lokale Händler Zugang zu denselben Technologien — erschwinglich, DSGVO-konform und direkt einsetzbar. Persönliche Kundenansprache kombiniert mit KI ist ein echter Wettbewerbsvorteil.",
    },
    {
      question: "Was kostet KI-Beratung für einen Einzelhandelsbetrieb?",
      answer:
        "Die Kosten hängen vom Umfang ab. Viele Einzelhändler starten mit einem konkreten Pilot-Projekt — z. B. KI-Bestandsoptimierung oder personalisierten Newslettern — für 500 bis 2.000 Euro. Das erste Beratungsgespräch ist immer kostenlos.",
    },
    {
      question: "Wie lange dauert die Implementierung einer KI-Lösung im Einzelhandel?",
      answer:
        "Einfache Lösungen wie KI-Newsletter oder Bewertungsmanagement sind in 1–2 Wochen live. Komplexere Systeme wie vollständige Bestandsoptimierung oder POS-Integrationen benötigen 4–8 Wochen. Wir begleiten Sie durch den gesamten Prozess.",
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

export default function EinzelhandelPage() {
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
              <span>Einzelhandel</span>
            </nav>

            {/* Big icon */}
            <div className="branche-hero-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </div>

            <h1 className="branche-title font-display">
              KI BERATUNG FÜR <span className="text-accent">EINZELHANDEL</span>
            </h1>
            <p className="branche-subtitle">{b.heroSubtitle}</p>

            {/* Hero stats */}
            <div className="branche-hero-stats">
              <div className="branche-hero-stat">
                <span className="branche-hero-stat-val">300.000+</span>
                <span className="branche-hero-stat-lbl">Einzelhandelsbetriebe in DE</span>
              </div>
              <div className="branche-hero-stat-divider" />
              <div className="branche-hero-stat">
                <span className="branche-hero-stat-val">−30%</span>
                <span className="branche-hero-stat-lbl">Lagerkosten mit KI-Prognosen</span>
              </div>
              <div className="branche-hero-stat-divider" />
              <div className="branche-hero-stat">
                <span className="branche-hero-stat-val">+35%</span>
                <span className="branche-hero-stat-lbl">Wiederkaufrate durch Personalisierung</span>
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
              <h2 className="section-heading section-heading-center">Was hält Einzelhändler zurück?</h2>
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
              <h2 className="section-heading section-heading-center">Was wir für Ihren Einzelhandel tun</h2>
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
                KI Beratung für Einzelhandel in Ihrer Stadt
              </h2>
              <p className="section-sub section-sub-center" style={{ maxWidth: 560, margin: "0.75rem auto 0" }}>
                Wir beraten Einzelhandelsbetriebe in ganz Deutschland — mit lokalen Kenntnissen und erprobten Lösungen.
              </p>
            </div>
            <div className="gastro-cities-grid">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/einzelhandel/${city.slug}`}
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
              <h2 className="section-heading">Bereit für KI in Ihrem Einzelhandel?</h2>
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
              {BRANCHEN.filter((x) => x.slug !== "einzelhandel").map((x) => (
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
