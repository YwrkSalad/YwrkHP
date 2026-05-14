import type { ComponentType } from "react";
import type { NewsItemMeta } from "./_types";

export type { NewsItemMeta };

export type NewsItem = NewsItemMeta & {
  Body: ComponentType;
};

type NewsModule = { meta: NewsItemMeta; default: ComponentType };
type RequireContext = { keys(): string[]; <T>(id: string): T };

// webpack が `20260214-xxx.tsx` パターンのファイルを自動収集する
const ctx = (require as unknown as { context(d: string, s: boolean, r: RegExp): RequireContext })
  .context(".", false, /^\.\/\d{8}-.+\.tsx$/);

export const news: NewsItem[] = ctx
  .keys()
  .sort()
  .reverse()
  .map((key) => {
    const mod = ctx<NewsModule>(key);
    return { ...mod.meta, Body: mod.default };
  });
