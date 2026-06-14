import { NextRequest, NextResponse } from "next/server";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface BookingData {
  name: string;
  phone: string;
  car: string;
  service: string;
}

// ─── System prompt ────────────────────────────────────────────────────────────

const SYSTEM_PROMPT = `Ты — AI-консультант детейлинг-центра "Cars Detailing" в Екатеринбурге.

О компании:
- Адрес: ул. Радищева 6А, БЦ «Суворов», Екатеринбург
- Телефоны: +7 922 101 10 20, +7 (343) 328 88 78
- Режим работы: ПН–ВС 9:00–21:00, без выходных
- Instagram: @carsdetailing.pro
- 5+ лет опыта, 1000+ довольных клиентов

Услуги и цены:
1. Автомойка — от 1 500 ₽ (1–3 часа): кузов, диски, салон, стёкла, сушка
2. Детейлинг — от 8 000 ₽ (1–3 дня): химчистка, машинная полировка, восстановление ЛКП
3. Полировка — от 5 000 ₽ (1 день): устранение царапин и голограмм, восстановление блеска
4. PPF плёнки — от 25 000 ₽ (2–5 дней): антигравийная защита, самовосстановление, гарантия 5 лет
5. Керамическое покрытие — от 15 000 ₽ (2–3 дня): гидрофобность, защита от УФ, гарантия 2–3 года
6. Химчистка салона — от 4 000 ₽ (1 день): ткань, кожа, ковры, потолок

ПРАВИЛА ОБЩЕНИЯ:
- Всегда отвечай на русском языке
- Помни всю историю диалога — НИКОГДА не начинай разговор заново
- Отвечай кратко и по делу
- Тон: дружелюбный, экспертный, без навязчивости

ПРОЦЕСС ЗАПИСИ:
Когда клиент хочет записаться — собери 4 данных: имя, телефон, марка и модель авто, услуга.
Данные могут быть переданы все сразу или по одному — запоминай каждое.

Когда у тебя есть все 4 поля — напиши подтверждение в таком формате:
"Спасибо, [Имя]!

Заявка принята. ✓

Автомобиль: [Марка и модель]
Услуга: [Услуга]
Телефон: [Телефон]

Мы свяжемся с вами в ближайшее время."

Затем на отдельной строке выведи строго:
BOOKING_DATA:{"name":"[имя]","phone":"[телефон]","car":"[авто]","service":"[услуга]"}`;

// ─── Mock mode ────────────────────────────────────────────────────────────────

const SERVICE_INFO: Record<string, string> = {
  мойк: "🚗 **Автомойка** — от 1 500 ₽, занимает 1–3 часа.\nКомплексная мойка кузова, дисков, стёкол и салона с профессиональной химией. Хотите записаться?",
  мойт: "🚗 **Автомойка** — от 1 500 ₽, занимает 1–3 часа.\nКомплексная мойка кузова, дисков, стёкол и салона с профессиональной химией. Хотите записаться?",
  помыт: "🚗 **Автомойка** — от 1 500 ₽, занимает 1–3 часа.\nКомплексная мойка кузова, дисков, стёкол и салона. Хотите записаться?",
  автомойк: "🚗 **Автомойка** — от 1 500 ₽, занимает 1–3 часа.\nКомплексная мойка кузова, дисков, стёкол и салона. Хотите записаться?",
  детейлинг: "✨ **Детейлинг** — от 8 000 ₽, срок 1–3 дня.\nГлубокая химчистка, машинная полировка и восстановление ЛКП. Машина выглядит как новая. Записаться?",
  полировк: "💎 **Полировка** — от 5 000 ₽, занимает 1 день.\nУстраняем царапины, голограммы и потёртости. Восстанавливаем зеркальный блеск кузова. Записаться?",
  керамик: "🛡 **Керамическое покрытие** — от 15 000 ₽, срок 2–3 дня.\nЖидкое стекло для кузова: вода скатывается каплями, грязь не пристаёт, гарантия 2–3 года. Записаться?",
  ppf: "🛡 **PPF плёнка** — от 25 000 ₽, срок 2–5 дней.\nНевидимый полиуретановый щит от гравия и царапин. Самовосстанавливается от мелких повреждений. Гарантия 5 лет. Записаться?",
  плёнк: "🛡 **PPF плёнка** — от 25 000 ₽, срок 2–5 дней.\nНевидимый полиуретановый щит от гравия и царапин. Гарантия 5 лет. Записаться?",
  пленк: "🛡 **PPF плёнка** — от 25 000 ₽, срок 2–5 дней.\nНевидимый полиуретановый щит от гравия и царапин. Гарантия 5 лет. Записаться?",
  химчистк: "🧹 **Химчистка салона** — от 4 000 ₽, занимает 1 день.\nОбработка ткани, кожи, ковров и потолка. Убираем пятна, запахи и загрязнения любой сложности. Записаться?",
};

