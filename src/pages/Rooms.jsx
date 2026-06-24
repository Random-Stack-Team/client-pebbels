import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CarFront,
  Wifi,
  BatteryCharging,
  Droplets,
  Sofa,
  ShieldCheck,
} from "lucide-react";

import heroRoom from "../assets/Rooms/Hero-section-room.webp";
import deluxeRoom from "../assets/Rooms/Deluxe-room.webp";
import executiveRoom from "../assets/Rooms/Executive-room.webp";
import suiteRoom from "../assets/Rooms/Suite-room.webp";

import deluxe1 from "../assets/DELUXE/Deluxe_room.webp";
import deluxe2 from "../assets/DELUXE/Deluxe room (1).webp";
import deluxe3 from "../assets/DELUXE/deluxe room (2).webp";

import executive1 from "../assets/EXECUTIVE/Executive_room.webp";
import executive2 from "../assets/EXECUTIVE/Executive_room_2.webp";

import suite1 from "../assets/SUITE/Suite_room.webp";
import suite2 from "../assets/SUITE/Suite_room_2.webp";
import suite3 from "../assets/SUITE/Suite_room_3.webp";

const rooms = [
  {
    title: "Deluxe Room",
    image: deluxeRoom,
    images: [deluxe1, deluxe2, deluxe3],
    desc: "A calm and comfortable room designed for short stays and peaceful rest.",
    size: "280 sq. ft.",
    bed: "Queen Bed",
    guests: "2 Guests",
  },
  {
    title: "Executive Room",
    image: executiveRoom,
    images: [executive1, executive2],
    desc: "A refined space with extra comfort for business travelers and longer visits.",
    size: "360 sq. ft.",
    bed: "King Bed",
    guests: "2 Guests",
  },
  {
    title: "Suite Room",
    image: suiteRoom,
    images: [suite1, suite2, suite3],
    desc: "A spacious premium stay crafted for families, groups, and relaxed living.",
    size: "520 sq. ft.",
    bed: "King Bed",
    guests: "3 Guests",
  },
];

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedFacility, setSelectedFacility] = useState(null);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % selectedRoom.images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) =>
        (prev - 1 + selectedRoom.images.length) % selectedRoom.images.length
    );
  };

  return (
    <main className="bg-background text-ink overflow-hidden">
      <section className="sticky top-0 h-screen overflow-hidden flex items-center bg-ink">
        <motion.img
          src={heroRoom}
          alt="Pebbles Rooms"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full h-full flex flex-col items-center justify-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-white text-sm uppercase tracking-[0.3em] font-medium"
          >
            Our Rooms
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 55 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9 }}
            className="mt-6 font-serif text-white text-4xl md:text-5xl lg:text-8xl leading-[0.95] max-w-4xl"
          >
            Spaces Designed for
            <br />
            Quiet Comfort
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 55 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="max-w-md md:max-w-2xl mt-8 mx-auto text-white/90 text-[15px] leading-7"
          >
            Thoughtfully crafted rooms with warm interiors, calm details,
            and everything needed for a comfortable stay.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-xs uppercase tracking-[0.25em]"
        >
          Scroll to explore
        </motion.div>
      </section>

      <section className="relative z-20 bg-background rounded-t-[48px] -mt-16 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-sm uppercase tracking-[0.25em] font-medium">
              Room Categories
            </p>

            <h2 className="mt-5 font-serif text-3xl md:text-5xl lg:text-6xl">
              Choose Your Stay
            </h2>
          </motion.div>

          <div className="space-y-10">
            {rooms.map((room, index) => (
              <motion.div
                key={room.title}
                initial={{ opacity: 0, y: 90 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9 }}
                className="room-card grid lg:grid-cols-[1fr_0.9fr] gap-8 md:gap-14 items-center pt-10 group"
              >
                <div className="overflow-hidden h-[300px] md:h-[420px] rounded-[24px]">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover rounded-[24px] transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div>
                  <p className="text-5xl font-serif text-ink/40">
                    0{index + 1}
                  </p>

                  <h3 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none">
                    {room.title}
                  </h3>

                  <p className="mt-6 text-[15px] leading-7 max-w-md">
                    {room.desc}
                  </p>

                  <div className="flex flex-wrap gap-5 mt-8 text-sm">
                  
                    <span>{room.bed}</span>
                    <span>{room.guests}</span>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedRoom(room);
                      setCurrentImage(0);
                    }}
                    className="mt-10 px-8 py-3 rounded-full bg-ink text-white text-sm font-medium"
                  >
                    View Room
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-20 bg-background py-28">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-sm uppercase tracking-[0.25em] font-medium">
              Facilities
            </p>

            <h2 className="mt-5 font-serif text-3xl md:text-5xl lg:text-6xl">
              Affordable Luxury
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              [
                CarFront,
                "Covered Car Parking",
                "Safe and convenient covered parking space for guests.",
              ],
              [
                Wifi,
                "24 x 7 Wi-Fi Facility",
                "High-speed internet access available throughout your stay.",
              ],
              [
                BatteryCharging,
                "24 hrs Power Backup Facility including A/C",
                "Reliable power backup support including air conditioning.",
              ],
              [
                Droplets,
                "24 hrs Purified Water Supply",
                "Clean purified water available around the clock.",
              ],
              [
                Sofa,
                "Exquisite Luxury by Interior Decorations",
                "Elegant interiors designed for a premium stay experience.",
              ],
              [
                ShieldCheck,
                "24 x 7 Security Systems",
                "Round-the-clock security systems for guest safety.",
              ],
            ].map(([Icon, title, desc], index) => (
              <motion.div
                key={title}
                onClick={() => setSelectedFacility({ title, desc })}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.7 }}
                className="flex items-start md:items-center gap-4 md:gap-6 border-b border-ink/10 pb-7 cursor-pointer"
              >
                <Icon size={26} strokeWidth={1.4} className="text-ink shrink-0" />

                <p className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight">
                  {title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedRoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center"
          >
            <button
              onClick={() => setSelectedRoom(null)}
              className="absolute top-6 right-6 z-20 text-white text-4xl"
            >
              ×
            </button>

            {selectedRoom.images.length > 1 && (
              <button
                onClick={prevImage}
                className="absolute left-4 md:left-8 z-20 text-white text-5xl"
              >
                ‹
              </button>
            )}

            <motion.img
              key={currentImage}
              src={selectedRoom.images[currentImage]}
              alt={selectedRoom.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-[92vw] max-h-[80vh] object-contain rounded-2xl"
            />

            {selectedRoom.images.length > 1 && (
              <button
                onClick={nextImage}
                className="absolute right-4 md:right-8 z-20 text-white text-5xl"
              >
                ›
              </button>
            )}

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white font-serif text-xl md:text-2xl">
                {selectedRoom.title}
              </p>

              <p className="text-white/60 text-sm mt-2">
                {currentImage + 1} / {selectedRoom.images.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedFacility && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center px-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              className="bg-background text-ink max-w-md w-full rounded-[28px] p-6 md:p-8"
            >
              <button
                onClick={() => setSelectedFacility(null)}
                className="float-right text-3xl"
              >
                ×
              </button>

              <h3 className="font-serif text-3xl md:text-4xl mt-8">
                {selectedFacility.title}
              </h3>

              <p className="mt-5 text-[15px] leading-7 text-ink/70">
                {selectedFacility.desc}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}