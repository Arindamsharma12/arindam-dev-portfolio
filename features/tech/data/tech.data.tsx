import React from "react";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiNestjs,
  SiRedis,
  SiPostgresql,
  SiMongodb,
  SiVercel,
  SiDocker,
  SiNginx,
  SiRender,
  SiAnthropic,
  SiGooglegemini,
  SiRazorpay,
  SiStripe,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiJira,
  SiClickup,
  SiFigma,
  SiPostman,
} from "react-icons/si";
import { TbBrandCss3 } from "react-icons/tb";
import { FaAws, FaSlack } from "react-icons/fa6";
import { RiOpenaiFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

// Custom high-precision SVG for WebSocket
export const WebSocketIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M4 12h4l2-5 4 10 2-5h4" />
    <circle cx="2" cy="12" r="1.5" fill="currentColor" />
    <circle cx="22" cy="12" r="1.5" fill="currentColor" />
    <path d="M8 5a8 8 0 0 1 8 0" strokeDasharray="2 2" opacity="0.6" />
    <path d="M8 19a8 8 0 0 0 8 0" strokeDasharray="2 2" opacity="0.6" />
  </svg>
);

// Custom high-precision SVG for PayU
export const PayUIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 48 48"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M10 12h8c4.4 0 8 3.6 8 8s-3.6 8-8 8h-4v8h-4V12zm4 12h4c2.2 0 4-1.8 4-4s-1.8-4-4-4h-4v8z" />
    <path d="M28 20h4v10c0 2.2 1.8 4 4 4s4-1.8 4-4V20h4v10c0 4.4-3.6 8-8 8s-8-3.6-8-8V20z" />
  </svg>
);

export interface TechSkill {
  id: string;
  name: string;
  category: "frontend" | "backend" | "database" | "cloud" | "ai" | "payment" | "tools";
  icon: React.ComponentType<{ className?: string }>;
  accentColor?: string;
  row: 1 | 2 | 3 | 4;
}

