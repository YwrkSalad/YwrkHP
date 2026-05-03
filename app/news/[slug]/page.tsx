import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "../../_components/Nav";
import Footer from "../../_components/Footer";
import ScrollReveal from "../../_components/ScrollReveal";
import PageTracker from "../../_components/PageTracker";
import PageSection from "../../_components/PageSection";
import { news } from "../../../data/news";

function renderInlineText(text: string) {
  const urlPattern = /\[url\](.*?)\[\/url\]/g;
  const nodes: Array<React.ReactNode> = [];

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = urlPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(
        <span key={`text-${lastIndex}`}>
          {text.slice(lastIndex, match.index)}
        </span>,
      );
    }

    const url = match[1];
    nodes.push(
      <a
        key={`url-${match.index}`}
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        className="text-accent-600 decoration-accent-300 hover:text-accent-700 hover:decoration-accent-500 underline underline-offset-2 transition-colors"
      >
        {url}
      </a>,
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(<span key={`text-${lastIndex}`}>{text.slice(lastIndex)}</span>);
  }

  return nodes;
}

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item)
    return {
      title: "記事が見つかりません",
    };
  const title = item.title;
  const description = item.body.split("\n\n")[0];
  return {
    title,
    description,
    openGraph: {
      title: `${title} | やわらか大学`,
      description,
      url: `https://ywrk.org/news/${slug}`,
      type: "article",
      images: [
        {
          url: "/OGP/OGP_1200x630.png",
          width: 1200,
          height: 630,
          alt: "やわらか大学",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/OGP/OGP_1200x630.png"],
    },
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item) notFound();

  const paragraphs = item.body.split("\n\n").filter(Boolean);

  return (
    <>
      <PageTracker page={`/news/${slug}`} />
      <Nav />
      <main className="pt-[4.5rem]">
        {/* ヘッダー */}
        <section className="bg-stone-50 px-5 py-8 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <div className="mb-3 flex items-center gap-3">
                <span className="bg-accent-50 text-accent-600 rounded px-2 py-0.5 text-xs">
                  {item.category}
                </span>
                <span className="text-xs text-stone-400">{item.date}</span>
              </div>
              <h1 className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
                {item.title}
              </h1>
            </ScrollReveal>
          </div>
        </section>

        {/* 本文 */}
        <PageSection>
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <div className="space-y-5 text-sm leading-loose text-stone-700">
                {paragraphs.map((p, i) => {
                  if (p.startsWith("■")) {
                    const lines = p.split("\n").filter(Boolean);
                    const [header, ...items] = lines;
                    return (
                      <div key={i}>
                        <p className="font-semibold text-zinc-900">{header}</p>
                        {items.length > 0 && (
                          <ul className="mt-2 space-y-1 pl-1">
                            {items.map((line, j) => (
                              <li key={j} className="flex gap-2">
                                <span className="shrink-0 text-stone-400">
                                  –
                                </span>
                                <span>{renderInlineText(line)}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  }
                  if (p.startsWith("- ") || p.startsWith("・")) {
                    return (
                      <ul key={i} className="space-y-1 pl-1">
                        {p.split("\n").map((line, j) => (
                          <li key={j} className="flex gap-2">
                            <span className="shrink-0 text-stone-400">–</span>
                            <span>
                              {renderInlineText(line.replace(/^[-・]\s*/, ""))}
                            </span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (p.startsWith("**")) {
                    const lines = p.split("\n");
                    return (
                      <div key={i}>
                        {lines.map((line, j) =>
                          line.startsWith("**") ? (
                            <p key={j} className="font-semibold text-zinc-800">
                              {line.replace(/\*\*/g, "")}
                            </p>
                          ) : (
                            <p key={j}>{line}</p>
                          ),
                        )}
                      </div>
                    );
                  }
                  const lines = p.split("\n").filter(Boolean);
                  if (lines.length > 1) {
                    return (
                      <ul key={i} className="space-y-1 pl-1">
                        {lines.map((line, j) => (
                          <li key={j} className="flex gap-2">
                            <span className="shrink-0 text-stone-400">–</span>
                            <span>{renderInlineText(line)}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={i}>{renderInlineText(p)}</p>;
                })}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-12 border-t border-stone-200 pt-6">
                <Link
                  href="/"
                  className="text-accent-600 hover:text-accent-700 text-xs transition-colors"
                >
                  ← トップページへ戻る
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </PageSection>
      </main>
      <Footer />
    </>
  );
}
