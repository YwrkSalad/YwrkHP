import type { ReactNode } from "react";
import Image from "next/image";

type PageSectionProps = {
  children: ReactNode;
  as?: "section" | "footer";
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
  as: Element = "section",
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
    <Element
      id={id}
      className={`${imageSrc ? "relative overflow-hidden" : ""} px-6 ${className}`}
    >
      {imageSrc && (
        <Image src={imageSrc} alt={imageAlt} fill className={imageClassName} />
      )}
      {overlayClassName && <div className={overlayClassName} />}
      <div className={`mx-auto ${containerClassName} ${innerClassName ?? ""}`}>
        {children}
      </div>
    </Element>
  );
}
