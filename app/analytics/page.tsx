export const dynamic = "force-dynamic";

import { getCount } from "@/lib/pageview";
import Nav from "../_components/Nav";
import PageViewCounter from "../_components/PageViewCounter";

export default async function Analytics() {
  const count = await getCount();

  return (
    <>
      <Nav />
      <main>
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white via-stone-50/40 to-stone-100/60 px-8 pt-12">
          {/* 背景装飾 */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[22rem] font-bold leading-none text-stone-100 sm:text-[32rem]"
          >
            yw
          </span>

          <div className="relative z-10 flex flex-col items-center gap-16">
            <div className="flex flex-col items-center gap-3">
              <p className="text-xs font-medium tracking-[0.3em] text-stone-400 uppercase">
                ywrk
              </p>
              <div className="h-px w-8 bg-stone-200" />
              <p className="text-xs font-medium tracking-[0.3em] text-stone-400 uppercase">
                Analytics
              </p>
            </div>

            <PageViewCounter initial={count} />
          </div>
        </section>
      </main>

      <footer className="bg-white px-8 py-6">
        <div className="mx-auto max-w-screen-xl border-t border-stone-100 pt-6">
          <p className="text-xs text-stone-300">© 2026 ywrk</p>
        </div>
      </footer>
    </>
  );
}
