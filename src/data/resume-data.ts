import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Nahom Kasa",
  initials: "NK",
  location: "Addis Ababa, Ethiopia, EAT",
  locationLink: "https://www.google.com/maps/place/Addis+Ababa",
  about: "Full Stack Developer & UI/UX Designer building AI-integrated applications.",
  summary:
    "Full Stack Developer with experience building SaaS platforms, AI-powered tools, and enterprise applications. Passionate about creating products that solve real problems and delivering clean, maintainable code.",
  avatarUrl: "/myimage.jpeg",
  personalWebsiteUrl: "https://naz.gitbook.io",
  contact: {
    email: "nahomkasa345@gmail.com",
    tel: "+251929333563",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/nahomkasa999",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nahom-kasa-84bb84325/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Addis Ababa University (AAU)",
      degree: "B.Sc. in Civil Engineering",
      start: "2024",
      end: "2030 (Expected)",
    },
  ],
  work: [
    {
      company: "Xerolas",
      link: "https://xerolas.com",
      badges: ["Next.js 16", "TypeScript", "Prisma", "PostgreSQL", "Hono", "AI"],
      title: "Founder & Full Stack Developer",
      start: "2026",
      end: null,
      description:
        "Built the entire product from start to finish — a two-sided marketplace for Ethiopian university students to buy and sell past exam papers.",
      highlights: [
        "Identified the problem: students waste hours searching Telegram groups for exam papers",
        "Designed and built the full platform: authentication, file upload, payment integration, search, and dashboard",
        "Architected with Next.js 16, Hono API, Prisma ORM, and Cloudflare R2 for storage",
        "Grew the platform to 70 active users and revenue is now being generated",
      ],
    },
    {
      company: "Digital Merkato",
      link: "",
      badges: ["React", "TypeScript", "Tailwind CSS", "ERP", "Financial Systems"],
      title: "Frontend Developer",
      start: "Jun 2026",
      end: null,
      description:
        "Built 2 ERP modules for their internal system — Financial Management and Fiscal Year/Period Management.",
      highlights: [
        "Problem: They needed an ERP system to manage their growing business operations",
        "Solution: Built Financial Management module (fixed assets, variable costs, depreciation tracking)",
        "Implemented Fiscal Year and Period Management for accurate financial reporting",
        "Collaborated with backend team to ensure data integrity across modules",
      ],
    },
    {
      company: "Future Interns",
      link: "",
      badges: ["UI/UX Research", "Figma", "User Testing"],
      title: "UI/UX Researcher",
      start: "Mar 2026",
      end: "Apr 2026",
      description:
        "Conducted UI/UX research and completed tasks related to user interface design and UX research.",
      highlights: [
        "Performed user research and usability testing",
        "Created wireframes and prototypes in Figma",
        "Analyzed user feedback to improve design decisions",
      ],
    },
    {
      company: "AY Automate",
      link: "https://ayautomate.vercel.app",
      badges: ["Next.js", "Hono.js", "TypeScript", "Turborepo", "Tailwind CSS"],
      title: "Full-stack Developer",
      start: "Aug 2025",
      end: "Nov 2025",
      description:
        "Client needed a website to find customers — I built the entire product as their product engineer.",
      highlights: [
        "Problem: AY Automate needed a professional website to attract clients for their AI automation agency",
        "Solution: Built their complete agency website from scratch as their product engineer",
        "Implemented AI Story Studio SaaS platform with Gemini AI for content generation",
        "Integrated Stripe for payments and Supabase for authentication",
        "Built automated PDF generation engine for story export",
      ],
    },
  ],
  skills: [
    "TypeScript",
    "JavaScript",
    "Python",
    "SQL (PostgreSQL, MySQL)",
    "NoSQL (MongoDB)",
    "Next.js 16",
    "React",
    "TanStack Query",
    "Tailwind CSS",
    "Shadcn UI",
    "Framer Motion",
    "Hono.js",
    "Node.js",
    "Prisma ORM",
    "REST API",
    "Zustand",
    "Supabase",
    "Pinecone",
    "Redis",
    "Better Auth",
    "Clerk",
    "AI/LLMs",
    "Gemini API",
    "n8n",
    "MCP",
    "Turborepo",
    "Docker",
    "Vercel",
    "Stripe",
    "Chapa",
    "Git/GitHub",
    "Figma",
  ],
  projects: [
    {
      title: "Xerolas",
      techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Hono", "Prisma", "PostgreSQL", "TanStack Query", "Zustand"],
      description: "Two-sided exam paper marketplace — solved the problem of students wasting hours searching Telegram groups for exam papers. Grew to 70 users with revenue being generated.",
      link: {
        label: "xerolas.com",
        href: "https://xerolas.com",
      },
    },
    {
      title: "EthioERP",
      techStack: ["Next.js 16", "Hono", "Better Auth", "Prisma", "TanStack Query", "Zustand"],
      description: "Multi-tenant ERP system — solved the problem of managing Ethiopian businesses with dual calendar support (Ethiopian & Gregorian), inventory, and HR.",
      link: {
        label: "erp-rho-nine.vercel.app",
        href: "https://erp-rho-nine.vercel.app",
      },
    },
    {
      title: "Nazarians Worship Ministry",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      description: "Church website — solved the problem of managing worship ministry events, sermon archives, and community engagement in one place.",
      link: {
        label: "nazarians-worship-ministry.vercel.app",
        href: "https://nazarians-worship-ministry.vercel.app",
      },
    },
    {
      title: "Sena",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      description: "Student Learning Management Platform built to help younger brothers with their studies — manage courses, assignments, and academic progress.",
      link: {
        label: "sena-rosy.vercel.app",
        href: "https://sena-rosy.vercel.app/",
      },
    },
    {
      title: "AI Story Studio",
      techStack: ["Next.js 15", "Hono.js", "Gemini AI", "Supabase", "Stripe", "React-PDF"],
      description: "Multi-tenant AI Story Generation platform — solved the problem of creating illustrated digital books by integrating Gemini AI for narrative generation and image synthesis.",
      link: {
        label: "mymagicalstory-web.vercel.app",
        href: "https://mymagicalstory-web.vercel.app",
      },
    },
    {
      title: "Prekly",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      description: "Web application project — built with a team to solve specific user needs using modern web technologies.",
      link: {
        label: "github.com/ye-we/perkly",
        href: "https://github.com/ye-we/perkly",
      },
    },
    {
      title: "Technical Blog",
      techStack: ["GitBook", "Technical Writing"],
      description: "Technical blog posts — sharing knowledge about software development, AI trends, and engineering insights to help other developers.",
      link: {
        label: "naz.gitbook.io",
        href: "https://naz.gitbook.io",
      },
    },
  ],
  uiux: [
    {
      title: "Certo Software",
      description: "Mobile privacy & security landing page with conversion-focused design, testimonial sections, and feature showcases.",
      image: "/uiux/certosoftware.com.png",
      skills: ["UI Design", "Landing Page", "Responsive Design", "Design System", "Component Architecture", "Color Theory", "Typography"],
    },
    {
      title: "Thirdweb Studio",
      description: "Web3 design studio website with dark theme, gradient effects, and modern animations for crypto/blockchain audience.",
      image: "/uiux/thirdweb.studio.png",
      skills: ["Dark UI", "Gradient Design", "Motion Design", "Brand Identity", "Visual Hierarchy", "Framer Motion"],
    },
    {
      title: "Xerolas Platform",
      description: "Exam paper marketplace UI/UX design with clean layout, search functionality, and student-friendly interface.",
      image: "/uiux/Main.png",
      skills: ["Product Design", "UX Research", "Wireframing", "Prototyping", "User Flow", "Figma", "Design System"],
    },
  ],
} as const;
