const timeline = [
  {
    day: "D-0",
    label: "사전 일정",
    date: "출발 전 · 서울(거점 지역)",
    title: "전야제, 설렘의 첫 만남",
    icon: "🥂",
    color: "#F472B6",
    colorBg: "rgba(244,114,182,0.12)",
    colorBorder: "rgba(244,114,182,0.3)",
    highlight: false,
    items: [
      { time: "저녁", icon: "🍽️", text: "서울(또는 거점 지역)에서 모여 간단한 식사 및 오리엔테이션 진행" },
      { time: "밤", icon: "🧊", text: "아이스 브레이킹 — 어색함을 풀고 여행 기대감을 나누며 미리 친해지는 시간" },
    ],
  },
  {
    day: "D-1",
    label: "5월 7일 (수)",
    date: "제주도 Day 1",
    title: "낯선 곳에서의 새로운 시작",
    icon: "✈️",
    color: "#34D399",
    colorBg: "rgba(52,211,153,0.1)",
    colorBorder: "rgba(52,211,153,0.25)",
    highlight: false,
    items: [
      { time: "오후", icon: "🛬", text: "제주 공항 집결 및 숙소(대관한 대형 게스트하우스 혹은 독채 펜션) 이동" },
      { time: "저녁", icon: "🛒", text: "근처 마트에서 다 같이 장보기" },
      { time: "밤", icon: "🍳", text: "조를 나누어 함께 저녁 요리 만들어 먹기 — 게스트하우스 특유의 왁자지껄한 분위기 형성" },
    ],
  },
  {
    day: "D-2",
    label: "5월 8일 (목)",
    date: "제주도 Day 2",
    title: "우연이 만드는 인연",
    subtitle: "무작위 짝꿍 자유여행",
    icon: "🎲",
    color: "#FFB347",
    colorBg: "rgba(255,179,71,0.12)",
    colorBorder: "rgba(255,179,71,0.35)",
    highlight: true,
    items: [
      { time: "낮", icon: "🎯", text: "제비뽑기 등 무작위 방식으로 2~4인 짝꿍 매칭 후 100% 자유 일정 (렌터카 혹은 대중교통 이용)" },
      { time: "저녁", icon: "🔥", text: "숙소 복귀 후 바비큐 파티" },
      { time: "밤 ✦ 하이라이트", icon: "🪵", text: "마당에서 불멍 타임 — 타닥타닥 타는 장작 앞에서 대학 생활의 고민, 취업, 인간관계 등 그동안 꺼내지 못했던 속 깊은 이야기를 나누는 시간" },
    ],
  },
  {
    day: "D-3",
    label: "5월 9일 (금)",
    date: "제주도 Day 3",
    title: "취향 존중의 날",
    subtitle: "취미별 소그룹 자유여행",
    icon: "🌈",
    color: "#818CF8",
    colorBg: "rgba(129,140,248,0.12)",
    colorBorder: "rgba(129,140,248,0.3)",
    highlight: true,
    items: [
      {
        time: "낮",
        icon: "🗺️",
        text: "전날 밤 불멍을 통해 알게 된 서로의 관심사를 바탕으로 취향이 맞는 사람들끼리 자율 그룹 결성",
        tags: ["🏄 액티비티팀", "☕ 오션뷰 카페 투어팀", "⛰️ 한라산 등반팀", "🏖️ 해변 낮잠팀"],
      },
      { time: "밤", icon: "🥘", text: "각자의 하루를 공유하며 남은 식재료로 포트럭 파티 및 아쉬움을 달래는 마지막 낭만의 밤" },
    ],
  },
  {
    day: "D-4",
    label: "5월 10일 (토)",
    date: "제주도 Day 4 · 귀경",
    title: "다시, 일상으로 — 하지만 달라진 마음으로",
    icon: "🌊",
    color: "#60A5FA",
    colorBg: "rgba(96,165,250,0.1)",
    colorBorder: "rgba(96,165,250,0.25)",
    highlight: false,
    items: [
      { time: "오전", icon: "☀️", text: "느지막이 일어나 여유로운 아침 식사 및 해안가 산책" },
      { time: "오후", icon: "📲", text: "공항 이동 및 해산 — 에브리타임에 각자의 시선이 담긴 자유로운 여행 후기 업로드 시작" },
    ],
  },
];

