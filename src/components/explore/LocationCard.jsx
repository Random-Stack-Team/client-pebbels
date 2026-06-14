import { motion } from "framer-motion";

export default function LocationCard({
  title,
  image,
  distance,
  description,
  delay = 0,
}) {
    console.log(title, distance);

  return (
    <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.8,
    delay,
  }}
  whileHover={{ y: -8 }}
  className="
    group
    relative
    h-[320px]
    overflow-hidden

    rounded-t-[160px]
    rounded-b-[32px]

    bg-[#F3EFE7]

    border
    border-black/[0.04]

    shadow-[0_12px_40px_rgba(0,0,0,0.06)]

    cursor-pointer
  "
>

<div
  className="
    absolute
    top-10
    left-1/2
    -translate-x-1/2
    z-20

    px-4
    py-2

    rounded-full
   bg-[#3A3A3A]
    text-[#FAF7F2]
    backdrop-blur-md

    text-[11px]
    uppercase
    tracking-[0.15em]
  "
>
  {distance}
</div>

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          scale-110
          opacity-0
          transition-all
          duration-700
          group-hover:scale-100
          group-hover:opacity-100
        "
      />

      {/* Dark Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-black/45
          opacity-0
          transition-opacity
          duration-700
          group-hover:opacity-100
        "
      />

      {/* Default Content */}
      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          transition-all
          duration-500
          group-hover:opacity-0
        "
      >
        <h3
          className="
            font-serif
            text-4xl
            text-[#3A3A3A]
          "
        >
          {title}
        </h3>
      </div>

      {/* Hover Content */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          p-8

          translate-y-8
          opacity-0

          transition-all
          duration-500

          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        <p
          className="
            text-xs
            uppercase
            tracking-[0.25em]
            text-white/70
          "
        >
          {distance}
        </p>

        <h3
          className="
            mt-3
            font-serif
            text-3xl
            text-white
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-3
            text-sm
            leading-6
            text-white/80
          "
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}