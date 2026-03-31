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
  title: "KI Beratung für Rechtsanwälte & Kanzleien | kiberatung.de",
  description:
    "KI-Lösungen für Rechtsanwälte: Dokumentenanalyse, Mandantenbot, automatisierte Vertragsprüfung. Mehr Zeit für Mandanten, weniger Verwaltung.",
  alternates: {
    canonical: "https://kiberatung.de/rechtsanwaelte",
  },
};

const b = getBrancheBySlug("rechtsanwaelte")!;

// FAQPage JSON-LD Schema
function FAQSchema() {
  const faqs = [
    {
      question: "Was kann KI für Rechtsanwälte leisten?",
      answer:
        "KI unterstützt Rechtsanwälte und Kanzleien in mehreren Bereichen: Dokumentenanalyse (Vertragswerke, Schriftsätze, Akten in Minuten statt Stunden), 24/7-Mandantenbot für Erstanfragen und Terminbuchung, automatische Vertragsprüfung mit Risikoerkennung sowie KI-gestützte Zeiterfassung und Rechnungsstellung. Das Ergebnis: 40 % mehr Mandatskapazität ohne zusätzliches Personal.",
    },
    {
      question: "Wie analysiert KI juristische Dokumente und Verträge?",
      answer:
        "KI-Sprachmodelle, die auf juristische Texte trainiert sind, lesen Vertragswerke, extrahieren relevante Klauseln, identifizieren potenzielle Risiken und erstellen strukturierte Zusammenfassungen — in einem Bruchteil der Zeit eines manuellen Reviews. Kritische Stellen werden markiert und mit Kommentaren versehen.",
    },
    {
      question: "Kann KI den Mandantenakquise-Prozess einer Kanzlei automatisieren?",
      answer:
        "Ja. Ein KI-Mandantenbot nimmt Erstanfragen rund um die Uhr entgegen, stellt Qualifizierungsfragen zum Rechtsgebiet und zur Sachverhaltskomplexität, beantwortet häufige Fragen und bucht Erstberatungsgespräche direkt in den Kalender. Kanzleien berichten von bis zu 60 % mehr qualifizierten Mandantenanfragen ohne Mehraufwand.",
    },
    {
      question: "Ist KI-Einsatz in Kanzleien datenschutzkonform?",
      answer:
        "Ja — alle unsere Lösungen werden auf deutschen Servern betrieben, sind DSGVO-konform und erfüllen die berufsrechtlichen Anforderungen der Bundesrechtsanwaltskammer. Mandantendaten werden ausschließlich in verschlüsselten, isolierten Umgebungen verarbeitet. Kein Training mit Mandantendaten.",
    },
    {
      question: "Was kostet KI-Beratung für eine Anwaltskanzlei?",
      answer:
        "Die Kosten hängen von Kanzleigröße und Einsatzbereich ab. Viele Kanzleien starten mit dem Dokumentenanalyse-Tool oder dem Mandantenbot als Pilotprojekt. Das erste Beratungsgespräch ist kostenlos, und wir zeigen konkret den ROI für Ihre Kanzleigröße und Ihr Rechtsgebiet.",
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

export default function RechtsanwaeltePage() {
  return (
    <>
      <FAQSchema />
      <Nav />
      <main>

        {/* ── CTA ── */}
        <section className="branche-cta-section">
          <div className="container">
            <div className="branche-cta-inner">
              <h2 className="section-heading">Bereit für KI in Ihrer Kanzlei?</h2>
              <p>In einem kostenlosen 30-Minuten-Gespräch analysieren wir Ihre größten Hebel und zeigen konkrete Einstiegspunkte für Ihre Kanzlei.</p>
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
              {BRANCHEN.filter((x) => x.slug !== "rechtsanwaelte").map((x) => (
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
