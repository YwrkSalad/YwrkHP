import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import ScrollReveal from "../_components/ScrollReveal";
import PageTracker from "../_components/PageTracker";
import PageHero from "../_components/PageHero";
import PageSection from "../_components/PageSection";
import SectionHeading from "../_components/SectionHeading";
import StatBlock from "../_components/StatBlock";
import { history, board, stats } from "../../data/about";

export const metadata: Metadata = {
  title: "大学について",
  description: "やわらか大学の歴史、学長メッセージ、組織概要をご紹介します。",
  openGraph: {
    title: "大学について | やわらか大学",
    description: "やわらか大学の歴史、学長メッセージ、組織概要をご紹介します。",
    url: "https://ywrk.org/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "大学について | やわらか大学",
    description: "やわらか大学の歴史、学長メッセージ、組織概要をご紹介します。",
    images: ["/OGP/OGP_1200x630.png"],
  },
};

export default function AboutPage() {
  return (
    <>
      <PageTracker page="/about" />
      <Nav />
      <main className="pt-[4.5rem]">
        <PageHero eyebrow="About" title="大学について" />

        {/* 学長挨拶 */}
        <PageSection id="president">
          <ScrollReveal>
            <SectionHeading
              eyebrow="President's Message"
              title="学長挨拶"
              className="mb-7 sm:mb-12"
              titleClassName="text-lg sm:text-3xl font-semibold tracking-tight text-zinc-900"
            />
          </ScrollReveal>

          <div className="flex flex-col gap-8 sm:gap-12 md:flex-row md:items-start md:gap-16">
            {/* 写真 */}
            <ScrollReveal className="shrink-0 md:w-80">
              <div className="overflow-hidden rounded-md">
                <Image
                  src="/about/gakucho.jpg"
                  alt="学長 やわらか"
                  width={320}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
              <p className="mt-4 text-center text-xs font-medium text-zinc-700">
                やわらか大学 学長
              </p>
              <p className="mt-1 text-center text-sm font-semibold text-zinc-900">
                やわらか
              </p>
            </ScrollReveal>

            {/* 本文 */}
            <div className="space-y-5 text-sm leading-loose font-light text-stone-600 sm:space-y-8">
              <ScrollReveal delay={0.1}>
                <blockquote className="border-accent-300 border-l-2 pl-6">
                  <p className="text-base leading-snug font-semibold tracking-tight text-zinc-900 sm:text-2xl">
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
                <p className="text-right text-xs text-stone-400">
                  やわらか大学 学長　やわらか
                </p>
              </ScrollReveal>
            </div>
          </div>
        </PageSection>

        {/* 沿革 */}
        <PageSection id="history" className="bg-accent-50 py-8 sm:py-24">
          <ScrollReveal>
            <SectionHeading
              eyebrow="History"
              title="沿革"
              titleClassName="text-lg sm:text-3xl font-semibold tracking-tight text-zinc-900"
            />
          </ScrollReveal>

          <div className="relative">
            <div className="bg-accent-200 absolute top-0 bottom-0 left-[5.25rem] w-px sm:left-[5.25rem]" />
            <div className="space-y-6 sm:space-y-10">
              {history.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.08}>
                  <div className="grid grid-cols-[4rem_2.5rem_1fr] items-start sm:grid-cols-[4rem_2.5rem_1fr]">
                    <span className="w-16 shrink-0 pt-0.5 text-right text-xs font-medium text-stone-400">
                      {item.year}
                    </span>
                    <div className="relative flex h-full justify-center">
                      <div className="bg-accent-400 relative z-10 mt-2 h-2.5 w-2.5 rounded" />
                    </div>
                    <p className="text-xs leading-relaxed text-stone-600">
                      {item.event}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </PageSection>

        {/* 組織概要 */}
        <PageSection id="organization">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Organization"
              title="組織概要"
              titleClassName="text-lg sm:text-3xl font-semibold tracking-tight text-zinc-900"
            />
          </ScrollReveal>

          {/* 数字 */}
          <div className="mb-6 grid grid-cols-2 gap-6 sm:mb-16 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <StatBlock num={stat.num} unit={stat.unit} label={stat.label} />
              </ScrollReveal>
            ))}
          </div>

          {/* 役員・教授 */}
          <ScrollReveal>
            <h3 className="mb-4 text-lg font-semibold text-zinc-900 sm:mb-6">
              役員・教授一覧
            </h3>
          </ScrollReveal>
          <div className="divide-y divide-stone-100">
            {board.map((member, i) => (
              <ScrollReveal key={member.role} delay={i * 0.07}>
                <div className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:gap-8">
                  <span className="w-36 shrink-0 text-xs text-stone-400">
                    {member.role}
                  </span>
                  <span className="w-16 text-sm font-medium text-zinc-800 [text-align-last:justify]">
                    {member.name}
                  </span>
                  <Link
                    href={member.href}
                    className="text-accent-700 hover:text-accent-800 text-xs underline underline-offset-4 transition-colors"
                  >
                    {member.note}
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </PageSection>
      </main>
      <Footer />
    </>
  );
}