export function ProgramSection() {
  return (
    <section className="py-24 px-6" style={{ background: "#0D0D1A" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm mb-4"
            style={{ background: "rgba(16,185,129,0.15)", color: "#34D399", border: "1px solid rgba(16,185,129,0.3)" }}
          >
            03 · 제1기 시범 운영안
          </span>
          <h2
            className="text-white mb-5"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.3 }}
          >
            게스트하우스 바이브 &amp;<br />
            <span style={{ color: "#34D399" }}>낭만 자유여행</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", lineHeight: 1.9, maxWidth: 580, margin: "0 auto" }}>
            정해진 관광지 코스가 아닌, 우연한 인연과 진짜 대화가 만들어가는 청춘의 여행
          </p>
        </div>

        {/* Destination image + info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-3xl overflow-hidden relative" style={{ minHeight: 320 }}>
            <img
              src="https://images.unsplash.com/photo-1758327740876-609dd811197a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKZWp1JTIwaXNsYW5kJTIwc2NlbmljJTIwbGFuZHNjYXBlJTIwS29yZWF8ZW58MXx8fHwxNzcyMzg1MTMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="제주도"
              className="w-full h-full object-cover"
              style={{ minHeight: 320 }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)" }} />
            <div className="absolute bottom-6 left-6">
              <p className="text-white" style={{ fontWeight: 800, fontSize: "1.6rem" }}>🏝️ 제주도</p>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>일상과 완벽히 분리된 낭만의 공간</p>
            </div>
            {/* Badge */}
            <div
              className="absolute top-5 right-5 px-3 py-1.5 rounded-xl text-xs"
              style={{ background: "rgba(255,179,71,0.25)", color: "#FFB347", border: "1px solid rgba(255,179,71,0.4)", backdropFilter: "blur(8px)", fontWeight: 700 }}
            >
              🪵 불멍 &amp; 바비큐
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { label: "기간", value: "2025년 5월 7일 ~ 10일 (3박 4일) + 전야제", icon: "📅" },
              { label: "숙소 형태", value: "대관한 대형 게스트하우스 또는 독채 펜션 — 함께 요리하고 마당에서 불멍", icon: "🏡" },
              { label: "여행 방식", value: "무작위 짝꿍 자유여행 + 취향별 소그룹 — 정해진 코스 없는 진짜 자유", icon: "🗺️" },
              { label: "지원 방식", value: "에브리타임 100% Full Sponsoring (항공 + 숙박 + 식비 포함)", icon: "🎁" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl p-5 flex gap-4 items-start"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <p style={{ color: "#34D399", fontSize: "0.78rem", fontWeight: 700, marginBottom: 3, letterSpacing: "0.05em" }}>{item.label.toUpperCase()}</p>
                  <p className="text-white" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <h3 className="text-white text-center mb-10" style={{ fontWeight: 700, fontSize: "1.2rem" }}>
          📋 상세 일정 타임라인
        </h3>

        <div className="relative flex flex-col gap-5">
          {/* Vertical line */}
          <div
            className="absolute left-[2.1rem] top-10 bottom-10 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, rgba(244,114,182,0.4), rgba(96,165,250,0.4))" }}
          />

          {timeline.map((t, idx) => (
            <div key={t.day} className="flex gap-5 items-start">
              {/* Left day badge */}
              <div
                className="flex-shrink-0 w-[4.2rem] flex flex-col items-center pt-1 z-10"
              >
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center"
                  style={{ background: t.colorBg, border: `2px solid ${t.colorBorder}` }}
                >
                  <span style={{ fontSize: "1.3rem" }}>{t.icon}</span>
                </div>
                <span
                  className="mt-2 text-center"
                  style={{ color: t.color, fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.04em" }}
                >
                  {t.day}
                </span>
              </div>

              {/* Card */}
              <div
                className="flex-1 rounded-3xl overflow-hidden"
                style={{
                  background: t.highlight
                    ? t.colorBg
                    : "rgba(255,255,255,0.03)",
                  border: `1px solid ${t.highlight ? t.colorBorder : "rgba(255,255,255,0.07)"}`,
                }}
              >
                {/* Card header */}
                <div
                  className="px-6 py-4 flex flex-wrap items-center gap-3"
                  style={{ borderBottom: `1px solid ${t.highlight ? t.colorBorder : "rgba(255,255,255,0.05)"}` }}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-white" style={{ fontWeight: 800, fontSize: "1rem" }}>{t.title}</p>
                        {t.subtitle && (
                          <span
                            className="px-2.5 py-0.5 rounded-full text-xs"
                            style={{ background: `${t.color}22`, color: t.color, fontWeight: 700 }}
                          >
                            {t.subtitle}
                          </span>
                        )}
                      </div>
                      <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.78rem", marginTop: 1 }}>
                        {t.label} &nbsp;·&nbsp; {t.date}
                      </p>
                    </div>
                  </div>
                  {t.highlight && (
                    <span
                      className="px-3 py-1 rounded-full text-xs flex-shrink-0"
                      style={{ background: `${t.color}22`, color: t.color, fontWeight: 700, border: `1px solid ${t.color}44` }}
                    >
                      ✦ 핵심 일정
                    </span>
                  )}
                </div>

                {/* Card items */}
                <div className="px-6 py-4 flex flex-col gap-4">
                  {t.items.map((item, iIdx) => (
                    <div key={iIdx} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 flex flex-col items-center gap-1 pt-0.5" style={{ minWidth: 80 }}>
                        <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
                        <span
                          className="text-center px-2 py-0.5 rounded-md"
                          style={{
                            color: item.time.includes("✦") ? t.color : "rgba(255,255,255,0.35)",
                            fontSize: "0.7rem",
                            fontWeight: item.time.includes("✦") ? 700 : 500,
                            background: item.time.includes("✦") ? `${t.color}18` : "transparent",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {item.time}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", lineHeight: 1.8 }}>{item.text}</p>
                        {"tags" in item && item.tags && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {item.tags.map((tag: string) => (
                              <span
                                key={tag}
                                className="px-3 py-1 rounded-full text-xs"
                                style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.08)" }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom highlight quote */}
        <div
          className="mt-10 rounded-3xl p-7 flex gap-4 items-start"
          style={{ background: "rgba(255,179,71,0.07)", border: "1px solid rgba(255,179,71,0.2)" }}
        >
          <span style={{ fontSize: "2rem", flexShrink: 0 }}>🪵</span>
          <div>
            <p className="text-white mb-1" style={{ fontWeight: 700, fontSize: "0.95rem" }}>불멍 타임 — 이 캠페인의 진짜 핵심</p>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.88rem", lineHeight: 1.85 }}>
              화려한 관광지가 아닌, 장작 앞에서 나누는 솔직한 이야기. <br className="hidden md:block" />
              취업 걱정, 인간관계 고민, 꿈에 대한 이야기 — 에브리타임이 만드는 진짜 청춘의 순간입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
