"use client";

import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  blur?: boolean;
}

export default function ScrollReveal({
  children,
  delay = 0,
  className,
  blur = false,
}: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36, ...(blur ? { filter: "blur(6px)" } : {}) }}
      whileInView={{
        opacity: 1,
        y: 0,
        ...(blur ? { filter: "blur(0px)" } : {}),
      }}
      transition={{ duration: 1.4, delay, ease }}
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}
