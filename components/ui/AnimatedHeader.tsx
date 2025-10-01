"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedHeaderProps {
  label: string;
  title?: string | ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedHeader({
  label,
  title,
  className = "mb-16",
  delay = 0,
}: AnimatedHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      <p className="nav-text mb-4" style={{ color: "var(--text-light)" }}>
        {label}
      </p>
      {typeof title === "string" ? (
        <h2
          className="text-5xl heading-medium leading-tight max-w-2xl"
          style={{ color: "var(--foreground)" }}
        >
          {title}
        </h2>
      ) : (
        title
      )}
    </motion.div>
  );
}
