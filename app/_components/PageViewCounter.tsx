"use client";

import { AnimatePresence, motion } from "motion/react";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { getClientDb } from "@/lib/firebase-client";

function AnimatedDigit({ digit }: { digit: string }) {
  return (
    <span className="relative inline-block overflow-hidden" style={{ verticalAlign: "bottom" }}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={digit}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function PageViewCounter({ initial }: { initial: number }) {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    const unsubscribe = onValue(ref(getClientDb(), "pageviews"), (snapshot) => {
      let n = 0;
      snapshot.forEach(() => { n++; });
      setCount(n);
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
            <AnimatedDigit key={`digit-${i}`} digit={char} />
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
