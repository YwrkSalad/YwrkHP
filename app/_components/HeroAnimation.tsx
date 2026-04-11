"use client";

import { motion } from "motion/react";
import Link from "next/link";

const heading1 = "やわらかな知性で、".split("");
const heading2 = "世界をひらく。".split("");

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroAnimation() {
  return (
    <section className="relative flex h-[calc(100svh-4.5rem)] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white via-accent-50/60 to-accent-100/50 px-8">
      {/* ページ全体を覆うホワイトオーバーレイ */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[60] bg-white"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />

      {/* 背景装飾 */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22rem] leading-none font-bold text-accent-200/50 select-none sm:text-[32rem]"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 4, delay: 0.6, ease }}
      >
        大
      </motion.div>

      <div className="relative z-10 flex flex-col items-center">
        {/* ラベル */}
        <motion.p
          className="mb-8 text-xs font-medium tracking-[0.3em] text-accent-600 uppercase"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.9, ease }}
        >
          Yawaraka University
        </motion.p>

        {/* メイン見出し — 一文字ずつ */}
        <h1 className="text-center text-5xl font-semibold tracking-tight text-zinc-900 sm:text-7xl md:text-8xl">
          <span className="block">
            {heading1.map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.4, delay: 1.3 + i * 0.08, ease }}
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
                  delay: 1.3 + heading1.length * 0.08 + 0.1 + i * 0.08,
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
          className="mt-10 text-center text-lg font-light text-accent-600 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 2.8, ease }}
        >
          固定観念を手放し、しなやかに考え、ていねいに行動する。
        </motion.p>

        {/* CTA ボタン */}
        <motion.div
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 3.2, ease }}
        >
          <Link
            href="/faculties"
            className="rounded-full bg-accent-700 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-600"
          >
            学部を見る
          </Link>
          <Link
            href="/admissions"
            className="rounded-full border border-accent-300 px-8 py-3 text-sm font-medium text-accent-700 transition-colors hover:border-accent-500 hover:text-accent-800"
          >
            入試情報
          </Link>
        </motion.div>

        {/* スクロールインジケーター */}
        <motion.div
          className="mt-20 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, delay: 3.8, ease }}
        >
          <span className="text-xs tracking-widest text-accent-400 uppercase">
            Scroll
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-accent-300 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
