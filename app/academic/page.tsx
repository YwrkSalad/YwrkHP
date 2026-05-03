import type { Metadata } from "next";
import { Fragment } from "react";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import ScrollReveal from "../_components/ScrollReveal";
import PageTracker from "../_components/PageTracker";
import PageHero from "../_components/PageHero";
import PageSection from "../_components/PageSection";
import SectionHeading from "../_components/SectionHeading";

export const metadata: Metadata = {
  title: "教務課",
  description: "履修・学籍・証明書発行など、学習に関する手続きをご案内します。",
  openGraph: {
    title: "教務課 | やわらか大学",
    description:
      "履修・学籍・証明書発行など、学習に関する手続きをご案内します。",
    url: "https://ywrk.org/academic",
    type: "website",
  },
};

const certificates = [
  { name: "在学証明書", days: "即日", fee: "200円" },
  { name: "成績証明書", days: "即日", fee: "200円" },
  { name: "卒業（見込）証明書", days: "即日", fee: "200円" },
  { name: "卒業証明書（既卒者）", days: "3営業日", fee: "200円" },
  { name: "学力に関する証明書（教員免許用）", days: "5営業日", fee: "300円" },
  { name: "調査書（学部在学中）", days: "5営業日", fee: "無料" },
];

const procedures = [
  {
    title: "履修登録",
    items: [
      { label: "前期登録期間", value: "4月1日〜4月14日" },
      { label: "後期登録期間", value: "9月20日〜10月3日" },
      { label: "登録方法", value: "学務システム（YWRK Portal）より手続き" },
      { label: "上限単位数", value: "年間48単位（学部による）" },
    ],
  },
  {
    title: "休学・復学・退学",
    items: [
      { label: "申請窓口", value: "教務課窓口（直接持参）" },
      { label: "休学申請期限", value: "前期：4月末 / 後期：9月末" },
      { label: "必要書類", value: "所定申請書・理由書・保証人署名書類" },
      {
        label: "許可基準",
        value: "指導教員・学部長の承認後、教務委員会で審議",
      },
    ],
  },
  {
    title: "卒業・修了認定",
    items: [
      { label: "卒業判定時期", value: "2月中旬（前期卒業：9月中旬）" },
      {
        label: "必要単位数",
        value: "学部・学科の卒業要件による（124〜188単位）",
      },
      {
        label: "確認方法",
        value: "YWRK Portal の「卒業要件チェック」で随時確認可",
      },
      { label: "卒業式", value: "3月下旬（学部） / 9月下旬（大学院）" },
    ],
  },
];

const calendar = [
  { month: "4月", events: ["入学式", "前期履修登録", "前期授業開始"] },
  { month: "7月", events: ["前期定期試験"] },
  { month: "8〜9月", events: ["夏季休業", "集中講義"] },
  { month: "9〜10月", events: ["後期履修登録", "後期授業開始"] },
  { month: "1〜2月", events: ["後期定期試験", "卒業論文提出"] },
  { month: "2〜3月", events: ["卒業判定", "春季休業", "卒業式"] },
];

