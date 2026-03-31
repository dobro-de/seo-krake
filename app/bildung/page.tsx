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
