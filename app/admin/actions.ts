"use server";

import { randomInt } from "node:crypto";
import { headers } from "next/headers";
import { recordVisit } from "@/lib/pageview";
import { isBot } from "@/lib/isBot";

function getTokenModulus(): bigint | null {
  const raw = process.env.ADMIN_TOKEN_MODULUS?.trim();
  if (!raw) return null;
  try {
    const modulus = BigInt(raw);
    if (modulus <= 0n) return null;
    return modulus;
  } catch {
    return null;
  }
}

function generateToken(modulus: bigint): string {
  const ts = BigInt(Date.now());
  const nonce = BigInt(randomInt(100_000, 1_000_000));
  return ((ts * 1_000_000n + nonce) * modulus).toString();
}

function isValidToken(token: string, modulus: bigint): boolean {
  if (!token) return false;
  try {
    return BigInt(token) % modulus === 0n;
  } catch {
    return false;
  }
}

export async function loginAdmin(password: string): Promise<string | null> {
  if (password !== process.env.ADMIN_PASSWORD) return null;
  const modulus = getTokenModulus();
  if (!modulus) return null;
  return generateToken(modulus);
}

export async function verifyToken(token: string): Promise<boolean> {
  const modulus = getTokenModulus();
  if (!modulus) return false;
  return isValidToken(token, modulus);
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
