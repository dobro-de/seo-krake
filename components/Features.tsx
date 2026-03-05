const features = [
  {
    icon: "🧭",
    title: "KI-Strategie",
    description:
      "Wir entwickeln eine maßgeschneiderte KI-Roadmap für Ihr Unternehmen — mit klaren Prioritäten, realistischen Zielen und messbaren KPIs. Keine Theorie, sondern ein umsetzbarer Plan.",
    large: true,
  },
  {
    icon: "⚙️",
    title: "Prozessautomatisierung",
    description:
      "Identifizierung und Automatisierung repetitiver Workflows. Steigern Sie die Produktivität Ihres Teams um bis zu 40%.",
  },
  {
    icon: "🔗",
    title: "KI-Integration",
    description:
      "Nahtlose Einbindung von KI-Lösungen in Ihre bestehende IT-Landschaft. Kompatibel mit ERP, CRM und allen gängigen Systemen.",
  },
  {
    icon: "📊",
    title: "Datenanalyse",
    description:
      "Aus Ihren Rohdaten werden belastbare Insights. Predictive Analytics, Dashboards und automatisierte Reportings — datengetrieben entscheiden.",
    large: true,
  },
  {
    icon: "🤖",
    title: "Chatbots & AI Agents",
    description:
      "Intelligente Assistenten für Kundenservice, internen Support und Lead-Generierung — 24/7, mehrsprachig und lernfähig.",
  },
  {
    icon: "🎓",
    title: "KI-Schulungen",
    description:
      "Upskilling Ihrer Mitarbeiter: Von AI-Grundlagen bis zu fortgeschrittenen Prompt-Engineering-Workshops für jede Abteilung.",
  },
];

export default function Features() {
  return (
    <section className="features-section" id="leistungen" aria-labelledby="features-heading">
      <div className="container">
        <div style={{ marginBottom: "0" }}>
          <span className="section-eyebrow">Unsere Leistungen</span>
          <h2 id="features-heading" className="section-heading">
            KI Beratung, die Ergebnisse liefert
          </h2>
          <p className="section-sub">
            Sechs Kernleistungen für Ihre digitale Transformation — von der Strategie
            bis zur vollständigen Implementierung.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Row 1: large + normal */}
          <div className="bento-card bento-card-large fade-up">
            <div className="bento-icon" aria-hidden="true">{features[0].icon}</div>
            <h3>{features[0].title}</h3>
            <p>{features[0].description}</p>
            <div className="bento-glow" aria-hidden="true" />
          </div>
          <div className="bento-card fade-up animate-delay-1">
            <div className="bento-icon" aria-hidden="true">{features[1].icon}</div>
            <h3>{features[1].title}</h3>
            <p>{features[1].description}</p>
          </div>

          {/* Row 2: normal + large */}
          <div className="bento-card fade-up animate-delay-2">
            <div className="bento-icon" aria-hidden="true">{features[2].icon}</div>
            <h3>{features[2].title}</h3>
            <p>{features[2].description}</p>
          </div>
          <div className="bento-card bento-card-large fade-up animate-delay-3">
            <div className="bento-icon" aria-hidden="true">{features[3].icon}</div>
            <h3>{features[3].title}</h3>
            <p>{features[3].description}</p>
            <div className="bento-glow" aria-hidden="true" />
          </div>

          {/* Row 3: two equal */}
          <div className="bento-card fade-up animate-delay-4">
            <div className="bento-icon" aria-hidden="true">{features[4].icon}</div>
            <h3>{features[4].title}</h3>
            <p>{features[4].description}</p>
          </div>
          <div className="bento-card fade-up animate-delay-5">
            <div className="bento-icon" aria-hidden="true">{features[5].icon}</div>
            <h3>{features[5].title}</h3>
            <p>{features[5].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
