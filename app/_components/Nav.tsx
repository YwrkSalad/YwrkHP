"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "ホーム", href: "/" },
  { label: "学部・大学院", href: "/faculties" },
  { label: "研究・社会連携", href: "/research" },
  { label: "入試情報", href: "/admissions" },
  { label: "キャンパスライフ", href: "/campus" },
  { label: "学生寮", href: "/dormitory" },
  { label: "アクセス", href: "/access" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [useHamburger, setUseHamburger] = useState(false);
  const pathname = usePathname();
  const barRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const navMeasureRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const updateLayout = () => {
      const bar = barRef.current;
      const brand = brandRef.current;
      const nav = navMeasureRef.current;
      if (!bar || !brand || !nav) return;

      const available = bar.clientWidth;
      const required = brand.offsetWidth + nav.scrollWidth + 40;
      setUseHamburger((prev) => {
        if (!prev && required > available) return true;
        if (prev && required + 64 < available) return false;
        return prev;
      });
    };

    updateLayout();
    const observer = new ResizeObserver(updateLayout);
    if (barRef.current) observer.observe(barRef.current);
    if (brandRef.current) observer.observe(brandRef.current);
    if (navMeasureRef.current) observer.observe(navMeasureRef.current);
    window.addEventListener("resize", updateLayout);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateLayout);
    };
  }, []);

  useEffect(() => {
    if (useHamburger) return;
    setOpen(false);
  }, [useHamburger]);

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50 border-b border-stone-200/60 bg-white/80 backdrop-blur-md">
        <div
          ref={barRef}
          className="flex h-18 items-center justify-between px-6"
        >
          <Link
            ref={brandRef}
            href="/"
            className="flex shrink-0 items-center gap-3 whitespace-nowrap"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/branding/logo.png"
              alt="やわらか大学 ロゴ"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
              priority
            />
            <span className="flex flex-col leading-tight">
              <span className="text-xl font-semibold tracking-widest text-zinc-800">
                やわらか大学
              </span>
              <span className="text-[10px] tracking-[0.25em] text-stone-400 uppercase">
                Yawaraka University
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            ref={navRef}
            className={`${useHamburger ? "pointer-events-none invisible absolute" : "flex"} items-center gap-6`}
          >
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 text-[13px] whitespace-nowrap transition-colors ${
                  isActive(link.href)
                    ? "text-accent-700 after:bg-accent-600 font-medium after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:rounded-full after:content-['']"
                    : "hover:text-accent-700 text-zinc-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="メニュー"
            className={`${useHamburger ? "flex" : "hidden"} h-8 w-8 flex-col items-center justify-center gap-2.5`}
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

      {/* Layout measurement (kept out of flow to avoid width oscillation) */}
      <div
        ref={navMeasureRef}
        aria-hidden
        className="pointer-events-none invisible fixed top-0 left-[-9999px] flex items-center gap-6 whitespace-nowrap"
      >
        {navLinks.slice(1).map((link) => (
          <span key={link.href} className="text-[13px] font-medium">
            {link.label}
          </span>
        ))}
      </div>

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 z-40 ${useHamburger ? "flex" : "hidden"} flex-col items-center justify-center bg-white transition-all duration-500 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <nav className="flex flex-col items-center gap-6 sm:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-2xl font-semibold tracking-tight transition-colors sm:text-3xl ${
                isActive(link.href)
                  ? "text-accent-600"
                  : "hover:text-accent-600 text-zinc-900"
              }`}
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
