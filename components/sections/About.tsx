"use client"

import { useRef } from "react"
import { domAnimation, LazyMotion, m } from "framer-motion"
import { PERSONAL, STATS } from "@/lib/constants"
import CountUp from "@/components/ui/CountUp"
import ProfileImage from "@/components/ui/ProfileImage"

const blobAnimation = {
  animate: {
    scale: [1, 1.15, 0.95, 1.1, 1],
    rotate: [0, 90, 180, 270, 360],
    borderRadius: ["40% 60% 60% 40% / 60% 30% 70% 40%", "30% 70% 50% 50% / 50% 60% 40% 60%"],
    transition: { duration: 20, repeat: Infinity, ease: "linear" as const },
  },
}

function StatCard({ stat, index }: { stat: (typeof STATS)[0]; index: number }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0, 1] }}
      className="group relative overflow-hidden rounded-2xl border p-6 text-center transition-all duration-500 hover:scale-[1.02]"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "color-mix(in srgb, var(--bg) 80%, transparent)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in srgb, var(--accent) 8%, transparent) 0%, transparent 50%)",
        }}
      />

      <div
        className="mb-1 text-4xl font-bold md:text-5xl"
        style={{
          fontFamily: "var(--font-heading)",
          backgroundImage: "linear-gradient(135deg, #c9a84c 0%, #e8d48b 60%, #c9a84c 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        <CountUp end={stat.value} suffix={stat.suffix || "+"} duration={2.5} />
      </div>

      <p
        className="text-sm font-medium uppercase tracking-wider"
        style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
      >
        {stat.label}
      </p>
    </m.div>
  )
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const bioParagraphs = PERSONAL.bio.split("\n").filter(Boolean)

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="about"
        ref={sectionRef}
        className="relative overflow-hidden py-24 md:py-32"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <m.div
            className="absolute -left-[15%] top-[10%] h-[50vh] w-[50vh] opacity-10 blur-[100px]"
            style={{ background: "radial-gradient(circle, #c9a84c 0%, transparent 70%)" }}
            {...blobAnimation}
          />
          <m.div
            className="absolute -bottom-[10%] -right-[10%] h-[40vh] w-[40vh] opacity-8 blur-[100px]"
            style={{ background: "radial-gradient(circle, #00b4d8 0%, transparent 70%)" }}
            {...blobAnimation}
            animate={{
              ...blobAnimation.animate,
              transition: { duration: 20, repeat: Infinity, ease: "linear", delay: 5, repeatType: "reverse" },
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
            className="mb-6 text-center"
          >
            <p
              className="mb-3 text-sm font-medium uppercase tracking-[0.3em]"
              style={{ color: "var(--accent)", fontFamily: "var(--font-body)" }}
            >
              About
            </p>
            <h2
              className="text-4xl leading-tight md:text-6xl lg:text-7xl"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--text)",
              }}
            >
              About{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #c9a84c 0%, #e8d48b 60%, #c9a84c 100%)",
                }}
              >
                Me
              </span>
            </h2>
          </m.div>

          <div className="grid items-center gap-12 md:grid-cols-5 md:gap-16">
            <div className="md:col-span-3">
              <m.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0, 1] }}
                className="space-y-5"
                style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
              >
                {bioParagraphs.map((paragraph, i) => (
                  <p key={i} className="text-base leading-relaxed md:text-lg">
                    {paragraph}
                  </p>
                ))}

                {PERSONAL.currently && (
                  <div
                    className="mt-8 rounded-xl border p-5"
                    style={{
                      borderColor: "color-mix(in srgb, var(--accent) 25%, transparent)",
                      backgroundColor: "color-mix(in srgb, var(--accent) 5%, transparent)",
                    }}
                  >
                    <p
                      className="mb-2 text-xs font-semibold uppercase tracking-[0.2em]"
                      style={{ color: "var(--accent)" }}
                    >
                      Currently Focused
                    </p>
                    <p className="text-base md:text-lg" style={{ color: "var(--text)" }}>
                      {PERSONAL.currently}
                    </p>
                  </div>
                )}
              </m.div>
            </div>

            <m.div
              className="flex justify-center md:col-span-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0, 1] }}
            >
              <div className="relative">
                <m.div
                  className="absolute -inset-[6px] rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" as const }}
                  style={{
                    background:
                      "conic-gradient(from 0deg, #c9a84c, #00b4d8, #e8d48b, #c9a84c)",
                  }}
                />
                <div
                  className="relative flex h-56 w-56 items-center justify-center overflow-hidden rounded-full md:h-72 md:w-72"
                  style={{ backgroundColor: "color-mix(in srgb, var(--text) 5%, var(--bg))" }}
                >
                  <ProfileImage
                    src={PERSONAL.avatarUrl}
                    alt={PERSONAL.fullName}
                    size={288}
                    className="h-full w-full"
                  />
                </div>
              </div>
            </m.div>
          </div>

          {STATS && STATS.length > 0 && (
            <m.div
              className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0, 1] }}
            >
              {STATS.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} />
              ))}
            </m.div>
          )}
        </div>
      </section>
    </LazyMotion>
  )
}
