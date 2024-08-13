import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { Six_Caps } from "next/font/google";

const sixCaps = Six_Caps({ weight: "400", preload: false, });
// Define the type for the Paragraph props
interface ParagraphProps {
  words: string[];
}

export default function ScrollTextMotion({ words }: ParagraphProps) {
  const container = useRef<HTMLParagraphElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    
  });

  return (
    <div ref={container} className=" relative h-[300vh] ">
      <div className="sticky top-20">
        <div className="flex flex-col justify-center items-center h-screen items-center overflow-hidden pr-32 pl-32">
          <div className="bigTextScroll w-full">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// Define the type for the Word props
interface WordProps {
  children: React.ReactNode;
  progress: any; // You can specify a more precise type if known
  range: [number, number];
}

const Word = ({ children, progress, range }: WordProps) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <div className={`word ${sixCaps.className} lowercase`}>
      <motion.div style={{ opacity: opacity }}>{children}</motion.div>
    </div>
  );
};
