"use client";

import { useEffect, useState } from "react";

export default function PageViewCounter({ initial }: { initial: number }) {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    const es = new EventSource("/api/pageview-stream");
    es.onmessage = (e) => setCount(Number(e.data));
    return () => es.close();
  }, []);

  return <p className="mt-4 text-sm text-zinc-500">訪問者数: {count}</p>;
}
