import { motion } from "framer-motion";

export default function LocationCard({
  title,
  image,
  distance,
  description,
  delay = 0,
}) {
    

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
    h-[260px]
sm:h-[300px]
md:h-[320px]
    overflow-hidden

    rounded-t-[120px]
sm:rounded-t-[140px]
md:rounded-t-[160px]

rounded-b-[24px]
md:rounded-b-[32px]

    bg-[#F3EFE7]

    border
    border-black/[0.04]

    shadow-[0_12px_40px_rgba(0,0,0,0.06)]

    cursor-pointer
  "
>

<div
  className="
    hidden lg:block

    absolute
    top-10
    left-1/2
    -translate-x-1/2
    z-20

    px-4
    py-2

    rounded-full

    bg-black/20
    backdrop-blur-md

    text-white

    text-[11px]
    uppercase
    tracking-[0.15em]
  "
>
  {distance}
</div>
<img
  src={image}
  alt={title}
  className="
    absolute
    inset-0
    w-full
    h-full
    object-cover

    scale-100
    opacity-100

    lg:scale-110
lg:opacity-0

    transition-all
    duration-700

    group-hover:lg:scale-100
group-hover:lg:opacity-100
  "
/>

      {/* Dark Overlay */}
      <div
  className="
    absolute
    inset-0

    bg-black/45
    opacity-100

    lg:opacity-0

    transition-opacity
    duration-700

    group-hover:lg:opacity-100
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

    hidden lg:flex

    transition-all
    duration-500

    group-hover:opacity-0
  "
>
        <h3
          className="
            font-serif
            text-4xl
sm:text-5xl
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

    p-5
    md:p-8

    transition-all
    duration-500

    translate-y-0
    opacity-100

    lg:translate-y-8
    lg:opacity-0

    group-hover:lg:translate-y-0
    group-hover:lg:opacity-100
  "
>        <p
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
            text-2xl
md:text-3xl
            text-white
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-3
            text-[13px]
md:text-sm

leading-5
md:leading-6
            text-white/80
          "
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}