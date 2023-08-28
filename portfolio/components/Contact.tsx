"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { glow, staggerText } from "@/app/variants/variants";

const Contact = () => {
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
          03.
        </motion.span>
        <motion.span
          className="section_banner"
          variants={glow}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
        >
          Contact
        </motion.span>
      </h2>
    </div>
  );
};

export default Contact;
