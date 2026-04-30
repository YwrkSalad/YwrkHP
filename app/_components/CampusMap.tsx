"use client";

import { useRef, useState, useCallback } from "react";

type Category = "faculty" | "research" | "facility" | "sports" | "admin" | "parking";

type BuildingData = {
  id: string;
  name: string;
  en: string;
  x: number;
  y: number;
  w: number;
  h: number;
  category: Category;
  description: string;
};

const ROAD = "#ccc8c2";
const CAMPUS_BG = "#ffffff";
const GRASS = "#c4d4c0";

const CAT: Record<Category, { fill: string; stroke: string; fg: string }> = {
  faculty:  { fill: "#5e8665", stroke: "#3c573f", fg: "#ffffff" },
  research: { fill: "#2d4030", stroke: "#1e2b20", fg: "#e5ede6" },
  facility: { fill: "#6b8fa0", stroke: "#4a6070", fg: "#ffffff" },
  sports:   { fill: "#a06840", stroke: "#6a4020", fg: "#ffffff" },
  admin:    { fill: "#556070", stroke: "#3a4450", fg: "#ffffff" },
  parking:  { fill: "#b8b4ae", stroke: "#8a8680", fg: "#4a4440" },
};

const BUILDINGS: BuildingData[] = [
  // Row 1 — y: 40–130
  {
    id: "admin",
    name: "総合管理棟",
    en: "Administration",
    x: 40, y: 40, w: 160, h: 90,
    category: "admin",
    description: "大学本部・事務局・学長室・広報室が入る総合管理棟。正門正面に位置する。",
  },
  {
    id: "grad1",
    name: "大学院研究棟 I",
    en: "Graduate School I",
    x: 240, y: 40, w: 150, h: 90,
    category: "research",
    description: "理工情報学研究科（修士・博士課程）。最先端実験設備と国際共同研究室を完備。年間 80+ 件の国際学会発表。",
  },
  {
    id: "grad2",
    name: "大学院研究棟 II",
    en: "Graduate School II",
    x: 405, y: 40, w: 150, h: 90,
    category: "research",
    description: "生命農学・医科学研究科（修士・博士課程）。WHO・FAO との共同研究拠点として国際的評価が高い。",
  },
  {
    id: "hospital",
    name: "附属病院",
    en: "University Hospital",
    x: 600, y: 40, w: 200, h: 90,
    category: "facility",
    description: "医学部附属病院。臨床実習・研修医受入施設として地域医療を広く支える 400 床規模の病院。",
  },
  // Row 2 — y: 165–275
  {
    id: "science",
    name: "理学部棟",
    en: "Faculty of Science",
    x: 40, y: 165, w: 160, h: 110,
    category: "faculty",
    description: "数学・物理学・化学・生物学・地球惑星科学・宇宙科学の6学科。大型実験室・観測ドームを備える。",
  },
  {
    id: "eng",
    name: "工学部棟",
    en: "Faculty of Engineering",
    x: 240, y: 165, w: 120, h: 110,
    category: "faculty",
    description: "機械航空・電気情報・建設環境・化学システム・材料科学の5学科。大型実習工場を併設。",
  },
  {
    id: "infosc",
    name: "情報科学部棟",
    en: "Faculty of Info. Sci.",
    x: 372, y: 165, w: 120, h: 110,
    category: "faculty",
    description: "情報工学・知能情報・生体情報・数理情報の4学科。高性能 GPU クラスタ・演算センターを整備。",
  },
  {
    id: "agri",
    name: "農学部棟",
    en: "Faculty of Agriculture",
    x: 600, y: 165, w: 100, h: 110,
    category: "faculty",
    description: "農業科学・生命機能・資源生物・応用生物化学の4学科。温室・実験農場・発酵実験室を有する。",
  },
  {
    id: "medicine",
    name: "医学部棟",
    en: "Faculty of Medicine",
    x: 710, y: 165, w: 90, h: 110,
    category: "faculty",
    description: "医学科・保健学科の2学科。解剖実習室・臨床シミュレーション室・医療機器研究室を完備。",
  },
  // Row 3 — y: 315–420
  {
    id: "library",
    name: "やわらか図書館",
    en: "Yawaraka Library",
    x: 40, y: 315, w: 160, h: 105,
    category: "facility",
    description: "蔵書 30 万冊。24時間学習スペース・グループ学習室・AV 視聴室・特殊コレクション閲覧室を完備。",
  },
  {
    id: "gym",
    name: "体育館",
    en: "Gymnasium",
    x: 600, y: 315, w: 200, h: 105,
    category: "sports",
    description: "メインアリーナ・サブアリーナ・トレーニングルームを備えた総合体育館。各種公式大会にも対応。",
  },
  // Row 4 — y: 460–520
  {
    id: "welfare",
    name: "厚生施設",
    en: "Student Welfare",
    x: 40, y: 460, w: 160, h: 60,
    category: "facility",
    description: "保健センター・学生相談室・キャリアセンター・証明書自動発行機が集まる総合厚生施設。",
  },
  {
    id: "cafeteria",
    name: "学生食堂",
    en: "Cafeteria",
    x: 240, y: 460, w: 140, h: 60,
    category: "facility",
    description: "定食・麺・丼など多彩なメニューを揃える。1,000 席以上を確保し、毎日 2,500 食を提供。",
  },
  {
    id: "scenter",
    name: "学生交流センター",
    en: "Student Center",
    x: 390, y: 460, w: 160, h: 60,
    category: "facility",
    description: "サークル活動室・多目的ホール・音楽スタジオ・DJ ブース（Pioneer CDJ-004504 × 4台、DDJ-A810 × 1台）を完備。",
  },
  {
    id: "parking",
    name: "駐車場",
    en: "Parking",
    x: 600, y: 460, w: 200, h: 60,
    category: "parking",
    description: "第1〜第3駐車場 合計 200 台。来客の方は守衛室（管理棟横）にご連絡ください。",
  },
];

