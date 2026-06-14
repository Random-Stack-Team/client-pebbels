import { motion } from "framer-motion";
import experienceImage from "../../assets/Firefly.png";

export default function Experience() {
  return (
    <section
    style={{ backfaceVisibility: "hidden" }}
  className="
    relative
    z-20
    bg-[#3A3A3A]
    text-[#FAF7F2]
    pt-20 md:pt-24
pb-24 md:pb-32
  "
>


    <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">



        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8,ease: [0.22, 1, 0.36, 1], }}
          className="text-sm uppercase tracking-[0.2em] text-white/70 "
        >
          Experience Pebbles
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.9,ease: [0.22, 1, 0.36, 1], }}
          className="mt-6 font-serif text-3xl sm:text-4xl md:text-6xl leading-tight text-white/95"
        >
          Designed for Comfort,
          <br />
          Connected to Chennai
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.2, duration: 0.7,ease: [0.22, 1, 0.36, 1], }}
          className="
  max-w-md md:max-w-lg
  mx-auto
  mt-8
  px-2 md:px-0
  text-[15px]
  leading-7
  text-center
  text-white/80
">
          Situated in one of Chennai's most accessible
          neighborhoods, Pebbles combines the convenience
          of city living with the warmth of personalized
         hospitality. Every space is thoughtfully designed
         to provide a comfortable and seamless stay,
         whether you're visiting for business, family,
         or an extended stay.
        </motion.p>

        <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
         whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
         transition={{
          delay: 0.3,
         duration: 1.2,
           ease: [0.22, 1, 0.36, 1],
         }}
              className="mt-16"
            >
              
          <img
            src={experienceImage}
            alt="Pebbles Experience"
            className="
  w-full
  h-[280px]
  sm:h-[400px]
  md:h-[650px]
  object-cover
"
          />
        </motion.div>

      </div>
   </section>
  );
}