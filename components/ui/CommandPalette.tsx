"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { m, AnimatePresence } from "framer-motion"
import { NAV_LINKS } from "@/lib/constants"
import { IconCommand } from "@tabler/icons-react"

interface CommandPaletteProps {
  open: boolean
  onClose: () => void
}

export default function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)

  const filtered = NAV_LINKS.filter((l) => l.label.toLowerCase().includes(query.toLowerCase()))

  const handleSelect = useCallback(
    (href: string) => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: "smooth" })
      onClose()
    },
    [onClose]
  )

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        if (open) onClose()
        else window.dispatchEvent(new CustomEvent("open-command-palette"))
      }
      if (!open) return
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowDown") {
        e.preventDefault()
        setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1))
      }
      if (e.key === "ArrowUp") {
        e.preventDefault()
        setSelectedIndex((i) => Math.max(i - 1, 0))
      }
      if (e.key === "Enter" && filtered[selectedIndex]) {
        handleSelect(filtered[selectedIndex].href)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open, filtered, selectedIndex, handleSelect, onClose])

  return (
    <AnimatePresence>
      {open && (
        <m.div
          key={String(open)}
          className="fixed inset-0 z-[9999] flex items-start justify-center pt-[15vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <m.div
            className="w-full max-w-lg overflow-hidden rounded-xl border shadow-2xl"
            style={{
              background: "var(--bg-secondary)",
              borderColor: "var(--border)",
            }}
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b px-4 py-3" style={{ borderColor: "var(--border)" }}>
              <IconCommand size={16} style={{ color: "var(--text-muted)" }} />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Navigate to section..."
                autoFocus
                className="w-full bg-transparent text-sm outline-none"
                style={{ color: "var(--text)" }}
              />
              <kbd
                className="rounded px-1.5 py-0.5 text-[10px] font-medium"
                style={{ color: "var(--text-muted)", background: "rgba(255,255,255,0.05)" }}
              >
                ESC
              </kbd>
            </div>
            <div className="max-h-64 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p className="px-3 py-6 text-center text-sm" style={{ color: "var(--text-muted)" }}>
                  No results found
                </p>
              )}
              {filtered.map((link, i) => (
                <button
                  key={link.href}
                  onClick={() => handleSelect(link.href)}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors"
                  style={{
                    background: i === selectedIndex ? "rgba(201, 168, 76, 0.08)" : "transparent",
                    color: i === selectedIndex ? "#c9a84c" : "var(--text-secondary)",
                  }}
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#c9a84c", opacity: i === selectedIndex ? 1 : 0.3 }} />
                  {link.label}
                  <span className="ml-auto text-xs" style={{ color: "var(--text-muted)" }}>
                    {link.href}
                  </span>
                </button>
              ))}
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  )
}
