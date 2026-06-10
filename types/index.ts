export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  tags: string[]
  category: "featured" | "react" | "fullstack"
  accentColor: string
  liveUrl?: string
  githubUrl?: string
  cardLinks?: string[]
}

export interface Skill {
  name: string
  icon: string
  category: "frontend" | "backend" | "tools" | "soft"
  proficiency: number
  color: string
}

export interface Experience {
  id: string
  role: string
  company: string
  companyUrl?: string
  period: string
  description: string
  achievements?: string[]
  type: "work" | "education"
}

export interface SocialLink {
  name: string
  url: string
  icon: string
  color: string
  download?: boolean
}

export interface NavLink {
  label: string
  href: string
}

export interface Stat {
  label: string
  value: number
  suffix?: string
  icon: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}
