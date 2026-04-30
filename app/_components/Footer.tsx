import Link from "next/link";

type Section = { label: string; href: string };
type PageGroup = { page: Section; sections: Section[] };

const footerCols: PageGroup[][] = [
  [
    {
      page: { label: "大学について", href: "/about" },
      sections: [
        { label: "学長挨拶", href: "/about#president" },
        { label: "沿革", href: "/about#history" },
        { label: "組織概要", href: "/about#organization" },
      ],
    },
  ],
  [
    {
      page: { label: "学部・大学院", href: "/faculties" },
      sections: [
        { label: "学士課程", href: "/faculties#undergraduate" },
        { label: "やわらか大学院", href: "/faculties#graduate" },
      ],
    },
    {
      page: { label: "入試情報", href: "/admissions" },
      sections: [
        { label: "入試方式", href: "/admissions#methods" },
        { label: "学費・奨学金", href: "/admissions#tuition" },
      ],
    },
  ],
  [
    {
      page: { label: "研究・社会連携", href: "/research" },
      sections: [
        { label: "研究センター・研究所", href: "/research#centers" },
        { label: "社会連携・産学連携", href: "/research#collaboration" },
      ],
    },
    {
      page: { label: "キャンパスライフ", href: "/campus" },
      sections: [
        { label: "クラブ・サークル", href: "/campus#clubs" },
        { label: "キャンパス施設", href: "/campus#facilities" },
        { label: "国際交流・留学", href: "/campus#international" },
      ],
    },
  ],
  [
    {
      page: { label: "学生寮", href: "/dormitory" },
      sections: [
        { label: "寮の紹介", href: "/dormitory#dorms" },
        { label: "寮費", href: "/dormitory#fees" },
        { label: "申し込みの流れ", href: "/dormitory#apply" },
      ],
    },
    {
      page: { label: "アクセス", href: "/access" },
      sections: [
        { label: "キャンパスマップ", href: "/access#map" },
        { label: "キャンパス一覧", href: "/access#campuses" },
        { label: "交通アクセス", href: "/access#transportation" },
      ],
    },
  ],
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
          {footerCols.map((groups, ci) => (
            <div key={ci} className="space-y-6">
              {groups.map((g) => (
                <div key={g.page.href}>
                  <Link
                    href={g.page.href}
                    className="mb-2 block text-xs font-bold text-white transition-colors hover:text-zinc-300"
                  >
                    {g.page.label}
                  </Link>
                  {g.sections.length > 0 && (
                    <ul className="space-y-1.5">
                      {g.sections.map((s) => (
                        <li key={s.href}>
                          <Link
                            href={s.href}
                            className="hover:text-accent-300 text-xs text-zinc-400 transition-colors"
                          >
                            {s.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
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
