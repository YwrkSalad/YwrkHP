import Link from "next/link";

const footerCols = [
  {
    title: "大学について",
    links: [
      { label: "学長挨拶", href: "/about#president" },
      { label: "沿革", href: "/about#history" },
      { label: "組織概要", href: "/about#organization" },
      { label: "キャンパスマップ", href: "/access#map" },
    ],
  },
  {
    title: "学部・大学院",
    links: [
      { label: "文化創造学部", href: "/faculties#cultural-creation" },
      { label: "生命環境学部", href: "/faculties#life-environment" },
      { label: "共生社会学部", href: "/faculties#coexistence" },
      { label: "情報デザイン学部", href: "/faculties#information-design" },
      { label: "ポップカルチャー学部", href: "/faculties#pop-culture" },
    ],
  },
  {
    title: "情報",
    links: [
      { label: "入試情報", href: "/admissions" },
      { label: "研究・社会連携", href: "/research" },
      { label: "キャンパスライフ", href: "/campus" },
      { label: "アクセス", href: "/access" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-900 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 grid gap-8 sm:grid-cols-4">
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
            <div key={col.title}>
              <p className="mb-3 text-xs font-medium tracking-widest text-zinc-400 uppercase">
                {col.title}
              </p>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-xs text-zinc-500 transition-colors hover:text-accent-300"
                    >
                      {l.label}
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
