import type { NewsItemMeta } from "./_types";

export const meta: NewsItemMeta = {
  slug: "forum-2026",
  date: "2026.03.10",
  category: "研究",
  title: "「やわらか知のフォーラム 2026」開催のご案内",
  description:
    "やわらか大学の学際研究拠点「やわらか知のフォーラム研究センター」は、年次フォーラム「やわらか知のフォーラム 2026」を開催します。学内外の研究者・学生・社会人の皆さまのご参加をお待ちしています。",
};

export default function Body() {
  return (
    <div className="space-y-5 text-sm leading-loose text-stone-700">
      <p>
        やわらか大学の学際研究拠点「やわらか知のフォーラム研究センター」は、年次フォーラム「やわらか知のフォーラム
        2026」を下記の日程で開催します。学内外の研究者・学生・社会人の皆さまのご参加をお待ちしています。
      </p>

      <div>
        <p className="font-semibold text-zinc-900">■ 開催概要</p>
        <ul className="mt-2 space-y-1 pl-1">
          <li className="flex gap-2">
            <span className="shrink-0 text-stone-400">–</span>
            <span>日時：2026年6月14日（日）10:00〜18:00</span>
          </li>
          <li className="flex gap-2">
            <span className="shrink-0 text-stone-400">–</span>
            <span>
              会場：やわらか大学 学生交流センター 多目的ホール（本キャンパス）
            </span>
          </li>
          <li className="flex gap-2">
            <span className="shrink-0 text-stone-400">–</span>
            <span>参加費：無料（事前登録制）</span>
          </li>
        </ul>
      </div>

      <div>
        <p className="font-semibold text-zinc-900">■ テーマ</p>
        <p className="mt-1">「ほどける知──境界を越える学術の可能性」</p>
      </div>

      <div>
        <p className="font-semibold text-zinc-900">■ プログラム（予定）</p>
        <ul className="mt-2 space-y-1 pl-1">
          <li className="flex gap-2">
            <span className="shrink-0 text-stone-400">–</span>
            <span>
              10:00　開会・基調講演「知の解体と再編──学際研究の現在地」
            </span>
          </li>
          <li className="flex gap-2">
            <span className="shrink-0 text-stone-400">–</span>
            <span>12:00　昼休憩（学内カフェテリア利用可）</span>
          </li>
          <li className="flex gap-2">
            <span className="shrink-0 text-stone-400">–</span>
            <span>
              13:00　分科会セッション（文理融合・共生社会・情報生命・環境）
            </span>
          </li>
          <li className="flex gap-2">
            <span className="shrink-0 text-stone-400">–</span>
            <span>15:30　ポスター発表</span>
          </li>
          <li className="flex gap-2">
            <span className="shrink-0 text-stone-400">–</span>
            <span>17:00　パネルディスカッション</span>
          </li>
          <li className="flex gap-2">
            <span className="shrink-0 text-stone-400">–</span>
            <span>18:00　閉会</span>
          </li>
        </ul>
      </div>

      <div>
        <p className="font-semibold text-zinc-900">■ 参加登録</p>
        <p className="mt-1">
          参加希望の方は本学ウェブサイトのフォームより2026年6月7日（日）までにご登録ください。定員（300名）に達し次第、受付を終了します。
        </p>
      </div>

      <div>
        <p className="font-semibold text-zinc-900">■ 問い合わせ先</p>
        <div className="mt-1">
          <p>やわらか知のフォーラム研究センター事務局</p>
          <p>forum@ywrk.org</p>
        </div>
      </div>
    </div>
  );
}
