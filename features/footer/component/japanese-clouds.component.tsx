import React from "react";

export const JapaneseClouds = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Deep Violet Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e1338] via-[#281545] to-[#140b27] opacity-90" />

      {/* Atmospheric Radial Light behind subject */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-radial from-purple-500/30 via-indigo-500/15 to-transparent blur-2xl" />

      {/* Japanese Traditional Stylized Clouds SVG Pattern */}
      <svg
        className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-screen"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="cloudGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#9333ea" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#581c87" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="cloudGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e879f9" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#7e22ce" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3b0764" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Cloud clusters upper section */}
        <g stroke="#e9d5ff" strokeWidth="0.75" strokeOpacity="0.45" fill="url(#cloudGrad1)">
          {/* Cloud 1 */}
          <path d="M-20,120 C-20,90 20,70 60,85 C90,65 140,75 155,105 C185,100 215,120 210,145 C205,170 170,185 140,180 C110,195 50,195 20,175 C-10,175 -20,150 -20,120 Z" />
          {/* Cloud concentric inner ripples */}
          <path d="M5,115 C15,95 45,85 70,95 C95,80 130,90 140,110" fill="none" stroke="#d8b4fe" strokeWidth="0.6" strokeOpacity="0.4" />
          <path d="M25,135 C35,115 65,110 85,120 C105,110 130,118 135,130" fill="none" stroke="#d8b4fe" strokeWidth="0.5" strokeOpacity="0.3" />

          {/* Cloud 2 Right */}
          <path d="M240,70 C250,45 285,40 310,55 C335,40 375,50 385,75 C410,75 425,95 420,120 C410,140 380,150 350,145 C320,155 270,150 250,135 C230,130 230,95 240,70 Z" />
          <path d="M265,75 C285,60 315,60 330,75 C345,65 375,72 380,90" fill="none" stroke="#d8b4fe" strokeWidth="0.6" strokeOpacity="0.4" />

          {/* Cloud 3 Center High */}
          <path d="M120,40 C140,20 175,20 195,35 C215,20 255,25 270,50 C290,55 300,75 295,95 C285,115 255,120 230,115 C205,125 160,120 140,105 C120,95 110,65 120,40 Z" fill="url(#cloudGrad2)" />
        </g>

        {/* Cloud clusters mid-left & mid-right */}
        <g stroke="#f0abfc" strokeWidth="0.75" strokeOpacity="0.35" fill="url(#cloudGrad2)">
          {/* Cloud Mid Left */}
          <path d="M-40,240 C-30,210 5,200 35,215 C60,195 105,205 120,230 C145,230 165,255 155,280 C140,305 105,315 75,305 C45,320 -5,310 -25,290 C-45,285 -45,260 -40,240 Z" />
          <path d="M-10,240 C10,225 40,220 55,235 C75,225 105,232 110,250" fill="none" stroke="#e9d5ff" strokeWidth="0.5" strokeOpacity="0.3" />

          {/* Cloud Mid Right */}
          <path d="M260,210 C275,185 315,180 340,195 C365,180 405,190 415,215 C435,220 445,245 435,270 C420,295 385,300 355,295 C325,305 280,300 260,280 C245,270 245,235 260,210 Z" />
          <path d="M285,210 C305,195 335,195 350,210 C370,200 395,208 400,225" fill="none" stroke="#e9d5ff" strokeWidth="0.5" strokeOpacity="0.3" />

          {/* Lower Clouds */}
          <path d="M30,380 C45,355 85,350 110,365 C135,350 175,360 185,385 C205,390 215,415 205,440 C190,460 155,470 125,460 C95,475 50,470 30,450 C15,440 15,405 30,380 Z" fill="url(#cloudGrad1)" />
          <path d="M220,370 C235,345 275,340 300,355 C325,340 365,350 375,375 C395,380 405,405 395,430 C380,455 345,460 315,455 C285,465 240,460 220,440 C205,430 205,395 220,370 Z" fill="url(#cloudGrad1)" />
        </g>
      </svg>

      {/* Subtle bottom vignette to blend seamlessly into card base */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0e071c] via-[#150a2a]/60 to-transparent" />
    </div>
  );
};
