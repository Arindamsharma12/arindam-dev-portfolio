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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 xl:gap-12 items-center w-full">
      {/* Left Column: Details */}
      <div className="flex flex-col justify-center max-w-xl mx-auto lg:mx-0 w-full lg:col-span-5">
        {/* Category / Tagline */}
        <p className="text-xs sm:text-sm lg:text-base font-semibold text-white/90 tracking-normal leading-snug">
          {project.category}
        </p>

        {/* Thin Divider Line */}
        <div className="w-full h-px bg-neutral-800/80 mt-1.5 mb-2.5 sm:mt-2.5 sm:mb-4 lg:mt-3 lg:mb-6" />

        {/* Project Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-3 lg:mb-5 tracking-tight">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-neutral-400 text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4 lg:mb-6">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-5 lg:mb-8">
          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="bg-[#141417] hover:bg-[#1f1f24] border-neutral-800 text-neutral-300 text-[10px] sm:text-xs font-normal px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-lg transition-colors cursor-default"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Action Buttons & Counter */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 lg:gap-4">
          {/* Live Demo Button */}
          {Boolean(project.liveUrl && project.liveUrl.trim()) && (
            <Button
              render={
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              className="bg-white hover:bg-neutral-200 text-black font-semibold rounded-xl h-10 sm:h-11 px-4 sm:px-5 shadow-sm inline-flex items-center gap-2 cursor-pointer transition-all active:scale-95 text-xs sm:text-sm"
            >
              <ExternalLink className="size-4 stroke-[2.2]" />
              <span>Live Demo</span>
            </Button>
          )}

          {/* View Code Button */}
          {Boolean(project.githubUrl && project.githubUrl.trim()) && (
            <Button
              variant="outline"
              render={
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              className="bg-[#121214] hover:bg-neutral-800 text-white border-neutral-800 font-semibold rounded-xl h-10 sm:h-11 px-4 sm:px-5 inline-flex items-center gap-2 cursor-pointer transition-all active:scale-95 text-xs sm:text-sm"
            >
              <GitBranch className="size-4" />
              <span>View Code</span>
            </Button>
          )}

          {/* Index Counter */}
          <Button
            type="button"
            variant="ghost"
            onClick={onNext}
            title={onNext ? "Click to view next project" : undefined}
            className={`flex items-baseline font-mono ml-1.5 sm:ml-2 select-none transition-opacity h-auto p-0 hover:bg-transparent bg-transparent ${
              onNext ? "cursor-pointer hover:opacity-80" : "cursor-default"
            }`}
          >
            <span className="text-lg sm:text-2xl lg:text-3xl font-bold text-neutral-600 tracking-tight">
              {project.index}
            </span>
            <span className="text-xs sm:text-sm lg:text-lg font-medium text-neutral-700">
              /{project.total}
            </span>
          </Button>
        </div>
      </div>

      {/* Right Column: Safari Mockup */}
      <div className="w-full flex items-center justify-center max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-none mx-auto mt-2 lg:mt-0 lg:col-span-7">
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
