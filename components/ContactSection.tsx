"use client";

import { useState } from "react";
import { Phone, MapPin, Clock, CheckCircle, Navigation } from "lucide-react";

interface BookingFormData {
  name: string;
  phone: string;
  car: string;
  service: string;
  message: string;
}

const serviceOptions = [
  "Автомойка",
  "Детейлинг",
  "PPF плёнка",
  "Керамическое покрытие",
  "Полировка",
  "Химчистка салона",
  "Другое",
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "rgba(0,0,0,0.4)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "0.5rem",
  padding: "0.75rem 1rem",
  color: "white",
  fontFamily: "Inter, sans-serif",
  fontSize: "0.875rem",
  outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  color: "rgba(255,255,255,0.55)",
  fontFamily: "Inter, sans-serif",
  fontSize: "0.8125rem",
  marginBottom: "0.375rem",
};

export default function ContactSection() {
  const [formData, setFormData] = useState<BookingFormData>({
    name: "", phone: "", car: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const bookings = JSON.parse(localStorage.getItem("cars_detailing_bookings") || "[]");
    bookings.push({ ...formData, id: Date.now(), createdAt: new Date().toISOString(), status: "pending" });
    localStorage.setItem("cars_detailing_bookings", JSON.stringify(bookings));
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="hexagon-pattern" style={{ padding: "5rem 0", backgroundColor: "#0D0D0D" }}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{ backgroundColor: "rgba(201,162,75,0.1)", border: "1px solid rgba(201,162,75,0.3)", marginBottom: "1.5rem" }}
          >
            <span style={{ color: "#C9A24B", fontFamily: "Inter, sans-serif", fontSize: "0.875rem", fontWeight: 500 }}>
              Запись
            </span>
          </div>
          <h2 className="section-heading" style={{ color: "white", marginBottom: "1rem" }}>
            Записаться на <span className="gold-gradient-text">детейлинг</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", maxWidth: "38rem", margin: "0 auto" }}>
            Оставьте заявку — перезвоним в течение 15 минут для уточнения деталей
          </p>
        </div>

        {/* Quick-contact buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3" style={{ marginBottom: "3rem" }}>
          <a
            href="tel:+79221011020"
            className="flex items-center justify-center gap-2 rounded-xl"
            style={{
              padding: "0.875rem 1.75rem",
              background: "linear-gradient(135deg, #C9A24B, #E8C66A)",
              color: "#0A0A0A",
              fontFamily: "Unbounded, sans-serif",
              fontSize: "0.875rem",
              fontWeight: 700,
              textDecoration: "none",
              transition: "box-shadow 0.3s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 20px rgba(201,162,75,0.4)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <Phone size={17} />
            Позвонить
          </a>
          <a
            href="https://wa.me/79221011020"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl"
            style={{
              padding: "0.875rem 1.75rem",
              backgroundColor: "rgba(37,211,102,0.1)",
              border: "1px solid rgba(37,211,102,0.35)",
              color: "#25d366",
              fontFamily: "Unbounded, sans-serif",
              fontSize: "0.875rem",
              fontWeight: 700,
              textDecoration: "none",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(37,211,102,0.18)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(37,211,102,0.1)")}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Написать в WhatsApp
          </a>
          <a
            href="https://yandex.ru/maps/-/CDrFJqd7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl"
            style={{
              padding: "0.875rem 1.75rem",
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.8)",
              fontFamily: "Unbounded, sans-serif",
              fontSize: "0.875rem",
              fontWeight: 700,
              textDecoration: "none",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.09)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)")}
          >
            <Navigation size={17} />
            Построить маршрут
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10" style={{ maxWidth: "72rem", margin: "0 auto" }}>
          {/* Form */}
          <div>
            {submitted ? (
              <div
                className="card-dark"
                style={{ borderRadius: "1rem", padding: "2.5rem", textAlign: "center" }}
              >
                <div style={{ width: 72, height: 72, borderRadius: "50%", backgroundColor: "rgba(201,162,75,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                  <CheckCircle size={36} style={{ color: "#C9A24B" }} />
                </div>
                <h3 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "white", marginBottom: "0.75rem" }}>
                  Заявка принята!
                </h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontFamily: "Inter, sans-serif", lineHeight: 1.7, marginBottom: "2rem" }}>
                  Перезвоним в течение 15 минут для подтверждения записи. Спасибо, что выбрали Cars Detailing!
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: "", phone: "", car: "", service: "", message: "" }); }}
                  className="btn-gold px-8 py-3 rounded-xl"
                  style={{ fontFamily: "Unbounded, sans-serif", fontSize: "0.875rem" }}
                >
                  Новая заявка
                </button>
              </div>
            ) : (
              <div className="card-dark" style={{ borderRadius: "1rem", padding: "2rem" }}>
                <h3 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 700, fontSize: "1.125rem", color: "white", marginBottom: "1.5rem" }}>
                  Онлайн-запись
                </h3>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <label style={labelStyle}>Ваше имя *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Иван" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Телефон *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+7 (9xx) xxx-xx-xx" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Марка и модель автомобиля *</label>
                    <input type="text" name="car" value={formData.car} onChange={handleChange} required placeholder="BMW X5, 2022" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Услуга *</label>
                    <select name="service" value={formData.service} onChange={handleChange} required style={{ ...inputStyle, cursor: "pointer", appearance: "none" }}>
                      <option value="" style={{ backgroundColor: "#0A0A0A" }}>Выберите услугу</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s} style={{ backgroundColor: "#0A0A0A" }}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Комментарий</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Дополнительные пожелания..." style={{ ...inputStyle, resize: "none" }} />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold rounded-xl"
                    style={{ padding: "1rem", fontFamily: "Unbounded, sans-serif", fontSize: "0.875rem", marginTop: "0.25rem", opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer", width: "100%" }}
                  >
                    {loading ? "Отправляем..." : "Отправить заявку"}
                  </button>
                  <p style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Inter, sans-serif", fontSize: "0.75rem", textAlign: "center", lineHeight: 1.5 }}>
                    Или позвоните прямо сейчас:{" "}
                    <a href="tel:+79221011020" style={{ color: "#C9A24B", textDecoration: "none" }}>+7 922 101 10 20</a>
                  </p>
                </form>
              </div>
            )}
          </div>

          {/* Contact info + Map */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Info cards */}
            {[
              {
                icon: MapPin,
                title: "Адрес",
                content: (
                  <>
                    г. Екатеринбург, ул. Радищева, 6А<br />
                    <span style={{ color: "rgba(201,162,75,0.7)" }}>БЦ «Суворов»</span>
                  </>
                ),
              },
              {
                icon: Clock,
                title: "Часы работы",
                content: (
                  <>
                    ПН–ВС: <span style={{ color: "white" }}>9:00 – 21:00</span><br />
                    <span style={{ color: "#C9A24B" }}>Без выходных и праздников</span>
                  </>
                ),
              },
              {
                icon: Phone,
                title: "Телефоны",
                content: (
                  <>
                    <a href="tel:+79221011020" style={{ display: "block", color: "rgba(255,255,255,0.85)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A24B")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}>
                      +7 922 101 10 20
                    </a>
                    <a href="tel:+73433288878" style={{ display: "block", color: "rgba(255,255,255,0.85)", textDecoration: "none", transition: "color 0.2s", marginTop: "0.25rem" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A24B")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}>
                      +7 (343) 328 88 78
                    </a>
                  </>
                ),
              },
            ].map(({ icon: Icon, title, content }) => (
              <div key={title} className="card-dark" style={{ borderRadius: "1rem", padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ width: 44, height: 44, borderRadius: "0.75rem", backgroundColor: "rgba(201,162,75,0.1)", border: "1px solid rgba(201,162,75,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={20} style={{ color: "#C9A24B" }} />
                </div>
                <div>
                  <h4 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 700, color: "white", fontSize: "0.8125rem", marginBottom: "0.25rem" }}>{title}</h4>
                  <div style={{ color: "rgba(255,255,255,0.6)", fontFamily: "Inter, sans-serif", fontSize: "0.875rem", lineHeight: 1.6 }}>
                    {content}
                  </div>
                </div>
              </div>
            ))}

            {/* Yandex Maps embed */}
            <div style={{ borderRadius: "1rem", overflow: "hidden", border: "1px solid rgba(201,162,75,0.2)", flexGrow: 1, minHeight: "220px" }}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=60.612278%2C56.834316&z=16&pt=60.612278%2C56.834316~Екатеринбург+ул.+Радищева+6А+Cars+Detailing&mode=whatshere"
                width="100%"
                height="100%"
                style={{ display: "block", border: 0, minHeight: "220px", filter: "invert(0.9) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                title="Cars Detailing на карте"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
