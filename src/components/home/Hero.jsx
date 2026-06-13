import { motion } from "framer-motion";
import heroImage from "../../assets/Room 5.jpg"

export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex items-center px-10 lg:px-20 pt-16 pb-12">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.92] text-ink"
          >
            Where Luxury
            <br />
            Meets Stillness
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mt-8 max-w-md text-lg leading-relaxed text-ink"
          >
            A curated stay experience designed around
           calmness, comfort, and timeless hospitality.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 px-8 py-3 bg-ink text-[#F5F1E8] text-sm font-medium"
          >
            Book Your Stay
          </motion.button>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <img
            src={heroImage}
            alt="Pebbles Hotel"
            className="w-full h-[700px] object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}