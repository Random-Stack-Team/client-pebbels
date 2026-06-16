import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import roomImage from "../../assets/Room 5.jpg";
import heroImage from "../../assets/hero2.jpeg";

import welcome1 from "../../assets/Room 5.jpg";
import welcome2 from "../../assets/Room 5.jpg";
import welcome3 from "../../assets/Room 5.jpg";
import welcome4 from "../../assets/Room 5.jpg";



export default function HeroScene() {
  const sectionRef = useRef(null);


  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

//Hero image Parallax
  const heroImageY = useTransform(
  scrollYProgress,
  [0, 0.7],
  [0, -220]
);


const revealScale = useTransform(
  scrollYProgress,
  [0, 0.25],
  [1.08, 1]
);

const heroScale = useTransform(
  scrollYProgress,
  [0, 0.7],
  [1.25, 1]
);


const heroContentY = useTransform(
  scrollYProgress,
  [0, 0.7],
  [0, -100]
);

const heroOverlay = useTransform(
  scrollYProgress,
  [0, 0.7],
  [0.15, 0.55]
);

  // Welcome panel rises over Hero
  const welcomeY = useTransform(
  scrollYProgress,
  [0.10, 0.30, 0.45, 0.60],
  ["100%", "40%", "10%", "0%"]
);


const heroOpacity = useTransform(
  scrollYProgress,
  [0.65, 0.8, 0.95],
  [1, 0.8, 0]
);
  
  // Rails start AFTER Welcome takeover
  const leftY = useTransform(
  scrollYProgress,
  [0.25, 1],
  [350, -150]
);

const rightY = useTransform(
  scrollYProgress,
  [0.25, 1],
  [450, -250]
);


  return (
    <section
  ref={sectionRef}
  className="
    relative
    h-[180vh]
    md:h-[220vh]
    lg:h-[320vh]
  "
>
      <div className="sticky top-0 h-screen overflow-hidden">

  {/* HERO */}
  <motion.div
    style={{
      opacity: heroOpacity,
    }}
    className="absolute inset-0 z-0"
  >

  <motion.div
  initial={{ height: "100%" }}
  animate={{ height: "0%" }}
  transition={{
    duration: 1.8,
    ease: [0.83, 0, 0.17, 1],
  }}
  className="
    absolute
    top-0
    left-0
    w-full
    bg-[#FAF7F2]
    z-[50]
    origin-top
  "
/>

    {/* HERO IMAGE */}
    <motion.img
  src={heroImage}
  alt="Pebbles Chennai"
  animate={{
    scale: [1.05, 1.12, 1.05],
  }}
  transition={{
    duration: 20,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  style={{
    y: heroImageY,
  }}
  className="
  absolute
  inset-0
  w-full
  h-full
  object-cover
  object-center
"
/>

    {/* Premium Overlay */}
    <motion.div
  style={{ opacity: heroOverlay }}
  className="absolute inset-0 bg-black"
/>

    {/* Hero Content */}
    <motion.div
  style={{ y: heroContentY }}
  className="
    absolute
    inset-0
    flex
    flex-col
    items-center
    justify-center
    text-center
  "
>
      <p
        className="
          text-white/80
          uppercase
          tracking-[0.25em]
          text-sm
        "
      >
        Pebbles • Chennai
      </p>

      <h1
        className="
          mt-6
          font-serif
          text-white
          text-4xl sm:text-5xl md:text-6xl lg:text-8xl
          leading-[0.9]
        "
      >
        Your Home
        <br />
        In Chennai
      </h1>

      <p
        className="
          mt-8
          max-w-2xl
          text-white/80
          text-base md:text-lg
leading-7 md:leading-8
px-6 md:px-0
        "
      >
        Experience comfort, care, and thoughtfully
        designed stays in the heart of Chennai.
      </p>

      <button
        className="
          mt-10
          px-6 md:px-8
py-3 md:py-4
          rounded-xl

          bg-[#FAF7F2]
          text-[#3A3A3A]

          text-sm
          font-medium

          transition-all
          duration-300

          hover:scale-[1.02]
        "
      >
        Book Your Stay
      </button>
    </motion.div>
  </motion.div>

  {/* WELCOME PANEL */}
  <motion.div
    style={{
      y: welcomeY,
      backgroundColor: "#F5F1E8",
    }}
    className="
      absolute
      inset-0
      z-[999]

      overflow-hidden

      border-t
      border-black/[0.03]

      shadow-[0_-60px_120px_rgba(0,0,0,0.08)]
    "
  >
          <div className="
  max-w-7xl
  mx-auto
  px-6 md:px-10 lg:px-16
  h-full
  grid
  lg:grid-cols-[220px_1fr_220px]
  gap-16
  items-center
">
            {/* LEFT RAIL */}
            
              <motion.div
  style={{ y: leftY }}
  className="hidden lg:flex flex-col gap-40"
>
  <div className="overflow-hidden h-72">
    <img
      src={welcome1}
      alt=""
      className="w-full h-[150%] object-cover
      scale-[1.08]"
      
    />
  </div>

  <div className="overflow-hidden h-72 mt-24">
    <img
      src={welcome2}
      alt=""
      className="w-full h-[150%] object-cover
      scale-[1.08]"
    />
  </div>
</motion.div>

            {/* CENTER CONTENT */}
            <div className="max-w-4xl lg:max-w-3xl
mx-auto
px-4 md:px-8
text-center">

              <p className="text-sm uppercase tracking-[0.2em] text-ink">
                Welcome to Pebbles
              </p>

              <h2 className="mt-6 font-serif text-3xl sm:text-4xl md:text-6xl leading-tight text-ink">
                A Stay Designed Around
                <br />
                Comfort and Care
              </h2>

              <div className="max-w-md md:max-w-2xl lg:max-w-lg mx-auto mt-6 space-y-3 text-[15px] leading-7 text-center text-ink">

                <p>
                  Dear Valued Guest,
                </p>

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

            {/* RIGHT RAIL */}
            {/* RIGHT RAIL */}
<motion.div
  style={{ y: rightY }}
  className="hidden lg:flex flex-col gap-40"
>
  <div className="overflow-hidden h-72 mt-24">
    <img
      src={welcome3}
      alt=""
      className="
        w-full
        h-[150%]
        object-cover
        scale-[1.08]
      "
    />
  </div>

  <div className="overflow-hidden h-72">
    <img
      src={welcome4}
      alt=""
      className="
        w-full
        h-[150%]
        object-cover
        scale-[1.08]
      "
    />
  </div>
</motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
