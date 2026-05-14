"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { onChildAdded, onChildRemoved, ref } from "firebase/database";
import { getClientDb } from "@/lib/firebase-client";
import { indexToName } from "@/lib/visitorname";
import Nav from "@/app/_components/Nav";
import PageTracker from "@/app/_components/PageTracker";
import { MoreHorizontal, X, LogOut, Activity, Users, Eye, TrendingUp } from "lucide-react";
import { verifyToken, eraseVisitorLog } from "./actions";
import AccessChart, { type Period, getPeriodMs } from "./_components/AccessChart";
import PageBreakdownChart from "./_components/PageBreakdownChart";

const TOKEN_KEY = "ywrk-admin-token";
const VISITOR_KEY = "ywrk-visitor-id";

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

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  accent,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  sub?: string;
  accent?: string;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium tracking-[0.2em] text-stone-400 uppercase">
          {label}
        </p>
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-lg ${accent ?? "bg-indigo-50 text-indigo-500"}`}
        >
          <Icon size={15} />
        </span>
      </div>
      <p className="text-3xl font-semibold text-zinc-800">
        {typeof value === "number" ? value.toLocaleString("ja-JP") : value}
      </p>
      {sub && <p className="text-xs text-stone-400">{sub}</p>}
    </div>
  );
}

export default function AdminPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [pageviews, setPageviews] = useState<Pageview[]>([]);
  const [modal, setModal] = useState<VisitorStat | null>(null);
  const [visitorLimit, setVisitorLimit] = useState(10);
  const [logLimit, setLogLimit] = useState(10);
  const [myUid, setMyUid] = useState<string | null>(null);
  const [period, setPeriod] = useState<Period>("1D");
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
        setMyUid(localStorage.getItem(VISITOR_KEY));
        setAuthed(true);
      } catch {
        localStorage.removeItem(TOKEN_KEY);
        if (!cancelled) router.replace("/admin/login");
      }
    }
    void guard();
    return () => { cancelled = true; };
  }, [router]);

  useEffect(() => {
    if (!authed) return;
    const pvRef = ref(getClientDb(), "pageviews");
    const unsubAdd = onChildAdded(pvRef, (snap) => {
      const v = snap.val();
      if (!v?.ts || !v?.uid) return;
      setPageviews((prev) =>
        [{ ts: v.ts, uid: v.uid, page: v.page ?? "/" }, ...prev].sort(
          (a, b) => b.ts - a.ts,
        ),
      );
    });
    const unsubRemove = onChildRemoved(pvRef, (snap) => {
      const v = snap.val();
      if (!v?.ts || !v?.uid) return;
      setPageviews((prev) =>
        prev.filter((p) => !(p.ts === v.ts && p.uid === v.uid)),
      );
    });
    return () => { unsubAdd(); unsubRemove(); };
  }, [authed]);

  if (!authed) return null;

  const sortedUids = [...new Set(pageviews.map((pv) => pv.uid))].sort();
  const uidToName: Record<string, string> = {};
  sortedUids.forEach((uid, i) => { uidToName[uid] = indexToName(i); });

  const displayName = (uid: string) =>
    uid === myUid ? `${uidToName[uid] ?? uid} (me)` : (uidToName[uid] ?? uid);

  const visitorMap = new Map<string, VisitorStat>();
  for (const pv of pageviews) {
    const name = uidToName[pv.uid] ?? pv.uid;
    const s = visitorMap.get(pv.uid) ?? {
      name,
      uid: pv.uid,
      count: 0,
      pages: new Set<string>(),
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

  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  const todayCount = pageviews.filter((pv) => pv.ts >= todayStart.getTime()).length;

  const trendingPage = (() => {
    const since = Date.now() - 3 * 24 * 60 * 60 * 1000;
    const counts: Record<string, number> = {};
    for (const pv of pageviews.filter((p) => p.ts >= since))
      counts[pv.page] = (counts[pv.page] ?? 0) + 1;
    return Object.entries(counts).sort(([, a], [, b]) => b - a)[0]?.[0] ?? "—";
  })();

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
      <main className="mt-[4.5rem] min-h-[calc(100svh-4.5rem)] bg-stone-50 px-6 pb-16 md:px-10">
        {/* Header */}
        <div className="flex items-center justify-between py-8">
          <div>
            <h1 className="text-xl font-semibold text-zinc-800">Dashboard</h1>
            <p className="mt-0.5 text-xs text-stone-400">
              {new Date().toLocaleDateString("ja-JP", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium tracking-[0.25em] text-zinc-400 uppercase">
                Live
              </span>
            </div>
            <button
              onClick={logout}
              className="flex items-center gap-1.5 rounded-lg border border-stone-200 bg-white px-3 py-2 text-xs text-stone-500 shadow-sm transition-colors hover:border-stone-300 hover:text-zinc-700"
            >
              <LogOut size={12} />
              Logout
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard
            icon={Eye}
            label="Total Views"
            value={pageviews.length}
            sub="All time"
            accent="bg-indigo-50 text-indigo-500"
          />
          <StatCard
            icon={Users}
            label="Visitors"
            value={visitors.length}
            sub="Unique users"
            accent="bg-violet-50 text-violet-500"
          />
          <StatCard
            icon={Activity}
            label="Today"
            value={todayCount}
            sub="Views today"
            accent="bg-emerald-50 text-emerald-500"
          />
          <StatCard
            icon={TrendingUp}
            label="Trending"
            value={trendingPage}
            sub="Past 3 days"
            accent="bg-amber-50 text-amber-500"
          />
        </div>

        {/* Charts row 1 */}
        <div className="mb-6">
          <AccessChart pageviews={pageviews} period={period} onPeriodChange={setPeriod} />
        </div>

        {/* Charts row 2 */}
        <div className="mb-10">
          <PageBreakdownChart
            pageviews={pageviews.filter((pv) => pv.ts >= Date.now() - getPeriodMs(period))}
          />
        </div>

        {/* Visitors table */}
        <section className="mb-10">
          <p className="mb-4 text-xs font-medium tracking-[0.3em] text-stone-500 uppercase">
            Visitors
          </p>
          <div className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-stone-100 bg-stone-50 text-left text-xs tracking-widest text-stone-400 uppercase">
                    <th className="px-5 py-3 font-medium">#</th>
                    <th className="px-5 py-3 font-medium">Name</th>
                    <th className="px-5 py-3 font-medium">Visits</th>
                    <th className="hidden px-5 py-3 font-medium md:table-cell">Pages</th>
                    <th className="hidden px-5 py-3 font-medium md:table-cell">First</th>
                    <th className="px-5 py-3 font-medium">Last</th>
                    <th className="px-5 py-3 font-medium" />
                  </tr>
                </thead>
                <tbody>
                  {visitors.slice(0, visitorLimit).map((v, i) => (
                    <tr
                      key={v.uid}
                      className="border-b border-stone-100 transition-colors last:border-0 hover:bg-stone-50"
                    >
                      <td className="px-5 py-3.5 font-mono text-xs text-stone-400">
                        {i + 1}
                      </td>
                      <td className="px-5 py-3.5 font-medium text-zinc-700">
                        {displayName(v.uid)}
                      </td>
                      <td className="px-5 py-3.5 tabular-nums text-zinc-700">
                        {v.count}
                      </td>
                      <td className="hidden px-5 py-3.5 md:table-cell">
                        <div className="flex flex-wrap gap-1">
                          {[...v.pages].slice(0, 5).map((page) => (
                            <span
                              key={page}
                              className="rounded-md bg-stone-100 px-2 py-0.5 font-mono text-xs text-stone-600"
                            >
                              {page}
                            </span>
                          ))}
                          {v.pages.size > 5 && (
                            <span className="font-mono text-xs text-stone-400">. . .</span>
                          )}
                        </div>
                      </td>
                      <td className="hidden px-5 py-3.5 font-mono text-xs text-stone-400 md:table-cell">
                        {fmt(v.first)}
                      </td>
                      <td className="px-5 py-3.5 font-mono text-xs text-stone-400">
                        {fmt(v.last)}
                      </td>
                      <td className="px-5 py-3.5">
                        <button
                          onClick={() => setModal(v)}
                          className="flex items-center justify-center rounded-lg bg-stone-100 p-1.5 text-stone-500 transition-colors hover:bg-stone-200 hover:text-zinc-700"
                        >
                          <MoreHorizontal size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {visitors.length > visitorLimit && (
              <div className="border-t border-stone-100 px-5 py-3">
                <button
                  onClick={() => setVisitorLimit((n) => n + 50)}
                  className="text-xs tracking-widest text-stone-400 uppercase transition-colors hover:text-stone-600"
                >
                  +50 more ({visitors.length - visitorLimit} remaining)
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Recent activity */}
        <section>
          <p className="mb-4 text-xs font-medium tracking-[0.3em] text-stone-500 uppercase">
            Recent Activity
          </p>
          <div className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-100 bg-stone-50 text-left text-xs tracking-widest text-stone-400 uppercase">
                  <th className="px-5 py-3 font-medium">Name</th>
                  <th className="px-5 py-3 font-medium">Page</th>
                  <th className="px-5 py-3 font-medium">Time</th>
                </tr>
              </thead>
              <tbody>
                {pageviews.slice(0, logLimit).map((pv, i) => (
                  <tr
                    key={i}
                    className="border-b border-stone-100 transition-colors last:border-0 hover:bg-stone-50"
                  >
                    <td className="px-5 py-3 font-medium text-zinc-700">
                      {displayName(pv.uid)}
                    </td>
                    <td className="px-5 py-3">
                      <span className="rounded-md bg-stone-100 px-2 py-0.5 font-mono text-xs text-stone-600">
                        {pv.page}
                      </span>
                    </td>
                    <td className="px-5 py-3 font-mono text-xs text-stone-400">
                      {fmtFull(pv.ts)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {pageviews.length > logLimit && (
              <div className="border-t border-stone-100 px-5 py-3">
                <button
                  onClick={() => setLogLimit((n) => n + 50)}
                  className="text-xs tracking-widest text-stone-400 uppercase transition-colors hover:text-stone-600"
                >
                  +50 more ({pageviews.length - logLimit} remaining)
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Modal */}
        {modal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
            onClick={() => setModal(null)}
          >
            <div
              className="w-full max-w-lg rounded-2xl bg-white p-10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-8 flex items-start justify-between">
                <p className="text-xl font-semibold text-zinc-800">
                  {displayName(modal.uid)}
                </p>
                <button
                  onClick={() => setModal(null)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-stone-100 text-stone-500 transition-colors hover:bg-stone-200 hover:text-zinc-700"
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
                  <dd className="font-mono text-sm text-zinc-700">{fmt(modal.first)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-stone-500">Last</dt>
                  <dd className="font-mono text-sm text-zinc-700">{fmt(modal.last)}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="shrink-0 text-stone-500">Pages</dt>
                  <dd className="overflow-x-auto">
                    <div className="flex gap-1.5">
                      {[...modal.pages].map((page) => (
                        <span
                          key={page}
                          className="shrink-0 rounded-md bg-stone-100 px-2.5 py-1 font-mono text-sm text-stone-600"
                        >
                          {page}
                        </span>
                      ))}
                    </div>
                  </dd>
                </div>
              </dl>
              <div className="mt-10 border-t border-stone-100 pt-6">
                <button
                  onClick={async () => {
                    if (!confirm(`${modal.name} のログを全て削除しますか？`)) return;
                    await eraseVisitorLog(modal.uid);
                    setModal(null);
                  }}
                  className="w-full rounded-xl border border-red-100 bg-red-50 py-3 text-sm font-medium text-red-400 transition-colors hover:bg-red-100 hover:text-red-600"
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
