export const dynamic = "force-dynamic";

import { getCount } from "@/lib/pageview";
import PageViewCounter from "../_components/PageViewCounter";

export default async function Analytics() {
  const count = await getCount();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <p className="mb-4 text-xs font-medium tracking-widest text-stone-400 uppercase">
        ywrk analytics
      </p>
      <PageViewCounter initial={count} />
    </main>
  );
}
