import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import room1 from "../../assets/Room 5.webp";
import room2 from "../../assets/Room 5.webp";
import room3 from "../../assets/Room 5.webp";

export default function RoomsPreview() {
  const rooms = [
    {
      title: "Deluxe Room",
      image: room1,
      description:
        "Designed for comfort and simplicity, ideal for short stays and business travelers.",
    },
    {
      title: "Executive Room",
      image: room2,
      description:
        "A spacious stay experience with additional room to relax, work, and unwind.",
    },
    {
      title: "Family Suite",
      image: room3,
      description:
        "Thoughtfully arranged for families seeking comfort, privacy, and convenience.",
    },
  ];

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">

        {/* Section Header */}
        <div className="text-center">

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
  md:text-5xl
  lg:text-6xl
  leading-tight
  text-ink
"
          >
            Spaces Designed
            <br />
            Around Comfort
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="max-w-lg mx-auto mt-8 text-[15px] leading-7 text-ink"
          >
            Every room at Pebbles is thoughtfully designed
            to provide a comfortable and effortless stay,
            whether you're visiting for business, family,
            or an extended stay.
          </motion.p>

        </div>

        {/* Rooms Grid */}
        <div className="grid lg:grid-cols-3 gap-10 md:gap-12 mt-16 md:mt-20">

          {rooms.map((room, index) => (
            <motion.div
              key={room.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
              }}
              className="group"
            >

              <div className="overflow-hidden">

                <img
                  src={room.image}
                  alt={room.title}
                  className="
  w-full
  h-[280px]
  md:h-[380px]
  lg:h-[460px]
  object-cover
  transition-transform
  duration-700
  group-hover:scale-105
"
                />

              </div>

              <h3 className="
  mt-6
  md:mt-8
  font-serif
  text-2xl
  md:text-3xl
  text-ink
">
                {room.title}
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-ink">
                {room.description}
              </p>

              <Link
                to="/rooms"
                className="inline-block mt-6 text-sm uppercase tracking-[0.15em] text-ink border-b border-ink pb-1"
              >
                View Room
              </Link>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
