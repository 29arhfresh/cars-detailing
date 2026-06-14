"use client";

import { Phone, MapPin, Clock, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#0A0A0A",
        borderTop: "1px solid rgba(201,162,75,0.2)",
      }}
    >
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" style={{ marginBottom: "2.5rem" }}>
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2" style={{ marginBottom: "1rem" }}>
              <div
                className="gold-gradient"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: "#0A0A0A",
                    fontFamily: "Unbounded, sans-serif",
                    fontWeight: 900,
                    fontSize: "1.25rem",
                  }}
                >
                  C
                </span>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "Unbounded, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    color: "white",
                  }}
                >
                  CARS
                </div>
                <div
                  className="gold-gradient-text"
                  style={{
                    fontFamily: "Unbounded, sans-serif",
                    fontWeight: 300,
                    fontSize: "0.75rem",
                  }}
                >
                  DETAILING
                </div>
              </div>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.875rem",
                lineHeight: 1.7,
              }}
            >
              Профессиональный детейлинг в Екатеринбурге. Мойка, полировка, PPF и керамика.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontFamily: "Unbounded, sans-serif",
                fontWeight: 700,
                color: "white",
                fontSize: "0.875rem",
                marginBottom: "1rem",
              }}
            >
              Услуги
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {["Автомойка", "Детейлинг", "PPF плёнки", "Керамика"].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.875rem",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A24B")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4
              style={{
                fontFamily: "Unbounded, sans-serif",
                fontWeight: 700,
                color: "white",
                fontSize: "0.875rem",
                marginBottom: "1rem",
              }}
            >
              Контакты
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                <MapPin size={14} style={{ color: "#C9A24B", marginTop: "0.125rem", flexShrink: 0 }} />
                <span style={{ color: "rgba(255,255,255,0.5)", fontFamily: "Inter, sans-serif", fontSize: "0.875rem" }}>
                  ул. Радищева 6А, БЦ «Суворов»
                </span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Phone size={14} style={{ color: "#C9A24B", flexShrink: 0 }} />
                <a
                  href="tel:+79221011020"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.875rem",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A24B")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                >
                  +7 922 101 10 20
                </a>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Phone size={14} style={{ color: "#C9A24B", flexShrink: 0 }} />
                <a
                  href="tel:+73433288878"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.875rem",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A24B")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                >
                  +7 (343) 328 88 78
                </a>
              </li>
            </ul>
          </div>

          {/* Hours + Social */}
          <div>
            <h4
              style={{
                fontFamily: "Unbounded, sans-serif",
                fontWeight: 700,
                color: "white",
                fontSize: "0.875rem",
                marginBottom: "1rem",
              }}
            >
              Режим работы
            </h4>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", marginBottom: "1rem" }}>
              <Clock size={14} style={{ color: "#C9A24B", marginTop: "0.125rem", flexShrink: 0 }} />
              <div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "Inter, sans-serif", fontSize: "0.875rem" }}>
                  ПН–ВС: 9:00 – 21:00
                </p>
                <p style={{ color: "#C9A24B", fontFamily: "Inter, sans-serif", fontSize: "0.75rem", marginTop: "0.125rem" }}>
                  Без выходных
                </p>
              </div>
            </div>
            <a
              href="https://www.instagram.com/carsdetailing.pro"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A24B")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
            >
              <Globe size={20} />
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem" }}>
                @carsdetailing.pro
              </span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.3)",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.875rem",
            }}
          >
            © {currentYear} Cars Detailing. Все права защищены.
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.2)",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.75rem",
            }}
          >
            Екатеринбург, ул. Радищева 6А
          </p>
        </div>
      </div>
    </footer>
  );
}
