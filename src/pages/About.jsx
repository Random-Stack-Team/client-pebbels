import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutImage from "../assets/about.webp";
import logo from "../assets/logo.png";
import ourStory from "../assets/Reception.webp";


export default function About() {
  return (
    <main>
      
      {/* HERO */}
<section className="min-h-screen flex items-center pt-32 pb-24">
  <div className="max-w-7xl mx-auto px-8 w-full">

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-sm uppercase tracking-[0.3em] text-ink"
    >
      About Pebbles
    </motion.p>

    <div className="mt-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
      <motion.h1
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.15, duration: 1 }}
        className="font-serif text-[64px] md:text-[130px] leading-[0.9] text-ink"
      >
        Comfort
        <br />
        Convenience
        <br />
        Care.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.15, duration: 1 }}
        className="flex items-center justify-center lg:justify-end"
      >
        <img
          src={logo}
          alt="Pebbles Logo"
          className="w-[320px] md:w-[500px] lg:w-[560px] object-contain"
        />
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55, duration: 1 }}
      className="w-full mt-20"
    >
      <p className="text-sm uppercase tracking-[0.2em] text-ink/50">
        Introduction
      </p>

      <p className="mt-6 max-w-none text-lg md:text-1.5xl leading-[1.6] text-ink">
        Pebbles is a thoughtfully designed serviced apartment in Chennai,
        created for guests who value comfort, privacy, and effortless living.
        Every stay combines warm hospitality, practical convenience, and
        modern amenities in a calm and welcoming environment.
      </p>
    </motion.div>

  </div>
</section>

      {/* STORY */}
<section className="py-32 border-t border-ink/10">
  <div className="max-w-7xl mx-auto px-8">
    <motion.div
      initial={{ opacity: 0, y: 70, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="grid md:grid-cols-[0.8fr_1.2fr] gap-20"
    >
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-ink/50">
          Our Story
        </p>

        <div className="mt-10 overflow-hidden rounded-[32px]">
          <img
            src={ourStory}
            alt="Our Story"
            className="w-full h-[420px] md:h-[500px] object-cover"
          />
        </div>
      </div>

      <div>
        <h2 className="font-serif text-5xl md:text-7xl leading-[1]">
          A Stay That
          <br />
          Feels Effortless
        </h2>

        <div className="mt-12 space-y-8 text-lg leading-[1.9] max-w-3xl">
          <p>
            Pebbles was established with a simple vision — to provide
            travelers with the comfort of home combined with the
            reliability of professional hospitality.
          </p>

          <p>
            Located in Chennai&apos;s vibrant T. Nagar district, our
            serviced apartments offer convenient access to business hubs,
            shopping destinations, restaurants, and major city attractions.
          </p>

          <p>
            Whether your stay is for a few days or several weeks, every
            space is thoughtfully designed to deliver comfort, privacy, and
            peace of mind.
          </p>
        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* FEATURE IMAGE */}
      <section className="py-5">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="overflow-hidden rounded-[32px]"
          >
            <img
              src={aboutImage}
              alt="Pebbles"
              className="w-full h-[60vh] md:h-[80vh] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
<section className="pb-24">
  <div className="max-w-6xl mx-auto px-8">
    <div className="grid md:grid-cols-3 gap-8 text-center">

      {/* Comfort */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h3 className="font-serif text-3xl text-ink">
          Comfort
        </h3>

        <p className="mt-4 text-[15px] leading-7 text-ink">
          Thoughtfully designed rooms and amenities that make every stay
          relaxing, practical, and enjoyable.
        </p>
      </motion.div>

      {/* Empty Middle Column */}
      <div></div>

      {/* Hospitality */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.12, duration: 0.7 }}
        className="text-center"
      >
        <h3 className="font-serif text-3xl text-ink">
          Hospitality
        </h3>

        <p className="mt-4 text-[15px] leading-7 text-ink">
          Warm and attentive service dedicated to making every guest feel
          welcomed and cared for.
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
            Discover a stay designed around comfort, convenience, and thoughtful
            hospitality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <Link
              to="/rooms"
              className="inline-block mt-10 px-8 py-3 bg-ink text-white text-sm font-medium"
            >
              View Rooms
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}