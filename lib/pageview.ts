import { getDb } from "./firebase";

function generateKey(): string {
  const now = new Date();
  const pad = (n: number, len = 2) => String(n).padStart(len, "0");
  const datePart = [
    now.getFullYear(),
    pad(now.getMonth() + 1),
    pad(now.getDate()),
    pad(now.getHours()),
    pad(now.getMinutes()),
    pad(now.getSeconds()),
    pad(now.getMilliseconds(), 3),
  ].join("-");
  const randomPart = Math.random().toString(36).slice(2, 8);
  return `${datePart}_${randomPart}`;
}

export async function recordVisitAndGetCount(
  ip: string,
  page: string,
): Promise<number> {
  const db = getDb();
  await db.ref(`pageviews/${generateKey()}`).set({ ts: Date.now(), ip, page });
  const result = await db
    .ref("count")
    .transaction((current: number | null) => (current ?? 0) + 1);
  return result.snapshot.val() as number;
}
