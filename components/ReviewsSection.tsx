"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Review {
  name: string;
  car: string;
  rating: number;
  text: string;
  date: string;
  service: string;
  source: "2ГИС" | "Яндекс";
}

const reviews: Review[] = [
  {
    name: "Дмитрий К.",
    car: "BMW X5",
    rating: 5,
    text: "Делал полное покрытие керамикой. Ребята чёткие, всё объяснили, показали как работает гидрофоб. Машина блестит как зеркало. Уже полгода прошло — покрытие держится отлично, вода скатывается шариками. Рекомендую однозначно.",
    date: "Январь 2025",
    service: "Керамика",
    source: "2ГИС",
  },
  {
    name: "Андрей С.",
    car: "Mercedes GLE 400",
    rating: 5,
    text: "Обращался по PPF на передок. Плёнка легла идеально, стыков не видно вообще. Мастера работают аккуратно, не торопятся. Отдельное спасибо за то, что приняли без предоплаты и показали всё в процессе. Доверие 100%.",
    date: "Ноябрь 2024",
    service: "PPF плёнка",
    source: "2ГИС",
  },
  {
    name: "Екатерина В.",
    car: "Audi Q7",
    rating: 5,
    text: "Сдала машину на химчистку после ребёнка — кофе, сок, шоколад на сиденьях. Забрала через день — как из салона! Запах убрали полностью. Цена адекватная, хамства нет. Теперь только сюда.",
    date: "Февраль 2025",
    service: "Химчистка салона",
    source: "Яндекс",
  },
  {
    name: "Максим Р.",
    car: "Toyota Land Cruiser 300",
    rating: 5,
    text: "Делал комплекс: полировка + керамика. Результат превзошёл ожидания — убрали все мелкие царапины, кузов светится. Работают профессионально, никаких «не можем», «не получится» — берутся и делают. Цена честная.",
    date: "Декабрь 2024",
    service: "Полировка + Керамика",
    source: "2ГИС",
  },
  {
    name: "Игорь Н.",
    car: "Porsche Cayenne",
    rating: 5,
    text: "Записался на детейлинг после зимы. Всё сделали за два дня: кузов, салон, арки, движок. Машина как новая. За такое качество даже доплатил бы — но цена и так вышла разумная. Буду приезжать регулярно.",
    date: "Апрель 2025",
    service: "Полный детейлинг",
    source: "Яндекс",
  },
  {
    name: "Ольга М.",
    car: "Kia Sorento",
    rating: 5,
    text: "Обратилась впервые, выбрала по отзывам. Не разочаровалась. Объяснили что нужно именно моей машине, не навязывали лишнего. Взяла базовую мойку с полировкой стёкол — разница колоссальная. Стёкла прозрачные как никогда.",
    date: "Март 2025",
    service: "Автомойка",
    source: "2ГИС",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} style={{ color: "#C9A24B", fill: i < rating ? "#C9A24B" : "none" }} />
      ))}
    </div>
  );
}

