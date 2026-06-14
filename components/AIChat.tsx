"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";

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

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Здравствуйте! Я виртуальный консультант Cars Detailing. Расскажу об услугах, ценах и помогу записаться. Чем могу помочь?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("openAIChat", handleOpen);
    return () => window.removeEventListener("openAIChat", handleOpen);
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: inputValue.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await response.json();
      const replyText: string = data.reply || "Извините, произошла ошибка.";

      // Save booking to localStorage if the server extracted one
      if (data.booking) {
        const booking = data.booking as BookingData;
        const bookings: object[] = JSON.parse(
          localStorage.getItem("cars_detailing_bookings") || "[]"
        );
        bookings.push({
          ...booking,
          id: Date.now(),
          source: "chat",
          createdAt: new Date().toISOString(),
          status: "pending",
        });
        localStorage.setItem("cars_detailing_bookings", JSON.stringify(bookings));
      }

      // Always show the reply as-is — server already formats the confirmation
      setMessages((prev) => [...prev, { role: "assistant", content: replyText }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Произошла ошибка. Пожалуйста, позвоните нам: +7 922 101 10 20",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="gold-gradient"
        style={{
          position: "fixed",
          bottom: "1rem",
          right: "1rem",
          width: 56,
          height: 56,
          borderRadius: "50%",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 50,
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s ease",
          opacity: isOpen ? 0 : 1,
          transform: isOpen ? "scale(0)" : "scale(1)",
        }}
        aria-label="Открыть чат"
      >
        <MessageCircle size={24} style={{ color: "#0A0A0A" }} />
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "2px solid rgba(201,162,75,0.4)",
            animation: "ping 1s cubic-bezier(0,0,0.2,1) infinite",
          }}
        />
      </button>

      {/* Chat Modal */}
      <div
        style={{
          position: "fixed",
          bottom: "1rem",
          right: "1rem",
          width: "min(24rem, calc(100vw - 2rem))",
          zIndex: 50,
          transition: "all 0.3s ease",
          transform: isOpen ? "translateY(0) scale(1)" : "translateY(1rem) scale(0.95)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        <div
          style={{
            backgroundColor: "#141414",
            border: "1px solid rgba(201,162,75,0.2)",
            borderRadius: "1rem",
            boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            height: "min(32.5rem, calc(100vh - 4rem))",
          }}
        >
          {/* Header */}
          <div
            className="gold-gradient"
            style={{
              padding: "0.75rem 1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                backgroundColor: "rgba(10,10,10,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Bot size={18} style={{ color: "#0A0A0A" }} />
            </div>
            <div style={{ flexGrow: 1 }}>
              <div
                style={{
                  fontFamily: "Unbounded, sans-serif",
                  fontWeight: 700,
                  color: "#0A0A0A",
                  fontSize: "0.875rem",
                  lineHeight: 1.2,
                }}
              >
                AI-консультант
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "rgba(10,10,10,0.7)",
                  fontSize: "0.75rem",
                }}
              >
                Cars Detailing
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "rgba(10,10,10,0.7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Закрыть чат"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flexGrow: 1,
              overflowY: "auto",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                {msg.role === "assistant" && (
                  <div
                    className="gold-gradient"
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginRight: "0.5rem",
                      marginTop: "0.125rem",
                    }}
                  >
                    <Bot size={12} style={{ color: "#0A0A0A" }} />
                  </div>
                )}
                <div
                  style={{
                    maxWidth: "80%",
                    borderRadius: "1rem",
                    padding: "0.5rem 0.75rem",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    backgroundColor:
                      msg.role === "user"
                        ? "rgba(201,162,75,0.2)"
                        : "rgba(0,0,0,0.4)",
                    color: msg.role === "user" ? "white" : "rgba(255,255,255,0.85)",
                    borderBottomRightRadius: msg.role === "user" ? "0.25rem" : "1rem",
                    borderBottomLeftRadius: msg.role === "assistant" ? "0.25rem" : "1rem",
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div
                  className="gold-gradient"
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginRight: "0.5rem",
                    marginTop: "0.125rem",
                  }}
                >
                  <Bot size={12} style={{ color: "#0A0A0A" }} />
                </div>
                <div
                  style={{
                    backgroundColor: "rgba(0,0,0,0.4)",
                    borderRadius: "1rem",
                    borderBottomLeftRadius: "0.25rem",
                    padding: "0.5rem 0.75rem",
                    display: "flex",
                    gap: "0.25rem",
                    alignItems: "center",
                  }}
                >
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: "rgba(201,162,75,0.6)",
                        animation: "bounce 1s infinite",
                        animationDelay: `${i * 0.15}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            style={{
              padding: "0.75rem",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              gap: "0.5rem",
            }}
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Написать сообщение..."
              disabled={isLoading}
              style={{
                flexGrow: 1,
                backgroundColor: "rgba(0,0,0,0.4)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "0.75rem",
                padding: "0.625rem 0.75rem",
                color: "white",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.875rem",
                outline: "none",
                transition: "border-color 0.2s",
              }}
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !inputValue.trim()}
              className="gold-gradient"
              style={{
                width: 40,
                height: 40,
                borderRadius: "0.75rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                border: "none",
                cursor: isLoading || !inputValue.trim() ? "not-allowed" : "pointer",
                opacity: isLoading || !inputValue.trim() ? 0.5 : 1,
                transition: "opacity 0.2s, box-shadow 0.2s",
              }}
              aria-label="Отправить"
            >
              <Send size={16} style={{ color: "#0A0A0A" }} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
