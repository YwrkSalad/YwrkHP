"use client";

import { useEffect } from "react";
import { trackVisit } from "./tracker-actions";

const STORAGE_KEY = "ywrk-visitor-id";

function generateVisitorId(): string {
  // JST（UTC+9）の現在時刻を YYYY-MM-DD_HH-mm-ss 形式で取得
  const now = new Date();
  const jst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  const pad = (n: number) => String(n).padStart(2, "0");
  const date = [
    jst.getUTCFullYear(),
    pad(jst.getUTCMonth() + 1),
    pad(jst.getUTCDate()),
  ].join("-");
  const time = [
    pad(jst.getUTCHours()),
    pad(jst.getUTCMinutes()),
    pad(jst.getUTCSeconds()),
  ].join("-");
  return `${date}_${time}_${crypto.randomUUID()}`;
}

function getOrCreateVisitorId(): string {
  let id = localStorage.getItem(STORAGE_KEY);
  if (!id) {
    id = generateVisitorId();
    localStorage.setItem(STORAGE_KEY, id);
  }
  return id;
}

export default function PageTracker({ page }: { page: string }) {
  useEffect(() => {
    const uid = getOrCreateVisitorId();
    void trackVisit(uid, page);
  }, [page]);

  return null;
}
