"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onChildAdded, onChildRemoved, ref } from "firebase/database";
import { getClientDb } from "@/lib/firebase-client";
import { ipToName } from "@/lib/ipname";
import { verifyToken, recordAdminVisit, eraseVisitorLog } from "./actions";

const TOKEN_KEY = "ywrk-admin-token";

type Pageview = {
  ts: number;
  ip: string;
  page: string;
  name: string;
};

type VisitorStat = {
  name: string;
  ip: string;
  count: number;
  pages: Set<string>;
  first: number;
  last: number;
};

export default function AdminPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [pageviews, setPageviews] = useState<Pageview[]>([]);
  const [modal, setModal] = useState<VisitorStat | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY) ?? "";
    verifyToken(token).then((ok) => {
      if (!ok) router.replace("/admin/login");
      else { setAuthed(true); recordAdminVisit(); }
    });
  }, []);

  useEffect(() => {
    if (!authed) return;
    const pvRef = ref(getClientDb(), "pageviews");

    const unsubAdd = onChildAdded(pvRef, (snap) => {
      const v = snap.val();
      if (!v?.ts || !v?.ip) return;
      const row: Pageview = { ts: v.ts, ip: v.ip, page: v.page ?? "/", name: ipToName(v.ip) };
      setPageviews((prev) => [row, ...prev].sort((a, b) => b.ts - a.ts));
    });

    const unsubRemove = onChildRemoved(pvRef, (snap) => {
      const v = snap.val();
      if (!v?.ts || !v?.ip) return;
      setPageviews((prev) => prev.filter((p) => !(p.ts === v.ts && p.ip === v.ip)));
    });

    return () => { unsubAdd(); unsubRemove(); };
  }, [authed]);

  if (!authed) return null;

  // 集計
  const visitorMap = new Map<string, VisitorStat>();
  for (const pv of pageviews) {
    const s = visitorMap.get(pv.name) ?? { name: pv.name, ip: pv.ip, count: 0, pages: new Set(), first: pv.ts, last: pv.ts };
    s.count++;
    s.pages.add(pv.page);
    s.first = Math.min(s.first, pv.ts);
    s.last = Math.max(s.last, pv.ts);
    visitorMap.set(pv.name, s);
  }
  const visitors = [...visitorMap.values()].sort((a, b) => b.count - a.count);

  const fmt = (ts: number) =>
    new Date(ts).toLocaleString("ja-JP", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });

  const fmtFull = (ts: number) =>
    new Date(ts).toLocaleString("ja-JP", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" });

  function logout() {
    localStorage.removeItem(TOKEN_KEY);
    router.replace("/admin/login");
  }

  return (
    <main className="h-svh overflow-y-auto bg-stone-50 px-8 py-12">
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
                <th className="hidden pb-3 pr-8 font-medium md:table-cell">Pages</th>
                <th className="hidden pb-3 pr-8 font-medium md:table-cell">First</th>
                <th className="pb-3 pr-8 font-medium">Last</th>
                <th className="pb-3 font-medium" />
              </tr>
            </thead>
            <tbody>
              {visitors.map((v, i) => (
                <tr key={v.name} className="border-b border-stone-100">
                  <td className="py-3 pr-8 font-mono text-xs text-stone-300">{i + 1}</td>
                  <td className="py-3 pr-8 font-medium text-zinc-700">{v.name}</td>
                  <td className="py-3 pr-8 tabular-nums text-zinc-700">{v.count}</td>
                  <td className="hidden py-3 pr-8 md:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {[...v.pages].map((page) => (
                        <span key={page} className="rounded-md bg-stone-100 px-2 py-0.5 font-mono text-xs text-stone-500">
                          {page}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="hidden py-3 pr-8 font-mono text-xs text-stone-400 md:table-cell">{fmt(v.first)}</td>
                  <td className="py-3 pr-8 font-mono text-xs text-stone-400">{fmt(v.last)}</td>
                  <td className="py-3">
                    <button
                      onClick={() => setModal(v)}
                      className="rounded-md bg-stone-100 px-2.5 py-1 text-xs font-medium text-stone-500 hover:bg-stone-200 hover:text-zinc-700 transition-colors"
                    >
                      ···
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Recent log */}
      <section>
        <p className="mb-4 text-xs font-medium tracking-[0.3em] text-stone-400 uppercase">Recent Activity</p>
        <div className="flex flex-col">
          {pageviews.slice(0, 100).map((pv, i) => (
            <div key={i} className="grid grid-cols-[1fr_auto] gap-x-4 border-b border-stone-100 py-3">
              {/* left: name + ip */}
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium text-zinc-700">{pv.name}</span>
                <span className="font-mono text-xs text-stone-400">{pv.ip}</span>
              </div>
              {/* right: page badge + timestamp */}
              <div className="flex flex-col items-end gap-1">
                <span className="rounded-md bg-stone-100 px-2 py-0.5 font-mono text-xs text-stone-500">
                  {pv.page}
                </span>
                <span className="font-mono text-xs text-stone-300">{fmtFull(pv.ts)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          onClick={() => setModal(null)}
        >
          <div
            className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between">
              <p className="font-semibold text-zinc-800">{modal.name}</p>
              <button onClick={() => setModal(null)} className="text-stone-300 hover:text-stone-600 transition-colors text-lg leading-none">×</button>
            </div>
            <dl className="flex flex-col gap-4 text-sm">
              <div className="flex justify-between">
                <dt className="text-stone-400">IP</dt>
                <dd className="font-mono text-xs text-zinc-700">{modal.ip}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-stone-400">Visits</dt>
                <dd className="font-medium text-zinc-700">{modal.count}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-stone-400">First</dt>
                <dd className="font-mono text-xs text-zinc-700">{fmt(modal.first)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-stone-400">Last</dt>
                <dd className="font-mono text-xs text-zinc-700">{fmt(modal.last)}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="shrink-0 text-stone-400">Pages</dt>
                <dd className="overflow-x-auto">
                  <div className="flex gap-1">
                    {[...modal.pages].map((page) => (
                      <span key={page} className="shrink-0 rounded-md bg-stone-100 px-2 py-0.5 font-mono text-xs text-stone-500">
                        {page}
                      </span>
                    ))}
                  </div>
                </dd>
              </div>
            </dl>

            <div className="mt-8 border-t border-stone-100 pt-6">
              <button
                onClick={async () => {
                  if (!confirm(`${modal.name} のログを全て削除しますか？`)) return;
                  await eraseVisitorLog(modal.ip);
                  setModal(null);
                }}
                className="w-full rounded-lg border border-red-100 bg-red-50 py-2 text-xs font-medium text-red-400 transition-colors hover:bg-red-100 hover:text-red-600"
              >
                Erase log about this user
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
