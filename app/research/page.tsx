import type { Metadata } from "next";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import ScrollReveal from "../_components/ScrollReveal";
import PageTracker from "../_components/PageTracker";
import PageHero from "../_components/PageHero";
import PageSection from "../_components/PageSection";
import SectionHeading from "../_components/SectionHeading";
import TagBadge from "../_components/TagBadge";

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
        <PageHero
          eyebrow="Research"
          title="研究・社会連携"
          description="学際的な研究と地域・産業との連携を通じて、社会に価値を還元します。"
          imageSrc="/research/researching.png"
          imageAlt="研究の様子"
        />

        {/* 研究センター */}
        <PageSection id="centers">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Research Centers"
              title="研究センター・研究所"
            />
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {centers.map((c, i) => (
              <ScrollReveal key={c.name} delay={i * 0.09}>
                <div className="rounded-md border border-stone-100 bg-stone-50 p-4 sm:p-7">
                  <h3 className="mb-3 text-sm leading-snug font-semibold text-zinc-900">
                    {c.name}
                  </h3>
                  <p className="mb-4 text-xs leading-relaxed text-stone-500">
                    {c.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {c.topics.map((t) => (
                      <TagBadge key={t}>{t}</TagBadge>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </PageSection>

        {/* 社会連携 */}
        <PageSection id="collaboration" className="bg-stone-50 py-8 sm:py-24">
          <ScrollReveal>
            <SectionHeading eyebrow="Partnerships" title="社会連携・産学連携" />
          </ScrollReveal>

          <div className="divide-y divide-stone-100 rounded-md bg-white">
            {partnerships.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 0.07}>
                <div className="flex flex-col gap-2 px-4 py-4 sm:flex-row sm:items-center sm:gap-6 sm:px-8 sm:py-5">
                  <span className="w-20 shrink-0 rounded bg-stone-100 px-3 py-0.5 text-center text-xs text-stone-500">
                    {p.type}
                  </span>
                  <span className="flex-1 text-xs font-medium text-zinc-800">
                    {p.name}
                  </span>
                  <span className="text-xs text-stone-400">{p.detail}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </PageSection>
      </main>
      <Footer />
    </>
  );
}
