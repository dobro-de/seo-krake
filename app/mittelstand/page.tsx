import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { cities, varianten } from "./[slug]/slugData";
import { BRANCHEN } from "@/lib/branchen";

export const metadata: Metadata = {
  title: "KI Beratung Mittelstand | kiberatung.de",
  description:
    "KI-Lösungen für den deutschen Mittelstand: Prozessautomatisierung, KI-Datenanalyse, Predictive Maintenance, Dokumentenverarbeitung. Kostenlose Erstberatung.",
  alternates: {
    canonical: "https://kiberatung.de/mittelstand",
  },
};

function FAQSchema() {
  const faqs = [
    {
      question: "Was kann KI für den deutschen Mittelstand leisten?",
      answer:
        "KI automatisiert Routineprozesse wie Rechnungsverarbeitung, Dateneingabe und Dokumentenmanagement. Sie liefert Echtzeit-Analysen für bessere Entscheidungen und erkennt Maschinenausfälle Wochen im Voraus (Predictive Maintenance). Typische Ergebnisse: 67 % weniger Bearbeitungszeit bei Rechnungsprüfung, ROI nach 4–6 Monaten.",
    },
    {
      question: "Wie lange dauert die KI-Einführung im Mittelstand?",
      answer:
        "Ein Pilotprojekt ist in 6–10 Wochen einsatzbereit. Erste messbare Ergebnisse zeigen sich nach 2–3 Monaten. Der vollständige Rollout auf alle Prozesse erfolgt schrittweise über 6–12 Monate.",
    },
    {
      question: "Was kostet KI-Beratung für den Mittelstand?",
      answer:
        "Das erste Beratungsgespräch ist kostenlos. Pilotprojekte starten meist ab 1.200 bis 2.500 Euro monatlich je nach Umfang. Im Gespräch erstellen wir eine individuelle ROI-Kalkulation auf Basis Ihrer Prozesskosten.",
    },
    {
      question: "Brauche ich für KI eine eigene IT-Abteilung?",
      answer:
        "Nein. Wir übernehmen Integration, Implementierung, Schulung und laufenden Betrieb. Sie brauchen nur einen internen Ansprechpartner. KI-Lösungen können auch vollständig als Managed Service betrieben werden.",
    },
    {
      question: "Gibt es Förderprogramme für KI im Mittelstand?",
      answer:
        "Ja — auf Bundes- und Länderebene gibt es zahlreiche Förderprogramme (go-digital, Digitalbonus Bayern, Sachsen Digital u. a.). Wir helfen Ihnen, passende Programme zu identifizieren und den Antrag zu stellen.",
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
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }),
      }}
    />
  );
}

