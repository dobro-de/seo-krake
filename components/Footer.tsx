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
              <li><Link href="/ueber-uns">Über uns</Link></li>
              <li><Link href="/preise">Preise</Link></li>
              <li><Link href="/#kundenprojekte">Referenzen</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div className="footer-col">
            <h4>Kontakt</h4>
            <ul>
              <li><a href="mailto:info@kiberatung.de">info@kiberatung.de</a></li>
              <li><Link href="/termin-buchen">Kostenlose Erstberatung</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {year} Everlast Consulting GmbH. Alle Rechte vorbehalten.
          </p>
          <nav className="footer-links" aria-label="Rechtliche Links">
            <Link href="/datenschutz">Datenschutz</Link>
            <Link href="/impressum">Impressum</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
