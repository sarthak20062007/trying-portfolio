"use client";

import React from "react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { Code2, Globe, Sparkles } from "lucide-react";

const TiltedCard = dynamic(() => import("@/components/ui/tilted-card"), {
  ssr: false,
});

const highlights = [
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Full Stack",
    description: "End-to-end development from intuitive frontends to robust backends.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "AI-Powered",
    description: "Integrating intelligent solutions that solve real-world problems.",
  },
];

// Shared animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight">
            Turning ideas into
            <br />
            <span className="text-foreground-muted">digital reality.</span>
          </h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Profile visual card */}
            <div className="w-full max-w-sm mx-auto lg:mx-0">
              <TiltedCard
                imageSrc="/images/about-profile.jpg"
                altText="Sarthak's workspace"
                captionText="My Setup"
                containerHeight="280px"
                containerWidth="100%"
                imageHeight="280px"
                imageWidth="100%"
                scaleOnHover={1.05}
                rotateAmplitude={8}
                showMobileWarning={false}
                showTooltip={true}
              />
            </div>

            <p className="text-base sm:text-lg leading-relaxed">
              I&apos;m a developer deeply interested in Full Stack Development, AI, and cybersecurity. 
              I love building practical software projects that solve real problems, focusing on writing 
              clean, performant code and creating intuitive user experiences.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Whether I&apos;m developing a responsive web application, integrating AI capabilities, or 
              exploring secure coding practices, I bring a strong combination of technical depth and 
              curiosity to every project.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring emerging technologies, expanding 
              my knowledge in cybersecurity, or experimenting with new tools to improve my 
              development workflow.
            </p>
          </motion.div>

          {/* Right — Highlight cards */}
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.15 * index }}
                className="group flex items-start gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02] transition-colors duration-300 hover:bg-white/[0.04] hover:border-white/10"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
