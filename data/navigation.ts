export const navLinks = [
  { label: "ホーム", href: "/" },
  { label: "大学について", href: "/about" },
  { label: "学部・大学院", href: "/faculties" },
  { label: "研究・社会連携", href: "/research" },
  { label: "入試情報", href: "/admissions" },
  { label: "キャンパスライフ", href: "/campus" },
  { label: "学生寮", href: "/dormitory" },
  { label: "教務課", href: "/academic" },
  { label: "アクセス", href: "/access" },
];

type Section = { label: string; href: string };
export type PageGroup = { page: Section; sections: Section[] };

export const footerCols: PageGroup[][] = [
  [
    {
      page: { label: "大学について", href: "/about" },
      sections: [
        { label: "学長挨拶", href: "/about#president" },
        { label: "沿革", href: "/about#history" },
        { label: "組織概要", href: "/about#organization" },
      ],
    },
    {
      page: { label: "教務課", href: "/academic" },
      sections: [
        { label: "窓口案内", href: "/academic#counter" },
        { label: "証明書発行", href: "/academic#certificates" },
        { label: "各種手続き", href: "/academic#procedures" },
      ],
    },
  ],
  [
    {
      page: { label: "学部・大学院", href: "/faculties" },
      sections: [
        { label: "学士課程", href: "/faculties#undergraduate" },
        { label: "やわらか大学院", href: "/faculties#graduate" },
      ],
    },
    {
      page: { label: "入試情報", href: "/admissions" },
      sections: [
        { label: "入試方式", href: "/admissions#methods" },
        { label: "学費・奨学金", href: "/admissions#tuition" },
      ],
    },
  ],
  [
    {
      page: { label: "研究・社会連携", href: "/research" },
      sections: [
        { label: "研究センター・研究所", href: "/research#centers" },
        { label: "社会連携・産学連携", href: "/research#collaboration" },
      ],
    },
    {
      page: { label: "キャンパスライフ", href: "/campus" },
      sections: [
        { label: "クラブ・サークル", href: "/campus#clubs" },
        { label: "キャンパス施設", href: "/campus#facilities" },
        { label: "学生相談室", href: "/campus#counseling" },
        { label: "国際交流・留学", href: "/campus#international" },
      ],
    },
  ],
  [
    {
      page: { label: "学生寮", href: "/dormitory" },
      sections: [
        { label: "寮の紹介", href: "/dormitory#dorms" },
        { label: "寮費", href: "/dormitory#fees" },
        { label: "申し込みの流れ", href: "/dormitory#apply" },
      ],
    },
    {
      page: { label: "アクセス", href: "/access" },
      sections: [
        { label: "キャンパスマップ", href: "/access#map" },
        { label: "キャンパス一覧", href: "/access#campuses" },
        { label: "交通アクセス", href: "/access#transportation" },
      ],
    },
  ],
];
