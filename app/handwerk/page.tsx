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
  title: "KI Beratung für Handwerksbetriebe | kiberatung.de",
  description:
    "KI-Lösungen für Handwerker: Angebotserstellung, Terminplanung, Kundenkommunikation automatisieren. Weniger Büro, mehr Baustelle. Kostenlose Erstberatung.",
  alternates: {
    canonical: "https://kiberatung.de/handwerk",
  },
};

const b = getBrancheBySlug("handwerk")!;

export default function HandwerkPage() {
  return (
    <>
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
              <span>Handwerk</span>
            </nav>

            {/* Big icon */}
            <div className="branche-hero-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>

            <h1 className="branche-title font-display">
              KI BERATUNG FÜR <span className="text-accent">HANDWERK</span>
            </h1>
            <p className="branche-subtitle">{b.heroSubtitle}</p>

            {/* Hero stats */}
            <div className="branche-hero-stats">
              <AnimatedStat value="1 Mio+" label="Handwerksbetriebe in Deutschland" />
              <div className="branche-hero-stat-divider" />
              <AnimatedStat value="−78%" label="Angebotszeit mit KI" />
              <div className="branche-hero-stat-divider" />
              <AnimatedStat value="24/7" label="Erreichbar für Ihre Kunden" />
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
                <h2 className="section-heading section-heading-center">Was hält Handwerker zurück?</h2>
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
                <h2 className="section-heading section-heading-center">Was wir für Ihr Handwerk tun</h2>
              </div>
              <SolutionGrid loesungen={b.loesungen} />
            </div>
          </section>
        </FadeInSection>

        {/* ── TYPISCHE PROBLEME IN ZAHLEN ── */}
        <FadeInSection>
          <section className="branche-section branche-challenges-bg">
            <div className="container">
              <div className="branche-section-head">
                <span className="section-eyebrow">Fakten & Zahlen</span>
                <h2 className="section-heading section-heading-center">Typische Probleme in Zahlen</h2>
                <p className="section-sub section-sub-center" style={{ maxWidth: 560, margin: "0.75rem auto 0" }}>
                  Was die Zahlen über den Alltag im Handwerk sagen — und warum KI hier den Unterschied macht.
                </p>
              </div>
              <div className="branche-challenges-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
                <div className="branche-challenge-card" style={{ borderTop: "3px solid var(--accent)" }}>
                  <AnimatedStat value="63%" label="Anfragen außerhalb der Öffnungszeiten" />
                  <p style={{ marginBottom: "0.75rem", marginTop: "0.5rem", fontSize: "0.875rem", color: "var(--text-gray)", lineHeight: 1.65 }}>Über die Hälfte aller Kundenanfragen gehen außerhalb Ihrer Geschäftszeiten ein — und bleiben ohne KI unbeantwortet.</p>
                  <cite style={{ fontSize: "0.75rem", color: "var(--text-gray)", fontStyle: "normal" }}>Quelle: Bitkom 2023</cite>
                </div>
                <div className="branche-challenge-card" style={{ borderTop: "3px solid var(--accent)" }}>
                  <AnimatedStat value="3,5 h" label="Verlust pro Woche durch Telefonbearbeitung" />
                  <p style={{ marginBottom: "0.75rem", marginTop: "0.5rem", fontSize: "0.875rem", color: "var(--text-gray)", lineHeight: 1.65 }}>Handwerksbetriebe verlieren im Schnitt 3,5 Stunden pro Woche allein durch das Entgegennehmen, Weiterleiten und Nachbearbeiten von Telefonanrufen.</p>
                  <cite style={{ fontSize: "0.75rem", color: "var(--text-gray)", fontStyle: "normal" }}>Schätzung auf Basis branchenüblicher Benchmarks</cite>
                </div>
                <div className="branche-challenge-card" style={{ borderTop: "3px solid var(--accent)" }}>
                  <AnimatedStat value="50.000+" label="Betriebe betroffen durch BFSG ab 2025" />
                  <p style={{ marginBottom: "0.75rem", marginTop: "0.5rem", fontSize: "0.875rem", color: "var(--text-gray)", lineHeight: 1.65 }}>Das Barrierefreiheitsstärkungsgesetz (BFSG) tritt ab Juni 2025 in Kraft. Bis zu 50.000 Handwerksbetriebe müssen ihre digitalen Kanäle anpassen.</p>
                  <cite style={{ fontSize: "0.75rem", color: "var(--text-gray)", fontStyle: "normal" }}>Quelle: BFSG (Barrierefreiheitsstärkungsgesetz)</cite>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* ── ARBEITSALLTAG OHNE / MIT KI ── */}
        <section className="branche-section">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">Vorher / Nachher</span>
              <h2 className="section-heading section-heading-center">Typischer Arbeitsalltag — ohne und mit KI</h2>
              <p className="section-sub section-sub-center" style={{ maxWidth: 540, margin: "0.75rem auto 0" }}>
                So verändert sich der Alltag in Ihrem Betrieb, wenn KI die Routineaufgaben übernimmt.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", maxWidth: 860, margin: "0 auto" }} className="handwerk-comparison-grid">
              {/* Ohne KI */}
              <div style={{
                background: "rgba(239, 68, 68, 0.05)",
                border: "1px solid rgba(239, 68, 68, 0.25)",
                borderRadius: "var(--radius-card)",
                padding: "2rem",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                  <span style={{
                    background: "rgba(239, 68, 68, 0.15)",
                    color: "#ef4444",
                    borderRadius: "var(--radius-pill)",
                    padding: "4px 14px",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}>Ohne KI</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                  {[
                    "07:30 — Anrufe aus dem Abend vorher auf Mailbox, einzeln abhören",
                    "08:15 — Angebotserstellung per Hand: Materialpreise recherchieren, Stunden kalkulieren",
                    "10:00 — Unterbrechung auf der Baustelle wegen dringender Kundenanfrage",
                    "12:30 — Büropause: 12 ungelesene E-Mails, 4 Rückrufbitten",
                    "17:00 — Papierkram: Stundenzettel, Lieferscheine, Rechnungsentwürfe",
                    "18:30 — Feierabend? Handy klingelt nochmal — Notfallanfrage",
                  ].map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: "0.6rem", fontSize: "0.875rem", color: "var(--text-gray)", lineHeight: 1.5 }}>
                      <span style={{ color: "#ef4444", flexShrink: 0, marginTop: 2 }}>✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mit KI */}
              <div style={{
                background: "rgba(249, 115, 22, 0.05)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                borderRadius: "var(--radius-card)",
                padding: "2rem",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                  <span style={{
                    background: "rgba(249, 115, 22, 0.15)",
                    color: "var(--accent)",
                    borderRadius: "var(--radius-pill)",
                    padding: "4px 14px",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}>Mit KI</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                  {[
                    "07:30 — KI hat Anfragen nachts aufgenommen & priorisiert, Übersicht wartet fertig",
                    "08:15 — Angebot in 8 Minuten: KI schlägt Positionen, Preise und Texte vor",
                    "10:00 — Baustelle läuft ungestört; KI beantwortet Standardfragen automatisch",
                    "12:30 — Posteingang aufgeräumt: KI hat sortiert, Dringendes markiert",
                    "17:00 — Stundenbericht durch KI vorausgefüllt, nur kurze Kontrolle nötig",
                    "18:30 — Feierabend ohne Unterbrechung; KI nimmt Anrufe entgegen, meldet sich morgen",
                  ].map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: "0.6rem", fontSize: "0.875rem", color: "var(--text-gray)", lineHeight: 1.5 }}>
                      <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── LIVE DEMO ── */}
        <LiveDemoWidget branche="handwerk" />

        {/* ── GEWERKE ── */}
        <section className="branche-section branche-challenges-bg">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">Gewerke</span>
              <h2 className="section-heading section-heading-center">
                KI Beratung nach Gewerk
              </h2>
              <p className="section-sub section-sub-center" style={{ maxWidth: 520, margin: "0.75rem auto 0" }}>
                Jedes Gewerk hat eigene Herausforderungen — und eigene KI-Lösungen.
              </p>
            </div>
            <div className="gastro-cities-grid">
              {VARIANTEN_SLUGS.map((slug) => {
                const v = variantenMap[slug];
                return (
                  <Link key={slug} href={`/handwerk/${slug}`} className="gastro-city-card">
                    <span className="gastro-city-name">{v.name}</span>
                    <span className="gastro-city-stat">{v.stats.betriebe} Betriebe</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── STÄDTE ── */}
        <section className="branche-section">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">Lokale Beratung</span>
              <h2 className="section-heading section-heading-center">
                KI Beratung für Handwerk in Ihrer Stadt
              </h2>
              <p className="section-sub section-sub-center" style={{ maxWidth: 560, margin: "0.75rem auto 0" }}>
                Wir beraten Handwerksbetriebe in ganz Deutschland — mit lokalen Kenntnissen und erprobten Lösungen.
              </p>
            </div>
            <div className="gastro-cities-grid">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/handwerk/${city.slug}`}
                  className="gastro-city-card"
                >
                  <span className="gastro-city-name">{city.name}</span>
                  <span className="gastro-city-stat">{city.stats.betriebe} Betriebe</span>
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
              <h2 className="section-heading">Bereit für KI in Ihrem Handwerksbetrieb?</h2>
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
              {BRANCHEN.filter((x) => x.slug !== "handwerk").map((x) => (
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
