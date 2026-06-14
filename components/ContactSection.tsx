"use client";

import { useState } from "react";
import { Phone, MapPin, Clock, Globe, CheckCircle } from "lucide-react";

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
  "Другое",
];

export default function ContactSection() {
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    phone: "",
    car: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const bookings = JSON.parse(
      localStorage.getItem("cars_detailing_bookings") || "[]"
    );
    const newBooking = {
      ...formData,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      status: "pending",
    };
    bookings.push(newBooking);
    localStorage.setItem("cars_detailing_bookings", JSON.stringify(bookings));

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
    color: "rgba(255,255,255,0.6)",
    fontFamily: "Inter, sans-serif",
    fontSize: "0.875rem",
    marginBottom: "0.375rem",
  };

  if (submitted) {
    return (
      <section
        id="contact"
        className="hexagon-pattern"
        style={{ padding: "5rem 0", backgroundColor: "#0D0D0D" }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div style={{ maxWidth: "32rem", margin: "0 auto", textAlign: "center" }}>
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                backgroundColor: "rgba(201,162,75,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem",
              }}
            >
              <CheckCircle size={40} style={{ color: "#C9A24B" }} />
            </div>
            <h3
              style={{
                fontFamily: "Unbounded, sans-serif",
                fontWeight: 700,
                fontSize: "1.5rem",
                color: "white",
                marginBottom: "1rem",
              }}
            >
              Заявка принята!
            </h3>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                fontFamily: "Inter, sans-serif",
                marginBottom: "2rem",
              }}
            >
              Мы свяжемся с вами в ближайшее время для подтверждения записи. Спасибо, что выбрали Cars Detailing!
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: "", phone: "", car: "", service: "", message: "" });
              }}
              className="btn-gold px-8 py-3.5 rounded-xl"
              style={{ fontFamily: "Unbounded, sans-serif", fontSize: "0.875rem" }}
            >
              Новая заявка
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="hexagon-pattern"
      style={{ padding: "5rem 0", backgroundColor: "#0D0D0D" }}
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
              Запись
            </span>
          </div>
          <h2 className="section-heading" style={{ color: "white", marginBottom: "1rem" }}>
            Записаться на <span className="gold-gradient-text">детейлинг</span>
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
            Оставьте заявку и мы свяжемся с вами для уточнения деталей
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          style={{ maxWidth: "72rem", margin: "0 auto" }}
        >
          {/* Booking Form */}
          <div
            className="card-dark"
            style={{ borderRadius: "1rem", padding: "2rem" }}
          >
            <h3
              style={{
                fontFamily: "Unbounded, sans-serif",
                fontWeight: 700,
                fontSize: "1.25rem",
                color: "white",
                marginBottom: "1.5rem",
              }}
            >
              Онлайн-запись
            </h3>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={labelStyle}>Ваше имя *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Иван Иванов"
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Телефон *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+7 (xxx) xxx-xx-xx"
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Марка и модель авто *</label>
                <input
                  type="text"
                  name="car"
                  value={formData.car}
                  onChange={handleChange}
                  required
                  placeholder="BMW X5, 2021"
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Услуга *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  style={{ ...inputStyle, cursor: "pointer", appearance: "none" }}
                >
                  <option value="" style={{ backgroundColor: "#0A0A0A" }}>
                    Выберите услугу
                  </option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s} style={{ backgroundColor: "#0A0A0A" }}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Комментарий</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Дополнительные пожелания..."
                  style={{ ...inputStyle, resize: "none" }}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn-gold rounded-xl"
                style={{
                  padding: "1rem 2rem",
                  fontFamily: "Unbounded, sans-serif",
                  fontSize: "0.875rem",
                  marginTop: "0.5rem",
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? "not-allowed" : "pointer",
                  width: "100%",
                }}
              >
                {loading ? "Отправляем..." : "Отправить заявку"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Address */}
            <div
              className="card-dark"
              style={{
                borderRadius: "1rem",
                padding: "1.5rem",
                display: "flex",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "0.75rem",
                  backgroundColor: "rgba(201,162,75,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <MapPin size={24} style={{ color: "#C9A24B" }} />
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: "Unbounded, sans-serif",
                    fontWeight: 700,
                    color: "white",
                    fontSize: "0.875rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  Адрес
                </h4>
                <p style={{ color: "rgba(255,255,255,0.6)", fontFamily: "Inter, sans-serif", fontSize: "0.875rem", lineHeight: 1.6 }}>
                  г. Екатеринбург, ул. Радищева 6А
                  <br />
                  БЦ «Суворов»
                </p>
              </div>
            </div>

            {/* Hours */}
            <div
              className="card-dark"
              style={{
                borderRadius: "1rem",
                padding: "1.5rem",
                display: "flex",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "0.75rem",
                  backgroundColor: "rgba(201,162,75,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Clock size={24} style={{ color: "#C9A24B" }} />
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: "Unbounded, sans-serif",
                    fontWeight: 700,
                    color: "white",
                    fontSize: "0.875rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  Часы работы
                </h4>
                <p style={{ color: "rgba(255,255,255,0.6)", fontFamily: "Inter, sans-serif", fontSize: "0.875rem", lineHeight: 1.6 }}>
                  ПН–ВС: 9:00 – 21:00
                  <br />
                  <span style={{ color: "#C9A24B" }}>Без выходных</span>
                </p>
              </div>
            </div>

            {/* Phone */}
            <div
              className="card-dark"
              style={{
                borderRadius: "1rem",
                padding: "1.5rem",
                display: "flex",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "0.75rem",
                  backgroundColor: "rgba(201,162,75,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Phone size={24} style={{ color: "#C9A24B" }} />
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: "Unbounded, sans-serif",
                    fontWeight: 700,
                    color: "white",
                    fontSize: "0.875rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  Телефоны
                </h4>
                <a
                  href="tel:+79221011020"
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.8)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.875rem",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A24B")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                >
                  +7 922 101 10 20
                </a>
                <a
                  href="tel:+73433288878"
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.8)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.875rem",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    marginTop: "0.25rem",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A24B")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                >
                  +7 (343) 328 88 78
                </a>
              </div>
            </div>

            {/* Social */}
            <div
              className="card-dark"
              style={{
                borderRadius: "1rem",
                padding: "1.5rem",
                display: "flex",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "0.75rem",
                  backgroundColor: "rgba(201,162,75,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Globe size={24} style={{ color: "#C9A24B" }} />
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: "Unbounded, sans-serif",
                    fontWeight: 700,
                    color: "white",
                    fontSize: "0.875rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  Instagram
                </h4>
                <a
                  href="https://www.instagram.com/carsdetailing.pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#C9A24B",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.875rem",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  @carsdetailing.pro
                </a>
                <p
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.75rem",
                    marginTop: "0.25rem",
                  }}
                >
                  Галерея работ и акции
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
