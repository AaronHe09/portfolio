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
    <motion.div
      className="section_div"
      ref={ref}
      variants={container}
      initial="hidden"
      animate={mainControls}
      exit="hidden"
    >
      <h2 className="h2">
        <motion.span className="section_number" variants={staggerText}>
          01.
        </motion.span>
        <motion.span className="section_banner" variants={glow}>
          About
        </motion.span>
      </h2>
      <motion.p className="mt-10 text-2xl text-white" variants={staggerText}>
        Hello there, I'm Aaron, currently living the Californian dream at 21
        years young. Lately, my creative energy has been channeled into crafting
        engaging and innovative website designs – much like the one you're
        delving into. The world of web development turned out to be far more
        intricate than I expected, but the rush of creativity it brings has
        truly captured my heart. When I'm not bringing digital visions to life,
        you'll probably find me in the midst of Valorant matches or navigating
        the unpredictable paths of Baldur's Gate 3 – mirroring the choices I
        embrace in real life adventures!
      </motion.p>
      <motion.a
        href="resume.pdf"
        className="text-white text-xl float-right inline-block relative overflow-hidden text-swap-wrapper w-[152px] h-8 after:content-['Check_out-my-resume']"
      >
        <span className="text-swap">Check out my resume</span>
      </motion.a>
    </motion.div>
  );
};

export default About;
