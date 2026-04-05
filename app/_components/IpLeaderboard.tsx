"use client";

import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { getClientDb } from "@/lib/firebase-client";
import { ipToName } from "@/lib/ipname";

const TOP_N = 5;

type Props = {
  initialCounts: Record<string, number>;
  myName: string;
};

function Row({
  rank,
  name,
  count,
  isYou,
}: {
  rank: number;
  name: string;
  count: number;
  isYou: boolean;
}) {
  return (
    <div
      className={[
        "flex items-center justify-between rounded-lg px-4 py-2.5 text-sm transition-colors",
        isYou
          ? "bg-zinc-900 text-white ring-1 ring-zinc-700"
          : "bg-stone-50 text-stone-500",
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        <span
          className={[
            "w-5 text-right font-mono text-xs",
            isYou ? "text-zinc-400" : "text-stone-300",
          ].join(" ")}
        >
          {rank}
        </span>
        <span
          className={[
            "font-medium",
            isYou ? "text-white" : "text-stone-600",
          ].join(" ")}
        >
          {name}
        </span>
        {isYou && (
          <span className="rounded-full bg-zinc-700 px-2 py-0.5 text-xs font-medium tracking-wide text-zinc-300">
            you
          </span>
        )}
      </div>
      <span
        className={[
          "font-mono text-xs tabular-nums",
          isYou ? "text-zinc-300" : "text-stone-400",
        ].join(" ")}
      >
        {count.toLocaleString("ja-JP")}
      </span>
    </div>
  );
}

export default function IpLeaderboard({ initialCounts, myName }: Props) {
  const [counts, setCounts] = useState(initialCounts);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const unsubscribe = onValue(
      ref(getClientDb(), "pageviews"),
      (snapshot) => {
        const tally: Record<string, number> = {};
        snapshot.forEach((child) => {
          const ip: string = child.val()?.ip;
          if (!ip) return;
          const name = ipToName(ip);
          tally[name] = (tally[name] ?? 0) + 1;
        });
        setCounts(tally);
      },
    );
    return unsubscribe;
  }, []);

  const sorted = Object.entries(counts).sort(([, a], [, b]) => b - a);
  if (sorted.length === 0) return null;

  const top = sorted.slice(0, TOP_N);
  const rest = sorted.slice(TOP_N);
  const myRank = sorted.findIndex(([name]) => name === myName);
  const myInTop = myRank < TOP_N;
  const hasMore = rest.length > 0;

  return (
    <div className="flex w-full max-w-sm flex-col gap-1">
      {/* Top 5 */}
      {top.map(([name, count], i) => (
        <Row
          key={name}
          rank={i + 1}
          name={name}
          count={count}
          isYou={name === myName}
        />
      ))}

      {/* 自分が top5 外で、まだ展開していない場合のみ自分の行を表示 */}
      {!myInTop && !expanded && myRank !== -1 && (
        <>
          <div className="flex items-center gap-2 px-1 py-0.5">
            <div className="h-px flex-1 bg-stone-200" />
            <span className="text-xs text-stone-300">···</span>
            <div className="h-px flex-1 bg-stone-200" />
          </div>
          <Row
            rank={myRank + 1}
            name={myName}
            count={counts[myName] ?? 0}
            isYou
          />
        </>
      )}

      {/* 展開時：残り全員 */}
      {expanded &&
        rest.map(([name, count], i) => (
          <Row
            key={name}
            rank={TOP_N + i + 1}
            name={name}
            count={count}
            isYou={name === myName}
          />
        ))}

      {/* more / less ボタン */}
      {hasMore && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-1 self-center text-xs font-medium tracking-widest text-stone-400 uppercase transition-colors hover:text-stone-600"
        >
          {expanded ? "less" : `more  +${rest.length}`}
        </button>
      )}
    </div>
  );
}
