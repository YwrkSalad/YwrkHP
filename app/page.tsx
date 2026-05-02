import Link from "next/link";
import Image from "next/image";
import Nav from "./_components/Nav";
import HeroAnimation from "./_components/HeroAnimation";
import ScrollReveal from "./_components/ScrollReveal";
import PageTracker from "./_components/PageTracker";
import Footer from "./_components/Footer";

const news = [
  {
    date: "2026.04.08",
    category: "お知らせ",
    title: "2026年度 入学式を挙行しました",
  },
  {
    date: "2026.03.25",
    category: "入試情報",
    title: "令和9年度 学生募集要項を公開しました",
  },
  {
    date: "2026.03.10",
    category: "研究",
    title: "「やわらか知のフォーラム 2026」開催のご案内",
  },
  {
    date: "2026.02.28",
    category: "キャンパス",
    title: "図書館の夜間開館時間が延長されました",
  },
  {
    date: "2026.02.14",
    category: "お知らせ",
    title: "大学公式サイトをリニューアルしました",
  },
];

const faculties = [
  {
    number: "01",
    name: "理学部",
    en: "Faculty of Science",
    description:
      "数学・物理学・化学・生物学・地球惑星科学・宇宙科学の6学科で自然界の本質を探究します。",
    departments: [
      "数学科",
      "物理学科",
      "化学科",
      "生物学科",
      "地球惑星科学科",
      "宇宙科学科",
    ],
  },
  {
    number: "02",
    name: "工学部",
    en: "Faculty of Engineering",
    description:
      "機械航空・電気情報・建設環境・化学システム・材料科学で社会を支えるエンジニアを育てます。",
    departments: [
      "機械航空工学科",
      "電気情報工学科",
      "建設環境工学科",
      "化学システム工学科",
      "材料科学工学科",
    ],
  },
  {
    number: "03",
    name: "農学部",
    en: "Faculty of Agriculture",
    description:
      "食料・生命・環境を横断する農学の視点から、持続可能な社会の実現に貢献します。",
    departments: [
      "農業科学科",
      "生命機能科学科",
      "資源生物科学科",
      "応用生物化学科",
    ],
  },
  {
    number: "04",
    name: "情報科学部",
    en: "Faculty of Information Science and Technology",
    description:
      "AI・数理・バイオインフォマティクスが融合した次世代情報研究者を育成します。",
    departments: [
      "情報工学科",
      "知能情報工学科",
      "生体情報工学科",
      "数理情報科学科",
    ],
  },
  {
    number: "05",
    name: "医学部",
    en: "Faculty of Medicine",
    description:
      "基礎医学から臨床・公衆衛生・看護科学まで幅広く学び、科学的根拠に基づいた医療人・研究者を育成します。",
    departments: ["医学科", "保健学科"],
  },
];

const values = [
  {
    label: "Flexibility",
    title: "しなやかな思考",
    body: "固定観念を手放し、多様な視点から問いを立て、状況に応じて柔軟に考える力を育てます。",
  },
  {
    label: "Empathy",
    title: "深い共感",
    body: "他者の痛みや喜びに寄り添い、人への深い敬意を根幹に置いた学びの文化を大切にします。",
  },
  {
    label: "Craft",
    title: "ていねいな実践",
    body: "知識を「生きる技術」に変え、日々の行動の中にやわらかさを体現できる人を育てます。",
  },
];

