"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const experienceData = [
  {
    title: "Present",
    content: (
      <div>
        <h4 className="text-xl font-bold text-foreground mb-1">Senior AI Engineer</h4>
        <p className="text-accent text-sm md:text-base font-semibold mb-4">
          Tech Innovators Inc.
        </p>
        <div className="text-foreground-muted text-sm md:text-base leading-relaxed space-y-4">
          <p>
            Leading the integration of Large Language Models (LLMs) into enterprise SaaS products. 
            Designed and implemented a scalable retrieval-augmented generation (RAG) pipeline 
            that reduced hallucination rates by 40% and improved customer satisfaction.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-foreground-muted">Python</span>
            <span className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-foreground-muted">TensorFlow</span>
            <span className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-foreground-muted">Next.js</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <h4 className="text-xl font-bold text-foreground mb-1">Full Stack Developer</h4>
        <p className="text-accent text-sm md:text-base font-semibold mb-4">
          Creative Web Agency
        </p>
        <div className="text-foreground-muted text-sm md:text-base leading-relaxed space-y-4">
          <p>
            Developed high-performance e-commerce platforms and interactive marketing sites for Fortune 500 clients. 
            Architected the migration from a monolithic legacy system to a serverless Next.js architecture, 
            improving PageSpeed scores from 45 to 98.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-foreground-muted">React</span>
            <span className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-foreground-muted">TypeScript</span>
            <span className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-foreground-muted">Node.js</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <div>
        <h4 className="text-xl font-bold text-foreground mb-1">Frontend Developer</h4>
        <p className="text-accent text-sm md:text-base font-semibold mb-4">
          Startup Hub
        </p>
        <div className="text-foreground-muted text-sm md:text-base leading-relaxed space-y-4">
          <p>
            Built responsive and accessible user interfaces from scratch using React and Tailwind CSS. 
            Collaborated closely with UX designers to implement complex animations and data visualizations 
            for an analytics dashboard used by over 10,000 daily active users.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-foreground-muted">JavaScript</span>
            <span className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-foreground-muted">Tailwind CSS</span>
            <span className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-foreground-muted">Figma</span>
          </div>
        </div>
      </div>
    ),
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 bg-background/50">
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
            Career
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight">
            Professional Journey
          </h2>
          <p className="mt-4 text-foreground-muted max-w-lg mx-auto">
            A timeline of my professional experience, showcasing my growth and the impactful projects I&apos;ve contributed to.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TracingBeam className="px-6 md:px-0">
            <div className="bg-transparent">
              <Timeline data={experienceData} />
            </div>
          </TracingBeam>
        </motion.div>
      </div>
    </section>
  );
}
