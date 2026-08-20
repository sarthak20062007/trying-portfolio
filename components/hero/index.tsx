"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { ArrowRight, Send } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

// Dynamic import to avoid SSR issues with WebGL
const Aurora = dynamic(() => import("@/components/ui/aurora"), {
  ssr: false,
});

// Roles for the rotating text
const roles = [
  "Full Stack Developer",
  "AI Developer",
  "Freelancer",
  "Problem Solver",
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Aurora Background — visible and vibrant */}
      <AuroraBackground />

      {/* Soft gradient overlays — just enough for text legibility without hiding Aurora */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent z-[1]" />

      {/* Hero Content */}
      <div className="relative z-[2] section-container flex flex-col items-center text-center pt-20">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-sm text-foreground-muted font-medium">
              Available for work
            </span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-[1.1] max-w-4xl"
        >
          Hi, I&apos;m{" "}
          <span className="text-accent">Sarthak</span>
          <br />
          <RotatingRoles />
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-base sm:text-lg text-foreground-muted max-w-xl leading-relaxed"
        >
          I design and build modern web applications and AI-powered solutions
          that are fast, accessible, and built to last.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          {/* Primary CTA */}
          <MagneticButton>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-white text-sm font-semibold transition-all duration-300 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25 hover:gap-3"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </MagneticButton>

          {/* Secondary CTA */}
          <MagneticButton>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 text-foreground text-sm font-semibold transition-all duration-300 hover:bg-white/5 hover:border-white/20 hover:gap-3"
            >
              Get In Touch
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-foreground-muted/50 uppercase tracking-widest">
              Scroll
            </span>
            <div className="w-5 h-8 rounded-full border-2 border-white/10 flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1 h-1.5 rounded-full bg-foreground-muted/50"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Aurora Background wrapper — keeps the effect subtle and contained.
 * Uses dark, muted color stops to avoid overwhelming the hero text.
 */
function AuroraBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Aurora />
    </div>
  );
}

/**
 * Simple rotating text that cycles through professional roles.
 * Uses a clean fade+slide transition.
 */
function RotatingRoles() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block relative h-[1.15em] overflow-hidden align-bottom">
      {roles.map((role, index) => (
        <motion.span
          key={role}
          className="absolute inset-0 text-foreground-muted/80"
          initial={{ y: "100%", opacity: 0 }}
          animate={{
            y: index === currentIndex ? "0%" : "-100%",
            opacity: index === currentIndex ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {role}
        </motion.span>
      ))}
    </span>
  );
}
