import Link from "next/link";
import PageSection from "./PageSection";
import { footerCols } from "../../data/navigation";

export default function Footer() {
  return (
    <PageSection as="footer" className="bg-zinc-900 py-8 sm:py-12">
      <div className="mb-6 grid grid-cols-2 gap-4 sm:mb-10 sm:grid-cols-5 sm:gap-8">
        <div className="col-span-2 sm:col-span-1">
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
          <div key={ci} className="space-y-4 sm:space-y-6">
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
    </PageSection>
  );
}
