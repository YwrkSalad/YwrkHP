import type { Metadata } from "next";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import ScrollReveal from "../_components/ScrollReveal";
import PageTracker from "../_components/PageTracker";
import CampusMap from "../_components/CampusMap";
import PageHero from "../_components/PageHero";
import PageSection from "../_components/PageSection";
import SectionHeading from "../_components/SectionHeading";

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
        <PageHero
          eyebrow="Access"
          title="アクセス"
          description="やわらか大学へのアクセス方法とキャンパス情報をご案内します。"
          imageSrc="/access/bus_stop_faculty_of_engineering.png"
          imageAlt="やわらか大学 バス停"
        />

        {/* キャンパスマップ */}
        <PageSection id="map">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Campus Map"
              title="キャンパスマップ"
              className="mb-6 sm:mb-10"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <CampusMap />
          </ScrollReveal>
        </PageSection>

        {/* キャンパス情報 */}
        <PageSection id="campuses" className="bg-stone-100 py-8 sm:py-24">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Campuses"
              title="キャンパス一覧"
              className="mb-7 sm:mb-12"
            />
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {campuses.map((c, i) => (
              <ScrollReveal key={c.name} delay={i * 0.1} className="h-full">
                <div className="h-full rounded-md border border-stone-200 bg-white p-4 sm:p-8">
                  <h3 className="mb-4 text-lg font-semibold text-zinc-900">
                    {c.name}
                  </h3>
                  <address className="mb-5 text-sm leading-loose text-stone-700 not-italic">
                    {c.zip}
                    <br />
                    {c.address}
                    <br />
                    TEL: {c.tel}
                    <br />
                    Email:{" "}
                    <a
                      href={`mailto:${c.email}`}
                      className="text-accent-700 hover:text-accent-800 underline underline-offset-2"
                    >
                      {c.email}
                    </a>
                  </address>
                  <div>
                    <p className="mb-2 text-xs text-stone-500">主要建物</p>
                    <div className="flex flex-wrap gap-1.5">
                      {c.buildings.map((b) => (
                        <span
                          key={b}
                          className="border-accent-300 bg-accent-50 text-accent-800 rounded border px-3 py-0.5 text-xs"
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
        </PageSection>

        {/* 交通アクセス */}
        <PageSection id="transportation">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Transportation"
              title="交通アクセス（本キャンパス）"
              className="mb-7 sm:mb-12"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <table className="w-full border-collapse text-sm">
              <tbody>
                {routes.map((r) => (
                  <tr key={r.means} className="border-t border-stone-300">
                    <th
                      scope="row"
                      className="w-32 shrink-0 py-5 pr-8 text-left align-top text-xs font-semibold text-zinc-700 sm:w-40"
                    >
                      {r.means}
                    </th>
                    <td className="py-5 text-stone-700">
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
        </PageSection>
      </main>
      <Footer />
    </>
  );
}
