export const dynamic = "force-dynamic";

import { incrementAndGetTodayCount } from "@/lib/pageview";

export default async function Home() {
  const count = await incrementAndGetTodayCount();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
        ywrk
      </h1>
      <p className="mt-4 text-sm text-zinc-500">今日の訪問者数: {count}</p>
    </main>
  );
}
