import { type NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

function getIp(req: NextRequest): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
}

function todayStart(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

export async function POST(req: NextRequest) {
  const { page } = await req.json();
  const ip = getIp(req);
  const start = todayStart();

  await prisma.pageView.create({ data: { page, ip } });

  const isFirstVisit =
    (await prisma.pageView.count({
      where: { ip, visitedAt: { gte: start } },
    })) === 1;

  return Response.json({ isFirstVisit });
}

export async function GET(req: NextRequest) {
  const page = new URL(req.url).searchParams.get("page") ?? "/";
  const start = todayStart();

  const count = await prisma.pageView.count({
    where: { page, visitedAt: { gte: start } },
  });

  const unique = await prisma.pageView.groupBy({
    by: ["ip"],
    where: { page, visitedAt: { gte: start } },
  });

  return Response.json({ count, uniqueCount: unique.length });
}
