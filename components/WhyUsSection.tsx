import { Wrench, Shield, Clock, Award, Users, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
  stat?: string;
}

const advantages: Advantage[] = [
  {
    icon: Award,
    title: "Рейтинг 5.0 в 2ГИС",
    description:
      "47 реальных отзывов клиентов — ни одной звезды меньше пяти. Мы не покупаем оценки: репутация строилась годами честного труда.",
    stat: "5.0 ★",
  },
  {
    icon: Wrench,
    title: "Профессиональное оборудование",
    description:
      "Полировальные машинки Rupes, химия Koch Chemie и Meguiar's, керамика Gyeon. Только то, чем пользуются лучшие детейлеры Европы.",
  },
  {
    icon: Shield,
    title: "Письменная гарантия",
    description:
      "Керамическое покрытие — гарантия 2–3 года. PPF плёнка — 5 лет. Детейлинг — 30 дней. Всё фиксируем документально.",
    stat: "до 5 лет",
  },
  {
    icon: Clock,
    title: "Работаем с 2019 года",
    description:
      "За пять лет обслужили более 1 000 автомобилей — от городских хетчбэков до экзотики. Опыт, который нельзя купить.",
    stat: "5+ лет",
  },
  {
    icon: Users,
    title: "Индивидуальный подход",
    description:
      "Осматриваем каждый автомобиль лично перед работой. Говорим честно, что нужно, а что — лишние расходы. Без навязывания.",
  },
  {
    icon: Zap,
    title: "Без выходных, 9:00–21:00",
    description:
      "Принимаем в любой день недели. Запись онлайн или по телефону. Срочный детейлинг — уточняйте наличие окна сегодня.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="hexagon-pattern" style={{ padding: "5rem 0", backgroundColor: "#0D0D0D" }}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{ backgroundColor: "rgba(201,162,75,0.1)", border: "1px solid rgba(201,162,75,0.3)", marginBottom: "1.5rem" }}
          >
            <span style={{ color: "#C9A24B", fontFamily: "Inter, sans-serif", fontSize: "0.875rem", fontWeight: 500 }}>
              Наши преимущества
            </span>
          </div>
          <h2 className="section-heading" style={{ color: "white", marginBottom: "1rem" }}>
            Почему клиенты <span className="gold-gradient-text">выбирают нас</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", maxWidth: "40rem", margin: "0 auto", lineHeight: 1.7 }}>
            Возвращаются снова и приводят друзей — потому что видят разницу между «помыть» и «сделать хорошо»
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {advantages.map((adv) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.title}
                className="card-dark gold-border-top"
                style={{ borderRadius: "1rem", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
                  <div
                    style={{
                      width: 48, height: 48, borderRadius: "0.75rem",
                      backgroundColor: "rgba(201,162,75,0.1)", border: "1px solid rgba(201,162,75,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}
                  >
                    <Icon size={22} style={{ color: "#C9A24B" }} />
                  </div>
                  {adv.stat && (
                    <span
                      className="gold-gradient-text"
                      style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 800, fontSize: "1.125rem", whiteSpace: "nowrap" }}
                    >
                      {adv.stat}
                    </span>
                  )}
                </div>
                <h3 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 700, color: "white", fontSize: "0.9375rem", lineHeight: 1.35 }}>
                  {adv.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.58)", fontFamily: "Inter, sans-serif", fontSize: "0.875rem", lineHeight: 1.75 }}>
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
