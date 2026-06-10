"use client"

import { IconArrowRight } from "@tabler/icons-react"
import AnimateTrigger from "@/components/ui/AnimateTrigger"

export default function CallToAction() {
  return (
    <section className="frame-space-before-large frame-space-after-large">
      <div className="width-slim">
        <AnimateTrigger>
          <div className="box bg-light" style={{ padding: "clamp(32px, 4vw, 56px)", textAlign: "center" }}>
            <h2 className="heading-condensed" style={{
              fontSize: "clamp(24px, 3vw, 36px)",
              marginBottom: "16px",
              color: "white",
            }}>
              Ready to build something amazing?
            </h2>
            <p className="big" style={{
              color: "var(--text-secondary)",
              marginBottom: "32px",
              maxWidth: "500px",
              margin: "0 auto 32px",
            }}>
              Let&apos;s create a digital experience that stands out. Whether it&apos;s a new project
              or improving an existing one, I&apos;m here to help.
            </p>
            <div className="flex justify-center" style={{ gap: "12px", flexWrap: "wrap" }}>
              <a href="#contact" className="button">
                Get in touch <IconArrowRight size={16} />
              </a>
              <a href="/resume.pdf" download className="button--secondary button">
                Download resume
              </a>
            </div>
          </div>
        </AnimateTrigger>
      </div>
    </section>
  )
}
