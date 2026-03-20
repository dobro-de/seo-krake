import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { blogPosts, getBlogPost, formatDate } from "@/lib/blog";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | KI Beratung Blog`,
    description: post.description,
    keywords: post.keywords.join(", "),
    openGraph: {
      title: post.ogTitle,
      description: post.description,
      type: "article",
      locale: "de_DE",
      publishedTime: post.date,
      tags: post.keywords,
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.keywords.join(", "),
    url: `https://kiberatung.de/blog/${post.slug}`,
    author: {
      "@type": "Organization",
      name: "KI Beratung",
      url: "https://kiberatung.de",
    },
    publisher: {
      "@type": "Organization",
      name: "KI Beratung",
      url: "https://kiberatung.de",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://kiberatung.de/blog/${post.slug}`,
    },
    inLanguage: "de",
    about: post.keywords.map((kw) => ({ "@type": "Thing", name: kw })),
  };

  return (
    <>
      <Nav />
      <main style={{ paddingTop: "120px", minHeight: "100vh" }}>
        {/* Back link */}
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "0 24px 32px",
          }}
        >
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              color: "var(--text-gray)",
              textDecoration: "none",
              fontSize: "14px",
              transition: "color 0.15s",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M11 7H3M6 4L3 7l3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Zurück zum Blog
          </Link>
        </div>

        {/* Article Header */}
        <header
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "0 24px 48px",
          }}
        >
          {/* Keyword badges */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "20px",
            }}
          >
            {post.keywords.slice(0, 2).map((kw) => (
              <span
                key={kw}
                style={{
                  background: "rgba(249,115,22,0.1)",
                  border: "1px solid rgba(249,115,22,0.25)",
                  borderRadius: "999px",
                  padding: "4px 12px",
                  fontSize: "12px",
                  color: "var(--accent)",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                }}
              >
                {kw}
              </span>
            ))}
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "20px",
              color: "var(--text-white)",
            }}
          >
            {post.title}
          </h1>

          {/* Meta */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              fontSize: "14px",
              color: "var(--text-gray)",
              alignItems: "center",
              paddingBottom: "32px",
              borderBottom: "1px solid var(--border-subtle)",
            }}
          >
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>{post.readingTime} Min. Lesezeit</span>
          </div>
        </header>

        {/* Article Content */}
        <article
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "0 24px 80px",
          }}
        >
          {post.sections.map((section, idx) => (
            <section key={idx} style={{ marginBottom: "48px" }}>
              {section.heading && (
                <h2
                  style={{
                    fontSize: "clamp(20px, 2.5vw, 26px)",
                    fontWeight: 700,
                    color: "var(--text-white)",
                    marginBottom: "16px",
                    lineHeight: 1.3,
                  }}
                >
                  {section.heading}
                </h2>
              )}
              <div
                style={{
                  color: "var(--text-gray)",
                  lineHeight: 1.8,
                  fontSize: "16px",
                  whiteSpace: "pre-wrap",
                }}
                dangerouslySetInnerHTML={{
                  __html: renderBody(section.body),
                }}
              />
            </section>
          ))}

          {/* CTA Block */}
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(249,115,22,0.08) 0%, rgba(249,115,22,0.02) 100%)",
              border: "1px solid rgba(249,115,22,0.25)",
              borderRadius: "var(--radius-card)",
              padding: "32px",
              textAlign: "center",
              marginTop: "64px",
            }}
          >
            <h3
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "var(--text-white)",
                marginBottom: "10px",
              }}
            >
              Bereit für Ihren nächsten Schritt?
            </h3>
            <p
              style={{
                color: "var(--text-gray)",
                marginBottom: "24px",
                lineHeight: 1.6,
              }}
            >
              Wir analysieren Ihr Unternehmen und zeigen Ihnen, wo KI konkret
              hilft — kostenlos und unverbindlich.
            </p>
            <a
              href="/#kontakt"
              style={{
                display: "inline-block",
                background: "var(--accent)",
                color: "#000",
                fontWeight: 700,
                fontSize: "15px",
                padding: "12px 28px",
                borderRadius: "var(--radius-pill)",
                textDecoration: "none",
                transition: "background 0.15s",
              }}
            >
              Kostenlos anfragen
            </a>
          </div>
        </article>

        {/* Related Posts */}
        <section
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "0 24px 80px",
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              fontWeight: 700,
              marginBottom: "24px",
              color: "var(--text-white)",
            }}
          >
            Weitere Artikel
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 2)
              .map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="related-post-link"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "16px",
                    padding: "16px 20px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "10px",
                    textDecoration: "none",
                    transition: "border-color 0.15s",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "var(--text-white)",
                        marginBottom: "4px",
                      }}
                    >
                      {related.title}
                    </p>
                    <p style={{ fontSize: "12px", color: "var(--text-gray)" }}>
                      {related.readingTime} Min. Lesezeit
                    </p>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    style={{ flexShrink: 0, color: "var(--accent)" }}
                  >
                    <path
                      d="M3 8h10M9 5l3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              ))}
          </div>
        </section>
      </main>
      <Footer />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}

