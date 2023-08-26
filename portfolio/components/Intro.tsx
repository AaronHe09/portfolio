import { motion, easeInOut } from "framer-motion";
import { VT323 } from "next/font/google";
const vt323 = VT323({ weight: "400", subsets: ["latin"] });

import React from "react";

type IntroProp = {
  scrollY: number;
};

const Intro = ({ scrollY }: IntroProp) => {
  const variant = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        easeInOut,
      },
    },
    exit: { opacity: 0 },
  };

  return (
    <div
      className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full p-2 z-30"
      style={{ top: `${(-900 + scrollY) * -0.06}%` }}
    >
      <motion.h1
        className={`${vt323.className} text-center text-7xl md:text-9xl text-shadow text-[var(--gold)] dark-shadow cursor-default`}
        variants={variant}
        initial="hidden"
        animate="show"
      >
        Hi, I'm Aaron
        <span className="text-2xl md:text-4xl block mt-3">
          Interactive Front-End Developer
        </span>
      </motion.h1>
    </div>
  );
};

export default Intro;
