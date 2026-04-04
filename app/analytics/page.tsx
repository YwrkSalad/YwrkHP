export const dynamic = "force-dynamic";

import { getCount } from "@/lib/pageview";
import Nav from "../_components/Nav";
import PageViewCounter from "../_components/PageViewCounter";

export default async function Analytics() {
  const count = await getCount();

  return (
    <>
      <Nav />
      <main className="flex min-h-screen flex-col items-center justify-center bg-white pt-12">
        <p className="mb-4 text-xs font-medium tracking-[0.3em] text-stone-400 uppercase">
          ywrk analytics
        </p>
        <PageViewCounter initial={count} />
      </main>
    </>
  );
}
