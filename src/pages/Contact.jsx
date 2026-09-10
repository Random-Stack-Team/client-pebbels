import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import {
  PhoneCall,
  Mail,
  MapPinned,
} from "lucide-react";

function MapBlock() {
  const [loadMap, setLoadMap] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
  const el = ref.current;
  if (!el) return;

  const hasLoadedRef = { current: false };

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !hasLoadedRef.current) {
        hasLoadedRef.current = true;

        const load = () => setLoadMap(true);

        if ("requestIdleCallback" in window) {
          window.requestIdleCallback(load);
        } else {
          setTimeout(load, 1500);
        }

        observer.unobserve(el);
        observer.disconnect();
      }
    },
    { rootMargin: "200px" }
  );

  observer.observe(el);

  return () => {
    observer.unobserve(el);
    observer.disconnect();
  };
}, []);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-[32px] h-[420px] md:h-[500px] shadow-[0_18px_60px_rgba(58,58,58,0.08)]"
    >
      {/* STATIC PREVIEW (NO IMAGE VERSION) */}
{!loadMap && (
  <div className="absolute inset-0 bg-[#EAE4DA] flex items-center justify-center">
    
    {/* content MUST be above overlay */}
    <div className="relative z-10 text-center">
      
      <div className="w-10 h-10 border-2 border-ink/20 border-t-ink rounded-full animate-spin mx-auto" />

      <p className="mt-4 text-sm text-gray-900 font-medium tracking-wide">
        Preparing your location
      </p>

      <p className="mt-1 text-xs text-gray-900">
        Loading map experience
      </p>

    </div>

    {/* overlay must be behind content */}
    <div className="absolute inset-0 bg-black/5 pointer-events-none" />
  </div>
)}
      {/* REAL MAP */}
      {loadMap && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.7157571881144!2d80.24236865903762!3d13.041099419089221!2m3!1f0!2f0!3f0!m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52665216c0ca29%3A0xcb2c91e781c681d1!2sPebbles%20Serviced%20Apartments!5e0!3m2!1sen!2sin!4v1781359435938!5m2!1sen!2sin"
          className="w-full h-full"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Pebbles Location"
        />
      )}
    </div>
  );
}

