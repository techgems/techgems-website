import React from "react";
import InvertedLogo from "../../images/logos/techgems-inverted.png";
import { Link } from "gatsby";

const Navbar: React.FC = () => {
  return (
    <>
      <header>
        <nav className="flex justify-around bg-red-900">
          <Link to="/" className="my-1 ml-6 md:ml-0">
            <img src={InvertedLogo} className="h-16" />
          </Link>
          <div className="my-auto font-header">
            <Link to="/" className="mx-2 shadow-none hover:text-red-400">
              Home
            </Link>
            <Link to="/latest" className="mx-2 shadow-none hover:text-red-400">
              Blog
            </Link>
            <Link to="/contact" className="mx-2 shadow-none hover:text-red-400">
              Contact
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
