"use client";

import { useEffect } from "react";

export default function TrackView() {
  useEffect(() => {
    fetch("/api/pageview", { method: "POST" });
  }, []);

  return null;
}
