"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "./ui/Container";
import AnimatedHeader from "./ui/AnimatedHeader";

export default function About() {
  return (
    <Container id="about">
      <AnimatedHeader
        label="ABOUT"
        title={
          <>
            <h2 className="text-4xl heading-medium leading-tight max-w-2xl text-primary">
              Frontend Developer
            </h2>
          </>
        }
        className="mt-10"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column - Bio & Tech */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="space-y-6 gap-8 py-8">
            <p className="leading-relaxed text-primary">
              Hi, I&rsquo;m Rylan. I design and build modern frontend
              applications with a focus on user experience, performance, and
              clean architecture. I specialize in creating scalable React
              applications and building complex, data-driven interfaces.
            </p>

            <p className="leading-relaxed text-primary">
              My journey into software development began in 2020, leading me
              through a full-stack bootcamp in Melbourne and into professional
              work at{" "}
              <a
                href="https://www.blockmajority.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] relative group"
              >
                Block Majority
                <span
                  className="absolute -bottom-0 left-0 w-full h-px navbar-underline block"
                  style={{ backgroundColor: "var(--accent)" }}
                />
              </a>
              . There I&rsquo;ve delivered 4+ applications for clients,
              including contracted work with ANZ designing and building
              enterprise-grade features and financial technology solutions.
            </p>

            <p className="leading-relaxed text-primary">
              When I&rsquo;m away from the keyboard, I&rsquo;m usually
              problem-solving on my skateboard. After two decades on the board,
              I apply the same mindset and habits to building software &mdash;
              iteration, determination, resilience, attention to detail, and
              creative thinking.
            </p>
          </div>

          <div>
            <p className="nav-text mb-6 text-secondary">TECHNOLOGIES</p>
            <div className="grid grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="pb-2 border-b-[0.1px] border-[var(--foreground)]">
                  <p className="text-primary font-semibold">Frontend</p>
                </div>
                <p className="text-primary">JavaScript</p>
                <p className="text-primary">TypeScript</p>
                <p className="text-primary">React</p>
                <p className="text-primary">Next.js</p>
                <p className="text-primary">Tailwind CSS</p>
              </div>
              <div className="space-y-4">
                <div className="pb-2 border-b-[0.1px] border-[var(--foreground)]">
                  <p className="text-primary font-semibold">Web3</p>
                </div>
                <p className="text-primary">Solidity</p>
                <p className="text-primary">Ethers.js</p>
                <p className="text-primary">Wagmi</p>
                <p className="text-primary">Hardhat</p>
                <p className="text-primary">LayerZero</p>
              </div>
              <div className="space-y-4">
                <div className="pb-2 border-b-[0.1px] border-[var(--foreground)]">
                  <p className="text-primary font-semibold">Tools</p>
                </div>
                <p className="text-primary">Vercel</p>
                <p className="text-primary">AWS</p>
                <p className="text-primary">GraphQL</p>
                <p className="text-primary">GitHub</p>
                <p className="text-primary">GitLab</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-80">
            <Image
              src="/rylan-rita.webp"
              alt="Rylan McNeil"
              fill
              className="object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
              sizes="(max-width: 768px) 100vw, 320px"
              quality={85}
              priority
            />
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
