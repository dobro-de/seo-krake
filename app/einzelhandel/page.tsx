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
  title: "KI Beratung für Einzelhandel | kiberatung.de",
  description:
    "KI-Lösungen für Einzelhändler: Bestandsoptimierung, personalisierte Kundenansprache und automatisiertes Marketing. Kostenlos beraten lassen.",
  alternates: {
    canonical: "https://kiberatung.de/einzelhandel",
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

        {/* ── VARIANTEN ── */}
        <section className="branche-section">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">Spezialisierung</span>
              <h2 className="section-heading section-heading-center">
                KI Beratung nach Einzelhandels-Segment
              </h2>
              <p className="section-sub section-sub-center" style={{ maxWidth: 560, margin: "0.75rem auto 0" }}>
                Jedes Segment hat eigene Herausforderungen — und eigene KI-Lösungen.
              </p>
            </div>
            <div className="gastro-cities-grid">
              {VARIANTEN_SLUGS.map((slug) => {
                const v = variantenMap[slug];
                return (
                  <Link key={slug} href={`/einzelhandel/${slug}`} className="gastro-city-card">
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
