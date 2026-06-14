import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-unbounded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cars Detailing — Профессиональный детейлинг в Екатеринбурге",
  description:
    "Премиальный детейлинг, автомойка, PPF-плёнки и керамические покрытия. Екатеринбург, ул. Радищева 6А. Работаем ПН-ВС 9:00-21:00.",
  keywords:
    "детейлинг, автомойка, PPF плёнки, керамика, Екатеринбург, полировка, защита автомобиля",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${inter.variable} ${unbounded.variable} antialiased`}
        style={{ backgroundColor: "#0A0A0A", color: "white" }}
      >
        {children}
      </body>
    </html>
  );
}
