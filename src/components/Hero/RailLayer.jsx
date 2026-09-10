import { motion, useTransform } from "framer-motion";
import RevealImage from "./RevealImage";

export default function RailLayer({
  progress,
  welcome1,
  welcome2,
  welcome3,
  welcome4,
}) {
  /*
    Timeline

    0.00 - 0.60  Hidden
    0.60 - 0.66  Pause
    0.66 - 0.80  Rails enter
    0.80 - 1.00  Editorial parallax
  */

    // Entrance starts AFTER welcome locks
const railProgress = useTransform(
  progress,
  [0.62, 0.96],
  [0, 1]
);

// LEFT
const leftRailY = useTransform(
  progress,
  [0.62, 0.90, 1],
  [
    "110vh", // off-screen
    "0vh",   // entrance finished
    "-160px" // slow editorial drift
  ]
);


// RIGHT
const rightRailY = useTransform(
  progress,
  [0.62, 0.90, 1],
  [
    "110vh",
    "0vh",
    "-220px"
  ]
);


  return (
  <div className="absolute inset-0 z-[1001] pointer-events-none">
    <div
      className="
        max-w-7xl
        mx-auto
        px-6 md:px-10 lg:px-16
        h-full
        grid
        lg:grid-cols-[260px_1fr_260px]
        gap-16
        items-center
      "
    >
      {/* LEFT RAIL */}
      <motion.div
        style={{ y: leftRailY }}
        className="hidden lg:flex flex-col gap-48"
      >
        <div className="overflow-hidden h-[320px]">
  <RevealImage
  src={welcome1}
  progress={progress}
  start={0.62}
end={0.90}
/>
        </div>

        <div className="overflow-hidden h-[320px]">
  <RevealImage
  src={welcome2}
  progress={progress}
  start={0.70}
end={1.00}
/>
        </div>
      </motion.div>

      {/* EMPTY CENTER */}
      <div />

      {/* RIGHT RAIL */}
      <motion.div
        style={{ y: rightRailY }}
        className="hidden lg:flex flex-col gap-48"
      >
        <div className="overflow-hidden h-[320px]">
  <RevealImage
  src={welcome3}
  progress={progress}
  start={0.62}
end={0.90}
/>
        </div>

        <div className="overflow-hidden h-[320px]">
  <RevealImage
  src={welcome4}
  progress={progress}
  start={0.70}
end={1.00}
/>
        </div>
      </motion.div>
    </div>
  </div>
);
}