import { motion } from "framer-motion";
import experienceImage from "../../assets/Room 5.jpg";

export default function Experience() {
  return (
    <motion.section
  initial={{ y: 120, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ amount: 0.2 }}
  transition={{
    duration: 1.1,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative z-20 bg-background pt-8 pb-24">

    <div className="max-w-5xl mx-auto px-8 text-center">

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-sm uppercase tracking-[0.2em] text-ink"
        >
          Experience Pebbles
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-6 font-serif text-5xl md:text-6xl leading-tight text-ink"
        >
          Designed for Comfort,
          <br />
          Connected to Chennai
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-lg mx-auto mt-8 text-[15px] leading-7 text-center text-ink"
        >
          Situated in one of Chennai's most accessible
          neighborhoods, Pebbles combines the convenience
          of city living with the warmth of personalized
         hospitality. Every space is thoughtfully designed
         to provide a comfortable and seamless stay,
         whether you're visiting for business, family,
         or an extended stay.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16"
        >
          <img
            src={experienceImage}
            alt="Pebbles Experience"
            className="w-full h-[650px] object-cover"
          />
        </motion.div>

      </div>
   </motion.section>
  );
}