import type { DataSnapshot } from "firebase-admin/database";
import { getDb } from "@/lib/firebase";

const todayKey = () => new Date().toISOString().slice(0, 10);

export async function GET() {
  const ref = getDb().ref(`pageviews/${todayKey()}`);
  const encoder = new TextEncoder();
  let listener: ((s: DataSnapshot) => void) | null = null;

  const stream = new ReadableStream({
    start(controller) {
      listener = (snapshot: DataSnapshot) => {
        const val = snapshot.val() ?? 0;
        try {
          controller.enqueue(encoder.encode(`data: ${val}\n\n`));
        } catch {
          // controller already closed
        }
      };
      ref.on("value", listener);
    },
    cancel() {
      if (listener) ref.off("value", listener);
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
