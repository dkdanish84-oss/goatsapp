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
  <section className="py-20 bg-backgrouimport React from "react";
import {
  FaHeartbeat,
  FaSyringe,
  FaLeaf,
  FaDna,
  FaShoppingCart,
  FaBookOpen,
} from "react-icons/fa";

const features = [
  { icon: <FaShoppingCart />, title: "Buy & Sell Goats" },
  { icon: <FaHeartbeat />, title: "Goat Health" },
  { icon: <FaSyringe />, title: "Vaccination" },
  { icon: <FaLeaf />, title: "Feeding Guide" },
  { icon: <FaDna />, title: "Goat Breeds" },
  { icon: <FaBookOpen />, title: "Learning Center" },
];

export default function Features() {
  return (
    <section className="py-14 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-green-700">
          Explore GoatsApp
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
            >
              <div className="text-4xl text-green-700 mb-4">
                {item.icon}
              </div>

              <h3 className="font-semibold">{item.title}</h3>

              <p className="text-sm text-gray-500 mt-2">
                Tap to explore
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
