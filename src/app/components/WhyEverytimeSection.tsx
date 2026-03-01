const reasons = [
  {
    num: "01",
    icon: "🔐",
    title: "철저한 학교 인증 기반",
    desc: "개인이나 단일 총학생회 차원에서는 담보할 수 없는 전국 단위의 공신력. 에브리타임만이 이 프로젝트를 신뢰성 있게 이끌 수 있습니다.",
  },
  {
    num: "02",
    icon: "📱",
    title: "완전한 앱 내 생태계",
    desc: "참가자 모집 → 사연 접수 → 소통 → 여행 후기 공유까지, 모든 붐업(Boom-up) 과정이 에브리타임 앱 내에서 자연스럽게 이루어집니다.",
  },
  {
    num: "03",
    icon: "💰",
    title: "Zero 외부 마케팅 비용",
    desc: "별도의 막대한 외부 광고비 없이, 앱 내 배너와 전용 게시판만으로 전국적인 파급력을 낼 수 있는 초가성비 캠페인입니다.",
  },
  {
    num: "04",
    icon: "🌏",
    title: "독점적 플랫폼 지위",
    desc: "전국 200만+ 대학생 유저를 보유한 플랫폼에서만 가능한 스케일. 타 경쟁 서비스가 절대 복제할 수 없는 진입장벽을 만듭니다.",
  },
];

export function WhyEverytimeSection() {
  return (
    <section className="py-24 px-6" style={{ background: "#0A0A16" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left sticky header */}
          <div className="md:w-2/5 md:sticky md:top-24">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm mb-4"
              style={{ background: "rgba(99,102,241,0.15)", color: "#818CF8", border: "1px solid rgba(99,102,241,0.3)" }}
            >
              02 · 왜 에브리타임인가
            </span>
            <h2
              className="text-white mb-5"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.3 }}
            >
              이 캠페인은<br />
              에브리타임만이<br />
              <span style={{ color: "#818CF8" }}>할 수 있습니다.</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.9, fontSize: "0.95rem" }}>
              단순한 시간표 앱을 넘어, 대학생들의 삶 깊숙이 자리한 플랫폼만이 갖는 특별한 신뢰와 영향력.
            </p>

            {/* Everytime mock badge */}
            <div
              className="mt-8 rounded-2xl p-5 flex items-center gap-4"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #E8003D, #FF4C77)" }}
              >
                E
              </div>
              <div>
                <p className="text-white" style={{ fontWeight: 700 }}>에브리타임</p>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem" }}>전국 대학생 No.1 커뮤니티 플랫폼</p>
              </div>
            </div>
          </div>

          {/* Right reasons */}
          <div className="md:w-3/5 flex flex-col gap-5">
            {reasons.map((r) => (
              <div
                key={r.num}
                className="rounded-3xl p-6 flex gap-5 items-start"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  transition: "border-color 0.2s",
                }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span style={{ fontSize: "1.5rem" }}>{r.icon}</span>
                    <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em" }}>{r.num}</span>
                  </div>
                  <h3 className="text-white mb-2" style={{ fontWeight: 700, fontSize: "1.05rem" }}>{r.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.8, fontSize: "0.9rem" }}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
