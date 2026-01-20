import { useState } from "react";
import { Link } from 'react-router-dom'
import Logo from "../assets/logo1.png"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img
              src={Logo}
              alt="Fatima Welfare Trust Logo"
              className="h-10 md:h-30 w-auto object-contain cursor-pointer"
            />
          </Link>
          {/* <span className="text-lg font-semibold text-lime-600">
            Fatima Welfare Trust
          </span> */}
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-6 text-gray-800 font-medium">
          <Link to="/" className="hover:text-amber-500">Home</Link>
          <Link to="/about" className="hover:text-amber-500">About</Link>
          <Link to="/institutions" className="hover:text-amber-500">Institutions</Link>
          <Link to="/gallery" className="hover:text-amber-500">Gallery</Link>
          <Link to="/contact" className="hover:text-amber-500">Contact</Link>

          {/* DONATE BUTTON */}
          <a
            href="/donate"
            className="ml-4 px-4 py-2 rounded-full bg-amber-400 text-amber-50 font-bold hover:bg-amber-300 transition"
          >
            Donate
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}
         <div className="ml-auto md:hidden ">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-700"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="text-gray-600 md:hidden absolute top-full left-0 w-full bg-white border-t px-4 py-4 z-40">
          <a href="/" className="block">Home</a>
          <a href="/about" className="block">About</a>
          <a href="/institutions" className="block">Institutions</a>
          <a href="/gallery" className="block">Gallery</a>
          <a href="/contact" className="block pb-5">Contact</a>

          <a
            href="/donate"
            className="block text-center bg-amber-400 hover:bg-amber-300 text-white py-2 rounded-full"
          >
            Donate
          </a>
        </div>
      )}
    </header>
  );
}
