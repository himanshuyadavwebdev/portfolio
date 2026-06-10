"use client"

import type { ReactNode } from "react"
import dynamic from "next/dynamic"
import SmoothScroll from "@/components/layout/SmoothScroll"
import ScrollProgress from "@/components/ui/ScrollProgress"

const CustomCursor = dynamic(() => import("@/components/ui/CustomCursor"), { ssr: false })
const Navbar = dynamic(() => import("@/components/layout/Navbar"), { ssr: false })

function PageLoadOverlay() {
  return (
    <div
      className="fixed inset-0 z-[9998] pointer-events-none"
      style={{
        background: "var(--gradient-primary)",
        animation: "slideUp 1s ease-in-out forwards",
        animationDelay: "0.3s",
      }}
    />
  )
}

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PageLoadOverlay />
      <SmoothScroll>
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        {children}
      </SmoothScroll>
    </>
  )
}
