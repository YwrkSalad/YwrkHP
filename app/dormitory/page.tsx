import type { Metadata } from "next";
import Image from "next/image";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import ScrollReveal from "../_components/ScrollReveal";
import PageTracker from "../_components/PageTracker";
import PageHero from "../_components/PageHero";
import PageSection from "../_components/PageSection";
import SectionHeading from "../_components/SectionHeading";

export const metadata: Metadata = { title: "学生寮" };

const dorms = [
  {
    id: "dormA",
    name: "第一学生寮",
    en: "Dormitory A",
    target: "男子学生向け",
    capacity: "定員 120 名",
    image: "/dormitory/first_dormitory.png",
    description:
      "緑豊かな南側エリアに位置する男子寮。全室個室にユニットバスを完備し、プライバシーを確保しながら快適な一人暮らしをサポートします。",
    features: [
      { label: "部屋タイプ", value: "個室（18㎡）全120室" },
      { label: "設備", value: "ユニットバス・ロフトベッド・デスク・エアコン" },
      {
        label: "共用施設",
        value: "ラウンジ・自習室・ランドリールーム・駐輪場",
      },
      {
        label: "セキュリティ",
        value: "オートロック・防犯カメラ・管理人常駐（平日）",
      },
    ],
  },
  {
    id: "dormB",
    name: "第二学生寮",
    en: "Dormitory B",
    target: "女子・混合棟",
    capacity: "定員 200 名",
    image: "/dormitory/second_dormitory.png",
    description:
      "学食に直結した利便性の高い大型寮。個室・2人部屋から選択でき、低層フロアはバリアフリー対応。24時間セキュリティ体制で安心して生活できます。",
    features: [
      {
        label: "部屋タイプ",
        value: "個室A（14㎡）・個室B（18㎡）・2人部屋（26㎡）",
      },
      {
        label: "設備",
        value: "バス・トイレ別またはユニットバス・デスク・エアコン",
      },
      {
        label: "共用施設",
        value: "食堂直結・談話室・シアタールーム・屋上テラス",
      },
      {
        label: "セキュリティ",
        value: "24時間オートロック・顔認証入室・防犯カメラ",
      },
    ],
  },
  {
    id: "dormInt",
    name: "国際学生寮",
    en: "International House",
    target: "留学生・研究者向け",
    capacity: "定員 80 名",
    image: "/dormitory/third_dormitory.png",
    description:
      "海外からの留学生や研究者を対象としたインターナショナルハウス。日本語・英語の両言語対応スタッフが常駐し、来日直後の生活サポートも万全です。",
    features: [
      { label: "部屋タイプ", value: "個室（20㎡）全80室" },
      {
        label: "設備",
        value: "バス・トイレ別・デスク・エアコン・Wi-Fi（無料）",
      },
      {
        label: "共用施設",
        value: "多目的交流ラウンジ・ランドリー・コンシェルジュカウンター",
      },
      { label: "対応言語", value: "日本語・英語スタッフ常駐" },
    ],
  },
];

const fees = [
  {
    item: "第一学生寮（個室）",
    monthly: "35,000円",
    includes: "共益費・Wi-Fi込み",
  },
  {
    item: "第二学生寮（個室A）",
    monthly: "30,000円",
    includes: "共益費・Wi-Fi込み",
  },
  {
    item: "第二学生寮（個室B）",
    monthly: "38,000円",
    includes: "共益費・Wi-Fi込み",
  },
  {
    item: "第二学生寮（2人部屋 / 1名）",
    monthly: "22,000円",
    includes: "共益費・Wi-Fi込み",
  },
  {
    item: "国際学生寮",
    monthly: "40,000円",
    includes: "共益費・Wi-Fi・生活サポート込み",
  },
];

const steps = [
  {
    step: "01",
    title: "説明会参加",
    detail:
      "毎年3月・9月に開催する寮説明会（オンライン可）に参加してください。",
  },
  {
    step: "02",
    title: "申込書類提出",
    detail: "所定の入居申込書・在学証明書・保証人確認書類を提出します。",
  },
  {
    step: "03",
    title: "面接・選考",
    detail: "寮担当者による面接（約15分）ののち、入居可否を通知します。",
  },
  {
    step: "04",
    title: "入居契約・鍵渡し",
    detail: "契約書・敷金（1ヶ月分）の手続き完了後、入居日に鍵をお渡しします。",
  },
];

