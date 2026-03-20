import type { CityData } from "../cityData";

interface Props {
  city: CityData;
}

export default function CTASection({ city }: Props) {
  return (
    <section
      id="kontakt"
      className="branche-cta-section"
    >
      <div className="container">
        <div className="branche-cta-inner">
          <h2 className="section-heading">
            KI-Beratung für Ihre Bildungseinrichtung in {city.name}
          </h2>
          <p>
            In einem kostenlosen 30-Minuten-Gespräch analysieren wir Ihre größten Verwaltungsengpässe und zeigen konkrete KI-Einstiegspunkte für Ihr Institut.
          </p>
          <a href="mailto:info@kiberatung.de" className="btn-accent btn-accent-lg">
            Jetzt kostenloses Gespräch buchen →
          </a>
        </div>
      </div>
    </section>
  );
}
