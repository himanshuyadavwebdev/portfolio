"use client"

import { createContext, useContext, useLayoutEffect, useState, type ReactNode } from "react"

type Theme = "dark" | "light"

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
})

export const useTheme = () => useContext(ThemeContext)

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark"
    try {
      const stored = localStorage.getItem("theme")
      if (stored === "light" || stored === "dark") return stored
    } catch {}
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
  })

  useLayoutEffect(() => {
    const root = document.documentElement
    root.classList.toggle("light", theme === "light")
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
