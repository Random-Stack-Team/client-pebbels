import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

import chennaiImage from "../../assets/Chennai_Central_side.jpg";

export default function FinalCTA() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });

  // IMAGE SCALE
const imageScale = useTransform(
  scrollYProgress,
  [0, 1],
  [1, 1.03]
);

// SUBTLE PARALLAX
const imageY = useTransform(
  scrollYProgress,
  [0, 1],
  [0, 0]
);

// OVERLAY DARKENS GRADUALLY
const overlayOpacity = useTransform(
  scrollYProgress,
  [0.35, 0.8],
  [0.08, 0.65]
);

// TITLE FADES OUT
const titleOpacity = useTransform(
  scrollYProgress,
  [0.4, 0.65],
  [1, 0]
);

const titleY = useTransform(
  scrollYProgress,
  [0.4, 0.65],
  [0, 40]
);

// CONTENT REVEALS
const contentOpacity = useTransform(
  scrollYProgress,
  [0.55, 0.85],
  [0, 1]
);

const contentY = useTransform(
  scrollYProgress,
  [0.55, 0.85],
  [80, 0]
);
  return (
    <section
      ref={sectionRef}
      className="relative h-[180vh] bg-background"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">

        <div
  className="
    relative
    w-full
    max-w-6xl
    h-[700px]

    overflow-hidden
    rounded-[32px]

    border
    border-black/[0.04]

    shadow-[0_25px_60px_rgba(0,0,0,0.08)]
  "
>

          {/* IMAGE */}
          <motion.img
            src={chennaiImage}
            alt="Chennai"
            style={{
              scale: imageScale,
              y: imageY,
            }}
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
            "
          />

          {/* OVERLAY */}
          <motion.div
            style={{
              opacity: overlayOpacity,
            }}
            className="
              absolute
              inset-0
              bg-black
            "
          />

          {/* INITIAL TITLE */}
          <motion.div
            style={{
              opacity: titleOpacity,
              y: titleY,
            }}
            className="
              absolute
              left-12
              bottom-12
              z-20
            "
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/80">
              Discover Chennai
            </p>

            <h2
              className="
                mt-4
                font-serif
                text-5xl
                md:text-7xl
                leading-[0.9]
                text-white
              "
            >
              Experience
              <br />
              Chennai
            </h2>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            style={{
              opacity: contentOpacity,
              y: contentY,
            }}
            className="
              absolute
              inset-0
              z-30

              flex
              flex-col
              items-center
              justify-center

              px-10
              text-center
            "
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/70">
              Discover Chennai
            </p>

            <h2
              className="
                mt-6
                font-serif
                text-5xl
                md:text-7xl
                leading-[0.95]
                text-white
              "
            >
              With Comfort
              <br />
              and Care
            </h2>

            <p
              className="
                max-w-2xl
                mt-8
                text-[15px]
                leading-7
                text-white/80
              "
            >
              Whether you're visiting for business,
              family, or an extended stay, Pebbles
              offers a calm and welcoming experience
              in the heart of Chennai.
            </p>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="
                mt-10
                px-8
                py-4

                border
                border-white/20

                bg-white/10
                backdrop-blur-md

                text-white
                text-sm
              "
            >
              Book Your Stay
            </motion.button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}