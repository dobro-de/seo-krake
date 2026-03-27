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
  title: "KI Beratung für Arztpraxen & Gesundheitswesen | kiberatung.de",
  description:
    "KI-Lösungen für Arztpraxen, Kliniken und Gesundheitsdienstleister: Terminmanagement, Dokumentation, Patientenkommunikation — DSGVO-konform.",
  alternates: {
    canonical: "https://kiberatung.de/gesundheitswesen",
  },
};

const b = getBrancheBySlug("gesundheitswesen")!;

export default function GesundheitswesenPage() {
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
              <span>Gesundheitswesen</span>
            </nav>

            <div className="branche-hero-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>

            <h1 className="branche-title font-display">
              KI BERATUNG FÜR DAS <span className="text-accent">GESUNDHEITSWESEN</span>
            </h1>
            <p className="branche-subtitle">{b.heroSubtitle}</p>

            <div className="branche-hero-stats">
              <AnimatedStat value="400.000+" label="Arztpraxen & Kliniken in Deutschland" />
              <div className="branche-hero-stat-divider" />
              <AnimatedStat value="−40%" label="No-Show-Rate mit KI-Recall" />
              <div className="branche-hero-stat-divider" />
              <AnimatedStat value="2–3h" label="täglich eingespart durch KI-Doku" />
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
                <h2 className="section-heading section-heading-center">Was bremst das Gesundheitswesen?</h2>
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
                <h2 className="section-heading section-heading-center">Was wir für Ihre Praxis tun</h2>
              </div>
              <SolutionGrid loesungen={b.loesungen} />
            </div>
          </section>
        </FadeInSection>

        {/* ── LIVE DEMO ── */}
        <LiveDemoWidget branche="gesundheitswesen" />

        {/* ── FACHRICHTUNGEN ── */}
        <section className="branche-section branche-challenges-bg">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">Fachrichtungen</span>
              <h2 className="section-heading section-heading-center">
                KI Beratung nach Fachrichtung
              </h2>
              <p className="section-sub section-sub-center" style={{ maxWidth: 520, margin: "0.75rem auto 0" }}>
                Jede Fachrichtung hat eigene Workflows — und eigene KI-Lösungen.
              </p>
            </div>
            <div className="gastro-cities-grid">
              {VARIANTEN_SLUGS.map((slug) => {
                const v = variantenMap[slug];
                return (
                  <Link key={slug} href={`/gesundheitswesen/${slug}`} className="gastro-city-card">
                    <span className="gastro-city-name">{v.name}</span>
                    <span className="gastro-city-stat">{v.stats.betriebe} Einrichtungen</span>
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
                KI Beratung für Praxen in Ihrer Stadt
              </h2>
              <p className="section-sub section-sub-center" style={{ maxWidth: 560, margin: "0.75rem auto 0" }}>
                Wir beraten Arztpraxen und Kliniken in ganz Deutschland — DSGVO-konform und praxisnah.
              </p>
            </div>
            <div className="gastro-cities-grid">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/gesundheitswesen/${city.slug}`}
                  className="gastro-city-card"
                >
                  <span className="gastro-city-name">{city.name}</span>
                  <span className="gastro-city-stat">{city.stats.betriebe} Ärzte</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="branche-cta-section">
          <div className="container">
            <div className="branche-cta-inner">
              <h2 className="section-heading">Bereit für KI in Ihrer Praxis?</h2>
              <p>In einem kostenlosen 30-Minuten-Gespräch analysieren wir Ihre größten Hebel — DSGVO-konform, unverbindlich und praxisnah.</p>
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
              {BRANCHEN.filter((x) => x.slug !== "gesundheitswesen").map((x) => (
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
