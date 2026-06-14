"use client";

import { Phone, Clock, Zap } from "lucide-react";

export default function CTASection() {
  return (
    <section
      style={{
        padding: "4rem 0",
        backgroundColor: "#0A0A0A",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Gold glow background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(201,162,75,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            maxWidth: "56rem",
            margin: "0 auto",
            border: "1px solid rgba(201,162,75,0.25)",
            borderRadius: "1.5rem",
            padding: "clamp(2rem, 6vw, 3rem) clamp(1.25rem, 5vw, 2rem)",
            backgroundColor: "rgba(201,162,75,0.04)",
            textAlign: "center",
          }}
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{
              backgroundColor: "rgba(201,162,75,0.12)",
              border: "1px solid rgba(201,162,75,0.35)",
              marginBottom: "1.5rem",
            }}
          >
            <Zap size={14} style={{ color: "#C9A24B" }} />
            <span
              style={{
                color: "#C9A24B",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 600,
              }}
            >
              Быстрый расчёт
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: "Unbounded, sans-serif",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.15,
              marginBottom: "1rem",
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            }}
          >
            Получите расчёт стоимости{" "}
            <span className="gold-gradient-text">за 1 минуту</span>
          </h2>

          {/* Subtext */}
          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontFamily: "Inter, sans-serif",
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              maxWidth: "34rem",
              margin: "0 auto 2rem",
            }}
          >
            Позвоните или напишите — скажите марку авто и нужную услугу, и мы назовём точную цену без скрытых доплат
          </p>

          {/* Time indicator */}
          <div
            className="flex flex-wrap items-center justify-center gap-6"
            style={{ marginBottom: "2rem" }}
          >
            {[
              { icon: Clock, text: "Перезваниваем за 15 мин" },
              { icon: Zap, text: "Без предоплаты" },
              { icon: Phone, text: "Без скрытых платежей" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <Icon size={15} style={{ color: "#C9A24B", flexShrink: 0 }} />
                <span
                  style={{
                    color: "rgba(255,255,255,0.65)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.875rem",
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+79221011020"
              className="btn-gold rounded-xl flex items-center justify-center gap-2 w-full sm:w-auto"
              style={{
                padding: "1rem 2.25rem",
                fontFamily: "Unbounded, sans-serif",
                fontSize: "0.9375rem",
              }}
            >
              <Phone size={18} />
              +7 922 101 10 20
            </a>
            <a
              href="https://wa.me/79221011020"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl flex items-center justify-center gap-2 w-full sm:w-auto"
              style={{
                padding: "1rem 2.25rem",
                backgroundColor: "rgba(37,211,102,0.1)",
                border: "1px solid rgba(37,211,102,0.35)",
                color: "#25d366",
                fontFamily: "Unbounded, sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 700,
                textDecoration: "none",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "rgba(37,211,102,0.18)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "rgba(37,211,102,0.1)")
              }
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Написать в WhatsApp
            </a>
          </div>

          {/* Working hours note */}
          <p
            style={{
              color: "rgba(255,255,255,0.3)",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.8125rem",
              marginTop: "1.5rem",
            }}
          >
            Принимаем звонки и сообщения ПН–ВС с 9:00 до 21:00
          </p>
        </div>
      </div>
    </section>
  );
}
