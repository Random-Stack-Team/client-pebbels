
import { motion } from "framer-motion";
import roomImage from "../assets/Room 5.jpg";

export default function Rooms() {
  return (
    <main>

      {/* HERO */}
      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-8 text-center">

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-sm uppercase tracking-[0.2em] text-ink"
          >
            Our Rooms
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-6 font-serif text-5xl md:text-6xl leading-tight text-ink"
          >
            Designed for Rest,
            <br />
            Work, and Longer Stays
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="max-w-lg mx-auto mt-8 text-[15px] leading-7 text-ink"
          >
            Thoughtfully designed accommodations that combine
            comfort, convenience, and functionality for every
            type of traveler.
          </motion.p>

        </div>
      </section>

      {/* ROOM TYPES */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-8">

          <div className="grid md:grid-cols-3 gap-10">

            {/* CARD 1 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface"
            >
              <img
                src={roomImage}
                alt="Deluxe Room"
                className="w-full h-64 object-cover"
              />

              <div className="p-8 text-center">
                <h3 className="font-serif text-3xl text-ink">
                  Deluxe Room
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-ink">
                  Comfortable and practical accommodations
                  ideal for solo travelers and short stays.
                </p>
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-surface"
            >
              <img
                src={roomImage}
                alt="Executive Room"
                className="w-full h-64 object-cover"
              />

              <div className="p-8 text-center">
                <h3 className="font-serif text-3xl text-ink">
                  Executive Room
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-ink">
                  Additional space and comfort designed
                  for business travelers and extended visits.
                </p>
              </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-surface"
            >
              <img
                src={roomImage}
                alt="Family Suite"
                className="w-full h-64 object-cover"
              />

              <div className="p-8 text-center">
                <h3 className="font-serif text-3xl text-ink">
                  Family Suite
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-ink">
                  Spacious layouts designed for families,
                  groups, and longer stays.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* SHOWCASE IMAGE */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-8">

          <motion.img
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src={roomImage}
            alt="Pebbles Rooms"
            className="w-full h-[600px] object-cover"
          />

        </div>
      </section>

      {/* AMENITIES */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-8 text-center">

          <p className="text-sm uppercase tracking-[0.2em] text-ink">
            Amenities
          </p>

          <h2 className="mt-6 font-serif text-5xl leading-tight text-ink">
            Everything You Need
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16">

            {[
              "High-Speed Wi-Fi",
              "Air Conditioning",
              "Housekeeping",
              "Covered Parking",
              "Smart Television",
              "24/7 Support",
            ].map((item) => (
              <div
                key={item}
                className="py-6 border border-border"
              >
                <p className="text-[15px] text-ink">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="pb-32">
        <div className="max-w-3xl mx-auto px-8 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif text-5xl leading-tight text-ink"
          >
            Experience a Comfortable Stay
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="max-w-lg mx-auto mt-6 text-[15px] leading-7 text-ink"
          >
            Explore thoughtfully designed rooms and
            modern amenities created for comfort,
            convenience, and peace of mind.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-10 px-8 py-3 bg-ink text-background text-sm font-medium"
          >
            Book Your Stay
          </motion.button>

        </div>
      </section>

    </main>
  );
}

