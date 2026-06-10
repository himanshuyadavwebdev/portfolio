"use client"

import { IconArrowUp } from "@tabler/icons-react"
import { SOCIAL_LINKS } from "@/lib/constants"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative" style={{ background: "var(--bg)" }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent 0%, var(--border) 50%, transparent 100%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <a
              href="#hero"
              className="text-lg font-bold tracking-tight"
              style={{ color: "var(--text)", fontFamily: "var(--font-heading)" }}
            >
              Himanshu<span style={{ color: "#c9a84c" }}>.</span>
            </a>
            <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
              Available for opportunities
            </p>
          </div>

          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-all duration-300 hover:text-white"
                style={{ color: "var(--text-muted)" }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm transition-all duration-300 hover:text-white"
            style={{ color: "var(--text-muted)" }}
          >
            Back to top
            <IconArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        <div className="mt-8 text-center text-xs" style={{ color: "var(--text-muted)" }}>
          &copy; {new Date().getFullYear()} Himanshu Yadav. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