export default function AcademicPage() {
  return (
    <>
      <PageTracker page="/academic" />
      <Nav />
      <main className="pt-[4.5rem]">
        <PageHero
          eyebrow="Academic Affairs"
          title="教務課"
          description="履修・学籍・証明書発行など、学習に関する手続きをご案内します。"
        />

        {/* 窓口案内 */}
        <PageSection id="counter">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Counter"
              title="窓口案内"
              className="mb-7 sm:mb-12"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-stone-200 bg-stone-100/70 p-4 sm:p-8">
                <p className="mb-4 text-xs font-medium tracking-widest text-stone-500 uppercase">
                  Location
                </p>
                <p className="text-sm font-semibold text-zinc-900">
                  総合管理棟 1階
                </p>
                <p className="mt-1 text-xs text-stone-500">
                  本キャンパス中央棟1F 教務課窓口
                </p>
              </div>
              <div className="rounded-md border border-stone-200 bg-stone-100/70 p-4 sm:p-8">
                <p className="mb-4 text-xs font-medium tracking-widest text-stone-500 uppercase">
                  Hours
                </p>
                <div className="grid grid-cols-[max-content_1fr] gap-x-4 gap-y-1.5 text-xs">
                  <span className="text-stone-500">月〜金</span>
                  <span className="text-zinc-700">9:00〜17:00</span>
                  <span className="text-stone-500">昼休み</span>
                  <span className="text-zinc-700">
                    12:00〜13:00（窓口休止）
                  </span>
                  <span className="text-stone-500">土・日・祝</span>
                  <span className="text-zinc-700">休業</span>
                  <span className="text-stone-500">Email</span>
                  <span className="text-zinc-700">kyomu@ywrk.org</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </PageSection>

        {/* 証明書発行 */}
        <PageSection id="certificates" className="bg-stone-100 py-8 sm:py-24">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Certificates"
              title="証明書発行"
              className="mb-7 sm:mb-12"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="overflow-hidden rounded-md border border-stone-200 bg-white">
              <div className="grid grid-cols-[1fr_max-content_max-content]">
                <div className="border-b border-stone-200 px-4 py-2.5 text-xs font-medium text-stone-500">
                  証明書名
                </div>
                <div className="border-b border-stone-200 px-4 py-2.5 text-xs font-medium text-stone-500">
                  発行日数
                </div>
                <div className="border-b border-stone-200 px-4 py-2.5 text-xs font-medium text-stone-500">
                  手数料
                </div>
                {certificates.map((c, i) => (
                  <Fragment key={c.name}>
                    <span
                      className={`px-4 py-3 text-xs text-zinc-700${i > 0 ? "border-t border-stone-200" : ""}`}
                    >
                      {c.name}
                    </span>
                    <span
                      className={`px-4 py-3 text-xs text-stone-500 tabular-nums${i > 0 ? "border-t border-stone-200" : ""}`}
                    >
                      {c.days}
                    </span>
                    <span
                      className={`px-4 py-3 text-xs text-stone-500 tabular-nums${i > 0 ? "border-t border-stone-200" : ""}`}
                    >
                      {c.fee}
                    </span>
                  </Fragment>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="mt-4 text-xs leading-relaxed text-stone-400">
              ※
              即日発行は窓口受付15:30までの申請が対象。郵送での取り寄せは別途対応。
            </p>
          </ScrollReveal>
        </PageSection>

        {/* 各種手続き */}
        <PageSection id="procedures">
          <ScrollReveal>
            <SectionHeading eyebrow="Procedures" title="各種手続き" />
          </ScrollReveal>

          <div className="space-y-5 sm:space-y-8">
            {procedures.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.08}>
                <div className="rounded-md border border-stone-200 bg-stone-100/70 p-4 sm:p-8">
                  <h3 className="mb-4 text-base font-semibold text-zinc-900 sm:mb-6">
                    {p.title}
                  </h3>
                  <div className="grid grid-cols-[max-content_1fr] overflow-hidden rounded border border-stone-200 bg-white">
                    {p.items.map((item, j) => (
                      <Fragment key={item.label}>
                        <span
                          className={`py-3 pl-4 text-xs text-stone-500 whitespace-nowrap${j > 0 ? "border-t border-stone-200" : ""}`}
                        >
                          {item.label}
                        </span>
                        <span
                          className={`px-4 py-3 text-xs text-zinc-700${j > 0 ? "border-t border-stone-200" : ""}`}
                        >
                          {item.value}
                        </span>
                      </Fragment>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </PageSection>

        {/* 学年暦 */}
        <PageSection id="calendar" className="bg-stone-100 py-8 sm:py-24">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Academic Calendar"
              title="学年暦"
              className="mb-7 sm:mb-12"
            />
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {calendar.map((c, i) => (
              <ScrollReveal key={c.month} delay={i * 0.07}>
                <div className="rounded-md border border-stone-200 bg-white p-4 sm:p-6">
                  <p className="text-accent-600 mb-3 text-base font-semibold">
                    {c.month}
                  </p>
                  <ul className="space-y-1">
                    {c.events.map((ev) => (
                      <li
                        key={ev}
                        className="flex gap-2 text-xs text-stone-600"
                      >
                        <span className="text-stone-300">–</span>
                        {ev}
                      </li>
                    ))}
                  </ul>
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
