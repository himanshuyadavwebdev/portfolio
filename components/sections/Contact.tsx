"use client"

import { useState } from "react"
import { m, AnimatePresence } from "framer-motion"
import {
  IconMail,
  IconMapPin,
  IconPhone,
  IconCopy,
  IconCheck,
  IconArrowRight,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react"
import { PERSONAL, SOCIAL_LINKS } from "@/lib/constants"
import type { ContactFormData } from "@/types"
import MagneticButton from "@/components/ui/MagneticButton"
import SectionWrapper from "@/components/ui/SectionWrapper"

const initialForm: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
}

const inputStyle =
  "w-full border-b-2 border-[var(--border)] bg-transparent pb-2 pt-6 text-sm text-[var(--text)] outline-none transition-all duration-300 focus:border-[var(--accent)]"

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm(initialForm)
    }, 4000)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // silently fail
    }
  }

  return (
    <SectionWrapper id="contact" className="relative overflow-hidden py-24">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "var(--gradient-primary)" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <m.h2
          className="font-[var(--font-heading)] text-4xl font-bold text-[var(--text)] md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get in{" "}
          <span
            className="bg-gradient-to-r from-[#c9a84c] to-[#00b4d8] bg-clip-text text-transparent"
          >
            Touch
          </span>
        </m.h2>

        <m.p
          className="mt-3 text-[var(--text-secondary)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Let&apos;s work together
        </m.p>

        <div className="mt-16 grid gap-16 md:grid-cols-2">
          {/* Left – Contact Info */}
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: "rgba(201, 168, 76, 0.1)" }}
                >
                  <IconMail size={20} style={{ color: "var(--accent)" }} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
                    Email
                  </p>
                  <p className="truncate text-sm text-[var(--text)]">
                    {PERSONAL.email}
                  </p>
                  <button
                    onClick={handleCopy}
                    className="mt-1 flex items-center gap-1 text-xs text-[var(--text-muted)] transition-colors hover:text-[#c9a84c]"
                  >
                    {copied ? (
                      <>
                        <IconCheck size={14} /> Copied
                      </>
                    ) : (
                      <>
                        <IconCopy size={14} /> Copy
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: "rgba(201, 168, 76, 0.1)" }}
                >
                  <IconMapPin size={20} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
                    Location
                  </p>
                  <p className="text-sm text-[var(--text)]">
                    {PERSONAL.location}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: "rgba(201, 168, 76, 0.1)" }}
                >
                  <IconPhone size={20} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
                    Phone
                  </p>
                  <p className="text-sm text-[var(--text)]">
                    {PERSONAL.phone}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <p className="mb-4 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
                Follow Me
              </p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((link) => {
                  const Icon =
                    link.name === "GitHub"
                      ? IconBrandGithub
                      : link.name === "LinkedIn"
                        ? IconBrandLinkedin
                        : IconBrandGithub
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300 hover:scale-110"
                      style={{
                        background: "rgba(201, 168, 76, 0.1)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </div>
            </div>
          </m.div>

          {/* Right – Form */}
          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <m.div
                  key="success"
                  className="flex h-full min-h-[400px] flex-col items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    className="mb-6"
                  >
                    <m.circle
                      cx="40"
                      cy="40"
                      r="36"
                      fill="none"
                      stroke="#c9a84c"
                      strokeWidth="4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    <m.path
                      d="M25 40l10 10 20-20"
                      fill="none"
                      stroke="#00b4d8"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                    />
                  </svg>
                  <h3
                    className="text-2xl font-bold"
                    style={{ color: "var(--text)" }}
                  >
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </m.div>
              ) : (
                <m.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {(["name", "email", "subject"] as const).map((field) => (
                    <div key={field} className="relative">
                      <input
                        id={field}
                        name={field}
                        type={field === "email" ? "email" : "text"}
                        value={form[field]}
                        onChange={handleChange}
                        required
                        className={inputStyle}
                        onFocus={(e) => {
                          const label = e.target.previousElementSibling as HTMLElement
                          if (label) {
                            label.style.top = "0"
                            label.style.fontSize = "11px"
                            label.style.color = "var(--accent)"
                          }
                        }}
                        onBlur={(e) => {
                          const label = e.target.previousElementSibling as HTMLElement
                          if (label && !e.target.value) {
                            label.style.top = "24px"
                            label.style.fontSize = "14px"
                            label.style.color = "var(--text-muted)"
                          }
                        }}
                      />
                      <label
                        htmlFor={field}
                        className="pointer-events-none absolute left-0 transition-all duration-300"
                        style={{
                          top: form[field] ? "0" : "24px",
                          fontSize: form[field] ? "11px" : "14px",
                          color: form[field]
                            ? "var(--accent)"
                            : "var(--text-muted)",
                        }}
                      >
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                    </div>
                  ))}

                  {/* Message */}
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className={`${inputStyle} resize-none`}
                      onFocus={(e) => {
                        const label = e.target.previousElementSibling as HTMLElement
                        if (label) {
                          label.style.top = "0"
                          label.style.fontSize = "11px"
                            label.style.color = "var(--accent)"
                        }
                      }}
                      onBlur={(e) => {
                        const label = e.target.previousElementSibling as HTMLElement
                        if (label && !e.target.value) {
                          label.style.top = "24px"
                          label.style.fontSize = "14px"
                          label.style.color = "var(--text-muted)"
                        }
                      }}
                    />
                    <label
                      htmlFor="message"
                      className="pointer-events-none absolute left-0 transition-all duration-300"
                      style={{
                        top: form.message ? "0" : "24px",
                        fontSize: form.message ? "11px" : "14px",
                        color: form.message
                          ? "var(--accent)"
                          : "var(--text-muted)",
                      }}
                    >
                      Message
                    </label>
                  </div>

                  <div
                    style={{
                      background:
                        "linear-gradient(135deg, var(--accent), var(--accent-dark))",
                    }}
                  >
                    <MagneticButton
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-lg px-8 py-3 text-sm font-medium text-white transition-shadow duration-300 hover:shadow-lg"
                    >
                      Send Message
                      <IconArrowRight size={16} />
                    </MagneticButton>
                  </div>
                </m.form>
              )}
            </AnimatePresence>
          </m.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