const LEGEND: { category: Category; label: string }[] = [
  { category: "faculty",  label: "学部棟" },
  { category: "research", label: "大学院・研究棟" },
  { category: "facility", label: "共通施設" },
  { category: "sports",   label: "体育・課外施設" },
  { category: "admin",    label: "管理棟" },
  { category: "parking",  label: "駐車場" },
];

export default function CampusMap() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [lastShown, setLastShown] = useState<string | null>(null);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<{ sx: number; sy: number; ox: number; oy: number } | null>(null);

  const displayId = selected ?? lastShown;
  const activeBuilding = BUILDINGS.find((b) => b.id === displayId) ?? null;

  const onPointerDown = useCallback(
    (e: React.PointerEvent<SVGSVGElement>) => {
      if (e.button !== 0) return;
      dragRef.current = { sx: e.clientX, sy: e.clientY, ox: pan.x, oy: pan.y };
      setIsDragging(true);
      (e.currentTarget as SVGSVGElement).setPointerCapture(e.pointerId);
    },
    [pan],
  );

  const onPointerMove = useCallback((e: React.PointerEvent<SVGSVGElement>) => {
    if (!dragRef.current) return;
    const dx = e.clientX - dragRef.current.sx;
    const dy = e.clientY - dragRef.current.sy;
    setPan({ x: dragRef.current.ox + dx, y: dragRef.current.oy + dy });
  }, []);

  const onPointerUp = useCallback(() => {
    dragRef.current = null;
    setIsDragging(false);
  }, []);


  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
      {/* Map */}
      <div
        className="relative flex-1 overflow-hidden rounded border border-stone-200"
        style={{ height: 460 }}
      >
        {/* Zoom / reset buttons */}
        <div className="absolute top-3 right-3 z-10 flex flex-col gap-1">
          {(
            [
              { label: "+", action: () => setScale((s) => Math.min(4, s * 1.2)) },
              { label: "−", action: () => setScale((s) => Math.max(0.35, s * 0.8)) },
              {
                label: "⊙",
                action: () => {
                  setPan({ x: 0, y: 0 });
                  setScale(1);
                },
              },
            ] as const
          ).map(({ label, action }) => (
            <button
              key={label}
              onClick={action}
              className="flex h-8 w-8 items-center justify-center rounded border border-stone-200 bg-white text-sm text-zinc-600 shadow-sm hover:bg-stone-50 active:bg-stone-100"
            >
              {label}
            </button>
          ))}
        </div>

        {/* North indicator */}
        <div className="absolute bottom-3 right-3 z-10 flex h-7 w-7 select-none items-center justify-center rounded-full border border-stone-200 bg-white text-xs font-bold text-zinc-500 shadow-sm">
          N
        </div>

        <svg
          ref={svgRef}
          viewBox="0 0 840 570"
          className={`h-full w-full select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          style={{ touchAction: "none" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          onClick={() => setSelected(null)}
        >
          <g transform={`translate(${pan.x},${pan.y}) scale(${scale})`}>
            {/* Campus background */}
            <rect x={20} y={20} width={800} height={520} fill={CAMPUS_BG} rx={2} />

            {/* Roads — vertical separators */}
            <rect x={200} y={20} width={40} height={520} fill={ROAD} />
            <rect x={492} y={20} width={108} height={520} fill={ROAD} />
            {/* Green median in wider right road */}
            <rect x={530} y={20} width={18} height={520} fill={GRASS} />

            {/* Roads — horizontal row separators */}
            <rect x={20} y={130} width={800} height={35} fill={ROAD} />
            <rect x={20} y={275} width={800} height={40} fill={ROAD} />
            <rect x={20} y={420} width={800} height={40} fill={ROAD} />

            {/* Main entrance road */}
            <rect x={370} y={540} width={100} height={26} fill={ROAD} />

            {/* Central courtyard */}
            <rect x={240} y={315} width={252} height={105} fill={GRASS} rx={1} />
            <text
              x={366} y={372}
              textAnchor="middle"
              fill="#3c573f"
              fontSize={10}
              fontWeight={500}
            >
              中央広場
            </text>

            {/* Campus boundary */}
            <rect x={20} y={20} width={800} height={520} fill="none" stroke="#aac4ae" strokeWidth={2} rx={2} />

            {/* Gate marker */}
            <rect x={385} y={537} width={70} height={5} fill="#3c573f" rx={1} />
            <text x={420} y={554} textAnchor="middle" fill="#3c573f" fontSize={9} fontWeight={500}>
              正門
            </text>

            {/* Buildings */}
            {BUILDINGS.map((b) => {
              const s = CAT[b.category];
              const isSelected = b.id === selected;
              const isHovered = b.id === hovered;
              const cx = b.x + b.w / 2;
              const cy = b.y + b.h / 2;
              const fontSize = b.w >= 140 ? 11 : b.w >= 100 ? 10 : 9;
              const showEn = b.h >= 70;

              return (
                <g
                  key={b.id}
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => { setHovered(b.id); setLastShown(b.id); }}
                  onMouseLeave={() => setHovered(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected(selected === b.id ? null : b.id);
                  }}
                >
                  <rect
                    x={b.x} y={b.y} width={b.w} height={b.h}
                    fill={s.fill}
                    stroke={isSelected ? "#80a486" : b.id === lastShown ? "#aac4ae" : s.stroke}
                    strokeWidth={isSelected ? 3 : b.id === lastShown ? 2 : 1}
                    opacity={isHovered || isSelected || b.id === lastShown ? 1 : 0.9}
                    rx={1}
                  />
                  <text
                    x={cx}
                    y={showEn ? cy - 7 : cy}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill={s.fg}
                    fontSize={fontSize}
                    fontWeight={600}
                    style={{ pointerEvents: "none" }}
                  >
                    {b.name}
                  </text>
                  {showEn && (
                    <text
                      x={cx}
                      y={cy + 10}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill={s.fg}
                      fontSize={8}
                      opacity={0.75}
                      style={{ pointerEvents: "none" }}
                    >
                      {b.en}
                    </text>
                  )}
                </g>
              );
            })}
          </g>
        </svg>
      </div>

      {/* Sidebar */}
      <div className="flex flex-col gap-4 lg:w-64">
        {/* Building info */}
        <div
          className={`min-h-28 rounded border p-5 transition-colors ${
            activeBuilding
              ? "border-accent-200 bg-accent-50"
              : "border-stone-100 bg-stone-50"
          }`}
        >
          {activeBuilding ? (
            <>
              <p className="mb-1 text-[10px] font-medium uppercase tracking-widest text-accent-600">
                {activeBuilding.en}
              </p>
              <h3 className="mb-2 text-sm font-semibold text-zinc-900">
                {activeBuilding.name}
              </h3>
              <p className="text-xs leading-relaxed text-stone-600">
                {activeBuilding.description}
              </p>
            </>
          ) : (
            <p className="text-xs text-stone-400">
              建物をクリックまたはホバーすると詳細が表示されます。
            </p>
          )}
        </div>

        {/* Legend */}
        <div className="rounded border border-stone-100 bg-white p-5">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-widest text-stone-400">
            凡例
          </p>
          <div className="space-y-2">
            {LEGEND.map(({ category, label }) => (
              <div key={category} className="flex items-center gap-2.5">
                <span
                  className="h-3 w-5 shrink-0 rounded-sm"
                  style={{
                    background: CAT[category].fill,
                    border: `1px solid ${CAT[category].stroke}`,
                  }}
                />
                <span className="text-xs text-stone-600">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs leading-relaxed text-stone-400">
          ドラッグで移動・スクロールまたはボタンで拡大縮小
        </p>
      </div>
    </div>
  );
}
