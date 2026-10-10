"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export type ExperienceTabType = "experience" | "education" | "certifications";

export interface ExperienceTabItem {
  id: ExperienceTabType;
  label: string;
}

export const EXPERIENCE_TABS: ExperienceTabItem[] = [
  {
    id: "experience",
    label: "EXPERIENCE",
  },
  {
    id: "education",
    label: "EDUCATION",
  },
  {
    id: "certifications",
    label: "CERTIFICATION",
  },
];

export interface ExperienceTabsProps {
  activeTab: ExperienceTabType;
  onChange: (tab: ExperienceTabType) => void;
  className?: string;
}

export const ExperienceTabs = ({
  activeTab,
  onChange,
  className,
}: ExperienceTabsProps) => {
  return (
    <div
      role="tablist"
      aria-label="Experience, Education, and Certification"
      className={cn(
        "flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14 select-none",
        className
      )}
    >
      {EXPERIENCE_TABS.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <Button
            key={tab.id}
            variant="ghost"
            role="tab"
            aria-selected={isActive}
            aria-controls={`tabpanel-${tab.id}`}
            id={`tab-${tab.id}`}
            onClick={() => onChange(tab.id)}
            className={cn(
              "relative h-auto rounded-none bg-transparent hover:bg-transparent px-5 py-2.5 sm:px-6 sm:py-3 font-mono text-xs sm:text-sm font-bold tracking-[0.25em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white",
              isActive
                ? "text-neutral-900 dark:text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] blur-none hover:text-neutral-900 dark:hover:text-white"
                : "text-neutral-400 dark:text-neutral-500 blur-[0.7px] hover:blur-none hover:text-neutral-800 dark:hover:text-neutral-300"
            )}
          >
            {/* HUD / Cyberpunk Corner Brackets Frame around Active Tab */}
            {isActive && (
              <motion.div
                layoutId="activeTabCornerBrackets"
                className="absolute inset-0 pointer-events-none"
                transition={{
                  type: "spring",
                  stiffness: 420,
                  damping: 32,
                }}
              >
                {/* Top-Left Bracket */}
                <span className="absolute top-0 left-0 w-2.5 h-2.5 sm:w-3 sm:h-3 border-t-2 border-l-2 border-neutral-900 dark:border-white" />
                {/* Top-Right Bracket */}
                <span className="absolute top-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 border-t-2 border-r-2 border-neutral-900 dark:border-white" />
                {/* Bottom-Left Bracket */}
                <span className="absolute bottom-0 left-0 w-2.5 h-2.5 sm:w-3 sm:h-3 border-b-2 border-l-2 border-neutral-900 dark:border-white" />
                {/* Bottom-Right Bracket */}
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 border-b-2 border-r-2 border-neutral-900 dark:border-white" />
              </motion.div>
            )}

            <span className="relative z-10">{tab.label}</span>
          </Button>
        );
      })}
    </div>
  );
};

export default ExperienceTabs;
