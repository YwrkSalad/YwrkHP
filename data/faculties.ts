export const faculties = [
  {
    id: "science",
    number: "01",
    name: "理学部",
    en: "Faculty of Science",
    tagline: "自然の法則を、数式と実験で解き明かす。",
    description:
      "数学・物理学・化学・生物学・地球惑星科学・宇宙科学の6学科で構成される理学部。基礎科学の深化を通じて自然界の本質を探究し、科学的思考力と論理的表現力を備えた研究者・技術者を育成します。",
    departments: [
      {
        id: "science-mathematics",
        name: "数学科",
        body: "代数・解析・幾何・数理統計を基礎から研究し、現代数学の最前線へ。",
      },
      {
        id: "science-physics",
        name: "物理学科",
        body: "量子力学・統計力学・量子物性を軸に、しじみ教授と物質のふるまいを探究する。",
      },
      {
        id: "science-chemistry",
        name: "化学科",
        body: "有機・無機・物理・生物化学を網羅し、分子レベルで物質の本質に迫る。",
      },
      {
        id: "science-biology",
        name: "生物学科",
        body: "細胞・分子生物学から生態学まで、生命現象を多階層で解明する。",
      },
      {
        id: "science-earth-planetary",
        name: "地球惑星科学科",
        body: "地質・海洋・大気・惑星を対象に、地球システム科学を総合的に学ぶ。",
      },
      {
        id: "science-space",
        name: "宇宙科学科",
        body: "天文学・宇宙物理・観測技術を横断し、宇宙の起源と構造を探求する。",
      },
    ],
  },
  {
    id: "engineering",
    number: "02",
    name: "工学部",
    en: "Faculty of Engineering",
    tagline: "科学を技術に変え、社会を動かす。",
    description:
      "機械航空・電気情報・建設環境・化学システム・材料科学の5学科から成る工学部。基礎理学と実践的な工学設計を結合し、社会インフラ・産業・情報基盤を支えるエンジニアを育てます。",
    departments: [
      {
        id: "engineering-mechanical-aerospace",
        name: "機械航空工学科",
        body: "熱流体・固体力学・制御工学・ロボティクスおよび航空宇宙工学を専攻する。",
      },
      {
        id: "engineering-electrical-information",
        name: "電気情報工学科",
        body: "電気回路・電磁気・半導体・通信工学・組み込みシステムを体系的に学ぶ。",
      },
      {
        id: "engineering-civil-environmental",
        name: "建設環境工学科",
        body: "構造・地盤・水工・交通・環境工学を学び、社会インフラの設計・維持を担う。",
      },
      {
        id: "engineering-chemical-systems",
        name: "化学システム工学科",
        body: "反応工学・移動現象・プロセス設計を通じて化学産業の技術革新を追求する。",
      },
      {
        id: "engineering-materials",
        name: "材料科学工学科",
        body: "金属・セラミックス・高分子・複合材料の構造と機能を原子レベルで解明する。",
      },
    ],
  },
  {
    id: "agriculture",
    number: "03",
    name: "農学部",
    en: "Faculty of Agriculture",
    tagline: "生命と大地のサイエンスで、持続可能な食と環境を創る。",
    description:
      "農業科学・生命機能科学・資源生物科学・応用生物化学・共同獣医学の5学科で構成。食料・生命・環境・動物医療を横断する農学の視点から、持続可能な社会の実現に貢献する高度専門人材を育てます。",
    departments: [
      {
        id: "agriculture-agricultural-science",
        name: "農業科学科",
        body: "作物・土壌・農業生態系を科学し、持続可能な食料生産システムを研究する。",
      },
      {
        id: "agriculture-life-science",
        name: "生命機能科学科",
        body: "植物・動物の生理・遺伝・分子育種を通じ、生命機能の制御に迫る。",
      },
      {
        id: "agriculture-bioresource",
        name: "資源生物科学科",
        body: "水産・畜産・森林など生物資源の増産・保全・利用技術を探究する。",
      },
      {
        id: "agriculture-applied-biochemistry",
        name: "応用生物化学科",
        body: "食品化学・醸造・バイオテクノロジーを基礎に農産物の機能と利用を研究する。",
      },
      {
        id: "agriculture-joint-veterinary",
        name: "共同獣医学科",
        body: "動物医療・感染症・公衆衛生を横断して学び、人と動物がともに健やかに暮らす社会を支える。",
      },
    ],
  },
  {
    id: "information-science",
    number: "04",
    name: "情報科学部",
    en: "Faculty of Information Science and Technology",
    tagline: "情報の力で、知性と社会をつなぐ。",
    description:
      "情報工学・知能情報工学・生体情報工学・数理情報科学・デザインの5学科から成る情報科学部。計算機科学と人間中心設計を軸に、次世代情報研究者と創造的な実践者を育成します。",
    departments: [
      {
        id: "information-science-information-engineering",
        name: "情報工学科",
        body: "アルゴリズム・OS・コンパイラ・ネットワーク・セキュリティの基盤技術を習得する。",
      },
      {
        id: "information-science-intelligent-systems",
        name: "知能情報工学科",
        body: "機械学習・深層学習・自然言語処理・コンピュータビジョンを研究・開発する。",
      },
      {
        id: "information-science-biomedical-informatics",
        name: "生体情報工学科",
        body: "バイオインフォマティクス・医用画像・神経情報工学で生命と情報を融合させる。",
      },
      {
        id: "information-science-mathematical-informatics",
        name: "数理情報科学科",
        body: "確率論・最適化・暗号理論・情報理論の数理的基盤から応用まで深く学ぶ。",
      },
      {
        id: "information-science-design",
        name: "デザイン科",
        body: "情報設計・UI/UX・視覚表現を横断し、繭子教授と人に届く体験を形にする。",
      },
    ],
  },
  {
    id: "medicine",
    number: "05",
    name: "医学部",
    en: "Faculty of Medicine",
    tagline: "生命の謎に挑み、人の健康と未来を守る。",
    description:
      "医学科・保健学科の2学科で構成される医学部。基礎医学から臨床医学・公衆衛生・看護科学まで幅広く学び、科学的根拠に基づいた医療と保健を実践できる医療人・研究者を育成します。",
    departments: [
      {
        id: "medicine-medicine",
        name: "医学科",
        body: "解剖・生理・病理・内科・外科・精神科など医学全領域を6年間で体系的に修める。",
      },
      {
        id: "medicine-health-sciences",
        name: "保健学科",
        body: "看護・放射線・検査・理学療法の4専攻で、チーム医療を支える保健専門職を育てる。",
      },
    ],
  },
];
