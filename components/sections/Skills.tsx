"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { domAnimation, LazyMotion, m, AnimatePresence } from "framer-motion";
import { SKILLS } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";

const categories = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "tools", label: "Tools" },
  { key: "soft", label: "Soft" },
] as const;

type CategoryKey = (typeof categories)[number]["key"];

interface SkillRingProps {
  progress: number;
  color: string;
  size?: number;
  strokeWidth?: number;
}

function SkillRing({ progress, color, size = 88, strokeWidth = 5 }: SkillRingProps) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = animated ? circumference * (1 - progress / 100) : circumference;

  return (
    <div ref={ref} className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--border)"
          strokeWidth={strokeWidth}
        />
        <m.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>
      <span
        className="absolute inset-0 flex items-center justify-center text-sm font-bold"
        style={{ color: "var(--text)" }}
      >
        {animated ? progress : 0}%
      </span>
    </div>
  );
}

const CATEGORY_COLORS: Record<string, string> = {
  frontend: "#c9a84c",
  backend: "#4fc3c3",
  tools: "#7a8ea8",
  soft: "#c9a8a0",
}

function getCategoryColor(category: string): string {
  return CATEGORY_COLORS[category] || "#c9a84c"
}

interface SkillCardProps {
  name: string;
  category: string;
  level: number;
  index: number;
}

function SkillCard({ name, category, level, index }: SkillCardProps) {
  const catColor = getCategoryColor(category)
  return (
    <m.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative flex flex-col items-center gap-5 rounded-2xl border p-8 text-center backdrop-blur-sm transition-colors"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--bg-secondary)",
      }}
    >
      <SkillRing progress={level} color={catColor} />
      <div className="flex flex-col items-center gap-2">
        <h3
          className="text-lg font-semibold tracking-tight"
          style={{ color: "var(--text)" }}
        >
          {name}
        </h3>
        <span
          className="inline-block rounded-full px-3 py-0.5 text-[11px] font-medium uppercase tracking-widest"
          style={{
            backgroundColor: `${catColor}18`,
            color: catColor,
          }}
        >
          {category}
        </span>
      </div>
    </m.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");

  const filteredSkills = useMemo(
    () =>
      activeCategory === "all"
        ? SKILLS
        : SKILLS.filter((s) => s.category === activeCategory),
    [activeCategory]
  );

  return (
    <SectionWrapper id="skills">
      <LazyMotion features={domAnimation}>
        <div className="relative py-24 md:py-32">
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            <div
              className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full opacity-[0.08] blur-[120px]"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div
              className="absolute -bottom-40 -right-40 h-[35rem] w-[35rem] rounded-full opacity-[0.06] blur-[120px]"
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
                Skills
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
                My{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #c9a84c, #e8d48b)",
                  }}
                >
                  Toolkit
                </span>
              </m.h2>
            </div>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-12 flex flex-wrap items-center justify-center gap-3"
            >
              {categories.map((cat) => {
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className="rounded-full px-5 py-2 text-sm font-medium transition-all duration-300"
                    style={{
                      background: isActive
                        ? "linear-gradient(135deg, #c9a84c, #e8d48b)"
                        : "transparent",
                      color: isActive ? "var(--bg)" : "var(--text-secondary)",
                      border: isActive ? "none" : "1px solid var(--border)",
                    }}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </m.div>

            <AnimatePresence mode="wait">
              {filteredSkills.length > 0 ? (
                <m.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                >
                  {filteredSkills.map((skill, i) => (
                    <SkillCard
                      key={skill.name}
                      name={skill.name}
                      category={skill.category}
                      level={skill.proficiency}
                      index={i}
                    />
                  ))}
                </m.div>
              ) : (
                <m.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <p
                    className="text-lg font-medium"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    No skills found
                  </p>
                  <p
                    className="mt-2 text-sm"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Try selecting a different category
                  </p>
                </m.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </LazyMotion>
    </SectionWrapper>
  );
}