export default function Contact() {
  return (
    <main>
      {/* HERO */}
      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-sm uppercase tracking-[0.2em] text-ink"
          >
            Contact Us
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-6 font-serif text-5xl md:text-6xl leading-tight text-ink"
          >
            We're Here
            <br />
            to Help
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="max-w-lg mx-auto mt-8 text-[15px] leading-7 text-ink"
          >
            Have questions about your stay, room availability, long-term
            accommodations, or local recommendations? Our team is always happy
            to assist.
          </motion.p>
        </div>
      </section>

      {/* CONTACT INFO */}
<section className="pb-24">
  <div className="max-w-6xl mx-auto px-8">

    <div className="grid lg:grid-cols-[1fr_1fr_1fr] gap-8">

  {/* CALL */}
<motion.div
  className="
  relative
    rounded-[32px]
    bg-[#F3EFE7]
    p-8

    border
    border-black/[0.05]

    min-h-[220px]

    flex
    flex-col
    justify-between
  "
>

  <div
  className="
absolute top-8 right-8
w-14 h-14
rounded-2xl
bg-white/60
backdrop-blur-md
border border-white/40
flex items-center justify-center
shadow-[0_10px_30px_rgba(0,0,0,0.05)]
"
>
  <PhoneCall
    size={22}
    strokeWidth={1.75}
    className="text-[#3A3A3A]"
  />
</div>


  <div>
    <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
      Reservations
    </p>

    <h3 className="mt-4 font-serif text-3xl text-ink">
      Call Us
    </h3>

    <p className="mt-3 text-[15px] leading-7 text-ink/70">
      For bookings and guest assistance.
    </p>
  </div>

  <div className="mt-6 space-y-2">
    <a
      href="tel:+914443560001"
      className="block text-lg text-ink transition-opacity duration-300 hover:opacity-60"
    >
      044 4356 0001
    </a>

    <a
      href="tel:+914442170001"
      className="block text-lg text-ink transition-opacity duration-300 hover:opacity-60"
    >
      044 4217 0001
    </a>

    <a
      href="tel:+914428154000"
      className="block text-lg text-ink transition-opacity duration-300 hover:opacity-60"
    >
      044 2815 4000
    </a>
    <a
      href="tel:+914428154000"
      className="block text-lg text-ink transition-opacity duration-300 hover:opacity-60"
    >
      9962414285
    </a>
  </div>
</motion.div>

  {/* EMAIL */}
<motion.div
  className="
  relative
    rounded-[32px]
    bg-[#F3EFE7]
    p-8

    border
    border-black/[0.05]

    min-h-[220px]

    flex
    flex-col
    justify-between
  "
>

  <div
  className="
    absolute
    top-8
    right-8

    w-14
    h-14

    rounded-2xl

    bg-white/60
    backdrop-blur-md

    border
    border-white/40

    flex
    items-center
    justify-center

    shadow-[0_10px_30px_rgba(0,0,0,0.05)]
  "
>
  <Mail
    size={22}
    strokeWidth={1.75}
    className="text-[#3A3A3A]"
  />
</div>

  <div>
    <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
      Email
    </p>


    <h3 className="mt-4 font-serif text-3xl text-ink">
      Write to Us
    </h3>

    <p className="mt-3 text-[15px] leading-7 text-ink/70">
      Reservations and stay inquiries.
    </p>
  </div>

  <a
    href="mailto:pebbles_chennai@yahoo.com"
    className="
      mt-6
      block

      text-lg
      leading-7
      text-ink

      transition-opacity
      duration-300

      hover:opacity-60
    "
  >
    pebbles_chennai@yahoo.com
  </a>
</motion.div>

  {/* LOCATION */}
<motion.div
  className="
  relative
    rounded-[32px]
    bg-[#F3EFE7]
    p-8

    border
    border-black/[0.05]

    min-h-[220px]

    flex
    flex-col
    justify-between
  "
>

  <div
  className="
    absolute
    top-8
    right-8

    w-14
    h-14

    rounded-2xl

    bg-white/60
    backdrop-blur-md

    border
    border-white/40

    flex
    items-center
    justify-center

    shadow-[0_10px_30px_rgba(0,0,0,0.05)]
  "
>
  <MapPinned
    size={22}
    strokeWidth={1.75}
    className="text-[#3A3A3A]"
  />
</div>

  <div>
    <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
      Location
    </p>

    <h3 className="mt-4 font-serif text-3xl text-ink">
      Visit Us
    </h3>

    <p className="mt-3 text-[15px] leading-7 text-ink/70">
      Conveniently located in the heart of Chennai.
    </p>
  </div>

  <a
    href="https://maps.google.com/?q=Pebbles+Serviced+Apartments+7+Lodikhan+Street+Pondy+Bazaar+T+Nagar+Chennai+600017"
    target="_blank"
    rel="noopener noreferrer"
    className="
      mt-6
      block

      text-lg
      leading-7
      text-ink

      transition-opacity
      duration-300

      hover:opacity-60
    "
  >
    7, Lodikhan Street<br />
    Pondy Bazaar,<br />
    T. Nagar,<br />
    Chennai – 600 017
  </a>
</motion.div>
</div>

  </div>
</section>

      {/* LOCATION */}
<section className="pb-24">
  <div className="max-w-6xl mx-auto px-8">
    <div className="text-center mb-12">
      <p className="text-sm uppercase tracking-[0.2em] text-ink">
        Location
      </p>

      <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink">
        Conveniently Located
      </h2>
    </div>

    <MapBlock />
  </div>
</section>

      {/* FORM */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-7 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 70, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="w-full rounded-[28px] md:rounded-[36px] bg-[#FAF7F2] border border-[#D8CFC2] shadow-[0_18px_60px_rgba(58,58,58,0.08)] px-5 py-8 sm:px-7 sm:py-10 md:px-10 md:py-12 lg:px-12 lg:py-14"
          >
            <div className="text-center mb-10 md:mb-12">
              <p className="text-sm uppercase tracking-[0.2em] text-ink/60">
                Inquiry Form
              </p>

              <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl text-ink">
                Get in Touch
              </h2>
            </div>

            <form className="space-y-5 md:space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 md:px-5 py-4 rounded-2xl border border-[#D8CFC2] bg-white/60 outline-none focus:border-ink transition-all"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 md:px-5 py-4 rounded-2xl border border-[#D8CFC2] bg-white/60 outline-none focus:border-ink transition-all"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 md:px-5 py-4 rounded-2xl border border-[#D8CFC2] bg-white/60 outline-none focus:border-ink transition-all"
              />

              <textarea
                rows="6"
                placeholder="Message"
                className="w-full px-4 md:px-5 py-4 rounded-2xl border border-[#D8CFC2] bg-white/60 outline-none resize-none focus:border-ink transition-all"
              />

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-ink text-white text-sm font-medium transition-all duration-300 hover:scale-[1.03]"
              >
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="pb-32">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-ink">
            We Look Forward
            <br />
            to Welcoming You
          </h2>

          <p className="max-w-lg mx-auto mt-6 text-[15px] leading-7 text-ink">
            Whether you're planning a short visit or an extended stay, our team
            is ready to make your experience comfortable and effortless.
          </p>
        </div>
      </section>
    </main>
  );
}