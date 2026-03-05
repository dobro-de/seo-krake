export default function VideoSection() {
  return (
    <section className="video-section" id="video" aria-labelledby="video-heading">
      <div className="container">
        <span className="section-eyebrow">In Aktion</span>
        <h2 id="video-heading" className="section-heading section-heading-center" style={{ maxWidth: "700px", margin: "0 auto 16px" }}>
          Sehen Sie, wie KI Beratung Ihr Unternehmen verändert
        </h2>
        <p className="section-sub section-sub-center">
          In diesem Video erklären wir unseren Beratungsansatz und zeigen reale
          Ergebnisse aus abgeschlossenen KI-Projekten.
        </p>

        {/* Video Thumbnail */}
        <div className="video-container fade-up" role="button" tabIndex={0} aria-label="KI Beratung Erklärungsvideo abspielen">
          <div className="video-thumb">
            <div className="video-thumb-bg" aria-hidden="true" />
            {/* Placeholder 16:9 */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, #111827 0%, #0c0f16 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Decorative lines */}
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 860 484"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ position: "absolute", inset: 0, opacity: 0.08 }}
                aria-hidden="true"
              >
                <line x1="0" y1="121" x2="860" y2="121" stroke="#f97316" strokeWidth="1" strokeDasharray="8 12" />
                <line x1="0" y1="242" x2="860" y2="242" stroke="#f97316" strokeWidth="1" strokeDasharray="8 12" />
                <line x1="0" y1="363" x2="860" y2="363" stroke="#f97316" strokeWidth="1" strokeDasharray="8 12" />
                <line x1="215" y1="0" x2="215" y2="484" stroke="#f97316" strokeWidth="1" strokeDasharray="8 12" />
                <line x1="430" y1="0" x2="430" y2="484" stroke="#f97316" strokeWidth="1" strokeDasharray="8 12" />
                <line x1="645" y1="0" x2="645" y2="484" stroke="#f97316" strokeWidth="1" strokeDasharray="8 12" />
              </svg>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px",
                }}
              >
                <p style={{ color: "#94a3b8", fontSize: "14px", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
                  KI Beratung Erklärvideo
                </p>
              </div>
            </div>
            {/* Play Button */}
            <div className="video-play-btn" aria-hidden="true">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="video-ctas">
          <a href="#kontakt" className="btn-primary">
            KI-Potenzial analysieren
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#leistungen" className="btn-ghost">
            Mehr erfahren
          </a>
        </div>
      </div>
    </section>
  );
}
