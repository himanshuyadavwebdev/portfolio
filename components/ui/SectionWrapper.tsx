"use client"

import { type ReactNode } from "react"
import { domAnimation, LazyMotion, m } from "framer-motion"

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
  style?: React.CSSProperties
}

export default function SectionWrapper({
  children,
  className,
  id,
  style,
}: SectionWrapperProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        id={id}
        className={className}
        style={style}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </m.section>
    </LazyMotion>
  )
}
