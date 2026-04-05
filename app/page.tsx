export const dynamic = "force-dynamic";

import { headers } from "next/headers";
import { recordVisit } from "@/lib/pageview";
import Nav from "./_components/Nav";
import HeroAnimation from "./_components/HeroAnimation";
import ScrollReveal from "./_components/ScrollReveal";

export default async function Home() {
  const h = await headers();
  const ip = (
    h.get("x-forwarded-for")?.split(",")[0].trim() ??
    h.get("x-real-ip") ??
    "unknown"
  ).replace(/^::ffff:/, "");
  await recordVisit(ip, "/");

  return (
    <>
      <Nav />

      <main className="mt-[4.5rem] h-[calc(100svh-4.5rem)] overflow-y-scroll snap-y snap-mandatory">
        <HeroAnimation />

        {/* やわらかな暮らし */}
        <section className="relative flex h-[calc(100svh-4.5rem)] snap-start flex-col items-center justify-center overflow-hidden bg-stone-50 px-8">
          <span
            aria-hidden
            className="pointer-events-none absolute top-1/2 right-8 -translate-y-1/2 text-[14rem] leading-none font-bold text-stone-100 select-none sm:text-[20rem]"
          >
            01
          </span>

          <div className="relative z-10 flex flex-col items-center">
            <ScrollReveal delay={0}>
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-8 bg-stone-300" />
                <p className="text-xs font-medium tracking-[0.3em] text-stone-400 uppercase">
                  Lifestyle
                </p>
                <div className="h-px w-8 bg-stone-300" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15} blur>
              <h2 className="text-center text-5xl font-semibold tracking-tight text-zinc-900 sm:text-6xl md:text-7xl">
                やわらかな暮らし
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="mt-10 h-px w-16 bg-stone-200" />
            </ScrollReveal>
            <ScrollReveal delay={0.45}>
              <p className="mt-10 max-w-xl text-center text-lg leading-loose font-light text-stone-500 sm:text-xl">
                心地よいリズムで、毎日をていねいに。
                <br />
                あたたかさに満ちた空間と時間が、
                <br />
                やわらかな毎日をかたちづくる。
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.6}>
              <p className="mt-16 text-4xl font-light text-stone-200 select-none">
                〝
              </p>
              <p className="text-center text-base font-light text-stone-400 italic">
                ていねいであること、それがすべての始まり。
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* やわらかな顔つき */}
        <section className="relative flex h-[calc(100svh-4.5rem)] snap-start flex-col items-center justify-center overflow-hidden bg-white px-8">
          <span
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-8 -translate-y-1/2 text-[14rem] leading-none font-bold text-stone-100 select-none sm:text-[20rem]"
          >
            02
          </span>

          <div className="relative z-10 flex flex-col items-center">
            <ScrollReveal delay={0}>
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-8 bg-stone-300" />
                <p className="text-xs font-medium tracking-[0.3em] text-stone-400 uppercase">
                  Expression
                </p>
                <div className="h-px w-8 bg-stone-300" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15} blur>
              <h2 className="text-center text-5xl font-semibold tracking-tight text-zinc-900 sm:text-6xl md:text-7xl">
                やわらかな顔つき
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="mt-10 h-px w-16 bg-stone-200" />
            </ScrollReveal>
            <ScrollReveal delay={0.45}>
              <p className="mt-10 max-w-xl text-center text-lg leading-loose font-light text-stone-500 sm:text-xl">
                おだやかに、自分らしく。
                <br />
                やわらかな表情がそこにあるだけで、
                <br />
                世界は少しやさしくなる。
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.6}>
              <p className="mt-16 text-4xl font-light text-stone-200 select-none">
                〝
              </p>
              <p className="text-center text-base font-light text-stone-400 italic">
                あなたの顔つきが、誰かの一日を変えるかもしれない。
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative flex h-[calc(100svh-4.5rem)] snap-start flex-col overflow-hidden bg-zinc-900 px-8">
          <span
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18rem] leading-none font-bold text-zinc-800 select-none sm:text-[26rem]"
          >
            yw
          </span>
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center">
            <ScrollReveal delay={0}>
              <p className="mb-8 text-xs font-medium tracking-[0.3em] text-zinc-500 uppercase">
                ywrk
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2} blur>
              <p className="text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
                全ての人に、
                <br />
                やわらかな顔つきを。
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="mt-12 h-px w-16 bg-zinc-700" />
            </ScrollReveal>
          </div>
          <div className="relative z-10 mx-auto w-full max-w-screen-xl border-t border-zinc-800 py-6">
            <p className="text-xs text-zinc-700">© 2026 ywrk</p>
          </div>
        </section>
      </main>
    </>
  );
}
