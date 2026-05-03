import type { Metadata } from "next";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import ScrollReveal from "../_components/ScrollReveal";
import PageTracker from "../_components/PageTracker";
import PageHero from "../_components/PageHero";
import PageSection from "../_components/PageSection";
import SectionHeading from "../_components/SectionHeading";
import FeatureCard from "../_components/FeatureCard";

export const metadata: Metadata = { title: "キャンパスライフ" };

type Club = { name: string; note?: string };

const clubs: { category: string; list: Club[] }[] = [
  {
    category: "体育系",
    list: [
      { name: "バスケットボール部" },
      { name: "サッカー部" },
      { name: "テニス部" },
      { name: "水泳部" },
      { name: "ダンスサークル" },
      { name: "ヨガ部" },
      { name: "バドミントンサークル" },
      { name: "卓球部" },
      { name: "やわらか部" },
    ],
  },
  {
    category: "音楽・DJ系",
    list: [
      {
        name: "DJ研究会",
        note: "Pioneer CDJ-004504 × 4台・DDJ-A810 × 1台 完備",
      },
      { name: "軽音楽部", note: "スタジオ2室・全楽器備品貸出あり" },
      { name: "アカペラサークル" },
      { name: "ジャズ研究会" },
      { name: "DTMサークル", note: "DAW・MIDIキーボード常設" },
      { name: "レコード研究会" },
      { name: "吹奏楽団" },
    ],
  },
  {
    category: "文化系",
    list: [
      { name: "演劇部" },
      { name: "写真部" },
      { name: "映画研究会" },
      { name: "文芸サークル" },
      { name: "陶芸部" },
      { name: "アニメ・マンガ研究会" },
      { name: "ゲームサークル" },
    ],
  },
  {
    category: "学術系",
    list: [
      { name: "プログラミングサークル" },
      { name: "国際交流サークル" },
      { name: "環境活動団体" },
      { name: "ボランティアサークル" },
      { name: "起業研究会" },
      { name: "AI研究会" },
      { name: "天文サークル" },
    ],
  },
];

const facilities = [
  {
    name: "やわらか図書館・ラーニングコモンズ",
    description:
      "蔵書30万冊、電子ジャーナル5万誌を備える総合図書館。24時間利用可能な学習席、グループ学習室、AV視聴室、特殊コレクション閲覧室を設けています。",
    features: ["蔵書30万冊", "電子ジャーナル5万誌", "24時間学習席"],
  },
  {
    name: "研究設備・実験施設",
    description:
      "理工・情報・生命科学の実験室に加え、GPUクラスタ、材料解析装置、バイオ実験室、臨床シミュレーション室を整備しています。",
    features: ["GPUクラスタ", "材料解析", "バイオ実験室"],
  },
  {
    name: "学生食堂・カフェテリア",
    description:
      "学生食堂は1,000席以上を確保し、定食・麺・丼・ベジタリアンメニューを提供。学生交流センターにはカフェとラウンジもあります。",
    features: ["1,000席以上", "日替わり定食", "カフェ併設"],
  },
  {
    name: "学生交流センター・課外活動設備",
    description:
      "多目的ホール、会議室、音楽スタジオ、DJブースを備え、サークル活動や学生主催イベントの拠点として利用されています。",
    features: ["多目的ホール", "音楽スタジオ", "DJブース"],
  },
  {
    name: "健康・スポーツセンター",
    description:
      "体育館、プール、トレーニングルームを完備。保健センターと学生相談室が連携し、学生の心身の健康を支えます。",
    features: ["体育館", "プール", "学生相談室"],
  },
  {
    name: "国際交流センター",
    description:
      "留学・国際交流の窓口。語学学習ラウンジ、留学生サポートデスク、海外協定校との交流プログラムを運営しています。",
    features: ["語学ラウンジ", "留学生支援", "交換留学相談"],
  },
];

const overseas = [
  { country: "アメリカ", universities: 12, programs: ["交換留学", "語学研修"] },
  {
    country: "ヨーロッパ",
    universities: 18,
    programs: ["交換留学", "インターンシップ"],
  },
  {
    country: "アジア",
    universities: 22,
    programs: ["短期研修", "フィールドワーク"],
  },
  {
    country: "オセアニア",
    universities: 8,
    programs: ["語学研修", "交換留学"],
  },
];

export default function CampusPage() {
  return (
    <>
      <PageTracker page="/campus" />
      <Nav />
      <main className="pt-[4.5rem]">
        <PageHero
          eyebrow="Campus Life"
          title="キャンパスライフ"
          description="学びの外でも、やわらかな出会いと成長が待っています。"
          imageSrc="/campus/campus_over.png"
          imageClassName="object-cover"
        />

        {/* クラブ・サークル */}
        <PageSection id="clubs">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Clubs & Circles"
              title="クラブ・サークル"
              description="90以上の団体が活動中。学部の壁を越えた出会いが待っています。"
              titleClassName="text-lg sm:text-3xl font-semibold tracking-tight text-zinc-900"
              descriptionClassName="mt-4 text-base font-light text-stone-500"
            />
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {clubs.map((c, i) => (
              <ScrollReveal
                key={c.category}
                delay={i * 0.08}
                className="h-full"
              >
                <div className="h-full rounded-md border border-stone-200 bg-stone-100/70 p-4 sm:p-6">
                  <h3 className="mb-4 text-sm font-semibold text-zinc-900">
                    {c.category}
                  </h3>
                  <ul className="space-y-2.5">
                    {c.list.map((club) => (
                      <li key={club.name}>
                        <span className="text-xs text-stone-700">
                          {club.name}
                        </span>
                        {club.note && (
                          <p className="mt-0.5 text-xs text-stone-500">
                            {club.note}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </PageSection>

        {/* 施設 */}
        <PageSection id="facilities" className="bg-stone-100 py-8 sm:py-24">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Facilities"
              title="キャンパス施設"
              className="mb-7 sm:mb-12"
              titleClassName="text-lg sm:text-3xl font-semibold tracking-tight text-zinc-900"
            />
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f, i) => (
              <ScrollReveal key={f.name} delay={i * 0.08}>
                <FeatureCard
                  title={f.name}
                  body={f.description}
                  tags={f.features}
                  border
                />
              </ScrollReveal>
            ))}
          </div>
        </PageSection>

        {/* 国際交流 */}
        <PageSection id="international">
          <ScrollReveal>
            <SectionHeading
              eyebrow="International Exchange"
              title="国際交流・留学"
              description="32カ国・60大学との協定により、多彩な国際交流プログラムを用意しています。"
              titleClassName="text-lg sm:text-3xl font-semibold tracking-tight text-zinc-900"
              descriptionClassName="mt-4 text-base font-light text-stone-500"
            />
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {overseas.map((o, i) => (
              <ScrollReveal key={o.country} delay={i * 0.08}>
                <div className="rounded-md border border-stone-200 bg-stone-100/70 p-4 text-center sm:p-6">
                  <p className="text-base font-semibold text-zinc-900">
                    {o.universities}
                  </p>
                  <p className="text-xs text-stone-500">協定校</p>
                  <p className="mt-2 text-xs font-medium text-zinc-700">
                    {o.country}
                  </p>
                  <div className="mt-3 flex flex-wrap justify-center gap-1">
                    {o.programs.map((p) => (
                      <span
                        key={p}
                        className="border-accent-300 text-accent-700 rounded border px-2 py-0.5 text-xs"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
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
