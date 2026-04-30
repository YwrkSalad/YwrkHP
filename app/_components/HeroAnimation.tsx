"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

const heading1 = "やわらかな知性で、".split("");
const heading2 = "世界をひらく。".split("");

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroAnimation() {
  return (
    <section className="relative flex h-[calc(100svh-4.5rem)] overflow-hidden">
      {/* 背景画像 */}
      <Image
        src="/campus_over.png"
        alt="やわらか大学キャンパス"
        fill
        className="object-cover object-center"
        priority
      />

      {/* ページ全体を覆うホワイトオーバーレイ */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[60] bg-white"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />

      {/* テキストエリア */}
      <div className="relative z-10 flex w-full flex-col justify-end px-10 pb-20 sm:px-16 sm:pb-24">
        <div className="inline-block max-w-xl rounded-sm bg-white/60 px-8 py-7 backdrop-blur-sm">
          {/* ラベル */}
          <motion.p
            className="text-accent-700 mb-4 text-xs font-medium tracking-[0.3em] uppercase"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.9, ease }}
          >
            Yawaraka University
          </motion.p>

          {/* メイン見出し */}
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            <span className="block">
              {heading1.map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1.2, delay: 1.2 + i * 0.07, ease }}
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
                  initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 1.2,
                    delay: 1.2 + heading1.length * 0.07 + 0.1 + i * 0.07,
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
            className="mt-4 text-sm font-light leading-relaxed text-stone-600"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 2.6, ease }}
          >
            固定観念を手放し、しなやかに考え、ていねいに行動する。
          </motion.p>

          {/* CTA ボタン */}
          <motion.div
            className="mt-6 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 3.0, ease }}
          >
            <Link
              href="/faculties"
              className="bg-accent-700 hover:bg-accent-600 rounded px-6 py-2.5 text-xs font-medium text-white transition-colors"
            >
              学部を見る
            </Link>
            <Link
              href="/admissions"
              className="border-accent-400 text-accent-700 hover:border-accent-600 rounded border px-6 py-2.5 text-xs font-medium transition-colors"
            >
              入試情報
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
