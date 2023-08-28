"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { glow, staggerText } from "@/app/variants/variants";
import Carousel from "./Carousel";
import Project from "./Project";

const Projects = () => {
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
      <h2 className="h2">
        <motion.span
          className="section_number"
          variants={staggerText}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
        >
          02.
        </motion.span>
        <motion.span
          className="section_banner"
          variants={glow}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
        >
          Projects
        </motion.span>
      </h2>
      <motion.div className="flex flex-wrap justify-center mt-10 gap-10">
        <Project />
      </motion.div>
    </div>
  );
};

export default Projects;
