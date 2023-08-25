"use client";

import { VT323 } from "next/font/google";
import { motion, easeInOut } from "framer-motion";

const vt323 = VT323({ weight: "400", subsets: ["latin"] });

export default function Home() {
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
    <section className="h-screen flex flex-col justify-center items-center">
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
    </section>
  );
}
