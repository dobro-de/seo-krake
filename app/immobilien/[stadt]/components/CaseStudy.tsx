import type { CityData } from "../cityData";

interface Props {
  city: CityData;
}

export default function CaseStudy({ city }: Props) {
  const { caseStudy, name } = city;

  return (
    <section
      id="case-study"
      className="section-pad"
      style={{ background: "var(--bg-card)" }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div className="section-eyebrow" style={{ display: "inline-flex", marginBottom: "16px" }}>
            Fallstudie aus {name}
          </div>
          <h2 className="section-heading section-heading-center">
            Wie {caseStudy.restaurant} mit KI den Turnaround schaffte
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            alignItems: "stretch",
          }}
          className="case-study-grid"
        >
          {/* Left: Story */}
          <div
            style={{
              background: "var(--bg-primary)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-card)",
              padding: "44px 40px",
              display: "flex",
              flexDirection: "column",
              gap: "28px",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "10px",
                }}
              >
                Die Herausforderung
              </div>
              <p style={{ fontSize: "15px", color: "var(--text-gray)", lineHeight: 1.7 }}>
                {caseStudy.challenge}
              </p>
            </div>

            <div
              style={{
                width: "100%",
                height: "1px",
                background: "var(--border-subtle)",
              }}
            />

            <div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "10px",
                }}
              >
                Unsere Lösung
              </div>
              <p style={{ fontSize: "15px", color: "var(--text-gray)", lineHeight: 1.7 }}>
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Right: Results */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {[caseStudy.result1, caseStudy.result2, caseStudy.result3].map((result, i) => (
              <div
                key={i}
                style={{
                  background: "var(--bg-primary)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-card)",
                  padding: "28px 32px",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  flex: 1,
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "var(--accent-dim)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                    flexShrink: 0,
                    padding: 6,
                  }}
                >
                  {i === 0
                    ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/></svg>
                    : i === 1
                    ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                    : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  }
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: 800,
                      color: "var(--accent)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {result}
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--text-gray)", marginTop: "2px" }}>
                    Messbare Verbesserung
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .case-study-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
