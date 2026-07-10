"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { domAnimation, LazyMotion, m, AnimatePresence } from "framer-motion"
import { IconBrandGithub } from "@tabler/icons-react"
import { PROJECTS } from "@/lib/constants"
import SectionWrapper from "@/components/ui/SectionWrapper"
import MagneticButton from "@/components/ui/MagneticButton"
import Badge from "@/components/ui/Badge"

const filters = [
  { key: "all", label: "All" },
  { key: "featured", label: "Featured" },
  { key: "react", label: "React" },
  { key: "fullstack", label: "Full Stack" },
] as const

type FilterKey = (typeof filters)[number]["key"]

function ProjectThumbnail({ src, alt, accentColor, title }: { src: string; alt: string; accentColor: string; title: string }) {
  const [error, setError] = useState(false)

  if (error || !src) {
    return (
      <div
        className="flex aspect-[4/3] items-center justify-center text-5xl font-bold"
        style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
      >
        {title[0]}
      </div>
    )
  }

  return (
    <div className="relative aspect-[4/3] overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        onError={() => setError(true)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading="lazy"
      />
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(to top, ${accentColor}30 0%, transparent 60%)`,
        }}
      />
    </div>
  )
}

function FeaturedCard({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0, 1] }}
      className={`group flex flex-col overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-500 hover:scale-[1.01] lg:flex-row ${
        index % 2 === 0 ? "" : "lg:flex-row-reverse"
      }`}
      style={{
        borderColor: "var(--border)",
        backgroundColor: "color-mix(in srgb, var(--bg) 70%, transparent)",
      }}
    >
      <div className="w-full overflow-hidden lg:w-5/12">
        <ProjectThumbnail
          src={project.image}
          alt={project.title}
          accentColor={project.accentColor}
          title={project.title}
        />
      </div>

      <div className="flex w-full flex-col justify-center gap-4 p-6 lg:w-7/12 lg:p-8">
        <h3
          className="text-2xl font-bold md:text-3xl"
          style={{ color: "var(--text)", fontFamily: "var(--font-heading)" }}
        >
          {project.title}
        </h3>
        <p
          className="text-base leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <Badge key={tag} label={tag} />
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          {project.liveUrl && (
            <MagneticButton
              href={project.liveUrl}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] px-6 py-2.5 text-sm font-semibold text-[var(--bg)] transition-all"
            >
              Live Demo
            </MagneticButton>
          )}
          {project.githubUrl && (
            <MagneticButton
              href={project.githubUrl}
              className="inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-semibold text-[var(--text)] transition-all"
              style={{ borderColor: "var(--border)" }}
            >
              <IconBrandGithub size={16} />
              GitHub
            </MagneticButton>
          )}
        </div>
      </div>
    </m.div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all")

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return PROJECTS
    if (activeFilter === "featured") return PROJECTS.filter((p) => p.category === "featured")
    return PROJECTS.filter((p) =>
      p.tags.some((t: string) => t.toLowerCase().includes(activeFilter))
    )
  }, [activeFilter])

  return (
    <SectionWrapper id="projects">
      <LazyMotion features={domAnimation}>
        <div className="relative py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-16 text-center">
              <m.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "var(--text-muted)" }}
              >
                Portfolio
              </m.span>
              <m.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
                style={{
                  color: "var(--text)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                Featured{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #c9a84c, #e8d48b)",
                  }}
                >
                  Projects
                </span>
              </m.h2>
            </div>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-12 flex flex-wrap items-center justify-center gap-3"
            >
              {filters.map((f) => {
                const isActive = activeFilter === f.key
                return (
                  <button
                    key={f.key}
                    onClick={() => setActiveFilter(f.key)}
                    className="rounded-full px-5 py-2 text-sm font-medium transition-all duration-300"
                    style={{
                      background: isActive
                        ? "linear-gradient(135deg, #c9a84c, #e8d48b)"
                        : "transparent",
                      color: isActive ? "var(--bg)" : "var(--text-secondary)",
                      border: isActive ? "none" : "1px solid var(--border)",
                    }}
                  >
                    {f.label}
                  </button>
                )
              })}
            </m.div>

            <AnimatePresence mode="wait">
              {filteredProjects.length > 0 ? (
                <m.div
                  key={activeFilter}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="space-y-10">
                    {filteredProjects.map((project, index) => (
                      <FeaturedCard key={project.title} project={project} index={index} />
                    ))}
                  </div>
                </m.div>
              ) : (
                <m.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <p
                    className="text-lg font-medium"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    No projects found
                  </p>
                  <p
                    className="mt-2 text-sm"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Try selecting a different filter
                  </p>
                </m.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </LazyMotion>
    </SectionWrapper>
  )
}
