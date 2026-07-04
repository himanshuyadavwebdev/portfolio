import type { Project, Skill, Experience, SocialLink, NavLink, Stat } from "@/types"

export const PERSONAL = {
  name: "Himanshu",
  fullName: "Himanshu Yadav",
  title: "Frontend Developer",
  email: "himanshuyadavwebdev@gmail.com",
  phone: "7678662985",
  location: "Greater Noida, India",
  available: true,
  currently: "Building animated web experiences with Next.js & Framer Motion",
  bio: "Frontend Developer skilled in React.js, Next.js, TypeScript, Tailwind CSS, and JavaScript. Built projects including a multilingual AI resume analyzer, a real-time Figma-inspired design tool, and a site health dashboard, with experience in REST APIs, Firebase, and Vercel.",
  resumeUrl: "/resume/Himanshu_Yadav_Resume.pdf",
  avatarUrl: "/images/profile.jpg",
}

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/himanshuyadavwebdev", icon: "brand-github", color: "#c9a84c" },
  { name: "LinkedIn", url: "https://linkedin.com/in/himanshuyadavdev", icon: "brand-linkedin", color: "#00b4d8" },
  { name: "Resume", url: "/resume/Himanshu_Yadav_Resume.pdf", icon: "file-text", color: "#d4b86a", download: true },
]

export const STATS: Stat[] = [
  { label: "Projects Completed", value: 7, suffix: "+", icon: "code" },
  { label: "Technologies Used", value: 21, suffix: "+", icon: "tools" },
  { label: "Experience", value: 6, suffix: "+ Months", icon: "users" },
  { label: "AI Projects", value: 4, suffix: "+", icon: "stars" },
]

export const SKILLS: Skill[] = [
  { name: "React", icon: "brand-react", category: "frontend", proficiency: 78, color: "#c9a84c" },
  { name: "Next.js", icon: "brand-nextjs", category: "frontend", proficiency: 75, color: "#c9a84c" },
  { name: "TypeScript", icon: "brand-typescript", category: "frontend", proficiency: 70, color: "#c9a84c" },
  { name: "JavaScript", icon: "brand-javascript", category: "frontend", proficiency: 80, color: "#c9a84c" },
  { name: "Tailwind CSS", icon: "brand-tailwind", category: "frontend", proficiency: 85, color: "#c9a84c" },
  { name: "HTML/CSS", icon: "brand-html5", category: "frontend", proficiency: 88, color: "#c9a84c" },
  { name: "Node.js", icon: "brand-nodejs", category: "backend", proficiency: 62, color: "#4fc3c3" },
  { name: "REST APIs", icon: "api", category: "backend", proficiency: 68, color: "#4fc3c3" },
  { name: "Firebase", icon: "brand-firebase", category: "backend", proficiency: 62, color: "#4fc3c3" },
  { name: "Git", icon: "brand-git", category: "tools", proficiency: 85, color: "#7a8ea8" },
  { name: "GitHub", icon: "brand-github", category: "tools", proficiency: 85, color: "#7a8ea8" },
  { name: "Figma", icon: "brand-figma", category: "tools", proficiency: 72, color: "#7a8ea8" },
  { name: "Framer Motion", icon: "player-play", category: "frontend", proficiency: 78, color: "#c9a84c" },
  { name: "Fabric.js", icon: "layout-2", category: "frontend", proficiency: 65, color: "#c9a84c" },
  { name: "GSAP", icon: "player-play", category: "frontend", proficiency: 70, color: "#c9a84c" },
  { name: "Three.js", icon: "brand-threejs", category: "frontend", proficiency: 60, color: "#c9a84c" },
  { name: "Groq AI", icon: "stars", category: "backend", proficiency: 72, color: "#4fc3c3" },
  { name: "Time Management", icon: "clock", category: "soft", proficiency: 85, color: "#c9a8a0" },
  { name: "Communication", icon: "message", category: "soft", proficiency: 80, color: "#c9a8a0" },
  { name: "Adaptability", icon: "arrows-shuffle", category: "soft", proficiency: 85, color: "#c9a8a0" },
  { name: "Team Collaboration", icon: "users-group", category: "soft", proficiency: 90, color: "#c9a8a0" },
]

