import type { ReactNode } from "react";
import Image from "next/image";

type PageSectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  innerClassName?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageClassName?: string;
  overlayClassName?: string;
};

export default function PageSection({
  children,
  id,
  className = "bg-white py-24",
  containerClassName = "max-w-5xl",
  innerClassName,
  imageSrc,
  imageAlt = "",
  imageClassName = "object-cover object-center",
  overlayClassName,
}: PageSectionProps) {
  return (
    <section
      id={id}
      className={`${imageSrc ? "relative overflow-hidden" : ""} ${className}`}
    >
      {imageSrc && (
        <Image src={imageSrc} alt={imageAlt} fill className={imageClassName} />
      )}
      {overlayClassName && <div className={overlayClassName} />}
      <div
        className={`mx-auto px-5 sm:px-6 ${containerClassName} ${innerClassName ?? ""}`}
      >
        {children}
      </div>
    </section>
  );
}
