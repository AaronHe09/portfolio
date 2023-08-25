"use client";
import { motion, easeInOut } from "framer-motion";
import Hamburger from "./Hamburger";
import { useState } from "react";
import clsx from "clsx";

const Navbar = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const handleHamburger = () => {
    setShowNav((prev) => !prev);
  };

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
    <header
      id="home"
      className="absolute top-0 right-0 z-50 flex flex-col justify-center items-center mx-4 my-3 xl:mx-36 xl:my-12 xl:block min-w-[70px]"
    >
      <Hamburger handleHamburger={handleHamburger} />
      <nav
        className={clsx(
          "xl:block",
          { block: showNav === true },
          { hidden: showNav === false }
        )}
      >
        <motion.ul
          className="text-white text-lg md:text-xl text-center flex gap-3 xl:gap-16 justify-end flex-col xl:flex-row"
          variants={variants}
          initial="hidden"
          animate="show"
        >
          <li>
            <a href="#home" className="text-shadow nav-hover">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-shadow nav-hover">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-shadow nav-hover">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-shadow nav-hover">
              Contact
            </a>
          </li>
        </motion.ul>
      </nav>
    </header>
  );
};

export default Navbar;
