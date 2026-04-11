import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import ScrollReveal from "../_components/ScrollReveal";
import PageTracker from "../_components/PageTracker";

const faculties = [
  {
    id: "science",
    number: "01",
    name: "理学部",
    en: "Faculty of Science",
    tagline: "自然の法則を、数式と実験で解き明かす。",
    description:
      "数学・物理学・化学・生物学・地球惑星科学・宇宙科学の6学科で構成される理学部。基礎科学の深化を通じて自然界の本質を探究し、科学的思考力と論理的表現力を備えた研究者・技術者を育成します。",
    departments: [
      {
        name: "数学科",
        body: "代数・解析・幾何・数理統計を基礎から研究し、現代数学の最前線へ。",
      },
      {
        name: "物理学科",
        body: "量子力学・統計力学・素粒子物理から凝縮系物理まで幅広く探究する。",
      },
      {
        name: "化学科",
        body: "有機・無機・物理・生物化学を網羅し、分子レベルで物質の本質に迫る。",
      },
      {
        name: "生物学科",
        body: "細胞・分子生物学から生態学まで、生命現象を多階層で解明する。",
      },
      {
        name: "地球惑星科学科",
        body: "地質・海洋・大気・惑星を対象に、地球システム科学を総合的に学ぶ。",
      },
      {
        name: "宇宙科学科",
        body: "天文学・宇宙物理・観測技術を横断し、宇宙の起源と構造を探求する。",
      },
    ],
  },
  {
    id: "engineering",
    number: "02",
    name: "工学部",
    en: "Faculty of Engineering",
    tagline: "科学を技術に変え、社会を動かす。",
    description:
      "機械航空・電気情報・建設環境・化学システム・材料科学の5学科から成る工学部。基礎理学と実践的な工学設計を結合し、社会インフラ・産業・情報基盤を支えるエンジニアを育てます。",
    departments: [
      {
        name: "機械航空工学科",
        body: "熱流体・固体力学・制御工学・ロボティクスおよび航空宇宙工学を専攻する。",
      },
      {
        name: "電気情報工学科",
        body: "電気回路・電磁気・半導体・通信工学・組み込みシステムを体系的に学ぶ。",
      },
      {
        name: "建設環境工学科",
        body: "構造・地盤・水工・交通・環境工学を学び、社会インフラの設計・維持を担う。",
      },
      {
        name: "化学システム工学科",
        body: "反応工学・移動現象・プロセス設計を通じて化学産業の技術革新を追求する。",
      },
      {
        name: "材料科学工学科",
        body: "金属・セラミックス・高分子・複合材料の構造と機能を原子レベルで解明する。",
      },
    ],
  },
  {
    id: "agriculture",
    number: "03",
    name: "農学部",
    en: "Faculty of Agriculture",
    tagline: "生命と大地のサイエンスで、持続可能な食と環境を創る。",
    description:
      "農業科学・生命機能科学・資源生物科学・応用生物化学の4学科で構成。食料・生命・環境を横断する農学の視点から、持続可能な社会の実現に貢献する高度専門人材を育てます。",
    departments: [
      {
        name: "農業科学科",
        body: "作物・土壌・農業生態系を科学し、持続可能な食料生産システムを研究する。",
      },
      {
        name: "生命機能科学科",
        body: "植物・動物の生理・遺伝・分子育種を通じ、生命機能の制御に迫る。",
      },
      {
        name: "資源生物科学科",
        body: "水産・畜産・森林など生物資源の増産・保全・利用技術を探究する。",
      },
      {
        name: "応用生物化学科",
        body: "食品化学・醸造・バイオテクノロジーを基礎に農産物の機能と利用を研究する。",
      },
    ],
  },
  {
    id: "information-science",
    number: "04",
    name: "情報科学部",
    en: "Faculty of Information Science and Technology",
    tagline: "情報の力で、知性と社会をつなぐ。",
    description:
      "情報工学・知能情報工学・生体情報工学・数理情報科学の4学科から成る情報科学部。計算機科学を軸に、AI・数理・バイオインフォマティクスが融合した次世代情報研究者を育成します。",
    departments: [
      {
        name: "情報工学科",
        body: "アルゴリズム・OS・コンパイラ・ネットワーク・セキュリティの基盤技術を習得する。",
      },
      {
        name: "知能情報工学科",
        body: "機械学習・深層学習・自然言語処理・コンピュータビジョンを研究・開発する。",
      },
      {
        name: "生体情報工学科",
        body: "バイオインフォマティクス・医用画像・神経情報工学で生命と情報を融合させる。",
      },
      {
        name: "数理情報科学科",
        body: "確率論・最適化・暗号理論・情報理論の数理的基盤から応用まで深く学ぶ。",
      },
    ],
  },
  {
    id: "medicine",
    number: "05",
    name: "医学部",
    en: "Faculty of Medicine",
    tagline: "生命の謎に挑み、人の健康と未来を守る。",
    description:
      "医学科・保健学科の2学科で構成される医学部。基礎医学から臨床医学・公衆衛生・看護科学まで幅広く学び、科学的根拠に基づいた医療と保健を実践できる医療人・研究者を育成します。",
    departments: [
      {
        name: "医学科",
        body: "解剖・生理・病理・内科・外科・精神科など医学全領域を6年間で体系的に修める。",
      },
      {
        name: "保健学科",
        body: "看護・放射線・検査・理学療法の4専攻で、チーム医療を支える保健専門職を育てる。",
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
              <p className="text-accent-600 mb-2 text-xs font-medium tracking-[0.3em] uppercase">
                Faculties
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
                学部・大学院
              </h1>
              <p className="mt-4 text-base font-light text-stone-500">
                5つの学部と大学院で、理学・工学・農学・情報・医学を深く探究します。
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
            </div>
          </section>
        ))}

        {/* 大学院 */}
        <section className="bg-accent-900 px-6 py-24">
          <div className="mx-auto max-w-5xl">
            {/* ヘッダー */}
            <ScrollReveal>
              <p className="text-accent-400 mb-3 text-xs font-medium tracking-[0.3em] uppercase">
                Graduate School
              </p>
              <h2 className="mb-4 text-3xl font-semibold text-white sm:text-4xl">
                やわらか大学院
              </h2>
              <p className="text-accent-200 mb-16 max-w-2xl text-base leading-loose font-light">
                5学部の学知を2研究科に統合。修士・博士課程を通じて国際的な研究者・
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
                  <div
                    key={s.label}
                    className="border-accent-700 bg-accent-800 rounded border p-5 text-center"
                  >
                    <p className="text-accent-300 text-2xl font-bold">
                      {s.num}
                    </p>
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