export default async function Home() {
  return (
    <>
      <PageTracker page="/" />
      <Nav />

      <main className="pt-[4.5rem]">
        {/* ヒーロー */}
        <HeroAnimation />

        {/* お知らせ */}
        <section className="bg-white px-4 py-12 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <div className="mb-6 flex items-center justify-between sm:mb-12">
                <div>
                  <p className="text-accent-600 mb-1 text-[10px] font-medium tracking-[0.3em] uppercase sm:mb-2 sm:text-xs">
                    News
                  </p>
                  <h2 className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
                    お知らせ
                  </h2>
                </div>
                <Link
                  href="/admissions"
                  className="text-accent-600 hover:text-accent-700 text-xs font-medium transition-colors sm:text-sm"
                >
                  入試情報を見る →
                </Link>
              </div>
            </ScrollReveal>

            <div className="overflow-x-auto">
              <div className="divide-accent-100 divide-y">
                {news.map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.08}>
                    <div className="flex min-w-max items-center gap-3 py-3 sm:gap-5 sm:py-4">
                      <span className="w-20 shrink-0 text-[10px] text-stone-400 sm:w-22 sm:text-xs">
                        {item.date}
                      </span>
                      <span className="bg-accent-50 text-accent-600 w-[4.5rem] shrink-0 rounded px-1.5 py-0.5 text-center text-[10px] sm:w-[5.5rem] sm:px-2 sm:text-xs">
                        {item.category}
                      </span>
                      <span className="text-[10px] text-zinc-700 sm:text-sm">
                        {item.title}
                      </span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 学部紹介 */}
        <section id="faculties" className="relative overflow-hidden px-6 py-24">
          <Image
            src="/bg_pattern/bg_science.png"
            alt=""
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 mx-auto max-w-5xl">
            <ScrollReveal>
              <div className="mb-16 text-center">
                <p className="mb-3 text-xs font-medium tracking-[0.3em] text-white/60 uppercase">
                  Faculties
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  学部紹介
                </h2>
                <p className="mt-4 text-base font-light text-white/70">
                  5つの学部で、理学・工学・農学・情報・医学を探究します。
                </p>
                <Link
                  href="/faculties"
                  className="mt-6 inline-block text-sm font-medium text-white/70 transition-colors hover:text-white"
                >
                  学部・大学院を詳しく見る →
                </Link>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {faculties.map((f, i) => (
                <ScrollReveal key={f.number} delay={i * 0.08}>
                  <div className="flex items-start gap-6 rounded-md border border-white/10 bg-black/30 p-6 backdrop-blur-sm transition-shadow hover:shadow-md">
                    <span className="w-12 shrink-0 text-4xl leading-none font-bold text-white/20">
                      {f.number}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex flex-wrap items-baseline gap-3">
                        <h3 className="text-lg font-semibold text-white">
                          {f.name}
                        </h3>
                        <p className="text-xs tracking-widest text-white/50 uppercase">
                          {f.en}
                        </p>
                      </div>
                      <p className="mb-3 text-sm leading-relaxed text-white/70">
                        {f.description}
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {f.departments.map((d) => (
                          <li
                            key={d}
                            className="rounded border border-white/20 px-3 py-0.5 text-xs text-white/70"
                          >
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 大学の理念 */}
        <section className="bg-accent-50 overflow-hidden px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <div className="mb-16 text-center">
                <p className="text-accent-600 mb-3 text-xs font-medium tracking-[0.3em] uppercase">
                  Philosophy
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                  やわらか大学の理念
                </h2>
                <Link
                  href="/about"
                  className="text-accent-600 hover:text-accent-700 mt-6 inline-block text-sm font-medium transition-colors"
                >
                  大学について詳しく見る →
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal blur delay={0.1}>
              <blockquote className="mb-20 text-center">
                <p className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl">
                  やわらかであることは、強さである。
                </p>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-loose font-light text-stone-500">
                  固定観念を手放し、しなやかに考え、ていねいに行動する。
                  やわらか大学は、知の柔軟性と人への深い敬意を根本に、
                  多様な知を育む場です。
                </p>
              </blockquote>
            </ScrollReveal>

            <div className="grid gap-8 sm:grid-cols-3">
              {values.map((v, i) => (
                <ScrollReveal key={v.label} delay={i * 0.12}>
                  <div className="border-accent-100 rounded-md border bg-white p-8 text-center">
                    <div className="bg-accent-400 mx-auto mb-4 h-1 w-8 rounded" />
                    <p className="text-accent-600 mb-2 text-xs tracking-widest uppercase">
                      {v.label}
                    </p>
                    <h3 className="mb-3 text-lg font-semibold text-zinc-900">
                      {v.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-stone-500">
                      {v.body}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 入試情報 */}
        <section
          id="admissions"
          className="relative overflow-hidden px-6 py-24"
        >
          <Image
            src="/admissions/expand_examing.jpg"
            alt="入試の様子"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/15" />
          <div className="relative z-10 mx-auto max-w-5xl">
            <div className="flex flex-col items-center gap-12 md:flex-row md:justify-between">
              <ScrollReveal className="text-center md:text-left">
                <p className="text-accent-400 mb-3 text-xs font-medium tracking-[0.3em] uppercase">
                  Admissions
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  入試情報
                </h2>
                <p className="mt-4 max-w-sm text-base font-light text-zinc-100">
                  やわらか大学では、一般選抜・総合型選抜・学校推薦型選抜の
                  3つの入試方式で学生を募集しています。
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.15} className="flex flex-col gap-4">
                <div className="rounded border border-zinc-700 bg-zinc-800/90 px-8 py-5">
                  <p className="text-sm text-white">一般選抜</p>
                  <p className="mt-1 text-lg font-medium text-white">
                    2027年1月 出願開始
                  </p>
                </div>
                <div className="rounded border border-zinc-700 bg-zinc-800/90 px-8 py-5">
                  <p className="text-sm text-white">総合型選抜</p>
                  <p className="mt-1 text-lg font-medium text-white">
                    2026年9月 出願開始
                  </p>
                </div>
                <a
                  href="/admissions"
                  className="hover:bg-accent-100/90 border-accent-600 bg-accent-50/90 text-accent-800 mt-2 rounded border px-8 py-3 text-center text-sm font-medium transition-colors"
                >
                  募集要項を見る
                </a>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* キャンパスライフ */}
        <section id="campus" className="bg-accent-50 px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <div className="mb-14 text-center">
                <p className="text-accent-600 mb-3 text-xs font-medium tracking-[0.3em] uppercase">
                  Campus Life
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                  キャンパスライフ
                </h2>
                <Link
                  href="/campus"
                  className="text-accent-600 hover:text-accent-700 mt-6 inline-block text-sm font-medium transition-colors"
                >
                  キャンパスライフを詳しく見る →
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: "クラブ・サークル",
                  body: "90以上のクラブ・サークルが活動中。学部の壁を越えた出会いが待っています。",
                },
                {
                  title: "国際交流",
                  body: "32カ国・60大学との協定により、留学・研究交流の機会が豊富に用意されています。",
                },
                {
                  title: "図書館・学習環境",
                  body: "蔵書30万冊を誇る図書館と、24時間利用可能な学習スペースを完備しています。",
                },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="rounded-md bg-white p-7">
                    <div className="bg-accent-300 mb-4 h-1 w-8 rounded" />
                    <h3 className="mb-3 text-lg font-semibold whitespace-nowrap text-zinc-900">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-stone-500">
                      {item.body}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* アクセス */}
        <section id="access" className="relative overflow-hidden px-6 py-24">
          <Image
            src="/access/bus_stop_faculty_of_engineering.png"
            alt="バス停の様子"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 mx-auto max-w-5xl">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="mb-3 text-xs font-medium tracking-[0.3em] text-white/60 uppercase">
                  Access
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-white">
                  アクセス
                </h2>
                <Link
                  href="/access"
                  className="mt-6 inline-block text-sm font-medium text-white/70 transition-colors hover:text-white"
                >
                  アクセス詳細・キャンパスマップ →
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="rounded-md border border-white/10 bg-black/30 p-8 backdrop-blur-sm sm:p-12">
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <h3 className="mb-4 text-lg font-semibold text-white">
                      やわらか大学 本キャンパス
                    </h3>
                    <address className="text-sm leading-loose text-white/75 not-italic">
                      〒000-0000
                      <br />
                      やわらか県やわらか市やわらか町 1-1-1
                      <br />
                      TEL: 000-000-0000
                      <br />
                      Email: info@ywrk.org
                    </address>
                  </div>
                  <div>
                    <h3 className="mb-4 text-lg font-semibold text-white">
                      交通アクセス
                    </h3>
                    <ul className="text-sm leading-loose text-white/75">
                      <li>JR やわらか線「やわらか駅」より徒歩 5 分</li>
                      <li>地下鉄「やわらか大学前駅」より徒歩 2 分</li>
                      <li>バス「やわらか大学」停留所 すぐ</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
