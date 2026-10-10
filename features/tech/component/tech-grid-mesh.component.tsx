"use client";

import React from "react";

export const TechGridMesh = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden select-none z-[1]"
      aria-hidden="true"
    >
      <svg
        className="w-full h-full opacity-35"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Radial gradient mask to fade grid smoothly at edges */}
          <radialGradient
            id="mesh-radial-glow"
            cx="50%"
            cy="48%"
            r="50%"
            fx="50%"
            fy="48%"
          >
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
            <stop offset="35%" stopColor="#2563eb" stopOpacity="0.3" />
            <stop offset="70%" stopColor="#1e3a8a" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="grid-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#5227FF" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.2" />
          </linearGradient>

          <mask id="grid-fade-mask">
            <rect
              width="1440"
              height="900"
              fill="url(#mesh-radial-glow)"
            />
          </mask>
        </defs>

        <g mask="url(#grid-fade-mask)">
          {/* Concentric curved warp rings (Latitude lines) */}
          <ellipse cx="720" cy="450" rx="140" ry="60" stroke="url(#grid-stroke)" strokeWidth="1" />
          <ellipse cx="720" cy="450" rx="260" ry="110" stroke="url(#grid-stroke)" strokeWidth="1" />
          <ellipse cx="720" cy="450" rx="390" ry="170" stroke="url(#grid-stroke)" strokeWidth="1" />
          <ellipse cx="720" cy="450" rx="530" ry="240" stroke="url(#grid-stroke)" strokeWidth="1.2" />
          <ellipse cx="720" cy="450" rx="690" ry="320" stroke="url(#grid-stroke)" strokeWidth="1.2" />
          <ellipse cx="720" cy="450" rx="870" ry="410" stroke="url(#grid-stroke)" strokeWidth="1.3" />
          <ellipse cx="720" cy="450" rx="1080" ry="510" stroke="url(#grid-stroke)" strokeWidth="1.4" />
          <ellipse cx="720" cy="450" rx="1300" ry="620" stroke="url(#grid-stroke)" strokeWidth="1.5" />

          {/* Perspective radial rays radiating from vanishing center */}
          <line x1="720" y1="450" x2="-200" y2="-100" stroke="url(#grid-stroke)" strokeWidth="1" />
          <line x1="720" y1="450" x2="100" y2="-200" stroke="url(#grid-stroke)" strokeWidth="1" />
          <line x1="720" y1="450" x2="400" y2="-200" stroke="url(#grid-stroke)" strokeWidth="1" />
          <line x1="720" y1="450" x2="720" y2="-200" stroke="url(#grid-stroke)" strokeWidth="1" />
          <line x1="720" y1="450" x2="1040" y2="-200" stroke="url(#grid-stroke)" strokeWidth="1" />
          <line x1="720" y1="450" x2="1340" y2="-200" stroke="url(#grid-stroke)" strokeWidth="1" />
          <line x1="720" y1="450" x2="1640" y2="-100" stroke="url(#grid-stroke)" strokeWidth="1" />

          <line x1="720" y1="450" x2="-300" y2="450" stroke="url(#grid-stroke)" strokeWidth="1" />
          <line x1="720" y1="450" x2="1740" y2="450" stroke="url(#grid-stroke)" strokeWidth="1" />

          <line x1="720" y1="450" x2="-200" y2="1000" stroke="url(#grid-stroke)" strokeWidth="1" />
          <line x1="720" y1="450" x2="100" y2="1100" stroke="url(#grid-stroke)" strokeWidth="1" />
          <line x1="720" y1="450" x2="400" y2="1100" stroke="url(#grid-stroke)" strokeWidth="1" />
          <line x1="720" y1="450" x2="720" y2="1100" stroke="url(#grid-stroke)" strokeWidth="1" />
          <line x1="720" y1="450" x2="1040" y2="1100" stroke="url(#grid-stroke)" strokeWidth="1" />
          <line x1="720" y1="450" x2="1340" y2="1100" stroke="url(#grid-stroke)" strokeWidth="1" />
          <line x1="720" y1="450" x2="1640" y2="1000" stroke="url(#grid-stroke)" strokeWidth="1" />

          {/* Additional subtle diagonal rays */}
          <line x1="720" y1="450" x2="-100" y2="150" stroke="url(#grid-stroke)" strokeWidth="0.8" />
          <line x1="720" y1="450" x2="-100" y2="750" stroke="url(#grid-stroke)" strokeWidth="0.8" />
          <line x1="720" y1="450" x2="1540" y2="150" stroke="url(#grid-stroke)" strokeWidth="0.8" />
          <line x1="720" y1="450" x2="1540" y2="750" stroke="url(#grid-stroke)" strokeWidth="0.8" />
        </g>
      </svg>
    </div>
  );
};

export default TechGridMesh;
