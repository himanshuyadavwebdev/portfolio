"use client"

import { useRef, useState } from "react"
import { domAnimation, LazyMotion, m } from "framer-motion"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { EXPERIENCES } from "@/lib/constants"

gsap.registerPlugin(ScrollTrigger)

function TimelineLine() {
  const lineRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!lineRef.current) return
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0, transformOrigin: "top center" },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 85%",
          end: "bottom 15%",
          scrub: 1.5,
        },
      },
    )
  }, [])

  return (
    <div
      ref={lineRef}
      className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 origin-top"
      style={{ backgroundColor: "var(--border)" }}
    >
      <div
        className="h-full w-full origin-top"
        ref={lineRef}
        style={{
          backgroundColor: "#c9a84c",
          transform: "scaleY(0)",
        }}
      />
    </div>
  )
}

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof EXPERIENCES)[0]
  index: number
}) {
  const [expanded, setExpanded] = useState(false)
  const isLeft = index % 2 === 0

  return (
    <m.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.1, 0, 1] }}
      className={`group relative mb-12 md:mb-20 md:w-[45%] ${
        isLeft ? "md:mr-auto md:pr-8 md:text-right" : "md:ml-auto md:pl-8"
      }`}
    >
      <div
        className={`absolute top-2 hidden h-3.5 w-3.5 rounded-full border-2 md:block ${
          isLeft ? "right-[-7px]" : "left-[-7px]"
        }`}
        style={{
          backgroundColor: "var(--bg)",
          borderColor: "#c9a84c",
          boxShadow: "0 0 0 4px color-mix(in srgb, #c9a84c 20%, transparent)",
        }}
      />

      <div
        className="relative overflow-hidden rounded-2xl border p-6 transition-all duration-500 md:p-8"
        style={{
          borderColor: expanded
            ? "color-mix(in srgb, var(--accent) 40%, transparent)"
            : "var(--border)",
          backgroundColor: expanded
            ? "color-mix(in srgb, var(--accent) 4%, var(--bg))"
            : "var(--bg)",
        }}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <span
          className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: "var(--accent)", fontFamily: "var(--font-body)" }}
        >
          {exp.period}
        </span>

        <h3
          className="mb-1 text-xl font-bold md:text-2xl"
          style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}
        >
          {exp.role}
        </h3>

        <p
          className="mb-3 text-sm font-medium md:text-base"
          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
        >
          {exp.company}
        </p>

        <m.div
          initial={false}
          animate={{
            height: expanded ? "auto" : 0,
            opacity: expanded ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0, 1] }}
          className="overflow-hidden"
        >
          <p
            className="mb-3 text-sm leading-relaxed md:text-base"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
          >
            {exp.description}
          </p>

          {exp.achievements && exp.achievements.length > 0 && (
            <ul className="space-y-1.5" style={{ fontFamily: "var(--font-body)" }}>
              {exp.achievements.map((achievement, i) => (
                <m.li
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -15 : 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-2 text-sm md:text-base"
                  style={{
                    color: "var(--text-muted)",
                    flexDirection: isLeft ? "row-reverse" : "row",
                  }}
                >
                  <span
                    className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: "#c9a84c" }}
                  />
                  <span className={isLeft ? "text-right" : "text-left"}>
                    {achievement}
                  </span>
                </m.li>
              ))}
            </ul>
          )}
        </m.div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 hover:opacity-80"
          style={{ color: "var(--accent)", fontFamily: "var(--font-body)" }}
        >
          {expanded ? "Show Less" : "Show More"}
        </button>
      </div>
    </m.div>
  )
}

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="experience"
        ref={sectionRef}
        className="relative overflow-hidden py-24 md:py-32"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -right-[10%] top-[20%] h-[45vh] w-[45vh] rounded-full opacity-8 blur-[120px]"
            style={{ background: "radial-gradient(circle, #c9a84c 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
            className="mb-16 text-center md:mb-24"
          >
            <p
              className="mb-3 text-sm font-medium uppercase tracking-[0.3em]"
              style={{ color: "var(--accent)", fontFamily: "var(--font-body)" }}
            >
              Career
            </p>
            <h2
              className="text-4xl leading-tight md:text-6xl lg:text-7xl"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--text)",
              }}
            >
              My{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #c9a84c 0%, #e8d48b 60%, #c9a84c 100%)",
                }}
              >
                Journey
              </span>
            </h2>
          </m.div>

          <div className="relative">
            <div
              className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block"
              style={{ backgroundColor: "var(--border)" }}
            />
            <div
              className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 origin-top md:block"
              style={{ backgroundColor: "#c9a84c", transform: "scaleY(0)" }}
              ref={useRef(null)}
            />

            <TimelineLine />

            <div className="relative">
              {EXPERIENCES.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  )
}
