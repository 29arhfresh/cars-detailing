"use client";

import { MessageCircle, ChevronDown, Phone, Star } from "lucide-react";

export default function HeroSection() {
  const openChat = () => {
    window.dispatchEvent(new CustomEvent("openAIChat"));
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
      {/* Gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 70%, rgba(201,162,75,0.14) 0%, transparent 70%)",
        }}
      />
      {/* Bottom fade to page bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(10,10,10,0.5) 0%, transparent 45%, #0A0A0A 100%)",
        }}
      />

      {/* Decorative hexagon cells */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: `${70 + i * 18}px`,
              height: `${80 + i * 21}px`,
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              left: `${5 + (i % 5) * 19}%`,
              top: `${10 + Math.floor(i / 5) * 45}%`,
              border: "1px solid rgba(201,162,75,0.08)",
              background: i % 3 === 0 ? "rgba(201,162,75,0.025)" : "transparent",
              animation: "hex-pulse 3s ease-in-out infinite",
              animationDelay: `${i * 0.35}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className="relative container mx-auto px-4 lg:px-8"
        style={{ zIndex: 10, textAlign: "center", paddingTop: "5rem" }}
      >
        {/* Trust badge row */}
        <div
          className="flex flex-wrap items-center justify-center gap-3"
          style={{ marginBottom: "2rem" }}
        >
          {/* Location badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{
              backgroundColor: "rgba(201,162,75,0.1)",
              border: "1px solid rgba(201,162,75,0.3)",
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                backgroundColor: "#C9A24B",
                animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
                flexShrink: 0,
              }}
            />
            <span style={{ color: "#C9A24B", fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", fontWeight: 500 }}>
              Екатеринбург · ул. Радищева, 6А
            </span>
          </div>

          {/* 2GIS rating badge */}
          <div
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5"
            style={{
              backgroundColor: "rgba(0,0,0,0.4)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} style={{ color: "#C9A24B", fill: "#C9A24B" }} />
              ))}
            </div>
            <span style={{ color: "rgba(255,255,255,0.8)", fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", fontWeight: 600 }}>
              5.0
            </span>
            <span style={{ color: "rgba(255,255,255,0.4)", fontFamily: "Inter, sans-serif", fontSize: "0.8125rem" }}>
              в 2ГИС
            </span>
          </div>

          {/* Open badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{
              backgroundColor: "rgba(34,197,94,0.08)",
              border: "1px solid rgba(34,197,94,0.25)",
            }}
          >
            <div style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#22c55e", flexShrink: 0 }} />
            <span style={{ color: "rgba(34,197,94,0.9)", fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", fontWeight: 500 }}>
              9:00–21:00 ежедневно
            </span>
          </div>
        </div>

        {/* Main heading */}
        <h1
          style={{
            fontFamily: "Unbounded, sans-serif",
            fontWeight: 900,
            color: "white",
            marginBottom: "1.25rem",
            lineHeight: 1.05,
          }}
        >
          <span style={{ display: "block", fontSize: "clamp(2.25rem, 7.5vw, 5rem)" }}>
            ПРЕМИАЛЬНЫЙ
          </span>
          <span
            className="gold-gradient-text"
            style={{ display: "block", fontSize: "clamp(2.25rem, 7.5vw, 5rem)", marginTop: "0.3rem" }}
          >
            ДЕТЕЙЛИНГ
          </span>
          <span
            style={{
              display: "block",
              fontSize: "clamp(1rem, 2.5vw, 1.75rem)",
              color: "rgba(255,255,255,0.45)",
              fontWeight: 300,
              marginTop: "0.75rem",
              letterSpacing: "0.15em",
            }}
          >
            В ЕКАТЕРИНБУРГЕ
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(0.9375rem, 1.8vw, 1.1875rem)",
            maxWidth: "38rem",
            margin: "0 auto 2.5rem",
            lineHeight: 1.75,
          }}
        >
          Защищаем автомобили с 2019 года. Автомойка, детейлинг, PPF-плёнки и&nbsp;керамические покрытия — работаем без&nbsp;выходных.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3" style={{ marginBottom: "1rem" }}>
          <a
            href="tel:+79221011020"
            className="btn-gold rounded-xl flex items-center justify-center gap-2 w-full sm:w-auto"
            style={{ padding: "1rem 2rem", fontSize: "0.9375rem", fontFamily: "Unbounded, sans-serif", minWidth: "200px" }}
          >
            <Phone size={18} />
            Позвонить
          </a>
          <a
            href="https://wa.me/79221011020"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl flex items-center justify-center gap-2 w-full sm:w-auto"
            style={{
              padding: "1rem 2rem",
              fontSize: "0.9375rem",
              fontFamily: "Unbounded, sans-serif",
              minWidth: "200px",
              backgroundColor: "rgba(37,211,102,0.12)",
              border: "1px solid rgba(37,211,102,0.35)",
              color: "#25d366",
              transition: "all 0.3s ease",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3" style={{ marginBottom: "3.5rem" }}>
          <a
            href="#contact"
            className="btn-outline-gold rounded-xl w-full sm:w-auto"
            style={{ padding: "0.875rem 2rem", fontSize: "0.875rem", fontFamily: "Unbounded, sans-serif", textAlign: "center" }}
          >
            Оставить заявку
          </a>
          <button
            onClick={openChat}
            className="rounded-xl flex items-center justify-center gap-2 w-full sm:w-auto"
            style={{
              padding: "0.875rem 2rem",
              fontSize: "0.875rem",
              fontFamily: "Unbounded, sans-serif",
              backgroundColor: "rgba(201,162,75,0.06)",
              border: "1px solid rgba(201,162,75,0.2)",
              color: "rgba(255,255,255,0.7)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            <MessageCircle size={16} />
            Спросить AI-консультанта
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-14">
          {[
            { value: "5+", label: "лет на рынке" },
            { value: "1000+", label: "автомобилей" },
            { value: "5.0", label: "рейтинг в 2ГИС" },
            { value: "7/7", label: "дней в неделю" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                className="gold-gradient-text"
                style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
              >
                {stat.value}
              </div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", marginTop: "0.25rem" }}>
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
          color: "rgba(255,255,255,0.25)",
          animation: "bounce 1.5s infinite",
        }}
      >
        <ChevronDown size={24} />
      </div>
    </section>
  );
}
