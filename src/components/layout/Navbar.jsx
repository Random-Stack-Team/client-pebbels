import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full flex items-center justify-between px-10 py-6 bg-background"
    >
      {/* Logo */}
      <div className="text-2xl font-serif text-ink tracking-wide">
        Pebbles
      </div>

      {/* Links */}
      <div className="flex gap-10 text-sm font-medium text-ink">

  <Link to="/" className="relative group">
    Home
    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-ink group-hover:w-full transition-all duration-300"></span>
  </Link>

  <Link to="/rooms" className="relative group">
    Rooms
    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-ink group-hover:w-full transition-all duration-300"></span>
  </Link>

  <Link to="/design" className="relative group">
    Design
    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-ink group-hover:w-full transition-all duration-300"></span>
  </Link>

  <Link to="/explore" className="relative group"> 
    Explore
    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-ink group-hover:w-full transition-all duration-300"></span>
  </Link> 

  <Link to="/about" className="relative group">
    About
    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-ink group-hover:w-full transition-all duration-300"></span>
  </Link>

  <Link to="/contact" className="relative group">
  Contact
  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-ink group-hover:w-full transition-all duration-300"></span>
</Link>

</div>

      {/* CTA */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="px-6 py-2 bg-ink text-[#F5F1E8] text-sm"
      >
        Book Now
      </motion.button>
    </motion.nav>
  );
}