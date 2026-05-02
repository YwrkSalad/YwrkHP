import type { Metadata } from "next";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import ScrollReveal from "../_components/ScrollReveal";
import PageTracker from "../_components/PageTracker";
import PageHero from "../_components/PageHero";
import PageSection from "../_components/PageSection";
import SectionHeading from "../_components/SectionHeading";
import { faculties } from "../../data/faculties";

export const metadata: Metadata = { title: "学部・大学院" };

export default function FacultiesPage() {
  return (
    <>
      <PageTracker page="/faculties" />
      <Nav />
      <main className="pt-[4.5rem]">
        <PageHero
          eyebrow="Faculties"
          title="学部・大学院"
          description="5つの学部と大学院で、理学・工学・農学・情報・医学を深く探究します。"
          imageSrc="/bg_pattern/research_field.png"
          imageAlt="研究フィールド"
        />

        {/* 学士課程 */}
        <PageSection id="undergraduate" className="bg-stone-50 py-12">
          <SectionHeading eyebrow="Undergraduate" title="学士課程" />
        </PageSection>

        {/* 各学部 */}
        {faculties.map((f, fi) => (
          <PageSection
            key={f.id}
            id={f.id}
            className={`py-24 ${fi % 2 === 0 ? "bg-white" : "bg-stone-50"}`}
          >
            <ScrollReveal>
              <div className="mb-12 flex items-start gap-6">
                <span className="text-accent-300 text-6xl leading-none font-bold">
                  {f.number}
                </span>
                <div>
                  <p className="mb-1 text-xs tracking-widest text-stone-400 uppercase">
                    {f.en}
                  </p>
                  <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                    {f.name}
                  </h2>
                  <p className="mt-2 text-lg font-light text-stone-500">
                    {f.tagline}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mb-12 max-w-2xl text-base leading-loose font-light text-stone-600">
                {f.description}
              </p>
            </ScrollReveal>

            <div className="grid gap-5 sm:grid-cols-3">
              {f.departments.map((d, i) => (
                <ScrollReveal key={d.name} delay={0.1 + i * 0.08}>
                  <div className="border-accent-100 rounded-md border bg-white p-6">
                    <div className="bg-accent-300 mb-3 h-1 w-6 rounded" />
                    <h3 className="mb-2 text-base font-semibold text-zinc-900">
                      {d.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-stone-500">
                      {d.body}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </PageSection>
        ))}

        {/* 大学院 */}
        <PageSection id="graduate" className="bg-accent-900 py-24">
          {/* ヘッダー */}
          <ScrollReveal>
            <SectionHeading
              eyebrow="Graduate School"
              title="やわらか大学院"
              description="5学部の学知を2研究科に統合。修士・博士課程を通じて国際的な研究者・高度専門職業人を育成するエリート大学院です。年間150件以上の国際学会発表、80本以上の国際共著論文を誇ります。"
              tone="dark"
              className="mb-16"
              titleClassName="mb-4 text-3xl font-semibold text-white sm:text-4xl"
              descriptionClassName="text-accent-200 max-w-2xl text-base leading-loose font-light"
            />
          </ScrollReveal>

          {/* 統計 */}
          <ScrollReveal delay={0.1}>
            <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { num: "150+", label: "年間国際学会発表" },
                { num: "80+", label: "国際共著論文／年" },
                { num: "30%", label: "外国人留学生比率" },
                { num: "12", label: "海外共同博士プログラム" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="border-accent-700 bg-accent-800 rounded border p-5 text-center"
                >
                  <p className="text-accent-300 text-2xl font-bold">{s.num}</p>
                  <p className="text-accent-400 mt-1 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* 2研究科 */}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* 研究科 1 */}
            <ScrollReveal delay={0.1}>
              <div className="border-accent-700 bg-accent-800 rounded-md border p-8">
                <p className="text-accent-400 mb-1 text-xs tracking-widest uppercase">
                  Graduate School I
                </p>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  理工情報学研究科
                </h3>
                <p className="text-accent-200 mb-5 text-sm leading-relaxed">
                  理学部・工学部・情報科学部の学知を統合。
                  数理・物質・エネルギー・情報技術が交差する最前線で、
                  次世代の理工系研究者・高度技術者を育成します。
                  欧米・アジアのトップ大学との共同博士プログラムを実施。
                </p>
                <div className="mb-5 space-y-2">
                  {[
                    {
                      course: "修士課程",
                      years: "2年",
                      desc: "数理物理専攻 / 機械電気システム専攻 / 情報知能専攻",
                    },
                    {
                      course: "博士課程",
                      years: "3年",
                      desc: "先端科学技術専攻 / 計算科学専攻",
                    },
                  ].map((c) => (
                    <div
                      key={c.course}
                      className="bg-accent-700/50 rounded px-4 py-3"
                    >
                      <div className="mb-1 flex items-center gap-2">
                        <span className="text-accent-300 text-xs font-semibold">
                          {c.course}
                        </span>
                        <span className="text-accent-500 text-xs">
                          （標準修業年限 {c.years}）
                        </span>
                      </div>
                      <p className="text-accent-300 text-xs">{c.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "国際誌掲載 40+件/年",
                    "量子計算",
                    "深層学習",
                    "ロボティクス",
                    "マテリアルズインフォマティクス",
                  ].map((t) => (
                    <span
                      key={t}
                      className="border-accent-600 text-accent-300 rounded border px-2 py-0.5 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* 研究科 2 */}
            <ScrollReveal delay={0.18}>
              <div className="border-accent-700 bg-accent-800 rounded-md border p-8">
                <p className="text-accent-400 mb-1 text-xs tracking-widest uppercase">
                  Graduate School II
                </p>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  生命農学・医科学研究科
                </h3>
                <p className="text-accent-200 mb-5 text-sm leading-relaxed">
                  農学部・医学部の学知を統合。
                  食料・生命・疾病の複雑なメカニズムを多角的に探究し、
                  持続可能な食と健康の未来を担う研究者・医療科学者を育てます。
                  WHO・FAO など国際機関との共同研究実績あり。
                </p>
                <div className="mb-5 space-y-2">
                  {[
                    {
                      course: "修士課程",
                      years: "2年",
                      desc: "農業生命科学専攻 / 応用生物化学専攻 / 医科学専攻",
                    },
                    {
                      course: "博士課程",
                      years: "3年",
                      desc: "生命農学統合科学専攻 / 医学系研究専攻",
                    },
                  ].map((c) => (
                    <div
                      key={c.course}
                      className="bg-accent-700/50 rounded px-4 py-3"
                    >
                      <div className="mb-1 flex items-center gap-2">
                        <span className="text-accent-300 text-xs font-semibold">
                          {c.course}
                        </span>
                        <span className="text-accent-500 text-xs">
                          （標準修業年限 {c.years}）
                        </span>
                      </div>
                      <p className="text-accent-300 text-xs">{c.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "国際誌掲載 40+件/年",
                    "バイオインフォマティクス",
                    "ゲノム医学",
                    "食品機能科学",
                    "環境毒性学",
                  ].map((t) => (
                    <span
                      key={t}
                      className="border-accent-600 text-accent-300 rounded border px-2 py-0.5 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* 共通情報 */}
          <ScrollReveal delay={0.25}>
            <div className="border-accent-700 bg-accent-800/60 mt-8 rounded-md border p-8">
              <h3 className="mb-4 text-base font-semibold text-white">
                共通の特色・支援制度
              </h3>
              <ul className="text-accent-200 grid gap-2 text-sm sm:grid-cols-2">
                {[
                  "RA・TA 制度による授業料免除（成績優秀者）",
                  "国際学会発表費用の全額支援",
                  "海外共同指導教員制度（コチューター）",
                  "修士論文・博士論文の英語執筆推奨",
                  "産学連携リサーチフェローシップ",
                  "OB・OG ネットワークによるキャリア支援",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent-400 mt-0.5 shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </PageSection>
      </main>
      <Footer />
    </>
  );
}
