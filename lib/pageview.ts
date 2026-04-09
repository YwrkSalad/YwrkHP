import { getDb } from "./firebase";
import { indexToName } from "./visitorname";

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

export async function recordVisit(uid: string, page: string): Promise<void> {
  await getDb()
    .ref(`pageviews/${generateKey()}`)
    .set({ ts: Date.now(), uid, page });
}

export async function getStats(): Promise<{
  count: number;
  nameCounts: Record<string, number>;
}> {
  const snapshot = await getDb().ref("pageviews").once("value");

  // uid ごとのページビュー数を集計
  const uidPageCounts: Record<string, number> = {};
  snapshot.forEach((child) => {
    const uid: string = child.val()?.uid;
    if (!uid) return;
    uidPageCounts[uid] = (uidPageCounts[uid] ?? 0) + 1;
  });

  // uid を辞書順ソート（先頭が JST 日時のため = 初回訪問時刻の昇順）
  const sortedUids = Object.keys(uidPageCounts).sort();

  // インデックス順に名前を割り当て
  const nameCounts: Record<string, number> = {};
  sortedUids.forEach((uid, i) => {
    nameCounts[indexToName(i)] = uidPageCounts[uid];
  });

  return { count: snapshot.numChildren(), nameCounts };
}
