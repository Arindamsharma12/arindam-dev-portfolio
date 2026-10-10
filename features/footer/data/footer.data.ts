export interface RoleMarqueeItem {
  title: string;
  description: string;
}

export interface ProjectMarqueeItem {
  title: string;
  description: string;
}

export const FOOTER_DATA = {
  name: "ARINDAM",
  surname: "SHARMA",
  role: "Full-Stack & Gen AI Engineer",
  email: "arindamsharma0123@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/arindam-sharma30",
  linkedinHandle: "linkedin.com/in/arindam-sharma30",
  githubUrl: "https://github.com/Arindamsharma12",
  githubHandle: "github/Arindamsharma12",
  leetcodeUrl: "https://leetcode.com/u/Arindamsharma12",
  leetcodeHandle: "leetcode.com/u/arindam_sharma",
  profileImage:
    "https://res.cloudinary.com/dtflvxz39/image/upload/v1791661403/profile-arindam_kpdvnh.png",
  ctaText: "Let's connect and build something amazing together.",
  copyrightYear: 2026,

  // Row 1: Content about Arindam's role (one line title, one line desc)
  roles: [
    {
      title: "Software Engineer",
      description: "WallMantra (Full-time)",
    },
    {
      title: "Full-Stack Engineer",
      description: "Next.js, NestJS & Microservices",
    },
    {
      title: "GenAI & Agent Developer",
      description: "Autonomous workflows & MCP integrations",
    },
    {
      title: "MERN Stack Developer",
      description: "preva.care (Internship)",
    },
    {
      title: "Frontend Specialist",
      description: "React, TypeScript & Tailwind CSS",
    },
    {
      title: "Backend & Systems Dev",
      description: "Docker, PostgreSQL & Redis caching",
    },
  ] as RoleMarqueeItem[],

  // Row 2: Content about Arindam's projects (one line title, one line desc)
  projects: [
    {
      title: "Nebula",
      description: "AI-Powered Project Management & MCP Automation",
    },
    {
      title: "WallMantra",
      description: "High-scale E-Commerce Platform & Mobile Apps",
    },
    {
      title: "Chatty",
      description: "Real-Time WebSocket & WebRTC Messaging App",
    },
    {
      title: "Portfolio",
      description: "Interactive Liquid Glass Portfolio Experience",
    },
    {
      title: "Jira Clone",
      description: "Sprint Management, Kanban & Team Workspaces",
    },
    {
      title: "Model Gateway",
      description: "Cost-Aware Intelligent AI Routing Gateway",
    },
  ] as ProjectMarqueeItem[],
};
