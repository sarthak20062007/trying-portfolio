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
        <h4 className="text-xl font-bold text-foreground mb-1">Cybersecurity / Security-Focused Developer</h4>
        <p className="text-accent text-sm md:text-base font-semibold mb-4">
          Independent Project Experience
        </p>
        <div className="text-foreground-muted text-sm md:text-base leading-relaxed space-y-4">
          <p>
            Hands-on experience building and working on cybersecurity-focused software, with a focus on identifying suspicious activity, security monitoring, threat detection, and developing practical security solutions.
          </p>
          <p>
            Built GuardNet, an insider-threat detection system designed to monitor employee activity, identify suspicious behavior, calculate risk scores, and provide real-time security alerts.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Cybersecurity", "Threat Detection", "Security Monitoring", "Python", "Web Development", "Burp Suite"].map((tech) => (
              <span key={tech} className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-foreground-muted">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Oct 2025",
    content: (
      <div>
        <h4 className="text-xl font-bold text-foreground mb-1">Cyber Job Simulation</h4>
        <p className="text-accent text-sm md:text-base font-semibold mb-4">
          Deloitte Australia
        </p>
        <div className="text-foreground-muted text-sm md:text-base leading-relaxed space-y-4">
          <p>
            Completed a virtual job simulation provided by Forage. 
            <br />
            <span className="text-xs uppercase tracking-wider font-semibold text-foreground-muted/70">Credential ID: Hm8coGTXSaqGCzK53</span>
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-xs px-2 py-1 rounded-md bg-accent/10 border border-accent/20 text-accent font-medium">Virtual Job Simulation</span>
            <span className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-foreground-muted">Forage</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Oct 2025",
    content: (
      <div>
        <h4 className="text-xl font-bold text-foreground mb-1">Data Analytics Job Simulation</h4>
        <p className="text-accent text-sm md:text-base font-semibold mb-4">
          Deloitte Australia
        </p>
        <div className="text-foreground-muted text-sm md:text-base leading-relaxed space-y-4">
          <p>
            Completed a virtual job simulation provided by Forage.
            <br />
            <span className="text-xs uppercase tracking-wider font-semibold text-foreground-muted/70">Credential ID: EXwfBtWHhL5nDrnGp</span>
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-xs px-2 py-1 rounded-md bg-accent/10 border border-accent/20 text-accent font-medium">Virtual Job Simulation</span>
            <span className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-foreground-muted">Forage</span>
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
