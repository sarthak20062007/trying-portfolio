"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconArrowRight,
  IconBrandGithub,
  IconExternalLink
} from "@tabler/icons-react";
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
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
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-4 text-foreground-muted max-w-lg mx-auto">
            A showcase of my recent work in web development and AI, highlighting my focus on user experience and scalable architecture.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <BentoGrid className="max-w-7xl mx-auto">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={
                  <div className="flex flex-col gap-3 mt-2">
                    <span className="text-sm text-foreground-muted">{item.description}</span>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mt-1">
                      {item.techStack.map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-foreground-muted">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 mt-2">
                      {item.githubLink && (
                        <a href={item.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs font-medium text-foreground hover:text-accent transition-colors">
                          <IconBrandGithub className="w-4 h-4" /> Code
                        </a>
                      )}
                      {item.liveLink && (
                        <a href={item.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs font-medium text-foreground hover:text-accent transition-colors">
                          <IconExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                }
                header={item.header}
                icon={item.icon}
                className={i === 0 || i === 3 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}

const Skeleton = ({ className }: { className?: string }) => (
  <div
    className={`flex flex-1 w-full h-full min-h-[12rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 transition-transform duration-500 ease-out group-hover/bento:scale-105 ${className}`}
  ></div>
);

const items = [
  {
    title: "AI-Powered Analytics Dashboard",
    description: "A comprehensive dashboard that leverages machine learning to predict user behavior and visualize complex data sets in real-time.",
    header: <Skeleton className="bg-gradient-to-br from-blue-900/50 to-purple-900/50" />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    techStack: ["Next.js", "React", "Python", "TensorFlow", "Tailwind CSS"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "A high-performance storefront built with modern web technologies, featuring seamless checkout and inventory management.",
    header: <Skeleton className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50" />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Real-time Collaboration Tool",
    description: "A workspace for remote teams to collaborate on documents and projects simultaneously with live cursor tracking.",
    header: <Skeleton className="bg-gradient-to-br from-orange-900/50 to-red-900/50" />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    techStack: ["TypeScript", "Socket.io", "Express", "MongoDB"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Financial Portfolio Manager",
    description: "An intuitive application for tracking investments, analyzing market trends, and managing personal wealth securely.",
    header: <Skeleton className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50" />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    techStack: ["Next.js", "Prisma", "Tailwind CSS", "Chart.js"],
    githubLink: "#",
    liveLink: "#",
  },
];
