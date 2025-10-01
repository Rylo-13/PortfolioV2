"use client";

import { motion } from "framer-motion";
import Container from "./ui/Container";
import ScrollButton from "./ui/ScrollButton";

export default function Contact() {
  return (
    <Container id="contact">
      <div className="flex flex-col items-center justify-center text-center space-y-10 my-22">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-2xl text-secondary pb-2">GET IN TOUCH</h2>
          <p className="text-lg leading-relaxed text-secondary max-w-xl">
            Feel free to message me about development work, potential
            collaboration, or just to say hi!
          </p>
        </motion.div>

        <motion.a
          href="mailto:rylanjmcneil@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center space-x-3 px-8 py-4 border border-[var(--accent)] text-[var(--accent)] bg-transparent hover:bg-[var(--accent)] hover:text-[var(--background)] transition-all duration-300 nav-text cursor-pointer rounded"
        >
          <span>EMAIL ME</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </motion.a>
      </div>

      <ScrollButton targetSection="home" text="Scroll to top" />
    </Container>
  );
}
