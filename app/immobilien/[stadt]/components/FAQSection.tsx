"use client";
import { useState } from "react";
import type { CityData } from "../cityData";

interface Props {
  city: CityData;
}

export default function FAQSection({ city }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="section-pad" style={{ background: "var(--bg-primary)" }}>
      <div className="container" style={{ maxWidth: "780px" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div className="section-eyebrow" style={{ display: "inline-flex", marginBottom: "16px" }}>
            Häufige Fragen
          </div>
          <h2 className="section-heading section-heading-center">
            Ihre Fragen zur KI-Beratung für Immobilienmakler in {city.name}
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {city.faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: "var(--bg-card)",
                border: `1px solid ${openIndex === i ? "var(--accent)" : "var(--border-subtle)"}`,
                borderRadius: "var(--radius-card)",
                overflow: "hidden",
                transition: "border-color 0.2s ease",
              }}
            >
              <button
                onClick={() => toggle(i)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "24px 28px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "16px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--text-white)",
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: 1.4,
                    textAlign: "left",
                  }}
                >
                  {faq.question}
                </span>
                <span
                  style={{
                    color: "var(--accent)",
                    fontSize: "22px",
                    lineHeight: 1,
                    flexShrink: 0,
                    transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                    display: "inline-block",
                  }}
                >
                  +
                </span>
              </button>

              {openIndex === i && (
                <div
                  style={{
                    padding: "0 28px 24px",
                    fontSize: "15px",
                    color: "var(--text-gray)",
                    lineHeight: 1.7,
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
