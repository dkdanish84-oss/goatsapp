import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => (
  <section className="py-20 bg-primary text-white text-center">
    <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Farm?</h2>
    <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">Get Started Today</Link>
  </section>
);
export default CTA;
