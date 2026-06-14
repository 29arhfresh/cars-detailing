"use client";

import { MessageCircle, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const openChat = () => {
    const event = new CustomEvent("openAIChat");
    window.dispatchEvent(event);
  };

  return (
    <section
      id="hero"
      className="relative hexagon-pattern"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Radial glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 60%, rgba(201, 162, 75, 0.12) 0%, transparent 70%)",
        }}
      />

      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,10,0.6) 0%, transparent 50%, #0A0A0A 100%)",
        }}
      />

      {/* Decorative hexagon cells */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute border"
            style={{
              width: `${80 + i * 20}px`,
              height: `${90 + i * 23}px`,
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              left: `${10 + (i % 4) * 22}%`,
              top: `${15 + Math.floor(i / 4) * 40}%`,
              borderColor: "rgba(201,162,75,0.1)",
              background:
                i % 3 === 0 ? "rgba(201, 162, 75, 0.03)" : "transparent",
              animation: `hex-pulse 3s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div
        className="relative container mx-auto px-4 lg:px-8"
        style={{ zIndex: 10, textAlign: "center" }}
      >
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
          style={{
            backgroundColor: "rgba(201,162,75,0.1)",
            border: "1px solid rgba(201,162,75,0.3)",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#C9A24B",
              animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
            }}
          />
          <span
            style={{
              color: "#C9A24B",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.875rem",
              fontWeight: 500,
            }}
          >
            Екатеринбург · ул. Радищева 6А
          </span>
        </div>

        {/* Main Heading */}
        <h1
          style={{
            fontFamily: "Unbounded, sans-serif",
            fontWeight: 900,
            color: "white",
            marginBottom: "1rem",
            lineHeight: 1.1,
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
            }}
          >
            БЕЗУПРЕЧНЫЙ
          </span>
          <span
            className="gold-gradient-text"
            style={{
              display: "block",
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              marginTop: "0.5rem",
            }}
          >
            ДЕТЕЙЛИНГ
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            maxWidth: "42rem",
            margin: "0 auto 2.5rem",
            lineHeight: 1.7,
          }}
        >
          Профессиональная защита вашего автомобиля — мойка, детейлинг, PPF плёнки и керамические покрытия
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ marginBottom: "4rem" }}
        >
          <a
            href="#contact"
            className="btn-gold px-8 py-4 rounded-xl w-full sm:w-auto"
            style={{
              fontSize: "1rem",
              fontFamily: "Unbounded, sans-serif",
              textAlign: "center",
            }}
          >
            Записаться
          </a>
          <button
            onClick={openChat}
            className="btn-outline-gold px-8 py-4 rounded-xl w-full sm:w-auto flex items-center justify-center gap-2"
            style={{ fontSize: "1rem", fontFamily: "Unbounded, sans-serif" }}
          >
            <MessageCircle size={20} />
            <span>Открыть AI-чат</span>
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { value: "5+", label: "лет опыта" },
            { value: "1000+", label: "довольных клиентов" },
            { value: "7", label: "дней в неделю" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                className="gold-gradient-text"
                style={{
                  fontFamily: "Unbounded, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.875rem",
                  marginTop: "0.25rem",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute"
        style={{
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "rgba(255,255,255,0.3)",
          animation: "bounce 1s infinite",
        }}
      >
        <ChevronDown size={24} />
      </div>
    </section>
  );
}
