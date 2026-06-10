"use client"

import { useState, type ReactNode } from "react"
import { IconChevronDown } from "@tabler/icons-react"

interface AccordionItem {
  id: string
  question: string
  answer: ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

function AccordionItem({ item, isOpen, onToggle }: { item: AccordionItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="accordion-item animate-trigger">
      <button
        className="accordion-item__header"
        onClick={onToggle}
        aria-expanded={isOpen}
        type="button"
      >
        <span id={`${item.id}-title`}>{item.question}</span>
        <IconChevronDown size={20} className="accordion-item__icon" />
      </button>
      <div
        className={`accordion-item__content${isOpen ? " open" : ""}`}
        role="region"
        aria-labelledby={`${item.id}-title`}
      >
        <div className="rte-content">{item.answer}</div>
      </div>
    </div>
  )
}

export default function Accordion({ items, className = "" }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div className={`accordion-container ${className}`}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
        />
      ))}
    </div>
  )
}
