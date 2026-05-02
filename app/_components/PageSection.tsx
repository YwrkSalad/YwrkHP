import type { ReactNode } from "react";

type PageSectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  innerClassName?: string;
};

export default function PageSection({
  children,
  id,
  className = "bg-white py-24",
  containerClassName = "max-w-5xl",
  innerClassName,
}: PageSectionProps) {
  return (
    <section id={id} className={className}>
      <div
        className={`mx-auto px-5 sm:px-6 ${containerClassName} ${innerClassName ?? ""}`}
      >
        {children}
      </div>
    </section>
  );
}
