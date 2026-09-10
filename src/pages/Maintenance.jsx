import logo from "../assets/logo.png";

export default function Maintenance() {
  return (
    <main
      className="min-h-screen min-h-[100dvh] flex flex-col relative overflow-hidden"
      style={{ background: "#FAF7F2", fontFamily: "Inter, sans-serif" }}
    >
      {/* top hairline */}
      <div className="h-[3px] w-full shrink-0" style={{ background: "linear-gradient(90deg, #3A3A3A 0%, #C9B99A 50%, #3A3A3A 100%)" }} />

      {/* subtle dot pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #3A3A3A 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="flex-1 flex flex-col items-center justify-center px-5 py-10 md:py-12 relative z-10">
        <div className="w-full max-w-[620px] bg-white rounded-2xl border border-black/[0.06] shadow-[0_12px_30px_rgba(58,58,58,0.06),0_8px_24px_rgba(58,58,58,0.05)] overflow-hidden">
          {/* gold top border accent */}
          <div className="h-[3px] w-full" style={{ background: "#C9B99A" }} />

          <div className="px-7 md:px-10 py-9 md:py-10 text-center">
            {/* logo */}
            <div className="flex justify-center mb-6">
              <img
                src={logo}
                alt="Pebbles Serviced Apartments"
                className="h-[52px] md:h-[58px] w-auto object-contain"
                style={{ filter: "drop-shadow(0 4px 12px rgba(58,58,58,0.06))" }}
              />
            </div>

            {/* badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C9B99A]/30 bg-[#F5F1E8] px-4 py-[6px] mb-5">
              <span className="w-[6px] h-[6px] rounded-full bg-[#C9B99A] shadow-[0_0_0_5px_rgba(201,185,154,0.18)] animate-pulse" />
              <span className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-[#3A3A3A]">
                Under Construction
              </span>
              <span className="w-[6px] h-[6px] rounded-full bg-[#C9B99A] shadow-[0_0_0_5px_rgba(201,185,154,0.18)] animate-pulse" style={{ animationDelay: "0.9s" }} />
            </div>

            <h1
              className="font-serif font-medium leading-[1.05] tracking-[-0.02em] text-[#3A3A3A] mb-4"
              style={{ fontFamily: '"EB Garamond", serif', fontSize: "clamp(30px, 5.5vw, 44px)" }}
            >
              We&apos;ll be <span className="text-[#8A7A5A]">back soon</span>
            </h1>

            {/* divider */}
            <div className="flex items-center justify-center gap-3 my-5">
              <span className="h-px w-[64px] md:w-[72px] opacity-70" style={{ background: "linear-gradient(90deg, transparent, #C9B99A, transparent)" }} />
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#FAF7F2] border border-black/10 shadow-sm">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
                  <path d="M12 2.8 19.2 8.6 12 21.2 4.8 8.6 12 2.8Z" fill="#C9B99A" stroke="#B8A88E" strokeWidth="1.1" />
                  <path d="M4.8 8.6H19.2M12 2.8 7.6 8.6M12 2.8l4.4 5.8M12 21.2 7.6 8.6M12 21.2l4.4-12.6" stroke="#fff" strokeOpacity="0.9" strokeWidth="0.8" />
                </svg>
              </span>
              <span className="h-px w-[64px] md:w-[72px] opacity-70" style={{ background: "linear-gradient(90deg, transparent, #C9B99A, transparent)" }} />
            </div>

            <p className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-[#8A7A5A] mb-3">
              Crafting a warmer stay
            </p>

            <p className="text-[15px] leading-7 text-[#6B6B6B] max-w-[500px] mx-auto mb-7">
              Pebbles Serviced Apartments is currently under scheduled maintenance to bring you an even more
              comfortable and delightful experience. Our team is polishing every detail — please check back shortly.
            </p>

            {/* info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-6">
              <div className="flex gap-3 items-start rounded-xl border border-black/[0.06] bg-[#FAF7F2] px-4 py-4">
                <div className="w-9 h-9 rounded-[10px] bg-white border border-black/[0.06] flex items-center justify-center shrink-0 shadow-sm">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" stroke="#3A3A3A" strokeWidth="1.6" />
                    <circle cx="12" cy="10" r="2.7" stroke="#C9B99A" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-[12.5px] font-bold text-[#3A3A3A] leading-none mb-1">Visit Us</p>
                  <p className="text-[13px] leading-5 text-[#6B6B6B]">T. Nagar, Chennai, Tamil Nadu</p>
                </div>
              </div>

              <div className="flex gap-3 items-start rounded-xl border border-black/[0.06] bg-[#FAF7F2] px-4 py-4">
                <div className="w-9 h-9 rounded-[10px] bg-white border border-black/[0.06] flex items-center justify-center shrink-0 shadow-sm">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                    <path
                      d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7c.2.9.5 1.7.8 2.5a2 2 0 0 1-.5 2L9 10.5a16 16 0 0 0 4.5 4.5l1.3-1.3a2 2 0 0 1 2-.5c.8.3 1.7.6 2.5.8A2 2 0 0 1 22 16.9Z"
                      stroke="#3A3A3A"
                      strokeWidth="1.55"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-[12.5px] font-bold text-[#3A3A3A] leading-none mb-1">Need assistance?</p>
                  <a href="tel:+914443560001" className="block text-[13px] font-semibold text-[#3A3A3A] hover:underline">
                    044 4356 0001
                  </a>
                  <a href="mailto:info@pebbles.com" className="block text-[13px] font-semibold text-[#3A3A3A] hover:underline">
                    info@pebbles.com
                  </a>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-[#F5F1E8] border border-black/[0.04] px-4 py-2 text-[11.5px] font-medium text-[#6B6B6B] mb-6">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#6B6B6B" strokeWidth="1.5" />
                <path d="M12 7v5l3.2 1.8" stroke="#6B6B6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              10:00 AM – 9:00 PM &nbsp;·&nbsp; All days
            </div>

            <div className="h-[3px] bg-[#EDE8DD] rounded-full overflow-hidden mb-2">
              <div className="h-full w-[42%] rounded-full pebbles-shimmer" style={{ background: "linear-gradient(90deg, #C9B99A, #D8CAB0)" }} />
            </div>
            <p className="text-[10.5px] font-semibold tracking-[0.08em] uppercase text-[#9A8F7A]">
              Polishing every detail — back shortly
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-[11.5px] font-medium tracking-[0.02em] text-[#9A8F7A] flex flex-wrap items-center justify-center gap-2">
          <span>© {new Date().getFullYear()} Pebbles Serviced Apartments. All Rights Reserved.</span>
          <span className="hidden sm:inline w-[3px] h-[3px] rounded-full bg-[#C9B99A]/60" />
          <span>
            Crafted with <span style={{ color: "#B07A5A" }}>♥</span> in Chennai
          </span>
        </p>
      </div>

      <style>{`
        @keyframes pebbles-shimmer {
          0% { transform: translateX(-42%); }
          100% { transform: translateX(240%); }
        }
        .pebbles-shimmer { animation: pebbles-shimmer 1.6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .pebbles-shimmer, .animate-pulse { animation: none !important; }
        }
      `}</style>
    </main>
  );
}