export default function MittelstandPage() {
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
              <span>Mittelstand</span>
            </nav>

            <div className="branche-hero-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                <line x1="12" y1="12" x2="12" y2="16"/>
                <line x1="10" y1="14" x2="14" y2="14"/>
              </svg>
            </div>

            <h1 className="branche-title font-display">
              KI BERATUNG FÜR DEN <span className="text-accent">MITTELSTAND</span>
            </h1>
            <p className="branche-subtitle">
              Prozessautomatisierung, Datenanalyse und Predictive Maintenance für mittelständische Unternehmen in Deutschland. Messbare Ergebnisse, realistischer ROI — ohne riesiges IT-Budget.
            </p>

            <div className="branche-hero-stats">
              <div className="branche-hero-stat">
                <span className="branche-hero-stat-val">−67 %</span>
                <span className="branche-hero-stat-lbl">Bearbeitungszeit Rechnungsprüfung</span>
              </div>
              <div className="branche-hero-stat-divider" />
              <div className="branche-hero-stat">
                <span className="branche-hero-stat-val">4–6 Mo</span>
                <span className="branche-hero-stat-lbl">bis zum Break-Even</span>
              </div>
              <div className="branche-hero-stat-divider" />
              <div className="branche-hero-stat">
                <span className="branche-hero-stat-val">−79 %</span>
                <span className="branche-hero-stat-lbl">ungeplante Maschinenausfälle</span>
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
              <h2 className="section-heading section-heading-center">
                Was den Mittelstand bremst
              </h2>
            </div>
            <div className="branche-challenges-grid">
              {[
                {
                  title: "ERP-Wildwuchs",
                  desc: "Gewachsene Systemlandschaften mit Insellösungen blockieren Datenfluss und Automatisierung.",
                },
                {
                  title: "Manuelle Prozesse",
                  desc: "Rechnungsprüfung, Dateneingabe, Reporting — Fachkräfte stecken in Routinearbeit statt Wertschöpfung.",
                },
                {
                  title: "Fehlende Datenanalyse",
                  desc: "Ohne strukturierte Auswertung werden Entscheidungen nach Bauchgefühl getroffen — zu langsam, zu teuer.",
                },
                {
                  title: "Langsame Entscheidungswege",
                  desc: "Fehlende Echtzeit-Einblicke führen dazu, dass Probleme zu spät erkannt und Chancen verpasst werden.",
                },
              ].map((c, i) => (
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
              <h2 className="section-heading section-heading-center">
                Was wir für Ihren Mittelstand tun
              </h2>
            </div>
            <div className="branche-solutions-grid">
              {[
                {
                  icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
                  title: "Prozessautomatisierung",
                  desc: "Rechnungsverarbeitung, Dateneingabe und Dokumentenmanagement vollautomatisch — Ihre Mitarbeiter arbeiten an Wertschöpfung statt Routinen.",
                  stat: "−67 %",
                  statLabel: "Bearbeitungszeit",
                },
                {
                  icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18M7 16l4-4 4 4 4-8"/></svg>`,
                  title: "KI-Datenanalyse",
                  desc: "KI wertet Ihre Produktions-, Vertriebs- und Finanzdaten automatisch aus und liefert Handlungsempfehlungen in Echtzeit.",
                  stat: "3×",
                  statLabel: "schnellere Entscheidungen",
                },
                {
                  icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`,
                  title: "Predictive Maintenance",
                  desc: "Maschinenausfälle werden 2–4 Wochen im Voraus erkannt. Wartung wird planbar — Produktionsstopps werden Geschichte.",
                  stat: "−79 %",
                  statLabel: "ungeplante Ausfälle",
                },
                {
                  icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
                  title: "Dokumentenverarbeitung",
                  desc: "OCR + KI extrahiert Daten aus Rechnungen, Lieferscheinen und Verträgen — automatisch in Ihr ERP-System.",
                  stat: "−94 %",
                  statLabel: "manuelle Dateneingabe",
                },
                {
                  icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
                  title: "Vision AI Qualitätskontrolle",
                  desc: "100 % der Produktion wird in Echtzeit auf Fehler geprüft — schneller und zuverlässiger als manuelle Sichtkontrolle.",
                  stat: "99,4 %",
                  statLabel: "Erkennungsrate",
                },
                {
                  icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
                  title: "KI-Kundenservice",
                  desc: "24/7-Chatbots beantworten Kundenanfragen automatisch. Komplexe Fälle werden intelligent an Ihre Mitarbeiter eskaliert.",
                  stat: "24/7",
                  statLabel: "Verfügbarkeit",
                },
              ].map((l, i) => (
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

        {/* ── USE CASES ── */}
        <section className="branche-section branche-challenges-bg">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">Use Cases</span>
              <h2 className="section-heading section-heading-center">
                Konkrete KI-Anwendungen im Mittelstand
              </h2>
            </div>
            <div className="branche-challenges-grid">
              {[
                {
                  title: "Automatische Angebotserstellung",
                  desc: "KI extrahiert technische Anforderungen aus Kundenanfragen und generiert vollständige Angebote inkl. Kalkulation — in 2 Minuten statt 4 Stunden.",
                },
                {
                  title: "Qualitätskontrolle mit Vision AI",
                  desc: "Hochauflösende Kameras + KI prüfen 100 % der Produktion in Echtzeit. Fehlerrate sinkt von 3–5 % auf unter 0,5 %.",
                },
                {
                  title: "KI-Forecasting für Produktion",
                  desc: "KI prognostiziert Nachfrage und Kapazitätsbedarf 4–8 Wochen im Voraus — Materialeinkauf und Personaleinsatz werden planbar.",
                },
                {
                  title: "Rechnungsprüfung ohne Aufwand",
                  desc: "KI liest Eingangsrechnungen aus, gleicht sie mit Bestellungen ab und bucht automatisch. 67 % weniger Bearbeitungszeit — ohne Fehler.",
                },
              ].map((c, i) => (
                <div key={i} className="branche-challenge-card">
                  <span className="branche-num">0{i + 1}</span>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ROI SEKTION ── */}
        <section className="branche-section">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">ROI</span>
              <h2 className="section-heading section-heading-center">
                Typische Ergebnisse unserer Mittelstandsprojekte
              </h2>
            </div>
            <div className="branche-solutions-grid">
              {[
                { val: "67 %", lbl: "weniger Bearbeitungszeit bei Rechnungsprüfung" },
                { val: "4–6 Mo", lbl: "bis zum Break-Even bei KI-Pilotprojekten" },
                { val: "3:1", lbl: "durchschnittlicher ROI nach 12 Monaten" },
                { val: "−79 %", lbl: "ungeplante Maschinenausfälle durch Predictive Maintenance" },
              ].map((item, i) => (
                <div key={i} className="branche-solution-card" style={{ textAlign: "center" }}>
                  <span
                    style={{
                      display: "block",
                      fontSize: "clamp(36px, 4.5vw, 56px)",
                      fontWeight: 900,
                      color: "var(--accent)",
                      letterSpacing: "-0.02em",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.val}
                  </span>
                  <p className="branche-sol-desc" style={{ marginTop: 0 }}>{item.lbl}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL ── */}
        <section className="branche-section branche-challenges-bg">
          <div className="container">
            <div
              style={{
                maxWidth: "700px",
                margin: "0 auto",
                textAlign: "center",
                padding: "3rem 2rem",
                border: "1px solid rgba(250,239,112,0.2)",
                borderRadius: "16px",
                background: "rgba(250,239,112,0.03)",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(18px, 2.2vw, 24px)",
                  color: "var(--text-white)",
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  marginBottom: "1.5rem",
                }}
              >
                &ldquo;Wir haben KI mit Skepsis eingeführt — und sind nach 6 Monaten überzeugte Botschafter. Die Rechnungsprüfung lief früher über 3 Mitarbeiter. Heute erledigt KI 94 % automatisch. Die Kollegen arbeiten an echten Projekten.&rdquo;
              </p>
              <div>
                <strong style={{ color: "var(--accent)" }}>Sabine Kessler</strong>
                <span style={{ color: "var(--text-gray)" }}>
                  {" "}— COO, Kessler Maschinenbau GmbH
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── BRANCHEN-VARIANTEN ── */}
        <section className="branche-section">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">Nach Branche</span>
              <h2 className="section-heading section-heading-center">
                KI-Beratung nach Industrie-Sektor
              </h2>
              <p className="section-sub section-sub-center" style={{ maxWidth: 560, margin: "0.75rem auto 0" }}>
                Jede Branche hat eigene Anforderungen. Wählen Sie Ihre Industrie für branchenspezifische KI-Lösungen und Fallstudien.
              </p>
            </div>
            <div className="gastro-cities-grid">
              {varianten.map((v) => (
                <Link
                  key={v.slug}
                  href={`/mittelstand/${v.slug}`}
                  className="gastro-city-card"
                >
                  <span className="gastro-city-name">{v.name}</span>
                  <span className="gastro-city-stat">Branchenlösung</span>
                </Link>
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
                KI Beratung Mittelstand in Ihrer Stadt
              </h2>
              <p className="section-sub section-sub-center" style={{ maxWidth: 560, margin: "0.75rem auto 0" }}>
                Wir beraten mittelständische Unternehmen in ganz Deutschland — mit lokalen Kenntnissen und erprobten Lösungen.
              </p>
            </div>
            <div className="gastro-cities-grid">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/mittelstand/${city.slug}`}
                  className="gastro-city-card"
                >
                  <span className="gastro-city-name">{city.name}</span>
                  <span className="gastro-city-stat">Mittelstand</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="branche-section">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">FAQ</span>
              <h2 className="section-heading section-heading-center">
                Häufige Fragen zu KI im Mittelstand
              </h2>
            </div>
            <div style={{ maxWidth: "760px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                {
                  q: "Was kann KI für den deutschen Mittelstand leisten?",
                  a: "KI automatisiert Routineprozesse wie Rechnungsverarbeitung, Dateneingabe und Dokumentenmanagement. Sie liefert Echtzeit-Analysen für bessere Entscheidungen und erkennt Maschinenausfälle Wochen im Voraus. Typische Ergebnisse: 67 % weniger Bearbeitungszeit, ROI nach 4–6 Monaten.",
                },
                {
                  q: "Wie lange dauert die KI-Einführung im Mittelstand?",
                  a: "Ein Pilotprojekt ist in 6–10 Wochen einsatzbereit. Erste messbare Ergebnisse zeigen sich nach 2–3 Monaten. Der vollständige Rollout auf alle Prozesse erfolgt schrittweise.",
                },
                {
                  q: "Was kostet KI-Beratung für Mittelständler?",
                  a: "Das erste Beratungsgespräch ist kostenlos. Pilotprojekte starten meist ab 1.200 bis 2.500 Euro monatlich je nach Umfang. Im Gespräch erstellen wir eine individuelle ROI-Kalkulation.",
                },
                {
                  q: "Brauche ich für KI eine eigene IT-Abteilung?",
                  a: "Nein. Wir übernehmen Integration, Implementierung, Schulung und laufenden Betrieb. Sie brauchen nur einen internen Ansprechpartner.",
                },
                {
                  q: "Gibt es Förderprogramme für KI im Mittelstand?",
                  a: "Ja — auf Bundes- und Länderebene gibt es zahlreiche Förderprogramme (go-digital, Digitalbonus Bayern, Sachsen Digital u. a.). Wir helfen Ihnen, passende Programme zu identifizieren und den Antrag zu stellen.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: "1.5rem 2rem",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.02)",
                  }}
                >
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-white)", marginBottom: "0.75rem" }}>
                    {item.q}
                  </h3>
                  <p style={{ color: "var(--text-gray)", lineHeight: 1.7 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="branche-cta-section">
          <div className="container">
            <div className="branche-cta-inner">
              <h2 className="section-heading">Bereit für KI in Ihrem Mittelstandsbetrieb?</h2>
              <p>In einem kostenlosen 30-Minuten-Gespräch analysieren wir Ihre größten Hebel und zeigen konkrete Einstiegspunkte mit realistischem ROI.</p>
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
              {BRANCHEN.map((x) => (
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
