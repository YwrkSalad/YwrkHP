"use client";

import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { getClientDb } from "@/lib/firebase-client";

export default function PageViewCounter({ initial }: { initial: number }) {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    const unsubscribe = onValue(ref(getClientDb(), "pageviews"), (snapshot) => {
      let n = 0;
      snapshot.forEach(() => { n++; });
      setCount(n);
    });
    return unsubscribe;
  }, []);

  return <p className="mt-4 text-sm text-zinc-500">訪問者数: {count}</p>;
}
