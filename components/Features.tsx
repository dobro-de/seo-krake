const features = [
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>,
    title: "KI-Strategie",
    description: "Wir entwickeln eine maßgeschneiderte KI-Roadmap für Ihr Unternehmen — mit klaren Prioritäten, realistischen Zielen und messbaren KPIs. Keine Theorie, sondern ein umsetzbarer Plan.",
    large: true,
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>,
    title: "Prozessautomatisierung",
    description: "Identifizierung und Automatisierung repetitiver Workflows. Steigern Sie die Produktivität Ihres Teams um bis zu 40%.",
    large: false,
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
    title: "KI-Integration",
    description: "Nahtlose Einbindung von KI-Lösungen in Ihre bestehende IT-Landschaft. Kompatibel mit ERP, CRM und allen gängigen Systemen.",
    large: false,
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
    title: "Datenanalyse",
    description: "Aus Ihren Rohdaten werden belastbare Insights. Predictive Analytics, Dashboards und automatisierte Reportings — datengetrieben entscheiden.",
    large: true,
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    title: "Chatbots & AI Agents",
    description: "Intelligente Assistenten für Kundenservice, internen Support und Lead-Generierung — 24/7, mehrsprachig und lernfähig.",
    large: false,
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
    title: "KI-Schulungen",
    description: "Upskilling Ihrer Mitarbeiter: Von AI-Grundlagen bis zu fortgeschrittenen Prompt-Engineering-Workshops für jede Abteilung.",
    large: false,
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
            Sechs Kernleistungen für Ihre digitale Transformation — von der Strategie bis zur vollständigen Implementierung.
          </p>
        </div>
        <div className="bento-grid">
          <div className="bento-card bento-card-large fade-up">
            <div className="bento-icon" aria-hidden="true">{features[0].svg}</div>
            <h3>{features[0].title}</h3>
            <p>{features[0].description}</p>
            <div className="bento-glow" aria-hidden="true" />
          </div>
          <div className="bento-card fade-up animate-delay-1">
            <div className="bento-icon" aria-hidden="true">{features[1].svg}</div>
            <h3>{features[1].title}</h3>
            <p>{features[1].description}</p>
          </div>
          <div className="bento-card fade-up animate-delay-2">
            <div className="bento-icon" aria-hidden="true">{features[2].svg}</div>
            <h3>{features[2].title}</h3>
            <p>{features[2].description}</p>
          </div>
          <div className="bento-card bento-card-large fade-up animate-delay-3">
            <div className="bento-icon" aria-hidden="true">{features[3].svg}</div>
            <h3>{features[3].title}</h3>
            <p>{features[3].description}</p>
            <div className="bento-glow" aria-hidden="true" />
          </div>
          <div className="bento-card fade-up animate-delay-4">
            <div className="bento-icon" aria-hidden="true">{features[4].svg}</div>
            <h3>{features[4].title}</h3>
            <p>{features[4].description}</p>
          </div>
          <div className="bento-card fade-up animate-delay-5">
            <div className="bento-icon" aria-hidden="true">{features[5].svg}</div>
            <h3>{features[5].title}</h3>
            <p>{features[5].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
