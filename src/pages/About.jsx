import { motion } from "framer-motion";
import aboutImage from "../assets/Room 5.jpg";

export default function About() {
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
            About Pebbles
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-6 font-serif text-5xl md:text-6xl leading-tight text-ink"
          >
            Comfort,
            <br />
            Convenience,
            <br />
            and Care
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="max-w-lg mx-auto mt-8 text-[15px] leading-7 text-ink"
          >
            A thoughtfully designed serviced apartment in the
            heart of Chennai, offering a seamless stay experience
            for business travelers, families, and extended stays.
          </motion.p>

        </div>
      </section>

      {/* STORY */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-8 text-center">

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-sm uppercase tracking-[0.2em] text-ink"
          >
            Our Story
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-6 font-serif text-5xl leading-tight text-ink"
          >
            A Stay That
            <br />
            Feels Effortless
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="max-w-lg mx-auto mt-8 space-y-3 text-[15px] leading-7 text-center text-ink"
          >
            <p>
              Pebbles was created with a simple vision —
              to offer travelers a stay experience that
              combines the comfort of home with the
              reliability of professional hospitality.
            </p>

            <p>
              Located in Chennai's vibrant T. Nagar district,
              our serviced apartments provide convenient access
              to business centers, shopping destinations,
              dining, and major city attractions.
            </p>

            <p>
              Whether your stay is for a few days or several
              weeks, every space is thoughtfully designed to
              provide comfort, privacy, and peace of mind.
            </p>
          </motion.div>

        </div>
      </section>

      {/* PROPERTY IMAGE */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-8">

          <motion.img
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src={aboutImage}
            alt="Pebbles Serviced Apartments"
            className="w-full h-[600px] object-cover"
          />

        </div>
      </section>

      {/* VALUES */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-8">

          <div className="grid md:grid-cols-3 gap-16 text-center">

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="font-serif text-3xl text-ink">
                Comfort
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-ink">
                Thoughtfully designed rooms and amenities
                that make every stay relaxing, practical,
                and enjoyable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              <h3 className="font-serif text-3xl text-ink">
                Location
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-ink">
                Centrally located with easy access to
                Chennai's business districts, shopping,
                transport links, and attractions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <h3 className="font-serif text-3xl text-ink">
                Hospitality
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-ink">
                Warm and attentive service dedicated to
                making every guest feel welcomed and cared for.
              </p>
            </motion.div>

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
            Experience Pebbles
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="max-w-lg mx-auto mt-6 text-[15px] leading-7 text-ink"
          >
            Discover a stay designed around comfort,
            convenience, and thoughtful hospitality.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-10 px-8 py-3 bg-ink text-background text-sm font-medium"
          >
            View Rooms
          </motion.button>

        </div>
      </section>

    </main>
  );
}