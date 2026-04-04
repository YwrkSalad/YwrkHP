import { getDb } from "./firebase";

const TODAY_KEY = () => new Date().toISOString().slice(0, 10); // YYYY-MM-DD

export async function incrementAndGetTodayCount(): Promise<number> {
  const ref = getDb().ref(`pageviews/${TODAY_KEY()}`);
  const result = await ref.transaction((current: number | null) =>
    (current ?? 0) + 1,
  );
  return result.snapshot.val() as number;
}
