const values = [
  {
    icon: "❤️",
    title: "감정적 충성도",
    desc: "\"에브리타임은 단순한 시간표 앱을 넘어, 내 20대 청춘의 추억을 만들어준 고마운 브랜드\"라는 인식을 심어줍니다.",
    highlight: "팬덤 형성",
    color: "#F87171",
  },
  {
    icon: "🚫",
    title: "락인(Lock-in) 효과",
    desc: "타 커뮤니티가 절대 넘볼 수 없는 강력한 진입장벽. 에브리타임만이 제공할 수 있는 독점 브랜드 경험.",
    highlight: "경쟁 불가",
    color: "#F59E0B",
  },
  {
    icon: "🌐",
    title: "자발적 SNS 바이럴",
    desc: "참가자들이 자발적으로 쏟아낼 SNS 후기들. K-대학생 트렌드로서 글로벌 시장 확장의 훌륭한 레퍼런스가 됩니다.",
    highlight: "글로벌 확산",
    color: "#34D399",
  },
  {
    icon: "📈",
    title: "초가성비 브랜드 마케팅",
    desc: "수천만 원이 일회성으로 증발하는 인플루언서 광고 대비, 타겟 고객의 평생 기억에 남는 브랜드 투자입니다.",
    highlight: "압도적 ROI",
    color: "#818CF8",
  },
];

const comparisons = [
  { type: "일반 인플루언서 광고", cost: "1,000~5,000만원", retention: "수일", viral: "낮음", loyalty: "없음", bg: "rgba(255,59,59,0.06)", border: "rgba(255,59,59,0.15)" },
  { type: "외부 매체 광고 (배너/검색)", cost: "500~3,000만원", retention: "수초~수분", viral: "매우 낮음", loyalty: "없음", bg: "rgba(255,59,59,0.06)", border: "rgba(255,59,59,0.15)" },
  { type: "청춘을 찾아서 캠페인 ✦", cost: "350~3,000만원", retention: "평생", viral: "매우 높음", loyalty: "강력한 팬덤", bg: "rgba(52,211,153,0.06)", border: "rgba(52,211,153,0.3)", highlight: true },
];

export function ROISection() {
  return (
    <section className="py-24 px-6" style={{ background: "#0D0D1A" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm mb-4"
            style={{ background: "rgba(52,211,153,0.15)", color: "#34D399", border: "1px solid rgba(52,211,153,0.3)" }}
          >
            05 · 기대 가치 및 ROI
          </span>
          <h2
            className="text-white mb-5"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.3 }}
          >
            이것은 비용이 아닙니다,<br />
            <span style={{ color: "#34D399" }}>가장 강력한 브랜드 투자입니다</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", lineHeight: 1.9, maxWidth: 560, margin: "0 auto" }}>
            일반적인 인플루언서 광고와 달리, 이 캠페인은 타겟 고객의 감정적 충성도를 끌어내는 초가성비 브랜드 마케팅입니다.
          </p>
        </div>

        {/* Value cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-3xl p-7 flex gap-5"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <span style={{ fontSize: "2.2rem", flexShrink: 0 }}>{v.icon}</span>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-white" style={{ fontWeight: 700, fontSize: "1rem" }}>{v.title}</h3>
                  <span
                    className="px-2 py-0.5 rounded-full text-xs"
                    style={{ background: `${v.color}22`, color: v.color, fontWeight: 700 }}
                  >
                    {v.highlight}
                  </span>
                </div>
                <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.8, fontSize: "0.9rem" }}>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <h3 className="text-white text-center mb-6" style={{ fontWeight: 700, fontSize: "1.1rem" }}>
          📊 마케팅 방식 비교
        </h3>
        <div className="rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          {/* Header */}
          <div
            className="grid grid-cols-5 px-6 py-4 text-xs"
            style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.4)", fontWeight: 700, letterSpacing: "0.05em" }}
          >
            <span>방식</span>
            <span className="text-center">예산</span>
            <span className="text-center">기억 유지</span>
            <span className="text-center">바이럴</span>
            <span className="text-center">브랜드 충성도</span>
          </div>
          {comparisons.map((c, i) => (
            <div
              key={c.type}
              className="grid grid-cols-5 px-6 py-5 items-center"
              style={{
                background: c.bg,
                borderTop: `1px solid ${c.border}`,
              }}
            >
              <span
                style={{
                  color: c.highlight ? "#34D399" : "rgba(255,255,255,0.6)",
                  fontWeight: c.highlight ? 700 : 400,
                  fontSize: "0.87rem",
                }}
              >
                {c.type}
              </span>
              <span
                className="text-center"
                style={{ color: c.highlight ? "#34D399" : "rgba(255,255,255,0.5)", fontSize: "0.82rem", fontWeight: c.highlight ? 700 : 400 }}
              >
                {c.cost}
              </span>
              <span
                className="text-center"
                style={{ color: c.highlight ? "#34D399" : "rgba(255,59,59,0.7)", fontSize: "0.82rem", fontWeight: c.highlight ? 700 : 400 }}
              >
                {c.retention}
              </span>
              <span
                className="text-center"
                style={{ color: c.highlight ? "#34D399" : "rgba(255,59,59,0.7)", fontSize: "0.82rem", fontWeight: c.highlight ? 700 : 400 }}
              >
                {c.viral}
              </span>
              <span
                className="text-center"
                style={{ color: c.highlight ? "#34D399" : "rgba(255,59,59,0.7)", fontSize: "0.82rem", fontWeight: c.highlight ? 700 : 400 }}
              >
                {c.loyalty}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
