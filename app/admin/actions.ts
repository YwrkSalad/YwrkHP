"use server";

import { randomInt } from "node:crypto";

const BIGINT_ZERO = BigInt(0);
const BIGINT_MILLION = BigInt(1_000_000);

function getTokenModulus(): bigint | null {
  const raw = process.env.ADMIN_TOKEN_MODULUS?.trim();
  if (!raw) return null;
  try {
    const modulus = BigInt(raw);
    if (modulus <= BIGINT_ZERO) return null;
    return modulus;
  } catch {
    return null;
  }
}

function generateToken(modulus: bigint): string {
  const ts = BigInt(Date.now());
  const nonce = BigInt(randomInt(100_000, 1_000_000));
  return ((ts * BIGINT_MILLION + nonce) * modulus).toString();
}

function isValidToken(token: string, modulus: bigint): boolean {
  if (!token) return false;
  try {
    return BigInt(token) % modulus === BIGINT_ZERO;
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

export async function eraseVisitorLog(uid: string): Promise<void> {
  const db = (await import("@/lib/firebase")).getDb();
  const snapshot = await db.ref("pageviews").once("value");
  const deletes: Promise<void>[] = [];
  snapshot.forEach((child) => {
    if (child.val()?.uid === uid) deletes.push(child.ref.remove());
  });
  await Promise.all(deletes);
}

// tracking は client-side PageTracker が担当する
export async function recordAdminVisit(): Promise<void> {}
