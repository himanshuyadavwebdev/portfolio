"use client"

import { useState, useEffect } from "react"
import { IconMenu2, IconX, IconSun, IconMoon } from "@tabler/icons-react"
import { NAV_LINKS } from "@/lib/constants"
import { useTheme } from "@/components/providers/ThemeProvider"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "color-mix(in srgb, var(--bg) 75%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(1.4)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px) saturate(1.4)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="text-lg font-bold tracking-tight transition-colors duration-300 hover:opacity-70"
          style={{ color: "var(--text)", fontFamily: "var(--font-heading)" }}
        >
          HY<span style={{ color: "#c9a84c" }}>.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium transition-colors duration-300 hover:text-white"
              style={{ color: "var(--text-secondary)" }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-4 flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-300 hover:border-white/20"
            style={{
              color: "var(--text-muted)",
              border: "1px solid var(--border)",
            }}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <IconSun size={14} /> : <IconMoon size={14} />}
            <span className="hidden lg:inline">{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="flex items-center md:hidden"
          style={{ color: "var(--text)" }}
          aria-label="Toggle menu"
        >
          {open ? <IconX size={20} /> : <IconMenu2 size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t px-6 py-4 md:hidden" style={{ borderColor: "var(--border)", background: "var(--bg)" }}>
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium transition-colors"
                style={{ color: "var(--text-secondary)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
