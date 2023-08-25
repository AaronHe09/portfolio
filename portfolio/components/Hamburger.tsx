import React from "react";

type HamburgerProps = { handleHamburger: () => void };

const Hamburger = ({ handleHamburger }: HamburgerProps) => {
  return (
    <div className="xl:hidden mt-5" onClick={handleHamburger}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );
};

export default Hamburger;
