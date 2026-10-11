"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Timeline, TimelineEntry } from "@/components/ui/timeline";
import ExperienceTabs, {
  ExperienceTabType,
} from "../component/experience-tabs.component";
import ExperienceCard from "../component/experience-card.component";
import EducationCard from "../component/education-card.component";
import CertificationCard from "../component/certification-card.component";
import {
  EXPERIENCES_DATA,
  EDUCATION_DATA,
  CERTIFICATIONS_DATA,
} from "../data/experience.data";

export const ExperienceScreen = () => {
  const [activeTab, setActiveTab] = useState<ExperienceTabType>("experience");

  // Format Experience data into TimelineEntry[]
  const experienceTimelineData: TimelineEntry[] = useMemo(() => {
    return EXPERIENCES_DATA.map((item) => ({
      title: item.timelineTitle,
      content: <ExperienceCard experience={item} />,
    }));
  }, []);

  // Format Education data into TimelineEntry[]
  const educationTimelineData: TimelineEntry[] = useMemo(() => {
    return EDUCATION_DATA.map((item) => ({
      title: item.timelineTitle,
      content: <EducationCard education={item} />,
    }));
  }, []);

  // Format Certifications data into TimelineEntry[]
  const certificationsTimelineData: TimelineEntry[] = useMemo(() => {
    return CERTIFICATIONS_DATA.map((item) => ({
      title: item.timelineTitle,
      content: <CertificationCard certification={item} />,
    }));
  }, []);

  // Select current dataset based on active tab
  const currentTimelineData = useMemo(() => {
    switch (activeTab) {
      case "experience":
        return experienceTimelineData;
      case "education":
        return educationTimelineData;
      case "certifications":
        return certificationsTimelineData;
      default:
        return experienceTimelineData;
    }
  }, [
    activeTab,
    experienceTimelineData,
    educationTimelineData,
    certificationsTimelineData,
  ]);

  return (
    <section
      id="work"
      aria-label="Experience, Education & Certifications"
      className="relative w-full min-h-screen bg-black text-white py-24 sm:py-32 overflow-hidden select-none"
    >
      {/* Anchor alias for #experience */}
      <span id="experience" className="sr-only" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          {/* Interactive Tab Switcher */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="flex justify-center"
          >
            <ExperienceTabs activeTab={activeTab} onChange={setActiveTab} />
          </motion.div>
        </div>

        {/* Timeline View Container with Animated Transitions */}
        <div
          role="tabpanel"
          id={`tabpanel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
          className="w-full relative min-h-[400px]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full"
            >
              <Timeline data={currentTimelineData} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ExperienceScreen;
