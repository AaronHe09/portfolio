import clsx from "clsx";

type HamburgerProps = { handleHamburger: () => void; showNav: boolean };

const Hamburger = ({ handleHamburger, showNav }: HamburgerProps) => {
  return (
    <div
      className={clsx("xl:hidden ", {
        "active-menu": showNav === true,
      })}
      onClick={handleHamburger}
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );
};

export default Hamburger;
