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
  title: "KI Beratung für Bildungseinrichtungen | kiberatung.de",
  description:
    "KI-Lösungen für Bildungseinrichtungen: automatische Kursbuchungen, FAQ-Beantwortung und Prüfungsbegleitung. Damit Lehrkräfte mehr Zeit fürs Wesentliche haben.",
  alternates: {
    canonical: "https://kiberatung.de/bildung",
  },
};

const b = getBrancheBySlug("bildung")!;

// FAQPage JSON-LD Schema
function FAQSchema() {
  const faqs = [
    {
      question: "Was kann KI für meine Bildungseinrichtung leisten?",
      answer:
        "KI kann Ihre Bildungseinrichtung in mehreren Bereichen entlasten: automatische Kursbuchungen, Beantwortung häufiger Fragen zu Kursinhalten, personalisierte Prüfungsbegleitung für Lernende und automatisierte Elternkommunikation. Das Ergebnis: Lehrkräfte und Verwaltung werden von Routinearbeit befreit.",
    },
    {
      question: "Wie automatisiert KI Kursbuchungen für Bildungseinrichtungen?",
      answer:
        "KI übernimmt den gesamten Buchungsprozess: Anfrage entgegennehmen, Verfügbarkeit prüfen, Buchung bestätigen, Zahlungserinnerungen senden und Wartelisten verwalten — rund um die Uhr ohne Sekretariatsaufwand.",
    },
    {
      question: "Kann KI Fragen zu Kursinhalten automatisch beantworten?",
      answer:
        "Ja — ein KI-FAQ-Bot auf Basis Ihrer Kursdokumentation beantwortet Fragen zu Inhalten, Voraussetzungen, Terminen und Preisen sofort und individuell — auf Ihrer Website, per WhatsApp oder E-Mail.",
    },
    {
      question: "Wie hilft KI bei der Prüfungsvorbereitung für Lernende?",
      answer:
        "Der KI-Prüfungsassistent erstellt personalisierte Lernpläne, beantwortet Übungsfragen und gibt Feedback zu Lernfortschritten — als digitaler Lernbegleiter zwischen den Stunden.",
    },
    {
      question: "Was kostet KI-Beratung für ein Bildungsinstitut?",
      answer:
        "Das erste Beratungsgespräch ist immer kostenlos. Viele Institute starten mit einem KI-Buchungssystem oder FAQ-Bot ab 300 bis 500 Euro monatlich. Die Amortisation durch gesparte Verwaltungszeit liegt meist unter 3 Monaten.",
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

export default function BildungPage() {
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
              <span>Bildung</span>
            </nav>

            {/* Big icon */}
            <div className="branche-hero-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
            </div>

            <h1 className="branche-title font-display">
              KI BERATUNG FÜR <span className="text-accent">BILDUNG</span>
            </h1>
            <p className="branche-subtitle">{b.heroSubtitle}</p>

            {/* Hero stats */}
            <div className="branche-hero-stats">
              <AnimatedStat value="24/7" label="Kursbuchungen automatisch" />
              <div className="branche-hero-stat-divider" />
              <AnimatedStat value="−80%" label="Routineanfragen manuell" />
              <div className="branche-hero-stat-divider" />
              <AnimatedStat value="+40%" label="Prüfungserfolg mit KI-Begleitung" />
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
              <h2 className="section-heading section-heading-center">Was hält Bildungseinrichtungen zurück?</h2>
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
              <h2 className="section-heading section-heading-center">Was wir für Ihre Bildungseinrichtung tun</h2>
            </div>
              <SolutionGrid loesungen={b.loesungen} />
          </div>
        </section>
        </FadeInSection>

        {/* ── LIVE DEMO ── */}
        <LiveDemoWidget branche="bildung" />

        {/* ── STÄDTE ── */}
        <section className="branche-section branche-challenges-bg">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">Lokale Beratung</span>
              <h2 className="section-heading section-heading-center">
                KI Beratung für Bildung in Ihrer Stadt
              </h2>
              <p className="section-sub section-sub-center" style={{ maxWidth: 560, margin: "0.75rem auto 0" }}>
                Wir beraten Bildungseinrichtungen in ganz Deutschland — mit lokalen Kenntnissen und erprobten Lösungen.
              </p>
            </div>
            <div className="gastro-cities-grid">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/bildung/${city.slug}`}
                  className="gastro-city-card"
                >
                  <span className="gastro-city-name">{city.name}</span>
                  <span className="gastro-city-stat">{city.stats.betriebe} Institute</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL ── */}
        <FadeInSection>
          <section className="branche-section">
            <div className="container">
              <div className="branche-section-head">
                <span className="section-eyebrow">Kundenstimme</span>
                <h2 className="section-heading section-heading-center">Was unsere Kunden sagen</h2>
              </div>
              <div className="branche-testimonial-card">
                <svg className="branche-testimonial-quote-icon" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                  <path d="M10 8C5.6 8 2 11.6 2 16s3.6 8 8 8c1.6 0 3-.4 4.2-1.2L20 24l-1.2-5.8C19.6 17 20 15.6 20 14c0-3.3-4.5-6-10-6zm0 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm12-12c-1.3 0-2.5.3-3.6.8.3.7.6 1.4.8 2.2.9-.3 1.8-.4 2.8-.4 2.2 0 4 1.8 4 4s-1.8 4-4 4c-.3 0-.7 0-1-.1L18 20l1.8-3.6c-.1-.4-.2-.9-.2-1.4 0-.4 0-.8.1-1.2C18.6 12.8 16 10.7 16 8.5c0-1.4.7-2.5 2-3 .6-.2 1.3-.5 2-.5 2.2 0 4 1.8 4 4z" />
                </svg>
                <p className="branche-testimonial-text">{b.testimonial.text}</p>
                <div className="branche-testimonial-author">
                  <span className="branche-testimonial-name">{b.testimonial.name}</span>
                  <span className="branche-testimonial-rolle">{b.testimonial.rolle}</span>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* ── CTA ── */}
        <section className="branche-cta-section">
          <div className="container">
            <div className="branche-cta-inner">
              <h2 className="section-heading">Bereit für KI in Ihrer Bildungseinrichtung?</h2>
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
              {BRANCHEN.filter((x) => x.slug !== "bildung").map((x) => (
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
