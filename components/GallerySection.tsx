"use client";

import { useState } from "react";

const galleryItems = [
  {
    label: "BMW M5",
    service: "Керамика",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    accentColor: "#4a90d9",
  },
  {
    label: "Mercedes G-Class",
    service: "PPF Плёнка",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
    accentColor: "#c0c0c0",
  },
  {
    label: "Porsche 911",
    service: "Детейлинг",
    gradient: "linear-gradient(135deg, #2d0a0a 0%, #4a1515 50%, #2d0a0a 100%)",
    accentColor: "#e84a4a",
  },
  {
    label: "Toyota Land Cruiser",
    service: "Автомойка",
    gradient: "linear-gradient(135deg, #0a1a0a 0%, #1a3a1a 50%, #0a2a0a 100%)",
    accentColor: "#4aae4a",
  },
  {
    label: "Lamborghini Urus",
    service: "PPF + Керамика",
    gradient: "linear-gradient(135deg, #1a1400 0%, #3d2e00 50%, #1a1400 100%)",
    accentColor: "#d4a017",
  },
  {
    label: "Moto BMW R1250GS",
    service: "Детейлинг",
    gradient: "linear-gradient(135deg, #0a0a1a 0%, #1a1a3d 50%, #0a0a2a 100%)",
    accentColor: "#7a7ae8",
  },
  {
    label: "Range Rover",
    service: "Керамика",
    gradient: "linear-gradient(135deg, #1a0a00 0%, #3d1f00 50%, #1a0e00 100%)",
    accentColor: "#c9a24b",
  },
  {
    label: "Audi RS6",
    service: "Полировка",
    gradient: "linear-gradient(135deg, #0a0a0a 0%, #1f1f1f 50%, #0a0a0a 100%)",
    accentColor: "#e8e8e8",
  },
];

export default function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      style={{ padding: "5rem 0", backgroundColor: "#0A0A0A" }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{
              backgroundColor: "rgba(201,162,75,0.1)",
              border: "1px solid rgba(201,162,75,0.3)",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                color: "#C9A24B",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.875rem",
                fontWeight: 500,
              }}
            >
              Наши работы
            </span>
          </div>
          <h2 className="section-heading" style={{ color: "white", marginBottom: "1rem" }}>
            Галерея <span className="gold-gradient-text">работ</span>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontFamily: "Inter, sans-serif",
              fontSize: "1.125rem",
              maxWidth: "42rem",
              margin: "0 auto",
            }}
          >
            Каждый автомобиль — наша гордость. Посмотрите на результаты нашей работы
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                borderRadius: "0.75rem",
                overflow: "hidden",
                cursor: "pointer",
                aspectRatio: "1",
                border:
                  hoveredIndex === index
                    ? `1px solid rgba(201,162,75,0.4)`
                    : "1px solid transparent",
                boxShadow:
                  hoveredIndex === index
                    ? `0 0 20px ${item.accentColor}33`
                    : "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background gradient */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: item.gradient,
                  transition: "transform 0.5s ease",
                  transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                }}
              />

              {/* Shimmer effect */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: hoveredIndex === index ? 1 : 0,
                  transition: "opacity 0.5s ease",
                  background: `radial-gradient(ellipse at center, ${item.accentColor}22 0%, transparent 70%)`,
                }}
              />

              {/* Car shape placeholder */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "66%",
                    height: "33%",
                    borderRadius: "0.25rem",
                    opacity: 0.3,
                    background: `linear-gradient(135deg, ${item.accentColor}44, ${item.accentColor}22)`,
                    boxShadow: `0 0 30px ${item.accentColor}33`,
                  }}
                />
              </div>

              {/* Info overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "0.75rem",
                  background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                }}
              >
                <div
                  style={{
                    color: "white",
                    fontFamily: "Unbounded, sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    lineHeight: 1.3,
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    color: "#C9A24B",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.75rem",
                    marginTop: "0.125rem",
                  }}
                >
                  {item.service}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a
            href="https://www.instagram.com/carsdetailing.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold rounded-xl"
            style={{
              padding: "0.875rem 2rem",
              fontFamily: "Unbounded, sans-serif",
              fontSize: "0.875rem",
            }}
          >
            Больше работ в Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}
