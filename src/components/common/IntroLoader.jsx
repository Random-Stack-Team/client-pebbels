import { motion } from "framer-motion";
import { useEffect } from "react";
import logo from "../../assets/logo.webp";

export default function IntroLoader({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete?.();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="
        fixed
        inset-0
        z-[9999]
        bg-[#FAF7F2]
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="text-center z-10"
      >
        <img
          src={logo}
          alt="Pebbles"
          className="h-20 mx-auto"
        />

        <p
          className="
            mt-6
            text-sm
            tracking-[0.3em]
            uppercase
            text-[#3A3A3A]
          "
        >
          Pebbles • Chennai
        </p>
      </motion.div>

      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          delay: 2.4,
          duration: 1.1,
          ease: [0.83, 0, 0.17, 1],
        }}
        className="
          absolute
          left-0
          top-0
          w-1/2
          h-full
          bg-[#FAF7F2]
        "
      />

      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{
          delay: 2.4,
          duration: 1.1,
          ease: [0.83, 0, 0.17, 1],
        }}
        className="
          absolute
          right-0
          top-0
          w-1/2
          h-full
          bg-[#FAF7F2]
        "
      />
    </motion.div>
  );
}