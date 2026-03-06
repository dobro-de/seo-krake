import Link from "next/link";
import { BRANCHEN } from "@/lib/branchen";
import { LOESUNGEN } from "@/lib/loesungen";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-top footer-top-5col">
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

          {/* Lösungen */}
          <div className="footer-col">
            <h4><Link href="/loesungen" style={{ color: "inherit", textDecoration: "none" }}>Lösungen</Link></h4>
            <ul>
              {LOESUNGEN.map((l) => (
                <li key={l.slug}>
                  <Link href={`/${l.slug}`}>{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branchen */}
          <div className="footer-col">
            <h4><Link href="/branchen" style={{ color: "inherit", textDecoration: "none" }}>Branchen</Link></h4>
            <ul>
              {BRANCHEN.map((b) => (
                <li key={b.slug}>
                  <Link href={`/${b.slug}`}>{b.name}</Link>
                </li>
              ))}
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
