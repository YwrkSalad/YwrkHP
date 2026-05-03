type StatBlockProps = {
  num: string;
  unit?: string;
  label: string;
  tone?: "light" | "dark";
};

export default function StatBlock({
  num,
  unit,
  label,
  tone = "light",
}: StatBlockProps) {
  if (tone === "dark") {
    return (
      <div className="rounded border border-white/15 bg-zinc-950/45 p-5 text-center">
        <p className="text-xl font-bold text-white sm:text-2xl">{num}</p>
        <p className="mt-1 text-xs text-zinc-300">{label}</p>
      </div>
    );
  }
  return (
    <div className="bg-accent-50 border-accent-100 rounded-md border p-6 text-center">
      <p className="text-accent-700 text-2xl font-semibold sm:text-3xl">
        {num}
        {unit && <span className="text-lg text-stone-400">{unit}</span>}
      </p>
      <p className="mt-1 text-xs text-stone-500">{label}</p>
    </div>
  );
}
