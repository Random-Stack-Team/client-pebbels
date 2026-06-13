import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import welcome1 from "../../assets/Room 5.jpg";
import welcome2 from "../../assets/Room 5.jpg";
import welcome3 from "../../assets/Room 5.jpg";
import welcome4 from "../../assets/Room 5.jpg";

export default function WelcomeScroll() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Images stay below the viewport initially,
// then enter after the welcome content has locked
const leftY = useTransform(
  scrollYProgress,
  [0, 0.15, 1],
  [850, 850, -200]
);

const rightY = useTransform(
  scrollYProgress,
  [0, 0.15, 1],
  [1050, 1050, -300]
);

  return (
    <section
      ref={sectionRef}
      className="relative z-20 h-[180vh] bg-background"
    >
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">

        <div className="max-w-7xl mx-auto px-10 lg:px-16 h-full grid lg:grid-cols-[220px_1fr_220px] gap-16 items-center">

          {/* LEFT RAIL */}
          <motion.div
            style={{ 
                y: leftY }}

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

          {/* CENTER CONTENT */}
          <div className="max-w-3xl mx-auto px-8 text-center">

            <motion.p
              className="text-sm uppercase tracking-[0.2em] text-ink"
            >
              Welcome to Pebbles
            </motion.p>

            <motion.h2
              className="mt-6 font-serif text-5xl md:text-6xl leading-tight text-ink"
            >
              A Stay Designed Around
              <br />
              Comfort and Care
            </motion.h2>

            <div className="max-w-lg mx-auto mt-6 space-y-3 text-[15px] leading-7 text-center text-ink">

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

            </div>
          </div>

          {/* RIGHT RAIL */}
          <motion.div
            style={{ 
                y: rightY }}
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

      </div>
    </section>
  );
}