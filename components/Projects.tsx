"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Container from "./ui/Container";
import AnimatedHeader from "./ui/AnimatedHeader";

export default function Projects() {
  return (
    <Container id="projects">
      <AnimatedHeader
        label="PROJECTS"
        title="Building solutions with modern web technologies"
        className="mb-20 mt-6"
      />

      {/* Projects Grid */}
      <div className="space-y-0">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group"
          >
            <div className="border-t border-gray first:border-t-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 py-12">
                {/* Left Content - 2/3 */}
                <div className="lg:col-span-2 lg:pr-12 lg:border-r border-gray">
                  <div className="mb-3">
                    <h3 className="text-2xl heading-medium transition-colors text-primary">
                      {project.title}
                    </h3>
                  </div>
                  <p className="nav-text mb-6 text-secondary">
                    {project.category}
                  </p>
                  <div className="leading-relaxed text-primary">
                    {Array.isArray(project.description) ? (
                      <ul className="space-y-3">
                        {project.description.map((point, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[var(--text-secondary)] mr-3 mt-1 text-sm">
                              •
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>{project.description}</p>
                    )}
                  </div>
                </div>

                {/* Right Content - 1/3 */}
                <div className="lg:col-span-1 lg:pl-12 mt-8 lg:mt-0">
                  {/* Tech Stack */}
                  <div className="mb-6">
                    <p className="nav-text mb-4 text-secondary">Tech Stack</p>
                    <p className="text-sm leading-relaxed text-primary">
                      {project.tech}
                    </p>
                  </div>

                  {/* View Link */}
                  <div>
                    {project.url ? (
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        whileTap={{ y: 0 }}
                        className="group/btn inline-block"
                      >
                        <span className="transition-colors border-b border-gray pb-1 nav-text text-secondary hover:text-primary hover:border-accent">
                          View Project
                        </span>
                      </motion.a>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
