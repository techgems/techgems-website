import React from "react"
import { Link } from "gatsby"

const Navbar: React.FC = () => {
  return (
    <nav className="pt-4 flex justify-around">
        <h1 className="text-xl font-semibold">Carlos Jimenez</h1>
        <div className="">
          <Link to="/about" className="mx-2 shadow-none hover:text-red-400">About</Link>
          <Link to="/consulting" className="mx-2 shadow-none hover:text-red-400">Consulting</Link>
          <Link to="/blog" className="mx-2 shadow-none hover:text-red-400">Blog</Link>
        </div>
    </nav>
  )
}

export default Navbar
