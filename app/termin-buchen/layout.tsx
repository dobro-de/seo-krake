import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kostenloses 30-Minuten-Gespräch buchen | kiberatung.de",
  description:
    "Buchen Sie jetzt Ihr kostenloses 30-Minuten-Erstgespräch. Keine Verpflichtung, keine versteckten Kosten. Wir analysieren Ihre größten KI-Hebel.",
  alternates: {
    canonical: "https://kiberatung.de/termin-buchen",
  },
};

export default function TerminBuchenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
