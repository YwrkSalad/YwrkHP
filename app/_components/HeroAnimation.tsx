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
        src="/campus/ywrk_univ_stone.png"
        alt="やわらか大学キャンパス"
        fill
        className="object-cover object-center"
        priority
      />

      {/* 下部グラデーション（テキスト可読性） */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />

      {/* ページ全体を覆うホワイトオーバーレイ */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[60] bg-white"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />

      {/* テキスト */}
      <div className="relative z-10 flex w-full flex-col justify-end px-10 pb-16 sm:px-16 sm:pb-20">
        <motion.p
          className="mb-4 text-xs font-medium tracking-[0.3em] text-white/70 uppercase"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.9, ease }}
        >
          Yawaraka University
        </motion.p>

        <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">
          <span className="block">
            {heading1.map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
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
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
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

        <motion.p
          className="mt-4 text-sm font-light text-white/75"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 2.6, ease }}
        >
          固定観念を手放し、しなやかに考え、ていねいに行動する。
        </motion.p>

        <motion.div
          className="mt-7 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 3.0, ease }}
        >
          <Link
            href="/faculties"
            className="rounded bg-white px-6 py-2.5 text-xs font-medium text-zinc-900 transition-colors hover:bg-zinc-100"
          >
            学部を見る
          </Link>
          <Link
            href="/admissions"
            className="rounded border border-white/50 px-6 py-2.5 text-xs font-medium text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/10"
          >
            入試情報
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
