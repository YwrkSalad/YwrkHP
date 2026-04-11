import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import ScrollReveal from "../_components/ScrollReveal";
import PageTracker from "../_components/PageTracker";

const routes = [
  {
    means: "電車",
    items: [
      { icon: "🚃", text: "JR やわらか線「やわらか駅」南口より徒歩 5 分" },
      { icon: "🚇", text: "地下鉄やわらか線「やわらか大学前駅」1番出口より徒歩 2 分" },
    ],
  },
  {
    means: "バス",
    items: [
      { icon: "🚌", text: "やわらかバス「やわらか大学」停留所 すぐ" },
      { icon: "🚌", text: "やわらか駅北口より 大学直通シャトルバス（平日のみ）" },
    ],
  },
  {
    means: "お車・駐車場",
    items: [
      { icon: "🚗", text: "やわらか自動車道「やわらかIC」より約10分" },
      { icon: "🅿️", text: "第1〜第3駐車場 合計200台（来客用は守衛室にご連絡ください）" },
    ],
  },
];

const campuses = [
  {
    name: "本キャンパス",
    zip: "〒000-0000",
    address: "やわらか県やわらか市やわらか町 1-1-1",
    tel: "000-000-0000",
    email: "info@yawaraka-u.ac.jp",
    buildings: ["総合研究棟", "文化創造学部棟", "生命環境学部棟", "共生社会学部棟", "情報デザイン学部棟", "やわらか図書館", "学生交流センター"],
  },
  {
    name: "サテライトキャンパス（やわらか市街地）",
    zip: "〒000-0001",
    address: "やわらか県やわらか市中央 2-3-4",
    tel: "000-000-1111",
    email: "satellite@yawaraka-u.ac.jp",
    buildings: ["社会人大学院教室", "市民開放講座スタジオ", "就職・キャリアセンター"],
  },
];

export default function AccessPage() {
  return (
    <>
      <PageTracker page="/access" />
      <Nav />
      <main className="pt-[4.5rem]">
        {/* ページヒーロー */}
        <section className="bg-stone-50 px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <p className="mb-2 text-xs font-medium tracking-[0.3em] text-stone-400 uppercase">
                Access
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
                アクセス
              </h1>
              <p className="mt-4 text-base font-light text-stone-500">
                やわらか大学へのアクセス方法とキャンパス情報をご案内します。
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* キャンパス情報 */}
        <section className="bg-white px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <p className="mb-3 text-xs font-medium tracking-[0.3em] text-stone-400 uppercase">
                Campuses
              </p>
              <h2 className="mb-12 text-3xl font-semibold tracking-tight text-zinc-900">
                キャンパス一覧
              </h2>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-2">
              {campuses.map((c, i) => (
                <ScrollReveal key={c.name} delay={i * 0.1}>
                  <div className="rounded-2xl border border-stone-100 bg-stone-50 p-8">
                    <h3 className="mb-4 text-lg font-semibold text-zinc-900">{c.name}</h3>
                    <address className="mb-5 not-italic text-sm leading-loose text-stone-600">
                      {c.zip}
                      <br />
                      {c.address}
                      <br />
                      TEL: {c.tel}
                      <br />
                      Email:{" "}
                      <a
                        href={`mailto:${c.email}`}
                        className="text-accent-700 underline underline-offset-2 hover:text-accent-800"
                      >
                        {c.email}
                      </a>
                    </address>
                    <div>
                      <p className="mb-2 text-xs text-stone-400">主要建物</p>
                      <div className="flex flex-wrap gap-1.5">
                        {c.buildings.map((b) => (
                          <span
                            key={b}
                            className="rounded-full border border-accent-200 bg-accent-50 px-3 py-0.5 text-xs text-accent-700"
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 交通アクセス */}
        <section className="bg-stone-50 px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <p className="mb-3 text-xs font-medium tracking-[0.3em] text-stone-400 uppercase">
                Transportation
              </p>
              <h2 className="mb-12 text-3xl font-semibold tracking-tight text-zinc-900">
                交通アクセス（本キャンパス）
              </h2>
            </ScrollReveal>

            <div className="space-y-6">
              {routes.map((r, i) => (
                <ScrollReveal key={r.means} delay={i * 0.08}>
                  <div className="rounded-2xl bg-white p-7">
                    <h3 className="mb-4 text-sm font-semibold text-zinc-900">{r.means}</h3>
                    <ul className="space-y-3">
                      {r.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-stone-600">
                          <span className="shrink-0">{item.icon}</span>
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* キャンパスマップ（プレースホルダー） */}
        <section id="map" className="bg-white px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <p className="mb-3 text-xs font-medium tracking-[0.3em] text-stone-400 uppercase">
                Campus Map
              </p>
              <h2 className="mb-10 text-3xl font-semibold tracking-tight text-zinc-900">
                キャンパスマップ
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="flex h-80 items-center justify-center rounded-2xl border border-stone-100 bg-stone-50">
                <p className="text-sm text-stone-400">キャンパスマップ（準備中）</p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
