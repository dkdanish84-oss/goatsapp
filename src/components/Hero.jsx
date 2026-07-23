import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <section className="relative h-[80vh] flex items-center justify-center text-center px-4 bg-secondary text-white">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524055988636-230c5308b71d?q=80&w=2070')] bg-cover bg-center opacity-30" />
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10">
      <h1 className="text-6xl font-bold mb-4">GoatsApp</h1>
      <p className="text-2xl mb-8">Learn • Raise • Grow</p>
      <p className="text-xl mb-8 max-w-2xl mx-auto">India's Smart Platform for Goat Farmers.</p>
      <div className="flex gap-4 justify-center">
        <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition">Get Started</button>
      </div>
    </motion.div>
  </section>
);
export default Hero;
