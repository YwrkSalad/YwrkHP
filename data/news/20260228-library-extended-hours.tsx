import type { NewsItemMeta } from "./_types";

export const meta: NewsItemMeta = {
  slug: "library-extended-hours",
  date: "2026.02.28",
  category: "キャンパス",
  title: "図書館の夜間開館時間が延長されました",
  description:
    "やわらか図書館では、学生の学習環境充実のため、2026年4月1日より夜間開館時間を延長します。",
};

export default function Body() {
  return (
    <div className="space-y-5 text-sm leading-loose text-stone-700">
      <p>
        やわらか図書館では、学生の学習環境充実のため、2026年4月1日より夜間開館時間を延長します。
      </p>

      <div>
        <p className="font-semibold text-zinc-900">
          ■ 変更後の開館時間（2026年4月1日〜）
        </p>
        <ul className="mt-2 space-y-1 pl-1">
          <li className="flex gap-2">
            <span className="shrink-0 text-stone-400">–</span>
            <span>月〜金：8:00〜23:00（従来：8:00〜22:00）</span>
          </li>
          <li className="flex gap-2">
            <span className="shrink-0 text-stone-400">–</span>
            <span>土：9:00〜22:00（従来：9:00〜21:00）</span>
          </li>
          <li className="flex gap-2">
            <span className="shrink-0 text-stone-400">–</span>
            <span>日・祝：9:00〜20:00（変更なし）</span>
          </li>
        </ul>
      </div>

      <div>
        <p className="font-semibold text-zinc-900">■ 24時間学習席について</p>
        <p className="mt-1">
          ラーニングコモンズ1階の24時間学習エリア（48席）は引き続きご利用いただけます。深夜帯（23:00〜8:00）は学生証によるゲート認証が必要です。
        </p>
      </div>

      <div>
        <p className="font-semibold text-zinc-900">■ 延長開館に伴う注意事項</p>
        <ul className="mt-2 space-y-1 pl-1">
          <li className="flex gap-2">
            <span className="shrink-0 text-stone-400">–</span>
            <span>夜間帯（21:00以降）は入口が北側1か所のみとなります</span>
          </li>
          <li className="flex gap-2">
            <span className="shrink-0 text-stone-400">–</span>
            <span>グループ学習室の利用は22:00まで</span>
          </li>
          <li className="flex gap-2">
            <span className="shrink-0 text-stone-400">–</span>
            <span>飲食は所定のエリアのみ可</span>
          </li>
        </ul>
      </div>

      <p>
        試験期間中はさらに延長される場合があります。最新の開館カレンダーは図書館ウェブページをご確認ください。
      </p>
      <p>
        ご不明な点は図書館カウンター（lib@ywrk.org）までお問い合わせください。
      </p>
    </div>
  );
}
