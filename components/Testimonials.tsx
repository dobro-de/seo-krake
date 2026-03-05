const testimonials = [
  {
    initial: "M",
    name: "Markus Hoffmann",
    company: "Hoffmann Logistik GmbH",
    text: "Dank der KI Beratung konnten wir unsere Routenplanung vollständig automatisieren. Die Einsparungen im ersten Jahr haben die Beratungskosten um das Vierfache übertroffen. Absolut empfehlenswert.",
  },
  {
    initial: "S",
    name: "Sandra Weber",
    company: "Weber & Partner Steuerberatung",
    text: "Wir waren skeptisch, ob KI wirklich in unserem Bereich funktioniert. Die KI Beratung hat uns nicht nur überzeugt, sondern unsere Dokumentenverarbeitung komplett transformiert. 60% weniger manuelle Arbeit.",
  },
  {
    initial: "T",
    name: "Thomas Brunner",
    company: "Brunner Handel AG",
    text: "Die KI Beratung war von Anfang an pragmatisch und ergebnisorientiert. Kein Buzzword-Bingo, sondern echte Lösungen. Unser Kundenservice hat sich in 3 Monaten komplett gewandelt.",
  },
];

export default function Testimonials() {
  return (
    <section
      className="testimonials-section"
      id="referenzen-testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <span className="section-eyebrow">Kundenstimmen</span>
          <h2 id="testimonials-heading" className="section-heading section-heading-center">
            Was unsere Kunden sagen
          </h2>
          <p className="section-sub section-sub-center">
            Echte Ergebnisse von echten Unternehmen — die KI Beratung gemacht haben,
            die sich rechnet.
          </p>
        </div>

        <div className="testimonials-grid" role="list" aria-label="Kundenbewertungen KI Beratung">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card fade-up" role="listitem">
              <span className="testimonial-quote" aria-hidden="true">&ldquo;</span>
              <blockquote className="testimonial-text">{t.text}</blockquote>
              <div className="testimonial-author">
                <div
                  className="testimonial-avatar"
                  aria-hidden="true"
                  role="img"
                  aria-label={`Avatar von ${t.name}`}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-company">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
