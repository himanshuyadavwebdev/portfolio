"use client"

import AnimateTrigger from "@/components/ui/AnimateTrigger"
import Accordion from "@/components/ui/Accordion"

const faqItems = [
  {
    id: "q1",
    question: "What technologies do you work with?",
    answer: (
      <p>
        I specialize in modern JavaScript/TypeScript ecosystems including React, Next.js,
        and Node.js. I&apos;m also experienced with Tailwind CSS, Framer Motion, Three.js,
        and various databases and cloud services.
      </p>
    ),
  },
  {
    id: "q2",
    question: "Are you available for freelance work?",
    answer: (
      <p>
        Yes! I&apos;m currently open to freelance projects and part-time opportunities.
        I&apos;m also looking for full-time frontend developer roles starting 2026.
      </p>
    ),
  },
  {
    id: "q3",
    question: "What kind of projects do you typically build?",
    answer: (
      <p>
        I build everything from landing pages and marketing sites to full-featured web
        applications including e-commerce platforms, dashboards, and interactive tools.
        I particularly enjoy projects with complex animations and rich user interfaces.
      </p>
    ),
  },
  {
    id: "q4",
    question: "How long does it take to build a website?",
    answer: (
      <p>
        It depends on the scope. A simple landing page can take 1-2 weeks, while a
        full-featured web application can take 1-3 months. I&apos;ll provide a detailed
        timeline after understanding your requirements.
      </p>
    ),
  },
  {
    id: "q5",
    question: "Do you provide ongoing maintenance?",
    answer: (
      <p>
        Absolutely. I offer ongoing support and maintenance packages to keep your website
        updated, secure, and performing optimally.
      </p>
    ),
  },
]

export default function FAQ() {
  return (
    <section className="bg-dark skewed-top" style={{ paddingTop: "clamp(48px, 6vw, 80px)", paddingBottom: "clamp(48px, 6vw, 80px)" }}>
      <div className="width-slim">
        <AnimateTrigger>
          <h2 className="style-h2-script text-center" style={{ marginBottom: "clamp(24px, 3vw, 40px)" }}>
            Frequently asked questions
          </h2>
        </AnimateTrigger>

        <AnimateTrigger>
          <Accordion items={faqItems} />
        </AnimateTrigger>
      </div>
    </section>
  )
}
