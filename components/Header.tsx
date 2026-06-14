"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
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
          ? {
              backgroundColor: "rgba(10,10,10,0.95)",
              backdropFilter: "blur(12px)",
              borderBottom: "1px solid rgba(201,162,75,0.2)",
            }
          : { backgroundColor: "transparent" }
      }
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg gold-gradient"
              style={{ transition: "box-shadow 0.3s" }}
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
            <div className="hidden sm:block">
              <div
                style={{
                  fontFamily: "Unbounded, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  color: "white",
                  lineHeight: "1.2",
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
                  lineHeight: "1.2",
                }}
              >
                DETAILING
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  transition: "color 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#C9A24B")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Phone + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+79221011020"
              className="flex items-center gap-2"
              style={{
                color: "rgba(201,162,75,0.8)",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.875rem",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#C9A24B")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(201,162,75,0.8)")
              }
            >
              <Phone size={16} />
              <span>+7 922 101 10 20</span>
            </a>
            <a
              href="#contact"
              className="btn-gold px-5 py-2.5 rounded-lg"
              style={{ fontSize: "0.875rem", fontFamily: "Unbounded, sans-serif" }}
            >
              Записаться
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            style={{ color: "rgba(255,255,255,0.8)", background: "none", border: "none", cursor: "pointer" }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          style={{
            backgroundColor: "rgba(10,10,10,0.98)",
            backdropFilter: "blur(12px)",
            borderTop: "1px solid rgba(201,162,75,0.2)",
          }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.875rem",
                  padding: "0.5rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  textDecoration: "none",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+79221011020"
              className="flex items-center gap-2"
              style={{
                color: "#C9A24B",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.875rem",
                padding: "0.5rem 0",
                textDecoration: "none",
              }}
            >
              <Phone size={16} />
              <span>+7 922 101 10 20</span>
            </a>
            <a
              href="#contact"
              className="btn-gold px-5 py-3 rounded-lg text-center mt-2"
              style={{ fontSize: "0.875rem", fontFamily: "Unbounded, sans-serif" }}
              onClick={() => setIsMenuOpen(false)}
            >
              Записаться
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
