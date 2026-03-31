const customers = [
  "Mysolarexpress GmbH",
  "Autoschmiede",
  "Synclaro",
  "Blinkk AI",
  "Gib21",
  "Physiotherapie Dedekind",
  "Knochenstark",
];

export default function TrustBar() {
  const allCustomers = [...customers, ...customers];

  return (
    <section className="trust-bar-section" aria-label="Unsere Kunden vertrauen uns">
      <p className="trust-bar-label">Bereits 1500+ Unternehmen erfolgreich beraten</p>
      <div className="trust-bar-track">
        <div className="trust-bar-scroll">
          {allCustomers.map((name, i) => (
            <span key={i} className="trust-bar-name">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
