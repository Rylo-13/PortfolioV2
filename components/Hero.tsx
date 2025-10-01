"use client";

import { motion } from "framer-motion";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex items-center px-8 xl:px-0 pt-20 bg-background"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h1 className="text-7xl md:text-7xl heading-medium leading-none text-primary">
                Building Web3
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="space-y-6"
            >
              <p className="text-lg body-text leading-relaxed max-w-lg text-primary">
                I create intuitive applications with a focus on user experience.
                Making complex blockchain interactions feel simple.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Large Typography */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="text-right">
              <h2 className="text-8xl heading-large leading-none opacity-20 text-primary">
                Creative
                <br />
                Developer
              </h2>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-8"
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="transition-colors nav-text text-secondary cursor-pointer"
          >
            Scroll
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
