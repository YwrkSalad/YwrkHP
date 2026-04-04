import type { DataSnapshot } from "firebase-admin/database";
import { getDb } from "@/lib/firebase";

export async function GET() {
  const ref = getDb().ref("pageviews");
  const encoder = new TextEncoder();
  let listener: ((s: DataSnapshot) => void) | null = null;

  const stream = new ReadableStream({
    start(controller) {
      listener = (snapshot: DataSnapshot) => {
        const val = snapshot.numChildren();
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
