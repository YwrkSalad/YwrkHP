import type { Metadata } from "next";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import ScrollReveal from "../_components/ScrollReveal";
import PageTracker from "../_components/PageTracker";
import CampusMap from "../_components/CampusMap";

export const metadata: Metadata = { title: "アクセス" };


const routes = [
  {
    means: "電車",
    items: [
      "JR やわらか線「やわらか駅」南口より徒歩 5 分",
      "地下鉄やわらか線「やわらか大学前駅」1番出口より徒歩 2 分",
    ],
  },
  {
    means: "バス",
    items: [
      "やわらかバス「やわらか大学」停留所 すぐ",
      "やわらか駅北口より大学直通シャトルバス（平日のみ）",
    ],
  },
  {
    means: "お車・駐車場",
    items: [
      "やわらか自動車道「やわらかIC」より約10分",
      "第1〜第3駐車場 合計200台（来客用は守衛室にご連絡ください）",
    ],
  },
];

const campuses = [
  {
    name: "本キャンパス",
    zip: "〒000-0000",
    address: "やわらか県やわらか市やわらか町 1-1-1",
    tel: "000-000-0000",
    email: "info@ywrk.org",
    buildings: [
      "総合管理棟",
      "理学部棟",
      "工学部棟",
      "情報科学部棟",
      "農学部棟",
      "医学部棟",
      "附属病院",
      "大学院研究棟 I・II",
      "やわらか図書館",
      "体育館",
      "学生交流センター",
      "学生食堂",
    ],
  },
  {
    name: "サテライトキャンパス（やわらか市街地）",
    zip: "〒000-0001",
    address: "やわらか県やわらか市中央 2-3-4",
    tel: "000-000-1111",
    email: "satellite@ywrk.org",
    buildings: [
      "社会人大学院教室",
      "市民開放講座スタジオ",
      "就職・キャリアセンター",
    ],
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
              <p className="mb-2 text-xs font-medium tracking-[0.3em] text-accent-600 uppercase">
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

        {/* キャンパスマップ */}
        <section id="map" className="bg-white px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <p className="mb-3 text-xs font-medium tracking-[0.3em] text-accent-600 uppercase">
                Campus Map
              </p>
              <h2 className="mb-10 text-3xl font-semibold tracking-tight text-zinc-900">
                キャンパスマップ
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <CampusMap />
            </ScrollReveal>
          </div>
        </section>

        {/* キャンパス情報 */}
        <section className="bg-stone-50 px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <p className="mb-3 text-xs font-medium tracking-[0.3em] text-accent-600 uppercase">
                Campuses
              </p>
              <h2 className="mb-12 text-3xl font-semibold tracking-tight text-zinc-900">
                キャンパス一覧
              </h2>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-2">
              {campuses.map((c, i) => (
                <ScrollReveal key={c.name} delay={i * 0.1}>
                  <div className="rounded-md border border-stone-100 bg-white p-8">
                    <h3 className="mb-4 text-lg font-semibold text-zinc-900">
                      {c.name}
                    </h3>
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
                            className="rounded border border-accent-200 bg-accent-50 px-3 py-0.5 text-xs text-accent-700"
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
        <section className="bg-white px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <p className="mb-3 text-xs font-medium tracking-[0.3em] text-accent-600 uppercase">
                Transportation
              </p>
              <h2 className="mb-12 text-3xl font-semibold tracking-tight text-zinc-900">
                交通アクセス（本キャンパス）
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <table className="w-full border-collapse text-sm">
                <tbody>
                  {routes.map((r, i) => (
                    <tr key={r.means} className="border-t border-stone-200">
                      <th
                        scope="row"
                        className="w-32 shrink-0 py-5 pr-8 text-left align-top text-xs font-semibold text-zinc-700 sm:w-40"
                      >
                        {r.means}
                      </th>
                      <td className="py-5 text-stone-600">
                        <ul className="space-y-1.5">
                          {r.items.map((text, j) => (
                            <li key={j}>{text}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
