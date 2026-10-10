"use client";

import React, { useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { TECH_BY_ROW } from "../data/tech.data";
import TechCard from "../component/tech-card.component";
import TechGridMesh from "../component/tech-grid-mesh.component";

// Dynamically import PrismaticBurst to prevent any SSR hydration mismatch
const PrismaticBurst = dynamic(
  () => import("@/components/PrismaticBurst"),
  { ssr: false }
);

const emptySubscribe = () => () => {};

export const TechScreen = () => {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  return (
    <section
      id="skills"
      aria-label="Technologies and Skills"
      className="relative min-h-screen lg:h-screen w-full bg-black text-white px-4 sm:px-6 lg:px-12 overflow-hidden flex flex-col items-center justify-center select-none py-20 lg:py-0"
    >
      {/* Anchor alias for #tech */}
      <span id="tech" className="sr-only" aria-hidden="true" />

      {/* 1. Dynamic WebGL Shader Background (PrismaticBurst in Black & Electric Blue Theme) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {isMounted && (
          <PrismaticBurst
            intensity={1.7}
            speed={0.25}
            animationType="rotate3d"
            colors={[
              "#020617",
              "#081344",
              "#102372",
              "#1e40af",
              "#2563eb",
              "#5227FF",
              "#38bdf8",
            ]}
            distort={0}
            rayCount={12}
            mixBlendMode="screen"
          />
        )}
      </div>

      {/* 2. Curved Perspective Tunnel Grid Overlay */}
      <TechGridMesh />

      {/* 3. Cosmic Radial Glow in vanishing horizon */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="w-[600px] h-[400px] sm:w-[900px] sm:h-[600px] rounded-full bg-[#5227FF]/15 blur-[120px]" />
      </div>

      {/* 4. Top and Bottom Vignette Blends */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-black/60 to-transparent z-[3]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/60 to-transparent z-[3]"
        aria-hidden="true"
      />

      {/* Content wrapper aligned with max-w-7xl grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
        {/* 5. Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-950/40 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.25em] text-blue-300 backdrop-blur-md mb-3 sm:mb-4 shadow-[0_0_15px_rgba(82,39,255,0.25)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#5227FF] animate-pulse" />
            Tech Stack & Arsenal
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 sm:mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
          >
            Technologies & Frameworks
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base text-blue-200/70 max-w-xl mx-auto leading-relaxed"
          >
            A comprehensive suite of modern technologies, cloud systems, and AI models
            I leverage to build resilient, high-performance applications.
          </motion.p>
        </div>

        {/* 6. Staggered Tapered Rows of Translucent Glass Liquid Cards */}
        <div className="w-full flex flex-col items-center gap-2 sm:gap-2.5 md:gap-3">
          {/* ROW 1: 10 Cards */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5 w-full">
            {TECH_BY_ROW[1].map((skill, idx) => (
              <TechCard key={skill.id} skill={skill} index={idx} />
            ))}
          </div>

          {/* ROW 2: 9 Cards */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5 w-full">
            {TECH_BY_ROW[2].map((skill, idx) => (
              <TechCard key={skill.id} skill={skill} index={10 + idx} />
            ))}
          </div>

          {/* ROW 3: 8 Cards */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5 w-full">
            {TECH_BY_ROW[3].map((skill, idx) => (
              <TechCard key={skill.id} skill={skill} index={19 + idx} />
            ))}
          </div>

          {/* ROW 4: 7 Cards */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5 w-full">
            {TECH_BY_ROW[4].map((skill, idx) => (
              <TechCard key={skill.id} skill={skill} index={27 + idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechScreen;
