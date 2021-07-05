import React from "react";
import slugify from "slugify";
import { useSiteMetadata } from "../../hooks/useSiteMetadata";
import { Link } from "gatsby";

const MobileCategoryDropdown: React.FC = () => {
  const { categories } = useSiteMetadata();

  return (
    <>
    <a href="#" className="pl-3 py-3 block bg-red-700">
        Categories
    </a>
      {categories.map((category) => {
        return (
          <Link
            to={`/category/${slugify(category.toLowerCase())}`}
            className="pl-6 bg-red-700 py-3 block"
            role="menuitem"
          >
            {category}
          </Link>
        );
      })}
    </>
  );
};

export default MobileCategoryDropdown;
