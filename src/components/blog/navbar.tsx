import React from "react";
import CategoryMenu from "../blog/categoryDropdown";
import InvertedLogo from "../../images/logos/techgems-inverted.png";
import { Link } from "gatsby";

const Navbar: React.FC = () => {
  return (
    <nav className="py-1 max-h-20 bg-red-900">
      <div className="flex justify-around">
        <Link to="/" className="my-auto">
          <img src={InvertedLogo} className="h-16" />
        </Link>
        <div className="flex my-auto text-lg text-white font-semibold font-header">
          <Link to="/" className="mx-3 shadow-none hover:text-red-400">
            Home
          </Link>
          <Link to="/latest" className="mx-3 shadow-none hover:text-red-400">
            Blog
          </Link>
          <CategoryMenu />
          <Link to="/contact" className="mx-3 shadow-none hover:text-red-400">
            Hire Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
