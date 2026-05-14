"use client";

import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

type Pageview = { ts: number; uid: string; page: string };

const COLORS = [
  "#6366f1",
  "#8b5cf6",
  "#a78bfa",
  "#c4b5fd",
  "#ddd6fe",
];

interface Props {
  pageviews: Pageview[];
}

export default function PageBreakdownChart({ pageviews }: Props) {
  const data = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const pv of pageviews) {
      counts[pv.page] = (counts[pv.page] ?? 0) + 1;
    }
    return Object.entries(counts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 8)
      .map(([page, count]) => ({ page, count }));
  }, [pageviews]);

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
      <p className="mb-1 text-xs font-medium tracking-[0.25em] text-stone-400 uppercase">
        Page Breakdown
      </p>
      <p className="mb-5 text-2xl font-semibold text-zinc-800">
        {data.length}
        <span className="ml-2 text-sm font-normal text-stone-400">pages</span>
      </p>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 0, right: 16, left: 0, bottom: 0 }}
        >
          <XAxis
            type="number"
            tick={{ fontSize: 10, fill: "#a8a29e" }}
            tickLine={false}
            axisLine={false}
            allowDecimals={false}
          />
          <YAxis
            type="category"
            dataKey="page"
            tick={{ fontSize: 11, fill: "#78716c" }}
            tickLine={false}
            axisLine={false}
            width={80}
          />
          <Tooltip
            contentStyle={{
              background: "#1c1917",
              border: "none",
              borderRadius: "8px",
              color: "#fafaf9",
              fontSize: "12px",
              padding: "8px 12px",
            }}
            cursor={{ fill: "#f5f5f4" }}
            formatter={(v) => [v as number, "Views"]}
          />
          <Bar dataKey="count" radius={[0, 4, 4, 0]}>
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
