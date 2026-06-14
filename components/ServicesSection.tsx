"use client";

import { Clock, DollarSign, Shield, Sparkles, Droplets, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  time: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: Droplets,
    title: "Автомойка",
    description:
      "Мы не просто моем автомобиль — мы возвращаем ему первозданный вид. Комплексная обработка кузова и салона с профессиональной химией, не оставляющей разводов. Каждая деталь промывается вручную с вниманием к мельчайшим деталям.",
    price: "от 1 500 ₽",
    time: "1–3 часа",
    features: ["Кузов и диски", "Салон и стёкла", "Сушка и полировка"],
  },
  {
    icon: Sparkles,
    title: "Детейлинг",
    description:
      "Глубокое восстановление автомобиля, которое выходит далеко за рамки обычной уборки. Химчистка салона, машинная полировка кузова и восстановление ЛКП превращают вашу машину в произведение искусства, сверкающее как в день покупки.",
    price: "от 8 000 ₽",
    time: "1–3 дня",
    features: ["Глубокая химчистка", "Машинная полировка", "Восстановление ЛКП"],
  },
  {
    icon: Shield,
    title: "PPF Плёнки",
    description:
      "Защитная полиуретановая плёнка — невидимый щит для вашего автомобиля. Она принимает на себя удары гравия, царапины от веток и сколы, при этом полностью сохраняя оригинальный цвет кузова. Служит годами, самовосстанавливается от мелких царапин.",
    price: "от 25 000 ₽",
    time: "2–5 дней",
    features: ["Антигравийная защита", "Самовосстановление", "Гарантия 5 лет"],
  },
  {
    icon: Layers,
    title: "Керамика",
    description:
      "Керамическое покрытие создаёт стеклоподобный слой нанотолщиной на ЛКП автомобиля. Вода скатывается каплями, грязь не пристаёт, солнце не выцветает краску. Ваш автомобиль всегда выглядит только что помытым — минимум усилий, максимум блеска.",
    price: "от 15 000 ₽",
    time: "2–3 дня",
    features: ["Гидрофобность", "Защита от УФ", "Гарантия 2–3 года"],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{ padding: "5rem 0", backgroundColor: "#0A0A0A" }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
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
              Наши услуги
            </span>
          </div>
          <h2 className="section-heading" style={{ color: "white", marginBottom: "1rem" }}>
            Полный спектр{" "}
            <span className="gold-gradient-text">детейлинга</span>
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
            От экспресс-мойки до полной защиты кузова — мы подберём решение для любого автомобиля и бюджета
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="card-dark gold-border-top"
                style={{
                  borderRadius: "1rem",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                }}
              >
                {/* Icon */}
                <div
                  className="gold-gradient"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "0.75rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={24} style={{ color: "#0A0A0A" }} />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "Unbounded, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    color: "white",
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                    flexGrow: 1,
                  }}
                >
                  {service.description}
                </p>

                {/* Features */}
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2"
                      style={{
                        color: "rgba(255,255,255,0.7)",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.75rem",
                      }}
                    >
                      <div
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          backgroundColor: "#C9A24B",
                          flexShrink: 0,
                        }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price & Time */}
                <div
                  className="flex items-center justify-between"
                  style={{
                    paddingTop: "1rem",
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div className="flex items-center gap-1.5" style={{ color: "#C9A24B" }}>
                    <DollarSign size={14} />
                    <span
                      style={{
                        fontFamily: "Unbounded, sans-serif",
                        fontWeight: 700,
                        fontSize: "0.875rem",
                      }}
                    >
                      {service.price}
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-1.5"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    <Clock size={14} />
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem" }}>
                      {service.time}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="btn-gold rounded-lg text-center block w-full"
                  style={{
                    padding: "0.625rem 1rem",
                    fontSize: "0.75rem",
                    fontFamily: "Unbounded, sans-serif",
                  }}
                >
                  Записаться
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
