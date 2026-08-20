"use client";

import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    title: "Full Stack Development",
    description:
      "End-to-end web application development using modern frameworks like Next.js, React, and Node.js. Building scalable architectures with robust databases.",
    link: "#service-1",
  },
  {
    title: "AI Integration & LLMs",
    description:
      "Integrating cutting-edge machine learning models and LLMs into existing products. Developing custom RAG pipelines and intelligent agents.",
    link: "#service-2",
  },
  {
    title: "UI/UX & Design Systems",
    description:
      "Translating brand requirements into accessible, responsive, and beautiful user interfaces using Tailwind CSS and component libraries.",
    link: "#service-3",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Deploying scalable infrastructure using Docker, Vercel, and cloud providers. Setting up CI/CD pipelines for seamless delivery.",
    link: "#service-4",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
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
            What I Do
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight">
            My Services
          </h2>
          <p className="mt-4 text-foreground-muted max-w-lg mx-auto">
            Providing comprehensive technical solutions tailored to modern business needs.
          </p>
        </motion.div>

        {/* Services Grid with Hover Effect */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="max-w-5xl mx-auto">
            <HoverEffect items={services} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
