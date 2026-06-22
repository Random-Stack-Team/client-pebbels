import { motion } from "framer-motion";

const reviews = [
  {
    name: "Ravi Kumar",
    rating: 4.8,
    text: "Clean and comfortable rooms with a peaceful atmosphere, making the stay relaxed and easy.",
  },
  {
    name: "Priya Sharma",
    rating: 4.3,
    text: "A convenient location in T. Nagar with easy access to shopping areas, restaurants, and transport.",
  },
  {
    name: "Arun Raj",
    rating: 5.0,
    text: "Helpful staff and smooth service made the stay pleasant from check-in to check-out.",
  },
  {
    name: "Meena Joseph",
    rating: 4.6,
    text: "A practical serviced apartment experience with the comfort needed for short and long stays.",
  },
  {
    name: "Karthik S",
    rating: 4.4,
    text: "The rooms felt neat, calm, and suitable for both family stays and business visits.",
  },
  {
    name: "Divya Menon",
    rating: 4.7,
    text: "Good hospitality, quick support, and a location that makes moving around Chennai easier.",
  },
  {
    name: "Vignesh Kumar",
    rating: 4.5,
    text: "A comfortable stay with essential facilities, warm service, and a peaceful environment.",
  },
  {
    name: "Sneha Reddy",
    rating: 4.9,
    text: "Pebbles offers a simple, convenient, and comfortable stay experience in the heart of Chennai.",
  },
];


function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const partial = rating - fullStars;

  return (
    <div className="flex items-center gap-[2px] text-lg">
      {[0, 1, 2, 3, 4].map((i) => {
        let percentage = 0;

        if (i < fullStars) percentage = 100;
        else if (i === fullStars) percentage = partial * 100;

        return (
          <span key={i} className="relative inline-block text-[#E5D3A4]">
            ★
            <span
              className="absolute left-0 top-0 overflow-hidden text-[#B8955E]"
              style={{ width: `${percentage}%` }}
            >
              ★
            </span>
          </span>
        );
      })}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -6 }}
      transition={{ duration: 0.3 }}
      className="w-[250px] md:w-[300px] lg:w-[340px] shrink-0 rounded-[28px] p-6 bg-[#FAF7F2] border border-[#D8CFC2] shadow-[0_8px_20px_rgba(58,58,58,0.05)]"
    >
      <h3 className="font-serif text-2xl text-ink">
        {review.name}
      </h3>

      <p className="mt-5 text-[15px] leading-7 text-ink">
        {review.text}
      </p>

      <div className="mt-8 pt-5 border-t border-ink/10 flex items-center justify-between">
        <StarRating rating={review.rating} />

        <span className="text-sm text-ink/70 font-medium">
          {Number(review.rating).toFixed(1)}
        </span>
      </div>
    </motion.div>
  );
}

function ReviewRow({ direction = "left", items }) {
  const loopItems = [...items, ...items];

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex flex-row flex-nowrap gap-6 w-max"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: 34,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loopItems.map((review, index) => (
          <ReviewCard key={`${direction}-${index}`} review={review} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Reviews() {
  const rowOne = reviews.slice(0, 4);
  const rowTwo = reviews.slice(4, 8);

  return (
    <main className="bg-background text-ink overflow-hidden">
      <section className="pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-sm uppercase tracking-[0.25em] font-medium"
          >
            Guest Reviews
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-6 font-serif text-6xl md:text-8xl leading-[0.95]"
          >
            Words From
            <br />
            Our Guests
          </motion.h1>
        </div>
      </section>

      <section className="pb-32 space-y-8">
        <ReviewRow direction="left" items={rowOne} />
        <ReviewRow direction="right" items={rowTwo} />
      </section>
    </main>
  );
}