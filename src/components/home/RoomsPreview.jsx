import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import roomImage from "../../assets/Room 5.webp";

export default function RoomsPreview() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <img
            src={roomImage}
            alt="Pebbles Room"
            className="
              w-full
              h-[280px]
sm:h-[420px]
md:h-[460px]
lg:h-[650px]
              object-cover
            "
          />
        </motion.div>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-center mt-16">

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-sm uppercase tracking-[0.2em] text-ink"
          >
            Our Rooms
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="
              mt-6
              font-serif
              text-4xl
sm:text-5xl
md:text-5xl
lg:text-6xl
              leading-tight
              text-ink
            "
          >
            Designed for Comfort,
            <br />
            Crafted for Rest
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="
              max-w-lg
              mx-auto
              mt-8
              text-[15px]
              leading-7
              text-ink
            "
          >
            Thoughtfully designed spaces offering comfort,
            privacy, and modern convenience. Whether you're
            visiting for business, family, or an extended stay,
            every room is created to feel welcoming and effortless.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-10"
          >
            <Link
              to="/rooms"
              className="
                inline-flex
                items-center
                gap-2

                px-8
                py-4

                bg-[#3A3A3A]
                text-[#FAF7F2]

                text-sm
                uppercase
                tracking-[0.15em]

                transition-all
                duration-300

                hover:opacity-90
              "
            >
              Explore Rooms
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
}