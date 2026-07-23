import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="GoatsApp Logo"
            className="w-12 h-12 rounded-full object-contain"
          />

          <div>
            <h1 className="font-bold text-2xl">
              <span className="text-black">Goats</span>
              <span className="text-orange-500">App</span>
            </h1>

            <p className="text-xs text-gray-500">
              Learn • Raise • Grow
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/917987468974"
            className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600"
          >
            <FaWhatsapp />
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
