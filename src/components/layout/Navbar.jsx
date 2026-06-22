import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.png";
import logoWhite from "../../assets/logo-white.png";

export default function Navbar() {
  const location = useLocation();
  const [showNav, setShowNav] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isHeroTop, setIsHeroTop] = useState(true);

  const transparentPages = ["/", "/rooms"];
  const isImageHeroPage = transparentPages.includes(location.pathname);
  const isTransparentNavbar = isImageHeroPage && isHeroTop;

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsHeroTop(currentScroll < window.innerHeight * 0.9);

      if (currentScroll < 50) {
        setShowNav(true);
      } else if (currentScroll < lastScroll) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = isTransparentNavbar ? "text-white" : "text-ink";
  const underlineColor = isTransparentNavbar ? "bg-white" : "bg-ink";

  const navLinks = [
    ["Home", "/"],
    ["Story", "/about"],
    ["Residences", "/rooms"],
    ["Discover", "/explore"],
    ["Guest Voices", "/reviews"],
    ["Reach Us", "/contact"],
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: showNav || mobileOpen ? 1 : 0,
          y: showNav || mobileOpen ? 0 : -100,
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 z-50 w-full flex items-center justify-between px-8 py-3 ${
          isTransparentNavbar
            ? "bg-transparent"
            : "bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-black/[0.04]"
        }`}
      >
        <Link to="/">
          <img
            src={isTransparentNavbar ? logoWhite : logo}
            alt="Pebbles"
            className="h-12 w-auto object-contain"
            style={{
              transform: isTransparentNavbar
                ? "translateX(18px) scale(1.6)"
                : "translateX(0) scale(1)",
            }}
          />
        </Link>

        <div
          className={`hidden lg:flex items-center gap-8 text-[18px] font-light ${textColor}`}
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {navLinks.map(([name, path]) => (
            <Link
              key={name}
              to={path}
              className="relative group transition-opacity duration-300 hover:opacity-70"
            >
              {name}
              <span
                className={`absolute left-0 -bottom-1 w-0 h-[1px] ${underlineColor} group-hover:w-full transition-all duration-300`}
              />
            </Link>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="hidden lg:block px-6 py-3 rounded-xl bg-[#3A3A3A] text-[#FAF7F2] text-sm transition-all duration-300"
        >
          Book Now
        </motion.button>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden ${textColor}`}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed top-[72px] left-0 w-full z-40 bg-[#FAF7F2] border-b border-black/[0.05] lg:hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map(([name, path]) => (
                <Link
                  key={name}
                  to={path}
                  onClick={() => setMobileOpen(false)}
                  className="py-2 text-[#3A3A3A]"
                  style={{
                    fontFamily: "'Bodoni Moda', serif",
                    fontSize: "20px",
                    fontWeight: 300,
                    letterSpacing: "0.01em",
                  }}
                >
                  {name}
                </Link>
              ))}

              <button className="px-6 py-3 rounded-xl bg-[#3A3A3A] text-[#FAF7F2] text-sm transition-all duration-300">
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}