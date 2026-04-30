import Link from "next/link";

const footerCols = [
  {
    page: { label: "大学について", href: "/about" },
    sections: [
      { label: "学長挨拶", href: "/about#president" },
      { label: "沿革", href: "/about#history" },
      { label: "組織概要", href: "/about#organization" },
    ],
  },
  {
    page: { label: "学部・大学院", href: "/faculties" },
    sections: [
      { label: "入試情報", href: "/admissions" },
      { label: "研究・社会連携", href: "/research" },
    ],
  },
  {
    page: { label: "キャンパスライフ", href: "/campus" },
    sections: [
      { label: "学生寮", href: "/dormitory" },
    ],
  },
  {
    page: { label: "アクセス", href: "/access" },
    sections: [
      { label: "キャンパスマップ", href: "/access#map" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-900 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 grid gap-8 sm:grid-cols-5">
          <div>
            <Link
              href="/"
              className="mb-3 block text-sm font-semibold text-white transition-colors hover:text-zinc-300"
            >
              やわらか大学
            </Link>
            <p className="text-xs leading-relaxed text-zinc-500">
              やわらかな知性で、
              <br />
              世界をひらく。
            </p>
          </div>
          {footerCols.map((col) => (
            <div key={col.page.href}>
              <Link
                href={col.page.href}
                className="mb-3 block text-xs font-medium text-zinc-300 transition-colors hover:text-white"
              >
                {col.page.label}
              </Link>
              <ul className="space-y-2">
                {col.sections.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="hover:text-accent-300 text-xs text-zinc-500 transition-colors"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-zinc-800 pt-6">
          <p className="text-xs text-zinc-700">
            © 2026 やわらか大学 Yawaraka University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
