export const dynamic = "force-dynamic";

import { headers } from "next/headers";
import { recordVisit } from "@/lib/pageview";
import Nav from "./_components/Nav";

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

      <main>
        {/* Hero */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white via-stone-50/40 to-stone-100/60 px-8 pt-12">
          {/* 背景装飾 */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[22rem] font-bold leading-none text-stone-100 sm:text-[32rem]"
          >
            yw
          </span>

          <div className="relative z-10 flex flex-col items-center">
            <p className="mb-8 text-xs font-medium tracking-[0.3em] text-stone-400 uppercase">
              ywrk
            </p>
            <h1 className="text-center text-6xl font-semibold tracking-tight text-zinc-900 sm:text-8xl md:text-9xl">
              やわらかな
              <br />
              顔つきを。
            </h1>
            <p className="mt-10 text-center text-xl font-light text-stone-400 sm:text-2xl">
              全ての人に。
            </p>

            {/* スクロールインジケーター */}
            <div className="mt-24 flex flex-col items-center gap-2">
              <span className="text-xs tracking-widest text-stone-300 uppercase">
                Scroll
              </span>
              <div className="h-12 w-px bg-gradient-to-b from-stone-300 to-transparent" />
            </div>
          </div>
        </section>

        {/* やわらかな暮らし */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-stone-50 px-8">
          {/* セクション番号装飾 */}
          <span
            aria-hidden
            className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 select-none text-[14rem] font-bold leading-none text-stone-100 sm:text-[20rem]"
          >
            01
          </span>

          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px w-8 bg-stone-300" />
              <p className="text-xs font-medium tracking-[0.3em] text-stone-400 uppercase">
                Lifestyle
              </p>
              <div className="h-px w-8 bg-stone-300" />
            </div>
            <h2 className="text-center text-5xl font-semibold tracking-tight text-zinc-900 sm:text-6xl md:text-7xl">
              やわらかな暮らし
            </h2>
            <div className="mt-10 h-px w-16 bg-stone-200" />
            <p className="mt-10 max-w-xl text-center text-lg font-light leading-loose text-stone-500 sm:text-xl">
              心地よいリズムで、毎日をていねいに。
              <br />
              あたたかさに満ちた空間と時間が、
              <br />
              やわらかな毎日をかたちづくる。
            </p>
            {/* 引用装飾 */}
            <p className="mt-16 text-4xl font-light text-stone-200 select-none">
              〝
            </p>
            <p className="text-center text-base font-light italic text-stone-400">
              ていねいであること、それがすべての始まり。
            </p>
          </div>
        </section>

        {/* やわらかな顔つき */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-8">
          {/* セクション番号装飾 */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-8 top-1/2 -translate-y-1/2 select-none text-[14rem] font-bold leading-none text-stone-100 sm:text-[20rem]"
          >
            02
          </span>

          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px w-8 bg-stone-300" />
              <p className="text-xs font-medium tracking-[0.3em] text-stone-400 uppercase">
                Expression
              </p>
              <div className="h-px w-8 bg-stone-300" />
            </div>
            <h2 className="text-center text-5xl font-semibold tracking-tight text-zinc-900 sm:text-6xl md:text-7xl">
              やわらかな顔つき
            </h2>
            <div className="mt-10 h-px w-16 bg-stone-200" />
            <p className="mt-10 max-w-xl text-center text-lg font-light leading-loose text-stone-500 sm:text-xl">
              おだやかに、自分らしく。
              <br />
              やわらかな表情がそこにあるだけで、
              <br />
              世界は少しやさしくなる。
            </p>
            <p className="mt-16 text-4xl font-light text-stone-200 select-none">
              〝
            </p>
            <p className="text-center text-base font-light italic text-stone-400">
              あなたの顔つきが、誰かの一日を変えるかもしれない。
            </p>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden bg-zinc-900 px-8">
          {/* 背景装飾 */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[18rem] font-bold leading-none text-zinc-800 sm:text-[26rem]"
          >
            yw
          </span>
          <div className="relative z-10 flex flex-col items-center">
            <p className="mb-8 text-xs font-medium tracking-[0.3em] text-zinc-500 uppercase">
              ywrk
            </p>
            <p className="text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              全ての人に、
              <br />
              やわらかな顔つきを。
            </p>
            <div className="mt-12 h-px w-16 bg-zinc-700" />
          </div>
        </section>
      </main>

      <footer className="bg-zinc-900 px-8 pb-8">
        <div className="mx-auto max-w-screen-xl border-t border-zinc-800 pt-6">
          <p className="text-xs text-zinc-700">© 2026 ywrk</p>
        </div>
      </footer>
    </>
  );
}