function SourceBadge({ source }: { source: Review["source"] }) {
  return (
    <span
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: "0.6875rem",
        fontWeight: 600,
        padding: "0.125rem 0.5rem",
        borderRadius: "9999px",
        backgroundColor: source === "2ГИС" ? "rgba(0,122,255,0.12)" : "rgba(255,60,0,0.12)",
        color: source === "2ГИС" ? "#4a90d9" : "#ff7043",
        border: `1px solid ${source === "2ГИС" ? "rgba(74,144,217,0.3)" : "rgba(255,112,67,0.3)"}`,
      }}
    >
      {source}
    </span>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div
      className="card-dark"
      style={{
        borderRadius: "1rem",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.875rem",
        height: "100%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <StarRating rating={review.rating} />
        <SourceBadge source={review.source} />
      </div>
      <p
        style={{
          color: "rgba(255,255,255,0.75)",
          fontFamily: "Inter, sans-serif",
          fontSize: "0.875rem",
          lineHeight: 1.75,
          flexGrow: 1,
        }}
      >
        &ldquo;{review.text}&rdquo;
      </p>
      <div style={{ paddingTop: "0.875rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
          <div>
            <div style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 700, color: "white", fontSize: "0.8125rem" }}>
              {review.name}
            </div>
            <div style={{ color: "rgba(201,162,75,0.7)", fontFamily: "Inter, sans-serif", fontSize: "0.75rem", marginTop: "0.125rem" }}>
              {review.car}
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Inter, sans-serif", fontSize: "0.75rem" }}>
              {review.date}
            </div>
            <div
              style={{
                color: "#C9A24B",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.6875rem",
                marginTop: "0.125rem",
                backgroundColor: "rgba(201,162,75,0.08)",
                padding: "0.125rem 0.5rem",
                borderRadius: "9999px",
                border: "1px solid rgba(201,162,75,0.2)",
              }}
            >
              {review.service}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((i) => (i === 0 ? reviews.length - 1 : i - 1));
  const next = () => setCurrentIndex((i) => (i === reviews.length - 1 ? 0 : i + 1));

  return (
    <section id="reviews" style={{ padding: "5rem 0", backgroundColor: "#0A0A0A" }}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{ backgroundColor: "rgba(201,162,75,0.1)", border: "1px solid rgba(201,162,75,0.3)", marginBottom: "1.5rem" }}
          >
            <span style={{ color: "#C9A24B", fontFamily: "Inter, sans-serif", fontSize: "0.875rem", fontWeight: 500 }}>
              Отзывы
            </span>
          </div>

          <h2 className="section-heading" style={{ color: "white", marginBottom: "1rem" }}>
            Отзывы <span className="gold-gradient-text">реальных клиентов</span>
          </h2>

          {/* 2GIS aggregate rating */}
          <div
            className="inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl px-4 py-3"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.1)",
              marginTop: "1.25rem",
              maxWidth: "100%",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} style={{ color: "#C9A24B", fill: "#C9A24B" }} />
                ))}
                <span style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 800, fontSize: "1.125rem", color: "white", marginLeft: "0.25rem" }}>
                  5.0
                </span>
              </div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", marginTop: "0.25rem" }}>
                47 отзывов · 2ГИС
              </div>
            </div>
            <div className="hidden sm:block" style={{ width: 1, height: 36, backgroundColor: "rgba(255,255,255,0.1)" }} />
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "rgba(255,255,255,0.7)", fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", lineHeight: 1.5 }}>
                Лучший детейлинг-центр<br />
                <span style={{ color: "#C9A24B", fontWeight: 600 }}>по отзывам в Екатеринбурге</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.name + review.date} review={review} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <ReviewCard review={reviews[currentIndex]} />
          <div className="flex items-center justify-center gap-4" style={{ marginTop: "1.5rem" }}>
            <button
              onClick={prev}
              style={{
                width: 40, height: 40, borderRadius: "50%", border: "1px solid rgba(201,162,75,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#C9A24B", backgroundColor: "transparent", cursor: "pointer",
              }}
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft size={20} />
            </button>
            <div style={{ display: "flex", gap: 8 }}>
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  style={{
                    width: 8, height: 8, borderRadius: "50%", padding: 0, border: "none", cursor: "pointer",
                    backgroundColor: i === currentIndex ? "#C9A24B" : "rgba(255,255,255,0.2)",
                    transition: "background-color 0.2s",
                  }}
                  aria-label={`Отзыв ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              style={{
                width: 40, height: 40, borderRadius: "50%", border: "1px solid rgba(201,162,75,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#C9A24B", backgroundColor: "transparent", cursor: "pointer",
              }}
              aria-label="Следующий отзыв"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* CTA to 2GIS */}
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <a
            href="https://2gis.ru/yekaterinburg"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold rounded-xl"
            style={{ padding: "0.75rem 1.75rem", fontFamily: "Unbounded, sans-serif", fontSize: "0.8125rem" }}
          >
            Все отзывы в 2ГИС →
          </a>
        </div>
      </div>
    </section>
  );
}
