"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Услуги" },
    { href: "#gallery", label: "Галерея" },
    { href: "#why-us", label: "О нас" },
    { href: "#reviews", label: "Отзывы" },
    { href: "#contact", label: "Контакты" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        isScrolled
          ? { backgroundColor: "rgba(10,10,10,0.96)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(201,162,75,0.2)" }
          : { backgroundColor: "transparent" }
      }
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="gold-gradient w-10 h-10 rounded-full flex items-center justify-center shadow-lg" style={{ flexShrink: 0 }}>
              <span style={{ color: "#0A0A0A", fontFamily: "Unbounded, sans-serif", fontWeight: 900, fontSize: "1.25rem" }}>C</span>
            </div>
            <div className="hidden sm:block">
              <div style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 700, fontSize: "0.875rem", color: "white", lineHeight: 1.2 }}>CARS</div>
              <div className="gold-gradient-text" style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 300, fontSize: "0.75rem", lineHeight: 1.2 }}>DETAILING</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{ color: "rgba(255,255,255,0.7)", fontFamily: "Inter, sans-serif", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A24B")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/79221011020"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: "0.375rem",
                backgroundColor: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.3)",
                color: "#25d366", borderRadius: "0.5rem", padding: "0.5rem 0.875rem",
                fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", fontWeight: 600, textDecoration: "none",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(37,211,102,0.18)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(37,211,102,0.1)")}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            <a
              href="tel:+79221011020"
              className="flex items-center gap-1.5"
              style={{ color: "rgba(201,162,75,0.85)", fontFamily: "Inter, sans-serif", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A24B")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(201,162,75,0.85)")}
            >
              <Phone size={15} />
              +7 922 101 10 20
            </a>
            <a href="#contact" className="btn-gold px-5 py-2.5 rounded-lg" style={{ fontSize: "0.8125rem", fontFamily: "Unbounded, sans-serif" }}>
              Записаться
            </a>
          </div>

          {/* Mobile: phone icon + hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="tel:+79221011020"
              style={{
                width: 40, height: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                backgroundColor: "rgba(201,162,75,0.1)", border: "1px solid rgba(201,162,75,0.3)",
                color: "#C9A24B", textDecoration: "none",
              }}
              aria-label="Позвонить"
            >
              <Phone size={18} />
            </a>
            <button
              style={{ color: "rgba(255,255,255,0.85)", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center" }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div style={{ backgroundColor: "rgba(10,10,10,0.98)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(201,162,75,0.2)" }}>
          <div className="container mx-auto px-4 py-5" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{ color: "rgba(255,255,255,0.8)", fontFamily: "Inter, sans-serif", fontSize: "1rem", padding: "0.75rem 0", borderBottom: "1px solid rgba(255,255,255,0.05)", textDecoration: "none" }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "1rem" }}>
              <a
                href="tel:+79221011020"
                className="btn-gold rounded-xl flex items-center justify-center gap-2"
                style={{ padding: "1rem", fontFamily: "Unbounded, sans-serif", fontSize: "0.9375rem" }}
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={18} />
                Позвонить
              </a>
              <a
                href="https://wa.me/79221011020"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl flex items-center justify-center gap-2"
                style={{
                  padding: "1rem",
                  backgroundColor: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.35)",
                  color: "#25d366", fontFamily: "Unbounded, sans-serif", fontSize: "0.9375rem", fontWeight: 700,
                  textDecoration: "none",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Написать в WhatsApp
              </a>
              <a
                href="#contact"
                className="btn-outline-gold rounded-xl text-center"
                style={{ padding: "1rem", fontFamily: "Unbounded, sans-serif", fontSize: "0.875rem" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Оставить заявку
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
