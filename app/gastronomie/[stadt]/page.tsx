import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { cities, cityMap, generateStaticParamsList, type CityData } from "./cityData";
import { getVariantBySlug, VARIANTEN_SLUGS } from "./variantenData";

import LocalHero from "./components/LocalHero";
import CityStats from "./components/CityStats";
import ProblemCards from "./components/ProblemCards";
import FeatureGrid from "./components/FeatureGrid";
import CaseStudy from "./components/CaseStudy";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";

// ─── Static Params ──────────────────────────────────────────────────────────
export function generateStaticParams() {
  return [
    ...generateStaticParamsList(),
    ...VARIANTEN_SLUGS.map((s) => ({ stadt: s })),
  ];
}

// ─── Resolve slug to CityData ────────────────────────────────────────────────
function resolveData(slug: string): CityData | null {
  if (cityMap[slug]) return cityMap[slug];
  const v = getVariantBySlug(slug);
  if (v) return { ...v, layout: 1 };
  return null;
}

// ─── Metadata ───────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ stadt: string }>;
}): Promise<Metadata> {
  const { stadt } = await params;
  const city = resolveData(stadt);
  if (!city) return {};
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: `https://kiberatung.de/gastronomie/${city.slug}` },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `https://kiberatung.de/gastronomie/${city.slug}`,
      siteName: "KI Beratung",
      locale: "de_DE",
      type: "website",
    },
  };
}

// ─── JSON-LD Schema ──────────────────────────────────────────────────────────
function SchemaMarkup({ name, slug }: { name: string; slug: string }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: `KI Beratung Gastronomie ${name}`,
          serviceType: "KI Beratung",
          provider: { "@type": "Organization", name: "KI Beratung", url: "https://kiberatung.de" },
          url: `https://kiberatung.de/gastronomie/${slug}`,
          offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Kostenlose Erstberatung" },
        }),
      }}
    />
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default async function GastronomieStadtPage({
  params,
}: {
  params: Promise<{ stadt: string }>;
}) {
  const { stadt } = await params;
  const city = resolveData(stadt);
  if (!city) notFound();

  const sections = {
    hero: <LocalHero key="hero" city={city} />,
    stats: <CityStats key="stats" city={city} />,
    problems: <ProblemCards key="problems" city={city} />,
    features: <FeatureGrid key="features" city={city} />,
    caseStudy: <CaseStudy key="caseStudy" city={city} />,
    faq: <FAQSection key="faq" city={city} />,
    cta: <CTASection key="cta" city={city} />,
  };

  const order: (keyof typeof sections)[] = ["hero", "problems", "features", "caseStudy", "faq", "cta"];

  const idx = cities.findIndex((c) => c.slug === city.slug);
  const relatedCities = [
    ...cities.slice(Math.max(0, idx - 2), idx),
    ...cities.slice(idx + 1, idx + 3),
  ].slice(0, 4);

  return (
    <>
      <SchemaMarkup name={city.name} slug={city.slug} />
      <Nav />
      <main>
        {order.map((key) => sections[key])}
        <section style={{ background: "var(--bg-card)", padding: "2rem 0", borderTop: "1px solid var(--border-subtle)" }}>
          <div className="container">
            <p style={{ color: "var(--text-gray)", fontSize: "13px", marginBottom: "10px" }}>
              KI Beratung Gastronomie in weiteren Städten:
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {relatedCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/gastronomie/${c.slug}`}
                  style={{ fontSize: "13px", color: "var(--accent)", textDecoration: "none", padding: "4px 10px", border: "1px solid var(--border-subtle)", borderRadius: "4px" }}
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
