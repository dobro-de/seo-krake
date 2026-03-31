import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { cities } from "./[stadt]/cityData";
import { variantenMap, VARIANTEN_SLUGS } from "./[stadt]/variantenData";
import { getBrancheBySlug, BRANCHEN } from "@/lib/branchen";
import LiveDemoWidget from "@/components/LiveDemoWidget";
import AnimatedStat from "@/components/ui/AnimatedStat";
import FadeInSection from "@/components/ui/FadeInSection";
import ScrollQuote from "@/components/ScrollQuote";
import ChallengeGrid from "@/components/ChallengeGrid";
import SolutionGrid from "@/components/SolutionGrid";
import ParallaxHero from "@/components/ParallaxHero";

export const metadata: Metadata = {
  title: "KI Beratung für Logistik & Supply Chain | kiberatung.de",
  description:
    "KI-Lösungen für Logistikunternehmen: Sendungsstatus-Automatisierung, Abholtermin-Koordination, Reklamations-Erstannahme. Kostenlos beraten lassen.",
  alternates: {
    canonical: "https://kiberatung.de/logistik",
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

        {/* ── VARIANTEN ── */}
        <section className="branche-section">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">Spezialisierung</span>
              <h2 className="section-heading section-heading-center">
                KI Beratung nach Logistik-Segment
              </h2>
              <p className="section-sub section-sub-center" style={{ maxWidth: 560, margin: "0.75rem auto 0" }}>
                Jedes Segment hat eigene Herausforderungen — und eigene KI-Lösungen.
              </p>
            </div>
            <div className="gastro-cities-grid">
              {VARIANTEN_SLUGS.map((slug) => {
                const v = variantenMap[slug];
                return (
                  <Link key={slug} href={`/logistik/${slug}`} className="gastro-city-card">
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
