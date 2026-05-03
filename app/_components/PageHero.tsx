import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageClassName?: string;
  variant?: "darkImage" | "plain" | "lightImage";
};

export default function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt = "",
  imageClassName = "object-cover object-center",
  variant = imageSrc ? "darkImage" : "plain",
}: PageHeroProps) {
  if (variant === "darkImage") {
    return (
      <section className="relative flex h-52 overflow-hidden px-5 sm:h-96 sm:px-6">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className={imageClassName}
            priority
          />
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col justify-end pb-6 sm:pb-11">
          <div>
            <p className="mb-2 text-xs font-medium tracking-[0.3em] text-white/70 uppercase">
              {eyebrow}
            </p>
            <h1 className="text-xl font-semibold tracking-tight text-white sm:text-4xl">
              {title}
            </h1>
            {description && (
              <p className="mt-2 text-xs leading-relaxed font-light text-white/75 sm:mt-3 sm:text-sm">
                {description}
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={
        variant === "lightImage"
          ? "relative overflow-hidden px-5 py-8 sm:px-6 sm:py-20"
          : "bg-stone-50 px-5 py-8 sm:px-6 sm:py-20"
      }
    >
      {variant === "lightImage" && imageSrc && (
        <>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            className={imageClassName}
          />
          <div className="absolute inset-0 bg-white/70" />
        </>
      )}
      <div className="relative mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-accent-600 mb-2 text-xs font-medium tracking-[0.3em] uppercase">
            {eyebrow}
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-3 text-sm font-light text-stone-500 sm:mt-4 sm:text-base">
              {description}
            </p>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
