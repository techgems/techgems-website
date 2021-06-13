import React, { useState } from "react";
import slugify from "slugify";
import { useSiteMetadata } from "../../hooks/useSiteMetadata";
import { Link } from "gatsby";

const CategoryDropdown: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const { categories } = useSiteMetadata();

  return (
    <>
      <div
        className="mx-3 shadow-none hover:text-red-400 cursor-pointer select-none"
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        Categories
      </div>
      <div className="relative">
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } origin-top-right absolute right-0 mt-12 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5`}
        >
          {categories.map((category) => {
            return (
              <Link
                to={`/category/${slugify(category.toLowerCase())}`}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                {category}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CategoryDropdown;
