"use client"

import { useRef, useState, useEffect, type ReactNode } from "react"
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"

interface SwiperProps {
  children: ReactNode[]
  slidesPerView?: number
  slidesPerViewMedium?: number
  slidesPerViewLarge?: number
  dots?: boolean
  arrows?: boolean
  className?: string
}

export function SwiperSlide({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`swiper-slide ${className}`}>{children}</div>
}

export function Swiper({
  children,
  slidesPerView = 1,
  slidesPerViewMedium = 2,
  slidesPerViewLarge = 3,
  dots = false,
  arrows = false,
  className = "",
}: SwiperProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slidesPerViewActual, setSlidesPerViewActual] = useState(slidesPerView)

  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth
      if (width >= 1024) setSlidesPerViewActual(slidesPerViewLarge)
      else if (width >= 640) setSlidesPerViewActual(slidesPerViewMedium)
      else setSlidesPerViewActual(slidesPerView)
    }
    updateSlidesPerView()
    window.addEventListener("resize", updateSlidesPerView)
    return () => window.removeEventListener("resize", updateSlidesPerView)
  }, [slidesPerView, slidesPerViewMedium, slidesPerViewLarge])

  const totalSlides = children.length
  const maxIndex = Math.max(0, totalSlides - slidesPerViewActual)

  const goTo = (index: number) => {
    const idx = Math.max(0, Math.min(index, maxIndex))
    setCurrentIndex(idx)
    if (containerRef.current) {
      const slide = containerRef.current.children[idx] as HTMLElement
      if (slide) {
        slide.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
      }
    }
  }

  return (
    <div className={`swiper swiper--controls-bottom ${className}`}>
      <div
        ref={containerRef}
        className="swiper-wrapper flex"
        style={{
          gap: "16px",
          overflow: "hidden",
          scrollSnapType: "x mandatory",
        }}
      >
        {children.map((child, i) => (
          <div
            key={i}
            className="swiper-slide flex-shrink-0"
            style={{
              width: `calc(${100 / slidesPerViewActual}% - ${16 * (slidesPerViewActual - 1) / slidesPerViewActual}px)`,
              scrollSnapAlign: "start",
            }}
          >
            {child}
          </div>
        ))}
      </div>

      {(dots || arrows) && (
        <div className="flex items-center justify-center" style={{ gap: "16px", marginTop: "24px" }}>
          {arrows && (
            <button
              onClick={() => goTo(currentIndex - 1)}
              className="swiper-button-prev flex items-center justify-center"
              style={{
                opacity: currentIndex === 0 ? 0.3 : 1,
                cursor: currentIndex === 0 ? "default" : "pointer",
              }}
              disabled={currentIndex === 0}
            >
              <IconArrowLeft size={20} />
            </button>
          )}

          {dots && (
            <div className="swiper-pagination flex" style={{ gap: "8px" }}>
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="swiper-pagination-bullet"
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    border: "none",
                    background: i === currentIndex ? "#989336" : "rgba(255,255,255,0.3)",
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                />
              ))}
            </div>
          )}

          {arrows && (
            <button
              onClick={() => goTo(currentIndex + 1)}
              className="swiper-button-next flex items-center justify-center"
              style={{
                opacity: currentIndex >= maxIndex ? 0.3 : 1,
                cursor: currentIndex >= maxIndex ? "default" : "pointer",
              }}
              disabled={currentIndex >= maxIndex}
            >
              <IconArrowRight size={20} />
            </button>
          )}
        </div>
      )}
    </div>
  )
}
