import { useState, useEffect } from "react";

const navItems = [
  { label: "배경", href: "#background" },
  { label: "에브리타임", href: "#why" },
  { label: "운영 계획", href: "#program" },
  { label: "예산 옵션", href: "#budget" },
  { label: "기대 가치", href: "#roi" },
  { label: "로드맵", href: "#roadmap" },
  { label: "문의", href: "#contact" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between transition-all duration-300"
      style={{
        background: scrolled ? "rgba(8,8,18,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      {/* Logo */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
          style={{ background: "linear-gradient(135deg, #FF8C00, #FF4500)", fontSize: "0.9rem", fontWeight: 900 }}
        >
          청
        </div>
        <span className="text-white" style={{ fontWeight: 700, fontSize: "0.95rem" }}>청춘을 찾아서</span>
      </div>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleClick(item.href)}
            className="px-4 py-2 rounded-xl transition-all duration-200"
            style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", fontWeight: 500 }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = "#fff";
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.55)";
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* CTA button */}
      <button
        className="hidden md:block px-5 py-2 rounded-xl text-white transition-all duration-200 hover:scale-105"
        style={{
          background: "linear-gradient(135deg, #FF8C00, #FF4500)",
          fontSize: "0.85rem",
          fontWeight: 700,
          boxShadow: "0 4px 15px rgba(255,140,0,0.3)",
        }}
        onClick={() => handleClick("#contact")}
      >
        미팅 요청
      </button>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-white p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ fontSize: "1.4rem" }}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 py-4 flex flex-col"
          style={{ background: "rgba(8,8,18,0.97)", borderBottom: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(16px)" }}
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleClick(item.href)}
              className="px-6 py-3 text-left"
              style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem" }}
            >
              {item.label}
            </button>
          ))}
          <div className="px-6 pt-3">
            <button
              className="w-full py-3 rounded-xl text-white"
              style={{ background: "linear-gradient(135deg, #FF8C00, #FF4500)", fontWeight: 700 }}
              onClick={() => handleClick("#contact")}
            >
              미팅 요청
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
