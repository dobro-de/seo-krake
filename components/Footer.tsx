export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-top">
          {/* Brand */}
          <div>
            <div className="footer-brand">
              KI <span>Beratung</span>
            </div>
            <p className="footer-desc">
              Professionelle KI Beratung für Unternehmen jeder Größe.
              Von der Strategie bis zur Implementierung — mit messbaren Ergebnissen.
            </p>
          </div>

          {/* Leistungen */}
          <div className="footer-col">
            <h4>Leistungen</h4>
            <ul>
              <li><a href="#leistungen">KI-Strategie</a></li>
              <li><a href="#leistungen">Prozessautomatisierung</a></li>
              <li><a href="#leistungen">KI-Integration</a></li>
              <li><a href="#leistungen">Chatbots & Agents</a></li>
              <li><a href="#leistungen">KI-Schulungen</a></li>
            </ul>
          </div>

          {/* Unternehmen */}
          <div className="footer-col">
            <h4>Unternehmen</h4>
            <ul>
              <li><a href="#problem">Über uns</a></li>
              <li><a href="#prozess">Unser Prozess</a></li>
              <li><a href="#referenzen">Referenzen</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div className="footer-col">
            <h4>Kontakt</h4>
            <ul>
              <li><a href="mailto:info@kiberatung.de">info@kiberatung.de</a></li>
              <li><a href="tel:+4930000000">+49 30 000 000</a></li>
              <li><a href="#kontakt">Erstberatung buchen</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {year} KI Beratung. Alle Rechte vorbehalten.
          </p>
          <nav className="footer-links" aria-label="Rechtliche Links">
            <a href="/datenschutz">Datenschutz</a>
            <a href="/impressum">Impressum</a>
            <a href="/agb">AGB</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
