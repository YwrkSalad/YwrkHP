export const dynamic = "force-dynamic";

import { getStats } from "@/lib/pageview";
import Nav from "../_components/Nav";
import PageViewCounter from "../_components/PageViewCounter";
import IpLeaderboard from "../_components/IpLeaderboard";

export default async function Analytics() {
  const { count, nameCounts } = await getStats();

  return (
    <>
      <Nav />
      <main className="mt-[4.5rem] h-[calc(100svh-4.5rem)] overflow-hidden">
        <section className="relative flex h-full flex-col items-center overflow-hidden bg-gradient-to-b from-stone-50 via-white to-stone-100 px-8">
          <div
            aria-hidden
            className="pointer-events-none absolute top-[calc(50%-2rem)] left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-[18rem] leading-none font-bold text-stone-200 select-none"
            style={{ gap: "2svh" }}
          >
            <div className="flex" style={{ gap: "8vw" }}>
              <span>y</span>
              <span>w</span>
            </div>
            <div className="flex" style={{ gap: "8vw" }}>
              <span>r</span>
              <span>k</span>
            </div>
          </div>

          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-10">
            <div className="flex flex-col items-center gap-3">
              <p className="text-xs font-medium tracking-[0.3em] text-stone-400 uppercase">
                ywrk
              </p>
              <div className="h-px w-8 bg-stone-200" />
              <p className="text-xs font-medium tracking-[0.3em] text-stone-400 uppercase">
                Analytics
              </p>
            </div>

            <PageViewCounter
              initial={count}
              initialVisitors={Object.keys(nameCounts).length}
            />

            <div className="max-h-[40svh] w-full max-w-sm overflow-y-auto">
              <IpLeaderboard initialCounts={nameCounts} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
