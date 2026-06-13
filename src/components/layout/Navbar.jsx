import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const location = useLocation();
  const isRoomsPage = location.pathname === "/rooms";

  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textColor = isRoomsPage ? "text-white" : "text-ink";
  const underlineColor = isRoomsPage ? "bg-white" : "bg-ink";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: showNav ? 1 : 0,
        y: showNav ? 0 : -100,
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        fixed top-0 left-0
        z-50
        w-full
        flex
        items-center
        justify-between
        px-8
        py-3
        ${
          isRoomsPage
            ? "bg-transparent"
            : "bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-black/[0.04]"
        }
      `}
    >
      {/* Logo */}
      <img
        src={logo}
        alt="Pebbles"
        className="h-12 w-auto"
      />

      {/* Links */}
      <div
        className={`flex items-center gap-8 text-sm font-medium ${textColor}`}
      >
        {[
          ["Home", "/"],
          ["Rooms", "/rooms"],
          ["Design", "/design"],
          ["Explore", "/explore"],
          ["About", "/about"],
          ["Contact", "/contact"],
        ].map(([name, path]) => (
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

      {/* CTA */}
      <motion.button
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  className="
    px-6
    py-3
    rounded-xl
    bg-[#3A3A3A]
    text-[#FAF7F2]
    text-sm
    transition-all
    duration-300
  "
>
  Book Now
</motion.button>
    </motion.nav>
  );
}