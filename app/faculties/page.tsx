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
];

export default function FacultiesPage() {
  return (
    <>
      <PageTracker page="/faculties" />
      <Nav />
      <main className="pt-[4.5rem]">
        {/* ページヒーロー */}
        <section className="bg-stone-50 px-6 py-20">
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
        <section className="bg-zinc-900 px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <ScrollReveal>
              <p className="mb-3 text-xs font-medium tracking-[0.3em] text-zinc-500 uppercase">
                Graduate School
              </p>
              <h2 className="mb-6 text-3xl font-semibold text-white sm:text-4xl">
                やわらか大学院
              </h2>
              <p className="mx-auto max-w-xl text-base font-light leading-loose text-zinc-400">
                4つの研究科（文化創造・生命環境・共生社会・情報デザイン）を設置。
                修士課程・博士課程を通じて、専門的な研究と社会への貢献を追求します。
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
