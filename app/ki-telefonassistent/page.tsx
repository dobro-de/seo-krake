'use client';

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const, delay },
  }),
};

const STEPS = [
  {
    num: "01",
    title: "Anruf kommt rein — KI nimmt sofort ab",
    desc: "Kein Klingeln ins Leere. Egal ob 3 Uhr nachts oder an einem Feiertag — die KI nimmt innerhalb von 3 Sekunden ab und begrüßt den Anrufer mit Ihrer individuellen Stimme.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12 19.79 19.79 0 0 1 1.21 3.59 2 2 0 0 1 3.22 1.42h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 5.9 5.9l1.58-1.58a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.92 16.92z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "KI versteht das Anliegen — löst es direkt",
    desc: "Die KI erkennt die Absicht des Anrufers: Terminbuchung, Rückruf, FAQ, Bestellung, Beschwerde. Standardanfragen löst sie eigenständig — in der Sprache des Anrufers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Komplexe Fälle — Übergabe mit Zusammenfassung",
    desc: "Braucht ein Anliegen menschliche Entscheidung, leitet die KI weiter — mit einer vollständigen Gesprächszusammenfassung. Sie wissen sofort, worum es geht, bevor Sie antworten.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

const FEATURES = [
  {
    title: "24/7 Erreichbarkeit",
    desc: "Kein Anruf geht verloren — weder nachts noch am Wochenende noch während Urlaubszeiten.",
    stat: "0",
    statLabel: "verpasste Anrufe",
  },
  {
    title: "Mehrsprachig",
    desc: "Deutsch, Englisch, Türkisch und weitere Sprachen — die KI erkennt die Sprache automatisch.",
    stat: "DE/EN/TR",
    statLabel: "und mehr",
  },
  {
    title: "Terminbuchung via Sprache",
    desc: "Anrufer nennen ihren Wunschtermin — die KI prüft Verfügbarkeit und bestätigt direkt im Gespräch.",
    stat: "Echtzeit",
    statLabel: "Kalender-Sync",
  },
  {
    title: "Rückruf-Scheduling",
    desc: "Anrufer können einen Rückruf wünschen. Die KI trägt ihn ein und erinnert Sie automatisch.",
    stat: "100%",
    statLabel: "Nachverfolgung",
  },
];

const USE_CASES = [
  {
    branche: "Gastronomie",
    useCase: "Reservierungen",
    desc: "Gäste rufen an und reservieren direkt — die KI trägt den Tisch ein, bestätigt die Uhrzeit und schickt eine Erinnerungs-SMS.",
    href: "/gastronomie",
    icon: "🍽️",
  },
  {
    branche: "Arztpraxis",
    useCase: "Terminbuchung",
    desc: "Patienten buchen, verschieben oder stornieren Termine telefonisch — ohne Wartezeit in der Warteschleife.",
    href: "/gesundheitswesen",
    icon: "🏥",
  },
  {
    branche: "Handwerk",
    useCase: "Auftragsannahme",
    desc: "Aufträge werden direkt am Telefon aufgenommen — inklusive Adresse, Art der Arbeit und Wunschtermin.",
    href: "/handwerk",
    icon: "🔧",
  },
];

const FAQ_ITEMS = [
  {
    q: "Was passiert, wenn die KI eine Anfrage nicht versteht?",
    a: "Die KI erkennt, wenn sie nicht weiterkommt, und leitet den Anruf nahtlos an Sie weiter — mit einer kurzen Zusammenfassung des bisherigen Gesprächs, damit Sie sofort vorbereitet sind.",
  },
  {
    q: "Wie wird die KI auf mein Unternehmen trainiert?",
    a: "In einem 30-minütigen Onboarding-Gespräch erfassen wir Ihre häufigsten Anfragen, Öffnungszeiten, Preise und Ihren gewünschten Gesprächsstil. Innerhalb von 48 Stunden ist Ihr Assistent live.",
  },
  {
    q: "Ist der KI-Telefonassistent DSGVO-konform?",
    a: "Ja. Alle Gespräche werden auf EU-Servern verarbeitet. Anrufer werden zu Beginn über die KI-Nutzung informiert. Wir stellen Ihnen eine AVV (Auftragsverarbeitungsvertrag) und alle nötigen Datenschutzdokumente bereit.",
  },
  {
    q: "Was kostet der KI-Telefonassistent?",
    a: "Der Einstieg beginnt ab €149/Monat inkl. bis zu 200 Minuten Gesprächszeit. Für größere Volumina gibt es Flatrate-Pakete. Das erste Gespräch zur Bedarfsanalyse ist kostenlos und unverbindlich.",
  },
  {
    q: "Wie lange dauert die Implementierung?",
    a: "Von Onboarding bis Go-Live dauert es in der Regel 2–5 Werktage. Bei komplexeren Anforderungen (CRM-Integration, mehrsprachig) können es bis zu 2 Wochen sein.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function KiTelefonassistentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <main>

        {/* ── HERO ── */}
        <section className="branche-hero" style={{ paddingBottom: "4rem" }}>
          <div className="container">
            <motion.nav
              className="branche-breadcrumb"
              aria-label="Breadcrumb"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Link href="/">Startseite</Link>
              <span>›</span>
              <Link href="/leistungen">Leistungen</Link>
              <span>›</span>
              <span>KI-Telefonassistent</span>
            </motion.nav>

            <motion.div
              className="branche-hero-icon"
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12 19.79 19.79 0 0 1 1.21 3.59 2 2 0 0 1 3.22 1.42h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 5.9 5.9l1.58-1.58a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.92 16.92z" />
              </svg>
            </motion.div>

            <motion.h1
              className="branche-title font-display"
              initial="hidden"
              animate="visible"
              custom={0.15}
              variants={fadeUp}
            >
              VERPASSTE ANRUFE KOSTEN SIE{" "}
              <span className="text-accent">BARES GELD</span>
            </motion.h1>

            <motion.p
              className="branche-subtitle"
              initial="hidden"
              animate="visible"
              custom={0.25}
              variants={fadeUp}
            >
              Jeder verpasste Anruf ist ein verlorener Auftrag. Ihr KI-Telefonassistent nimmt jeden Anruf sofort entgegen — 24/7, mehrsprachig und mit menschlicher Gesprächsführung.
            </motion.p>

            <motion.div
              className="branche-hero-stats"
              initial="hidden"
              animate="visible"
              custom={0.35}
              variants={fadeUp}
            >
              <div className="branche-hero-stat">
                <span className="branche-hero-stat-val">24/7</span>
                <span className="branche-hero-stat-lbl">Erreichbarkeit</span>
              </div>
              <div className="branche-hero-stat-divider" />
              <div className="branche-hero-stat">
                <span className="branche-hero-stat-val">−85%</span>
                <span className="branche-hero-stat-lbl">Anrufaufwand</span>
              </div>
              <div className="branche-hero-stat-divider" />
              <div className="branche-hero-stat">
                <span className="branche-hero-stat-val">&lt;3s</span>
                <span className="branche-hero-stat-lbl">Reaktionszeit</span>
              </div>
            </motion.div>

            <motion.div
              className="branche-actions"
              style={{ marginTop: "2rem" }}
              initial="hidden"
              animate="visible"
              custom={0.45}
              variants={fadeUp}
            >
              <Link href="/termin-buchen" className="btn-accent">Kostenloses Erstgespräch</Link>
              <a href="#wie-es-funktioniert" className="btn-ghost">Wie es funktioniert</a>
            </motion.div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section id="wie-es-funktioniert" className="prozess-section">
          <div className="container">
            <div className="branche-section-head" style={{ textAlign: "center" }}>
              <span className="section-eyebrow">So funktioniert&apos;s</span>
              <h2 className="section-heading section-heading-center">
                Von Anruf bis Lösung — in Sekunden
              </h2>
              <p className="section-sub section-sub-center" style={{ maxWidth: 520, margin: "0.75rem auto 0" }}>
                Kein kompliziertes Menü, kein frustriertes Warteschleifen-Erlebnis — nur natürliche Gespräche.
              </p>
            </div>

            <div className="prozess-timeline" style={{ marginTop: "3rem" }}>
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.num}
                  className="prozess-step"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  custom={i * 0.15}
                  variants={fadeUp}
                >
                  <div className="prozess-num">
                    <span className="prozess-num-big">{step.num}</span>
                  </div>
                  <div className="prozess-icon">{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="branche-section branche-challenges-bg">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">Features</span>
              <h2 className="section-heading section-heading-center">
                Alles was Ihr Telefon braucht
              </h2>
            </div>
            <div className="branche-solutions-grid" style={{ marginTop: "2.5rem" }}>
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f.title}
                  className="branche-solution-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={i * 0.1}
                  variants={fadeUp}
                >
                  <h3 className="branche-sol-title">{f.title}</h3>
                  <p className="branche-sol-desc">{f.desc}</p>
                  <div className="branche-sol-stat">
                    <span className="branche-sol-val">{f.stat}</span>
                    <span className="branche-sol-lbl">{f.statLabel}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── USE CASES ── */}
        <section className="branche-section">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">Anwendungsfälle</span>
              <h2 className="section-heading section-heading-center">
                Für Ihre Branche gemacht
              </h2>
            </div>
            <div className="branche-challenges-grid" style={{ marginTop: "2.5rem" }}>
              {USE_CASES.map((uc, i) => (
                <motion.div
                  key={uc.branche}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={i * 0.12}
                  variants={fadeUp}
                >
                  <Link href={uc.href} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                    <div className="branche-challenge-card" style={{ height: "100%" }}>
                      <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{uc.icon}</div>
                      <span className="branche-num" style={{ marginBottom: "0.5rem", display: "block" }}>
                        {uc.useCase}
                      </span>
                      <h3 style={{ color: "var(--text-white)", fontWeight: 700, marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                        {uc.branche}
                      </h3>
                      <p style={{ color: "var(--text-gray)", fontSize: "0.875rem", lineHeight: 1.65 }}>
                        {uc.desc}
                      </p>
                      <div style={{ marginTop: "1rem", fontSize: "0.8rem", fontWeight: 600, color: "var(--accent)" }}>
                        Mehr erfahren →
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="faq-section">
          <div className="container">
            <div className="branche-section-head" style={{ textAlign: "center" }}>
              <span className="section-eyebrow">FAQ</span>
              <h2 className="section-heading section-heading-center">
                Häufige Fragen
              </h2>
            </div>
            <div className="faq-list">
              {FAQ_ITEMS.map((item, i) => (
                <div
                  key={i}
                  className={`faq-item${openFaq === i ? " is-open" : ""}`}
                >
                  <button
                    className="faq-question"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    {item.q}
                    <svg
                      className="faq-chevron"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">{item.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="branche-cta-section">
          <div className="container">
            <div className="branche-cta-inner">
              <h2 className="section-heading">Kein verpasster Anruf mehr</h2>
              <p>
                In einem kostenlosen 30-Minuten-Gespräch zeigen wir Ihnen, wie Ihr persönlicher
                KI-Telefonassistent klingt — live, mit echten Beispielen aus Ihrer Branche.
              </p>
              <Link href="/termin-buchen" className="btn-accent btn-accent-lg">
                Kostenloses Erstgespräch buchen →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
