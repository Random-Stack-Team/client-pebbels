import { motion } from "framer-motion";

export default function HeroReveal() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{
        duration: 1.8,
        ease: [0.83, 0, 0.17, 1],
        delay: 0.3,
      }}
      className="
        fixed
        inset-0
        z-[9999]
        bg-[#FAF7F2]
        pointer-events-none
      "
    />
  );
}