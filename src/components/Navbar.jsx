import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-green-700 flex items-center justify-center text-white text-xl">
            🐐
          </div>

          <div>
            <h1 className="font-bold text-xl text-green-700">
              GoatsApp
            </h1>
            <p className="text-xs text-gray-500">
              Learn • Raise • Grow
            </p>
          </div>
        </div>

        {/* Menu */}
        <div className="hidden md:flex gap-8 font-medium">
          <a href="/" className="hover:text-green-700">Home</a>
          <a href="/about" className="hover:text-green-700">About</a>
          <a href="/contact" className="hover:text-green-700">Contact</a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">

          <a
            href="/"
            className="hidden md:block bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800 transition"
          >
            Buy & Sell
          </a>

          <a
            href="https://wa.me/917987468974X"
            className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition"
          >
            <FaWhatsapp />
          </a>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
