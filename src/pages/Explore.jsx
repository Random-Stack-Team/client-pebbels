import { motion } from "framer-motion";

import exploreImage from "../assets/EXPLORE/explore.jpg";
import LocationCard from "../components/explore/LocationCard";
import EditorialSection from "../components/explore/EditorialSection";

import marinaImage from "../assets/EXPLORE/marina.webp";
import templeImage from "../assets/EXPLORE/Kapaleeswarar.jpg";
import museumImage from "../assets/EXPLORE/museum.jpg";

import tnagarImage from "../assets/EXPLORE/tnagar.jpg";
import pondyImage from "../assets/EXPLORE/pondybazaar.jpg";
import expressImage from "../assets/EXPLORE/ea.jpg";
import nungambakkamImage from "../assets/EXPLORE/nungambakkam.jpg";
import annaSalaiImage from "../assets/EXPLORE/annasalai.jpg";
import kodambakkamImage from "../assets/EXPLORE/kodambakkam.jpg";

export default function Explore() {



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
            Explore Chennai
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-6 font-serif text-5xl md:text-6xl leading-tight text-ink"
          >
            Stay Close to
            <br />
            the City's Best
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="max-w-lg mx-auto mt-8 text-[15px] leading-7 text-ink"
          >
            Located in one of Chennai's most connected
            neighborhoods, Pebbles places you within easy
            reach of shopping destinations, business districts,
            cultural landmarks, and local experiences.
          </motion.p>

        </div>
      </section>

      {/* SHOPPING */}
      <section className="pb-32">
  <div className="max-w-7xl mx-auto px-8">

    <div className="text-center mb-20">
      <p className="text-sm uppercase tracking-[0.2em] text-ink">
        Shopping & Lifestyle
      </p>

      <h2 className="mt-6 font-serif text-5xl text-ink">
        Discover Chennai
      </h2>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <LocationCard
  title="T. Nagar"
  image={tnagarImage}
  distance="8 min Drive"
  description="Chennai's most iconic shopping destination known for luxury jewelry, fashion boutiques, and vibrant city life."
  delay={0}
/>

<LocationCard
  title="Pondy Bazaar"
  image={pondyImage}
  distance="6 min Drive"
  description="A lively mix of retail stores, street shopping, cafés, and local experiences in the heart of Chennai."
  delay={0.15}
/>

<LocationCard
  title="Express Avenue"
  image={expressImage}
  distance="12 min Drive"
  description="One of Chennai's premier lifestyle destinations offering shopping, dining, entertainment, and luxury brands."
  delay={0.3}
/>

    </div>

  </div>
</section>

      {/* BUSINESS */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-8">



          <div className="grid md:grid-cols-3 gap-8">

  <LocationCard
  title="Nungambakkam"
  image={nungambakkamImage}
  distance="5 min Drive"
  description="A vibrant commercial hub featuring corporate offices, premium restaurants, retail destinations, and business centers."
  delay={0}
/>

<LocationCard
  title="Anna Salai"
  image={annaSalaiImage}
  distance="10 min Drive"
  description="One of Chennai's most important business corridors connecting major offices, hotels, and city landmarks."
  delay={0.15}
/>

<LocationCard
  title="Kodambakkam"
  image={kodambakkamImage}
  distance="7 min Drive"
  description="A well-connected neighborhood with offices, transport links, healthcare facilities, and everyday conveniences."
  delay={0.3}
/>

</div>

        </div>
       
      </section>

      {/* FEATURE IMAGE */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-8">

          <motion.img
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src={exploreImage}
            alt="Explore Chennai"
            className="w-full h-[650px] object-cover"
          />

        </div>
      </section>

     {/* LANDMARKS */}

<div className="pb-24">

  <div className="text-center mb-20">
    <p className="text-sm uppercase tracking-[0.2em] text-ink">
      Attractions
    </p>

    <h2 className="mt-6 font-serif text-5xl text-ink">
      Explore Local Landmarks
    </h2>
  </div>

  <EditorialSection
    title="Marina Beach"
    image={marinaImage}
    distance="20 min Away"
    description="One of the world's longest urban beaches offering sunrise walks, local food stalls, and sweeping views of the Bay of Bengal."
  />

  <div className="max-w-6xl mx-auto px-8">
  <div className="border-t border-black/[0.06]" />
</div>

  <EditorialSection
    reverse
    title="Kapaleeshwarar Temple"
    image={templeImage}
    distance="15 min Away"
    description="A centuries-old Dravidian temple known for its colorful gopuram, spiritual significance, and traditional architecture."
  />

  <div className="max-w-6xl mx-auto px-8">
  <div className="border-t border-black/[0.06]" />
</div>

  <EditorialSection
    title="Government Museum"
    image={museumImage}
    distance="18 min Away"
    description="One of India's oldest museums featuring archaeological treasures, bronze sculptures, and South Indian history."
  />
  <div className="max-w-6xl mx-auto px-8">
  <div className="border-t border-black/[0.06]" />
</div>

</div>

      {/* CLOSING */}
      <section className="pb-32">
        <div className="max-w-3xl mx-auto px-8 text-center">

          <h2 className="font-serif text-5xl leading-tight text-ink">
            Discover Chennai
            <br />
            From Pebbles
          </h2>

          <p className="max-w-lg mx-auto mt-6 text-[15px] leading-7 text-ink">
            Whether you're visiting for business,
            shopping, family, or leisure, Pebbles
            provides a convenient base to explore
            everything Chennai has to offer.
          </p>

        </div>
      </section>

    </main>
  );
}

