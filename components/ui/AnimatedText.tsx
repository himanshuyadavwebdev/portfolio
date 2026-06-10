"use client"

import { useState, useEffect } from "react"
import { domAnimation, LazyMotion, m } from "framer-motion"

interface TypewriterProps {
  words: string[]
  className?: string
}

export function Typewriter({ words, className = "" }: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const currentWord = words[wordIndex]

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentWord.length) {
            setCharIndex((c) => c + 1)
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (charIndex > 0) {
            setCharIndex((c) => c - 1)
          } else {
            setIsDeleting(false)
            setWordIndex((w) => (w + 1) % words.length)
          }
        }
      },
      isDeleting ? 40 : 80
    )
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, currentWord, words])

  return (
    <span className={className}>
      {currentWord.substring(0, charIndex)}
      <span className="animate-pulse" style={{ color: "#c9a84c" }}>|</span>
    </span>
  )
}

interface StaggerTextProps {
  text: string
  className?: string
  delay?: number
}

export function StaggerText({ text, className = "", delay = 0 }: StaggerTextProps) {
  const letters = text.split("")

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.span className={className} variants={containerVariants} initial="hidden" animate="visible" aria-label={text}>
        {letters.map((letter, i) => (
          <m.span key={i} variants={childVariants} className="inline-block" style={{ whiteSpace: letter === " " ? "pre" : undefined }}>
            {letter}
          </m.span>
        ))}
      </m.span>
    </LazyMotion>
  )
}

interface RevealTextProps {
  text: string
  className?: string
}

export function RevealText({ text, className = "" }: RevealTextProps) {
  const words = text.split(" ")

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.span className={className} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {words.map((word, i) => (
          <m.span key={i} variants={wordVariants} className="inline-block mr-[0.25em]">
            {word}
          </m.span>
        ))}
      </m.span>
    </LazyMotion>
  )
}
