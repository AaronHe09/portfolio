const Navbar = () => {
  return (
    <header id="home">
      <nav className=" px-36 py-12">
        <ul className="text-white text-xl flex gap-16 justify-end">
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
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
