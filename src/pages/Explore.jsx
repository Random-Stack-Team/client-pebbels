import { motion } from "framer-motion";

import exploreImage from "../assets/Room 5.jpg";

export default function Explore() {
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
            Explore Chennai
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-6 font-serif text-5xl md:text-6xl leading-tight text-ink"
          >
            Stay Close to
            <br />
            the City's Best
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="max-w-lg mx-auto mt-8 text-[15px] leading-7 text-ink"
          >
            Located in one of Chennai's most connected
            neighborhoods, Pebbles places you within easy
            reach of shopping destinations, business districts,
            cultural landmarks, and local experiences.
          </motion.p>

        </div>
      </section>

      {/* SHOPPING */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-8">

          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-ink">
              Shopping & Lifestyle
            </p>

            <h2 className="mt-6 font-serif text-5xl text-ink">
              Discover Chennai
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-surface p-10 text-center">
              <h3 className="font-serif text-3xl text-ink">
                T. Nagar
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-ink">
                Chennai's most popular shopping district,
                known for fashion, jewelry, and vibrant streets.
              </p>
            </div>

            <div className="bg-surface p-10 text-center">
              <h3 className="font-serif text-3xl text-ink">
                Pondy Bazaar
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-ink">
                A lively destination offering shopping,
                dining, and local experiences.
              </p>
            </div>

            <div className="bg-surface p-10 text-center">
              <h3 className="font-serif text-3xl text-ink">
                Express Avenue
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-ink">
                One of Chennai's premier malls with
                shopping, entertainment, and dining.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* BUSINESS */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-8">

          <div className="grid md:grid-cols-3 gap-10">

            <div className="border border-border p-10 text-center">
              <h3 className="font-serif text-3xl text-ink">
                Nungambakkam
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-ink">
                A key commercial and business district
                close to Pebbles.
              </p>
            </div>

            <div className="border border-border p-10 text-center">
              <h3 className="font-serif text-3xl text-ink">
                Anna Salai
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-ink">
                One of Chennai's most important
                business and transportation corridors.
              </p>
            </div>

            <div className="border border-border p-10 text-center">
              <h3 className="font-serif text-3xl text-ink">
                Kodambakkam
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-ink">
                Convenient access to offices,
                transport, and city services.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FEATURE IMAGE */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-8">

          <motion.img
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src={exploreImage}
            alt="Explore Chennai"
            className="w-full h-[650px] object-cover"
          />

        </div>
      </section>

      {/* ATTRACTIONS */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-8">

          <div className="text-center mb-16">

            <p className="text-sm uppercase tracking-[0.2em] text-ink">
              Attractions
            </p>

            <h2 className="mt-6 font-serif text-5xl text-ink">
              Explore Local Landmarks
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="text-center">
              <h3 className="font-serif text-3xl text-ink">
                Marina Beach
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-ink">
                One of the world's longest urban beaches.
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-3xl text-ink">
                Government Museum
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-ink">
                A cultural destination featuring history,
                archaeology, and art collections.
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-3xl text-ink">
                Kapaleeshwarar Temple
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-ink">
                One of Chennai's most iconic
                spiritual and architectural landmarks.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CLOSING */}
      <section className="pb-32">
        <div className="max-w-3xl mx-auto px-8 text-center">

          <h2 className="font-serif text-5xl leading-tight text-ink">
            Discover Chennai
            <br />
            From Pebbles
          </h2>

          <p className="max-w-lg mx-auto mt-6 text-[15px] leading-7 text-ink">
            Whether you're visiting for business,
            shopping, family, or leisure, Pebbles
            provides a convenient base to explore
            everything Chennai has to offer.
          </p>

        </div>
      </section>

    </main>
  );
}

