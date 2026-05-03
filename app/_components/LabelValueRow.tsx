type LabelValueRowProps = {
  label: string;
  value: string;
  labelWidth?: string;
};

export default function LabelValueRow({
  label,
  value,
  labelWidth = "w-36",
}: LabelValueRowProps) {
  return (
    <div className="flex gap-4 px-4 py-3">
      <span className={`${labelWidth} shrink-0 text-xs text-stone-500`}>
        {label}
      </span>
      <span className="text-sm text-zinc-700">{value}</span>
    </div>
  );
}
