"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAdmin } from "../actions";
import Nav from "@/app/_components/Nav";

const TOKEN_KEY = "ywrk-admin-token";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const token = await loginAdmin(password);
      if (token) {
        localStorage.setItem(TOKEN_KEY, token);
        router.replace("/admin");
        return;
      }
      setError(true);
    } catch {
      setError(true);
    }
    setLoading(false);
  }

  return (
    <>
      <Nav />
      <main className="mt-[4.5rem] flex h-[calc(100svh-4.5rem)] items-center justify-center bg-stone-50 px-8 pb-12">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-6 sm:gap-8"
        >
          <p className="text-xs font-medium tracking-[0.3em] text-stone-400 uppercase">
            Admin Login
          </p>

          <div className="flex flex-col items-center gap-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              autoFocus
              className="w-48 border-b border-stone-300 bg-transparent py-2 text-center text-sm text-zinc-800 outline-none placeholder:text-stone-300 focus:border-zinc-500"
            />
            {error && (
              <p className="text-xs text-red-400">incorrect password</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || !password}
            className="text-xs font-medium tracking-[0.3em] text-stone-400 uppercase transition-colors hover:text-zinc-700 disabled:opacity-30"
          >
            {loading ? "..." : "enter"}
          </button>
        </form>
      </main>
    </>
  );
}
