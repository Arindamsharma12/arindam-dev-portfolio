"use client";

import React, { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import ProjectCard from "../component/project-card.component";
import { PROJECTS_DATA } from "../data/projects.data";

export function ProjectsScreen() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const count = PROJECTS_DATA.length;
    if (count <= 1) return;
    const step = 1 / count;
    // Map scroll progress [0, 1] evenly across project indices
    const targetIndex = Math.min(
      count - 1,
      Math.max(0, Math.floor(latest / step))
    );
    setCurrentIndex(targetIndex);
  });

  const scrollToProject = (index: number) => {
    if (!containerRef.current) return;
    const count = PROJECTS_DATA.length;
    if (count <= 1) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const totalScrollable =
      containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll =
      scrollTop + (index / (count - 1)) * totalScrollable;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % PROJECTS_DATA.length;
    scrollToProject(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      (currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length;
    scrollToProject(prevIndex);
  };

  const currentProject = PROJECTS_DATA[currentIndex];

  return (
    <section
      id="project"
      ref={containerRef}
      aria-label="Projects"
      className="relative w-full bg-black"
      style={{ height: `${PROJECTS_DATA.length * 100}vh` }}
    >
      {/* Pinned Sticky Viewport */}
      <div className="sticky top-0 min-h-screen h-[100dvh] w-full flex flex-col justify-center px-4 sm:px-6 lg:px-12 pt-20 pb-4 sm:py-8 lg:py-0 overflow-y-auto lg:overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto my-auto">
          <ProjectCard
            project={currentProject}
            onNext={PROJECTS_DATA.length > 1 ? handleNext : undefined}
            onPrev={PROJECTS_DATA.length > 1 ? handlePrev : undefined}
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectsScreen;
