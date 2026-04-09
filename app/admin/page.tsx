"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onChildAdded, onChildRemoved, ref } from "firebase/database";
import { getClientDb } from "@/lib/firebase-client";
import { indexToName } from "@/lib/visitorname";
import Nav from "@/app/_components/Nav";
import PageTracker from "@/app/_components/PageTracker";
import { MoreHorizontal, X } from "lucide-react";
import { verifyToken, eraseVisitorLog } from "./actions";

const TOKEN_KEY = "ywrk-admin-token";

type Pageview = {
  ts: number;
  uid: string;
  page: string;
};

type VisitorStat = {
  name: string;
  uid: string;
  count: number;
  pages: Set<string>;
  first: number;
  last: number;
};

export default function AdminPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [pageviews, setPageviews] = useState<Pageview[]>([]);
  const [modal, setModal] = useState<VisitorStat | null>(null);
  const [logLimit, setLogLimit] = useState(20);
  const router = useRouter();

  useEffect(() => {
    let cancelled = false;

    async function guard() {
      const token = localStorage.getItem(TOKEN_KEY) ?? "";
      if (!token) {
        localStorage.removeItem(TOKEN_KEY);
        if (!cancelled) router.replace("/admin/login");
        return;
      }

      try {
        const ok = await verifyToken(token);
        if (!ok) {
          localStorage.removeItem(TOKEN_KEY);
          if (!cancelled) router.replace("/admin/login");
          return;
        }
        if (cancelled) return;
        setAuthed(true);
      } catch {
        localStorage.removeItem(TOKEN_KEY);
        if (!cancelled) router.replace("/admin/login");
      }
    }

    void guard();
    return () => {
      cancelled = true;
    };
  }, [router]);

  useEffect(() => {
    if (!authed) return;
    const pvRef = ref(getClientDb(), "pageviews");

    const unsubAdd = onChildAdded(pvRef, (snap) => {
      const v = snap.val();
      if (!v?.ts || !v?.uid) return;
      const row: Pageview = {
        ts: v.ts,
        uid: v.uid,
        page: v.page ?? "/",
      };
      setPageviews((prev) => [row, ...prev].sort((a, b) => b.ts - a.ts));
    });

    const unsubRemove = onChildRemoved(pvRef, (snap) => {
      const v = snap.val();
      if (!v?.ts || !v?.uid) return;
      setPageviews((prev) =>
        prev.filter((p) => !(p.ts === v.ts && p.uid === v.uid)),
      );
    });

    return () => {
      unsubAdd();
      unsubRemove();
    };
  }, [authed]);

  if (!authed) return null;

  // uid → name マッピング（辞書順ソート = 初回訪問時刻の昇順）
  const sortedUids = [
    ...new Set(pageviews.map((pv) => pv.uid)),
  ].sort();
  const uidToName: Record<string, string> = {};
  sortedUids.forEach((uid, i) => {
    uidToName[uid] = indexToName(i);
  });

  // 集計
  const visitorMap = new Map<string, VisitorStat>();
  for (const pv of pageviews) {
    const name = uidToName[pv.uid] ?? pv.uid;
    const s = visitorMap.get(pv.uid) ?? {
      name,
      uid: pv.uid,
      count: 0,
      pages: new Set(),
      first: pv.ts,
      last: pv.ts,
    };
    s.count++;
    s.pages.add(pv.page);
    s.first = Math.min(s.first, pv.ts);
    s.last = Math.max(s.last, pv.ts);
    visitorMap.set(pv.uid, s);
  }
  const visitors = [...visitorMap.values()].sort((a, b) => b.count - a.count);

  const fmt = (ts: number) =>
    new Date(ts).toLocaleString("ja-JP", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

  const fmtFull = (ts: number) =>
    new Date(ts).toLocaleString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

  function logout() {
    localStorage.removeItem(TOKEN_KEY);
    router.replace("/admin/login");
  }

  return (
    <>
      <PageTracker page="/admin" />
      <Nav />
      <main className="mt-[4.5rem] h-[calc(100svh-4.5rem)] overflow-y-auto bg-stone-50 px-8 pb-12">
        <div className="mb-10 flex justify-end pt-8">
          <button
            onClick={logout}
            className="text-xs tracking-widest text-stone-400 uppercase transition-colors hover:text-stone-600"
          >
            logout
          </button>
        </div>

        {/* Summary */}
        <div className="mb-10 flex items-end gap-12">
          <div>
            <p className="text-4xl font-semibold text-zinc-900">
              {pageviews.length.toLocaleString("ja-JP")}
            </p>
            <p className="mt-1 text-xs tracking-[0.2em] text-stone-500 uppercase">
              Total Visits
            </p>
          </div>
          <div>
            <p className="text-4xl font-semibold text-zinc-900">
              {visitors.length.toLocaleString("ja-JP")}
            </p>
            <p className="mt-1 text-xs tracking-[0.2em] text-stone-500 uppercase">
              Visitors
            </p>
          </div>
          <div className="ml-auto flex items-center gap-2 pb-1">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-medium tracking-[0.3em] text-zinc-400 uppercase">
              Live
            </span>
          </div>
        </div>

        {/* Visitors table */}
        <section className="mb-12">
          <p className="mb-4 text-xs font-medium tracking-[0.3em] text-stone-500 uppercase">
            Visitors
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300 text-left text-xs tracking-widest text-stone-500 uppercase">
                  <th className="pr-8 pb-3 font-medium">#</th>
                  <th className="pr-8 pb-3 font-medium">Name</th>
                  <th className="pr-8 pb-3 font-medium">Visits</th>
                  <th className="hidden pr-8 pb-3 font-medium md:table-cell">
                    Pages
                  </th>
                  <th className="hidden pr-8 pb-3 font-medium md:table-cell">
                    First
                  </th>
                  <th className="pr-8 pb-3 font-medium">Last</th>
                  <th className="pb-3 font-medium" />
                </tr>
              </thead>
              <tbody>
                {visitors.map((v, i) => (
                  <tr key={v.uid} className="border-b border-stone-200">
                    <td className="py-3 pr-8 font-mono text-xs text-stone-400">
                      {i + 1}
                    </td>
                    <td className="py-3 pr-8 font-medium text-zinc-700">
                      {v.name}
                    </td>
                    <td className="py-3 pr-8 text-zinc-700 tabular-nums">
                      {v.count}
                    </td>
                    <td className="hidden py-3 pr-8 md:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {[...v.pages].map((page) => (
                          <span
                            key={page}
                            className="rounded bg-stone-200 px-2 py-0.5 font-mono text-xs text-stone-600"
                          >
                            {page}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="hidden py-3 pr-8 font-mono text-xs text-stone-500 md:table-cell">
                      {fmt(v.first)}
                    </td>
                    <td className="py-3 pr-8 font-mono text-xs text-stone-500">
                      {fmt(v.last)}
                    </td>
                    <td className="py-3">
                      <button
                        onClick={() => setModal(v)}
                        className="flex items-center justify-center rounded bg-stone-200 p-1.5 text-stone-600 transition-colors hover:bg-stone-300 hover:text-zinc-700"
                      >
                        <MoreHorizontal size={14} />
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
          <p className="mb-4 text-xs font-medium tracking-[0.3em] text-stone-500 uppercase">
            Recent Activity
          </p>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-300 text-left text-xs tracking-widest text-stone-500 uppercase">
                <th className="pr-6 pb-2 font-medium">Name</th>
                <th className="pr-6 pb-2 font-medium">Page</th>
                <th className="pb-2 font-medium">Time</th>
              </tr>
            </thead>
            <tbody>
              {pageviews.slice(0, logLimit).map((pv, i) => (
                <tr key={i} className="border-b border-stone-200">
                  <td className="py-2.5 pr-6 font-medium text-zinc-700">
                    {uidToName[pv.uid] ?? pv.uid}
                  </td>
                  <td className="py-2.5 pr-6">
                    <span className="rounded bg-stone-200 px-2 py-0.5 font-mono text-xs text-stone-600">
                      {pv.page}
                    </span>
                  </td>
                  <td className="py-2.5 font-mono text-xs text-stone-400">
                    {fmtFull(pv.ts)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {pageviews.length > logLimit && (
            <button
              onClick={() => setLogLimit((n) => n + 50)}
              className="mt-4 text-xs tracking-widest text-stone-400 uppercase transition-colors hover:text-stone-600"
            >
              +50 more ({pageviews.length - logLimit} remaining)
            </button>
          )}
        </section>

        {/* Modal */}
        {modal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
            onClick={() => setModal(null)}
          >
            <div
              className="w-full max-w-lg rounded-lg bg-white p-10 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-8 flex items-start justify-between">
                <p className="text-xl font-semibold text-zinc-800">
                  {modal.name}
                </p>
                <button
                  onClick={() => setModal(null)}
                  className="flex h-9 w-9 items-center justify-center rounded bg-stone-200 text-stone-500 transition-colors hover:bg-stone-300 hover:text-zinc-700"
                >
                  <X size={16} />
                </button>
              </div>
              <dl className="flex flex-col gap-5 text-base">
                <div className="flex justify-between">
                  <dt className="text-stone-500">Visits</dt>
                  <dd className="font-medium text-zinc-700">{modal.count}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-stone-500">First</dt>
                  <dd className="font-mono text-sm text-zinc-700">
                    {fmt(modal.first)}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-stone-500">Last</dt>
                  <dd className="font-mono text-sm text-zinc-700">
                    {fmt(modal.last)}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="shrink-0 text-stone-500">Pages</dt>
                  <dd className="overflow-x-auto">
                    <div className="flex gap-1.5">
                      {[...modal.pages].map((page) => (
                        <span
                          key={page}
                          className="shrink-0 rounded bg-stone-200 px-2.5 py-1 font-mono text-sm text-stone-600"
                        >
                          {page}
                        </span>
                      ))}
                    </div>
                  </dd>
                </div>
              </dl>

              <div className="mt-10 border-t border-stone-200 pt-6">
                <button
                  onClick={async () => {
                    if (!confirm(`${modal.name} のログを全て削除しますか？`))
                      return;
                    await eraseVisitorLog(modal.uid);
                    setModal(null);
                  }}
                  className="w-full rounded-lg border border-red-100 bg-red-50 py-3 text-sm font-medium text-red-400 transition-colors hover:bg-red-100 hover:text-red-600"
                >
                  Erase log about this user
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
