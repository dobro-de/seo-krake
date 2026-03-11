import type { CityData } from "../cityData";

interface Props {
  city: CityData;
}

export default function CityStats({ city }: Props) {
  const { stats, name } = city;
  const items = [
    {
      value: stats.betriebe,
      label: stats.label1,
      svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
    },
    {
      value: stats.mitarbeiter,
      label: stats.label2,
      svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    },
    {
      value: stats.markttrend,
      label: stats.label3,
      svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/></svg>,
    },
  ];

  return (
    <section
      style={{
        background: "var(--bg-card)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
        padding: "80px 24px",
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div className="section-eyebrow" style={{ display: "inline-flex", marginBottom: "16px" }}>
            Gastronomie in {name}
          </div>
          <h2 className="section-heading section-heading-center">
            Der Markt in {name} — Zahlen &amp; Fakten
          </h2>
          <p className="section-sub section-sub-center">
            Verstehen Sie das Marktumfeld, in dem KI-Lösungen den größten Hebel entfalten.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="bento-card"
              style={{
                background: "var(--bg-primary)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-card)",
                padding: "40px 32px",
                textAlign: "center",
              }}
            >
              <div style={{ width: 40, height: 40, margin: "0 auto 16px", color: "var(--accent)" }}>{item.svg}</div>
              <div
                style={{
                  fontSize: "clamp(36px, 4vw, 52px)",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  color: "var(--accent)",
                  lineHeight: 1,
                  marginBottom: "12px",
                }}
              >
                {item.value}
              </div>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--text-gray)",
                  lineHeight: 1.5,
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
