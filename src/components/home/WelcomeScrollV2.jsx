import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import welcome1 from "../../assets/Room 5.jpg";
import welcome2 from "../../assets/Room 5.jpg";
import welcome3 from "../../assets/Room 5.jpg";
import welcome4 from "../../assets/Room 5.jpg";

export default function WelcomeScrollV2() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Welcome panel rises over Hero
  const panelY = useTransform(
    scrollYProgress,
    [0, 0.25],
    ["100%", "0%"]
  );

  // Rails start later
  const leftY = useTransform(
    scrollYProgress,
    [0.25, 1],
    [850, -200]
  );

  const rightY = useTransform(
    scrollYProgress,
    [0.25, 1],
    [1050, -300]
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[260vh]"
    >
      {/* Sticky Scene */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Welcome Panel */}
        <motion.div
          style={{ y: panelY }}
          className="absolute inset-0 bg-background z-20"
        >
          <div className="max-w-7xl mx-auto px-10 lg:px-16 h-full grid lg:grid-cols-[220px_1fr_220px] gap-16 items-center">

            {/* LEFT */}
            <motion.div
              style={{ y: leftY }}
              className="hidden lg:flex flex-col gap-40"
            >
              <img
                src={welcome1}
                alt=""
                className="w-full h-72 object-cover"
              />

              <img
                src={welcome2}
                alt=""
                className="w-full h-72 object-cover mt-24"
              />
            </motion.div>

            {/* CENTER */}
            <div className="max-w-3xl mx-auto px-8 text-center">

              <p className="text-sm uppercase tracking-[0.2em] text-ink">
                Welcome to Pebbles
              </p>

              <h2 className="mt-6 font-serif text-5xl md:text-6xl leading-tight text-ink">
                A Stay Designed Around
                <br />
                Comfort and Care
              </h2>

              <div className="max-w-lg mx-auto mt-6 space-y-3 text-[15px] leading-7 text-center text-ink">

                <p>Dear Valued Guest,</p>

                <p>
                  Welcome to Pebbles, a thoughtfully designed
                  serviced apartment in the heart of Chennai.
                </p>

                <p>
                  We offer the comfort of home combined with
                  warm hospitality and attentive service.
                </p>

                <p>
                  Whether your stay is short or extended,
                  every detail is crafted for comfort and ease.
                </p>

                <div className="pt-4">
                  <p className="font-medium">
                    Warm regards,
                  </p>

                  <p className="mt-1">
                    The Pebbles Team
                  </p>
                </div>

              </div>
            </div>

            {/* RIGHT */}
            <motion.div
              style={{ y: rightY }}
              className="hidden lg:flex flex-col gap-40"
            >
              <img
                src={welcome3}
                alt=""
                className="w-full h-72 object-cover mt-24"
              />

              <img
                src={welcome4}
                alt=""
                className="w-full h-72 object-cover"
              />
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
