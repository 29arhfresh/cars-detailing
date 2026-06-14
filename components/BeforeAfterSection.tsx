"use client";

import { useState } from "react";

export default function BeforeAfterSection() {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <section
      id="before-after"
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
              Результат работы
            </span>
          </div>
          <h2 className="section-heading" style={{ color: "white", marginBottom: "1rem" }}>
            До и <span className="gold-gradient-text">После</span>
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
            Перетащите ползунок, чтобы увидеть разницу между до и после детейлинга
          </p>
        </div>

        {/* Before/After Slider */}
        <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
          <div
            className="before-after-slider"
            style={{
              position: "relative",
              height: "clamp(16rem, 40vw, 31.25rem)",
              borderRadius: "1rem",
              overflow: "hidden",
              border: "1px solid rgba(201,162,75,0.2)",
            }}
          >
            {/* Before Image (full width) */}
            <div style={{ position: "absolute", inset: 0 }}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(135deg, #1a0a00 0%, #2d1500 30%, #1a0a00 60%, #0d0700 100%)",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "75%",
                      height: "50%",
                      borderRadius: "0.5rem",
                      opacity: 0.4,
                      background:
                        "linear-gradient(135deg, #3d2800 0%, #1a0f00 50%, #2d1f00 100%)",
                      boxShadow: "0 0 60px rgba(50, 30, 0, 0.5)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "rgba(255,255,255,0.2)",
                        fontFamily: "Unbounded, sans-serif",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                      }}
                    >
                      АВТОМОБИЛЬ
                    </span>
                  </div>
                </div>
              </div>
              {/* "Before" label */}
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1rem",
                  backgroundColor: "rgba(0,0,0,0.7)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "0.5rem",
                  padding: "0.375rem 0.75rem",
                }}
              >
                <span
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    fontFamily: "Unbounded, sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                  }}
                >
                  ДО
                </span>
              </div>
            </div>

            {/* After Image (clipped) */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                clipPath: `inset(0 ${100 - sliderValue}% 0 0)`,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(135deg, #1a1000 0%, rgba(201,162,75,0.13) 30%, rgba(232,198,106,0.2) 60%, #1a1200 100%)",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "75%",
                      height: "50%",
                      borderRadius: "0.5rem",
                      background:
                        "linear-gradient(135deg, rgba(201,162,75,0.27) 0%, rgba(232,198,106,0.4) 30%, rgba(201,162,75,0.27) 60%, rgba(138,108,42,0.27) 100%)",
                      boxShadow: "0 0 80px rgba(201, 162, 75, 0.3)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      className="gold-gradient-text"
                      style={{
                        fontFamily: "Unbounded, sans-serif",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                      }}
                    >
                      ДЕТЕЙЛИНГ
                    </span>
                  </div>
                </div>
              </div>
              {/* "After" label */}
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  backgroundColor: "rgba(201,162,75,0.2)",
                  border: "1px solid rgba(201,162,75,0.5)",
                  borderRadius: "0.5rem",
                  padding: "0.375rem 0.75rem",
                }}
              >
                <span
                  style={{
                    color: "#C9A24B",
                    fontFamily: "Unbounded, sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                  }}
                >
                  ПОСЛЕ
                </span>
              </div>
            </div>

            {/* Divider line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: `${sliderValue}%`,
                width: "2px",
                backgroundColor: "#C9A24B",
                boxShadow: "0 0 10px rgba(201,162,75,0.8)",
                pointerEvents: "none",
                zIndex: 20,
              }}
            >
              {/* Handle */}
              <div
                className="gold-gradient"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                  cursor: "col-resize",
                }}
              >
                <div style={{ display: "flex", gap: 4 }}>
                  <div
                    style={{
                      width: 2,
                      height: 16,
                      backgroundColor: "#0A0A0A",
                      borderRadius: 2,
                    }}
                  />
                  <div
                    style={{
                      width: 2,
                      height: 16,
                      backgroundColor: "#0A0A0A",
                      borderRadius: 2,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Range Input */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                opacity: 0,
                cursor: "col-resize",
                zIndex: 30,
              }}
              aria-label="Ползунок до/после"
            />
          </div>

          <p
            style={{
              textAlign: "center",
              color: "rgba(255,255,255,0.3)",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.875rem",
              marginTop: "1rem",
            }}
          >
            ← Перетащите ползунок →
          </p>
        </div>
      </div>
    </section>
  );
}