export default function DormitoryPage() {
  return (
    <>
      <PageTracker page="/dormitory" />
      <Nav />
      <main className="pt-[4.5rem]">
        <PageHero
          eyebrow="Student Dormitory"
          title="学生寮"
          description="キャンパス南側に3棟。安心・快適な寮生活が、学びをもっと深めます。"
          imageSrc="/dormitory/in_dormitory.png"
          imageAlt="学生寮の室内"
        />

        {/* 各寮の紹介 */}
        <PageSection id="dorms">
          <ScrollReveal>
            <SectionHeading eyebrow="Our Dorms" title="寮の紹介" />
          </ScrollReveal>

          <div className="space-y-8">
            {dorms.map((d, i) => (
              <ScrollReveal key={d.id} delay={i * 0.1}>
                <div className="overflow-hidden rounded-md border border-stone-200 bg-stone-100/70">
                  <div className="relative h-56 w-full sm:h-96">
                    <Image
                      src={d.image}
                      alt={d.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 sm:p-8">
                    <div className="mb-6">
                      <p className="text-xs tracking-widest text-stone-500 uppercase">
                        {d.en}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold text-zinc-900">
                        {d.name}
                      </h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="rounded-full border border-stone-200 bg-white px-3 py-0.5 text-xs text-stone-500">
                          {d.target}
                        </span>
                        <span className="rounded-full border border-stone-200 bg-white px-3 py-0.5 text-xs text-stone-500">
                          {d.capacity}
                        </span>
                      </div>
                    </div>
                    <p className="mb-6 text-sm leading-relaxed text-stone-700">
                      {d.description}
                    </p>
                    <div className="divide-y divide-stone-200 rounded border border-stone-200 bg-white">
                      {d.features.map((f) => (
                        <div key={f.label} className="flex gap-6 px-5 py-3">
                          <span className="w-28 shrink-0 text-xs text-stone-500">
                            {f.label}
                          </span>
                          <span className="text-sm text-zinc-700">
                            {f.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </PageSection>

        {/* 費用 */}
        <PageSection id="fees" className="bg-stone-100 py-8 sm:py-24">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Fees"
              title="寮費"
              className="mb-7 sm:mb-12"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-md border border-stone-200 bg-white">
              <div className="divide-y divide-stone-200">
                {fees.map((f) => (
                  <div
                    key={f.item}
                    className="flex flex-col gap-0.5 px-8 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <span className="text-sm text-stone-700">{f.item}</span>
                      <p className="text-xs text-stone-500">{f.includes}</p>
                    </div>
                    <span className="text-base font-semibold text-zinc-800">
                      月額 {f.monthly}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="mt-4 text-xs leading-relaxed text-stone-400">
              ※
              敷金は1ヶ月分（退去時精算）。食費は別途。光熱費は共益費に含まれます。
            </p>
          </ScrollReveal>
        </PageSection>

        {/* 申し込みの流れ */}
        <PageSection id="apply">
          <ScrollReveal>
            <SectionHeading eyebrow="How to Apply" title="申し込みの流れ" />
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {steps.map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 0.08} className="h-full">
                <div className="h-full rounded-md border border-stone-200 bg-stone-100/70 p-6">
                  <p className="text-accent-600 mb-3 text-lg font-semibold">
                    {s.step}
                  </p>
                  <h3 className="mb-2 text-sm font-semibold text-zinc-900">
                    {s.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-stone-600">
                    {s.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="bg-accent-800 mt-10 rounded-md p-6 text-white sm:p-8">
              <h3 className="mb-2 text-lg font-semibold">お問い合わせ</h3>
              <p className="text-accent-200 text-sm leading-relaxed">
                学生寮に関するご質問は、厚生施設内の学生支援課（寮担当）までお気軽にどうぞ。
                見学は随時受け付けています（事前予約制）。
              </p>
            </div>
          </ScrollReveal>
        </PageSection>
      </main>
      <Footer />
    </>
  );
}
