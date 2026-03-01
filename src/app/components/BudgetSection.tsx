import { useState } from "react";

const optionA = {
  tag: "Option A",
  title: "소수 정예 앰버서더형",
  emoji: "🎯",
  scale: "5 ~ 10명",
  perPerson: "70 ~ 80만 원",
  total: "350 ~ 800만 원",
  color: "#F59E0B",
  colorBg: "rgba(245,158,11,0.12)",
  colorBorder: "rgba(245,158,11,0.3)",
  colorBadge: "rgba(245,158,11,0.2)",
  features: [
    "깊이 있는 사연을 가진 소수 선발",
    "참가자 개개인의 서사가 돋보이는 고퀄리티 콘텐츠",
    "프리미엄 브이로그 / 다큐멘터리 형식 바이럴",
    "1인당 경험의 밀도와 감동치 극대화",
    "적은 예산으로 폭발적인 감성 콘텐츠 확보",
  ],
  badge: "감성 바이럴 최적",
};

const optionB = {
  tag: "Option B",
  title: "대규모 낭만 MT형",
  emoji: "🎉",
  scale: "30 ~ 50명",
  perPerson: "50 ~ 60만 원",
  total: "1,500 ~ 3,000만 원",
  color: "#818CF8",
  colorBg: "rgba(129,140,248,0.12)",
  colorBorder: "rgba(129,140,248,0.3)",
  colorBadge: "rgba(129,140,248,0.2)",
  features: [
    "대학 연합 MT & 수학여행의 향수 자극",
    "압도적인 화제성 및 매스 마케팅 효과",
    "에타 게시판 전체를 축제 분위기로",
    "단체 할인 적용으로 가성비 확보",
    "대규모 SNS 후기로 전국 확산 가속",
  ],
  badge: "매스 화제성 최적",
};

export function BudgetSection() {
  const [selected, setSelected] = useState<"A" | "B">("A");
  const activeOption = selected === "A" ? optionA : optionB;

  return (
    <section className="py-24 px-6" style={{ background: "#080812" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm mb-4"
            style={{ background: "rgba(245,158,11,0.15)", color: "#F59E0B", border: "1px solid rgba(245,158,11,0.3)" }}
          >
            04 · 캠페인 예산 옵션
          </span>
          <h2
            className="text-white mb-5"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.3 }}
          >
            에브리타임의 방향성에 맞춰<br />
            <span style={{ color: "#F59E0B" }}>두 가지 옵션을 제안합니다</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", lineHeight: 1.9 }}>
            전액 에브리타임 스폰서링 · 100% Sponsoring
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div
            className="flex rounded-2xl p-1.5 gap-2"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            {(["A", "B"] as const).map((opt) => (
              <button
                key={opt}
                onClick={() => setSelected(opt)}
                className="px-8 py-3 rounded-xl transition-all duration-300"
                style={{
                  background: selected === opt
                    ? (opt === "A" ? "linear-gradient(135deg, #F59E0B, #D97706)" : "linear-gradient(135deg, #818CF8, #6366F1)")
                    : "transparent",
                  color: selected === opt ? "#fff" : "rgba(255,255,255,0.4)",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                }}
              >
                Option {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Option cards side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[optionA, optionB].map((opt) => {
            const isActive = (opt.tag === "Option A" && selected === "A") || (opt.tag === "Option B" && selected === "B");
            return (
              <div
                key={opt.tag}
                onClick={() => setSelected(opt.tag === "Option A" ? "A" : "B")}
                className="rounded-3xl p-8 cursor-pointer transition-all duration-300"
                style={{
                  background: isActive ? opt.colorBg : "rgba(255,255,255,0.02)",
                  border: `2px solid ${isActive ? opt.colorBorder : "rgba(255,255,255,0.06)"}`,
                  transform: isActive ? "scale(1.02)" : "scale(1)",
                }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs mb-3"
                      style={{ background: opt.colorBadge, color: opt.color, fontWeight: 700 }}
                    >
                      {opt.badge}
                    </span>
                    <div className="flex items-center gap-3">
                      <span style={{ fontSize: "2rem" }}>{opt.emoji}</span>
                      <div>
                        <p style={{ color: opt.color, fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.08em" }}>{opt.tag.toUpperCase()}</p>
                        <h3 className="text-white" style={{ fontWeight: 800, fontSize: "1.1rem" }}>{opt.title}</h3>
                      </div>
                    </div>
                  </div>
                  {isActive && (
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: opt.color }}
                    >
                      <span className="text-white" style={{ fontSize: "0.7rem", fontWeight: 900 }}>✓</span>
                    </div>
                  )}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: "규모", value: opt.scale },
                    { label: "인당 예산", value: opt.perPerson },
                    { label: "총 예산", value: opt.total },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl p-3 text-center"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <p style={{ color: opt.color, fontSize: "0.7rem", fontWeight: 700, marginBottom: 3 }}>{s.label}</p>
                      <p className="text-white" style={{ fontWeight: 700, fontSize: "0.82rem" }}>{s.value}</p>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-2">
                  {opt.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span style={{ color: opt.color, fontSize: "0.8rem", marginTop: 3, flexShrink: 0 }}>▸</span>
                      <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.87rem", lineHeight: 1.7 }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <p
          className="text-center mt-8"
          style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.82rem" }}
        >
          * 단체 할인, 항공 · 숙박 · 식비 패키지 협상에 따라 예산 변동 가능 &nbsp;|&nbsp; 두 가지 옵션 모두 에브리타임 전액 지원 기준
        </p>
      </div>
    </section>
  );
}
