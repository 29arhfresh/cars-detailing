import { Wrench, Shield, Clock, Leaf, User, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
}

const advantages: Advantage[] = [
  {
    icon: Wrench,
    title: "Проф. оборудование",
    description:
      "Работаем только с профессиональным оборудованием ведущих мировых брендов. Полировальные машинки, парогенераторы и химия автомобильного класса.",
  },
  {
    icon: Shield,
    title: "Гарантия качества",
    description:
      "Даём письменную гарантию на все виды работ. Керамика — до 3 лет, PPF плёнка — до 5 лет, детейлинг — 30 дней.",
  },
  {
    icon: Clock,
    title: "5+ лет опыта",
    description:
      "Более пяти лет работы в детейлинге. За это время восстановили и защитили более 1000 автомобилей — от городских хетчбэков до суперкаров.",
  },
  {
    icon: Leaf,
    title: "Экологичная химия",
    description:
      "Используем только pH-нейтральную химию, безопасную для ЛКП, экологии и здоровья. Никаких агрессивных кислот и едких запахов.",
  },
  {
    icon: User,
    title: "Инд. подход",
    description:
      "Каждый автомобиль оцениваем индивидуально. Предлагаем оптимальное решение под ваш бюджет и цели — без навязывания лишних услуг.",
  },
  {
    icon: Star,
    title: "Работаем 7 дней",
    description:
      "Открыты ежедневно с 9:00 до 21:00 — в будни и выходные. Удобная запись онлайн или по телефону в любое время.",
  },
];

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="hexagon-pattern"
      style={{ padding: "5rem 0", backgroundColor: "#0D0D0D" }}
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
              Наши преимущества
            </span>
          </div>
          <h2 className="section-heading" style={{ color: "white", marginBottom: "1rem" }}>
            Почему выбирают <span className="gold-gradient-text">нас</span>
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
            Мы не просто моем и полируем — мы заботимся о вашем автомобиле как о своём собственном
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.title}
                className="card-dark"
                style={{
                  borderRadius: "1rem",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "0.75rem",
                    backgroundColor: "rgba(201,162,75,0.1)",
                    border: "1px solid rgba(201,162,75,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={24} style={{ color: "#C9A24B" }} />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "Unbounded, sans-serif",
                    fontWeight: 700,
                    color: "white",
                    fontSize: "1rem",
                    lineHeight: 1.3,
                  }}
                >
                  {adv.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                  }}
                >
                  {adv.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
