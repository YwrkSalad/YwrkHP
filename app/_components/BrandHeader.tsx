type Props = {
  brand?: string;
  section: string;
  textClassName?: string;
  dividerClassName?: string;
  className?: string;
};

export default function BrandHeader({
  brand = "ywrk",
  section,
  textClassName = "text-xs font-medium tracking-[0.3em] text-stone-500 uppercase",
  dividerClassName = "h-px w-8 bg-stone-300",
  className = "flex flex-col gap-3",
}: Props) {
  return (
    <div className={className}>
      <p className={textClassName}>{brand}</p>
      <div className={dividerClassName} />
      <p className={textClassName}>{section}</p>
    </div>
  );
}
