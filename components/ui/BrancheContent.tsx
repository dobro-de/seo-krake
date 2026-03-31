"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeInSection from "@/components/ui/FadeInSection";
import type { Branche } from "@/lib/branchen";
import { BRANCHEN } from "@/lib/branchen";

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

const CITIES = [
  { slug: "muenchen", name: "München" },
  { slug: "berlin", name: "Berlin" },
  { slug: "hamburg", name: "Hamburg" },
  { slug: "frankfurt", name: "Frankfurt" },
  { slug: "koeln", name: "Köln" },
  { slug: "stuttgart", name: "Stuttgart" },
  { slug: "duesseldorf", name: "Düsseldorf" },
  { slug: "leipzig", name: "Leipzig" },
  { slug: "nuernberg", name: "Nürnberg" },
  { slug: "dresden", name: "Dresden" },
];

const DEDICATED_PAGES = ["gastronomie", "handwerk", "gesundheitswesen", "einzelhandel", "immobilien", "rechtsanwaelte", "logistik", "bildung"];

interface BrancheContentProps {
  b: Branche;
  slug: string;
}

export default function BrancheContent({ b, slug }: BrancheContentProps) {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="branche-hero" style={{ paddingBottom: "4rem" }}>
        <div className="container">
          <nav className="branche-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Startseite</Link><span>›</span>
            <Link href="/branchen">Branchen</Link><span>›</span>
            <span>{b.name}</span>
          </nav>

          {/* KI aktiv badge */}
          <span className="inline-flex items-center gap-1.5 text-xs text-black bg-[#faef70] px-3 py-1 rounded-full font-semibold mb-4">
            ⚡ KI aktiv
          </span>

          {/* Icon with glow */}
          <div className="relative inline-flex justify-center items-center">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full blur-2xl opacity-30"
              style={{ background: b.accentColor, transform: "scale(1.4)" }}
            />
            <div className="branche-hero-icon relative" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <path d={b.svgPath} />
              </svg>
            </div>
          </div>

          <h1 className="branche-title font-display">
            {b.heroTitle.replace(b.name.toUpperCase(), "").trim()}{" "}
            <span className="text-accent">{b.name.toUpperCase()}</span>
          </h1>
          <p className="branche-subtitle">{b.heroSubtitle}</p>

          {/* Stats — direkte Anzeige ohne Animation (keine Zahlen-Counter nötig) */}
          <div className="branche-hero-stats">
            {b.loesungen.slice(0, 3).map((l, i) => (
              <>
                {i > 0 && <div key={`d${i}`} className="branche-hero-stat-divider" />}
                <div key={l.title} className="branche-hero-stat">
                  <span className="branche-hero-stat-val">{l.stat}</span>
                  <span className="branche-hero-stat-lbl">{l.statLabel}</span>
                </div>
              </>
            ))}
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
              <h2 className="section-heading section-heading-center">Was hält {b.name}-Unternehmen zurück?</h2>
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
              <h2 className="section-heading section-heading-center">Was wir für {b.name} tun</h2>
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

      {/* ── CASE STUDY ── */}
      <FadeInSection>
        <section className="branche-section branche-challenges-bg">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">Praxisbeispiel</span>
              <h2 className="section-heading section-heading-center">
                KI in der {b.name} — ein konkretes Beispiel
              </h2>
            </div>
            <div className="branche-casestudy-card">
              <div className="branche-casestudy-firma">{b.caseStudy.firma}</div>
              <div className="branche-casestudy-ergebnis text-accent">{b.caseStudy.ergebnis}</div>
              <blockquote className="branche-casestudy-zitat">
                &ldquo;{b.caseStudy.zitat}&rdquo;
              </blockquote>
              <p className="branche-casestudy-disclaimer">
                * Fiktives Beispiel auf Basis realer Kundenergebnisse. Individuelles Ergebnis kann abweichen.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ── STÄDTE (nur für non-dedicated branches) ── */}
      {!DEDICATED_PAGES.includes(slug) && (
        <FadeInSection>
          <section className="branche-section branche-challenges-bg">
            <div className="container">
              <div className="branche-section-head">
                <span className="section-eyebrow">Lokale Beratung</span>
                <h2 className="section-heading section-heading-center">
                  KI Beratung für {b.name} in Ihrer Stadt
                </h2>
                <p className="section-sub section-sub-center" style={{ maxWidth: 560, margin: "0.75rem auto 0" }}>
                  Wir beraten {b.name}-Unternehmen in ganz Deutschland — mit lokalen Kenntnissen und erprobten Lösungen.
                </p>
              </div>
              <div className="gastro-cities-grid">
                {CITIES.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/${slug}/${city.slug}`}
                    className="gastro-city-card"
                  >
                    <span className="gastro-city-name">{city.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>
      )}

      <FadeInSection>
        <section className="branche-cta-section">
          <div className="container">
            <div className="branche-cta-inner">
              <h2 className="section-heading">Bereit für KI in Ihrer {b.name}?</h2>
              <p>In einem kostenlosen 30-Minuten-Gespräch analysieren wir Ihre größten Hebel und zeigen konkrete Einstiegspunkte.</p>
              <a href="mailto:info@kiberatung.de" className="btn-accent btn-accent-lg">Jetzt kostenloses Gespräch buchen →</a>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="branche-section">
          <div className="container">
            <h3 className="branche-more-label">Weitere Branchen</h3>
            <div className="branche-more-pills">
              {BRANCHEN.filter((x) => x.slug !== slug).map((x) => (
                <Link key={x.slug} href={`/${x.slug}`} className="branche-pill">{x.name}</Link>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>
    </main>
  );
}
