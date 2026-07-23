import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">What Farmers Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-6 bg-background rounded-2xl shadow-sm">
            <p className="italic mb-4">"GoatsApp has completely transformed how I manage my farm. The health tips are invaluable!"</p>
            <p className="font-bold">- Farmer {i}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Testimonials;
