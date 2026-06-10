"use client"

import { useEffect, useState, useRef } from "react"
import { domAnimation, LazyMotion, m } from "framer-motion"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { IconBrandGithub, IconBrandLinkedin, IconFileText, IconExternalLink } from "@tabler/icons-react"
import { PERSONAL, SUBTITLES, SOCIAL_LINKS } from "@/lib/constants"

gsap.registerPlugin(ScrollTrigger)

function useTypewriter(words: string[], typingSpeed = 80, deletingSpeed = 50, pauseDuration = 2000) {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting) {
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), typingSpeed)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pauseDuration)
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), deletingSpeed)
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }, deletingSpeed)
      }
    }

    return () => clearTimeout(timeout)
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseDuration])

  return text
}

function RotatingSkills() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % SUBTITLES.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="inline-block min-w-[8ch] text-center tabular-nums">
      {SUBTITLES.map((skill, i) => (
        <m.span
          key={skill}
          className="block"
          initial={{ y: 40, opacity: 0, rotateX: -90 }}
          animate={
            i === index
              ? { y: 0, opacity: 1, rotateX: 0 }
              : { y: -40, opacity: 0, rotateX: 90 }
          }
          transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] as const }}
          style={{ position: i === index ? "relative" : "absolute", left: 0, right: 0 }}
        >
          {skill}
        </m.span>
      ))}
    </span>
  )
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const subtitleText = useTypewriter(SUBTITLES)

  useGSAP(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.to(contentRef.current, {
      y: () => section.offsetHeight * 0.15,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    })
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0, filter: "blur(8px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.25, 0.1, 0, 1] as const },
    },
  }

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="hero"
        ref={sectionRef}
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -left-[10%] -top-[20%] h-[60vh] w-[60vh] rounded-full opacity-15 blur-[120px]"
            style={{ background: "radial-gradient(circle, #c9a84c 0%, transparent 70%)" }}
          />
          <div
            className="absolute -bottom-[15%] -right-[10%] h-[50vh] w-[50vh] rounded-full opacity-10 blur-[120px]"
            style={{ background: "radial-gradient(circle, #00b4d8 0%, transparent 70%)" }}
          />
          <div
            className="absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-5 blur-[160px]"
            style={{ background: "radial-gradient(circle, #c9a84c 0%, #00b4d8 50%, transparent 70%)" }}
          />
        </div>

        <div ref={contentRef} className="relative z-10 w-full max-w-6xl px-6 py-24">
          <m.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center"
          >
            <m.p
              variants={itemVariants}
              className="mb-4 text-sm font-medium uppercase tracking-[0.3em]"
              style={{ color: "var(--accent)" }}
            >
              {PERSONAL.title || "Full-Stack Developer"}
            </m.p>

            <m.h1
              variants={itemVariants}
              className="mb-6 leading-[1.05] tracking-tight"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(3rem, 10vw, 7rem)",
                color: "var(--text)",
              }}
            >
              <span className="inline-block">Himanshu</span>{" "}
              <span
                className="inline-block bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #c9a84c 0%, #e8d48b 40%, #c9a84c 80%)",
                }}
              >
                Yadav
              </span>
            </m.h1>

            <m.div
              variants={itemVariants}
              className="mb-4 h-12 overflow-hidden"
              style={{ color: "var(--text-secondary)" }}
            >
              <span
                className="inline-block text-lg md:text-xl"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {subtitleText}
                <m.span
                  className="ml-0.5 inline-block h-[1.1em] w-[2px] animate-pulse align-middle"
                  style={{ backgroundColor: "var(--accent)" }}
                />
              </span>
            </m.div>

            <m.p
              variants={itemVariants}
              className="mb-4 max-w-xl text-base leading-relaxed md:text-lg"
              style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
            >
              <RotatingSkills />
              <span className="ml-2">&mdash; Building modern web experiences that are fast, interactive, and impactful.</span>
            </m.p>

            <m.div variants={itemVariants} className="mt-10 flex flex-wrap items-center justify-center gap-5">
              <m.a
                href="#projects"
                className="group relative overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold uppercase tracking-widest transition-transform duration-500 hover:scale-105"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--bg)",
                  fontFamily: "var(--font-body)",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">View Projects</span>
                <span
                  className="absolute inset-0 -translate-x-full rounded-full transition-transform duration-500 group-hover:translate-x-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #c9a84c 0%, #e8d48b 50%, #c9a84c 100%)",
                  }}
                />
              </m.a>

              <m.a
                href="#contact"
                className="group relative overflow-hidden rounded-full border px-8 py-3.5 text-sm font-semibold uppercase tracking-widest transition-all duration-500 hover:scale-105"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text)",
                  fontFamily: "var(--font-body)",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">Contact Me</span>
                <span
                  className="absolute inset-0 origin-left scale-x-0 rounded-full transition-transform duration-500 group-hover:scale-x-100"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--accent) 15%, transparent)",
                  }}
                />
              </m.a>
            </m.div>

            <m.div variants={itemVariants} className="mt-14 flex items-center gap-4">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.name === "GitHub" ? IconBrandGithub : link.name === "LinkedIn" ? IconBrandLinkedin : IconFileText
                return (
                  <m.a
                    key={link.name}
                    href={link.url}
                    target={link.download ? undefined : "_blank"}
                    rel={link.download ? undefined : "noopener noreferrer"}
                    download={link.download}
                    className="group inline-flex items-center gap-2.5 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:scale-105"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text-secondary)",
                    }}
                    whileHover={{
                      color: "var(--accent)",
                      borderColor: "var(--accent)",
                      backgroundColor: "color-mix(in srgb, var(--accent) 8%, transparent)",
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Icon size={16} />
                    <span>{link.name}</span>
                    {link.download ? null : <IconExternalLink size={12} className="opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-60 group-hover:translate-x-0" />}
                  </m.a>
                )
              })}
            </m.div>
          </m.div>
        </div>

        <m.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <m.div
            className="flex flex-col items-center gap-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span
              className="text-[10px] font-medium uppercase tracking-[0.25em]"
              style={{ color: "var(--text-muted)" }}
            >
              Scroll
            </span>
            <svg
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
              style={{ color: "var(--text-muted)" }}
            >
              <rect
                x="1"
                y="1"
                width="14"
                height="22"
                rx="7"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <m.circle
                cx="8"
                cy="8"
                r="2.5"
                fill="currentColor"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </m.div>
        </m.div>
      </section>
    </LazyMotion>
  )
}