function detectServiceKeyword(text: string): string | null {
  const lower = text.toLowerCase();
  for (const keyword of Object.keys(SERVICE_INFO)) {
    if (lower.includes(keyword)) return keyword;
  }
  return null;
}

function normalizeServiceName(keyword: string): string {
  if (["мойк", "мойт", "помыт", "автомойк"].includes(keyword)) return "Автомойка";
  if (keyword === "детейлинг") return "Детейлинг";
  if (keyword === "полировк") return "Полировка";
  if (keyword === "керамик") return "Керамическое покрытие";
  if (["ppf", "плёнк", "пленк"].includes(keyword)) return "PPF плёнка";
  if (keyword === "химчистк") return "Химчистка салона";
  return keyword;
}

function extractPhone(text: string): string | null {
  // Match: +79221011020 | 89221011020 | 8 922 101 10 20 | +7(922)101-10-20 etc.
  const m = text.match(/(?:\+7|8|7)\s?[\s\-]?\(?(\d{3})\)?[\s\-]?(\d{3})[\s\-]?(\d{2})[\s\-]?(\d{2})/);
  if (m) return `+7 ${m[1]} ${m[2]}-${m[3]}-${m[4]}`;
  return null;
}

// Known car brands for extraction
const CAR_BRANDS =
  /\b(BMW|Mercedes|Benz|Audi|Toyota|Lexus|Kia|Hyundai|Volkswagen|VW|Nissan|Honda|Mazda|Ford|Skoda|Volvo|Range Rover|Land Cruiser|Land Rover|Porsche|Lada|Vesta|Granta|Niva|UAZ|GAZ|Chevrolet|Renault|Peugeot|Citroen|Mitsubishi|Subaru|Suzuki|Jeep|Infiniti|Acura|Cadillac|Dodge|Alfa Romeo|Fiat|Lamborghini|Ferrari|Bentley|Rolls Royce|Maserati|Jaguar|Genesis|Haval|Chery|Geely|BYD|Omoda|Tank|Exeed|Lixiang|Rivian|Tesla)[\s\w]{0,20}/gi;

function extractCar(text: string): string | null {
  const m = text.match(CAR_BRANDS);
  if (m) return m[0].trim();
  return null;
}

