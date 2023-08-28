"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { glow, staggerText } from "@/app/variants/variants";
import ContactForm from "./ContactForm";

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
      <motion.div
        className="mt-10 flex flex-col md:flex-row gap-16"
        variants={staggerText}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
      >
        <p className="basis-1/2 text-2xl text-white ">
          Thank you for visiting my website. Feel free to drop me a line through
          the form. Whether you have questions, feedback, or just want to say
          hello, I'm eager to hear from you. Let's connect and explore new
          possibilities together.
        </p>
        <ContactForm />
      </motion.div>
    </div>
  );
};

export default Contact;
