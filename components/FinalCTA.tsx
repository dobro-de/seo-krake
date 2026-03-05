export default function FinalCTA() {
  return (
    <section
      className="final-cta-section"
      id="kontakt"
      aria-labelledby="final-cta-heading"
    >
      <div className="final-cta-glow" aria-hidden="true" />
      <div className="final-cta-content">
        <span className="section-eyebrow" style={{ margin: "0 auto 20px" }}>
          Jetzt starten
        </span>
        <h2 id="final-cta-heading" className="final-cta-h2">
          Bereit für<br />
          <span style={{ color: "var(--accent)" }}>KI Beratung?</span>
        </h2>
        <p className="final-cta-sub">
          Vereinbaren Sie jetzt Ihr kostenloses Erstgespräch. In 30 Minuten
          analysieren wir gemeinsam Ihr größtes KI-Potenzial — unverbindlich und
          ohne versteckte Kosten.
        </p>
        <a href="mailto:info@kiberatung.de" className="btn-primary" style={{ fontSize: "17px", padding: "16px 36px" }}>
          Kostenlos anfragen
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        {/* Trust Badges */}
        <div className="trust-badges" aria-label="Vertrauenssignale">
          <div className="trust-badge">
            <span className="trust-badge-icon" aria-hidden="true">✅</span>
            Kostenlose Erstberatung
          </div>
          <div className="trust-badge">
            <span className="trust-badge-icon" aria-hidden="true">✅</span>
            Keine Vertragsbindung
          </div>
          <div className="trust-badge">
            <span className="trust-badge-icon" aria-hidden="true">✅</span>
            Antwort in 24h
          </div>
          <div className="trust-badge">
            <span className="trust-badge-icon" aria-hidden="true">✅</span>
            12+ Jahre Erfahrung
          </div>
        </div>
      </div>
    </section>
  );
}
