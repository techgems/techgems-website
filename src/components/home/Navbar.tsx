import React from "react"
import { Link } from "gatsby"

const Navbar: React.FC = () => {
  return (
    <nav className="py-4 flex justify-around bg-red-900">
        <h1 className="text-xl font-semibold">Carlos Jimenez</h1>
        <div>
          <Link to="/" className="mx-2 shadow-none hover:text-red-400">Home</Link>
          <Link to="/latest" className="mx-2 shadow-none hover:text-red-400">Blog</Link>
          <Link to="/contact" className="mx-2 shadow-none hover:text-red-400">Contact</Link>
        </div>
    </nav>
  );
}

export default Navbar
