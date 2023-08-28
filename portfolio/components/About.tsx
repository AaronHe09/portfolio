"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { glow, staggerText } from "@/app/variants/variants";
import Carousel from "./Carousel";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div className="section_div" ref={ref}>
      <h2 className="h2">
        <motion.span
          className="section_number"
          variants={staggerText}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
        >
          01.
        </motion.span>
        <motion.span
          className="section_banner"
          variants={glow}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
        >
          About
        </motion.span>
      </h2>
      <motion.p
        className="mt-10 text-2xl text-white"
        variants={staggerText}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
      >
        Hello there, I&apos;m Aaron, currently living in California at 22 years
        young. Lately, my creative energy has been channeled into crafting{" "}
        <span className="text-green-400">engaging</span> and{" "}
        <span className="text-blue-400">innovative</span> website designs – much
        like the one you&apos;re delving into. The world of web development
        turned out to be far more intricate than I expected, but the rush of
        creativity it brings has truly captured my heart. When I&apos;m not
        giving life to digital landscapes, you&apos;ll likely spot me making
        questionable decisions in{" "}
        <span className=" text-amber-600">Baldur&apos;s Gate 3</span> – because
        why reserve all the poor choices for real life adventures?
      </motion.p>
      <motion.a
        href="resume.pdf"
        target="_blank"
        className=" text-blue-300 text-xl float-right inline-block relative overflow-hidden text-swap-wrapper w-[152px] h-8 after:content-['Check_out-my-resume'] mt-5"
        variants={staggerText}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
      >
        <span className="text-swap">Check out my resume</span>
      </motion.a>
      <motion.div
        className="mt-20"
        variants={staggerText}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
      >
        <Carousel />
      </motion.div>
    </motion.div>
  );
};

export default About;
