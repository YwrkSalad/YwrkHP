type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
  className = description ? "mb-8 sm:mb-12" : "mb-10 sm:mb-14",
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div className={`${className} ${align === "center" ? "text-center" : ""}`}>
      <p
        className={
          eyebrowClassName ??
          `mb-3 text-xs font-medium tracking-[0.3em] uppercase ${
            isDark ? "text-white/60" : "text-accent-600"
          }`
        }
      >
        {eyebrow}
      </p>
      <h2
        className={
          titleClassName ??
          `text-2xl font-semibold tracking-tight ${
            isDark ? "text-white" : "text-zinc-900"
          } sm:text-4xl`
        }
      >
        {title}
      </h2>
      {description && (
        <p
          className={
            descriptionClassName ??
            `mt-4 text-base font-light ${
              isDark ? "text-white/75" : "text-stone-500"
            }`
          }
        >
          {description}
        </p>
      )}
    </div>
  );
}
