"use client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

type HeroBlurProps = {
  imageSrc: string;
  title: string;
  year: string;
};

const HeroBlur: React.FC<HeroBlurProps> = ({ imageSrc, title, year }) => {
  const ref = useRef(null);
  const [blurState, setBlurState] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const { scrollYProgress: blurYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0.9, 0.94, 0.97, 0.99, 1],
    [1, 0.9, 0.85, 0.82, 0.8]
  );

  const smoothScale = useSpring(scale, { stiffness: 120, damping: 40 });
  const blur: any = useTransform(scrollYProgress, [0, 1], [0, 10]);
  useEffect(() => {
    console.log("Blur value:", smoothScale);
  }, [scrollYProgress]);
  function calculateBlur(scrollPosition: number) {
    const k = 0.01; // Adjust this value to control the steepness
    const c = 0; // Adjust this value to shift the curve along the x-axis

    const blur = k * Math.pow(scrollPosition - c, 2);

    return blur;
  }
  useMotionValueEvent(blurYProgress, "change", (latest) => {
    setBlurState(calculateBlur(latest) * 1000 - 8); // Adjust this multiplier to control the blur effect
  });

  return (
    <motion.div
      ref={ref}
      key="imageBanner"
      className="sticky top-10 w-full h-3/5 br rounded-xl z-0"
      style={{
        scale: smoothScale,
        filter: `blur(${blurState}px)`, // Get blur value directly
      }}
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover br rounded-xl"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-end items-center p-8 text-white br rounded-xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          {title}
        </h1>
        <div className="flex justify-between w-full max-w-screen-xl">
          <span className="text-sm md:text-lg bg-gray-800 px-3 py-1 rounded-full">
            {year}
          </span>
          <span className="text-sm md:text-lg bg-gray-800 px-3 py-1 rounded-full">
            Photo
          </span>
        </div>
      </div>
    </motion.div>
  );
};


export default HeroBlur;
