import type { CityData } from "../cityData";

interface Props {
  city: CityData;
}

export default function FAQSection({ city }: Props) {
  const { faqs, name } = city;

  return (
    <section
      style={{
        background: "var(--bg-card)",
        padding: "80px 24px",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div className="section-eyebrow" style={{ display: "inline-flex", marginBottom: "16px" }}>
            FAQ
          </div>
          <h2 className="section-heading section-heading-center">
            Häufige Fragen — KI-Bildung {name}
          </h2>
        </div>

        <div
          style={{
            maxWidth: 720,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {faqs.map((faq, i) => (
            <div key={i} className="branche-challenge-card">
              <h3 style={{ color: "var(--text-white)", fontWeight: 600, fontSize: "1rem", marginBottom: "0.6rem" }}>
                {faq.question}
              </h3>
              <p style={{ color: "var(--text-gray)", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
