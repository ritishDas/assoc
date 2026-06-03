import React, { useState, useEffect } from "react";

const NAV_ITEMS = ["About", "Projects", "Contributors", "Announcements", "Events", "Resources"];

export default function Navbar() {
  const [active, setActive] = useState("Announcements");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 nav-glass transition-all duration-300
                     ${scrolled ? "border-b border-white/[0.06]" : ""}`}
         style={{ height: 64 }}>
      <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 no-underline group">
          <div className="w-8 h-8 rounded-[9px] btn-violet flex items-center justify-center flex-shrink-0
                          shadow-violet-sm group-hover:scale-105 transition-transform duration-200">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1.2l2.1 5H15l-4.2 3.2 1.6 5.4L8 12l-4.4 2.8 1.6-5.4L1 6.2h4.9z" fill="white"/>
            </svg>
          </div>
          <span className="font-display text-[17px] font-bold text-white tracking-wide">ASOC</span>
        </a>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-7 list-none">
          {NAV_ITEMS.map((item) => (
            <li key={item} className="relative">
              <button
                onClick={() => setActive(item)}
                className={`font-body text-[13px] cursor-pointer transition-all duration-200 bg-transparent border-none
                            ${active === item
                              ? "text-white font-medium"
                              : "text-white/40 hover:text-white/70"}`}
              >
                {item}
              </button>
              {active === item && (
                <div className="absolute -bottom-1 left-0 right-0 h-[1.5px] rounded-full
                                bg-gradient-to-r from-violet-DEFAULT to-cosmic-teal" />
              )}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-2.5">
          <button className="font-body text-[12px] font-medium px-5 py-2 rounded-full
                             border border-white/20 bg-transparent text-white/70
                             hover:border-white/40 hover:text-white transition-all duration-200">
            Login
          </button>
          <button className="font-body text-[12px] font-semibold px-5 py-2 rounded-full
                             border-none text-white btn-violet shadow-violet-sm
                             hover:opacity-90 hover:-translate-y-px transition-all duration-200">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
