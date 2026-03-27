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
import ScrollQuote from "@/components/ScrollQuote";
import StaggerGrid from "@/components/StaggerGrid";
import { staggerItemVariants } from "@/components/StaggerGrid";
import ParallaxHero from "@/components/ParallaxHero";
import { motion } from "framer-motion";

const b = getBrancheBySlug("gastronomie")!;

const challengeContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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
        <section className="branche-hero" style={{ paddingBottom: "4rem", position: "relative" }}>
          <ParallaxHero />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
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
                <h2 className="section-heading section-heading-center">Was wir für Ihre Gastronomie tun</h2>
              </div>
              <StaggerGrid className="branche-solutions-grid">
                {b.loesungen.map((l, i) => (
                  <motion.div
                    key={i}
                    className="branche-solution-card"
                    variants={staggerItemVariants}
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
              </StaggerGrid>
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
