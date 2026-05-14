"use client";

import { useMemo, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList,
} from "recharts";

type Pageview = { ts: number; uid: string; page: string };

const COLORS = ["#6366f1", "#8b5cf6", "#a78bfa", "#c4b5fd", "#ddd6fe"];

type Mode = "total" | "unique";

interface Props {
  pageviews: Pageview[];
}

export default function PageBreakdownChart({ pageviews }: Props) {
  const [hover, setHover] = useState<{ page: string; count: number } | null>(null);
  const [mode, setMode] = useState<Mode>("total");

  const { data, yAxisWidth } = useMemo(() => {
    const counts: Record<string, number> = {};
    if (mode === "total") {
      for (const pv of pageviews) {
        counts[pv.page] = (counts[pv.page] ?? 0) + 1;
      }
    } else {
      const seen: Record<string, Set<string>> = {};
      for (const pv of pageviews) {
        (seen[pv.page] ??= new Set()).add(pv.uid);
      }
      for (const [page, uids] of Object.entries(seen)) {
        counts[page] = uids.size;
      }
    }
    const entries = Object.entries(counts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 8)
      .map(([page, count]) => ({ page, count }));
    const maxLen = Math.max(...entries.map((d) => d.page.length), 1);
    return { data: entries, yAxisWidth: Math.min(maxLen * 6.5 + 8, 240) };
  }, [pageviews, mode]);

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-start justify-between">
        <div>
          <p className="mb-1 text-xs font-medium tracking-[0.25em] text-stone-400 uppercase">Page Breakdown</p>
          <p className="text-2xl font-semibold text-zinc-800">
            {data.length}
            <span className="ml-2 text-sm font-normal text-stone-400">pages</span>
          </p>
        </div>
        <div className="flex gap-1 rounded-lg bg-stone-100 p-1">
          {(["総数", "ユニーク"] as const).map((label) => {
            const active = label === "ユニーク" ? mode === "unique" : mode === "total";
            return (
              <button
                key={label}
                onClick={() => setMode(label === "ユニーク" ? "unique" : "total")}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                  active ? "bg-white text-zinc-800 shadow-sm" : "text-stone-500 hover:text-zinc-700"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative">
        <ResponsiveContainer width="100%" height={220}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 0, right: 32, left: 0, bottom: 0 }}
            onMouseMove={(state: any) => {
              if (state.isTooltipActive && state.activePayload?.length) {
                setHover({ page: state.activeLabel, count: state.activePayload[0].value });
              } else {
                setHover(null);
              }
            }}
            onMouseLeave={() => setHover(null)}
          >
            <XAxis type="number" tick={{ fontSize: 10, fill: "#a8a29e" }} tickLine={false} axisLine={false} allowDecimals={false} />
            <YAxis type="category" dataKey="page" tick={{ fontSize: 11, fill: "#78716c" }} tickLine={false} axisLine={false} width={yAxisWidth} />
            <Bar dataKey="count" radius={[0, 4, 4, 0]}>
              {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              <LabelList dataKey="count" position="right" style={{ fontSize: 11, fill: "#78716c" }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        {hover && (
          <div className="pointer-events-none absolute right-2 top-2 rounded-lg bg-stone-900 px-3 py-2 text-xs text-stone-50 shadow-lg">
            <p className="text-stone-400">{hover.page}</p>
            <p className="text-indigo-300 font-medium">{hover.count} {mode === "unique" ? "Visitors" : "Views"}</p>
          </div>
        )}
      </div>
    </div>
  );
}
