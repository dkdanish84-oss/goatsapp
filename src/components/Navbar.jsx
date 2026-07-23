import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">G</div>
            <span className="text-2xl font-bold text-secondary">GoatsApp</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="/" className="hover:text-primary transition">Home</a>
            <a href="/about" className="hover:text-primary transition">About</a>
            <a href="/contact" className="hover:text-primary transition">Contact</a>
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">Download App</button>
          </div>
          <a href="https://wa.me/yournumber" className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
