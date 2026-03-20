import type { CityData } from "../cityData";

interface Props {
  city: CityData;
}

export default function CaseStudy({ city }: Props) {
  const { caseStudy, name } = city;
  const results = [caseStudy.result1, caseStudy.result2, caseStudy.result3];

  return (
    <section
      id="case-study"
      style={{
        background: "var(--bg-primary)",
        padding: "80px 24px",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div className="section-eyebrow" style={{ display: "inline-flex", marginBottom: "16px" }}>
            Fallstudie
          </div>
          <h2 className="section-heading section-heading-center">
            KI-Ergebnis in {name}
          </h2>
        </div>

        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            background: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
            borderRadius: 16,
            padding: "2.5rem",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--accent-dim)",
              border: "1px solid var(--border)",
              borderRadius: 999,
              padding: "4px 14px",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--accent)",
              marginBottom: "1.25rem",
            }}
          >
            {caseStudy.restaurant}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2rem" }}>
            <div>
              <h3 style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Herausforderung
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-gray)", lineHeight: 1.65 }}>{caseStudy.challenge}</p>
            </div>
            <div>
              <h3 style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Lösung
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-gray)", lineHeight: 1.65 }}>{caseStudy.solution}</p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", borderTop: "1px solid var(--border-subtle)", paddingTop: "1.5rem" }}>
            {results.map((r, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--accent)", lineHeight: 1.2, marginBottom: "0.25rem" }}>{r}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
