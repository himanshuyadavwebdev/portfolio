"use client"

import type { ReactNode, CSSProperties } from "react"
import { useMotionValue, useSpring, useTransform, LazyMotion, domAnimation, m } from "framer-motion"

interface TiltCardProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export default function TiltCard({ children, className = "", style }: TiltCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    x.set(mouseX / width - 0.5)
    y.set(mouseY / height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, perspective: 1000, ...style }}
        className={className}
      >
        {children}
      </m.div>
    </LazyMotion>
  )
}
