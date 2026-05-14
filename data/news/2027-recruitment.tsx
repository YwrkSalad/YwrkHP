import type { NewsItemMeta } from "./_types";

export const meta: NewsItemMeta = {
  slug: "2027-recruitment",
  date: "2026.03.25",
  category: "入試情報",
  title: "令和9年度 学生募集要項を開米しました",
  description:
    "令和9年度（2027年度）入学者選抜に係る学生募集要項を開米いたしました。本年度の募集概要をご確認ください。",
};

export default function Body() {
  return (
    <div className="space-y-5 text-sm leading-loose text-stone-700">
      <p>令和9年度（2027年度）入学者選抜に係る学生募集要項を開米いたしました。</p>
      <p>本年度の募集概要は以下のとおりです。</p>

      <div>
        <p className="font-semibold text-zinc-900">■ 募集学部・定員</p>
        <ul className="mt-2 space-y-1 pl-1">
          <li className="flex gap-2">
            <span className="shrink-0 text-stone-400">–</span>
            <span>理学部：160名</span>
          </li>
          <li className="flex gap-2">
            <span className="shrink-0 text-stone-400">–</span>
            <span>工学部：200名</span>
          </li>
          <li className="flex gap-2">
            <span className="shrink-0 text-stone-400">–</span>
            <span>農学部：180名</span>
          </li>
          <li className="flex gap-2">
            <span className="shrink-0 text-stone-400">–</span>
            <span>情報科学部：150名</span>
          </li>
          <li className="flex gap-2">
            <span className="shrink-0 text-stone-400">–</span>
            <span>医学部（医学科・保健学科）：130名</span>
          </li>
        </ul>
      </div>

      <div>
        <p className="font-semibold text-zinc-900">■ 入試方式</p>
        <p className="mt-1">
          一般選抜（前期・後期）、総合型選抜、学校推薦型選抜、および編入学試験の4方式で募集します。各方式の出願期間・試験日程については入試情報ページをご確認ください。
        </p>
      </div>

      <div>
        <p className="font-semibold text-zinc-900">■ 変更点</p>
        <p className="mt-1">
          今年度より総合型選抜において、オンライン面接を選択できるようになりました。また、編入学試験の出願資格に一部変更があります。詳細は募集要項本文をご参照ください。
        </p>
      </div>

      <div>
        <p className="font-semibold text-zinc-900">■ 資料請求・お問い合わせ</p>
        <p className="mt-1">
          入試に関するご質問は入試課（admission@ywrk.org）または本学ウェブサイトのお問い合わせフォームよりお寄せください。
        </p>
      </div>
    </div>
  );
}
