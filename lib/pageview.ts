import { getDb } from "./firebase";

const startOfToday = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.getTime();
};

export async function recordVisitAndGetTodayCount(
  ip: string,
  page: string,
): Promise<number> {
  const db = getDb();
  await db.ref("pageviews").push({ ts: Date.now(), ip, page });
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
