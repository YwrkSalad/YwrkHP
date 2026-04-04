"use client";

import NumberFlow from "@number-flow/react";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { getClientDb } from "@/lib/firebase-client";

export default function PageViewCounter({ initial }: { initial: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // マウント直後に 0 → initial でアニメーション
    setCount(initial);

    const unsubscribe = onValue(ref(getClientDb(), "pageviews"), (snapshot) => {
      let n = 0;
      snapshot.forEach(() => { n++; });
      setCount(n);
    });
    return unsubscribe;
  }, [initial]);

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
      <span className="text-8xl font-semibold tracking-tight text-zinc-900 sm:text-9xl">
        <NumberFlow value={count} locales="ja-JP" />
      </span>

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
