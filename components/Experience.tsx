"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import Container from "./ui/Container";
import AnimatedHeader from "./ui/AnimatedHeader";

export default function Experience() {
  return (
    <Container id="experience">
      <AnimatedHeader
        label="EXPERIENCE"
        title="Solving complex problems and shipping meaningful products."
        className="mb-20 mt-6"
      />

      {/* Experience Timeline */}
      <div className="space-y-12">
        {experience.map((job, index) => (
          <motion.div
            key={job.role}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8 border-b border-gray last:border-b-0">
              {/* Period & Location */}
              <div className="lg:col-span-1">
                <p className="nav-text mb-2 text-secondary">{job.period}</p>
                <p className="nav-text text-secondary">{job.location}</p>
              </div>

              {/* Role & Company */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="text-2xl heading-medium mb-2 text-primary">
                    {job.role}
                  </h3>
                  <p className="text-lg body-text mb-4 text-primary">
                    {job.company}
                  </p>
                  <p className="leading-relaxed text-primary">
                    {job.description}
                  </p>
                </div>

                {/* Key Achievements */}
                <div>
                  <p className="nav-text mb-3 text-secondary">
                    Key Achievements
                  </p>
                  <ul className="space-y-2 pl-1">
                    {job.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-sm body-text text-primary leading-relaxed flex"
                      >
                        <span className="text-secondary mr-3 flex-shrink-0">
                          •
                        </span>
                        <span className="flex-1">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
