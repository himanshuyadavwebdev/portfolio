interface BadgeProps {
  label: string
  className?: string
}

export default function Badge({ label, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${className}`}
      style={{
        backgroundColor: "color-mix(in srgb, var(--accent) 12%, transparent)",
        color: "var(--accent)",
        border: "1px solid color-mix(in srgb, var(--accent) 30%, transparent)",
      }}
    >
      {label}
    </span>
  )
}
