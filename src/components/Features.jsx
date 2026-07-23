import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaSyringe, FaLeaf, FaDna, FaShoppingCart, FaMobileAlt } from 'react-icons/fa';

const features = [
  { icon: FaHeartbeat, title: 'Goat Health' },
  { icon: FaSyringe, title: 'Vaccination Schedule' },
  { icon: FaLeaf, title: 'Feeding Guide' },
  { icon: FaDna, title: 'Goat Breeds' },
  { icon: FaShoppingCart, title: 'Buy & Sell Goats' },
  { icon: FaMobileAlt, title: 'Mobile App' },
];

const Features = () => (
  <section className="py-20 bg-background">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((f, i) => (
        <motion.div key={i} whileHover={{ y: -10 }} className="p-8 bg-white rounded-3xl shadow-lg border border-gray-100">
          <f.icon className="text-4xl text-primary mb-4" />
          <h3 className="text-xl font-bold">{f.title}</h3>
        </motion.div>
      ))}
    </div>
  </section>
);
export default Features;
