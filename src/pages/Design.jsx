
import { motion } from "framer-motion";

import designImage1 from "../assets/Room 5.jpg";
import designImage2 from "../assets/Room 5.jpg";
import designImage3 from "../assets/Room 5.jpg";
import designImage4 from "../assets/Room 5.jpg";
import designImage5 from "../assets/Room 5.jpg";

export default function Design() {
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
            Design Philosophy
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-6 font-serif text-5xl md:text-6xl leading-tight text-ink"
          >
            Thoughtful Spaces,
            <br />
            Designed to Feel Calm
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="max-w-lg mx-auto mt-8 text-[15px] leading-7 text-ink"
          >
            Every space at Pebbles is carefully designed
            to balance comfort, functionality, and simplicity,
            creating an environment that feels welcoming
            from the moment you arrive.
          </motion.p>

        </div>
      </section>

      {/* STORY */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-8 text-center">

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.2em] text-ink"
          >
            Our Approach
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-serif text-5xl leading-tight text-ink"
          >
            Spaces That
            <br />
            Feel Effortless
          </motion.h2>

          <div className="max-w-lg mx-auto mt-8 space-y-3 text-[15px] leading-7 text-ink">

            <p>
              We believe great hospitality begins with
              thoughtful design. Every room is created
              to feel calm, functional, and inviting.
            </p>

            <p>
              Clean lines, natural light, and carefully
              selected materials create an atmosphere
              that feels both contemporary and timeless.
            </p>

            <p>
              Whether you're visiting for business,
              leisure, or an extended stay, each space
              is designed to support comfort and ease.
            </p>

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
            src={designImage1}
            alt="Pebbles Interior"
            className="w-full h-[700px] object-cover"
          />

        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-8">

          <div className="grid md:grid-cols-3 gap-16 text-center">

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-serif text-3xl text-ink">
                Minimal
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-ink">
                Thoughtful layouts that remove clutter
                and create visual calm.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-serif text-3xl text-ink">
                Comfortable
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-ink">
                Every detail is selected to support
                rest, relaxation, and well-being.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-serif text-3xl text-ink">
                Functional
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-ink">
                Spaces designed to work naturally
                for modern travelers.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* GALLERY */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-8">

          <div className="grid md:grid-cols-2 gap-8">

            <img
              src={designImage2}
              alt=""
              className="w-full h-[500px] object-cover"
            />

            <img
              src={designImage3}
              alt=""
              className="w-full h-[500px] object-cover"
            />

          </div>

          <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 mt-8">

            <img
              src={designImage4}
              alt=""
              className="w-full h-[650px] object-cover"
            />

            <img
              src={designImage5}
              alt=""
              className="w-full h-[650px] object-cover"
            />

          </div>

        </div>
      </section>

      {/* CLOSING */}
      <section className="pb-32">
        <div className="max-w-3xl mx-auto px-8 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl leading-tight text-ink"
          >
            Designed Around
            <br />
            Everyday Comfort
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-lg mx-auto mt-6 text-[15px] leading-7 text-ink"
          >
            Every detail at Pebbles is thoughtfully
            considered to create a stay that feels
            effortless, comfortable, and memorable.
          </motion.p>

        </div>
      </section>

    </main>
  );
}

