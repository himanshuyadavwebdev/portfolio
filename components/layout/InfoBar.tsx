"use client"

import { IconArrowRight } from "@tabler/icons-react"

export default function InfoBar() {
  return (
    <div className="infobar" role="marquee">
      <div className="width-wider">
        <a href="#contact" className="infobar__outer">
          <div className="infobar__inner">
            <p className="small nomargin">
              <strong>Available for projects</strong>: Open to freelance and full-time opportunities
            </p>
            <span className="button button--tertiary" style={{ fontSize: "13px" }}>
              Get in touch <IconArrowRight size={14} />
            </span>
          </div>
        </a>
      </div>
    </div>
  )
}
