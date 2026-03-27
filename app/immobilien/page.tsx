import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { cities } from "./[stadt]/cityData";
import { getBrancheBySlug, BRANCHEN } from "@/lib/branchen";
import LiveDemoWidget from "@/components/LiveDemoWidget";
import AnimatedStat from "@/components/ui/AnimatedStat";
import FadeInSection from "@/components/ui/FadeInSection";
import ScrollQuote from "@/components/ScrollQuote";
import ChallengeGrid from "@/components/ChallengeGrid";
import SolutionGrid from "@/components/SolutionGrid";
import ParallaxHero from "@/components/ParallaxHero";

export const metadata: Metadata = {
  title: "KI Beratung für Immobilienmakler & Maklerbüros | kiberatung.de",
  description:
    "KI-Lösungen für Immobilienmakler: Exposé-Generator, Interessenten-Chatbot, automatische Marktanalysen. Mehr Besichtigungen, weniger Verwaltung.",
  alternates: {
    canonical: "https://kiberatung-v2.vercel.app/immobilien",
  },
};

const b = getBrancheBySlug("immobilien")!;

// FAQPage JSON-LD Schema
function FAQSchema() {
  const faqs = [
    {
      question: "Was kann KI für Immobilienmakler leisten?",
      answer:
        "KI unterstützt Immobilienmakler in mehreren Schlüsselbereichen: automatische Exposé-Erstellung aus Fotos und Basisdaten (in ca. 10 Minuten), 24/7-Interessenten-Chatbot für Besichtigungsanfragen, Echtzeit-Marktanalysen für fundierte Preisberatung sowie KI-Objektbewertung anhand von Lage, Ausstattung und Marktdaten. Das Ergebnis: mehr Abschlüsse bei deutlich weniger Verwaltungsaufwand.",
    },
    {
      question: "Wie erstellt KI ein professionelles Immobilien-Exposé?",
      answer:
        "Fotos hochladen, Basisdaten eingeben — fertig. Die KI generiert automatisch einen ansprechenden Beschreibungstext, optimiert für Suchmaschinen und Immobilienportale. Highlights werden hervorgehoben, Lage und Ausstattung professionell beschrieben. Das dauert rund 10 Minuten statt 2–3 Stunden manuell.",
    },
    {
      question: "Kann KI Interessentenanfragen automatisch qualifizieren?",
      answer:
        "Ja. Ein KI-Interessenten-Bot nimmt Anfragen rund um die Uhr entgegen, stellt Qualifizierungsfragen zu Budget, Finanzierung und Kaufzeitplan, beantwortet häufige Fragen zum Objekt und bucht Besichtigungstermine direkt in Ihren Kalender. Sie sehen morgens nur bereits qualifizierte Interessenten mit Terminbestätigung.",
    },
    {
      question: "Wie funktioniert KI-Marktanalyse für Immobilienmakler?",
      answer:
        "KI aggregiert kontinuierlich Angebots- und Nachfragedaten, Transaktionspreise und makroökonomische Faktoren für Ihren lokalen Markt. Als automatischer Wochenbericht oder auf Knopfdruck erhalten Sie präzise Preisempfehlungen, Markttrends und Informationen darüber, welche Objekte sich aktuell besonders schnell oder langsam verkaufen.",
    },
    {
      question: "Was kostet KI-Beratung für ein Maklerbüro?",
      answer:
        "Die Kosten hängen vom Umfang ab. Viele Makler starten mit dem KI-Exposé-Generator oder dem Interessenten-Bot als Pilotprojekt. Das erste Beratungsgespräch ist kostenlos, und wir zeigen konkret, welcher ROI für Ihr Büro realistisch ist — auf Basis Ihrer aktuellen Objektanzahl und Bearbeitungszeiten.",
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

export default function ImmobilienPage() {
  return (
    <>
      <FAQSchema />
      <Nav />
      <main>

        {/* ── HERO ── */}
        <section className="branche-hero" style={{ paddingBottom: "4rem", position: "relative" }}>
          <ParallaxHero />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <nav className="branche-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Startseite</Link>
              <span>›</span>
              <Link href="/branchen">Branchen</Link>
              <span>›</span>
              <span>Immobilien</span>
            </nav>

            {/* Big icon */}
            <div className="branche-hero-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>

            <h1 className="branche-title font-display">
              KI BERATUNG FÜR <span className="text-accent">IMMOBILIEN</span>
            </h1>
            <p className="branche-subtitle">{b.heroSubtitle}</p>

            {/* Hero stats */}
            <div className="branche-hero-stats">
              <AnimatedStat value="85.000+" label="Immobilienmakler in DE" />
              <div className="branche-hero-stat-divider" />
              <AnimatedStat value="10 Min" label="Exposé-Erstellung mit KI" />
              <div className="branche-hero-stat-divider" />
              <AnimatedStat value="3×" label="mehr Besichtigungen pro Woche" />
            </div>

            <div className="branche-actions" style={{ marginTop: "2rem" }}>
              <a href="#loesungen" className="btn-accent">Lösungen ansehen</a>
              <a href="mailto:info@kiberatung.de" className="btn-ghost">Kostenloses Erstgespräch</a>
            </div>
          </div>
        </section>

        {/* ── HERAUSFORDERUNGEN ── */}
        <FadeInSection>
          <section className="branche-section branche-challenges-bg">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">Herausforderungen</span>
              <h2 className="section-heading section-heading-center">Was hält Immobilienmakler zurück?</h2>
            </div>
              <ChallengeGrid challenges={b.challenges} />
          </div>
        </section>
        </FadeInSection>

        {/* ── SCROLL QUOTE ── */}
        <ScrollQuote
          quote={b.caseStudy.zitat}
          author={b.caseStudy.firma}
        />

        {/* ── LÖSUNGEN ── */}
        <FadeInSection>
          <section id="loesungen" className="branche-section">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">KI-Lösungen</span>
              <h2 className="section-heading section-heading-center">Was wir für Ihr Maklerbüro tun</h2>
            </div>
              <SolutionGrid loesungen={b.loesungen} />
          </div>
        </section>
        </FadeInSection>

        {/* ── LIVE DEMO ── */}
        <LiveDemoWidget branche="immobilien" />

        {/* ── STÄDTE ── */}
        <section className="branche-section branche-challenges-bg">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">Lokale Beratung</span>
              <h2 className="section-heading section-heading-center">
                KI Beratung für Immobilienmakler in Ihrer Stadt
              </h2>
              <p className="section-sub section-sub-center" style={{ maxWidth: 560, margin: "0.75rem auto 0" }}>
                Wir beraten Maklerbüros und Immobilienunternehmen in ganz Deutschland — mit lokalen Marktkenntnissen.
              </p>
            </div>
            <div className="gastro-cities-grid">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/immobilien/${city.slug}`}
                  className="gastro-city-card"
                >
                  <span className="gastro-city-name">{city.name}</span>
                  <span className="gastro-city-stat">{city.stats.betriebe} Makler</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="branche-cta-section">
          <div className="container">
            <div className="branche-cta-inner">
              <h2 className="section-heading">Bereit für KI in Ihrem Maklerbüro?</h2>
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
              {BRANCHEN.filter((x) => x.slug !== "immobilien").map((x) => (
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
