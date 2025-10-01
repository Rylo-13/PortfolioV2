"use client";

import { motion } from "framer-motion";

interface ScrollButtonProps {
  targetSection: string;
  text?: string;
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function ScrollButton({ targetSection, text = "Scroll" }: ScrollButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.2 }}
      className="absolute bottom-12 left-8"
    >
      <motion.button
        onClick={() => scrollToSection(targetSection)}
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="transition-colors nav-text text-secondary hover:text-primary cursor-pointer"
      >
        {text}
      </motion.button>
    </motion.div>
  );
}