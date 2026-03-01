const phases = [
  {
    phase: "Phase 1",
    period: "현재 ~ 4월 말",
    title: "기획 확정 및 모집 준비",
    desc: "에브리타임과의 협의 완료, 캠페인 규모 및 옵션 결정, 참가자 모집 페이지 및 게시판 셋업",
    status: "준비",
    color: "#F59E0B",
    icon: "⚙️",
  },
  {
    phase: "Phase 2",
    period: "4월 중 ~ 5월 초",
    title: "사연 접수 및 참가자 선발",
    desc: "에브리타임 앱 내 전용 게시판을 통한 전국 대학생 사연 공모, 선발 심사 및 발표",
    status: "모집",
    color: "#34D399",
    icon: "📝",
  },
  {
    phase: "Phase 3",
    period: "5월 7일 ~ 10일",
    title: "제1기 청춘을 찾아서 실행",
    desc: "제주도 3박 4일 여행 진행, 실시간 에브리타임 게시판 중계, 콘텐츠 촬영 및 기록",
    status: "실행",
    color: "#818CF8",
    icon: "🏝️",
  },
  {
    phase: "Phase 4",
    period: "5월 이후",
    title: "후기 바이럴 및 운영권 이양",
    desc: "SNS 자발적 후기 확산, 콘텐츠 아카이빙, 모든 비즈니스 가치 및 장기 운영권 에브리타임에 전면 양도",
    status: "성장",
    color: "#F472B6",
    icon: "🚀",
  },
];

export function RoadmapSection() {
  return (
    <section className="py-24 px-6" style={{ background: "#0A0A16" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm mb-4"
            style={{ background: "rgba(244,114,182,0.15)", color: "#F472B6", border: "1px solid rgba(244,114,182,0.3)" }}
          >
            06 · 제안자 역할 및 로드맵
          </span>
          <h2
            className="text-white mb-5"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.3 }}
          >
            첫 단추를 꿰고,<br />
            <span style={{ color: "#F472B6" }}>나머지는 온전히 양도합니다</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", lineHeight: 1.9, maxWidth: 600, margin: "0 auto" }}>
            6월 군 입대를 앞두고 있어, 제1기의 성공적인 런칭에만 집중합니다.
            이후의 모든 비즈니스 가치와 장기 독점 운영권은 에브리타임에 온전히 양도합니다.
          </p>
        </div>

        {/* Phases */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="absolute left-8 top-8 bottom-8 w-0.5 hidden md:block"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />

          <div className="flex flex-col gap-6">
            {phases.map((p, i) => (
              <div key={p.phase} className="flex gap-6 items-start">
                {/* Step circle */}
                <div
                  className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center flex-shrink-0 z-10"
                  style={{
                    background: `${p.color}18`,
                    border: `2px solid ${p.color}40`,
                  }}
                >
                  <span style={{ fontSize: "1.4rem" }}>{p.icon}</span>
                </div>

                {/* Content */}
                <div
                  className="flex-1 rounded-3xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span
                      className="px-3 py-1 rounded-full text-xs"
                      style={{ background: `${p.color}20`, color: p.color, fontWeight: 700 }}
                    >
                      {p.phase}
                    </span>
                    <span
                      className="px-3 py-1 rounded-full text-xs"
                      style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)", fontWeight: 600 }}
                    >
                      {p.period}
                    </span>
                    <span
                      className="px-3 py-1 rounded-full text-xs"
                      style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.35)" }}
                    >
                      {p.status}
                    </span>
                  </div>
                  <h3 className="text-white mb-2" style={{ fontWeight: 700, fontSize: "1.05rem" }}>{p.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", lineHeight: 1.8 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Proposer note */}
        <div
          className="rounded-3xl p-8 mt-12 flex gap-5 items-start"
          style={{
            background: "linear-gradient(135deg, rgba(244,114,182,0.08) 0%, rgba(129,140,248,0.08) 100%)",
            border: "1px solid rgba(244,114,182,0.2)",
          }}
        >
          <span style={{ fontSize: "2.5rem", flexShrink: 0 }}>🎖️</span>
          <div>
            <p className="text-white mb-2" style={{ fontWeight: 700, fontSize: "1.05rem" }}>제안자의 약속</p>
            <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.9, fontSize: "0.92rem" }}>
              저는 이 거대한 프로젝트의 '첫 단추(제1기 기획 및 운영)'를 성공적으로 꿰는 데에만 집중하고자 합니다.
              성공적인 런칭 이후 파생되는 <span style={{ color: "#F472B6", fontWeight: 600 }}>모든 비즈니스 가치와 장기적인 캠페인 독점 운영권은 온전히 에브리타임 측에 양도</span>하겠습니다.
              이 캠페인이 에브리타임의 레거시가 되길 진심으로 바랍니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
