export type LayoutVariant = 1 | 2 | 3;

export interface CityFaq {
  question: string;
  answer: string;
}

export interface CityData {
  slug: string;
  name: string;
  layout: LayoutVariant;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  stats: {
    betriebe: string;
    mitarbeiter: string;
    markttrend: string;
    label1: string;
    label2: string;
    label3: string;
  };
  caseStudy: {
    restaurant: string;
    challenge: string;
    solution: string;
    result1: string;
    result2: string;
    result3: string;
  };
  faqs: CityFaq[];
}

export const cities: CityData[] = [
  {
    slug: "berlin",
    name: "Berlin",
    layout: 1,
    metaTitle: "KI Beratung für Rechtsanwälte Berlin | kiberatung.de",
    metaDescription: "KI-Lösungen für Berliner Kanzleien: Dokumentenanalyse, Mandantenbot, Vertragsprüfung. Mehr Mandate, weniger Verwaltung.",
    h1: "KI für Berliner Kanzleien: Im größten deutschen Rechtsmarkt bestehen",
    intro: "Berlin ist mit über 10.000 zugelassenen Anwälten der größte Rechtsmarkt Deutschlands. In diesem Wettbewerb entscheiden Effizienz, schnelle Erreichbarkeit und professionelle Kommunikation. KI-Lösungen geben Berliner Kanzleien den Vorsprung: Dokumentenanalyse in Minuten, Mandantenqualifizierung rund um die Uhr und automatisierte Verwaltungsprozesse, die Kapazität für das Wesentliche schaffen.",
    stats: {
      betriebe: "4.800+",
      mitarbeiter: "22.000",
      markttrend: "+8,4 %",
      label1: "Kanzleien in Berlin",
      label2: "Juristen und Kanzleimitarbeiter in Berlin",
      label3: "Umsatzwachstum im Berliner Rechtsmarkt",
    },
    caseStudy: {
      restaurant: "Kanzlei Berger & Partner – Berlin-Mitte",
      challenge: "Die auf Gesellschaftsrecht spezialisierte Kanzlei hatte starkes Wachstum, aber die Dokumentenprüfung bei M&A-Transaktionen band die Associates über Wochen. Gleichzeitig gingen abends und am Wochenende potenzielle Mandantenanfragen verloren.",
      solution: "KI-Dokumentenanalyse für M&A-Vertragswerke, 24/7-Mandantenbot für Erstanfragen im Gesellschaftsrecht sowie automatisierte Zeiterfassung und Mandatsabrechnung.",
      result1: "Dokumentenprüfung −80 %",
      result2: "Neue Mandate +40 %",
      result3: "Abrechnungsquote +28 %",
    },
    faqs: [
      {
        question: "Wie hilft KI-Dokumentenanalyse Berliner Gesellschaftsrechtskanzleien?",
        answer: "KI analysiert M&A-Vertragswerke, Gesellschaftsverträge und Due-Diligence-Dokumente strukturiert — extrahiert relevante Klauseln, markiert Risiken und erstellt Zusammenfassungen. Was Associates früher Tage kostete, dauert mit KI Stunden.",
      },
      {
        question: "Kann KI im Berliner Startup-Ökosystem bei der Mandatsgewinnung helfen?",
        answer: "Ja — ein KI-Mandantenbot qualifiziert Anfragen aus dem Berliner Startup-Umfeld nach Rechtsgebiet und Mandatsgröße, gibt erste Orientierung und bucht passende Erstberatungstermine direkt in den Kalender.",
      },
      {
        question: "Ist KI-Einsatz mit der Berliner Anwaltskammer berufsrechtlich konform?",
        answer: "Ja — alle KI-Lösungen werden so konfiguriert, dass sie die Berufsordnung der Berliner Anwaltskammer einhalten. Verschwiegenheitspflicht und Datenschutz sind systemseitig sichergestellt.",
      },
      {
        question: "Wie schnell kann eine Berliner Kanzlei KI implementieren?",
        answer: "Einfache Lösungen wie der Mandantenbot sind in 2 Wochen live. Vollständige Dokumentenanalyse-Integration dauert 4–6 Wochen. Das erste Beratungsgespräch ist kostenlos.",
      },
    ],
  },
  {
    slug: "hamburg",
    name: "Hamburg",
    layout: 2,
    metaTitle: "KI Beratung für Rechtsanwälte Hamburg | kiberatung.de",
    metaDescription: "KI-Lösungen für Hamburger Kanzleien: Seerecht, Handelsrecht, KI-Dokumentenanalyse. Mehr Effizienz, mehr Mandate.",
    h1: "KI für Hamburger Kanzleien: Handels- und Seerecht mit KI-Präzision meistern",
    intro: "Hamburg ist ein wichtiger Handels- und Seerechtsstandort — mit Kanzleien, die komplexe internationale Vertragswerke, Frachtrecht und Handelsstreitigkeiten bearbeiten. KI-Dokumentenanalyse für komplexe Vertragswerke spart hier besonders viel Zeit — und erlaubt es Hamburger Kanzleien, mehr Mandate anzunehmen ohne die Bearbeitungsqualität zu senken.",
    stats: {
      betriebe: "3.200+",
      mitarbeiter: "15.000",
      markttrend: "+7,2 %",
      label1: "Kanzleien in Hamburg",
      label2: "Juristen und Kanzleimitarbeiter in Hamburg",
      label3: "Umsatzwachstum im Hamburger Rechtsmarkt",
    },
    caseStudy: {
      restaurant: "Seerecht Bremer & Kollegen – Hamburg-Speicherstadt",
      challenge: "Die Seerechtskanzlei arbeitete mit international sehr umfangreichen Charterverträgen und Frachtbriefen auf Englisch und Niederländisch. Manuelle Analyse kostete pro Mandat 3–4 Arbeitstage.",
      solution: "Mehrsprachige KI-Dokumentenanalyse für internationale Seerechtsverträge, automatische Extraktion von Haftungsklauseln und Fristen sowie KI-gestützte Falldokumentation.",
      result1: "Vertragsprüfung von 4 Tagen auf 4 Std.",
      result2: "Bearbeitungskapazität +125 %",
      result3: "Mandatsumsatz +63 %",
    },
    faqs: [
      {
        question: "Wie hilft KI Hamburger Seerechtskanzleien bei internationalen Verträgen?",
        answer: "KI analysiert Charterverträge, Konnossemente und Frachtverträge in mehreren Sprachen gleichzeitig — extrahiert Haftungsklauseln, Fristen und Vertragsrisiken und erstellt strukturierte Zusammenfassungen für die anwaltliche Prüfung.",
      },
      {
        question: "Kann KI bei Hamburger Handelsstreitigkeiten unterstützen?",
        answer: "Ja — KI-Dokumentenanalyse für Handelsklagen bereitet Schriftsätze vor, analysiert Gegendokumente und erstellt Gegenüberstellungen relevanter Klauseln für die anwaltliche Bewertung.",
      },
      {
        question: "Ist KI-Einsatz im Hamburger Seerecht DSGVO-konform?",
        answer: "Alle KI-Lösungen werden auf deutschen, ISO-27001-zertifizierten Servern betrieben. Mandantendaten verlassen nie den vereinbarten Verarbeitungsraum — konform mit DSGVO und Anwalts-Berufsrecht.",
      },
      {
        question: "Lohnt sich KI für eine kleinere Hamburger Boutique-Kanzlei?",
        answer: "Besonders ja — gerade Boutique-Kanzleien mit spezialisierten, komplexen Mandaten profitieren enorm von KI-Dokumentenanalyse. Der ROI ist oft in den ersten drei Mandaten sichtbar.",
      },
    ],
  },
  {
    slug: "muenchen",
    name: "München",
    layout: 3,
    metaTitle: "KI Beratung für Rechtsanwälte München | kiberatung.de",
    metaDescription: "KI-Lösungen für Münchner Kanzleien: IP-Recht, M&A, KI-Dokumentenanalyse. Kostenlose Erstberatung.",
    h1: "KI für Münchner Kanzleien: Wirtschaftsrecht und IP mit KI-Effizienz skalieren",
    intro: "Münchens Kanzleien betreuen DAX-Konzerne, Tech-Startups und internationale Mandanten im Wirtschafts-, IP- und M&A-Recht. Die Anforderungen sind hoch, die Vertragswerke umfangreich — und die Mandanten erwarten schnelle, präzise Ergebnisse. KI-gestützte Dokumentenanalyse und Vertragsprüfung sind hier Standard der Zukunft und geben Münchner Kanzleien den Kapazitätsvorteil, den anspruchsvolle Mandate erfordern.",
    stats: {
      betriebe: "5.400+",
      mitarbeiter: "25.000",
      markttrend: "+9,1 %",
      label1: "Kanzleien in München",
      label2: "Juristen und Kanzleimitarbeiter in München",
      label3: "Umsatzwachstum im Münchner Rechtsmarkt",
    },
    caseStudy: {
      restaurant: "IP Kanzlei Steinbach – München-Maxvorstadt",
      challenge: "Die auf IP-Recht spezialisierte Kanzlei hatte wachsende Mandate aus dem Münchner Tech-Ökosystem, kämpfte aber mit dem Durchsatz: Patentrecherchen, Markenverletzungsanalysen und Lizenzverträge banden zu viel Associates-Zeit.",
      solution: "KI-Patentanalyse für Freedom-to-Operate-Recherchen, automatische Markenverletzungsprüfung und KI-Lizenzvertragsanalyse mit Risikomarkierung.",
      result1: "FTO-Recherchen −75 % Zeitaufwand",
      result2: "Mandatsvolumen IP +88 %",
      result3: "Associate-Auslastung optimiert",
    },
    faqs: [
      {
        question: "Wie hilft KI Münchner IP-Kanzleien bei Patentrecherchen?",
        answer: "KI durchsucht Patentdatenbanken systematisch, analysiert Claims-Überschneidungen und erstellt strukturierte Freedom-to-Operate-Berichte — in Stunden statt Wochen. Das gibt Associates mehr Zeit für die juristische Bewertung.",
      },
      {
        question: "Kann KI bei M&A-Due-Diligence für Münchner Wirtschaftskanzleien helfen?",
        answer: "Ja — KI analysiert Data-Room-Dokumente, extrahiert relevante Vertragsklauseln, erstellt Risikoberichte und priorisiert die wichtigsten Prüfpunkte für die anwaltliche Bewertung. Das komprimiert Wochen in Tage.",
      },
      {
        question: "Wie skaliert KI die Kapazität einer Münchner Kanzlei ohne Neueinstellungen?",
        answer: "KI übernimmt zeitintensive Recherche- und Analyseaufgaben, sodass Associates und Partner sich auf Beratung und Strategie konzentrieren können. Kanzleien berichten von 40–60 % mehr Mandatskapazität mit demselben Team.",
      },
      {
        question: "Ist KI-Einsatz mit Verschwiegenheitspflichten in München vereinbar?",
        answer: "Ja — alle Systeme werden mandatsisoliert betrieben, Daten werden nie für KI-Training verwendet und die Verarbeitung erfolgt ausschließlich auf deutschen Servern mit ISO-27001-Zertifizierung.",
      },
    ],
  },
  {
    slug: "frankfurt",
    name: "Frankfurt",
    layout: 1,
    metaTitle: "KI Beratung für Rechtsanwälte Frankfurt | kiberatung.de",
    metaDescription: "KI-Lösungen für Frankfurter Kanzleien: Bank- und Kapitalmarktrecht, KI-Dokumentenanalyse. Kostenlose Erstberatung.",
    h1: "KI für Frankfurter Kanzleien: Bankrecht und Compliance mit KI-Power meistern",
    intro: "Frankfurt als Finanzplatz zieht komplexe Bank-, Kapitalmarkt- und Compliance-Mandate an. KI-Dokumentenanalyse reduziert Due-Diligence-Kosten bei Kreditverträgen, Sicherheitsvereinbarungen und regulatorischen Prüfungen erheblich — ein echter Wettbewerbsvorteil in einem Markt, in dem Geschwindigkeit über den Auftrag entscheidet. Frankfurter Kanzleien, die KI einsetzen, bedienen mehr Mandate mit derselben Mannschaft.",
    stats: {
      betriebe: "2.800+",
      mitarbeiter: "13.500",
      markttrend: "+8,7 %",
      label1: "Kanzleien in Frankfurt",
      label2: "Juristen und Kanzleimitarbeiter in Frankfurt",
      label3: "Umsatzwachstum im Frankfurter Rechtsmarkt",
    },
    caseStudy: {
      restaurant: "Finanzrecht Weber & Müller – Frankfurt-Westend",
      challenge: "Die auf Banken- und Kapitalmarktrecht spezialisierte Kanzlei war mit Compliance-Prüfungen überlastet: Kreditverträge, AGB-Analysen und regulatorische Gutachten stapelten sich, und erfahrene Associates verbrachten zu viel Zeit mit Standard-Dokumentenprüfung.",
      solution: "KI-Compliance-Dokumentenanalyse für standardisierte Bankverträge, automatische AGB-Risikoerkennung und KI-gestützte regulatorische Checklisten-Erstellung.",
      result1: "Standard-Dokumentenprüfung −70 %",
      result2: "Compliance-Mandate +55 %",
      result3: "Partner-Stunden auf Strategie +40 %",
    },
    faqs: [
      {
        question: "Wie hilft KI Frankfurter Kanzleien bei Kreditvertragsanalysen?",
        answer: "KI analysiert Kreditverträge, Sicherheitsvereinbarungen und Covenants strukturiert — extrahiert Zinssätze, Kündigungsklauseln, Negativverpflichtungen und Finanzkennzahlen-Anforderungen und stellt Abweichungen vom Marktstandard heraus.",
      },
      {
        question: "Kann KI AGB-Prüfungen für Frankfurter Finanzinstitute automatisieren?",
        answer: "Ja — KI prüft AGB systematisch auf unwirksame Klauseln, Verbraucherschutzverstöße und regulatorische Anforderungen der BaFin. Das reduziert Standardprüfungen erheblich und gibt Anwälten mehr Zeit für komplexe Grenzfälle.",
      },
      {
        question: "Wie hilft KI bei MiFID-II- und Basel-IV-Compliance?",
        answer: "KI ist auf regulatorische Anforderungen trainiert und kann Verträge und Prozesse automatisch gegen aktuelle Compliance-Anforderungen prüfen — und Abweichungen markieren, bevor sie zum Problem werden.",
      },
      {
        question: "Wie sicher ist KI-Dokumentenverarbeitung für vertrauliche Bankmandate?",
        answer: "Alle Dokumente werden in mandatsisolierten, verschlüsselten Umgebungen verarbeitet, nie für KI-Training verwendet und ausschließlich auf deutschen ISO-27001-Servern gespeichert. Vollständig DSGVO-konform.",
      },
    ],
  },
  {
    slug: "koeln",
    name: "Köln",
    layout: 2,
    metaTitle: "KI Beratung für Rechtsanwälte Köln | kiberatung.de",
    metaDescription: "KI-Lösungen für Kölner Kanzleien: Medienrecht, Arbeitsrecht, Mandantenbot. Mehr Kapazität, weniger Verwaltung.",
    h1: "KI für Kölner Kanzleien: Medien-, IT- und Arbeitsrecht mit KI skalieren",
    intro: "Köln hat eine lebendige Kanzleiszene mit Fokus auf Medien-, IT- und Arbeitsrecht — Rechtsgebiete, die durch digitale Transformation rasant wachsen. KI-Tools für Vertrags- und Schriftsatzautomatisierung steigern die Mandatskapazität messbar und erlauben Kölner Kanzleien, das Wachstum im Tech- und Medienrecht ohne proportionale Personalkosten zu bedienen.",
    stats: {
      betriebe: "2.400+",
      mitarbeiter: "11.000",
      markttrend: "+7,6 %",
      label1: "Kanzleien in Köln",
      label2: "Juristen und Kanzleimitarbeiter in Köln",
      label3: "Umsatzwachstum im Kölner Rechtsmarkt",
    },
    caseStudy: {
      restaurant: "Medienrecht Küppers & Lenz – Köln-Innenstadt",
      challenge: "Die auf Medien- und Urheberrecht spezialisierte Kanzlei erlebte stark wachsende Nachfrage durch Content-Creator und Streaming-Unternehmen — konnte aber Lizenz- und Verwertungsverträge nicht schnell genug prüfen.",
      solution: "KI-Lizenzvertragsanalyse mit Urheberrechts-Fokus, automatische Verwertungsrechte-Extraktion und KI-Mandantenbot für Content-Creator-Erstanfragen.",
      result1: "Lizenzverträge 5× schneller analysiert",
      result2: "Creator-Mandate +112 %",
      result3: "Mandantenakquise 24/7 automatisiert",
    },
    faqs: [
      {
        question: "Wie hilft KI Kölner Medienrechtskanzleien bei Lizenzverträgen?",
        answer: "KI analysiert Lizenz- und Verwertungsverträge auf Rechtekategorien, territoriale Beschränkungen, Vergütungsmodelle und Rückrufsrechte — und gibt strukturierte Übersichten, die die anwaltliche Prüfung stark beschleunigen.",
      },
      {
        question: "Kann KI Kölner Arbeitsrechtskanzleien bei Massenentlassungsverfahren unterstützen?",
        answer: "Ja — KI erstellt strukturierte Dokumentenchecks für Sozialpläne, Interessenausgleiche und Massenentlassungsanzeigen, vergleicht sie mit aktueller Rechtsprechung und markiert Anpassungsbedarf.",
      },
      {
        question: "Wie hilft KI bei IT-Verträgen für Kölner Tech-Unternehmen?",
        answer: "KI prüft SaaS-, Softwarelizenz- und Outsourcingverträge auf Haftungsklauseln, SLA-Standards, Datenschutzanforderungen und marktübliche Konditionen — in Stunden statt Tagen.",
      },
      {
        question: "Lohnt sich ein KI-Mandantenbot für eine Kölner Kanzlei?",
        answer: "Sehr — besonders für Rechtsgebiete wie IT- und Medienrecht, die viele Erstanfragen von kleinen Unternehmen und Selbstständigen anziehen. Der Bot qualifiziert kosteneffizient und rund um die Uhr.",
      },
    ],
  },
  {
    slug: "duesseldorf",
    name: "Düsseldorf",
    layout: 3,
    metaTitle: "KI Beratung für Rechtsanwälte Düsseldorf | kiberatung.de",
    metaDescription: "KI-Lösungen für Düsseldorfer Kanzleien: Internationale Mandate, Vertragsprüfung, Mandantenbot. Jetzt anfragen.",
    h1: "KI für Düsseldorfer Kanzleien: Internationale Mandate mit KI-Effizienz bedienen",
    intro: "Düsseldorf ist Heimat vieler internationaler Kanzleien und Unternehmensrechtsabteilungen — mit Mandaten in mehreren Sprachen und Rechtssystemen. Mehrsprachige KI-Kommunikation und Dokumentenanalyse sind hier klare Differenziatoren: Englische und niederländische Vertragsdokumente in Minuten analysieren, internationale Mandanten in ihrer Sprache ansprechen — das sind die Hebel, die Düsseldorfer Kanzleien den Vorsprung geben.",
    stats: {
      betriebe: "2.100+",
      mitarbeiter: "9.800",
      markttrend: "+7,9 %",
      label1: "Kanzleien in Düsseldorf",
      label2: "Juristen und Kanzleimitarbeiter in Düsseldorf",
      label3: "Umsatzwachstum im Düsseldorfer Rechtsmarkt",
    },
    caseStudy: {
      restaurant: "International Law Häusler – Düsseldorf-Stadtmitte",
      challenge: "Die auf internationale Unternehmenstransaktionen spezialisierte Kanzlei arbeitete mit englisch- und niederländischsprachigen Vertragsdokumenten — und benötigte bilinguale Associates mit Kapazitätsengpässen bei Due-Diligence-Phasen.",
      solution: "Mehrsprachige KI-Dokumentenanalyse (Englisch, Niederländisch, Deutsch), automatische Übersetzung und Zusammenfassung von Vertragswerken sowie KI-gestützte Risikomatrix für Cross-Border-Transaktionen.",
      result1: "Due-Diligence-Zeit −68 %",
      result2: "Internationale Mandate +78 %",
      result3: "Sprachabhängigkeit bei Analyse eliminiert",
    },
    faqs: [
      {
        question: "Wie hilft KI Düsseldorfer Kanzleien bei internationalen Vertragswerken?",
        answer: "KI analysiert Verträge in mehreren Sprachen gleichzeitig, übersetzt und fasst zusammen, markiert rechtliche Risiken und erstellt Vergleichsanalysen zwischen verschiedenen Sprachversionen eines Vertrags.",
      },
      {
        question: "Kann KI bei der Betreuung japanischer Unternehmen in Düsseldorf helfen?",
        answer: "Ja — mehrsprachige KI-Kommunikation auf Japanisch ermöglicht es, japanische Unternehmen und ihre Rechtsabteilungen in ihrer Muttersprache zu betreuen. Das ist ein seltener und wertvoller Differenziator im Düsseldorfer Rechtsmarkt.",
      },
      {
        question: "Wie hilft KI bei Compliance-Themen für internationale Unternehmen in Düsseldorf?",
        answer: "KI prüft automatisch gegen verschiedene Compliance-Frameworks (EU, UK, US-amerikanisch), erkennt grenzüberschreitende Rechtsrisiken und erstellt mehrsprachige Compliance-Berichte für internationale Unternehmensgruppen.",
      },
      {
        question: "Ist KI für eine kleine internationale Boutique-Kanzlei in Düsseldorf geeignet?",
        answer: "Absolut — gerade kleine Boutique-Kanzleien mit internationalem Fokus gewinnen durch KI-Dokumentenanalyse massiv an Kapazität. Das erste Gespräch ist kostenlos.",
      },
    ],
  },
  {
    slug: "stuttgart",
    name: "Stuttgart",
    layout: 1,
    metaTitle: "KI Beratung für Rechtsanwälte Stuttgart | kiberatung.de",
    metaDescription: "KI-Lösungen für Stuttgarter Kanzleien: Automotive-Recht, Arbeitsrecht, Vertragsanalyse. Mehr Mandate, weniger Verwaltung.",
    h1: "KI für Stuttgarter Kanzleien: Automotive- und Wirtschaftsrecht mit KI skalieren",
    intro: "Stuttgarts Wirtschaftskanzleien betreuen Automotive- und Maschinenbauunternehmen mit komplexen Zuliefererverträgen, Produkthaftungsfragen und arbeitsrechtlichen Strukturveränderungen. KI-gestützte Vertrags- und Dokumentenanalyse skaliert die Kapazität ohne Personalkosten und gibt Stuttgarter Kanzleien den Durchsatz, den die wachsenden Rechtsbedarfe der Industrie erfordern.",
    stats: {
      betriebe: "1.800+",
      mitarbeiter: "8.400",
      markttrend: "+7,3 %",
      label1: "Kanzleien in Stuttgart",
      label2: "Juristen und Kanzleimitarbeiter in Stuttgart",
      label3: "Umsatzwachstum im Stuttgarter Rechtsmarkt",
    },
    caseStudy: {
      restaurant: "Automotive Recht Lauer & Partner – Stuttgart-Mitte",
      challenge: "Die auf Automotive-Lieferantenrecht spezialisierte Kanzlei prüfte umfangreiche Zuliefererverträge für Tier-1- und Tier-2-Zulieferer. Manuelle Prüfung dauerte pro Vertrag 2–3 Tage und begrenzte die Mandatskapazität erheblich.",
      solution: "KI-Vertragsanalyse für Automotive-Zuliefererverträge mit Haftungsklausel-Extraktion, automatische Abgleich gegen Marktstandards (VDA-Empfehlungen) und KI-Zusammenfassungen für Mandantenbriefings.",
      result1: "Vertragsanalyse von 3 Tagen auf 6 Std.",
      result2: "Zulieferer-Mandate +67 %",
      result3: "Qualitätssicherung durch KI-Crosscheck",
    },
    faqs: [
      {
        question: "Wie hilft KI Stuttgarter Kanzleien bei Automotive-Zuliefererverträgen?",
        answer: "KI analysiert Lieferverträge auf Haftungsklauseln, Gewährleistungsumfang, Lieferbedingungen und Rückrufverpflichtungen — und vergleicht automatisch mit VDA-Empfehlungen und Marktstandards.",
      },
      {
        question: "Kann KI bei Massenarbeitsrechtsfällen in Stuttgarter Automobilunternehmen helfen?",
        answer: "Ja — KI unterstützt bei der strukturierten Auswertung von Massenverfahren, erstellt Vorlagen für Vergleichsangebote und analysiert Präzedenzfälle für effiziente Lösungsstrategien.",
      },
      {
        question: "Wie hilft KI bei Produkthaftungsfragen im Stuttgarter Automotive-Recht?",
        answer: "KI analysiert technische Dokumentation, Gewährleistungsverträge und Schadensfallberichte und bereitet strukturierte Haftungsanalysen vor — damit Anwälte schneller zur rechtlichen Bewertung kommen.",
      },
      {
        question: "Lohnt sich KI für eine mittelgroße Stuttgarter Wirtschaftskanzlei?",
        answer: "Besonders ja — mittelgroße Kanzleien mit spezialisierten Mandaten wie Automotive-Recht haben oft denselben Dokumentendurchsatz wie große Kanzleien, aber weniger Associates. KI schließt diese Lücke.",
      },
    ],
  },
  {
    slug: "nuernberg",
    name: "Nürnberg",
    layout: 2,
    metaTitle: "KI Beratung für Rechtsanwälte Nürnberg | kiberatung.de",
    metaDescription: "KI-Lösungen für Nürnberger Kanzleien: Mandantenbot, Dokumentenanalyse, mehr Kapazität. Kostenlose Erstberatung.",
    h1: "KI für Nürnberger Kanzleien: Mittelstandsmandate effizienter und skalierbarer machen",
    intro: "Nürnbergs mittelständisch geprägte Kanzleien betreuen fränkische Unternehmen, Handwerker und Privatmandanten. KI-Automatisierung gibt kleinen und mittleren Kanzleien hier überproportionale Hebelwirkung: Mehr Mandate annehmen, schneller reagieren und professioneller auftreten — mit denselben Ressourcen. Kanzleien, die früh auf KI setzen, sichern sich langfristige Wettbewerbsvorteile in einem Markt, der gerade digitalisiert.",
    stats: {
      betriebe: "1.200+",
      mitarbeiter: "5.600",
      markttrend: "+6,8 %",
      label1: "Kanzleien in Nürnberg",
      label2: "Juristen und Kanzleimitarbeiter in Nürnberg",
      label3: "Umsatzwachstum im Nürnberger Rechtsmarkt",
    },
    caseStudy: {
      restaurant: "Kanzlei Zimmermann – Nürnberg-Gostenhof",
      challenge: "Die Einzelkanzlei mit einem Associate betreute Mittelstandsunternehmen im Vertrags- und Gesellschaftsrecht — hatte aber kaum Kapazitäten für Neumandatsgewinnung und verbrachte zu viel Zeit mit Routinevertragsanalysen.",
      solution: "KI-Mandantenbot für 24/7-Erstanfragen, KI-Vertragsanalyse für Standard-Gesellschaftsverträge und Kaufverträge sowie automatisierte Mandatskorrespondenz.",
      result1: "Neue Mandate +85 %",
      result2: "Routineverträge 4× schneller bearbeitet",
      result3: "Freie Beratungszeit +3,5 h/Woche",
    },
    faqs: [
      {
        question: "Wie hilft KI kleinen Nürnberger Kanzleien bei der Mandatsgewinnung?",
        answer: "Ein KI-Mandantenbot auf der Kanzlei-Website nimmt Erstanfragen rund um die Uhr entgegen, qualifiziert nach Rechtsgebiet und Mandatsgröße und bucht Erstberatungsgespräche — auch wenn der Anwalt gerade im Termin ist.",
      },
      {
        question: "Kann KI Nürnberger Kanzleien bei Gesellschaftsvertragsanpassungen helfen?",
        answer: "Ja — KI analysiert GmbH-Satzungen, Gesellschaftervereinbarungen und Kaufverträge strukturiert auf Anpassungsbedarf und erstellt Kommentare und Empfehlungen für die anwaltliche Überprüfung.",
      },
      {
        question: "Wie hilft KI bei Nürnberger Erbrecht- und Immobilienmandaten?",
        answer: "KI analysiert Testamente, Erbverträge und Grundbuchauszüge strukturiert, extrahiert relevante Klauseln und bereitet übersichtliche Zusammenfassungen vor — damit der Anwalt mehr Zeit für die Mandantenberatung hat.",
      },
      {
        question: "Ist KI erschwinglich für eine kleine Einzelkanzlei in Nürnberg?",
        answer: "Ja — wir bieten skalierbare Einstiegslösungen, die sich schon ab dem ersten zusätzlichen Mandat amortisieren. Das erste Gespräch ist kostenlos und wir zeigen, was für Ihre Kanzleigröße sinnvoll ist.",
      },
    ],
  },
  {
    slug: "leipzig",
    name: "Leipzig",
    layout: 3,
    metaTitle: "KI Beratung für Rechtsanwälte Leipzig | kiberatung.de",
    metaDescription: "KI-Lösungen für Leipziger Kanzleien: Mandantenbot, Dokumentenanalyse, digitale Akquise. Jetzt anfragen.",
    h1: "KI für Leipziger Kanzleien: Wachsenden Rechtsmarkt mit KI-Effizienz bedienen",
    intro: "Leipzig entwickelt sich zu einem wachsenden Rechtsmarkt — mit einer wachsenden Wirtschaft, vielen Startup-Gründungen und zunehmender Nachfrage nach Wirtschafts- und IT-Recht. Kanzleien, die früh auf KI setzen, sichern sich Wettbewerbsvorteile in einem Markt, der gerade digitalisiert: schnellere Mandatsbearbeitung, professionellere Außendarstellung und 24/7-Erreichbarkeit ohne Personalkosten.",
    stats: {
      betriebe: "740+",
      mitarbeiter: "3.400",
      markttrend: "+10,2 %",
      label1: "Kanzleien in Leipzig",
      label2: "Juristen und Kanzleimitarbeiter in Leipzig",
      label3: "Umsatzwachstum im Leipziger Rechtsmarkt",
    },
    caseStudy: {
      restaurant: "Kanzlei Richter & Scholz – Leipzig-Innenstadt",
      challenge: "Die wachsende Kanzlei für Startup- und IT-Recht hatte mehr Anfragen als sie bearbeiten konnte. Viele Erstanfragen von Gründern kamen abends und am Wochenende — und blieben unbeantwortet bis zum nächsten Werktag.",
      solution: "KI-Mandantenbot mit Startup-Spezial-Qualifizierung, KI-Analyse für Standard-Gründungsdokumente und digitale Erstberatungsworkflows für Jungunternehmer.",
      result1: "Erstanfragen beantwortet: 100 %",
      result2: "Startup-Mandate +148 %",
      result3: "Erstberatungskonversion +62 %",
    },
    faqs: [
      {
        question: "Wie hilft KI Leipziger Kanzleien bei Startup-Mandaten?",
        answer: "KI qualifiziert Gründungsanfragen automatisch, analysiert Standarddokumente wie GmbH-Satzungen und Term Sheets und bereitet strukturierte Briefings für die anwaltliche Beratung vor — effizient und skalierbar.",
      },
      {
        question: "Kann KI die digitale Sichtbarkeit einer Leipziger Kanzlei verbessern?",
        answer: "Ja — KI unterstützt bei der Erstellung von rechtsfachlichen Blog-Beiträgen, FAQ-Seiten und strukturierten Dateninhalten, die die Suchmaschinenrankings verbessern und qualifizierte Anfragen anziehen.",
      },
      {
        question: "Wie hilft KI bei IT-Vertragsrecht für Leipziger Tech-Unternehmen?",
        answer: "KI prüft SaaS-Verträge, Entwicklerverträge und Open-Source-Lizenzen strukturiert auf Risiken, Haftungsklauseln und DSGVO-Anforderungen — und gibt Anwälten eine strukturierte Risikomatrix für die Beratung.",
      },
      {
        question: "Ist KI sinnvoll für eine Kanzlei in einem wachsenden Markt wie Leipzig?",
        answer: "Besonders sinnvoll — wer jetzt KI-Prozesse aufbaut, kann das Marktwachstum ohne proportionale Kosten mitgehen. Kanzleien, die früh skalierbare Strukturen aufbauen, gewinnen langfristig.",
      },
    ],
  },
  {
    slug: "bremen",
    name: "Bremen",
    layout: 1,
    metaTitle: "KI Beratung für Rechtsanwälte Bremen | kiberatung.de",
    metaDescription: "KI-Lösungen für Bremer Kanzleien: Handels- und Seerecht, Dokumentenanalyse, Mandantenbot. Kostenlose Erstberatung.",
    h1: "KI für Bremer Kanzleien: Handels- und Seerecht digital meistern",
    intro: "Bremen als Handels- und Seerechtsstandort hat spezifische Anforderungen an juristische Dokumentenanalyse — von Frachtverträgen bis zu Handelsstreitigkeiten. KI-gestützte Vertragsrecherche und Dokumentenanalyse spart hier besonders viel Zeit und erlaubt Bremer Kanzleien, das Volumen internationaler Handelsmandate effizienter zu bewältigen. Ein Mandantenbot, der rund um die Uhr erreichbar ist, modernisiert das Kanzleibild nachhaltig.",
    stats: {
      betriebe: "580+",
      mitarbeiter: "2.700",
      markttrend: "+6,4 %",
      label1: "Kanzleien in Bremen",
      label2: "Juristen und Kanzleimitarbeiter in Bremen",
      label3: "Umsatzwachstum im Bremer Rechtsmarkt",
    },
    caseStudy: {
      restaurant: "Hafen Recht Martens – Bremen-Altstadt",
      challenge: "Die auf Handels- und Transportrecht spezialisierte Kanzlei bearbeitete internationale Frachtrechtsstreitigkeiten mit umfangreichen englischsprachigen Dokumenten. Die Analyse kostete unverhältnismäßig viel Zeit und begrenzte die Fallkapazität.",
      solution: "Mehrsprachige KI-Dokumentenanalyse für Frachtverträge und Konnossemente, automatische Extraktion von Haftungsklauseln und Schadenssummen sowie KI-gestützte Schriftsatz-Vorbereitung.",
      result1: "Fallanalysezeit −72 %",
      result2: "Frachtrechts-Mandate +91 %",
      result3: "Schriftsatzerstellung 2× schneller",
    },
    faqs: [
      {
        question: "Wie hilft KI Bremer Kanzleien bei Frachtrechtsstreitigkeiten?",
        answer: "KI analysiert Frachtverträge, Konnossemente und Transportversicherungsunterlagen auf relevante Haftungsklauseln, Fristen und Schadenspositionen — und erstellt strukturierte Fallübersichten für die anwaltliche Bewertung.",
      },
      {
        question: "Kann KI mehrsprachige Handelsdokumente für Bremer Kanzleien verarbeiten?",
        answer: "Ja — KI verarbeitet englisch-, niederländisch- und deutschsprachige Handelsdokumente gleichzeitig, übersetzt, extrahiert und vergleicht relevante Klauseln in einer strukturierten Analyse.",
      },
      {
        question: "Wie hilft ein KI-Mandantenbot einer Bremer Kanzlei bei der Akquise?",
        answer: "Der Mandantenbot nimmt Erstanfragen rund um die Uhr entgegen, qualifiziert nach Rechtsgebiet und Sachverhaltstyp und bucht Erstberatungsgespräche — damit kein potenzielles Mandat verloren geht.",
      },
      {
        question: "Was kostet KI-Beratung für eine Bremer Kanzlei?",
        answer: "Das erste Gespräch ist kostenlos. Wir zeigen konkret, welche KI-Lösungen für Ihre Kanzleigröße und Rechtsgebiete sinnvoll sind — und welchen ROI Sie in den ersten 6 Monaten realistisch erwarten können.",
      },
    ],
  },
];

export const cityMap: Record<string, CityData> = Object.fromEntries(
  cities.map((c) => [c.slug, c])
);

export function generateStaticParamsList() {
  return cities.map((c) => ({ stadt: c.slug }));
}
