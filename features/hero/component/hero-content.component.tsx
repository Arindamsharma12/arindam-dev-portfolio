"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Download } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ROLES = ["Software Engineer", "Full Stack Developer", "Gen AI Developer"];
const DISPLAY_DURATION = 2500;

const HeroContent = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, DISPLAY_DURATION);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
      {/* Availability Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-neutral-900/[0.04] text-neutral-800 dark:border-white/10 dark:bg-white/5 dark:text-white/80 px-5 py-2 text-sm tracking-[0.2em] uppercase backdrop-blur-sm transition-colors duration-200"
      >
        <span className="h-2 w-2 rounded-full bg-amber-400" />
        Available on Demand
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-2 flex items-center gap-2 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-3xl lg:text-4xl transition-colors duration-200"
      >
        Hello! I&apos;m Arin.
        <Image
          src="https://wallmantra.com/inspiration/app/uploads/2026/10/waving-hand-skin-2-svgrepo-com.svg"
          alt=""
          aria-hidden="true"
          width={32}
          height={32}
          unoptimized
          className="h-[1em] w-[1em]"
        />
      </motion.h1>

      {/* Animated Role */}
      <div className="mb-6 h-[1.2em] text-3xl font-bold text-neutral-900 dark:text-white md:text-5xl lg:text-6xl transition-colors duration-200">
        <AnimatePresence mode="wait">
          <motion.span
            key={roleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="inline-block"
          >
            {ROLES[roleIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-white/70 md:text-lg transition-colors duration-200"
      >
        I build scalable full-stack applications, design robust software
        systems, and integrate Generative AI to solve real-world problems. From
        intuitive web and mobile experiences to reliable backend architectures
        and AI-powered workflows, I turn ideas into production-ready products.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <Button
          size="lg"
          className="rounded-full px-7 h-11 inline-flex items-center gap-2 cursor-pointer transition-all active:scale-95 shadow-sm"
          render={<a href="mailto:arindamsharma0123@gmail.com" />}
        >
          <Mail className="size-4" />
          <span>Let&apos;s Talk</span>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="rounded-full px-7 h-11 inline-flex items-center gap-2 cursor-pointer transition-all active:scale-95"
          render={
            <a
              href="https://drive.google.com/file/d/1FdJxIXm1uEbT4NPgiqU2BdTyNuCT-m7o/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            />
          }
        >
          <Download className="size-4" />
          <span>Resume</span>
        </Button>
      </motion.div>
    </div>
  );
};

export default HeroContent;
