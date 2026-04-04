"use client";

import { onValue, ref } from "firebase/database";
import { useEffect, useRef, useState } from "react";
import { getClientDb } from "@/lib/firebase-client";

function pad(arr: string[], len: number): string[] {
  return [...Array(Math.max(0, len - arr.length)).fill(""), ...arr];
}

function changedIndices(prev: string[], curr: string[]): Set<number> {
  const maxLen = Math.max(prev.length, curr.length);
  const p = pad(prev, maxLen);
  const c = pad(curr, maxLen);
  return new Set(c.map((ch, i) => (ch !== p[i] ? i : -1)).filter((i) => i !== -1));
}

export default function PageViewCounter({ initial }: { initial: number }) {
  const [count, setCount] = useState(initial);
  // prevDisplayRef holds the formatted string from the previous render
  const prevDisplayRef = useRef(initial.toLocaleString("ja-JP"));

  const formatted = count.toLocaleString("ja-JP");
  const changed = changedIndices(
    prevDisplayRef.current.split(""),
    formatted.split(""),
  );

  // Update prevDisplay after render
  useEffect(() => {
    prevDisplayRef.current = formatted;
  });

  useEffect(() => {
    const unsubscribe = onValue(ref(getClientDb(), "pageviews"), (snapshot) => {
      let n = 0;
      snapshot.forEach(() => { n++; });
      setCount(n);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Live indicator */}
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="text-xs font-medium tracking-[0.3em] text-stone-400 uppercase">
          Live
        </span>
      </div>

      {/* Count */}
      <p className="flex items-baseline text-8xl font-semibold tracking-tight text-zinc-900 sm:text-9xl">
        {formatted.split("").map((char, i) => {
          const isChanged = changed.has(
            i + Math.max(0, prevDisplayRef.current.length - formatted.length),
          );
          if (char === ",") {
            return (
              <span key={`sep-${i}`} className="text-stone-300">
                ,
              </span>
            );
          }
          return (
            <span
              key={isChanged ? `${i}-${count}` : `${i}`}
              className={isChanged ? "inline-block animate-rollup" : "inline-block"}
              style={isChanged ? { animationDelay: `${(formatted.length - 1 - i) * 30}ms` } : undefined}
            >
              {char}
            </span>
          );
        })}
      </p>

      {/* Label */}
      <div className="flex flex-col items-center gap-3">
        <div className="h-px w-12 bg-stone-200" />
        <p className="text-xs font-medium tracking-[0.3em] text-stone-400 uppercase">
          Total Visits
        </p>
      </div>
    </div>
  );
}
