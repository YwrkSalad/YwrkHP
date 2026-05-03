import TagBadge from "./TagBadge";

type FeatureCardProps = {
  eyebrow?: string;
  title: string;
  body: string;
  tags?: string[];
  tagVariant?: "accent" | "dark";
  center?: boolean;
  border?: boolean;
};

export default function FeatureCard({
  eyebrow,
  title,
  body,
  tags,
  tagVariant = "accent",
  center = false,
  border = false,
}: FeatureCardProps) {
  const borderClass = border
    ? center
      ? "border border-accent-100"
      : "border border-stone-200"
    : "";
  const barClass = center ? "bg-accent-400 mx-auto" : "bg-accent-300";

  return (
    <div
      className={`flex h-full flex-col rounded-md bg-white p-4 sm:p-7 ${borderClass} ${center ? "text-center" : ""}`}
    >
      <div className={`${barClass} mb-4 h-1 w-8 rounded`} />
      {eyebrow && (
        <p className="text-accent-600 mb-2 min-h-4 text-xs tracking-widest uppercase">
          {eyebrow}
        </p>
      )}
      <h3 className="mb-3 min-h-7 text-base font-semibold text-zinc-900">
        {title}
      </h3>
      <p className="text-xs leading-relaxed text-stone-500">{body}</p>
      {tags && tags.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {tags.map((t) => (
            <TagBadge key={t} variant={tagVariant}>
              {t}
            </TagBadge>
          ))}
        </div>
      )}
    </div>
  );
}
