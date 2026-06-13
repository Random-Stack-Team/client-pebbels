import { motion } from "framer-motion";
import aboutImage from "../assets/Reception.png";
//import locationMap from "../assets/Reception.png";

export default function About() {
  return (
    <main>

      {/* HERO */}
<section className="min-h-screen flex items-center pt-32 pb-24">
  <div className="max-w-7xl mx-auto px-8">

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-sm uppercase tracking-[0.3em] text-ink"
    >
      About Pebbles
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 1 }}
      className="mt-8 font-serif text-[60px] md:text-[140px] leading-[0.9] text-ink"
    >
      Comfort
      <br />
      Convenience
      <br />
      Care.
    </motion.h1>

    <motion.h1
  initial={{
    opacity: 0,
    y: 120,
    textShadow: "0 0 0 rgba(0,0,0,0)"
  }}
  animate={{
    opacity: 1,
    y: 0,
    textShadow: "0 18px 35px rgba(0,0,0,0.12)"
  }}
  transition={{
    duration: 0.9,
    ease: [0.25, 0.46, 0.45, 0.94]
  }}
  className="mt-6 font-serif text-5xl md:text-6xl leading-tight text-ink"
>
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-ink/50">
          Introduction
        </p>
      </div>

      <div>
        <p className="text-lg md:text-2xl leading-[1.8] text-ink">
          Pebbles is a thoughtfully designed serviced apartment in Chennai,
          created for guests who value comfort, privacy, and effortless living.
          Every stay combines warm hospitality, practical convenience, and
          modern amenities in a calm and welcoming environment.
        </p>
      </div>
    </motion.h1>

  </div>
</section>

      {/* STORY */}
<section className="py-32 border-t border-ink/10">
  <div className="max-w-7xl mx-auto px-8">

    <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-20">

      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-ink/50">
          Our Story
        </p>
      </div>

      <div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-7xl leading-[1]"
        >
          A Stay That
          <br />
          Feels Effortless
        </motion.h2>

        <div className="mt-12 space-y-8 text-lg leading-[1.9] max-w-3xl">

          <p>
            Pebbles was established with a simple vision —
            to provide travelers with the comfort of home
            combined with the reliability of professional hospitality.
          </p>

          <p>
            Located in Chennai's vibrant T. Nagar district,
            our serviced apartments offer convenient access
            to business hubs, shopping destinations,
            restaurants, and major city attractions.
          </p>

          <p>
            Whether your stay is for a few days or several weeks,
            every space is thoughtfully designed to deliver
            comfort, privacy, and peace of mind.
          </p>

        </div>

      </div>

    </div>

  </div>
</section>
{/* FEATURE IMAGE */}
<section className="py-20">
  <div className="max-w-7xl mx-auto px-8">

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="overflow-hidden"
    >
      <img
        src={aboutImage}
        alt="Pebbles"
        className="w-full h-[80vh] object-cover"
      />
    </motion.div>

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
  <a
    href="https://www.google.com/maps/place/Pebbles+Serviced+Apartments/@13.0408884,80.2424119,17z/data=!3m1!4b1!4m9!3m8!1s0x3a52665216c0ca29:0xcb2c91e781c681d1!5m2!4m1!1i2!8m2!3d13.0408884!4d80.2424119!16s%2Fg%2F11bcdls9j8"
    target="_blank"
    rel="noopener noreferrer"
    className="block cursor-pointer"
  >
  </a>
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

      {/* LOCATION CARD */}
<section className="pb-28">
  <div className="max-w-5xl mx-auto px-8">
    <a
      href="https://www.google.com/maps/place/Pebbles+Serviced+Apartments/@13.0408884,80.2424119,17z/data=!3m1!4b1!4m9!3m8!1s0x3a52665216c0ca29:0xcb2c91e781c681d1!5m2!4m1!1i2!8m2!3d13.0408884!4d80.2424119!16s%2Fg%2F11bcdls9j8"
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-[32px] h-[500px] group"
      >
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.7157571881144!2d80.24236865903762!3d13.041099419089221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52665216c0ca29%3A0xcb2c91e781c681d1!2sPebbles%20Serviced%20Apartments!5e0!3m2!1sen!2sin!4v1781359435938!5m2!1sen!2sin"
  className="absolute inset-0 w-full h-full"
  style={{ border: 0 }}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Pebbles Location"
/>

        <div className="relative z-10 h-full flex flex-col justify-end p-10 md:p-14 text-white">
           

          <div className="mt-10 flex items-center gap-3 ">
            
            <span className="group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </div>
        </div>
      </motion.div>
    </a>
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
            className="mt-10 px-8 py-3 bg-ink text-white text-sm font-medium"
          >
            View Rooms
          </motion.button>

        </div>
      </section>

    </main>
  );
}