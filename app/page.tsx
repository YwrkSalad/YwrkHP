import { prisma } from "@/lib/prisma";
import TrackView from "./_components/TrackView";

async function getTodayCount() {
  const start = new Date();
  start.setHours(0, 0, 0, 0);

  return prisma.pageView.count({
    where: { visitedAt: { gte: start } },
  });
}

export default async function Home() {
  const count = await getTodayCount();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <TrackView />
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
        ywrk
      </h1>
      <p className="mt-4 text-sm text-zinc-500">今日の訪問者数: {count}</p>
    </main>
  );
}
