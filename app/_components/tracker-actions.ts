"use server";

import { headers } from "next/headers";
import { recordVisit } from "@/lib/pageview";
import { isBot } from "@/lib/isBot";

export async function trackVisit(uid: string, page: string): Promise<void> {
  const h = await headers();
  const ua = h.get("user-agent") ?? "";
  if (isBot(ua)) return;
  await recordVisit(uid, page);
}
