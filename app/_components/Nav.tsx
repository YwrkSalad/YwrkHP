"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "ホーム", href: "/" },
  { label: "学部・大学院", href: "/faculties" },
  { label: "入試情報", href: "/admissions" },
  { label: "研究・社会連携", href: "/research" },
  { label: "キャンパスライフ", href: "/campus" },
  { label: "アクセス", href: "/access" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50 border-b border-stone-200/60 bg-white/80 backdrop-blur-md">
        <div className="flex h-18 items-center justify-between px-6">
          <Link
            href="/"
            className="flex flex-col leading-tight"
            onClick={() => setOpen(false)}
          >
            <span className="text-xl font-semibold tracking-widest text-zinc-800">
              やわらか大学
            </span>
            <span className="text-[10px] tracking-[0.25em] text-stone-400 uppercase">
              Yawaraka University
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-600 transition-colors hover:text-accent-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="メニュー"
            className="flex h-8 w-8 flex-col items-center justify-center gap-2.5 md:hidden"
          >
            <span
              className={`block h-[2px] bg-zinc-700 transition-all duration-300 ${open ? "w-7 -translate-x-[7px] translate-y-[14px] rotate-[38deg]" : "w-8"}`}
            />
            <span
              className={`block h-[2px] bg-zinc-700 transition-all duration-300 ${open ? "w-8 translate-x-[11px] rotate-90" : "w-8"}`}
            />
            <span
              className={`block h-[2px] bg-zinc-700 transition-all duration-300 ${open ? "w-7 -translate-x-[7px] -translate-y-[14px] -rotate-[38deg]" : "w-8"}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-white transition-all duration-500 md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-3xl font-semibold tracking-tight text-zinc-900 transition-colors hover:text-accent-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="absolute bottom-10 text-xs tracking-widest text-stone-300 uppercase">
          Yawaraka University
        </p>
      </div>
    </>
  );
}
