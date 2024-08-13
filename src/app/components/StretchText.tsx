import { motion } from "framer-motion";
import React from "react";
import { Six_Caps } from "next/font/google";

const sixCaps = Six_Caps({ weight: "400", preload: false, });

const StretchText = ({ word , transformOrigin }: { word: string; transformOrigin:string }) => {
  const characters = word.split("");
  return (
    <div className="flex">
      {characters.map((character: string) => {
        return (
          <motion.span
          key={character}
            whileHover={{ scaleY: 1.25 }}
            style={{ transformOrigin: transformOrigin }}
            transition={{ duration: 0.5 }}
          >
            <span className={`font-bold ${sixCaps.className} stretchText `}>{character}</span>
          </motion.span>
        );
      })}
    </div>
  );
};

export default StretchText;
