import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import ScrollReveal from "../_components/ScrollReveal";
import PageTracker from "../_components/PageTracker";

const faculties = [
  {
    id: "cultural-creation",
    number: "01",
    name: "文化創造学部",
    en: "Faculty of Cultural Creation",
    tagline: "言葉と表現で、世界をつなぐ。",
    description:
      "言語・芸術・メディアを横断し、人間の表現と文化の力で社会をつなぐ人材を育成します。文学・映像・国際コミュニケーションの3学科が連携し、自らの声で世界に語りかける力を育みます。",
    departments: [
      {
        name: "日本語文化学科",
        body: "日本語の構造と文学・文化を深く学び、言語の力で社会をひらく。",
      },
      {
        name: "映像表現学科",
        body: "映像・写真・デザインを通じて、時代の記録者・表現者を育てる。",
      },
      {
        name: "国際コミュニケーション学科",
        body: "多言語・多文化の環境で、対話と共生のスキルを磨く。",
      },
    ],
  },
  {
    id: "life-environment",
    number: "02",
    name: "生命環境学部",
    en: "Faculty of Life & Environment",
    tagline: "地球と生命のつながりを、科学で読み解く。",
    description:
      "地球と生命の関わりを探り、持続可能な未来を設計する科学的思考力を養います。フィールドワークと実験室研究を組み合わせ、生態系・環境・食と農の三つの視点から総合的に学びます。",
    departments: [
      {
        name: "生物科学科",
        body: "細胞から生態系まで、生命のしくみを分子レベルで探究する。",
      },
      {
        name: "環境デザイン学科",
        body: "自然と人間が共存する空間・社会システムをデザインする。",
      },
      {
        name: "食農共生学科",
        body: "食・農・地域を結び、持続可能な食のあり方を実践的に学ぶ。",
      },
    ],
  },
  {
    id: "coexistence",
    number: "03",
    name: "共生社会学部",
    en: "Faculty of Coexistence Studies",
    tagline: "支え合う社会を、ともにつくる。",
    description:
      "多様な人々が支え合う社会の仕組みを学び、ケアとウェルビーイングの実践者を育てます。福祉・心理・地域・子どもを軸に、「人とともに生きる」ことの意味を深く問い続けます。",
    departments: [
      {
        name: "福祉心理学科",
        body: "人の心と社会的支援を学び、ケアの専門職として活躍する力を養う。",
      },
      {
        name: "地域共生学科",
        body: "地域社会の課題に向き合い、住民と協働して解決策を生み出す。",
      },
      {
        name: "子ども発達学科",
        body: "子どもの育ちを支える保育・教育の専門知識と実践力を身につける。",
      },
    ],
  },
  {
    id: "information-design",
    number: "04",
    name: "情報デザイン学部",
    en: "Faculty of Information Design",
    tagline: "テクノロジーと感性で、新しい価値を生む。",
    description:
      "テクノロジーと感性を融合させ、人にやさしい情報環境と新しい価値を創造します。情報システム・UX・データサイエンスの3学科が連携し、社会の課題をテクノロジーで解く人材を育てます。",
    departments: [
      {
        name: "情報システム学科",
        body: "ソフトウェア開発・ネットワーク・セキュリティを体系的に学ぶ。",
      },
      {
        name: "UXデザイン学科",
        body: "人の行動と感情を理解し、使いやすく美しいサービスをつくる。",
      },
      {
        name: "データサイエンス学科",
        body: "統計・AI・機械学習を駆使し、データから社会の価値を引き出す。",
      },
    ],
  },
  {
    id: "pop-culture",
    number: "05",
    name: "ポップカルチャー学部",
    en: "Faculty of Pop Culture Studies",
    tagline: "時代のノリを、学問にする。",
    description:
      "ギャル文化・ゲーム・アニメ・ストリートカルチャーなど、現代大衆文化を真剣に研究する日本唯一の学部。「遊び」と「学び」の境界をなくし、文化の最前線を駆ける人材を育てます。",
    departments: [
      {
        name: "ギャルズパニック専攻",
        body: "ギャル文化の社会学・美学・経済効果を多角的に分析。現地フィールドワーク必修。",
      },
      {
        name: "ゲーム・eスポーツ学科",
        body: "ゲームデザイン・eスポーツ産業・インタラクティブメディアを横断的に学ぶ。",
      },
      {
        name: "アニメ・マンガ文化学科",
        body: "日本発コンテンツの世界展開を文化論・産業論・批評理論から探究する。",
      },
      {
        name: "ストリートカルチャー学科",
        body: "音楽・ファッション・グラフィティなど路上に生まれた文化の系譜と現在を学ぶ。",
      },
    ],
  },
];

