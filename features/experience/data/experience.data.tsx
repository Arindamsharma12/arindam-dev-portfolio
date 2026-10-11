export interface ExperienceRole {
  role: string;
  employmentType: string;
  duration: string;
  location: string;
  description?: string;
  highlights?: string[];
  skills: string[];
  helpedByLinkedIn?: boolean;
  media?: {
    title: string;
    description?: string;
    url: string;
    imageUrl?: string;
  };
}

export interface ExperienceItem {
  id: string;
  company: string;
  title?: string;
  subtitle?: string;
  bullets?: string[];
  companyUrl?: string;
  logo: string;
  totalDuration?: string;
  locationType?: string;
  timelineTitle: string;
  roles: ExperienceRole[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  timelineTitle: string;
  grade: string;
  achievements: string[];
  skills: string[];
  logo?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issuedDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  timelineTitle: string;
  skills?: string[];
  mediaTitle?: string;
  mediaDescription?: string;
  logo?: string;
}

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: "wallmantra",
    company: "WallMantra",
    title: "Software Engineer",
    subtitle: "WallMantra • Delhi, India (On-site) • Jul 2025 - Present",
    companyUrl: "https://wallmantra.com",
    logo: "https://wallmantra.com/inspiration/app/uploads/2026/07/icon.png",
    totalDuration: "1 yr 6 mos",
    locationType: "On-site",
    timelineTitle: "2025 - Present",
    bullets: [
      "Building scalable features, improving system performance, and delivering end-to-end solutions across multiple platforms.",
      "Previously contributed as Web Development Intern (May 2025 – Jul 2025), building Next.js components and responsive UI modules.",
      "Tech Stack: NestJS, Docker, Next.js, TypeScript, PostgreSQL, REST APIs, Microservices, Tailwind CSS.",
    ],
    roles: [
      {
        role: "Software Engineer",
        employmentType: "Full-time",
        duration: "Jul 2025 - Present · 1 yr 4 mos",
        location: "Delhi, India",
        description:
          "I work on building scalable features, improving system performance, and delivering end-to-end solutions across multiple platforms.",
        skills: [
          "NestJS",
          "Docker",
          "Next.js",
          "TypeScript",
          "PostgreSQL",
          "REST APIs",
          "Microservices",
          "Tailwind CSS",
        ],
        media: {
          title:
            "The House of Luxury Home Decor, Furnishing & Furniture - WallMantra",
          description: "WallMantra E-Commerce Architecture & Mobile Platform",
          url: "https://wallmantra.com",
          imageUrl:
            "https://wallmantra.com/inspiration/app/uploads/2026/07/icon.png",
        },
      },
      {
        role: "Web Development Intern",
        employmentType: "Internship",
        duration: "May 2025 - Jul 2025 · 3 mos",
        location: "New Delhi, Delhi, India",
        description:
          "Contributed to building responsive web interfaces, Next.js UI components, and integrating RESTful APIs.",
        skills: ["Next.js", "GitHub", "Tailwind CSS", "REST APIs"],
      },
    ],
  },
  {
    id: "preva-care",
    company: "preva.care",
    title: "MERN Stack Developer Intern",
    subtitle: "preva.care • Remote • Sep 2025 - Oct 2025",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQHaeDdl_K5Bjw/company-logo_100_100/B56ZXJgcV1GUAQ-/0/1742842481492?e=1793232000&v=beta&t=szuwWsTpTJNsQi4fhoKH_3PP52t1u8djyW5lDvPus1Q",
    timelineTitle: "Sep 2025 - Oct 2025",
    totalDuration: "2 mos",
    locationType: "Remote",
    bullets: [
      "Developed full-stack features and responsive client interfaces utilizing the MERN stack.",
      "Built REST APIs, implemented state management, and optimized user workflows.",
      "Tech Stack: React.js, Node.js, MongoDB, Express.js, Tailwind CSS.",
    ],
    roles: [
      {
        role: "MERN Stack Developer Intern",
        employmentType: "Freelance",
        duration: "Sep 2025 - Oct 2025 · 2 mos",
        location: "Remote",
        skills: [
          "React.js",
          "Node.js",
          "MongoDB",
          "Express.js",
          "Tailwind CSS",
        ],
      },
    ],
  },
  {
    id: "waah-champaran-achar",
    company: "Waah champaran achaar",
    title: "Full-stack Developer",
    subtitle: "Waah champaran achaar • Delhi, India (Remote) • Apr 2025 - Sep 2025",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQHEJcSTEUoTZA/company-logo_100_100/B56ZUcVWmPHsAQ-/0/1739937115235/waah_champaran_achar_logo?e=1793232000&v=beta&t=MQCuFFAcnedSKxmLhZV7KkNBGnA7ccPLscZgE40o1Ys",
    timelineTitle: "Apr 2025 - Sep 2025",
    bullets: [
      "Built a responsive e-commerce website for Champaaran Achaar to sell traditional Bihari pickles online.",
      "Implemented product listings, cart functionality, and optimized the site for performance and SEO.",
      "Tech Stack: ReactJs, NodeJs, MongoDB, ExpressJs, Typescript, Tailwind css, Payment gateway.",
    ],
    roles: [
      {
        role: "Full-stack Developer",
        employmentType: "Freelance",
        duration: "Apr 2025 - Sep 2025 · 6 mos",
        location: "Delhi, India · Remote",
        highlights: [
          "Built a responsive e-commerce website for Champaaran Achaar to sell traditional Bihari pickles online.",
          "Implemented product listings, cart functionality, and optimized the site for performance and SEO.",
        ],
        skills: [
          "ReactJs",
          "NodeJs",
          "MongoDB",
          "ExpressJs",
          "Typescript",
          "Tailwind css",
          "Payment gateway",
        ],
      },
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "kcc-itm",
    institution: "KCC Institute of Technology and Management, Greater Noida",
    degree:
      "Bachelor of Technology in Computer Science and Engineering (B.Tech)",
    field: "Computer Science & Engineering",
    duration: "Sep 2022 – Jun 2026",
    timelineTitle: "2022 - 2026",
    grade: "9.23 YGPA",
    achievements: [
      "Completed the 1st Year with 9.23 YGPA, building the programming and computer science foundation.",
      "AKTU ranker in Engineering Mathematics 1 (2023) — scored 100 out of 100.",
      "Specialized coursework in Applied Mathematics, Data Structures, Algorithms, and Software Engineering.",
    ],
    skills: [
      "Applied Mathematics",
      "Data Structures",
      "Algorithms",
      "System Architecture",
    ],
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQFMtiyukULMqA/company-logo_100_100/company-logo_100_100/0/1631353520037?e=1793232000&v=beta&t=uCIoJEhKIVhKZanBpvQoGChnJ0Xq6rfDMl8A5-E68N4",
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "wallmantra-loc",
    title: "Letter Of Completion",
    issuer: "WallMantra",
    issuedDate: "Aug 2025",
    timelineTitle: "Aug 2025",
    credentialUrl:
      "https://drive.google.com/file/d/1Zzvx3L6aCh5ARQrVJJmwzq_W_WJwv67A/view",
    skills: ["Next.js", "Shadcn", "TypeScript", "Tailwind CSS"],
    mediaTitle: "Letter of completion",
    mediaDescription:
      "Letter of completion for internship at WallMantra as a Website Developer Intern.",
    logo: "https://wallmantra.com/inspiration/app/uploads/2026/07/icon.png",
  },
  {
    id: "hackaccino",
    title: "Hackaccino 3.0",
    issuer: "Hackaccino",
    issuedDate: "Apr 2025",
    timelineTitle: "Apr 2025",
    credentialUrl:
      "https://drive.google.com/file/d/17DYQU2BFX1ROeUElWaLUF0gzcGB0Zb-x/view?usp=drivesdk&usp=embed_facebook&usp=embed_facebook",
    mediaTitle: "Hackaccino 3.0 Certificate",
    mediaDescription:
      "National Hackathon Certificate of Participation & Excellence.",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFuXGJdkq5dbg/company-logo_100_100/company-logo_100_100/0/1736517851203?e=1793232000&v=beta&t=mr2zoEm_pnpRelC4eV63IctERJaN1biWVG0xshn294Q",
  },
  {
    id: "d3-participation",
    title: "D3 Participation",
    issuer: "United Latino Students Association",
    issuedDate: "Mar 2025",
    timelineTitle: "Mar 2025",
    credentialId: "13186d9b-8e8b-4e2a-8f18-02e4b3cc593e",
    credentialUrl:
      "https://credsverse.com/credentials/13186d9b-8e8b-4e2a-8f18-02e4b3cc593e?preview=1",
    mediaTitle:
      "Check out Arindam Sharma's D3 Participation credential issued by College",
    mediaDescription: "D3 Participation credential verified on Credsverse.",
  },
  {
    id: "hcltech-java-ai",
    title: "Java Web Development With AI",
    issuer: "HCLTech",
    issuedDate: "Mar 2025",
    timelineTitle: "Mar 2025",
    credentialUrl:
      "https://drive.google.com/file/d/1DTNMS3qpZZtHm0zZXomBNzz32X_-rz6e/view",
    skills: [
      "Java",
      "JavaServer Pages (JSP)",
      "Full Stack Web",
      "AI Integration",
      "Spring",
    ],
    mediaTitle: "JWD_AI_Certificate.pdf",
    mediaDescription:
      "Java Web Development With AI training and certification by HCLTech.",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQFQ04a2301XUA/company-logo_100_100/B56Z_8GT9HHIAU-/0/1786640941074/hcltech_logo?e=1793232000&v=beta&t=9PrVl9mJUrLSq2LhDGcwM65QNj8DKT40h05pTPB5ls8",
  },
  {
    id: "hackerrank-react",
    title: "React Basic Hackerrank",
    issuer: "HackerRank",
    issuedDate: "Oct 2024",
    expiryDate: "Oct 2026",
    timelineTitle: "Oct 2024",
    credentialId: "f79d688d33e1",
    credentialUrl: "https://www.hackerrank.com/certificates/f79d688d33e1",
    skills: ["react", "Frontend Development"],
    mediaTitle: "HackerRank Skill Certificate",
    mediaDescription:
      "Demonstrated fundamental React concepts and problem-solving skills.",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQE8MivsmbT7Ig/company-logo_100_100/company-logo_100_100/0/1705561459405/hackerrank_logo?e=1793232000&v=beta&t=ureKW61s41QyR47J-UW2CRrYanLBGs0wOAqBW2U784s",
  },
];
