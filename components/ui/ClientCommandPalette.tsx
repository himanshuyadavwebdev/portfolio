"use client"

import { useEffect, useState } from "react"
import CommandPalette from "@/components/ui/CommandPalette"

export default function ClientCommandPalette() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener("open-command-palette", handler)
    return () => window.removeEventListener("open-command-palette", handler)
  }, [])

  return <CommandPalette open={open} onClose={() => setOpen(false)} />
}
