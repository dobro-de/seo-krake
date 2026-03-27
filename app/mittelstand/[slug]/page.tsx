import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { slugMap, generateStaticParamsList, cities, varianten, type SlugData } from "./slugData";

export function generateStaticParams() {
  return generateStaticParamsList();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = slugMap[slug];
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `https://kiberatung.de/mittelstand/${slug}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://kiberatung.de/mittelstand/${slug}`,
      siteName: "KI Beratung",
      locale: "de_DE",
      type: "website",
    },
  };
}

function SchemaMarkup({ data }: { data: SlugData }) {
  const schemaObj = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `KI Beratung Mittelstand ${data.name}`,
    serviceType: "KI Beratung",
    provider: {
      "@type": "Organization",
      name: "KI Beratung",
      url: "https://kiberatung.de",
    },
    url: `https://kiberatung.de/mittelstand/${data.slug}`,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      description: "Kostenlose Erstberatung",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

export default async function MittelstandSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = slugMap[slug];
  if (!data) notFound();

  const isStadt = data.type === "stadt";
  const eyebrow = isStadt
    ? `KI Beratung · Mittelstand · ${data.name}`
    : `KI Beratung · Mittelstand · ${data.name}`;

  return (
    <>
      <SchemaMarkup data={data} />
      <Nav />
      <main>

        {/* ── HERO ── */}
        <section
          style={{
            minHeight: "72vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            padding: "140px 24px 80px",
            background: "var(--bg-primary)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "650px",
              height: "420px",
              background:
                "radial-gradient(ellipse at center, rgba(250,239,112,0.07) 0%, transparent 70%)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              textAlign: "center",
              maxWidth: "880px",
              margin: "0 auto",
            }}
          >
            <div className="section-eyebrow" style={{ marginBottom: "24px" }}>
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                  display: "inline-block",
                }}
              />
              {eyebrow}
            </div>

            <h1
              style={{
                fontSize: "clamp(36px, 5.5vw, 72px)",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "var(--text-white)",
                marginBottom: "24px",
              }}
            >
              {data.h1}
            </h1>

            <p
              style={{
                fontSize: "clamp(16px, 2vw, 19px)",
                color: "var(--text-gray)",
                maxWidth: "700px",
                margin: "0 auto 44px",
                lineHeight: 1.75,
              }}
            >
              {data.intro}
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <a href="mailto:info@kiberatung.de" className="btn-accent">
                Kostenloses Erstgespräch →
              </a>
              <a href="#case-study" className="btn-ghost">
                Fallstudie ansehen
              </a>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="branche-section branche-challenges-bg">
          <div className="container">
            <div className="branche-hero-stats" style={{ maxWidth: 800, margin: "0 auto" }}>
              <div className="branche-hero-stat">
                <span className="branche-hero-stat-val">{data.stats.val1}</span>
                <span className="branche-hero-stat-lbl">{data.stats.label1}</span>
              </div>
              <div className="branche-hero-stat-divider" />
              <div className="branche-hero-stat">
                <span className="branche-hero-stat-val">{data.stats.val2}</span>
                <span className="branche-hero-stat-lbl">{data.stats.label2}</span>
              </div>
              <div className="branche-hero-stat-divider" />
              <div className="branche-hero-stat">
                <span className="branche-hero-stat-val">{data.stats.val3}</span>
                <span className="branche-hero-stat-lbl">{data.stats.label3}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── PAIN POINTS ── */}
        <section className="branche-section">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">Herausforderungen</span>
              <h2 className="section-heading section-heading-center">
                Was {isStadt ? `Mittelständler in ${data.name}` : `den Mittelstand in ${data.name}`} bremst
              </h2>
            </div>
            <div className="branche-challenges-grid">
              {[
                {
                  title: "ERP-Wildwuchs",
                  desc: "Gewachsene IT-Landschaft mit Insellösungen — Daten fließen nicht, Prozesse stocken. KI schlägt Brücken zwischen Systemen.",
                },
                {
                  title: "Manuelle Prozesse",
                  desc: "Rechnungsprüfung, Angebotserstellung, Dateneingabe — wertvolle Fachkräfte binden Kapazitäten in Routinearbeit.",
                },
                {
                  title: "Fehlende Datenanalyse",
                  desc: "Entscheidungen werden nach Bauchgefühl getroffen. KI macht Daten auswertbar — für schnellere, bessere Entscheidungen.",
                },
                {
                  title: "Langsame Entscheidungswege",
                  desc: "Ohne aktuelle Kennzahlen dauern Reaktionen zu lange. KI-Dashboards liefern Echtzeit-Einblicke für alle Ebenen.",
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
        <section className="branche-section branche-challenges-bg">
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
                  desc: "Rechnungsverarbeitung, Dateneingabe und Dokumentenmanagement automatisch — Ihre Mitarbeiter arbeiten an Wertschöpfung statt Routinen.",
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
                  icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
                  title: "Predictive Maintenance",
                  desc: "Maschinenausfälle werden 2–4 Wochen im Voraus erkannt. Wartung wird planbar — Produktionsstopps werden Geschichte.",
                  stat: "−79 %",
                  statLabel: "ungeplante Ausfälle",
                },
                {
                  icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
                  title: "Dokumentenverarbeitung",
                  desc: "OCR + KI extrahiert Daten aus Rechnungen, Lieferscheinen und Verträgen automatisch. ERP-Integration in Echtzeit.",
                  stat: "−94 %",
                  statLabel: "manuelle Dateneingabe",
                },
                {
                  icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
                  title: "Vision AI Qualitätskontrolle",
                  desc: "KI-Kameras prüfen 100 % der Produktion in Echtzeit — schneller und zuverlässiger als manuelle Sichtprüfung.",
                  stat: "99,4 %",
                  statLabel: "Erkennungsrate",
                },
                {
                  icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
                  title: "KI-Kundenservice",
                  desc: "24/7-Chatbots beantworten Kundenanfragen automatisch. Komplexe Fälle werden intelligent eskaliert.",
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

        {/* ── CASE STUDY ── */}
        <section id="case-study" className="branche-section">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">Fallstudie</span>
              <h2 className="section-heading section-heading-center">
                {data.caseStudy.firma}
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "2rem",
                maxWidth: "1000px",
                margin: "0 auto",
              }}
            >
              {[
                { label: "Ausgangslage", text: data.caseStudy.challenge },
                { label: "Lösung", text: data.caseStudy.solution },
                {
                  label: "Ergebnisse",
                  text: `${data.caseStudy.result1} · ${data.caseStudy.result2} · ${data.caseStudy.result3}`,
                },
              ].map((block, i) => (
                <div key={i} className="branche-challenge-card">
                  <span className="branche-num">0{i + 1}</span>
                  <h3>{block.label}</h3>
                  <p>{block.text}</p>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: "3rem",
                display: "flex",
                justifyContent: "center",
                gap: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              {[
                { val: data.caseStudy.result1 },
                { val: data.caseStudy.result2 },
                { val: data.caseStudy.result3 },
              ].map((r, i) => (
                <div key={i} className="branche-hero-stat" style={{ textAlign: "center" }}>
                  <span className="branche-hero-stat-val" style={{ fontSize: "clamp(22px, 3vw, 36px)" }}>
                    {r.val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ROI SEKTION ── */}
        <section className="branche-section branche-challenges-bg">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">ROI</span>
              <h2 className="section-heading section-heading-center">
                Typische Ergebnisse im Mittelstand
              </h2>
            </div>
            <div className="branche-solutions-grid">
              {[
                { val: "67 %", lbl: "weniger Bearbeitungszeit bei Rechnungsprüfung" },
                { val: "4–6 Mo", lbl: "bis zum Break-Even bei KI-Projekten" },
                { val: "3:1", lbl: "typischer ROI nach 12 Monaten" },
                { val: "−79 %", lbl: "ungeplante Maschinenausfälle durch Predictive Maintenance" },
              ].map((item, i) => (
                <div key={i} className="branche-solution-card" style={{ textAlign: "center" }}>
                  <span
                    style={{
                      display: "block",
                      fontSize: "clamp(32px, 4vw, 52px)",
                      fontWeight: 900,
                      color: "var(--accent)",
                      letterSpacing: "-0.02em",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.val}
                  </span>
                  <p className="branche-sol-desc" style={{ marginTop: 0 }}>
                    {item.lbl}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL ── */}
        <section className="branche-section">
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

        {/* ── FAQ ── */}
        <section className="branche-section branche-challenges-bg">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">FAQ</span>
              <h2 className="section-heading section-heading-center">
                Häufige Fragen zu KI im Mittelstand
              </h2>
            </div>
            <div style={{ maxWidth: "760px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {data.faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    padding: "1.5rem 2rem",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.02)",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--text-white)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {faq.question}
                  </h3>
                  <p style={{ color: "var(--text-gray)", lineHeight: 1.7 }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STÄDTE / VARIANTEN LINKS ── */}
        <section className="branche-section">
          <div className="container">
            {isStadt ? (
              <>
                <div className="branche-section-head">
                  <span className="section-eyebrow">Branchen-Spezialisierungen</span>
                  <h2 className="section-heading section-heading-center">
                    Mittelstand-Beratung nach Branche
                  </h2>
                </div>
                <div className="gastro-cities-grid">
                  {varianten.map((v) => (
                    <Link key={v.slug} href={`/mittelstand/${v.slug}`} className="gastro-city-card">
                      <span className="gastro-city-name">{v.name}</span>
                      <span className="gastro-city-stat">Branchenlösung</span>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="branche-section-head">
                  <span className="section-eyebrow">Lokale Beratung</span>
                  <h2 className="section-heading section-heading-center">
                    KI Beratung Mittelstand in Ihrer Stadt
                  </h2>
                </div>
                <div className="gastro-cities-grid">
                  {cities.map((c) => (
                    <Link key={c.slug} href={`/mittelstand/${c.slug}`} className="gastro-city-card">
                      <span className="gastro-city-name">{c.name}</span>
                      <span className="gastro-city-stat">Mittelstand</span>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="branche-cta-section">
          <div className="container">
            <div className="branche-cta-inner">
              <h2 className="section-heading">
                Bereit für KI in Ihrem Mittelstandsbetrieb?
              </h2>
              <p>
                In einem kostenlosen 30-Minuten-Gespräch analysieren wir Ihre größten Hebel und zeigen konkrete Einstiegspunkte mit realistischem ROI.
              </p>
              <a href="mailto:info@kiberatung.de" className="btn-accent btn-accent-lg">
                Jetzt kostenloses Gespräch buchen →
              </a>
            </div>
          </div>
        </section>

        {/* ── ZURÜCK ZUR ÜBERSICHT ── */}
        <section className="branche-section branche-challenges-bg">
          <div className="container" style={{ textAlign: "center" }}>
            <Link href="/mittelstand" className="btn-ghost">
              ← Zurück zur Mittelstand-Übersicht
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
