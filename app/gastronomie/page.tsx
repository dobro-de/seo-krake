"use client";

import Link from "next/link";
import Nav from "@/components/Nav";
import GastronomieFooter from "@/components/GastronomieFooter";
import { cities } from "./[stadt]/cityData";
import { variantenMap, VARIANTEN_SLUGS } from "./[stadt]/variantenData";
import { getBrancheBySlug, BRANCHEN } from "@/lib/branchen";
import LiveDemoWidget from "@/components/LiveDemoWidget";
import AnimatedStat from "@/components/ui/AnimatedStat";
import FadeInSection from "@/components/ui/FadeInSection";
import { motion } from "framer-motion";

const b = getBrancheBySlug("gastronomie")!;

const challengeContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const challengeItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function GastronomiePage() {
  return (
    <>
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
              <span>Gastronomie</span>
            </nav>

            {/* KI aktiv badge */}
            <span className="inline-flex items-center gap-1.5 text-xs text-black bg-[#faef70] px-3 py-1 rounded-full font-semibold mb-4">
              ⚡ KI aktiv
            </span>

            {/* Big icon with glow */}
            <div className="relative inline-flex justify-center items-center">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full blur-2xl opacity-30 bg-[#faef70]"
                style={{ transform: "scale(1.4)" }}
              />
              <div className="branche-hero-icon relative" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
                  <line x1="6" y1="1" x2="6" y2="4"/>
                  <line x1="10" y1="1" x2="10" y2="4"/>
                  <line x1="14" y1="1" x2="14" y2="4"/>
                </svg>
              </div>
            </div>

            <h1 className="branche-title font-display">
              KI BERATUNG FÜR <span className="text-accent">GASTRONOMIE</span>
            </h1>
            <p className="branche-subtitle">{b.heroSubtitle}</p>

            {/* Hero stats with countUp */}
            <div className="branche-hero-stats">
              <AnimatedStat value="80.000+" label="Gastronomiebetriebe in DE" />
              <div className="branche-hero-stat-divider" />
              <AnimatedStat value="−80%" label="Telefonanfragen mit KI-Bot" />
              <div className="branche-hero-stat-divider" />
              <AnimatedStat value="24/7" label="Erreichbarkeit für Ihre Gäste" />
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
                <h2 className="section-heading section-heading-center">Was hält Gastronomen zurück?</h2>
              </div>
              <motion.div
                className="branche-challenges-grid"
                variants={challengeContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {b.challenges.map((c, i) => (
                  <motion.div key={i} className="branche-challenge-card" variants={challengeItemVariants}>
                    <span className="branche-num">0{i + 1}</span>
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </FadeInSection>

        {/* ── LÖSUNGEN ── */}
        <FadeInSection>
          <section id="loesungen" className="branche-section">
            <div className="container">
              <div className="branche-section-head">
                <span className="section-eyebrow">KI-Lösungen</span>
                <h2 className="section-heading section-heading-center">Was wir für Ihre Gastronomie tun</h2>
              </div>
              <div className="branche-solutions-grid">
                {b.loesungen.map((l, i) => (
                  <motion.div
                    key={i}
                    className="branche-solution-card transition-shadow hover:shadow-[0_8px_24px_rgba(250,239,112,0.15)]"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <div className="branche-sol-icon" dangerouslySetInnerHTML={{ __html: l.icon }} />
                    <h3 className="branche-sol-title">{l.title}</h3>
                    <p className="branche-sol-desc">{l.desc}</p>
                    <div className="branche-sol-stat">
                      <span className="branche-sol-val">{l.stat}</span>
                      <span className="branche-sol-lbl">{l.statLabel}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* ── LIVE DEMO ── */}
        <LiveDemoWidget branche="gastronomie" />

        {/* ── STÄDTE ── */}
        <FadeInSection>
          <section className="branche-section branche-challenges-bg">
            <div className="container">
              <div className="branche-section-head">
                <span className="section-eyebrow">Lokale Beratung</span>
                <h2 className="section-heading section-heading-center">
                  KI Beratung für Gastronomie in Ihrer Stadt
                </h2>
                <p className="section-sub section-sub-center" style={{ maxWidth: 560, margin: "0.75rem auto 0" }}>
                  Wir beraten Gastronomiebetriebe in ganz Deutschland — mit lokalen Kenntnissen und erprobten Lösungen.
                </p>
              </div>
              <div className="gastro-cities-grid">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/gastronomie/${city.slug}`}
                    className="gastro-city-card"
                  >
                    <span className="gastro-city-name">{city.name}</span>
                    <span className="gastro-city-stat">{city.stats.betriebe} Betriebe</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* ── CTA ── */}
        <FadeInSection>
          <section className="branche-cta-section">
            <div className="container">
              <div className="branche-cta-inner">
                <h2 className="section-heading">Bereit für KI in Ihrer Gastronomie?</h2>
                <p>In einem kostenlosen 30-Minuten-Gespräch analysieren wir Ihre größten Hebel und zeigen konkrete Einstiegspunkte.</p>
                <a href="mailto:info@kiberatung.de" className="btn-accent btn-accent-lg">
                  Jetzt kostenloses Gespräch buchen →
                </a>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* ── BETRIEBSTYPEN ── */}
        <FadeInSection>
          <section className="branche-section">
            <div className="container">
              <div className="branche-section-head">
                <span className="section-eyebrow">Betriebstypen</span>
                <h2 className="section-heading section-heading-center">
                  KI Beratung nach Betriebstyp
                </h2>
                <p className="section-sub section-sub-center" style={{ maxWidth: 520, margin: "0.75rem auto 0" }}>
                  Jeder Betriebstyp hat eigene Herausforderungen — und eigene KI-Lösungen.
                </p>
              </div>
              <div className="gastro-cities-grid">
                {VARIANTEN_SLUGS.map((slug) => {
                  const v = variantenMap[slug];
                  return (
                    <Link key={slug} href={`/gastronomie/${slug}`} className="gastro-city-card">
                      <span className="gastro-city-name">{v.name}</span>
                      <span className="gastro-city-stat">{v.stats.betriebe} Betriebe</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* ── WEITERE BRANCHEN ── */}
        <FadeInSection>
          <section className="branche-section branche-challenges-bg">
            <div className="container">
              <h3 className="branche-more-label">Weitere Branchen</h3>
              <div className="branche-more-pills">
                {BRANCHEN.filter((x) => x.slug !== "gastronomie").map((x) => (
                  <Link key={x.slug} href={`/${x.slug}`} className="branche-pill">{x.name}</Link>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>

      </main>
      <GastronomieFooter />
    </>
  );
}
