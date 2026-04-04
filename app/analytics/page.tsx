export const dynamic = "force-dynamic";

import { headers } from "next/headers";
import { getCount, recordVisit } from "@/lib/pageview";
import Nav from "../_components/Nav";
import PageViewCounter from "../_components/PageViewCounter";

export default async function Analytics() {
  const h = await headers();
  const ip = (
    h.get("x-forwarded-for")?.split(",")[0].trim() ??
    h.get("x-real-ip") ??
    "unknown"
  ).replace(/^::ffff:/, "");
  await recordVisit(ip, "/analytics");

  const count = await getCount();

  return (
    <>
      <Nav />
      <main>
        <section className="relative flex h-svh flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white via-stone-50/40 to-stone-100/60 px-8">
          <span
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22rem] leading-none font-bold text-stone-100 select-none sm:text-[32rem]"
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
    </>
  );
}
