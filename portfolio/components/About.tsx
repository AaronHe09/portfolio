import { motion } from "framer-motion";
import { container, glow, staggerText } from "@/app/variants/variants";

const About = () => {
  return (
    <div className="section_div">
      <motion.h2
        className="h2"
        variants={container}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <motion.span className="section_number" variants={staggerText}>
          01.
        </motion.span>
        <motion.span className="section_header light" variants={glow}>
          About
        </motion.span>
      </motion.h2>
    </div>
  );
};

export default About;
