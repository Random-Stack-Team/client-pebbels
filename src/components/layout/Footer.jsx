import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#3A3A3A] text-[#FAF7F2]">

      <div className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid md:grid-cols-3 gap-16">

          {/* Brand */}
          <div>

            <h3 className="font-serif text-3xl">
              Pebbles
            </h3>

            <p className="mt-4 text-[15px] leading-7 max-w-sm">
              A thoughtfully designed serviced apartment
              offering comfort, convenience, and warm
              hospitality in Chennai.
            </p>

          </div>

          {/* Links */}
          <div>
          <h4 className="text-sm uppercase tracking-[0.15em]">
              Navigation
            </h4>

            <div className="mt-6 flex flex-col gap-3">

              <Link to="/" className="hover:opacity-70">
                Home
              </Link>

              <Link to="/about" className="hover:opacity-70">
                About
              </Link>

              <Link to="/explore" className="hover:opacity-70">
                Explore Chennai
              </Link>

              <Link to="/contact" className="hover:opacity-70">
                Contact
              </Link>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h4 className="text-sm uppercase tracking-[0.15em] text-ink">
              Contact
            </h4>

            <div className="mt-6 space-y-3 text-[15px] leading-7 text-ink">

              <p>
                T. Nagar,
                Chennai,
                Tamil Nadu
              </p>

              <p>
                +91 XXXXX XXXXX
              </p>

              <p>
                info@pebbles.com
              </p>

            </div>

          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-sm">

          <p>
            © 2026 Pebbles Serviced Apartments
          </p>

          <p>
            Designed with comfort and care.
          </p>

        </div>

      </div>

    </footer>
  );
}
            