const problems = [
  {
    emoji: "📚",
    title: "입시에 지친 새내기",
    desc: "고등학교 내내 억눌렸던 꿈들. 낯선 대학 환경에 내던져진 채 쉴 틈조차 없는 1학년들.",
  },
  {
    emoji: "📋",
    title: "스펙에 매몰된 고학년",
    desc: "졸업 후를 걱정하며 낭만보다 자격증과 인턴을 선택할 수밖에 없는 3, 4학년들.",
  },
  {
    emoji: "💸",
    title: "현실의 벽 앞에 선 학생들",
    desc: "알바비와 생활비, 군 입대라는 현실적 무게 때문에 여행은 꿈도 꾸지 못하는 평범한 대학생들.",
  },
];

export function BackgroundSection() {
  return (
    <section className="py-24 px-6" style={{ background: "#0D0D1A" }}>
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm mb-4"
            style={{ background: "rgba(255,140,0,0.15)", color: "#FFB347", border: "1px solid rgba(255,140,0,0.3)" }}
          >
            01 · 제안 배경
          </span>
          <h2
            className="text-white mb-5"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.3 }}
          >
            청춘은 지금 어디에 있을까요?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem", lineHeight: 1.9, maxWidth: 600, margin: "0 auto" }}>
            대한민국 대학생들은 저마다의 이유로 '청춘의 낭만'을 유보하고 있습니다.
            억눌린 수요가 폭발하기 직전, 에브리타임이 먼저 손을 내밀어야 할 때입니다.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl p-7"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span style={{ fontSize: "2.5rem" }}>{p.emoji}</span>
              <h3 className="text-white mt-4 mb-3" style={{ fontWeight: 700, fontSize: "1.1rem" }}>{p.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.8, fontSize: "0.92rem" }}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote highlight */}
        <div
          className="rounded-3xl p-8 md:p-12 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(255,140,0,0.12) 0%, rgba(255,69,0,0.08) 100%)",
            border: "1px solid rgba(255,140,0,0.25)",
          }}
        >
          <span style={{ fontSize: "3rem" }}>"</span>
          <p
            className="text-white"
            style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", fontWeight: 600, lineHeight: 1.8, maxWidth: 700, margin: "0 auto" }}
          >
            현실의 무게 때문에 여행과 낭만은 <span style={{ color: "#FFB347" }}>꿈도 꾸지 못하는</span><br />
            평범한 대학생들의 억눌린 수요를 겨냥합니다.
          </p>
          <div
            className="w-16 h-1 rounded-full mx-auto mt-6"
            style={{ background: "linear-gradient(90deg, #FF8C00, #FFD700)" }}
          />
        </div>
      </div>
    </section>
  );
}
