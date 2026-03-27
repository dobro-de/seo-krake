"use client";

import { motion } from "framer-motion";

const bentoContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const bentoItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

/* ---- Animated Visual: KI Roadmap (for KI-Strategie card) ---- */
const StrategieVisual = () => (
  <div className="card-visual ki-strategy-visual">
    <div className="ki-roadmap">
      <div className="ki-rm-line">
        <span className="ki-rm-progress" />
      </div>
      {/* Phase 1 */}
      <div className="ki-rm-phase ki-rm-p1">
        <div className="ki-rm-node">
          <div className="ki-rm-ring" />
          <div className="ki-rm-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>
        </div>
        <div className="ki-rm-content">
          <span className="ki-rm-title">Analyse</span>
          <span className="ki-rm-desc">2 Wochen</span>
        </div>
      </div>
      <div className="ki-rm-connector" />
      {/* Phase 2 */}
      <div className="ki-rm-phase ki-rm-p2">
        <div className="ki-rm-node">
          <div className="ki-rm-ring" />
          <div className="ki-rm-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polygon points="3 11 22 2 13 21 11 13 3 11"/>
            </svg>
          </div>
        </div>
        <div className="ki-rm-content">
          <span className="ki-rm-title">Strategie</span>
          <span className="ki-rm-desc">1 Woche</span>
        </div>
      </div>
      <div className="ki-rm-connector" />
      {/* Phase 3 */}
      <div className="ki-rm-phase ki-rm-p3">
        <div className="ki-rm-node">
          <div className="ki-rm-ring" />
          <div className="ki-rm-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
          </div>
        </div>
        <div className="ki-rm-content">
          <span className="ki-rm-title">Umsetzung</span>
          <span className="ki-rm-desc">ab 4 Wochen</span>
        </div>
      </div>
      <div className="ki-rm-connector" />
      {/* Phase 4 */}
      <div className="ki-rm-phase ki-rm-p4">
        <div className="ki-rm-node">
          <div className="ki-rm-ring" />
          <div className="ki-rm-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
        </div>
        <div className="ki-rm-content">
          <span className="ki-rm-title">ROI</span>
          <span className="ki-rm-desc">Ø 6 Monate</span>
        </div>
      </div>
    </div>
  </div>
);

/* ---- Animated Visual: Auto Pipeline (for Datenanalyse large card) ---- */
const PipelineVisual = () => (
  <div className="card-visual auto-pipeline">
    <div className="auto-step auto-s1">
      <div className="auto-step-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      </div>
      <span className="auto-step-label">Rohdaten erfassen</span>
      <div className="auto-step-bar"><span className="auto-bar-fill" style={{ animationDelay: "0s" }} /></div>
    </div>
    <div className="auto-connector"><span className="auto-particle" /></div>
    <div className="auto-step auto-s2">
      <div className="auto-step-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
      </div>
      <span className="auto-step-label">KI analysiert Muster</span>
      <div className="auto-step-bar"><span className="auto-bar-fill" style={{ animationDelay: "0.75s" }} /></div>
    </div>
    <div className="auto-connector"><span className="auto-particle" style={{ animationDelay: "0.4s" }} /></div>
    <div className="auto-step auto-s3">
      <div className="auto-step-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      </div>
      <span className="auto-step-label">Insights generieren</span>
      <div className="auto-step-bar"><span className="auto-bar-fill" style={{ animationDelay: "1.5s" }} /></div>
    </div>
    <div className="auto-connector"><span className="auto-particle" style={{ animationDelay: "0.8s" }} /></div>
    <div className="auto-step auto-s4">
      <div className="auto-step-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      </div>
      <span className="auto-step-label">Dashboard bereit</span>
      <div className="auto-step-bar"><span className="auto-bar-fill" style={{ animationDelay: "2.25s" }} /></div>
    </div>
  </div>
);

