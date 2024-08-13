import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

// Define the type for the Paragraph props
interface ParagraphProps {
  paragraph: string;
}

export default function Paragraph({ paragraph }: ParagraphProps) {
  const container = useRef<HTMLParagraphElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");
  return (
    <div className="flex flex-col justify-center items-center pr-32 pl-32 mt-16 mb-16">
      <p ref={container} className="paragraph w-4/6">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
      <button className=" px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300">
        See All Works
      </button>
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
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="word">
      <span className="shadow">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
