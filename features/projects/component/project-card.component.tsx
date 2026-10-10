"use client";

import React from "react";
import { ExternalLink, GitBranch } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Safari } from "@/components/ui/safari";
import type { Project } from "../data/projects.data";

export interface ProjectCardProps {
  project: Project;
  onNext?: () => void;
  onPrev?: () => void;
}

export function ProjectCard({ project, onNext }: ProjectCardProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-center w-full">
      {/* Left Column: Details */}
      <div className="flex flex-col justify-center max-w-xl">
        {/* Category / Tagline */}
        <p className="text-sm sm:text-base font-semibold text-white tracking-normal leading-snug">
          {project.category}
        </p>

        {/* Thin Divider Line */}
        <div className="w-full h-px bg-neutral-800/80 mt-3 mb-6 sm:mb-7" />

        {/* Project Title */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-white  mb-5 sm:mb-6">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-8">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-10">
          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="bg-[#141417] hover:bg-[#1f1f24] border-neutral-800 text-neutral-300 text-xs sm:text-sm font-normal px-3.5 py-1.5 rounded-lg transition-colors cursor-default"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Action Buttons & Counter */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          {/* Live Demo Button */}
          <Button
            render={
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            className="bg-white hover:bg-neutral-200 text-black font-semibold rounded-xl h-11 px-5 shadow-sm inline-flex items-center gap-2 cursor-pointer transition-all active:scale-95"
          >
            <ExternalLink className="size-4 stroke-[2.2]" />
            <span>Live Demo</span>
          </Button>

          {/* View Code Button */}
          <Button
            variant="outline"
            render={
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            className="bg-[#121214] hover:bg-neutral-800 text-white border-neutral-800 font-semibold rounded-xl h-11 px-5 inline-flex items-center gap-2 cursor-pointer transition-all active:scale-95"
          >
            <GitBranch className="size-4" />
            <span>View Code</span>
          </Button>

          {/* Index Counter */}
          <button
            type="button"
            onClick={onNext}
            title={onNext ? "Click to view next project" : undefined}
            className={`flex items-baseline font-mono ml-2 sm:ml-3 select-none transition-opacity ${
              onNext ? "cursor-pointer hover:opacity-80" : "cursor-default"
            }`}
          >
            <span className="text-2xl sm:text-3xl font-bold text-neutral-600 tracking-tight">
              {project.index}
            </span>
            <span className="text-base sm:text-lg font-medium text-neutral-700">
              /{project.total}
            </span>
          </button>
        </div>
      </div>

      {/* Right Column: Safari Mockup */}
      <div className="w-full flex items-center justify-center">
        <Safari
          mode="simple"
          url={project.browserUrl}
          imageSrc={project.imageSrc}
          className="w-full shadow-2xl drop-shadow-2xl"
        />
      </div>
    </div>
  );
}

export default ProjectCard;
