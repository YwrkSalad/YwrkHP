"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-stone-200/60 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-12 max-w-screen-xl items-center justify-between px-6">
          <Link
            href="/"
            className="text-sm font-medium tracking-widest text-zinc-700"
            onClick={() => setOpen(false)}
          >
            ywrk
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="メニュー"
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`block h-px w-5 bg-zinc-700 transition-all duration-300 ${open ? "translate-y-[5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-zinc-700 transition-all duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-zinc-700 transition-all duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-white transition-all duration-500 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <nav className="flex flex-col items-center gap-10">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-4xl font-semibold tracking-tight text-zinc-900 transition-colors hover:text-stone-400"
          >
            Home
          </Link>
          <Link
            href="/analytics"
            onClick={() => setOpen(false)}
            className="text-4xl font-semibold tracking-tight text-zinc-900 transition-colors hover:text-stone-400"
          >
            Analytics
          </Link>
        </nav>
        <p className="absolute bottom-10 text-xs tracking-widest text-stone-300 uppercase">
          ywrk
        </p>
      </div>
    </>
  );
}
