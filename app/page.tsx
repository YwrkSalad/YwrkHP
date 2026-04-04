export const dynamic = "force-dynamic";

import { headers } from "next/headers";
import { recordVisit } from "@/lib/pageview";

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200/60">
        <div className="mx-auto flex h-12 max-w-screen-xl items-center justify-center px-8">
          <span className="text-sm font-medium tracking-widest text-zinc-700">
            ywrk
          </span>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="flex min-h-screen flex-col items-center justify-center bg-white px-8 pt-12">
          <p className="mb-6 text-sm font-medium tracking-widest text-stone-400 uppercase">
            ywrk
          </p>
          <h1 className="text-center text-7xl font-semibold tracking-tight text-zinc-900 sm:text-8xl md:text-9xl">
            やわらかな
            <br />
            顔つきを。
          </h1>
          <p className="mt-10 text-center text-xl font-light text-stone-500 sm:text-2xl">
            全ての人に。
          </p>
          <div className="mt-20 h-px w-12 bg-stone-300" />
        </section>

        {/* やわらかな暮らし */}
        <section className="flex min-h-screen flex-col items-center justify-center bg-stone-50 px-8">
          <p className="mb-6 text-sm font-medium tracking-widest text-stone-400 uppercase">
            Lifestyle
          </p>
          <h2 className="text-center text-5xl font-semibold tracking-tight text-zinc-900 sm:text-6xl md:text-7xl">
            やわらかな暮らし
          </h2>
          <p className="mt-10 max-w-xl text-center text-lg font-light leading-relaxed text-stone-500 sm:text-xl">
            心地よいリズムで、毎日をていねいに。
            <br />
            あたたかさに満ちた空間と時間が、
            <br />
            やわらかな毎日をかたちづくる。
          </p>
        </section>

        {/* やわらかな顔つき */}
        <section className="flex min-h-screen flex-col items-center justify-center bg-white px-8">
          <p className="mb-6 text-sm font-medium tracking-widest text-stone-400 uppercase">
            Expression
          </p>
          <h2 className="text-center text-5xl font-semibold tracking-tight text-zinc-900 sm:text-6xl md:text-7xl">
            やわらかな顔つき
          </h2>
          <p className="mt-10 max-w-xl text-center text-lg font-light leading-relaxed text-stone-500 sm:text-xl">
            おだやかに、自分らしく。
            <br />
            やわらかな表情がそこにあるだけで、
            <br />
            世界は少しやさしくなる。
          </p>
        </section>

        {/* Bottom */}
        <section className="flex min-h-[40vh] flex-col items-center justify-center bg-zinc-900 px-8">
          <p className="text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            全ての人に、
            <br />
            やわらかな顔つきを。
          </p>
          <p className="mt-6 text-sm font-light tracking-widest text-zinc-400 uppercase">
            ywrk
          </p>
        </section>
      </main>

      <footer className="bg-zinc-900 px-8 py-6">
        <div className="mx-auto max-w-screen-xl border-t border-zinc-800 pt-6">
          <p className="text-xs text-zinc-600">© 2026 ywrk</p>
        </div>
      </footer>
    </>
  );
}
