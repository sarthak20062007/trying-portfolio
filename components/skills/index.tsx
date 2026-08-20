"use client";

import React from "react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LogoLoop = dynamic<any>(
  () => import("@/components/ui/logo-loop").then((mod) => mod.LogoLoop),
  { ssr: false }
);

// Skill categories with technologies
const frontendSkills = [
  { node: <span>React</span>, title: "React" },
  { node: <span>Next.js</span>, title: "Next.js" },
  { node: <span>TypeScript</span>, title: "TypeScript" },
  { node: <span>JavaScript</span>, title: "JavaScript" },
  { node: <span>Tailwind CSS</span>, title: "Tailwind CSS" },
  { node: <span>HTML5</span>, title: "HTML5" },
  { node: <span>CSS3</span>, title: "CSS3" },
  { node: <span>Redux</span>, title: "Redux" },
];

const backendSkills = [
  { node: <span>Node.js</span>, title: "Node.js" },
  { node: <span>Express</span>, title: "Express" },
  { node: <span>Python</span>, title: "Python" },
  { node: <span>FastAPI</span>, title: "FastAPI" },
  { node: <span>PostgreSQL</span>, title: "PostgreSQL" },
  { node: <span>MongoDB</span>, title: "MongoDB" },
  { node: <span>Firebase</span>, title: "Firebase" },
  { node: <span>REST APIs</span>, title: "REST APIs" },
];

const toolsAndAI = [
  { node: <span>Git</span>, title: "Git" },
  { node: <span>Docker</span>, title: "Docker" },
  { node: <span>Vercel</span>, title: "Vercel" },
  { node: <span>OpenAI</span>, title: "OpenAI" },
  { node: <span>LangChain</span>, title: "LangChain" },
  { node: <span>TensorFlow</span>, title: "TensorFlow" },
  { node: <span>Figma</span>, title: "Figma" },
  { node: <span>Linux</span>, title: "Linux" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Tech Stack
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight">
            Technologies I work with
          </h2>
          <p className="mt-4 text-foreground-muted max-w-lg mx-auto">
            A curated set of modern tools and frameworks I use to build
            performant, scalable applications.
          </p>
        </motion.div>
      </div>

      {/* Logo loops — full width, stacked */}
      <div className="space-y-6">
        {/* Frontend row — scrolls left */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <LogoLoop
            logos={frontendSkills}
            speed={60}
            direction="left"
            logoHeight={40}
            gap={24}
            pauseOnHover={true}
            fadeOut={true}
            fadeOutColor="#0a0a0a"
            scaleOnHover={true}
            ariaLabel="Frontend technologies"
            className="skills-loop"
          />
        </motion.div>

        {/* Backend row — scrolls right */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <LogoLoop
            logos={backendSkills}
            speed={60}
            direction="right"
            logoHeight={40}
            gap={24}
            pauseOnHover={true}
            fadeOut={true}
            fadeOutColor="#0a0a0a"
            scaleOnHover={true}
            ariaLabel="Backend technologies"
            className="skills-loop"
          />
        </motion.div>

        {/* Tools & AI row — scrolls left */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <LogoLoop
            logos={toolsAndAI}
            speed={60}
            direction="left"
            logoHeight={40}
            gap={24}
            pauseOnHover={true}
            fadeOut={true}
            fadeOutColor="#0a0a0a"
            scaleOnHover={true}
            ariaLabel="Tools and AI technologies"
            className="skills-loop"
          />
        </motion.div>
      </div>
    </section>
  );
}
