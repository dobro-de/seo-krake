'use client';

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const, delay },
  }),
};

export default function LeistungenClient() {
  return (
    <section className="branche-hero" style={{ paddingBottom: "4rem" }}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          style={{ textAlign: "center", marginBottom: "1.25rem" }}
        >
          <span className="section-eyebrow">KI-Lösungen</span>
        </motion.div>

        <motion.h1
          className="branche-title font-display"
          style={{ textAlign: "center" }}
          initial="hidden"
          animate="visible"
          custom={0.1}
          variants={fadeUp}
        >
          UNSERE <span className="text-accent">KI-LÖSUNGEN</span>
          <br />
          FÜR IHR UNTERNEHMEN
        </motion.h1>

        <motion.p
          className="branche-subtitle"
          style={{ textAlign: "center", maxWidth: 620, margin: "1.25rem auto 0" }}
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={fadeUp}
        >
          Von der Telefonanlage bis zur vollständigen Prozessautomatisierung —
          wir implementieren KI-Lösungen, die sofort messbare Ergebnisse liefern.
        </motion.p>

        <motion.div
          className="branche-hero-stats"
          style={{ justifyContent: "center", marginTop: "2.5rem" }}
          initial="hidden"
          animate="visible"
          custom={0.3}
          variants={fadeUp}
        >
          <div className="branche-hero-stat">
            <span className="branche-hero-stat-val">500+</span>
            <span className="branche-hero-stat-lbl">KI-Implementierungen</span>
          </div>
          <div className="branche-hero-stat-divider" />
          <div className="branche-hero-stat">
            <span className="branche-hero-stat-val">−75%</span>
            <span className="branche-hero-stat-lbl">Routineaufwand</span>
          </div>
          <div className="branche-hero-stat-divider" />
          <div className="branche-hero-stat">
            <span className="branche-hero-stat-val">24/7</span>
            <span className="branche-hero-stat-lbl">Verfügbarkeit</span>
          </div>
        </motion.div>

        <motion.div
          className="branche-actions"
          style={{ justifyContent: "center", marginTop: "2rem" }}
          initial="hidden"
          animate="visible"
          custom={0.4}
          variants={fadeUp}
        >
          <a href="#loesungen" className="btn-accent">Lösungen entdecken</a>
          <a href="/termin-buchen" className="btn-ghost">Kostenloses Erstgespräch</a>
        </motion.div>
      </div>
    </section>
  );
}
