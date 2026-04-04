import { getDb } from "./firebase";

const startOfToday = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.getTime();
};

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

export async function recordVisitAndGetTodayCount(
  ip: string,
  page: string,
): Promise<number> {
  const db = getDb();
  await db.ref(`pageviews/${generateKey()}`).set({ ts: Date.now(), ip, page });
  const snapshot = await db
    .ref("pageviews")
    .orderByChild("ts")
    .startAt(startOfToday())
    .once("value");
  return snapshot.numChildren();
}

export function todayRef() {
  return getDb()
    .ref("pageviews")
    .orderByChild("ts")
    .startAt(startOfToday());
}
