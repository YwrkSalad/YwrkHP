import { prisma } from "@/lib/prisma";

export async function POST() {
  await prisma.pageView.create({ data: {} });
  return new Response(null, { status: 204 });
}

export async function GET() {
  const start = new Date();
  start.setHours(0, 0, 0, 0);

  const count = await prisma.pageView.count({
    where: { visitedAt: { gte: start } },
  });

  return Response.json({ count });
}
