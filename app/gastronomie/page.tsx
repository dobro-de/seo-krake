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
