"use client"

import { m } from "framer-motion"
import { useMagnet } from "@/hooks/useMagnet"

interface MagneticButtonProps {
  children: React.ReactNode
  href?: string
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

export default function MagneticButton({
  children,
  href,
  className = "",
  style,
  onClick,
  type = "button",
  disabled = false,
}: MagneticButtonProps) {
  const { ref, position, handleMouseMove, handleMouseLeave } = useMagnet(0.3)

  const content = (
    <m.div
      ref={ref}
      className={className}
      style={{ cursor: disabled ? "not-allowed" : "pointer", ...style }}
      animate={{ x: position.x, y: position.y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </m.div>
  )

  if (href) {
    return <m.a href={href}>{content}</m.a>
  }

  return (
    <m.button type={type} onClick={onClick} disabled={disabled}>
      {content}
    </m.button>
  )
}
