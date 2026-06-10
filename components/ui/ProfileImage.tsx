"use client"

import { useState } from "react"
import Image from "next/image"

interface ProfileImageProps {
  src: string
  alt: string
  size?: number
  className?: string
}

export default function ProfileImage({ src, alt, size = 120, className = "" }: ProfileImageProps) {
  const [error, setError] = useState(false)

  if (error || !src) {
    return (
      <div
        className={`flex items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--secondary)] ${className}`}
        style={{ width: size, height: size }}
      >
        <span className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
          HY
        </span>
      </div>
    )
  }

  return (
    <div
      className={`relative overflow-hidden rounded-full ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
        onError={() => setError(true)}
        priority
      />
    </div>
  )
}
