import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { blogPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — KI Beratung | Insights & Praxiswissen",
  description:
    "Praxiswissen rund um KI im Unternehmen: Kundenservice, Barrierefreiheit, Telefonassistenten und mehr. Kostenlose Guides von KI-Experten.",
  keywords: "KI Blog, KI Beratung Blog, KI Kundenservice, BFSG 2025, KI Telefonassistent",
  openGraph: {
    title: "Blog — KI Beratung | Insights & Praxiswissen",
    description:
      "Praxiswissen rund um KI im Unternehmen. Kostenlose Guides von KI-Experten.",
    type: "website",
    locale: "de_DE",
  },
};

const POSTS_PER_PAGE = 6;

export default function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Math.max(1, parseInt(searchParams?.page ?? "1", 10));
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = blogPosts.slice(start, start + POSTS_PER_PAGE);

  return (
    <>
      <Nav />
      <main style={{ paddingTop: "120px", minHeight: "100vh" }}>
        {/* Header */}
        <section
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 24px 64px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "rgba(249,115,22,0.12)",
              border: "1px solid rgba(249,115,22,0.3)",
              borderRadius: "999px",
              padding: "6px 18px",
              fontSize: "13px",
              fontWeight: 600,
              color: "var(--accent)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Blog
          </div>
          <h1
            className="font-display"
            style={{ fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 1.1, marginBottom: "16px" }}
          >
            KI-Wissen für <span className="text-accent">Unternehmen</span>
          </h1>
          <p
            style={{
              color: "var(--text-gray)",
              fontSize: "18px",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Praxisnahe Guides, Checklisten und Entscheidungshilfen rund um
            Künstliche Intelligenz — ohne Marketing-Geschwätz.
          </p>
        </section>

        {/* Card Grid */}
        <section
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "24px",
              marginBottom: "64px",
            }}
          >
            {visiblePosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="blog-card"
              >
                <article
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Image Placeholder */}
                  <div
                    style={{
                      height: "180px",
                      background:
                        "linear-gradient(135deg, rgba(249,115,22,0.08) 0%, rgba(249,115,22,0.02) 100%)",
                      borderBottom: "1px solid var(--border-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      style={{ opacity: 0.25 }}
                    >
                      <rect
                        x="4"
                        y="4"
                        width="32"
                        height="32"
                        rx="4"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M4 28L14 18L20 24L28 14L36 28"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="13" cy="15" r="3" fill="currentColor" />
                    </svg>
                  </div>

                  {/* Content */}
                  <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                    {/* Meta */}
                    <div
                      style={{
                        display: "flex",
                        gap: "12px",
                        fontSize: "12px",
                        color: "var(--text-gray)",
                        marginBottom: "12px",
                        alignItems: "center",
                      }}
                    >
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span style={{ opacity: 0.4 }}>·</span>
                      <span>{post.readingTime} Min. Lesezeit</span>
                    </div>

                    {/* Title */}
                    <h2
                      style={{
                        fontSize: "17px",
                        fontWeight: 700,
                        lineHeight: 1.35,
                        color: "var(--text-white)",
                        marginBottom: "10px",
                      }}
                    >
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p
                      style={{
                        fontSize: "14px",
                        color: "var(--text-gray)",
                        lineHeight: 1.6,
                        flex: 1,
                        marginBottom: "20px",
                      }}
                    >
                      {post.excerpt}
                    </p>

                    {/* CTA */}
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "var(--accent)",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      Artikel lesen
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M3 7h8M8 4l3 3-3 3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "8px",
                paddingBottom: "80px",
              }}
            >
              {currentPage > 1 && (
                <Link
                  href={`/blog?page=${currentPage - 1}`}
                  style={{
                    padding: "8px 16px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "8px",
                    color: "var(--text-white)",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  ← Zurück
                </Link>
              )}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Link
                  key={page}
                  href={`/blog?page=${page}`}
                  style={{
                    padding: "8px 14px",
                    background:
                      page === currentPage ? "var(--accent)" : "var(--bg-card)",
                    border: `1px solid ${
                      page === currentPage
                        ? "var(--accent)"
                        : "var(--border-subtle)"
                    }`,
                    borderRadius: "8px",
                    color: page === currentPage ? "#000" : "var(--text-white)",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: page === currentPage ? 700 : 400,
                  }}
                >
                  {page}
                </Link>
              ))}
              {currentPage < totalPages && (
                <Link
                  href={`/blog?page=${currentPage + 1}`}
                  style={{
                    padding: "8px 16px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "8px",
                    color: "var(--text-white)",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  Weiter →
                </Link>
              )}
            </div>
          )}
        </section>
      </main>
      <Footer />

      {/* Blog List Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "KI Beratung Blog",
            description:
              "Praxiswissen rund um KI im Unternehmen: Guides, Checklisten und Entscheidungshilfen.",
            url: "https://kiberatung.de/blog",
            blogPost: blogPosts.map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              description: p.excerpt,
              url: `https://kiberatung.de/blog/${p.slug}`,
              datePublished: p.date,
              keywords: p.keywords.join(", "),
            })),
          }),
        }}
      />
    </>
  );
}
