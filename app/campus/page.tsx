import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import ScrollReveal from "../_components/ScrollReveal";
import PageTracker from "../_components/PageTracker";

const clubs = [
  { category: "体育系", list: ["バスケットボール部", "サッカー部", "テニス部", "水泳部", "ダンスサークル", "ヨガ部"] },
  { category: "文化系", list: ["演劇部", "写真部", "映画研究会", "文芸サークル", "陶芸部", "音楽サークル"] },
  { category: "学術系", list: ["プログラミングサークル", "国際交流サークル", "環境活動団体", "ボランティアサークル", "起業研究会", "AI研究会"] },
];

const facilities = [
  {
    name: "やわらか図書館",
    description: "蔵書30万冊、電子ジャーナル5万誌を擁する総合図書館。24時間利用可能なラーニングコモンズも併設しています。",
  },
  {
    name: "学生交流センター",
    description: "カフェテリア・ラウンジ・会議室を備えた交流の場。クラブ活動や自主企画イベントの拠点として親しまれています。",
  },
  {
    name: "健康・スポーツセンター",
    description: "体育館・プール・トレーニングルームを完備。学生の心身の健康をサポートする相談室も設置しています。",
  },
  {
    name: "国際交流センター",
    description: "留学・国際交流の窓口。語学学習ラウンジや留学生との交流プログラムを通じて、グローバルな視野を育みます。",
  },
];

const overseas = [
  { country: "アメリカ", universities: 12, programs: ["交換留学", "語学研修"] },
  { country: "ヨーロッパ", universities: 18, programs: ["交換留学", "インターンシップ"] },
  { country: "アジア", universities: 22, programs: ["短期研修", "フィールドワーク"] },
  { country: "オセアニア", universities: 8, programs: ["語学研修", "交換留学"] },
];

export default function CampusPage() {
  return (
    <>
      <PageTracker page="/campus" />
      <Nav />
      <main className="pt-[4.5rem]">
        {/* ページヒーロー */}
        <section className="bg-stone-50 px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <p className="mb-2 text-xs font-medium tracking-[0.3em] text-stone-400 uppercase">
                Campus Life
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
                キャンパスライフ
              </h1>
              <p className="mt-4 text-base font-light text-stone-500">
                学びの外でも、やわらかな出会いと成長が待っています。
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* クラブ・サークル */}
        <section className="bg-white px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <p className="mb-3 text-xs font-medium tracking-[0.3em] text-stone-400 uppercase">
                Clubs & Circles
              </p>
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-zinc-900">
                クラブ・サークル
              </h2>
              <p className="mb-12 text-base font-light text-stone-500">
                90以上の団体が活動中。学部の壁を越えた出会いが待っています。
              </p>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-3">
              {clubs.map((c, i) => (
                <ScrollReveal key={c.category} delay={i * 0.08}>
                  <div className="rounded-2xl bg-stone-50 p-6">
                    <h3 className="mb-4 text-sm font-semibold text-zinc-900">{c.category}</h3>
                    <ul className="space-y-2">
                      {c.list.map((name) => (
                        <li key={name} className="text-sm text-stone-500">
                          {name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 施設 */}
        <section className="bg-stone-50 px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <p className="mb-3 text-xs font-medium tracking-[0.3em] text-stone-400 uppercase">
                Facilities
              </p>
              <h2 className="mb-12 text-3xl font-semibold tracking-tight text-zinc-900">
                キャンパス施設
              </h2>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-2">
              {facilities.map((f, i) => (
                <ScrollReveal key={f.name} delay={i * 0.08}>
                  <div className="rounded-2xl bg-white p-7">
                    <div className="mb-4 h-1 w-8 rounded-full bg-stone-300" />
                    <h3 className="mb-2 text-lg font-semibold text-zinc-900">{f.name}</h3>
                    <p className="text-sm leading-relaxed text-stone-500">{f.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 国際交流 */}
        <section className="bg-white px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <p className="mb-3 text-xs font-medium tracking-[0.3em] text-stone-400 uppercase">
                International Exchange
              </p>
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-zinc-900">
                国際交流・留学
              </h2>
              <p className="mb-12 text-base font-light text-stone-500">
                32カ国・60大学との協定により、多彩な国際交流プログラムを用意しています。
              </p>
            </ScrollReveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {overseas.map((o, i) => (
                <ScrollReveal key={o.country} delay={i * 0.08}>
                  <div className="rounded-2xl border border-stone-100 bg-stone-50 p-6 text-center">
                    <p className="text-2xl font-semibold text-zinc-900">{o.universities}</p>
                    <p className="text-xs text-stone-400">協定校</p>
                    <p className="mt-2 text-sm font-medium text-zinc-700">{o.country}</p>
                    <div className="mt-3 flex flex-wrap justify-center gap-1">
                      {o.programs.map((p) => (
                        <span
                          key={p}
                          className="rounded-full border border-stone-200 px-2 py-0.5 text-xs text-stone-500"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
