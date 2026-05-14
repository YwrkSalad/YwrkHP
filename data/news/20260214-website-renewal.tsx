import type { NewsItemMeta } from "./_types";

export const meta: NewsItemMeta = {
  slug: "website-renewal",
  date: "2026.02.14",
  category: "お知らせ",
  title: "大学公式サイトをリニューアルしました",
  description:
    "やわらか大学の公式ウェブサイトを全面リニューアルしました。「やわらかであることは、強さである」という本学の理念をデザインの根幹に据え、構成を見直しました。",
};

export default function Body() {
  return (
    <div className="space-y-5 text-sm leading-loose text-stone-700">
      <p>やわらか大学の公式ウェブサイトを全面リニューアルしました。</p>
      <p>
        新サイトでは「やわらかであることは、強さである」という本学の理念をデザインの根幹に据え、訪問者が必要な情報に素早くたどり着けるよう構成を見直しました。
      </p>

      <div>
        <p className="font-semibold text-zinc-900">■ 主な変更点</p>
        <div className="mt-2 space-y-3">
          <div>
            <p className="font-semibold text-zinc-800">デザイン・操作性</p>
            <p>
              柔らかみのある配色とタイポグラフィを採用し、スマートフォンでの閲覧を最優先に設計しました。どのページもモバイル端末で快適にご利用いただけます。
            </p>
          </div>
          <div>
            <p className="font-semibold text-zinc-800">情報構成</p>
            <p>
              学部・入試・キャンパスライフ・研究・アクセスの各ページを刷新し、在学生・受験生・保護者それぞれが求める情報をまとめて参照できるようにしました。
            </p>
          </div>
          <div>
            <p className="font-semibold text-zinc-800">キャンパスマップ</p>
            <p>
              インタラクティブなキャンパスマップを新たに掲載しました。建物をクリックすると各施設の詳細情報が表示されます。
            </p>
          </div>
          <div>
            <p className="font-semibold text-zinc-800">アクセシビリティ</p>
            <p>
              色のコントラスト・フォントサイズ・読み上げ対応を強化し、より多くの方が利用しやすい設計にしました。
            </p>
          </div>
        </div>
      </div>

      <p>
        旧サイトのURLは引き続き本サイトへ転送されます。ブックマークの更新は不要です。
      </p>
      <p>ご意見・ご不明な点は広報課（pr@ywrk.org）までお寄せください。</p>
    </div>
  );
}
