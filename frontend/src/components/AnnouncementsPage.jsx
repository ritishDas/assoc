import React, { useState } from "react";
import { announcements } from "../../../../assoc-magazine/src/data/announcements";
import FeaturedCard from "./FeaturedCard";
import SideCard from "./SideCard";
import MiniCard from "./MiniCard";
import FilterBar from "./FilterBar";
import StatsBar from "./StatsBar";

export default function AnnouncementsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const featured = announcements.find((a) => a.featured);
  const filtered  = activeFilter === "all"
    ? announcements.filter((a) => !a.featured)
    : announcements.filter((a) => !a.featured && a.category === activeFilter);

  const sideCards = filtered.slice(0, 3);
  const miniCards = filtered.slice(3);

  return (
    <>
      <section className="relative z-10 max-w-7xl mx-auto px-8 pt-12 pb-20">

        {/* Section header */}
        <div className="flex items-end justify-between mb-8 opacity-0 animate-fade-up-2">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px w-6 bg-gradient-to-r from-violet-DEFAULT to-transparent" />
              <span className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase text-violet-DEFAULT">
                Program Announcements
              </span>
            </div>
            {/* FIX: font-body bold instead of font-display extrabold — no stretching */}
            <h2 className="font-body font-bold text-white leading-tight"
                style={{ fontSize: 26, letterSpacing: "-0.01em" }}>
              Stay ahead of every update
            </h2>
            <p className="font-body text-[13px] text-white/40 mt-1.5 font-light">
              All tasks, deadlines, events, and rewards — all in one place
            </p>
          </div>

          <div className="flex items-center gap-4">
            <FilterBar active={activeFilter} onChange={setActiveFilter} />
            <a href="#" className="font-body text-[12px] text-violet-DEFAULT
                                   hover:opacity-75 transition-opacity duration-200 whitespace-nowrap">
              View all →
            </a>
          </div>
        </div>

        {/* Magazine grid: featured left + sidebar right — FIX: sidebar has max-w so it never overflows */}
        {featured && (
          <div className="grid gap-4 mb-4" style={{ gridTemplateColumns: "1fr 320px" }}>
            {/* Featured spotlight */}
            <FeaturedCard item={featured} />

            {/* Side stack — overflow hidden so cards don't bleed right */}
            <div className="flex flex-col gap-3 min-w-0 overflow-hidden">
              {sideCards.length > 0
                ? sideCards.map((item, i) => (
                    <SideCard key={item.id} item={item} animDelay={0.35 + i * 0.1} />
                  ))
                : <div className="flex items-center justify-center h-full text-white/30 text-sm font-body">
                    No announcements in this category.
                  </div>
              }
            </div>
          </div>
        )}

        {/* Bottom mini-card row */}
        {miniCards.length > 0 && (
          <div className={`grid gap-3 ${miniCards.length >= 3 ? "grid-cols-3" : miniCards.length === 2 ? "grid-cols-2" : "grid-cols-1"}`}>
            {miniCards.map((item, i) => (
              <MiniCard key={item.id} item={item} animDelay={0.55 + i * 0.1} />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!featured && filtered.length === 0 && (
          <div className="text-center py-20 text-white/30 font-body text-[14px]">
            No announcements in this category yet.
          </div>
        )}
      </section>

      {/* Stats bar */}
      <StatsBar />

      {/* Footer */}
      <footer className="border-t border-white/[0.06] px-8 py-8 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-lg btn-violet flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1l1.5 3.5H11.5l-3 2.4 1.1 3.8L6 9 2.4 10.7l1.1-3.8L.5 4.5H5z" fill="white"/>
            </svg>
          </div>
          <span className="font-display text-[15px] font-bold text-white/60">ASOC</span>
        </div>
        <div className="flex items-center gap-6">
          {["About", "Projects", "Contributors", "Events"].map((link) => (
            <a key={link} href="#"
               className="font-body text-[12px] text-white/30 hover:text-white/55 transition-colors duration-200">
              {link}
            </a>
          ))}
        </div>
        <div className="font-body text-[11px] text-white/25">
          © 2026 ASOC. All rights reserved.
        </div>
      </footer>
    </>
  );
}
