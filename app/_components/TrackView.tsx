"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function TrackView() {
  const pathname = usePathname();

  useEffect(() => {
    fetch("/api/pageview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page: pathname }),
    });
  }, [pathname]);

  return null;
}
