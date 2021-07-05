import React, { useState } from "react";
import CategoryMenu from "../blog/categoryDropdown";
import MobileCategoryDropdown from "../blog/mobileCategoryDropdown";
import InvertedLogo from "../../images/logos/techgems-inverted.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";

library.add(faBars, faTimes);

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <>
      <header className={"shadow-lg h-16"}>
        <nav className="py-1 max-h-20 bg-red-900">
          <div className="flex justify-between md:justify-around">
            <Link to="/" className="my-auto ml-6 md:ml-0">
              <img src={InvertedLogo} className="h-16" />
            </Link>
            <div
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="flex md:hidden mr-6 md:mr-0 h-16 text-white items-center"
            >
              {mobileMenuOpen ? (
                <FontAwesomeIcon icon={["fas", "times"]} />
              ) : (
                <FontAwesomeIcon icon={["fas", "bars"]} />
              )}
            </div>
            <div className="hidden md:flex my-auto text-lg text-white font-semibold font-header">
              <Link to="/" className="mx-3 shadow-none hover:text-red-400">
                Home
              </Link>
              <Link
                to="/latest"
                className="mx-3 shadow-none hover:text-red-400"
              >
                Blog
              </Link>
              <CategoryMenu />
              <Link
                to="/contact"
                className="mx-3 shadow-none hover:text-red-400"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <div
        className={`${
          mobileMenuOpen ? "block" : "hidden"
        } md:hidden md:max-w-md bg-red-800 text-white font-header mt-2`}
      >
        <Link to="/" className="ml-3 my-3 block">
          Home
        </Link>
        <Link to="/latest" className="ml-3 my-3 block">
          Blog
        </Link>
        <MobileCategoryDropdown />
        <Link to="/contact" className="ml-3 my-3 block">
          Hire Me
        </Link>
      </div>
    </>
  );
};

export default Navbar;
