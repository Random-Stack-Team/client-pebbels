import { motion, useScroll, useTransform } from "framer-motion";

import welcome1 from "../../assets/Room 5.jpg";
import welcome2 from "../../assets/Room 5.jpg";
import welcome3 from "../../assets/Room 5.jpg";
import welcome4 from "../../assets/Room 5.jpg";

export default function Welcome() {
  const { scrollYProgress } = useScroll();

  const leftY = useTransform(
    scrollYProgress,
    [0, 1],
    [100, -100]
  );

  const rightY = useTransform(
    scrollYProgress,
    [0, 1],
    [120, -120]
  );

  return (
    <section className="-mt-24 pt-24 pb-12 overflow-hidden relative z-10 bg-background">
      
      <div className="max-w-7xl mx-auto px-10 lg:px-16 grid lg:grid-cols-[220px_1fr_220px] gap-16 items-center">
        {/* LEFT IMAGE RAIL */}
        <motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 1 }}
  style={{ y: leftY }}
  className="hidden lg:flex flex-col gap-32"
>
          <img
            src={welcome1}
            alt="Pebbles Room"
            className="w-full h-72 object-cover"
          />

          <img
            src={welcome2}
            alt="Pebbles Room"
            className="w-full h-72 object-cover"
          />
        </motion.div>

        {/* CENTER CONTENT */}
        <div className="max-w-3xl mx-auto px-8 text-center">

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-sm uppercase tracking-[0.2em] text-ink"
          >
            Welcome to Pebbles
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-6 font-serif text-5xl md:text-6xl leading-tight text-ink"
          >
            A Stay Designed Around
            <br />
            Comfort and Care
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="max-w-lg mx-auto mt-6 space-y-3 text-[15px] leading-7 text-center text-ink"
          >
            <p>
              Dear Valued Guest,
            </p>

            <p>
              Welcome to Pebbles, a thoughtfully designed serviced apartment
              in the heart of Chennai. We offer a calm and comfortable stay
              for travelers seeking the convenience of home with the care of
              professional hospitality.
            </p>

            <p>
              Whether your visit is short or extended, our team is committed
              to making every moment effortless and memorable.
            </p>

            <p>
              Thank you for choosing Pebbles. We look forward to welcoming
              you and making your stay truly comfortable.
            </p>

            <div className="pt-4 text-center">
              <p className="font-medium">
                Warm regards,
              </p>

              <p className="mt-1">
                The Pebbles Team
              </p>
            </div>
          </motion.div>

        </div>

        {/* RIGHT IMAGE RAIL */}
        <motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 1, delay: 0.15 }}
  style={{ y: rightY }}
  className="hidden lg:flex flex-col gap-32 pt-40"
>
          <img
            src={welcome3}
            alt="Pebbles Room"
            className="w-full h-72 object-cover"
          />

          <img
            src={welcome4}
            alt="Pebbles Room"
            className="w-full h-72 object-cover"
          />
        </motion.div>

      </div>

    </section>
  );
}