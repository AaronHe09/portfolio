"use client";
import { motion, easeInOut } from "framer-motion";

const Navbar = () => {
  const variants = {
    hidden: { opacity: 0, y: "-100%" },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        easeInOut,
      },
    },
  };

  return (
    <header id="home">
      <nav className=" px-36 py-12">
        <motion.ul
          className="text-white text-xl flex gap-16 justify-end"
          variants={variants}
          initial="hidden"
          animate="show"
        >
          <li>
            <a href="#home" className="text-shadow">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-shadow">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-shadow">
              Projects
            </a>
          </li>
          <li>
            <a href="contact" className="text-shadow">
              Contact
            </a>
          </li>
        </motion.ul>
      </nav>
    </header>
  );
};

export default Navbar;
