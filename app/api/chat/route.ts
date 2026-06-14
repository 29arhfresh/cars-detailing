import { NextRequest, NextResponse } from "next/server";

interface Message {
  role: "user" | "assistant";
  content: string;
}

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
3. PPF плёнки — от 25 000 ₽ (2–5 дней): антигравийная защита, самовосстановление, гарантия 5 лет
4. Керамическое покрытие — от 15 000 ₽ (2–3 дня): гидрофобность, защита от УФ, гарантия 2–3 года

Преимущества:
- Профессиональное оборудование мировых брендов
- Письменная гарантия на все работы
- Экологичная pH-нейтральная химия
- Индивидуальный подход
- Работаем 7 дней в неделю

Твоя задача:
- Консультировать клиентов об услугах
- Помогать с выбором подходящей услуги
- Отвечать на вопросы о ценах и сроках
- Записывать на услуги

Когда клиент готов записаться и ты получил от него имя, телефон, марку авто и желаемую услугу — выведи в своём ответе JSON в формате:
{"booking": {"name": "Имя", "phone": "+7...", "car": "Марка модель", "service": "Услуга"}}

Общайся на русском языке, будь дружелюбным и профессиональным. Отвечай кратко и по существу.`;

// Mock responses for when API key is not available
const mockResponses: Record<string, string> = {
  default:
    "Добрый день! Готов ответить на ваши вопросы о наших услугах детейлинга. Что вас интересует?",
  price:
    "Наши цены:\n• Автомойка — от 1 500 ₽\n• Детейлинг — от 8 000 ₽\n• PPF плёнки — от 25 000 ₽\n• Керамика — от 15 000 ₽\n\nТочная стоимость зависит от типа и состояния автомобиля. Хотите записаться на консультацию?",
  ceramics:
    "Керамическое покрытие — это жидкое стекло для вашего автомобиля! Создаёт твёрдый защитный слой, который:\n✓ Отталкивает воду и грязь\n✓ Защищает от ультрафиолета\n✓ Служит 2–3 года\n\nСтоимость от 15 000 ₽. Запишитесь на бесплатную консультацию!",
  ppf: "PPF — полиуретановая защитная плёнка, невидимый щит для вашего авто:\n✓ Защита от гравия и царапин\n✓ Самовосстановление от мелких повреждений\n✓ Гарантия 5 лет\n\nСтоимость от 25 000 ₽. Хотите узнать подробнее?",
  booking:
    "Чтобы записаться, мне нужно узнать:\n1. Ваше имя\n2. Телефон для связи\n3. Марка и модель автомобиля\n4. Желаемая услуга\n\nМожно также позвонить нам: +7 922 101 10 20",
};

function getMockResponse(userMessage: string): string {
  const msg = userMessage.toLowerCase();
  if (
    msg.includes("цен") ||
    msg.includes("стоим") ||
    msg.includes("сколько")
  ) {
    return mockResponses.price;
  }
  if (msg.includes("керамик") || msg.includes("ceramic")) {
    return mockResponses.ceramics;
  }
  if (msg.includes("ppf") || msg.includes("плёнк") || msg.includes("пленк")) {
    return mockResponses.ppf;
  }
  if (
    msg.includes("запис") ||
    msg.includes("запис") ||
    msg.includes("хочу")
  ) {
    return mockResponses.booking;
  }
  return mockResponses.default;
}

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();
    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey) {
      // Mock mode: return a contextual response
      const lastMessage = messages[messages.length - 1];
      const reply = getMockResponse(lastMessage?.content || "");
      return NextResponse.json({ reply });
    }

    // Real Anthropic API call
    const { Anthropic } = await import("@anthropic-ai/sdk");
    const client = new Anthropic({ apiKey });

    const response = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 500,
      system: SYSTEM_PROMPT,
      messages: messages.map((m: Message) => ({
        role: m.role,
        content: m.content,
      })),
    });

    const content = response.content[0];
    const reply = content.type === "text" ? content.text : "Извините, произошла ошибка.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { reply: "Извините, произошла ошибка. Пожалуйста, позвоните нам: +7 922 101 10 20" },
      { status: 200 }
    );
  }
}
