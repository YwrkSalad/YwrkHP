import type { Metadata } from "next";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import ScrollReveal from "../_components/ScrollReveal";
import PageTracker from "../_components/PageTracker";
import PageHero from "../_components/PageHero";
import PageSection from "../_components/PageSection";
import SectionHeading from "../_components/SectionHeading";

export const metadata: Metadata = { title: "入試情報" };

const methods = [
  {
    name: "一般選抜",
    en: "General Admission",
    description:
      "大学入学共通テストと個別学力検査（前期・後期）による選抜です。学力の総合的な評価を重視します。",
    schedule: [
      { label: "出願期間", value: "2027年1月13日〜1月24日" },
      { label: "共通テスト", value: "2027年1月17日・18日" },
      { label: "個別試験（前期）", value: "2027年2月25日" },
      { label: "合格発表（前期）", value: "2027年3月10日" },
    ],
  },
  {
    name: "総合型選抜",
    en: "Comprehensive Admission",
    description:
      "学力だけでなく、意欲・個性・将来の展望を総合的に評価する選抜です。書類審査・小論文・面接を実施します。",
    schedule: [
      { label: "出願期間", value: "2026年9月1日〜9月20日" },
      { label: "第一次選考（書類）", value: "2026年10月上旬 通知" },
      { label: "第二次選考（面接）", value: "2026年11月上旬" },
      { label: "合格発表", value: "2026年11月30日" },
    ],
  },
  {
    name: "学校推薦型選抜",
    en: "School Recommendation",
    description:
      "高等学校長の推薦に基づき、調査書・推薦書・小論文によって選抜します。各学部の推薦基準を確認ください。",
    schedule: [
      { label: "出願期間", value: "2026年11月1日〜11月7日" },
      { label: "選考（書類・面接）", value: "2026年11月下旬" },
      { label: "合格発表", value: "2026年12月1日" },
    ],
  },
  {
    name: "編入学試験",
    en: "Transfer Admission",
    description:
      "本校が定める高等専門学校を卒業・修了した方を対象とした編入学試験です。専門的な知識・技術を活かし、3年次からの編入を認めます。筆記試験（専門科目・英語）および面接によって選抜します。",
    schedule: [
      { label: "出願期間", value: "2027年2月1日〜2月14日" },
      { label: "筆記試験", value: "2027年3月1日" },
      { label: "面接", value: "2027年3月8日" },
      { label: "合格発表", value: "2027年3月15日" },
    ],
  },
];

const tuition = [
  { item: "入学金", amount: "200,000円" },
  { item: "授業料（年額）", amount: "620,000円" },
  { item: "施設設備費（年額）", amount: "80,000円" },
  { item: "初年度合計", amount: "900,000円" },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageTracker page="/admissions" />
      <Nav />
      <main className="pt-[4.5rem]">
        <PageHero
          eyebrow="Admissions"
          title="入試情報"
          description="やわらか大学は、4つの入試方式で2027年度学生を募集します。高専卒業生を対象とした編入学試験も実施します。"
          imageSrc="/admissions/expand_examing.jpg"
          imageAlt="入試の様子"
        />

        {/* 入試方式 */}
        <PageSection id="methods">
          <ScrollReveal>
            <SectionHeading eyebrow="Admission Methods" title="入試方式" />
          </ScrollReveal>

          <div className="space-y-8">
            {methods.map((m, i) => (
              <ScrollReveal key={m.name} delay={i * 0.1}>
                <div className="rounded-md border border-stone-200 bg-stone-100/70 p-6 sm:p-8">
                  <div className="mb-6 flex items-start gap-4">
                    <div>
                      <p className="text-xs tracking-widest text-stone-500 uppercase">
                        {m.en}
                      </p>
                      <h3 className="mt-1 text-xl font-semibold text-zinc-900">
                        {m.name}
                      </h3>
                    </div>
                  </div>
                  <p className="mb-6 text-sm leading-relaxed text-stone-700">
                    {m.description}
                  </p>
                  <div className="divide-y divide-stone-200 rounded border border-stone-200 bg-white">
                    {m.schedule.map((s) => (
                      <div key={s.label} className="flex gap-6 px-5 py-3">
                        <span className="w-36 shrink-0 text-xs text-stone-500">
                          {s.label}
                        </span>
                        <span className="text-sm text-zinc-700">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </PageSection>

        {/* 学費 */}
        <PageSection id="tuition" className="bg-stone-100 py-24">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Tuition"
              title="学費・奨学金"
              className="mb-12"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-10 rounded-md border border-stone-200 bg-white">
              <div className="divide-y divide-stone-200">
                {tuition.map((t) => (
                  <div
                    key={t.item}
                    className="flex justify-between gap-4 px-5 py-4 sm:px-6"
                  >
                    <span className="text-sm text-stone-700">{t.item}</span>
                    <span className="text-sm font-medium text-zinc-800">
                      {t.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="bg-accent-800 border-accent-700 rounded-md border p-6 text-white sm:p-8">
              <h3 className="mb-3 text-lg font-semibold">やわらか奨学金制度</h3>
              <p className="text-accent-200 mb-4 text-sm leading-relaxed">
                経済的な理由で進学をためらう学生を支援するため、独自の給付型奨学金を設けています。
                入試成績優秀者には授業料の最大全額免除が適用されます。
              </p>
              <ul className="text-accent-200 space-y-1 text-sm">
                <li>• 特待生奨学金（授業料全額）：各学部5名</li>
                <li>• 優秀生奨学金（授業料半額）：各学部10名</li>
                <li>• 経済支援奨学金（月額3万円）：随時申請可</li>
              </ul>
            </div>
          </ScrollReveal>
        </PageSection>
      </main>
      <Footer />
    </>
  );
}
