import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { cities } from "./[stadt]/cityData";
import { getBrancheBySlug, BRANCHEN } from "@/lib/branchen";

export const metadata: Metadata = {
  title: "KI Beratung für Rechtsanwälte & Kanzleien | kiberatung.de",
  description:
    "KI-Lösungen für Rechtsanwälte: Dokumentenanalyse, Mandantenbot, automatisierte Vertragsprüfung. Mehr Zeit für Mandanten, weniger Verwaltung.",
  alternates: {
    canonical: "https://kiberatung-v2.vercel.app/rechtsanwaelte",
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

        {/* ── HERO ── */}
        <section className="branche-hero" style={{ paddingBottom: "4rem" }}>
          <div className="container">
            <nav className="branche-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Startseite</Link>
              <span>›</span>
              <Link href="/branchen">Branchen</Link>
              <span>›</span>
              <span>Rechtsanwälte</span>
            </nav>

            {/* Big icon */}
            <div className="branche-hero-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>

            <h1 className="branche-title font-display">
              KI BERATUNG FÜR <span className="text-accent">RECHTSANWÄLTE</span>
            </h1>
            <p className="branche-subtitle">{b.heroSubtitle}</p>

            {/* Hero stats */}
            <div className="branche-hero-stats">
              <div className="branche-hero-stat">
                <span className="branche-hero-stat-val">165.000+</span>
                <span className="branche-hero-stat-lbl">Zugelassene Anwälte in DE</span>
              </div>
              <div className="branche-hero-stat-divider" />
              <div className="branche-hero-stat">
                <span className="branche-hero-stat-val">−85%</span>
                <span className="branche-hero-stat-lbl">Dokumentenlesezeit mit KI</span>
              </div>
              <div className="branche-hero-stat-divider" />
              <div className="branche-hero-stat">
                <span className="branche-hero-stat-val">+40%</span>
                <span className="branche-hero-stat-lbl">Mandatskapazität ohne Mehrstellen</span>
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
              <h2 className="section-heading section-heading-center">Was hält Rechtsanwälte zurück?</h2>
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
              <h2 className="section-heading section-heading-center">Was wir für Ihre Kanzlei tun</h2>
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
                KI Beratung für Rechtsanwälte in Ihrer Stadt
              </h2>
              <p className="section-sub section-sub-center" style={{ maxWidth: 560, margin: "0.75rem auto 0" }}>
                Wir beraten Kanzleien und Einzelanwälte in ganz Deutschland — mit branchenspezifischen KI-Lösungen.
              </p>
            </div>
            <div className="gastro-cities-grid">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/rechtsanwaelte/${city.slug}`}
                  className="gastro-city-card"
                >
                  <span className="gastro-city-name">{city.name}</span>
                  <span className="gastro-city-stat">{city.stats.betriebe} Kanzleien</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

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
