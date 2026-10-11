export interface Project {
  id: string;
  index: string;
  total: string;
  category: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  browserUrl: string;
  imageSrc: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "nebula",
    index: "01",
    total: "03",
    category: "AI-Powered Project Management & Workflow Automation Platform",
    title: "Nebula",
    description:
      "A modern project management platform for managing multiple workspaces, teams, and projects, with MCP-powered AI automation for task assignments, workflow coordination, and weekly pending-task summaries.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Hono.js",
      "Appwrite",
      "MCP",
      "AI Automation",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    liveUrl: "https://nebula-x-two.vercel.app",
    githubUrl: "https://github.com/Arindamsharma12/jira-clone",
    browserUrl: "https://nebula-x-two.vercel.app",
    imageSrc:
      "https://res.cloudinary.com/dtflvxz39/image/upload/v1791623996/Nebula_Project_Management_Hero_hebpzi_bzatun.png",
  },
  {
    id: "wallmantra",
    index: "02",
    total: "03",
    category: "Full-Stack E-commerce Platform & Mobile Applications",
    title: "WallMantra",
    description:
      "Scalable home decor e-commerce ecosystem powering a modern shopping experience across web, Android, and iOS, with optimized product discovery, seamless checkout, and AI-powered customer assistance.",
    techStack: [
      "Next.js",
      "TypeScript",
      "React Native",
      "Expo",
      "NestJS",
      "MedusaJS",
      "PostgreSQL",
      "Prisma",
      "Payload CMS",
      "Docker",
      "Gemini AI",
    ],
    liveUrl: "https://wallmantra.com",
    githubUrl: "",
    browserUrl: "wallmantra.com",
    imageSrc:
      "https://wallmantra.com/inspiration/app/uploads/2026/09/wallmantra-og-image.webp",
  },
  {
    id: "chatty",
    index: "03",
    total: "03",
    category: "Real-Time Connection & Interactive Messaging Platform",
    title: "Chatty",
    description:
      "High-performance real-time communication platform with instant presence detection, low-latency WebSocket messaging, end-to-end channels, and seamless media sharing.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Socket.io",
      "Tailwind CSS",
      "Node.js",
      "Redis",
      "PostgreSQL",
      "WebRTC",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/Arindamsharma12/Real-time-chat-app",
    browserUrl: "chatty.app",
    imageSrc:
      "https://res.cloudinary.com/dtflvxz39/image/upload/v1791624884/Chatty__Real-Time_Connection_psduda.png",
  },
];
