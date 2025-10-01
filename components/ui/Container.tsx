"use client";

import { ReactNode } from "react";

interface ContainerProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function Container({
  id,
  children,
  className = "",
}: ContainerProps) {
  return (
    <section
      id={id}
      className={`relative z-10 py-24 px-8 xl:px-0 bg-background dark:bg-background-dark ${className}`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
