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

interface Props {
  pageviews: Pageview[];
}

export default function HourlyChart({ pageviews }: Props) {
  const data = useMemo(() => {
    const counts = Array.from({ length: 24 }, (_, h) => ({ hour: h, count: 0 }));
    for (const pv of pageviews) {
      const h = new Date(pv.ts).getHours();
      counts[h].count++;
    }
    return counts;
  }, [pageviews]);

  const max = Math.max(...data.map((d) => d.count), 1);

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
      <p className="mb-1 text-xs font-medium tracking-[0.25em] text-stone-400 uppercase">
        Hourly Distribution
      </p>
      <p className="mb-5 text-sm text-stone-500">
        All-time access by hour of day
      </p>

      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={data} margin={{ top: 0, right: 0, left: -30, bottom: 0 }}>
          <XAxis
            dataKey="hour"
            tick={{ fontSize: 9, fill: "#a8a29e" }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(h: number) =>
              h % 6 === 0 ? `${String(h).padStart(2, "0")}` : ""
            }
          />
          <YAxis
            tick={{ fontSize: 9, fill: "#a8a29e" }}
            tickLine={false}
            axisLine={false}
            allowDecimals={false}
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
            labelFormatter={(h) => `${String(h as number).padStart(2, "0")}:00`}
          />
          <Bar dataKey="count" radius={[3, 3, 0, 0]}>
            {data.map((d, i) => (
              <Cell
                key={i}
                fill={`rgba(99,102,241,${0.15 + 0.85 * (d.count / max)})`}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
