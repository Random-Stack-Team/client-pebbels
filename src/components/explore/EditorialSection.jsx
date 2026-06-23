import { motion } from "framer-motion";

export default function EditorialSection({
  title,
  description,
  image,
  distance,
  reverse = false,
}) {
  return (
    <section className="py-20 md:py-28">
      <div
  className={`
    max-w-6xl
    mx-auto
    px-8

    flex
    flex-col
    md:flex-row

    ${reverse ? "md:flex-row-reverse" : ""}

    gap-12
    md:gap-20
    items-center
  `}
>
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={image}
            alt={title}
            className="
              w-full
              h-[400px]
              md:h-[520px]
              object-cover
              rounded-[24px]
            "
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-ink">
            Landmark
          </p>

          <h2
  className="
    mt-4
    font-serif
    text-5xl
    md:text-6xl
    leading-[0.95]
    text-ink
  "
>
            {title}
          </h2>

          <div
            className="
              inline-flex
              mt-6
              px-4
              py-2
              rounded-full
              bg-[#F3EFE7]/70
              text-sm
              text-ink/70
            "
          >
            {distance}
          </div>

          <p
            className="
              mt-8
              max-w-md
              text-[15px]
              leading-7
              text-ink
            "
          >
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}