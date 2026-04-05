export const dynamic = "force-dynamic";

import { headers } from "next/headers";
import { getStats, recordVisit } from "@/lib/pageview";
import { ipToName } from "@/lib/ipname";
import Nav from "../_components/Nav";
import PageViewCounter from "../_components/PageViewCounter";
import IpLeaderboard from "../_components/IpLeaderboard";

export default async function Analytics() {
  const h = await headers();
  const ip = (
    h.get("x-forwarded-for")?.split(",")[0].trim() ??
    h.get("x-real-ip") ??
    "unknown"
  ).replace(/^::ffff:/, "");
  const myName = ipToName(ip);
  const ua = h.get("user-agent") ?? "";
  const isBot = /bot|crawler|spider|crawling|headless|prerender|lighthouse|facebookexternalhit/i.test(ua);
  if (!isBot) await recordVisit(ip, "/analytics");

  const { count, ipCounts } = await getStats();

  return (
    <>
      <Nav />
      <main className="mt-[4.5rem] h-[calc(100svh-4.5rem)] overflow-hidden">
        <section className="relative flex h-full flex-col items-center overflow-hidden bg-gradient-to-b from-white via-stone-50/40 to-stone-100/60 px-8">
          <span
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[14rem] leading-none font-bold text-stone-100 select-none sm:text-[20rem]"
          >
            yw
            <br />
            rk
          </span>

          <div className="relative z-10 flex h-full min-h-0 w-full max-w-sm flex-col items-center gap-12">
            <div className="flex shrink-0 flex-col items-center gap-16">
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

            <div className="min-h-0 w-full flex-1 overflow-y-auto">
              <IpLeaderboard initialCounts={ipCounts} myName={myName} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
