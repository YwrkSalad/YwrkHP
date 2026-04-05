"use client";

import { motion } from "motion/react";

const heading1 = "やわらかな".split("");
const heading2 = "顔つきを。".split("");

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroAnimation() {
  return (
    <section className="relative mt-[4.5rem] flex h-[calc(100svh-4.5rem)] snap-start flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white via-stone-50/40 to-stone-100/60 px-8">
      {/* ページ全体を覆うホワイトオーバーレイ */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[60] bg-white"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />

      {/* 背景装飾 "yw" */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-[18rem] leading-none font-bold text-stone-100 select-none"
        style={{ gap: "2svh" }}
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 4, delay: 0.6, ease }}
      >
        <div className="flex" style={{ gap: "8vw" }}>
          <span>y</span><span>w</span>
        </div>
        <div className="flex" style={{ gap: "8vw" }}>
          <span>r</span><span>k</span>
        </div>
      </motion.div>

      <div className="relative z-10 flex flex-col items-center">
        {/* ywrk ラベル */}
        <motion.p
          className="mb-8 text-xs font-medium tracking-[0.3em] text-stone-400 uppercase"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.9, ease }}
        >
          ywrk
        </motion.p>

        {/* メイン見出し — 一文字ずつ */}
        <h1 className="text-center text-6xl font-semibold tracking-tight text-zinc-900 sm:text-8xl md:text-9xl">
          <span className="block">
            {heading1.map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.4, delay: 1.3 + i * 0.09, ease }}
              >
                {char}
              </motion.span>
            ))}
          </span>
          <span className="block">
            {heading2.map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 1.4,
                  delay: 1.3 + heading1.length * 0.09 + 0.1 + i * 0.09,
                  ease,
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* サブタイトル */}
        <motion.p
          className="mt-10 text-center text-xl font-light text-stone-400 sm:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 3.0, ease }}
        >
          全ての人に。
        </motion.p>

        {/* スクロールインジケーター */}
        <motion.div
          className="mt-24 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, delay: 3.6, ease }}
        >
          <span className="text-xs tracking-widest text-stone-300 uppercase">
            Scroll
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-stone-300 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
