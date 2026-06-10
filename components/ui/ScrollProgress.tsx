"use client"

import { useScrollProgress } from "@/hooks/useScrollProgress"

export default function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div
      className="fixed left-0 top-0 z-50 h-[3px]"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(90deg, var(--accent), #00b4d8)",
        transition: "width 0.1s linear",
      }}
    />
  )
}