function extractName(text: string, phone: string | null, car: string | null, service: string | null): string | null {
  let cleaned = text;
  // Remove digits/phone
  cleaned = cleaned.replace(/[\d\+\-\(\)\s]{7,}/g, " ");
  // Remove car
  if (car) cleaned = cleaned.replace(new RegExp(car.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"), " ");
  // Remove service noise words
  const noiseWords = ["мойка", "мойку", "кузова", "салона", "детейлинг", "полировка", "керамика", "хочу", "нужна", "нужен", "запись", "записаться", "плёнка", "пленка", "ppf", "химчистка", "химчистку"];
  for (const w of noiseWords) cleaned = cleaned.replace(new RegExp(`\\b${w}\\b`, "gi"), " ");
  // Take first Cyrillic word starting with uppercase
  const nm = cleaned.match(/\b([А-ЯЁ][а-яё]{2,})\b/);
  if (nm) return nm[1];
  return null;
}

interface ConversationState {
  name?: string;
  phone?: string;
  car?: string;
  service?: string;
  bookingStarted: boolean;
}

function buildState(messages: Message[]): ConversationState {
  const state: ConversationState = { bookingStarted: false };

  for (const msg of messages) {
    if (msg.role !== "user") continue;

    const phone = extractPhone(msg.content);
    if (phone && !state.phone) state.phone = phone;

    const svcKey = detectServiceKeyword(msg.content);
    if (svcKey && !state.service) state.service = normalizeServiceName(svcKey);

    const car = extractCar(msg.content);
    if (car && !state.car) state.car = car;

    if (msg.content.toLowerCase().match(/запис|хочу|нужн|помоги/)) {
      state.bookingStarted = true;
    }
    if (phone || car) state.bookingStarted = true;
  }

  // Second pass: name extraction (needs other fields to subtract noise)
  for (const msg of messages) {
    if (msg.role !== "user" || state.name) continue;
    const name = extractName(msg.content, state.phone ?? null, state.car ?? null, state.service ?? null);
    if (name) state.name = name;
  }

  return state;
}

function mockReply(messages: Message[]): { reply: string; booking?: BookingData } {
  const userMessages = messages.filter((m) => m.role === "user");
  if (userMessages.length === 0) {
    return { reply: "Здравствуйте! Я консультант Cars Detailing. Чем могу помочь?" };
  }

  const state = buildState(messages);
  const lastUser = userMessages[userMessages.length - 1].content;
  const lower = lastUser.toLowerCase();

  // All 4 fields collected → confirmation
  if (state.name && state.phone && state.car && state.service) {
    const booking: BookingData = {
      name: state.name,
      phone: state.phone,
      car: state.car,
      service: state.service,
    };
    const reply =
      `Спасибо, ${state.name}!\n\nЗаявка принята. ✓\n\nАвтомобиль: ${state.car}\nУслуга: ${state.service}\nТелефон: ${state.phone}\n\nМы свяжемся с вами в ближайшее время.`;
    return { reply, booking };
  }

  // Service keyword in current message → give info
  const svcKey = detectServiceKeyword(lastUser);
  if (svcKey) {
    const info = SERVICE_INFO[svcKey];
    if (state.bookingStarted || lower.match(/запис|хочу|нужн/)) {
      const missing: string[] = [];
      if (!state.name) missing.push("имя");
      if (!state.phone) missing.push("номер телефона");
      if (!state.car) missing.push("марку и модель авто");
      if (missing.length > 0) {
        return { reply: `${info}\n\nЧтобы записаться, осталось: ${missing.join(", ")}.` };
      }
    }
    return { reply: info };
  }

  // Prices
  if (lower.match(/цен|стоим|сколько|прайс/)) {
    return {
      reply:
        "Наши цены:\n\n• Автомойка — от 1 500 ₽\n• Детейлинг — от 8 000 ₽\n• Полировка — от 5 000 ₽\n• PPF плёнки — от 25 000 ₽\n• Керамика — от 15 000 ₽\n• Химчистка салона — от 4 000 ₽\n\nТочная стоимость зависит от типа и состояния авто. Что вас интересует?",
    };
  }

  // Greeting
  if (lower.match(/^(привет|здравств|добрый|добро|хай|hi|hello)/)) {
    return {
      reply:
        "Здравствуйте! Я консультант Cars Detailing. Расскажу об услугах, ценах и помогу записаться. Чем могу помочь?",
    };
  }

  // Booking intent but no service selected yet
  if (lower.match(/запис|хочу|нужн/) && !state.service) {
    return {
      reply:
        "Хорошо, помогу с записью! Какая услуга вас интересует?\n\n• Автомойка\n• Детейлинг\n• Полировка\n• PPF плёнка\n• Керамика\n• Химчистка салона",
    };
  }

  // Have service, collecting remaining fields
  if (state.bookingStarted && state.service) {
    const missing: string[] = [];
    if (!state.name) missing.push("ваше имя");
    if (!state.phone) missing.push("номер телефона");
    if (!state.car) missing.push("марку и модель автомобиля");
    if (missing.length > 0) {
      return {
        reply: `Записываю на ${state.service}. Пожалуйста, укажите: ${missing.join(", ")}.`,
      };
    }
  }

  // Address/location
  if (lower.match(/адрес|где|находит|маршрут|как добрат/)) {
    return {
      reply:
        "Мы находимся по адресу:\nг. Екатеринбург, ул. Радищева 6А, БЦ «Суворов»\n\nРаботаем ежедневно 9:00–21:00. Телефон: +7 922 101 10 20",
    };
  }

  // Default
  return {
    reply:
      "Мы занимаемся автомойкой, детейлингом, PPF-плёнками, керамикой и полировкой. Что именно вас интересует? Или позвоните нам: +7 922 101 10 20",
  };
}

// ─── Parse booking from real API response ────────────────────────────────────

function parseBookingFromReply(text: string): { cleanReply: string; booking?: BookingData } {
  const marker = "BOOKING_DATA:";
  const idx = text.indexOf(marker);
  if (idx === -1) return { cleanReply: text };

  try {
    const jsonStr = text.slice(idx + marker.length).trim();
    const booking = JSON.parse(jsonStr) as BookingData;
    const cleanReply = text.slice(0, idx).trim();
    return { cleanReply, booking };
  } catch {
    return { cleanReply: text.slice(0, idx).trim() };
  }
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const { messages }: { messages: Message[] } = await request.json();
    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey) {
      const { reply, booking } = mockReply(messages);
      return NextResponse.json({ reply, booking });
    }

    const { default: Anthropic } = await import("@anthropic-ai/sdk");
    const client = new Anthropic({ apiKey });

    // Anthropic requires the conversation to start with role: "user"
    const firstUserIdx = messages.findIndex((m: Message) => m.role === "user");
    const apiMessages = firstUserIdx > 0 ? messages.slice(firstUserIdx) : messages;

    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 600,
      system: SYSTEM_PROMPT,
      messages: apiMessages.map((m) => ({ role: m.role, content: m.content })),
    });

    const content = response.content[0];
    const rawText = content.type === "text" ? content.text : "";
    const { cleanReply, booking } = parseBookingFromReply(rawText);

    return NextResponse.json({ reply: cleanReply || rawText, booking });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { reply: "Извините, произошла ошибка. Пожалуйста, позвоните нам: +7 922 101 10 20" },
      { status: 200 }
    );
  }
}
