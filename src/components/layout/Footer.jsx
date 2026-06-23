import { Link } from "react-router-dom";
import {
  Camera,
  MessageCircle,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3A3A3A] text-[#FAF7F2]">

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">  

          {/* Brand */}
          <div>

            <h3 className="font-serif text-2xl md:text-3xl">
              Pebbles
            </h3>

            <p
  className="
    mt-4
    text-[14px]
    md:text-[15px]
    leading-6
    md:leading-7
    max-w-sm
  "
>
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
  <h4 className="text-sm uppercase tracking-[0.15em] text-white/70">
    Contact
  </h4>

  <div
    className="
      mt-6
      space-y-3
      text-[14px]
      md:text-[15px]
      leading-6
      md:leading-7
      text-white/90
    "
  >
    <p>
      T. Nagar,
      Chennai,
      Tamil Nadu
    </p>

    <p>
       044 4356 0001

    </p>

    <p>
      info@pebbles.com
    </p>
  </div>

  {/* Social Buttons */}
  <div
  className="
    flex
    items-center
    justify-center md:justify-start
    gap-4
    mt-8
  "
>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/pebbles_serviced_apartments?igsh=MTh2ZzF3aHZtenBhYg=="
      className="
        group
        relative

        w-12 h-12

        rounded-full
        bg-white/5
        border border-white/10

        flex items-center justify-center

        transition-all duration-500

        hover:-translate-y-1
       hover:bg-[#FAF7F2]
hover:text-[#3A3A3A]
hover:shadow-[0_12px_30px_rgba(250,247,242,0.15)]
      "
    >
      <span
        className="
          absolute
          -top-10

          px-3 py-1

          rounded-full

          bg-[#FAF7F2]
          text-[#3A3A3A]

          text-[11px]
          uppercase
          tracking-[0.15em]

          opacity-0
          translate-y-2

          transition-all duration-300

          group-hover:opacity-100
          group-hover:translate-y-0
        "
      >
        Instagram
      </span>

      <Camera size={18} />
    </a>

    {/* WhatsApp */}
    <a
      href="#"
      className="
        group
        relative

        w-12 h-12

        rounded-full
        bg-white/5
        border border-white/10

        flex items-center justify-center

        transition-all duration-500

        hover:-translate-y-1
       hover:bg-[#FAF7F2]
hover:text-[#3A3A3A]
hover:shadow-[0_12px_30px_rgba(250,247,242,0.15)]
      "
    >
      <span
        className="
          absolute
          -top-10

          px-3 py-1

          rounded-full

          bg-[#FAF7F2]
          text-[#3A3A3A]

          text-[11px]
          uppercase
          tracking-[0.15em]

          opacity-0
          translate-y-2

          transition-all duration-300

          group-hover:opacity-100
          group-hover:translate-y-0
        "
      >
        WhatsApp
      </span>

      <MessageCircle size={18} />
    </a>

    {/* Maps */}
    <a
      href="https://www.google.com/travel/search?q=Pebbles%20Serviced%20Apartments&g2lb=4965990%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C73064764%2C121529350&hl=en-IN&gl=in&ssta=1&ts=CAEaSQopEicyJTB4M2E1MjY2NTIxNmMwY2EyOToweGNiMmM5MWU3ODFjNjgxZDESHBIUCgcI6g8QBhgdEgcI6g8QBhgeGAEyBAgAEAAqBwoFOgNJTlI&qs=CAEyFENnc0kwWU9hanZpOHBKYkxBUkFCOAJCCQnRgcaB55Esy0IJCdGBxoHnkSzL&ap=MAC6AQhvdmVydmlldw&ictx=111&ved=0CAAQ5JsGahgKEwigleL004uVAxUAAAAAHQAAAAAQygE"
      className="
        group
        relative

        w-12 h-12

        rounded-full
        bg-white/5
        border border-white/10

        flex items-center justify-center

        transition-all duration-500

        hover:-translate-y-1
       hover:bg-[#FAF7F2]
hover:text-[#3A3A3A]
hover:shadow-[0_12px_30px_rgba(250,247,242,0.15)]
      "
    >
      <span
        className="
          absolute
          -top-10

          px-3 py-1

          rounded-full

          bg-[#FAF7F2]
          text-[#3A3A3A]

          text-[11px]
          uppercase
          tracking-[0.15em]

          opacity-0
          translate-y-2

          transition-all duration-300

          group-hover:opacity-100
          group-hover:translate-y-0
        "
      >
        Maps
      </span>

      <MapPin size={18} />
    </a>

  </div>
</div>
</div>

        <div
  className="
    mt-12 md:mt-20
    pt-8
    border-t
    border-white/10

    flex
    flex-col
    md:flex-row

    items-center
    md:items-start

    justify-between

    gap-3 md:gap-4

    text-center
    md:text-left

    text-sm
  "
>
          <p>
            © 2026 Pebbles Serviced Apartments
          </p>

          <p>
            Crafted By Random Stacks Technologies
          </p>

        </div>

      </div>

    </footer>
  );
}
            