"use client";
import { motion, easeInOut } from "framer-motion";
import Hamburger from "./Hamburger";
import { useState } from "react";
import clsx from "clsx";

const Navbar = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const handleHamburger = () => {
    setShowNav((prev) => !prev);
    console.log(showNav);
  };

  const variants = {
    hidden: { opacity: 0, y: "-100%" },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        easeInOut,
      },
    },
  };

  return (
    <header className="fixed top-0 right-0 z-50 flex flex-col justify-center items-end px-4 py-3 xl:px-16 xl:py-6 xl:block w-full">
      <Hamburger handleHamburger={handleHamburger} showNav={showNav} />
      <nav
        className={clsx(
          "xl:block",
          { block: showNav === true },
          { hidden: showNav === false }
        )}
      >
        <motion.ul
          className="text-white text-lg md:text-xl text-end flex gap-3 xl:gap-16 justify-end flex-col xl:flex-row"
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
