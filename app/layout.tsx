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

const BASE_URL = "https://carsdetailing.pro";

export const metadata: Metadata = {
  title: "Cars Detailing — Премиальный детейлинг-центр в Екатеринбурге | PPF, Керамика, Автомойка",
  description:
    "Профессиональный детейлинг-центр в Екатеринбурге. Автомойка, химчистка салона, полировка, PPF-плёнки и керамические покрытия. Рейтинг 5.0 в 2ГИС. ул. Радищева 6А, БЦ «Суворов». Работаем ПН–ВС 9:00–21:00.",
  keywords:
    "детейлинг Екатеринбург, автомойка Екатеринбург, PPF плёнки, керамическое покрытие, полировка авто, химчистка салона, Cars Detailing, защита кузова, детейлинг центр",
  authors: [{ name: "Cars Detailing" }],
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Cars Detailing",
    title: "Cars Detailing — Премиальный детейлинг-центр в Екатеринбурге",
    description:
      "Профессиональный детейлинг-центр. PPF-плёнки, керамика, полировка, автомойка. Рейтинг 5.0 в 2ГИС. ул. Радищева 6А, ПН–ВС 9:00–21:00.",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cars Detailing — Премиальный детейлинг в Екатеринбурге",
    description: "PPF-плёнки, керамика, полировка, автомойка. Рейтинг 5.0 в 2ГИС. ул. Радищева 6А.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Cars Detailing",
  description:
    "Премиальный детейлинг-центр в Екатеринбурге. Автомойка, полировка, PPF-плёнки, керамические покрытия.",
  url: BASE_URL,
  telephone: ["+7-922-101-10-20", "+7-343-328-88-78"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Радищева, 6А, БЦ «Суворов»",
    addressLocality: "Екатеринбург",
    addressRegion: "Свердловская область",
    postalCode: "620026",
    addressCountry: "RU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 56.8344,
    longitude: 60.6122,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday", "Sunday",
    ],
    opens: "09:00",
    closes: "21:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "47",
    bestRating: "5",
  },
  sameAs: ["https://www.instagram.com/carsdetailing.pro"],
  priceRange: "₽₽₽",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${unbounded.variable} antialiased`}
        style={{ backgroundColor: "#0A0A0A", color: "white" }}
      >
        {children}
      </body>
    </html>
  );
}
