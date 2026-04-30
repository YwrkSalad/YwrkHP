import type { Metadata } from "next";
import Image from "next/image";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import ScrollReveal from "../_components/ScrollReveal";
import PageTracker from "../_components/PageTracker";

export const metadata: Metadata = { title: "研究・社会連携" };

const centers = [
  {
    name: "やわらか知のフォーラム研究センター",
    description:
      "学部横断の研究拠点。文理融合プロジェクトを推進し、学内外の研究者が集う場を提供します。年次フォーラムには国内外から200名以上が参加します。",
    topics: ["学際研究", "知識共創", "オープンサイエンス"],
  },
  {
    name: "共生社会デザイン研究所",
    description:
      "地域・福祉・多文化共生をテーマに、フィールドワークを通じた実践的研究を行います。自治体・NPOと連携した社会実装プロジェクトを多数推進中です。",
    topics: ["地域連携", "フィールドワーク", "政策提言"],
  },
  {
    name: "情報・生命インタフェース研究センター",
    description:
      "AIと生命科学の融合領域を探求します。バイオインフォマティクス・ヒューマンコンピュータインタラクションの最前線研究を展開しています。",
    topics: ["AI・機械学習", "バイオインフォマティクス", "HCI"],
  },
  {
    name: "環境・サステナビリティ研究所",
    description:
      "地球環境の持続可能性を多角的に研究します。気候変動・生物多様性・循環型社会をテーマに、企業・行政と連携した応用研究を行います。",
    topics: ["気候変動", "生物多様性", "循環経済"],
  },
];

const partnerships = [
  {
    name: "やわらか市",
    type: "自治体",
    detail: "地域共生・まちづくり施策の共同研究",
  },
  {
    name: "やわらかテクノロジー株式会社",
    type: "企業",
    detail: "情報デザイン・AI応用の産学連携",
  },
  {
    name: "やわらか医療センター",
    type: "医療機関",
    detail: "生命科学・医療福祉分野の共同研究",
  },
  {
    name: "Universität Weich（ドイツ）",
    type: "海外大学",
    detail: "共生社会・環境研究の国際共同研究",
  },
  {
    name: "Soft University（カナダ）",
    type: "海外大学",
    detail: "文化・メディア研究の国際交流",
  },
];

export default function ResearchPage() {
  return (
    <>
      <PageTracker page="/research" />
      <Nav />
      <main className="pt-[4.5rem]">
        {/* ページヒーロー */}
        <section className="relative flex h-72 overflow-hidden sm:h-96">
          <Image
            src="/research/researching.png"
            alt="研究の様子"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
          <div className="relative z-10 flex w-full flex-col justify-end px-8 pb-10 sm:px-14 sm:pb-14">
            <p className="mb-2 text-xs font-medium tracking-[0.3em] text-white/70 uppercase">
              Research
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              研究・社会連携
            </h1>
            <p className="mt-3 text-sm font-light text-white/75">
              学際的な研究と地域・産業との連携を通じて、社会に価値を還元します。
            </p>
          </div>
        </section>

        {/* 研究センター */}
        <section id="centers" className="bg-white px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <p className="text-accent-600 mb-3 text-xs font-medium tracking-[0.3em] uppercase">
                Research Centers
              </p>
              <h2 className="mb-14 text-3xl font-semibold tracking-tight text-zinc-900">
                研究センター・研究所
              </h2>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-2">
              {centers.map((c, i) => (
                <ScrollReveal key={c.name} delay={i * 0.09}>
                  <div className="rounded-md border border-stone-100 bg-stone-50 p-7">
                    <h3 className="mb-3 text-base leading-snug font-semibold text-zinc-900">
                      {c.name}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-stone-500">
                      {c.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {c.topics.map((t) => (
                        <span
                          key={t}
                          className="border-accent-200 text-accent-600 rounded border px-3 py-0.5 text-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 社会連携 */}
        <section id="collaboration" className="bg-stone-50 px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <p className="text-accent-600 mb-3 text-xs font-medium tracking-[0.3em] uppercase">
                Partnerships
              </p>
              <h2 className="mb-14 text-3xl font-semibold tracking-tight text-zinc-900">
                社会連携・産学連携
              </h2>
            </ScrollReveal>

            <div className="divide-y divide-stone-100 rounded-md bg-white">
              {partnerships.map((p, i) => (
                <ScrollReveal key={p.name} delay={i * 0.07}>
                  <div className="flex flex-col gap-2 px-8 py-5 sm:flex-row sm:items-center sm:gap-6">
                    <span className="w-20 shrink-0 rounded bg-stone-100 px-3 py-0.5 text-center text-xs text-stone-500">
                      {p.type}
                    </span>
                    <span className="flex-1 text-sm font-medium text-zinc-800">
                      {p.name}
                    </span>
                    <span className="text-xs text-stone-400">{p.detail}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
