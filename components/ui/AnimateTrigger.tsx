"use client"

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react"

interface AnimateTriggerProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  stagger?: boolean
  as?: "div" | "section"
}

export default function AnimateTrigger({
  children,
  className = "",
  style,
  stagger = false,
  as: Tag = "div",
}: AnimateTriggerProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view")
          observer.unobserve(el)
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`animate-trigger${stagger ? " animate-trigger--stagger" : ""} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  )
}
