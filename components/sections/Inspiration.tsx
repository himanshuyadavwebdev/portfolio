"use client"

import { IconArrowRight } from "@tabler/icons-react"
import AnimateTrigger from "@/components/ui/AnimateTrigger"

export default function Inspiration() {
  return (
    <section className="frame-space-before-extra-extra-large frame-space-after-extra-extra-large">
      <div className="width-wider">
        <div className="columns gap-xl align-center">
          <div className="col-12 col-medium-5 col-large-5">
            <AnimateTrigger>
              <div className="pl-6" style={{ borderLeft: "3px solid #989336" }}>
                <span className="tagline">Philosophy</span>
                <h2 className="style-h2-script" style={{ fontSize: "clamp(50px, 7vw, 90px)" }}>
                  Clean code.
                  <br />
                  Great design.
                </h2>
                <p className="big" style={{ color: "var(--text-secondary)", marginTop: "16px" }}>
                  I believe the best digital experiences come from the intersection of performance,
                  aesthetics, and thoughtful interaction design.
                </p>
                <div className="flex" style={{ gap: "12px", marginTop: "24px", flexWrap: "wrap" }}>
                  <a href="#skills" className="button">
                    See my skills <IconArrowRight size={16} />
                  </a>
                  <a href="#projects" className="button--secondary button">
                    View projects
                  </a>
                </div>
              </div>
            </AnimateTrigger>
          </div>

          <div className="col-12 col-medium-6 col-large-6" style={{ marginLeft: "auto" }}>
            <AnimateTrigger>
              <div className="grid grid-2 gap-md">
                <div
                  className="rounded-2xl"
                  style={{
                    width: "100%",
                    height: "280px",
                    background: "linear-gradient(135deg, rgba(152,147,54,0.08) 0%, transparent 100%)",
                    border: "1px solid rgba(152,147,54,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className="text-center">
                    <div className="style-h4" style={{ color: "var(--text-gold)" }}>4+</div>
                    <p className="small" style={{ color: "var(--text-muted)" }}>Years coding</p>
                  </div>
                </div>
                <div
                  className="rounded-2xl"
                  style={{
                    width: "100%",
                    height: "280px",
                    background: "linear-gradient(135deg, rgba(0,71,255,0.08) 0%, transparent 100%)",
                    border: "1px solid rgba(0,71,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "40px",
                  }}
                >
                  <div className="text-center">
                    <div className="style-h4" style={{ color: "#0047ff" }}>10+</div>
                    <p className="small" style={{ color: "var(--text-muted)" }}>Projects built</p>
                  </div>
                </div>
                <div
                  className="rounded-2xl"
                  style={{
                    width: "100%",
                    height: "280px",
                    background: "linear-gradient(135deg, rgba(152,147,54,0.08) 0%, transparent 100%)",
                    border: "1px solid rgba(152,147,54,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "-40px",
                  }}
                >
                  <div className="text-center">
                    <div className="style-h4" style={{ color: "var(--text-gold)" }}>2026</div>
                    <p className="small" style={{ color: "var(--text-muted)" }}>Graduating</p>
                  </div>
                </div>
                <div
                  className="rounded-2xl"
                  style={{
                    width: "100%",
                    height: "280px",
                    background: "linear-gradient(135deg, rgba(0,71,255,0.08) 0%, transparent 100%)",
                    border: "1px solid rgba(0,71,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className="text-center">
                    <div className="style-h4" style={{ color: "#0047ff" }}>∞</div>
                    <p className="small" style={{ color: "var(--text-muted)" }}>To learn</p>
                  </div>
                </div>
              </div>
            </AnimateTrigger>
          </div>
        </div>
      </div>
    </section>
  )
}
