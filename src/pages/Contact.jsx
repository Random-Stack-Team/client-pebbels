import { motion } from "framer-motion";

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
            Have questions about your stay, room availability,
            long-term accommodations, or local recommendations?
            Our team is always happy to assist.
          </motion.p>

        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-8">

          <div className="grid md:grid-cols-3 gap-12 text-center">

            <div>
              <h3 className="font-serif text-3xl text-ink">
                Call
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-ink">
                +91 XXXXX XXXXX
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl text-ink">
                Email
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-ink">
                reservations@pebbles.com
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl text-ink">
                Visit
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-ink">
                T. Nagar
                <br />
                Chennai
              </p>
            </div>

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

            <h2 className="mt-6 font-serif text-5xl text-ink">
              Conveniently Located
            </h2>

          </div>

          <div className="w-full h-[500px] bg-surface flex items-center justify-center">

            <p className="text-sm tracking-[0.2em] uppercase text-ink">
              Google Maps Coming Soon
            </p>

          </div>

        </div>
      </section>

      {/* FORM */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-8">

          <div className="text-center mb-12">

            <p className="text-sm uppercase tracking-[0.2em] text-ink">
              Inquiry Form
            </p>

            <h2 className="mt-6 font-serif text-5xl text-ink">
              Get in Touch
            </h2>

          </div>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-5 py-4 border border-border bg-transparent outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-5 py-4 border border-border bg-transparent outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-5 py-4 border border-border bg-transparent outline-none"
            />

            <textarea
              rows="6"
              placeholder="Message"
              className="w-full px-5 py-4 border border-border bg-transparent outline-none resize-none"
            />

            <button
              type="submit"
              className="px-8 py-3 bg-ink text-background text-sm font-medium"
            >
              Send Inquiry
            </button>

          </form>

        </div>
      </section>

      {/* CLOSING */}
      <section className="pb-32">
        <div className="max-w-3xl mx-auto px-8 text-center">

          <h2 className="font-serif text-5xl leading-tight text-ink">
            We Look Forward
            <br />
            to Welcoming You
          </h2>

          <p className="max-w-lg mx-auto mt-6 text-[15px] leading-7 text-ink">
            Whether you're planning a short visit or
            an extended stay, our team is ready to make
            your experience comfortable and effortless.
          </p>

        </div>
      </section>

    </main>
  );
}

