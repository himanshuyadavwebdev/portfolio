"use client";

import { useState } from "react";
import { domAnimation, LazyMotion, m, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

interface Tool {
  name: string;
  description: string;
}

interface ToolCategory {
  id: string;
  label: string;
  description: string;
  tools: Tool[];
}

const toolkitData: ToolCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Technologies I use to build rich, responsive interfaces",
    tools: [
      { name: "React", description: "Component-based UI library for modern web applications" },
      { name: "Next.js", description: "Full-stack React framework with SSR, SSG, and RSC" },
      { name: "TypeScript", description: "Typed superset of JavaScript for scalable codebases" },
      { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development" },
      { name: "Framer Motion", description: "Declarative animation library for React" },
      { name: "GSAP", description: "High-performance animation platform for the web" },
    ],
  },
  {
    id: "design",
    label: "Design",
    description: "Design tools and principles that guide my creative process",
    tools: [
      { name: "Figma", description: "Collaborative interface design and prototyping tool" },
      { name: "Responsive Design", description: "Mobile-first approach ensuring consistency across devices" },
      { name: "Design Systems", description: "Scalable component-driven design methodologies" },
      { name: "UI/UX Principles", description: "User-centered design with focus on accessibility" },
    ],
  },
  {
    id: "devtools",
    label: "Development Tools",
    description: "Essential tools that power my development workflow",
    tools: [
      { name: "VS Code", description: "Lightweight yet powerful code editor with rich ecosystem" },
      { name: "Git & GitHub", description: "Version control and collaborative development platform" },
      { name: "Docker", description: "Containerized environments for consistent development" },
      { name: "Postman", description: "API development and testing tool" },
      { name: "Vercel", description: "Serverless deployment platform with edge functions" },
    ],
  },
];

export default function Toolkit() {
  const [activeCategory, setActiveCategory] = useState(toolkitData[0].id);

  const currentCategory = toolkitData.find((c) => c.id === activeCategory)!;

  return (
    <SectionWrapper id="toolkit">
      <LazyMotion features={domAnimation}>
        <div className="relative py-24 md:py-32">
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            <div
              className="absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full opacity-[0.06] blur-[120px]"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div
              className="absolute -bottom-40 left-1/3 h-[30rem] w-[30rem] rounded-full opacity-[0.05] blur-[120px]"
              style={{ background: "var(--accent)" }}
            />
          </div>

          <div className="relative mx-auto max-w-6xl px-6">
            <div className="mb-16 text-center">
              <m.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "var(--text-muted)" }}
              >
                Toolkit
              </m.span>
              <m.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
                style={{
                  color: "var(--text)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                Technologies{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #c9a84c, #e8d48b)",
                  }}
                >
                  I Work With
                </span>
              </m.h2>
            </div>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-12 flex flex-wrap justify-center gap-4"
            >
              {toolkitData.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className="rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300"
                    style={{
                      background: isActive
                        ? "linear-gradient(135deg, #c9a84c, #e8d48b)"
                        : "transparent",
                      color: isActive ? "#0a0a0a" : "var(--text-secondary)",
                      border: isActive ? "none" : "1px solid var(--border)",
                    }}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </m.div>

            <AnimatePresence mode="wait">
              <m.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
              >
                <p
                  className="mb-8 text-center text-base"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {currentCategory.description}
                </p>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {currentCategory.tools.map((tool, i) => (
                    <m.div
                      key={tool.name}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="group rounded-xl border p-5 transition-all duration-300"
                      style={{
                        borderColor: "var(--border)",
                        backgroundColor: "var(--bg-secondary)",
                      }}
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <h4
                          className="text-base font-semibold"
                          style={{ color: "var(--text)" }}
                        >
                          {tool.name}
                        </h4>
                        <span
                          className="rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider"
                          style={{
                            backgroundColor: "#c9a84c20",
                            color: "#c9a84c",
                          }}
                        >
                          {currentCategory.label}
                        </span>
                      </div>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {tool.description}
                      </p>
                    </m.div>
                  ))}
                </div>
              </m.div>
            </AnimatePresence>
          </div>
        </div>
      </LazyMotion>
    </SectionWrapper>
  );
}
