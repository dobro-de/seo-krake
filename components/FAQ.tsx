"use client";
import { useState } from "react";

const faqs = [
  {
    question: "Was kostet KI Beratung?",
    answer:
      "Die Kosten für KI Beratung hängen vom Umfang des Projekts ab. Eine erste Analyse kostet ab 2.500 €, eine vollständige Strategieentwicklung ab 8.000 €. Für die Implementierung berechnen wir nach Aufwand. Die meisten Kunden erreichen ROI innerhalb von 6 Monaten.",
  },
  {
    question: "Wie lange dauert ein KI-Beratungsprojekt?",
    answer:
      "Ein typisches KI-Beratungsprojekt dauert 6–12 Wochen: 2 Wochen Analyse, 1 Woche Strategieentwicklung, dann Implementierungsbegleitung je nach Komplexität. Quick-Wins lassen sich oft schon in 4 Wochen realisieren.",
  },
  {
    question: "Brauche ich IT-Kenntnisse für die KI Beratung?",
    answer:
      "Nein. Unsere KI Beratung richtet sich an Unternehmer und Führungskräfte ohne technischen Hintergrund. Wir übersetzen komplexe Technologie in verständliche Geschäftsentscheidungen und begleiten Sie durch jeden Schritt.",
  },
  {
    question: "Welche KI-Tools setzt ihr ein?",
    answer:
      "Wir sind herstellerunabhängig und wählen die Tools nach Ihren Anforderungen aus. Das umfasst OpenAI, Anthropic, Microsoft Azure AI, Google Vertex AI sowie spezialisierte Automatisierungsplattformen wie Make, n8n oder Zapier — immer passend zu Ihrem Stack.",
  },
  {
    question: "Gibt es eine Ergebnis-Garantie?",
    answer:
      "Wir garantieren keine spezifischen Zahlen, da Ergebnisse von vielen Faktoren abhängen. Was wir garantieren: transparente Kommunikation, messbare Meilensteine und klare KPIs vor Projektstart. Unsere 98% Kundenzufriedenheit spricht für unsere Arbeit.",
  },
  {
    question: "Wie schnell sehe ich erste Ergebnisse?",
    answer:
      "Erste Quick-Wins — z.B. automatisierte Prozesse oder ein funktionaler Chatbot — sind oft in 3–4 Wochen realisierbar. Strategische Transformationen brauchen 3–6 Monate für messbare Business-Impacts.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-heading">
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <span className="section-eyebrow">FAQ</span>
          <h2 id="faq-heading" className="section-heading section-heading-center">
            Häufige Fragen zur KI Beratung
          </h2>
          <p className="section-sub section-sub-center">
            Alles, was Sie vor dem Start wissen sollten.
          </p>
        </div>

        <div className="faq-list" role="list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item${openIndex === i ? " is-open" : ""}`}
              role="listitem"
            >
              <button
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                {faq.question}
                <svg
                  className="faq-chevron"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className="faq-answer"
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                aria-hidden={openIndex !== i}
              >
                <div className="faq-answer-inner">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
