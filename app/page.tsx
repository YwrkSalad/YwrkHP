export const dynamic = "force-dynamic";

import { headers } from "next/headers";
import { recordVisitAndGetTodayCount } from "@/lib/pageview";
import PageViewCounter from "./_components/PageViewCounter";

export default async function Home() {
  const h = await headers();
  const ip =
    h.get("x-forwarded-for")?.split(",")[0].trim() ??
    h.get("x-real-ip") ??
    "unknown";
  const count = await recordVisitAndGetTodayCount(ip, "/");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
        ywrk
      </h1>
      <PageViewCounter initial={count} />
    </main>
  );
}
