"use client"

import { IconArrowRight } from "@tabler/icons-react"
import AnimateTrigger from "@/components/ui/AnimateTrigger"
import { Swiper, SwiperSlide } from "@/components/ui/Swiper"

const services = [
  {
    title: "Web Development",
    tagline: "Full Stack",
    description: "Building performant, responsive web applications with React, Next.js, and modern JavaScript.",
    image: "linear-gradient(135deg, #1a3d4a 0%, #0d2b35 100%)",
  },
  {
    title: "UI Animation",
    tagline: "Motion Design",
    description: "Creating smooth, engaging micro-interactions and page transitions with Framer Motion.",
    image: "linear-gradient(135deg, #4a3d1a 0%, #2b1a0d 100%)",
  },
  {
    title: "API Integration",
    tagline: "Backend",
    description: "Connecting frontend to powerful backends with REST, GraphQL, and real-time data.",
    image: "linear-gradient(135deg, #1a4a3d 0%, #0d352b 100%)",
  },
  {
    title: "UI/UX Design",
    tagline: "Design",
    description: "Designing intuitive interfaces with attention to detail, accessibility, and user experience.",
    image: "linear-gradient(135deg, #3d1a4a 0%, #2b0d35 100%)",
  },
]

export default function Services() {
  return (
    <section className="bg-dark skewed-top" style={{ paddingTop: "clamp(48px, 6vw, 80px)", paddingBottom: "clamp(48px, 6vw, 80px)" }}>
      <div className="width-slim">
        <AnimateTrigger>
          <h2 className="style-h2-script text-center" style={{ marginBottom: "clamp(24px, 3vw, 40px)" }}>
            Your project
          </h2>
        </AnimateTrigger>
      </div>

      <div className="width-wider">
        <AnimateTrigger>
          <div className="teaser-container teaser-container--overlaying">
            <Swiper
              slidesPerView={1}
              slidesPerViewMedium={1}
              slidesPerViewLarge={1}
              dots
              arrows
            >
              {services.map((service) => (
                <SwiperSlide key={service.title}>
                  <a href="#contact" className="teaser teaser--overlaying imglink imglink--content skewed-bottom-medium" style={{
                    display: "block",
                    position: "relative",
                    overflow: "hidden",
                    textDecoration: "none",
                  }}>
                    <div className="teaser__image">
                      <div
                        style={{
                          width: "100%",
                          height: "400px",
                          background: service.image,
                          transition: "transform 0.6s ease",
                        }}
                      />
                    </div>
                    <div className="teaser__overlay" style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%)",
                    }} />
                    <div className="teaser__content color-bright text-center" style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "40px 32px",
                    }}>
                      <div className="teaser__tagline" style={{
                        color: "var(--text-gold)",
                        fontSize: "clamp(12px, 1.2vw, 14px)",
                        marginBottom: "8px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}>
                        {service.tagline}
                      </div>
                      <div className="teaser__title">
                        <h3 className="style-h2" style={{ fontSize: "clamp(24px, 3vw, 36px)" }}>
                          {service.title}
                        </h3>
                      </div>
                      <div className="teaser__text rte-content text-center" style={{ marginTop: "12px" }}>
                        <p className="big" style={{ color: "rgba(255,255,255,0.8)", fontSize: "clamp(14px, 1.4vw, 18px)" }}>
                          {service.description}
                        </p>
                      </div>
                      <div style={{ marginTop: "16px" }}>
                        <span className="button button--secondary">
                          Let&apos;s talk <IconArrowRight size={16} />
                        </span>
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </AnimateTrigger>
      </div>
    </section>
  )
}
