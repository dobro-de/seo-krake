export interface BlogSection {
  heading?: string;
  body: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: number; // minutes
  keywords: string[];
  description: string;
  ogTitle: string;
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ki-kundenservice-2025",
    title: "KI im Kundenservice 2025: Was Unternehmen jetzt wissen müssen",
    excerpt:
      "KI verändert den Kundenservice grundlegend. Erfahren Sie, welche Technologien wirklich funktionieren, wie die Implementierung abläuft und was es wirklich kostet.",
    date: "2025-11-15",
    readingTime: 6,
    keywords: ["KI Kundenservice", "Chatbot Unternehmen", "KI Beratung"],
    description:
      "KI im Kundenservice 2025: Aktuelle Technologien, Implementierungsschritte und realistische Kosten für Unternehmen, die jetzt handeln wollen.",
    ogTitle: "KI im Kundenservice 2025 — Der vollständige Guide für Unternehmen",
    sections: [
      {
        heading: "Aktuelle Lage: Warum KI im Kundenservice keine Option mehr ist",
        body: `Die Zahlen sprechen für sich: 67 % der Kunden erwarten heute eine Antwort innerhalb von 60 Minuten — rund um die Uhr, sieben Tage die Woche. Gleichzeitig steigen die Personalkosten im Servicebereich jährlich um durchschnittlich 4–6 %. Unternehmen, die weiterhin auf rein menschliche Agenten setzen, geraten in eine Kostenfalle, die sich mit klassischen Maßnahmen kaum durchbrechen lässt.

KI im Kundenservice bietet hier einen strukturellen Ausweg: intelligente Systeme bearbeiten repetitive Anfragen automatisch, eskalieren komplexe Fälle an Mitarbeiter und lernen mit jeder Interaktion dazu. Laut einer Studie von Gartner werden bis Ende 2025 rund 80 % aller Kundeninteraktionen zumindest teilweise durch KI unterstützt.

Doch die Realität ist differenzierter als Hochglanzbroschüren vermuten lassen. Nicht jede KI-Lösung passt zu jedem Unternehmen. Wer jetzt fundierte Entscheidungen trifft, spart langfristig Kosten und steigert die Kundenzufriedenheit. Wer vorschnell handelt, riskiert teure Fehlinvestitionen.`,
      },
      {
        heading: "Technologien: Was hinter modernem KI-Kundenservice steckt",
        body: `Der Begriff „KI-Kundenservice" umfasst heute ein breites Spektrum an Technologien — mit sehr unterschiedlichen Reifegraden und Einsatzbereichen:

**Regelbasierte Chatbots (Generation 1)**
Die älteste Variante: Bäume aus vordefinierten Antworten und Schlüsselwörtern. Günstig in der Einrichtung, aber starr. Kunden reagieren oft frustriert, wenn die exakte Formulierung nicht passt. Für komplexe oder offene Anfragen ungeeignet.

**NLP-Chatbots (Generation 2)**
Natural Language Processing ermöglicht es, Absichten hinter Formulierungen zu erkennen. Diese Systeme verstehen „Ich möchte meine Bestellung stornieren" genauso wie „Bestellung rückgängig machen". Die Trainingsphase ist aufwendig, die Ergebnisse aber deutlich robuster.

**Generative KI / LLM-basierte Chatbots (Generation 3)**
Große Sprachmodelle wie GPT-4 oder Gemini bilden die Basis der aktuellen Generation. Diese Systeme formulieren flüssige, kontextsensitive Antworten und können auf umfangreiche Wissensdatenbanken zugreifen (RAG — Retrieval Augmented Generation). Der entscheidende Vorteil: Sie benötigen kein jahrelanges Training auf eigenen Daten.

**Chatbot für Unternehmen: Hybridmodelle als Goldstandard**
Führende Lösungen kombinieren heute LLM-Power mit regelbasierter Governance: Kreative Formulierungen durch das Sprachmodell, Qualitätssicherung durch definierte Grenzen und Eskalationspfade. Ein Chatbot für Unternehmen muss dabei in bestehende CRM-Systeme wie Salesforce, HubSpot oder SAP integriert sein.`,
      },
      {
        heading: "Implementierung: Der realistische Fahrplan",
        body: `Der häufigste Fehler bei der Einführung von KI im Kundenservice ist der fehlende strukturierte Ansatz. Unternehmen wählen eine Lösung, integrieren sie halbherzig und wundern sich, warum die Kundenzufriedenheit nicht steigt.

**Phase 1: Analyse und Use-Case-Selektion (Woche 1–2)**
Dokumentieren Sie alle eingehenden Anfragen der letzten 6 Monate. Kategorisieren Sie diese nach Komplexität und Häufigkeit. Erfahrungsgemäß sind 40–60 % aller Anfragen repetitiv und automatisierbar (Tracking, Öffnungszeiten, Standard-FAQs, Rücksendeprozesse). Genau hier setzt KI zuerst an.

**Phase 2: Technologiewahl und Datenvorbereitung (Woche 3–4)**
Basierend auf dem Use-Case-Portfolio wählen Sie die passende Technologie. Bereiten Sie Wissensdatenbanken, FAQ-Dokumente und Produktinformationen strukturiert auf — das ist oft der zeitintensivste Schritt. Qualität der Eingabedaten bestimmt direkt die Antwortqualität.

**Phase 3: Pilotbetrieb (Woche 5–8)**
Starten Sie mit einem definierten Teilbereich, etwa dem E-Mail-Support für Bestandskunden. Messen Sie Lösungsquote (Containment Rate), Kundenzufriedenheit (CSAT) und Eskalationsrate. Iterieren Sie auf Basis echter Nutzerdaten.

**Phase 4: Rollout und kontinuierliche Optimierung**
Nach erfolgreichem Pilot erfolgt die schrittweise Ausweitung auf weitere Kanäle. KI-Systeme verbessern sich durch Feedback-Schleifen kontinuierlich — planen Sie feste Review-Zyklen ein.`,
      },
      {
        heading: "Kosten: Was KI im Kundenservice wirklich kostet",
        body: `Transparenz bei den Kosten ist selten — dabei ist sie für eine fundierte Entscheidung unerlässlich:

**Einmalkosten (Implementierung)**
Einfache Chatbot-Lösungen auf Basis bestehender Plattformen (Tidio, Intercom KI) starten ab 3.000–8.000 € für Setup und Anpassung. Individuelle LLM-Integrationen mit CRM-Anbindung liegen typischerweise bei 15.000–50.000 €, je nach Komplexität.

**Laufende Kosten**
SaaS-Lizenzkosten für KI-Kundenservice-Plattformen bewegen sich zwischen 200 € und 2.500 € monatlich. Hinzu kommen API-Kosten (bei LLM-Nutzung ca. 0,01–0,10 € pro Konversation) und Wartungsaufwand.

**ROI-Betrachtung**
Ein Unternehmen mit 5.000 Kundenanfragen monatlich und durchschnittlichen Bearbeitungskosten von 8 € je Anfrage trägt 40.000 € monatlich. Bei einer Automatisierungsquote von 50 % spart KI 20.000 € monatlich — abzüglich laufender Systemkosten. Break-Even typischerweise nach 4–8 Monaten.

Die Entscheidung für KI im Kundenservice ist keine IT-Entscheidung — sie ist eine strategische Geschäftsentscheidung. Eine sorgfältige Beratung und klare Zielsetzung vor Projektstart sind der entscheidende Erfolgsfaktor.`,
      },
    ],
  },
  {
    slug: "bfsg-2025-checkliste",
    title: "BFSG 2025: Checkliste für barrierefreie Websites",
    excerpt:
      "Ab Juni 2025 gilt das BFSG für gewerbliche Websites. Was Unternehmen konkret umsetzen müssen — und eine praktische Checkliste zum Abhaken.",
    date: "2025-10-08",
    readingTime: 4,
    keywords: ["BFSG 2025 Checkliste", "barrierefreie Website", "Barrierefreiheit"],
    description:
      "BFSG 2025 Checkliste: Was das Barrierefreiheitsstärkungsgesetz für Ihre Website bedeutet, wen es betrifft und welche konkreten Anforderungen jetzt gelten.",
    ogTitle: "BFSG 2025 Checkliste — Barrierefreie Website gesetzeskonform umsetzen",
    sections: [
      {
        heading: "Was ist das BFSG und warum ist es jetzt relevant?",
        body: `Das Barrierefreiheitsstärkungsgesetz (BFSG) trat am 28. Juni 2025 in Kraft und setzt die europäische Richtlinie zum European Accessibility Act (EAA) in deutsches Recht um. Es verpflichtet Unternehmen, ihre digitalen Produkte und Dienstleistungen barrierefrei zu gestalten.

Die Zielsetzung ist klar: Menschen mit Behinderungen — rund 13 Millionen in Deutschland — sollen gleichberechtigten Zugang zu digitalen Angeboten erhalten. Das betrifft nicht nur staatliche Stellen, sondern auch die private Wirtschaft.

Was viele Unternehmen unterschätzen: Barrierefreiheit ist kein „Nice-to-have", sondern messbare technische Anforderung, die gerichtlich durchgesetzt werden kann. Verstöße können von Verbraucherschutzverbänden abgemahnt werden.`,
      },
      {
        heading: "Wen betrifft das BFSG?",
        body: `Das BFSG richtet sich an Unternehmen des privaten Sektors, die Produkte oder Dienstleistungen in Deutschland anbieten. Konkret relevant für Websites sind vor allem:

- **Online-Händler und E-Commerce**: Alle Online-Shops, die Produkte oder digitale Güter verkaufen
- **Banken und Finanzdienstleister**: Websites, Apps und Online-Banking-Systeme
- **Telekommunikationsanbieter**: Kundenportale und Self-Service-Bereiche
- **Buchungsplattformen**: Hotels, Reisen, Veranstaltungen
- **Streaming-Dienste**: Audio- und Videoangebote mit Nutzerzugang

**Ausnahmen für Kleinstunternehmen**: Unternehmen mit weniger als 10 Mitarbeitenden und einem Jahresumsatz unter 2 Mio. Euro sind grundsätzlich ausgenommen — sofern die Barrierefreiheitsanforderungen eine „unverhältnismäßige Belastung" darstellen würden. Diese Ausnahme greift jedoch nicht automatisch; sie muss aktiv geprüft und dokumentiert werden.`,
      },
      {
        heading: "Konkrete technische Anforderungen",
        body: `Das BFSG orientiert sich an den WCAG 2.1 Richtlinien (Web Content Accessibility Guidelines) auf Konformitätsstufe AA. Die wichtigsten technischen Anforderungen im Überblick:

**Wahrnehmbarkeit**
- Alle Bilder müssen aussagekräftige Alt-Texte haben
- Videos benötigen Untertitel und Audiodeskriptionen
- Texte müssen auch bei 200 % Zoom lesbar bleiben
- Kontrastverhältnis: mindestens 4,5:1 für normalen Text, 3:1 für großen Text

**Bedienbarkeit**
- Alle Funktionen müssen per Tastatur erreichbar sein (ohne Maus)
- Keine Zeitbeschränkungen für Formularausfüllung ohne Verlängerungsoption
- Keine Inhalte, die mehr als 3x pro Sekunde blinken

**Verständlichkeit**
- Sprachattribut im HTML (lang="de") korrekt gesetzt
- Fehlermeldungen in Formularen klar und beschreibend
- Konsistente Navigation auf allen Seiten

**Robustheit**
- HTML muss valide und semantisch korrekt sein
- ARIA-Labels korrekt eingesetzt
- Screenreader-kompatible Strukturierung`,
      },
      {
        heading: "BFSG 2025 Checkliste — zum Abhaken",
        body: `Verwenden Sie diese Checkliste für eine erste Selbsteinschätzung Ihrer Website:

**Bilder und Medien**
☐ Alle Bilder haben aussagekräftige Alt-Texte
☐ Dekorative Bilder haben leere Alt-Attribute (alt="")
☐ Videos haben Untertitel
☐ Audioinhalte haben Transkripte

**Farbe und Kontrast**
☐ Texte erfüllen Kontrastverhältnis 4,5:1
☐ Informationen werden nicht nur durch Farbe vermittelt
☐ Fokus-Indikatoren sind sichtbar

**Navigation und Struktur**
☐ Alle Seiten haben einen aussagekräftigen &lt;title&gt;
☐ Überschriften-Hierarchie ist logisch (H1 → H2 → H3)
☐ Skip-Navigation-Link am Seitenanfang vorhanden
☐ HTML lang-Attribut korrekt gesetzt

**Formulare**
☐ Alle Felder haben sichtbare, programmatisch verknüpfte Labels
☐ Fehlermeldungen sind spezifisch und hilfreich
☐ Pflichtfelder sind klar gekennzeichnet

**Tastatur und interaktive Elemente**
☐ Alle Links, Buttons und Formulare per Tastatur bedienbar
☐ Tab-Reihenfolge ist logisch und vorhersehbar
☐ Modals und Overlays sind tastaturbedienbar

**Rechtliches**
☐ Barrierefreiheitserklärung auf der Website vorhanden
☐ Feedbackmechanismus für Nutzer mit Beschwerden eingerichtet

Eine professionelle Prüfung durch einen zertifizierten Accessibility-Experten ergänzt diese Selbsteinschätzung und sichert Ihre rechtliche Position.`,
      },
    ],
  },
  {
    slug: "ki-telefonassistent-vs-telefonanlage",
    title: "KI-Telefonassistent vs. klassische Telefonanlage: Was ist besser?",
    excerpt:
      "Automatischer Anruf-Empfang oder klassische Telefonanlage? Ein direkter Vergleich zeigt, wann KI wirklich sinnvoll ist — und wann nicht.",
    date: "2025-09-22",
    readingTime: 5,
    keywords: ["KI Telefonassistent", "automatischer Anruf", "KI Telefonanlage"],
    description:
      "KI-Telefonassistent vs. klassische Telefonanlage: Kosten, Features und Implementierung im direkten Vergleich. Klare Empfehlung, wann KI sinnvoll ist.",
    ogTitle: "KI-Telefonassistent vs. Telefonanlage — Der ehrliche Vergleich 2025",
    sections: [
      {
        heading: "Die Ausgangslage: Telefon bleibt relevant",
        body: `Trotz Chat, E-Mail und Self-Service-Portalen: Das Telefon ist für viele Branchen der wichtigste Kundenkanal. Handwerksbetriebe, Arztpraxen, Kanzleien und Dienstleister erhalten täglich Dutzende bis Hunderte Anrufe. Die Frage lautet nicht mehr ob, sondern wie diese Anrufe effizient gehandhabt werden.

Klassische Telefonanlagen — ob On-Premise oder Cloud-basierte PBX-Systeme — leisten seit Jahrzehnten gute Arbeit. Doch sie haben strukturelle Grenzen: Sie können Anrufe weiterleiten, aber nicht verstehen. Außerhalb der Geschäftszeiten verlieren Unternehmen potenzielle Kunden, die keine Lust haben, auf den Anrufbeantworter zu sprechen.

KI-Telefonassistenten schließen genau diese Lücke. Sie empfangen Anrufe automatisch, verstehen gesprochene Sprache und führen echte Dialoge — nicht nur Menü-Bäume.`,
      },
      {
        heading: "Kostenvergleich: Was zahlen Sie wirklich?",
        body: `**Klassische Telefonanlage (Cloud-PBX)**

Einrichtungskosten: 500–3.000 € (je nach Anbieter und Nutzerzahl)
Monatliche Kosten: 15–40 € pro Nebenstelle
Für ein 10-Personen-Unternehmen: 150–400 € monatlich laufend

Leistungsumfang: Anrufweiterleitung, Warteschleifen, Ansagen, Konferenzen, Voicemail. Keine Sprachverarbeitung, kein Verständnis des Anliegens.

**KI-Telefonassistent**

Einrichtungskosten: 1.500–8.000 € (Konfiguration, Training, Integration)
Monatliche Kosten: 100–500 € je nach Anrufvolumen und Funktionsumfang
Für ein 10-Personen-Unternehmen mit 300 Anrufen/Monat: ca. 200–350 € monatlich

Leistungsumfang: Spracherkennung, Intent-Erkennung, Auskunft über Öffnungszeiten, Terminbuchung, Weiterleitung mit Kontextübergabe, 24/7-Betrieb.

**Fazit Kosten**: Bei mittlerem Anrufvolumen sind die Gesamtkosten vergleichbar. Der Mehrwert liegt im Funktionsumfang und der 24/7-Verfügbarkeit.`,
      },
      {
        heading: "Feature-Vergleich: Was kann KI, was klassische Anlagen nicht können?",
        body: `| Funktion | Klassische Anlage | KI-Telefonassistent |
|---|---|---|
| Anrufe annehmen | ✓ | ✓ |
| Weiterleitung | ✓ | ✓ mit Kontext |
| Außerhalb der Öffnungszeiten | Anrufbeantworter | Aktiver Dialog |
| Anliegen verstehen | ✗ | ✓ |
| Termin buchen | ✗ | ✓ (Kalender-Integration) |
| Informationen geben | Nur Ansage | Dynamisch, kontextabhängig |
| Mehrsprachig | ✗ | ✓ (je nach System) |
| CRM-Integration | Begrenzt | ✓ |
| Kostenloser Anruf 24/7 | ✗ | ✓ |

Der entscheidende Unterschied: Eine klassische Anlage verwaltet Anrufe. Ein KI-Telefonassistent führt Gespräche. Für Unternehmen mit standardisierbaren Anfragen — Terminbuchung, Öffnungszeiten, Statusabfragen — ist das ein fundamentaler Produktivitätsgewinn.

**Implementierungsaufwand**

Klassische Cloud-PBX: 1–3 Tage Setup, keine besonderen Anforderungen.
KI-Telefonassistent: 2–6 Wochen für vollständige Integration, inkl. Wissensdatenbank-Aufbau, Testläufe und Feintuning der Spracherkennung auf branchenspezifische Begriffe.`,
      },
      {
        heading: "Empfehlung: Wann lohnt sich welche Lösung?",
        body: `**Klassische Telefonanlage empfiehlt sich, wenn:**
- Ihr Anrufvolumen gering ist (unter 50 Anrufe/Tag)
- Fast alle Anrufe persönliche Beratung erfordern
- Sie kein digitales Buchungssystem haben
- Budget unter 500 € monatlich, schnelle Einrichtung wichtig

**KI-Telefonassistent empfiehlt sich, wenn:**
- Mehr als 30 % Ihrer Anrufe standardisierbare Anfragen sind (Termine, Infos, FAQs)
- Sie außerhalb der Geschäftszeiten erreichbar sein wollen
- Sie Mitarbeiter von repetitiven Anrufen entlasten möchten
- Sie Terminbuchung automatisieren wollen

**Die hybride Realität der Praxis**

Die meisten Unternehmen, die heute auf KI-Telefonassistenten setzen, ersetzen ihre Telefonanlage nicht — sie ergänzen sie. Der KI-Assistent übernimmt Erstgespräche, filtert und qualifiziert Anrufe und leitet nur relevante Anfragen weiter. Das Ergebnis: Mitarbeiter verbringen weniger Zeit mit Standardfragen und mehr Zeit mit wertschöpfenden Gesprächen.

Ein gut konfigurierter automatischer Anruf-Empfang durch KI steigert in der Praxis die Terminbuchungsrate um 20–40 % — allein weil Kunden auch abends und am Wochenende buchen können. Für Dienstleister mit begrenzter Kapazität ist das oft der entscheidende Wettbewerbsvorteil.

Unsere Empfehlung: Starten Sie mit einem Piloten für einen definierten Use Case (z.B. Terminbuchung), messen Sie die Ergebnisse und skalieren Sie dann.`,
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
