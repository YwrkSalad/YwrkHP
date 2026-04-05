import { getDb } from "./firebase";
import { ipToName } from "./ipname";

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

export async function recordVisit(ip: string, page: string): Promise<void> {
  await getDb()
    .ref(`pageviews/${generateKey()}`)
    .set({ ts: Date.now(), ip, page });
}

export async function getStats(): Promise<{
  count: number;
  ipCounts: Record<string, number>;
}> {
  const snapshot = await getDb().ref("pageviews").once("value");
  const ipCounts: Record<string, number> = {};
  snapshot.forEach((child) => {
    const ip: string = child.val()?.ip;
    if (!ip) return;
    const name = ipToName(ip);
    ipCounts[name] = (ipCounts[name] ?? 0) + 1;
  });
  return { count: snapshot.numChildren(), ipCounts };
}