const features = [
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>,
    title: "KI-Strategie",
    description: "Wir entwickeln eine maßgeschneiderte KI-Roadmap für Ihr Unternehmen — mit klaren Prioritäten, realistischen Zielen und messbaren KPIs.",
    visual: <StrategieVisual />,
    large: true,
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>,
    title: "Prozessautomatisierung",
    description: "Identifizierung und Automatisierung repetitiver Workflows. Steigern Sie die Produktivität Ihres Teams um bis zu 40%.",
    visual: null,
    large: false,
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
    title: "KI-Integration",
    description: "Nahtlose Einbindung von KI-Lösungen in Ihre bestehende IT-Landschaft. Kompatibel mit ERP, CRM und allen gängigen Systemen.",
    visual: null,
    large: false,
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
    title: "Datenanalyse",
    description: "Aus Ihren Rohdaten werden belastbare Insights. Predictive Analytics, Dashboards und automatisierte Reportings — datengetrieben entscheiden.",
    visual: <PipelineVisual />,
    large: true,
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    title: "Chatbots & AI Agents",
    description: "Intelligente Assistenten für Kundenservice, internen Support und Lead-Generierung — 24/7, mehrsprachig und lernfähig.",
    visual: null,
    large: false,
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
    title: "KI-Schulungen",
    description: "Upskilling Ihrer Mitarbeiter: Von AI-Grundlagen bis zu fortgeschrittenen Prompt-Engineering-Workshops für jede Abteilung.",
    visual: null,
    large: false,
  },
];

export default function Features() {
  return (
    <section className="features-section" id="leistungen" aria-labelledby="features-heading">
      <div className="container">
        <div>
          <span className="section-eyebrow">Unsere Leistungen</span>
          <h2 id="features-heading" className="section-heading">
            KI Beratung, die Ergebnisse liefert
          </h2>
          <p className="section-sub">
            Sechs Kernleistungen für Ihre digitale Transformation — von der Strategie bis zur vollständigen Implementierung.
          </p>
        </div>

        <motion.div
          className="bento-grid"
          variants={bentoContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Row 1: span-2 + span-1 */}
          <motion.div className="bento-card bento-card-large" variants={bentoItemVariants}>
            <div className="bento-icon" aria-hidden="true">{features[0].svg}</div>
            <h3>{features[0].title}</h3>
            <p>{features[0].description}</p>
            {features[0].visual}
            <div className="bento-glow" aria-hidden="true" />
          </motion.div>
          <motion.div className="bento-card" variants={bentoItemVariants}>
            <div className="bento-icon" aria-hidden="true">{features[1].svg}</div>
            <h3>{features[1].title}</h3>
            <p>{features[1].description}</p>
          </motion.div>

          {/* Row 2: span-1 + span-2 */}
          <motion.div className="bento-card" variants={bentoItemVariants}>
            <div className="bento-icon" aria-hidden="true">{features[2].svg}</div>
            <h3>{features[2].title}</h3>
            <p>{features[2].description}</p>
          </motion.div>
          <motion.div className="bento-card bento-card-large" variants={bentoItemVariants}>
            <div className="bento-icon" aria-hidden="true">{features[3].svg}</div>
            <h3>{features[3].title}</h3>
            <p>{features[3].description}</p>
            {features[3].visual}
            <div className="bento-glow" aria-hidden="true" />
          </motion.div>

          {/* Row 3: span-1 + span-2 (last card stretches to fill grid) */}
          <motion.div className="bento-card" variants={bentoItemVariants}>
            <div className="bento-icon" aria-hidden="true">{features[4].svg}</div>
            <h3>{features[4].title}</h3>
            <p>{features[4].description}</p>
          </motion.div>
          <motion.div className="bento-card bento-card-large" variants={bentoItemVariants}>
            <div className="bento-icon" aria-hidden="true">{features[5].svg}</div>
            <h3>{features[5].title}</h3>
            <p>{features[5].description}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
