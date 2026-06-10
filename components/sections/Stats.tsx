"use client"

import React from "react"
import AnimateTrigger from "@/components/ui/AnimateTrigger"
import CountUp from "@/components/ui/CountUp"
import { STATS } from "@/lib/constants"
import { IconCode, IconTools, IconUsers, IconGitBranch } from "@tabler/icons-react"

const iconMap: Record<string, React.ReactNode> = {
  code: <IconCode size={40} />,
  tools: <IconTools size={40} />,
  users: <IconUsers size={40} />,
  "git-branch": <IconGitBranch size={40} />,
}

export default function Stats() {
  return (
    <section id="stats" className="frame-space-before-extra-extra-large frame-space-after-extra-extra-large">
      <div className="width-slimmer">
        <AnimateTrigger>
          <h2 className="style-h2-script text-center" style={{ marginBottom: "clamp(24px, 3vw, 48px)" }}>
            By the numbers
          </h2>
        </AnimateTrigger>
      </div>

      <div className="width-wider">
        <div className="icon-module icon-module--big icon-module--vertical">
          <AnimateTrigger stagger>
            <div className="grid grid-2 grid-medium-4 gap-md">
              {STATS.map((stat) => (
                <div key={stat.label} className="icon-module__entry">
                  <div className="icon-module__icon">
                    {iconMap[stat.icon]}
                  </div>
                  <div className="icon-module__text">
                    <div className="icon-module__title">
                      <CountUp end={stat.value} suffix={stat.suffix || ""} />
                    </div>
                    <div className="icon-module__description">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </AnimateTrigger>
        </div>
      </div>
    </section>
  )
}
