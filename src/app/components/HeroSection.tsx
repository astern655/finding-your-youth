export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1661488883456-2093b6f5bf0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKZWp1JTIwaXNsYW5kJTIwYmVhY2glMjBzdW5zZXQlMjBvcmFuZ2V8ZW58MXx8fHwxNzcyMzg1MTM2fDA&ixlib=rb-4.1.0&q=80&w=1080)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.6) 60%, rgba(10,10,30,0.92) 100%)" }} />

      {/* Top badge */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-white text-sm tracking-widest uppercase"
          style={{ background: "rgba(255,165,50,0.25)", border: "1px solid rgba(255,165,50,0.6)", backdropFilter: "blur(8px)" }}
        >
          <span style={{ color: "#FFB347" }}>✦</span>
          <span>에브리타임 × 브랜드 캠페인 기획안</span>
          <span style={{ color: "#FFB347" }}>✦</span>
        </div>

        {/* Main title */}
        <h1
          className="text-white mb-4"
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            textShadow: "0 4px 30px rgba(0,0,0,0.5)",
          }}
        >
          청춘을 찾아서
        </h1>

        <p
          className="text-white mb-6"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)", opacity: 0.9, letterSpacing: "0.15em", fontWeight: 300 }}
        >
          Finding Your Youth
        </p>

        <div className="w-20 h-1 rounded-full mb-8" style={{ background: "linear-gradient(90deg, #FF8C00, #FFD700)" }} />

        <p
          className="text-white max-w-2xl"
          style={{ fontSize: "clamp(0.95rem, 2vw, 1.15rem)", lineHeight: 1.9, opacity: 0.85, fontWeight: 300 }}
        >
          현실의 무게 아래 미뤄왔던 청춘의 낭만을<br />
          에브리타임이 직접 되찾아드립니다.
        </p>

        <div className="flex flex-wrap gap-4 mt-10 justify-center">
          {[
            { icon: "📅", label: "5월 7일 ~ 10일", sub: "3박 4일" },
            { icon: "🏝️", label: "제주도", sub: "낭만의 섬" },
            { icon: "🎓", label: "전국 대학생", sub: "100% 스폰서링" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center px-6 py-4 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(12px)", minWidth: 120 }}
            >
              <span style={{ fontSize: "1.8rem" }}>{item.icon}</span>
              <span className="text-white mt-1" style={{ fontWeight: 700, fontSize: "0.95rem" }}>{item.label}</span>
              <span style={{ color: "#FFB347", fontSize: "0.8rem", fontWeight: 500 }}>{item.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", letterSpacing: "0.15em" }}>SCROLL</span>
        <div
          className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
          style={{ border: "2px solid rgba(255,255,255,0.3)" }}
        >
          <div
            className="w-1.5 h-3 rounded-full"
            style={{ background: "rgba(255,179,71,0.8)", animation: "bounce 2s infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