export default function FacultiesPage() {
  return (
    <>
      <PageTracker page="/faculties" />
      <Nav />
      <main className="pt-[4.5rem]">
        {/* ページヒーロー */}
        <section className="bg-accent-50 px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <p className="mb-2 text-xs font-medium tracking-[0.3em] text-accent-600 uppercase">
                Faculties
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
                学部・大学院
              </h1>
              <p className="mt-4 text-base font-light text-stone-500">
                4つの学部と大学院で、多様な知の世界を深く探究します。
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* 各学部 */}
        {faculties.map((f, fi) => (
          <section
            key={f.id}
            id={f.id}
            className={`px-6 py-24 ${fi % 2 === 0 ? "bg-white" : "bg-stone-50"}`}
          >
            <div className="mx-auto max-w-5xl">
              <ScrollReveal>
                <div className="mb-12 flex items-start gap-6">
                  <span className="text-6xl font-bold leading-none text-stone-100">
                    {f.number}
                  </span>
                  <div>
                    <p className="mb-1 text-xs tracking-widest text-stone-400 uppercase">
                      {f.en}
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                      {f.name}
                    </h2>
                    <p className="mt-2 text-lg font-light text-stone-500">{f.tagline}</p>
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
                    <div className="rounded-2xl border border-accent-100 bg-white p-6">
                      <div className="mb-3 h-1 w-6 rounded-full bg-accent-300" />
                      <h3 className="mb-2 text-base font-semibold text-zinc-900">{d.name}</h3>
                      <p className="text-sm leading-relaxed text-stone-500">{d.body}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* 大学院 */}
        <section className="bg-accent-900 px-6 py-24">
          <div className="mx-auto max-w-5xl">

            {/* ヘッダー */}
            <ScrollReveal>
              <p className="mb-3 text-xs font-medium tracking-[0.3em] text-accent-400 uppercase">
                Graduate School
              </p>
              <h2 className="mb-4 text-3xl font-semibold text-white sm:text-4xl">
                やわらか大学院
              </h2>
              <p className="mb-16 max-w-2xl text-base font-light leading-loose text-accent-200">
                4つの学部知を2研究科に統合。修士・博士課程を通じて国際的な研究者・
                高度専門職業人を育成するエリート大学院です。
                年間150件以上の国際学会発表、80本以上の国際共著論文を誇ります。
              </p>
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
                  <div key={s.label} className="rounded-xl border border-accent-700 bg-accent-800 p-5 text-center">
                    <p className="text-2xl font-bold text-accent-300">{s.num}</p>
                    <p className="mt-1 text-xs text-accent-400">{s.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* 2研究科 */}
            <div className="grid gap-6 sm:grid-cols-2">

              {/* 研究科 1 */}
              <ScrollReveal delay={0.1}>
                <div className="rounded-2xl border border-accent-700 bg-accent-800 p-8">
                  <p className="mb-1 text-xs tracking-widest text-accent-400 uppercase">
                    Graduate School I
                  </p>
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    知識・表現研究科
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-accent-200">
                    文化創造学部・情報デザイン学部の学知を統合。
                    人間の表現・言語・メディア・テクノロジーが交差する領域で、
                    次世代の知識創造者を育成します。
                    欧米・アジアのトップ大学との共同博士プログラムを実施。
                  </p>
                  <div className="mb-5 space-y-2">
                    {[
                      { course: "修士課程", years: "2年", desc: "言語文化専攻 / デジタル表現専攻 / メディア研究専攻" },
                      { course: "博士課程", years: "3年", desc: "知識創造学専攻 / 国際メディア専攻" },
                    ].map((c) => (
                      <div key={c.course} className="rounded-lg bg-accent-700/50 px-4 py-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold text-accent-300">{c.course}</span>
                          <span className="text-xs text-accent-500">（標準修業年限 {c.years}）</span>
                        </div>
                        <p className="text-xs text-accent-300">{c.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["国際誌掲載 40+件/年", "NLP", "メディア人類学", "HCI", "計算言語学"].map((t) => (
                      <span key={t} className="rounded-full border border-accent-600 px-2 py-0.5 text-xs text-accent-300">{t}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* 研究科 2 */}
              <ScrollReveal delay={0.18}>
                <div className="rounded-2xl border border-accent-700 bg-accent-800 p-8">
                  <p className="mb-1 text-xs tracking-widest text-accent-400 uppercase">
                    Graduate School II
                  </p>
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    生命・共生デザイン研究科
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-accent-200">
                    生命環境学部・共生社会学部の学知を統合。
                    地球・生命・社会の複雑な関係を多角的に探究し、
                    持続可能な未来をデザインする研究者・実践者を育てます。
                    WHO・UNEP など国際機関との共同研究実績あり。
                  </p>
                  <div className="mb-5 space-y-2">
                    {[
                      { course: "修士課程", years: "2年", desc: "環境生命科学専攻 / 社会デザイン専攻 / 地域共生専攻" },
                      { course: "博士課程", years: "3年", desc: "生命・環境統合科学専攻 / 共生社会デザイン専攻" },
                    ].map((c) => (
                      <div key={c.course} className="rounded-lg bg-accent-700/50 px-4 py-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold text-accent-300">{c.course}</span>
                          <span className="text-xs text-accent-500">（標準修業年限 {c.years}）</span>
                        </div>
                        <p className="text-xs text-accent-300">{c.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["国際誌掲載 40+件/年", "気候科学", "バイオインフォマティクス", "社会疫学", "UXリサーチ"].map((t) => (
                      <span key={t} className="rounded-full border border-accent-600 px-2 py-0.5 text-xs text-accent-300">{t}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* 共通情報 */}
            <ScrollReveal delay={0.25}>
              <div className="mt-8 rounded-2xl border border-accent-700 bg-accent-800/60 p-8">
                <h3 className="mb-4 text-base font-semibold text-white">共通の特色・支援制度</h3>
                <ul className="grid gap-2 sm:grid-cols-2 text-sm text-accent-200">
                  {[
                    "RA・TA 制度による授業料免除（成績優秀者）",
                    "国際学会発表費用の全額支援",
                    "海外共同指導教員制度（コチューター）",
                    "修士論文・博士論文の英語執筆推奨",
                    "産学連携リサーチフェローシップ",
                    "OB・OG ネットワークによるキャリア支援",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 shrink-0 text-accent-400">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
