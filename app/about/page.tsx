import type { Metadata } from "next";
import Image from "next/image";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import ScrollReveal from "../_components/ScrollReveal";
import PageTracker from "../_components/PageTracker";

export const metadata: Metadata = { title: "大学について" };


const history = [
  {
    year: "1948",
    event: "やわらか大学設立。文化創造学部・生命環境学部の2学部からスタート。",
  },
  {
    year: "1965",
    event: "共生社会学部を設置。福祉・地域学の先駆的な教育を開始。",
  },
  {
    year: "1987",
    event: "大学院を設置。研究機能を強化し、社会連携活動を本格化。",
  },
  {
    year: "2002",
    event: "情報デザイン学部を設置。テクノロジーと感性の融合を探求。",
  },
  { year: "2015", event: "国際交流センター開設。協定校が60大学に拡大。" },
  {
    year: "2026",
    event: "創立78周年。学生数5,200名、専任教員240名の総合大学へ。",
  },
];

const board = [
  { role: "学長", name: "やわらか", note: "文化創造学部教授 / 表現文化論" },
  {
    role: "副学長（教育）",
    name: "すき",
    note: "共生社会学部教授 / 福祉心理学",
  },
  {
    role: "副学長（研究）",
    name: "える",
    note: "生命環境学部教授 / 環境生態学",
  },
  { role: "事務局長", name: "わんわわ", note: "大学運営全般" },
];

export default function AboutPage() {
  return (
    <>
      <PageTracker page="/about" />
      <Nav />
      <main className="pt-[4.5rem]">
        {/* ページヒーロー */}
        <section className="bg-stone-50 px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <p className="text-accent-600 mb-2 text-xs font-medium tracking-[0.3em] uppercase">
                About
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
                大学について
              </h1>
            </ScrollReveal>
          </div>
        </section>

        {/* 学長挨拶 */}
        <section id="president" className="bg-white px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <p className="text-accent-600 mb-3 text-xs font-medium tracking-[0.3em] uppercase">
                President's Message
              </p>
              <h2 className="mb-12 text-3xl font-semibold tracking-tight text-zinc-900">
                学長挨拶
              </h2>
            </ScrollReveal>

            <div className="flex flex-col gap-12 md:flex-row md:items-start md:gap-16">
              {/* 写真 */}
              <ScrollReveal className="shrink-0 md:w-80">
                <div className="overflow-hidden rounded-md">
                  <Image
                    src="/gakucho.jpg"
                    alt="学長 やわらか"
                    width={320}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>
                <p className="mt-4 text-center text-sm font-medium text-zinc-700">
                  やわらか大学 学長
                </p>
                <p className="mt-1 text-center text-base font-semibold text-zinc-900">
                  やわらか
                </p>
              </ScrollReveal>

              {/* 本文 */}
              <div className="space-y-8 text-base leading-loose font-light text-stone-600">
                <ScrollReveal delay={0.1}>
                  <blockquote className="border-accent-300 border-l-2 pl-6">
                    <p className="text-xl leading-snug font-semibold tracking-tight text-zinc-900 sm:text-2xl">
                      やわらかであることは、強さである。
                    </p>
                  </blockquote>
                </ScrollReveal>
                <ScrollReveal delay={0.15}>
                  <p>
                    やわらか大学へようこそ。本学は、「知のやわらかさ」を根幹に置く大学です。
                    固定観念を疑い、多様な視点から問いを立て、状況に応じてしなやかに考える力——
                    それが、変化の激しい時代を生き抜くための本質的な強さだと私たちは考えます。
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <p>
                    私たちが目指すのは、知識を「生きる技術」へと変える教育です。
                    他者への深い共感と敬意を根底に持ちながら、ていねいに行動できる人間を育てること。
                    それが、本学のすべての教育活動の出発点です。
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.25}>
                  <p>
                    学問の領域を越えた対話と協働を通じて、学生・教員・地域社会がともに学び、
                    やわらかでひらかれたキャンパスをつくり続けます。
                    みなさんと一緒に、この場所を育てていけることを心から楽しみにしています。
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                  <p className="text-right text-sm text-stone-400">
                    やわらか大学 学長　やわらか
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* 沿革 */}
        <section id="history" className="bg-accent-50 px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <p className="text-accent-600 mb-3 text-xs font-medium tracking-[0.3em] uppercase">
                History
              </p>
              <h2 className="mb-14 text-3xl font-semibold tracking-tight text-zinc-900">
                沿革
              </h2>
            </ScrollReveal>

            <div className="relative">
              <div className="bg-accent-200 absolute top-0 bottom-0 left-[5.5rem] w-px sm:left-24" />
              <div className="space-y-10">
                {history.map((item, i) => (
                  <ScrollReveal key={item.year} delay={i * 0.08}>
                    <div className="flex items-start gap-6 sm:gap-10">
                      <span className="w-16 shrink-0 pt-0.5 text-right text-sm font-medium text-stone-400 sm:w-20">
                        {item.year}
                      </span>
                      <div className="bg-accent-400 relative z-10 mt-2 h-2.5 w-2.5 shrink-0 rounded" />
                      <p className="text-sm leading-relaxed text-stone-600">
                        {item.event}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 組織概要 */}
        <section id="organization" className="bg-white px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <p className="text-accent-600 mb-3 text-xs font-medium tracking-[0.3em] uppercase">
                Organization
              </p>
              <h2 className="mb-14 text-3xl font-semibold tracking-tight text-zinc-900">
                組織概要
              </h2>
            </ScrollReveal>

            {/* 数字 */}
            <div className="mb-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { num: "6,800", unit: "名", label: "学生数" },
                { num: "380", unit: "名", label: "専任教員数" },
                { num: "5", unit: "学部", label: "学部構成" },
                { num: "78", unit: "年", label: "創立" },
              ].map((stat, i) => (
                <ScrollReveal key={stat.label} delay={i * 0.08}>
                  <div className="bg-accent-50 border-accent-100 rounded-md border p-6 text-center">
                    <p className="text-accent-700 text-3xl font-semibold">
                      {stat.num}
                      <span className="text-lg text-stone-400">
                        {stat.unit}
                      </span>
                    </p>
                    <p className="mt-1 text-xs text-stone-500">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* 役員 */}
            <ScrollReveal>
              <h3 className="mb-6 text-lg font-semibold text-zinc-900">
                役員一覧
              </h3>
            </ScrollReveal>
            <div className="divide-y divide-stone-100">
              {board.map((member, i) => (
                <ScrollReveal key={member.role} delay={i * 0.07}>
                  <div className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:gap-8">
                    <span className="w-36 shrink-0 text-xs text-stone-400">
                      {member.role}
                    </span>
                    <span className="text-base font-medium text-zinc-800">
                      {member.name}
                    </span>
                    <span className="text-xs text-stone-400">
                      {member.note}
                    </span>
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

