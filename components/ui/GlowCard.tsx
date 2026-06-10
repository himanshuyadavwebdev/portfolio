"use client"

import { useRef, useState, type CSSProperties, type ReactNode } from "react"

interface GlowCardProps {
  children: ReactNode
  className?: string
  accentColor?: string
  style?: CSSProperties
}

export default function GlowCard({ children, className = "", accentColor = "#c9a84c", style }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transition: "box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease",
        ...style,
      }}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${accentColor}25, transparent 60%)`,
          }}
        />
      )}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-px"
        style={{
          background: "rgba(255, 255, 255, 0.06)",
        }}
      />
      {children}
    </div>
  )
}
