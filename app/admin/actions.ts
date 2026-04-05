"use server";

import { headers } from "next/headers";
import { recordVisit } from "@/lib/pageview";
import { isBot } from "@/lib/isBot";

const TOKEN = "ywrk-admin-authenticated";

export async function loginAdmin(password: string): Promise<string | null> {
  if (password === process.env.ADMIN_PASSWORD) return TOKEN;
  return null;
}

export async function verifyToken(token: string): Promise<boolean> {
  return token === TOKEN;
}

export async function eraseVisitorLog(ip: string): Promise<void> {
  const db = (await import("@/lib/firebase")).getDb();
  const snapshot = await db.ref("pageviews").once("value");
  const deletes: Promise<void>[] = [];
  snapshot.forEach((child) => {
    if (child.val()?.ip === ip) deletes.push(child.ref.remove());
  });
  await Promise.all(deletes);
}

export async function recordAdminVisit(): Promise<void> {
  const h = await headers();
  const ua = h.get("user-agent") ?? "";
  if (isBot(ua)) return;
  const ip = (
    h.get("x-forwarded-for")?.split(",")[0].trim() ??
    h.get("x-real-ip") ??
    "unknown"
  ).replace(/^::ffff:/, "");
  await recordVisit(ip, "/admin");
}
