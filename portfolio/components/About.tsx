"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { container, glow, staggerText } from "@/app/variants/variants";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    }
  }, [isInView]);

  return (
    <div className="section_div" ref={ref}>
      <motion.h2
        className="h2"
        variants={container}
        initial="hidden"
        animate={mainControls}
        exit="hidden"
      >
        <motion.span className="section_number" variants={staggerText}>
          01.
        </motion.span>
        <motion.span className="section_banner" variants={glow}>
          About
        </motion.span>
      </motion.h2>
    </div>
  );
};

export default About;
