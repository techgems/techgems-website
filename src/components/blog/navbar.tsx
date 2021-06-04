import React from "react";
import InvertedLogo from "../../images/logos/techgems-inverted.png";
import { Link } from "gatsby"

const Navbar: React.FC = () => {
  return (
    <nav className="py-1 h-20 flex justify-around bg-red-900">
      <img src={InvertedLogo} />
      <div className="my-auto text-lg text-white">
        <Link to="/" className="mx-3 shadow-none hover:text-red-400">
          Home
        </Link>
        <Link to="/categories" className="mx-3 shadow-none hover:text-red-400">
          Categories
        </Link>
        <Link to="/tags" className="mx-3 shadow-none hover:text-red-400">
          Tags
        </Link>
        <Link to="/contact" className="mx-3 shadow-none hover:text-red-400">
          Hire Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