export const TECH_SKILLS: TechSkill[] = [
  // --- ROW 1 (10 Items): Core Frontend & Backend Frameworks ---
  {
    id: "html",
    name: "HTML",
    category: "frontend",
    icon: SiHtml5,
    accentColor: "#E34F26",
    row: 1,
  },
  {
    id: "css",
    name: "CSS",
    category: "frontend",
    icon: TbBrandCss3,
    accentColor: "#1572B6",
    row: 1,
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    icon: SiJavascript,
    accentColor: "#F7DF1E",
    row: 1,
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    icon: SiTypescript,
    accentColor: "#3178C6",
    row: 1,
  },
  {
    id: "react",
    name: "React",
    category: "frontend",
    icon: SiReact,
    accentColor: "#61DAFB",
    row: 1,
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    icon: SiNextdotjs,
    accentColor: "#FFFFFF",
    row: 1,
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    icon: SiNodedotjs,
    accentColor: "#5FA04E",
    row: 1,
  },
  {
    id: "expressjs",
    name: "Express.js",
    category: "backend",
    icon: SiExpress,
    accentColor: "#FFFFFF",
    row: 1,
  },
  {
    id: "nestjs",
    name: "NestJS",
    category: "backend",
    icon: SiNestjs,
    accentColor: "#E0234E",
    row: 1,
  },
  {
    id: "fastapi",
    name: "FastAPI",
    category: "backend",
    icon: SiFastapi,
    accentColor: "#009688",
    row: 1,
  },

  // --- ROW 2 (9 Items): Realtime, Databases & Cloud / Infrastructure ---
  {
    id: "websocket",
    name: "WebSocket",
    category: "backend",
    icon: WebSocketIcon,
    accentColor: "#38BDF8",
    row: 2,
  },
  {
    id: "redis",
    name: "Redis",
    category: "database",
    icon: SiRedis,
    accentColor: "#DC382D",
    row: 2,
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "database",
    icon: SiPostgresql,
    accentColor: "#4169E1",
    row: 2,
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "database",
    icon: SiMongodb,
    accentColor: "#47A248",
    row: 2,
  },
  {
    id: "docker",
    name: "Docker",
    category: "cloud",
    icon: SiDocker,
    accentColor: "#2496ED",
    row: 2,
  },
  {
    id: "nginx",
    name: "Nginx",
    category: "cloud",
    icon: SiNginx,
    accentColor: "#009639",
    row: 2,
  },
  {
    id: "aws",
    name: "AWS",
    category: "cloud",
    icon: FaAws,
    accentColor: "#FF9900",
    row: 2,
  },
  {
    id: "vercel",
    name: "Vercel",
    category: "cloud",
    icon: SiVercel,
    accentColor: "#FFFFFF",
    row: 2,
  },
  {
    id: "render",
    name: "Render",
    category: "cloud",
    icon: SiRender,
    accentColor: "#46E3B7",
    row: 2,
  },

  // --- ROW 3 (8 Items): AI, Payments & CI/CD ---
  {
    id: "anthropic",
    name: "Anthropic",
    category: "ai",
    icon: SiAnthropic,
    accentColor: "#D97757",
    row: 3,
  },
  {
    id: "openai",
    name: "OpenAI",
    category: "ai",
    icon: RiOpenaiFill,
    accentColor: "#10A37F",
    row: 3,
  },
  {
    id: "gemini",
    name: "Gemini",
    category: "ai",
    icon: SiGooglegemini,
    accentColor: "#8E75FF",
    row: 3,
  },
  {
    id: "razorpay",
    name: "Razorpay",
    category: "payment",
    icon: SiRazorpay,
    accentColor: "#0284C7",
    row: 3,
  },
  {
    id: "stripe",
    name: "Stripe",
    category: "payment",
    icon: SiStripe,
    accentColor: "#635BFF",
    row: 3,
  },
  {
    id: "payu",
    name: "PayU",
    category: "payment",
    icon: PayUIcon,
    accentColor: "#A6C800",
    row: 3,
  },
  {
    id: "github",
    name: "GitHub",
    category: "tools",
    icon: SiGithub,
    accentColor: "#FFFFFF",
    row: 3,
  },
  {
    id: "github-actions",
    name: "GH Actions",
    category: "cloud",
    icon: SiGithubactions,
    accentColor: "#2088FF",
    row: 3,
  },

  // --- ROW 4 (7 Items): Collaboration & Developer Productivity ---
  {
    id: "gitlab",
    name: "GitLab",
    category: "tools",
    icon: SiGitlab,
    accentColor: "#FC6D26",
    row: 4,
  },
  {
    id: "slack",
    name: "Slack",
    category: "tools",
    icon: FaSlack,
    accentColor: "#ECB22E",
    row: 4,
  },
  {
    id: "jira",
    name: "Jira",
    category: "tools",
    icon: SiJira,
    accentColor: "#0052CC",
    row: 4,
  },
  {
    id: "clickup",
    name: "ClickUp",
    category: "tools",
    icon: SiClickup,
    accentColor: "#7B68EE",
    row: 4,
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "tools",
    icon: VscVscode,
    accentColor: "#007ACC",
    row: 4,
  },
  {
    id: "figma",
    name: "Figma",
    category: "tools",
    icon: SiFigma,
    accentColor: "#F24E1E",
    row: 4,
  },
  {
    id: "postman",
    name: "Postman",
    category: "tools",
    icon: SiPostman,
    accentColor: "#FF6C37",
    row: 4,
  },
];

export const TECH_BY_ROW = {
  1: TECH_SKILLS.filter((s) => s.row === 1),
  2: TECH_SKILLS.filter((s) => s.row === 2),
  3: TECH_SKILLS.filter((s) => s.row === 3),
  4: TECH_SKILLS.filter((s) => s.row === 4),
};
