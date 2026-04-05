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
