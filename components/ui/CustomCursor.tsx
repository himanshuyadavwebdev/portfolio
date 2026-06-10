"use client"

import { useEffect, useRef, useState } from "react"

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const [isPointer, setIsPointer] = useState(false)
  const pos = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const dot = useRef({ x: 0, y: 0 })
  const raf = useRef<number>(0)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(pointer: coarse)").matches) return

    const onMouse = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      const t = e.target as HTMLElement
      const clickable = !!t.closest?.("a, button, [data-cursor], input, textarea, select")
      setIsPointer((prev) => {
        if (prev !== clickable) return clickable
        return prev
      })
    }

    window.addEventListener("mousemove", onMouse, { passive: true })

    const animate = () => {
      const lerp = isPointer ? 0.1 : 0.15
      ring.current.x += (pos.current.x - ring.current.x) * lerp
      ring.current.y += (pos.current.y - ring.current.y) * lerp
      dot.current.x += (pos.current.x - dot.current.x) * 0.35
      dot.current.y += (pos.current.y - dot.current.y) * 0.35

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.current.x}px, ${dot.current.y}px, 0)`
      }

      raf.current = requestAnimationFrame(animate)
    }
    raf.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", onMouse)
      cancelAnimationFrame(raf.current)
    }
  }, [isPointer])

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null

  const ringSize = isPointer ? 56 : 32

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full will-change-transform"
        style={{
          width: ringSize,
          height: ringSize,
          marginLeft: -ringSize / 2,
          marginTop: -ringSize / 2,
          border: isPointer ? "1.5px solid rgba(201, 168, 76, 0.5)" : "1px solid color-mix(in srgb, var(--text) 15%, transparent)",
          backgroundColor: isPointer ? "rgba(201, 168, 76, 0.05)" : "color-mix(in srgb, var(--text) 3%, transparent)",
          transition: "width 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94), height 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94), border 0.3s ease, background-color 0.3s ease",
        }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-[6px] w-[6px] rounded-full will-change-transform"
        style={{
          backgroundColor: "var(--accent)",
          boxShadow: "0 0 6px color-mix(in srgb, var(--accent) 50%, transparent)",
          marginLeft: -3,
          marginTop: -3,
        }}
      />
    </>
  )
}
