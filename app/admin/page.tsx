"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onValue, ref } from "firebase/database";
import { getClientDb } from "@/lib/firebase-client";
import { ipToName } from "@/lib/ipname";
import { verifyToken } from "./actions";

const TOKEN_KEY = "ywrk-admin-token";

type Pageview = {
  ts: number;
  ip: string;
  page: string;
  name: string;
};

type VisitorStat = {
  name: string;
  count: number;
  pages: Set<string>;
  first: number;
  last: number;
};

export default function AdminPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [pageviews, setPageviews] = useState<Pageview[]>([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY) ?? "";
    verifyToken(token).then((ok) => {
      if (!ok) router.replace("/admin/login");
      else setAuthed(true);
    });
  }, []);

  useEffect(() => {
    if (!authed) return;
    const unsubscribe = onValue(ref(getClientDb(), "pageviews"), (snapshot) => {
      const rows: Pageview[] = [];
      snapshot.forEach((child) => {
        const v = child.val();
        if (v?.ts && v?.ip) {
          rows.push({ ts: v.ts, ip: v.ip, page: v.page ?? "/", name: ipToName(v.ip) });
        }
      });
      rows.sort((a, b) => b.ts - a.ts);
      setPageviews(rows);
    });
    return unsubscribe;
  }, [authed]);

  if (!authed) return null;

  // 集計
  const visitorMap = new Map<string, VisitorStat>();
  for (const pv of pageviews) {
    const s = visitorMap.get(pv.name) ?? { name: pv.name, count: 0, pages: new Set(), first: pv.ts, last: pv.ts };
    s.count++;
    s.pages.add(pv.page);
    s.first = Math.min(s.first, pv.ts);
    s.last = Math.max(s.last, pv.ts);
    visitorMap.set(pv.name, s);
  }
  const visitors = [...visitorMap.values()].sort((a, b) => b.count - a.count);

  const fmt = (ts: number) =>
    new Date(ts).toLocaleString("ja-JP", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });

  function logout() {
    localStorage.removeItem(TOKEN_KEY);
    router.replace("/admin/login");
  }

  return (
    <main className="min-h-svh bg-stone-50 px-8 py-12">
      {/* Header */}
      <div className="mb-12 flex items-center justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-xs font-medium tracking-[0.3em] text-stone-400 uppercase">ywrk</p>
          <div className="h-px w-8 bg-stone-200" />
          <p className="text-xs font-medium tracking-[0.3em] text-stone-400 uppercase">Admin</p>
        </div>
        <button onClick={logout} className="text-xs tracking-widest text-stone-300 uppercase hover:text-stone-500 transition-colors">
          logout
        </button>
      </div>

      {/* Summary */}
      <div className="mb-10 flex gap-12">
        <div>
          <p className="text-4xl font-semibold text-zinc-900">{pageviews.length.toLocaleString("ja-JP")}</p>
          <p className="mt-1 text-xs tracking-[0.2em] text-stone-400 uppercase">Total Visits</p>
        </div>
        <div>
          <p className="text-4xl font-semibold text-zinc-900">{visitors.length.toLocaleString("ja-JP")}</p>
          <p className="mt-1 text-xs tracking-[0.2em] text-stone-400 uppercase">Visitors</p>
        </div>
      </div>

      {/* Visitors table */}
      <section className="mb-12">
        <p className="mb-4 text-xs font-medium tracking-[0.3em] text-stone-400 uppercase">Visitors</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-200 text-left text-xs tracking-widest text-stone-400 uppercase">
                <th className="pb-3 pr-8 font-medium">#</th>
                <th className="pb-3 pr-8 font-medium">Name</th>
                <th className="pb-3 pr-8 font-medium">Visits</th>
                <th className="pb-3 pr-8 font-medium">Pages</th>
                <th className="pb-3 pr-8 font-medium">First</th>
                <th className="pb-3 font-medium">Last</th>
              </tr>
            </thead>
            <tbody>
              {visitors.map((v, i) => (
                <tr key={v.name} className="border-b border-stone-100">
                  <td className="py-3 pr-8 font-mono text-xs text-stone-300">{i + 1}</td>
                  <td className="py-3 pr-8 font-medium text-zinc-700">{v.name}</td>
                  <td className="py-3 pr-8 tabular-nums text-zinc-700">{v.count}</td>
                  <td className="py-3 pr-8 text-stone-500">{[...v.pages].join(", ")}</td>
                  <td className="py-3 pr-8 font-mono text-xs text-stone-400">{fmt(v.first)}</td>
                  <td className="py-3 font-mono text-xs text-stone-400">{fmt(v.last)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Recent log */}
      <section>
        <p className="mb-4 text-xs font-medium tracking-[0.3em] text-stone-400 uppercase">Recent Activity</p>
        <div className="flex flex-col gap-1">
          {pageviews.slice(0, 100).map((pv, i) => (
            <div key={i} className="flex items-center gap-6 py-1.5 border-b border-stone-100 text-sm">
              <span className="font-mono text-xs text-stone-300 w-28 shrink-0">{fmt(pv.ts)}</span>
              <span className="font-medium text-zinc-700 w-40 shrink-0">{pv.name}</span>
              <span className="text-stone-400">{pv.page}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
