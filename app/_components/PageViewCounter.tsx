"use client";

import { onValue, ref } from "firebase/database";
import { useEffect, useRef, useState } from "react";
import { getClientDb } from "@/lib/firebase-client";

function AnimatedDigit({ digit, delay }: { digit: string; delay: number }) {
  return (
    <span
      className="inline-block overflow-hidden leading-[1]"
      style={{ height: "1em" }}
    >
      <span
        className="animate-rollup inline-block"
        style={{ animationDelay: `${delay}ms` }}
      >
        {digit}
      </span>
    </span>
  );
}

export default function PageViewCounter({ initial }: { initial: number }) {
  const [count, setCount] = useState(initial);
  const [gen, setGen] = useState(0);
  const prevCount = useRef(initial);

  useEffect(() => {
    const unsubscribe = onValue(ref(getClientDb(), "pageviews"), (snapshot) => {
      let n = 0;
      snapshot.forEach(() => {
        n++;
      });
      if (n !== prevCount.current) {
        prevCount.current = n;
        setCount(n);
        setGen((g) => g + 1);
      }
    });
    return unsubscribe;
  }, []);

  const formatted = count.toLocaleString("ja-JP");

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
      <p className="flex items-end text-8xl font-semibold tracking-tight text-zinc-900 sm:text-9xl">
        {formatted.split("").map((char, i) =>
          char === "," ? (
            <span key={`sep-${i}`} className="pb-1 text-stone-300">
              ,
            </span>
          ) : (
            <AnimatedDigit key={`${i}-${gen}`} digit={char} delay={i * 40} />
          ),
        )}
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
