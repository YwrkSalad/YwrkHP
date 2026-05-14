"use client";

import { useMemo, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Pageview = { ts: number; uid: string; page: string };

type Period = "1h" | "24h" | "7d" | "30d";

const PERIODS: { label: string; value: Period }[] = [
  { label: "1H", value: "1h" },
  { label: "24H", value: "24h" },
  { label: "7D", value: "7d" },
  { label: "30D", value: "30d" },
];

function getBuckets(period: Period): { ms: number; fmt: (d: Date) => string } {
  switch (period) {
    case "1h":
      return { ms: 5 * 60 * 1000, fmt: (d) => `${d.getHours()}:${String(d.getMinutes()).padStart(2, "0")}` };
    case "24h":
      return { ms: 60 * 60 * 1000, fmt: (d) => `${d.getHours()}:00` };
    case "7d":
      return {
        ms: 6 * 60 * 60 * 1000,
        fmt: (d) =>
          `${d.getMonth() + 1}/${d.getDate()} ${d.getHours()}:00`,
      };
    case "30d":
      return {
        ms: 24 * 60 * 60 * 1000,
        fmt: (d) => `${d.getMonth() + 1}/${d.getDate()}`,
      };
  }
}

function getPeriodMs(period: Period): number {
  switch (period) {
    case "1h": return 60 * 60 * 1000;
    case "24h": return 24 * 60 * 60 * 1000;
    case "7d": return 7 * 24 * 60 * 60 * 1000;
    case "30d": return 30 * 24 * 60 * 60 * 1000;
  }
}

interface Props {
  pageviews: Pageview[];
}

export default function AccessChart({ pageviews }: Props) {
  const [period, setPeriod] = useState<Period>("24h");

  const data = useMemo(() => {
    const now = Date.now();
    const periodMs = getPeriodMs(period);
    const { ms: bucketMs, fmt } = getBuckets(period);
    const start = now - periodMs;

    const filtered = pageviews.filter((pv) => pv.ts >= start);

    const bucketCount = Math.ceil(periodMs / bucketMs);
    const buckets: Record<number, number> = {};
    for (let i = 0; i < bucketCount; i++) {
      const t = start + i * bucketMs;
      buckets[Math.floor(t / bucketMs)] = 0;
    }
    for (const pv of filtered) {
      const key = Math.floor(pv.ts / bucketMs);
      if (key in buckets) buckets[key] = (buckets[key] ?? 0) + 1;
    }

    return Object.entries(buckets)
      .sort(([a], [b]) => Number(a) - Number(b))
      .map(([key, count]) => ({
        label: fmt(new Date(Number(key) * bucketMs)),
        count,
      }));
  }, [pageviews, period]);

  const max = Math.max(...data.map((d) => d.count), 1);
  const total = data.reduce((s, d) => s + d.count, 0);

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-medium tracking-[0.25em] text-stone-400 uppercase">
            Page Views
          </p>
          <p className="mt-0.5 text-2xl font-semibold text-zinc-800">
            {total.toLocaleString("ja-JP")}
            <span className="ml-2 text-sm font-normal text-stone-400">
              in period
            </span>
          </p>
        </div>
        <div className="flex gap-1 rounded-lg bg-stone-100 p-1">
          {PERIODS.map((p) => (
            <button
              key={p.value}
              onClick={() => setPeriod(p.value)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium tracking-widest transition-all ${
                period === p.value
                  ? "bg-white text-zinc-800 shadow-sm"
                  : "text-stone-500 hover:text-zinc-700"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="accessGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" vertical={false} />
          <XAxis
            dataKey="label"
            tick={{ fontSize: 10, fill: "#a8a29e" }}
            tickLine={false}
            axisLine={false}
            interval="preserveStartEnd"
          />
          <YAxis
            tick={{ fontSize: 10, fill: "#a8a29e" }}
            tickLine={false}
            axisLine={false}
            allowDecimals={false}
            domain={[0, max + 1]}
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
            itemStyle={{ color: "#a5b4fc" }}
            cursor={{ stroke: "#6366f1", strokeWidth: 1, strokeDasharray: "4 4" }}
            formatter={(v) => [v as number, "Views"]}
          />
          <Area
            type="monotone"
            dataKey="count"
            stroke="#6366f1"
            strokeWidth={2}
            fill="url(#accessGrad)"
            dot={false}
            activeDot={{ r: 4, fill: "#6366f1", strokeWidth: 0 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