/**
 * Minimal markdown-to-HTML renderer for bold, checkboxes, tables, and paragraphs.
 * No external dependency needed.
 */
function renderBody(raw: string): string {
  const lines = raw.split("\n");
  const output: string[] = [];
  let inTable = false;
  let tableRows: string[][] = [];

  function flushTable() {
    if (!tableRows.length) return;
    const [header, , ...body] = tableRows;
    const headerHtml = header
      .map((c) => `<th style="padding:8px 12px;text-align:left;color:var(--text-white);font-weight:600;border-bottom:1px solid var(--border-subtle)">${c}</th>`)
      .join("");
    const bodyHtml = body
      .map(
        (row) =>
          `<tr>${row
            .map(
              (c) =>
                `<td style="padding:8px 12px;color:var(--text-gray);border-bottom:1px solid rgba(248,250,252,0.04)">${c}</td>`
            )
            .join("")}</tr>`
      )
      .join("");
    output.push(
      `<div style="overflow-x:auto;margin:16px 0"><table style="width:100%;border-collapse:collapse;background:var(--bg-card);border-radius:8px;overflow:hidden"><thead><tr>${headerHtml}</tr></thead><tbody>${bodyHtml}</tbody></table></div>`
    );
    tableRows = [];
    inTable = false;
  }

  for (const line of lines) {
    if (line.startsWith("|")) {
      inTable = true;
      const cells = line
        .split("|")
        .slice(1, -1)
        .map((c) => c.trim());
      tableRows.push(cells);
      continue;
    }
    if (inTable) flushTable();

    // Checkbox list
    if (line.startsWith("☐")) {
      output.push(
        `<div style="display:flex;gap:10px;align-items:flex-start;margin:6px 0">
          <span style="color:var(--accent);margin-top:2px;flex-shrink:0">☐</span>
          <span>${processInline(line.slice(1).trim())}</span>
        </div>`
      );
      continue;
    }

    // Bullet list
    if (line.startsWith("- ")) {
      output.push(
        `<li style="margin:5px 0 5px 20px;color:var(--text-gray);line-height:1.7">${processInline(line.slice(2))}</li>`
      );
      continue;
    }

    // Blank line
    if (!line.trim()) {
      output.push("<br/>");
      continue;
    }

    // Paragraph
    output.push(`<p style="margin:0 0 4px">${processInline(line)}</p>`);
  }

  if (inTable) flushTable();

  return output.join("\n");
}

function processInline(text: string): string {
  // Bold: **text**
  return text.replace(/\*\*(.+?)\*\*/g, "<strong style=\"color:var(--text-white);font-weight:700\">$1</strong>");
}
