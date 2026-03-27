import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KI Telefonassistent für Unternehmen | kiberatung.de",
  description:
    "KI-Telefonassistent: 24/7 automatische Anrufannahme, Terminbuchung und Kundenqualifizierung. Kein Klingeln ins Leere — der KI-Assistent spricht in Ihrer Stimme.",
  alternates: { canonical: "https://kiberatung.de/ki-telefonassistent" },
  openGraph: {
    title: "KI Telefonassistent für Unternehmen | kiberatung.de",
    description:
      "KI-Telefonassistent: 24/7 automatische Anrufannahme, Terminbuchung und Kundenqualifizierung.",
    url: "https://kiberatung.de/ki-telefonassistent",
    siteName: "KI Beratung",
    locale: "de_DE",
    type: "website",
  },
};

export default function KiTelefonassistentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