export const PROJECTS: Project[] = [
  {
    id: "harvard-clone",
    title: "Harvard University Clone",
    description: "A modern, responsive Harvard University website clone built with Next.js 16, TypeScript, and Tailwind CSS v4. Features 31 pages, scroll animations, and an earthy editorial design with full course catalog and campus information.",
    image: "/images/harvard-clone.jpg",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Framer Motion"],
    category: "featured",
    accentColor: "#c9a84c",
    githubUrl: "https://github.com/himanshuyadavwebdev/harvard-university-clone",
  },
  {
    id: "figma-clone",
    title: "Figma Clone",
    description: "Built a collaborative real-time canvas editor inspired by Figma using Next.js, TypeScript, and Fabric.js. Supports real-time multi-user collaboration powered by Liveblocks with features including shape creation, drag-and-drop, and layered canvas elements.",
    image: "/images/figma-clone.jpg",
    tags: ["Next.js", "TypeScript", "Fabric.js", "Liveblocks"],
    category: "featured",
    accentColor: "#00b4d8",
    githubUrl: "https://github.com/himanshuyadavwebdev/FigmaClone",
  },
  {
    id: "essen-restaurant",
    title: "Essen Restaurant",
    description: "A modern, animated restaurant website built with Next.js 16, React 19, Tailwind CSS v4, and shadcn/ui. Features 7 pages, CSS-only animations, a full cart system, online reservations, and a dynamic menu with category filtering.",
    image: "/images/essen-restaurant.jpg",
    tags: ["Next.js 16", "React 19", "shadcn/ui", "Tailwind CSS v4"],
    category: "fullstack",
    accentColor: "#d4b86a",
    githubUrl: "https://github.com/himanshuyadavwebdev/essen-restaurant",
  },
  {
    id: "resume-analyzer",
    title: "Resume Analyzer",
    description: "Built an AI-powered multilingual resume analyzer using React.js, Node.js, and Groq AI (Llama 3.1) with Firebase Authentication and a custom PDF parser. Supports 7 languages and provides Resume Score, ATS Score, strengths, and improvement suggestions.",
    image: "/images/resume-analyzer.jpg",
    tags: ["React", "Node.js", "Groq AI", "Firebase", "PDF Parser"],
    category: "featured",
    accentColor: "#c9a84c",
    githubUrl: "https://github.com/himanshuyadavwebdev/AI-resume-analyser",
  },
  {
    id: "smart-job-applier",
    title: "Smart Job Applier",
    description: "An intelligent job application assistant that automates job discovery and tracking. Built with React, Express, and the Anthropic Claude API, featuring smart filtering, application management, and AI-powered cover letter generation.",
    image: "/images/smart-job-applier.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Anthropic Claude API", "Express"],
    category: "fullstack",
    accentColor: "#48cae4",
    githubUrl: "https://github.com/himanshuyadavwebdev/smart-job-applier",
  },
  {
    id: "sitehealth-dashboard",
    title: "SiteHealth Dashboard",
    description: "Developed a website health analyzer using React.js and the Claude API that scans any URL and reports on performance, security, page weight, and technical issues with improvement suggestions.",
    image: "/images/sitehealth-dashboard.jpg",
    tags: ["React", "Claude API", "Node.js", "Tailwind CSS"],
    category: "featured",
    accentColor: "#10b981",
    githubUrl: "https://github.com/himanshuyadavwebdev/sitehealth-dashboard",
  },
  {
    id: "syncpad",
    title: "Syncpad",
    description: "A Notion-inspired real-time collaborative document editor with live multi-user sync powered by WebSocket and Yjs. Built with a full-stack architecture supporting rich text editing, presence indicators, and instant conflict resolution.",
    image: "/images/syncpad.jpg",
    tags: ["Next.js", "TypeScript", "WebSocket", "Yjs", "Tailwind CSS", "Node.js"],
    category: "featured",
    accentColor: "#6366f1",
    githubUrl: "https://github.com/himanshuyadavwebdev/syncpad",
  },
]

export const EXPERIENCES: Experience[] = [
  {
    id: "frontend-dev",
    role: "Frontend Developer",
    company: "NogaTech IT Solutions",
    period: "12/2024 - Present",
    description: "Developed responsive and mobile-first web applications using React.js, Next.js, JavaScript, HTML5, CSS3, and Tailwind CSS. Transformed client design specifications into scalable, production-ready user interfaces with a focus on performance and accessibility.",
    achievements: [
      "Developed responsive and mobile-first web applications using React.js, Next.js, and Tailwind CSS",
      "Transformed client design specifications into scalable, production-ready user interfaces with a focus on performance and accessibility",
      "Collaborated with a distributed US-based team across multiple time zones using Git/GitHub, participating in code reviews and agile development workflows",
      "Delivered client-facing projects from development through deployment while maintaining high standards of responsiveness, usability, and cross-browser compatibility",
      "Identified and resolved frontend issues, improving application stability, performance, and overall user experience",
    ],
    type: "work",
  },
  {
    id: "education",
    role: "B.Tech in Computer Science and Engineering",
    company: "IILM University, Greater Noida",
    period: "2022 - 2026",
    description: "Pursuing a Bachelor's degree in Computer Science and Engineering with focus on web technologies and software development.",
    achievements: [
      "Built multiple full-stack projects including AI resume analyzer and real-time collaboration tools",
      "Active in coding clubs and hackathons building practical applications",
      "Strong academic record with focus on modern web technologies",
    ],
    type: "education",
  },
  {
    id: "school-12th",
    role: "Class 12th (Senior Secondary)",
    company: "Government Higher Secondary School, Hathkuri Panna",
    period: "2021 - 2022",
    description: "Completed higher secondary education with focus on science and mathematics.",
    achievements: [],
    type: "education",
  },
  {
    id: "school-10th",
    role: "Class 10th (Secondary)",
    company: "Government Higher Secondary School, Hathkuri Panna",
    period: "2019 - 2020",
    description: "Completed secondary education with foundational academic training.",
    achievements: [],
    type: "education",
  },
]

export const SUBTITLES = [
  "Frontend Developer",
  "React Specialist",
  "Open to Work",
  "AI Enthusiast",
]
