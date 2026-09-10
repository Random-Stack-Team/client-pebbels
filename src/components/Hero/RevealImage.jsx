import {
  motion,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

export default function RevealImage({
  src,
  alt = "",
  progress,
  start = 0.22,
  end = 0.42,
  className = "",
}) {
  /*
   -------------------------------------
   Mariven-style animation timeline
   -------------------------------------

   Mask reveal
   Blur dissolve
   Zoom settle
   Soft upward drift
   Brightness settle
   */

  const scale = useTransform(
  progress,
  [start, end],
  [1.08, 1]
);

  const blur = useTransform(
  progress,
  [start, end],
  [0.8, 0]
);

  const brightness = useTransform(
    progress,
    [0, 0.6],
    [0.92, 1]
  );

  
  

  /*
   Clip reveal

   Starts completely hidden.

   Opens from bottom to top.

   This is the biggest difference
   from your current implementation.
  */

  const clip = useTransform(
  progress,
  [start, end],
  [
    "inset(100% 0 0 0)",
    "inset(0 0 0 0)",
  ]
);

  const filter = useMotionTemplate`
    blur(${blur}px)
    brightness(${brightness})
  `;

  return (
    <div className="relative overflow-hidden h-full w-full">

      {/* image */}

      <motion.img
        src={src}
        alt={alt}
        style={{
          scale,
          clipPath: clip,
transformOrigin: "center bottom",
          filter,
          willChange:
            "transform, clip-path, filter",
        }}
        className="
      absolute
      bottom-0
      left-0
      w-full
      h-[150%]
      object-cover
    "
      />

      
    </div>
  );
}