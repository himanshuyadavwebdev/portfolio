"use client"

import { useRef, useState, useCallback } from "react"

interface MagnetPosition {
  x: number
  y: number
}

export function useMagnet<T extends HTMLElement = HTMLDivElement>(strength: number = 0.3) {
  const ref = useRef<T>(null)
  const [position, setPosition] = useState<MagnetPosition>({ x: 0, y: 0 })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distX = e.clientX - centerX
      const distY = e.clientY - centerY
      setPosition({
        x: distX * strength,
        y: distY * strength,
      })
    },
    [strength]
  )

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 })
  }, [])

  return { ref, position, handleMouseMove, handleMouseLeave }
}
