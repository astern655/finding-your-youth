import { useState } from "react";

export function ContactSection() {
  const [showContact, setShowContact] = useState(false);

  return (
    <section className="py-24 px-6" style={{ background: "#080812" }}>
      <div className="max-w-4xl mx-auto">
        {/* Final CTA block */}
        <div
          className="rounded-3xl overflow-hidden relative"
          style={{ background: "linear-gradient(135deg, #0D0D2B 0%, #1A0D2E 100%)" }}
        >
          {/* Background glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none"
            style={{ background: "radial-gradient(circle, #FF8C00 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(circle, #818CF8 0%, transparent 70%)" }}
          />

          <div className="relative z-10 p-10 md:p-16 text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-6"
              style={{ background: "rgba(255,140,0,0.15)", color: "#FFB347", border: "1px solid rgba(255,140,0,0.3)" }}
            >
              ✦ 미팅 및 브리핑 제안
            </div>

            <h2
              className="text-white mb-6"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.3 }}
            >
              긍정적으로 검토해 주신다면<br />
              <span style={{ color: "#FFB347" }}>직접 브리핑 드리겠습니다</span>
            </h2>

            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", lineHeight: 1.9, maxWidth: 540, margin: "0 auto 2rem" }}>
              대면 또는 화상 미팅을 통해 구체적인 운영 프로세스를<br />
              상세히 브리핑해 드리고 싶습니다.
            </p>

            {/* Contact info card */}
            <div
              className="inline-flex flex-col md:flex-row gap-6 items-center px-8 py-6 rounded-2xl mb-8"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="flex flex-col items-center md:items-start">
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem", letterSpacing: "0.1em", marginBottom: 4 }}>PROPOSAL BY</p>
                <p className="text-white" style={{ fontWeight: 800, fontSize: "1.4rem" }}>이찬섭</p>
              </div>
              <div
                className="hidden md:block w-px h-10"
                style={{ background: "rgba(255,255,255,0.1)" }}
              />
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span style={{ color: "#FFB347", fontSize: "0.85rem" }}>✉</span>
                  {showContact ? (
                    <a
                      href="mailto:lcs5347260@gmail.com"
                      style={{ color: "#FFB347", fontSize: "0.9rem", textDecoration: "underline" }}
                    >
                      lcs5347260@gmail.com
                    </a>
                  ) : (
                    <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>대면 / 화상 미팅 제안 환영</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: "#FFB347", fontSize: "0.85rem" }}>📞</span>
                  {showContact ? (
                    <a
                      href="tel:01089557260"
                      style={{ color: "#FFB347", fontSize: "0.9rem", textDecoration: "underline" }}
                    >
                      010-8955-7260
                    </a>
                  ) : (
                    <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>6월 군 입대 전 · 제1기 완료 목표</span>
                  )}
                </div>
              </div>
            </div>

            {/* Action button */}
            <div>
              <button
                onClick={() => setShowContact((v: boolean) => !v)}
                className="px-10 py-4 rounded-2xl text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #FF8C00, #FF4500)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  boxShadow: "0 8px 30px rgba(255,140,0,0.35)",
                }}
              >
                {showContact ? "✉ 연락처 닫기" : "🤝 \u00A0 미팅 제안하기 — 청춘을 찾아서"}
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
            <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.8rem", letterSpacing: "0.15em" }}>청춘을 찾아서 · Finding Your Youth · 2025</span>
            <div className="w-8 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
          </div>
          <p style={{ color: "rgba(255,255,255,0.15)", fontSize: "0.75rem" }}>
            에브리타임 × 이찬섭 — 브랜드 캠페인 기획 제안서
          </p>
        </div>
      </div>
    </section>
  );
}
