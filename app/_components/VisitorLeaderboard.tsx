"use client";

import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { getClientDb } from "@/lib/firebase-client";
import { indexToName } from "@/lib/visitorname";

const TOP_N = 5;

type Props = {
  initialCounts: Record<string, number>;
  myName?: string;
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
        "flex items-center justify-between rounded-xl px-4 py-2.5 text-sm backdrop-blur-sm transition-colors duration-1500",
        isYou
          ? "border border-zinc-700/60 bg-zinc-900/80 text-white"
          : "border border-white/50 bg-white/25 text-zinc-600",
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        <span
          className={[
            "w-5 text-right font-mono text-xs",
            isYou ? "text-zinc-500" : "text-zinc-300",
          ].join(" ")}
        >
          {rank}
        </span>
        <span
          className={[
            "font-medium",
            isYou ? "text-white" : "text-zinc-700",
          ].join(" ")}
        >
          {name}
        </span>
        {isYou && (
          <span className="rounded-full bg-white/15 px-2 py-0.5 text-xs font-medium tracking-wide text-zinc-300">
            you
          </span>
        )}
      </div>
      <span className="font-mono text-xs text-zinc-400 tabular-nums">
        {count.toLocaleString("ja-JP")}
      </span>
    </div>
  );
}

export default function VisitorLeaderboard({ initialCounts, myName: myNameProp }: Props) {
  const [counts, setCounts] = useState(initialCounts);
  const [expanded, setExpanded] = useState(false);
  const [myName, setMyName] = useState(myNameProp ?? null);

  useEffect(() => {
    const myUid = localStorage.getItem("ywrk-visitor-id");
    const pvRef = ref(getClientDb(), "pageviews");
    const unsub = onValue(pvRef, (snap) => {
      // uid ごとのページビュー数を集計
      const uidCounts: Record<string, number> = {};
      snap.forEach((child) => {
        const uid: string = child.val()?.uid;
        if (!uid) return;
        uidCounts[uid] = (uidCounts[uid] ?? 0) + 1;
      });

      // uid を辞書順ソートして indexToName でインデックス決定
      const sortedUids = Object.keys(uidCounts).sort();
      const next: Record<string, number> = {};
      sortedUids.forEach((uid, i) => {
        const name = indexToName(i);
        next[name] = uidCounts[uid];
        if (uid === myUid) setMyName(name);
      });
      setCounts(next);
    });

    return () => {
      unsub();
    };
  }, []);

  const sorted = Object.entries(counts).sort(([, a], [, b]) => b - a);
  if (sorted.length === 0) return null;

  const top = sorted.slice(0, TOP_N);
  const rest = sorted.slice(TOP_N);
  const myRank = myName ? sorted.findIndex(([name]) => name === myName) : -1;
  const myInTop = myRank >= 0 && myRank < TOP_N;
  const hasMore = rest.length > 0;

  return (
    <div className="flex w-full flex-col gap-1.5">
      {top.map(([name, count], i) => (
        <Row
          key={name}
          rank={i + 1}
          name={name}
          count={count}
          isYou={name === myName}
        />
      ))}

      {!myInTop && !expanded && myRank !== -1 && myName && (
        <>
          <div className="flex items-center gap-2 px-1 py-0.5">
            <div className="h-px flex-1 bg-zinc-300/30" />
            <span className="text-xs text-zinc-300/60">···</span>
            <div className="h-px flex-1 bg-zinc-300/30" />
          </div>
          <Row
            rank={myRank + 1}
            name={myName}
            count={counts[myName] ?? 0}
            isYou
          />
        </>
      )}

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

      {hasMore && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-1 self-center text-xs font-medium tracking-widest text-zinc-400 uppercase transition-colors hover:text-zinc-700"
        >
          {expanded ? "less" : `more  +${rest.length}`}
        </button>
      )}
    </div>
  );
}
