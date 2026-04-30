"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

const heading1 = "やわらかな知性で、".split("");
const heading2 = "世界をひらく。".split("");

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroAnimation() {
  return (
    <section className="relative flex h-[calc(100svh-4.5rem)] overflow-hidden bg-stone-50">
      {/* ページ全体を覆うホワイトオーバーレイ */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[60] bg-white"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />

      {/* 左：テキストエリア */}
      <div className="relative z-10 flex w-full flex-col justify-center px-8 sm:px-16 md:w-1/2 md:px-20">
        {/* ラベル */}
        <motion.p
          className="text-accent-600 mb-8 text-xs font-medium tracking-[0.3em] uppercase"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.9, ease }}
        >
          Yawaraka University
        </motion.p>

        {/* メイン見出し — 一文字ずつ */}
        <h1 className="text-5xl font-semibold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl">
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
          className="mt-8 text-base font-light leading-relaxed text-stone-500 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 2.8, ease }}
        >
          固定観念を手放し、しなやかに考え、
          <br />
          ていねいに行動する。
        </motion.p>

        {/* CTA ボタン */}
        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 3.2, ease }}
        >
          <Link
            href="/faculties"
            className="bg-accent-700 hover:bg-accent-600 rounded px-8 py-3 text-sm font-medium text-white transition-colors"
          >
            学部を見る
          </Link>
          <Link
            href="/admissions"
            className="border-accent-300 text-accent-700 hover:border-accent-500 hover:text-accent-800 rounded border px-8 py-3 text-sm font-medium transition-colors"
          >
            入試情報
          </Link>
        </motion.div>

        {/* スクロールインジケーター */}
        <motion.div
          className="mt-16 flex flex-col gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, delay: 3.8, ease }}
        >
          <span className="text-accent-400 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <div className="from-accent-300 h-12 w-px bg-gradient-to-b to-transparent" />
        </motion.div>
      </div>

      {/* 右：キャンパス画像 */}
      <motion.div
        className="relative hidden md:block md:w-1/2"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.6, delay: 0.6, ease }}
      >
        <Image
          src="/campus_over.png"
          alt="やわらか大学キャンパス"
          fill
          className="object-cover object-center"
          priority
        />
        {/* 左端フェード：テキスト側へのなじみ */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-stone-50 to-transparent" />
      </motion.div>
    </section>
  );
}
