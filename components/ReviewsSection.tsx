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
}

const reviews: Review[] = [
  {
    name: "Алексей Морозов",
    car: "BMW X5",
    rating: 5,
    text: "Сдал BMW X5 на керамику и детейлинг. Результат превзошёл все ожидания — машина сияет как в первый день из салона. Ребята работают чисто и аккуратно, объясняют каждый этап. Рекомендую всем, кто ценит своё авто!",
    date: "Март 2024",
    service: "Керамика",
  },
  {
    name: "Марина Козлова",
    car: "Mercedes GLE",
    rating: 5,
    text: "Обратилась после того, как кто-то поцарапал дверь на парковке. Ребята сделали полировку — царапины как не было! Дополнительно нанесли PPF на пороги. Теперь не боюсь оставлять машину в торговых центрах.",
    date: "Апрель 2024",
    service: "PPF + Полировка",
  },
  {
    name: "Дмитрий Петров",
    car: "Porsche Cayenne",
    rating: 5,
    text: "Был скептически настроен насчёт детейлинга, думал что это маркетинг. После Cars Detailing изменил мнение — машина выглядит буквально как новая. Особенно доволен химчисткой салона, убрали все пятна от кофе.",
    date: "Февраль 2024",
    service: "Полный детейлинг",
  },
  {
    name: "Светлана Иванова",
    car: "Toyota Camry",
    rating: 5,
    text: "Приятно удивлена соотношением цена/качество. Взяла комплексную мойку с полировкой кузова. За 3 часа не узнала свою машину! Вежливые мастера, никаких скрытых платежей. Теперь только сюда.",
    date: "Январь 2024",
    service: "Автомойка + Полировка",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: 4 }}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          style={{
            color: i < rating ? "#C9A24B" : "rgba(255,255,255,0.2)",
            fill: i < rating ? "#C9A24B" : "none",
          }}
        />
      ))}
    </div>
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
        gap: "1rem",
      }}
    >
      <StarRating rating={review.rating} />
      <p
        style={{
          color: "rgba(255,255,255,0.7)",
          fontFamily: "Inter, sans-serif",
          fontSize: "0.875rem",
          lineHeight: 1.7,
          flexGrow: 1,
        }}
      >
        &ldquo;{review.text}&rdquo;
      </p>
      <div
        style={{
          paddingTop: "1rem",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          style={{
            fontFamily: "Unbounded, sans-serif",
            fontWeight: 700,
            color: "white",
            fontSize: "0.875rem",
          }}
        >
          {review.name}
        </div>
        <div
          style={{
            color: "rgba(201,162,75,0.7)",
            fontFamily: "Inter, sans-serif",
            fontSize: "0.75rem",
            marginTop: "0.125rem",
          }}
        >
          {review.car}
        </div>
        <div
          className="flex items-center justify-between"
          style={{ marginTop: "0.5rem" }}
        >
          <span
            style={{
              color: "rgba(255,255,255,0.3)",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.75rem",
            }}
          >
            {review.date}
          </span>
          <span
            style={{
              backgroundColor: "rgba(201,162,75,0.1)",
              color: "#C9A24B",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.75rem",
              padding: "0.125rem 0.5rem",
              borderRadius: "9999px",
            }}
          >
            {review.service}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="reviews"
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
              Отзывы
            </span>
          </div>
          <h2 className="section-heading" style={{ color: "white", marginBottom: "1rem" }}>
            Что говорят <span className="gold-gradient-text">клиенты</span>
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
            Реальные отзывы от наших клиентов — наша лучшая реклама
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <ReviewCard review={reviews[currentIndex]} />

          {/* Carousel Controls */}
          <div
            className="flex items-center justify-center gap-4"
            style={{ marginTop: "1.5rem" }}
          >
            <button
              onClick={prev}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "1px solid rgba(201,162,75,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#C9A24B",
                backgroundColor: "transparent",
                cursor: "pointer",
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
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor:
                      i === currentIndex ? "#C9A24B" : "rgba(255,255,255,0.2)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "background-color 0.2s",
                  }}
                  aria-label={`Отзыв ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "1px solid rgba(201,162,75,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#C9A24B",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
              aria-label="Следующий отзыв"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
