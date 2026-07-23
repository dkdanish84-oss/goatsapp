import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-green-700 to-green-500 text-white pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <div className="text-6xl mb-4">🐐</div>

        <h1 className="text-5xl md:text-6xl font-extrabold">
          GoatsApp
        </h1>

        <p className="mt-4 text-xl md:text-2xl text-green-100">
          India's Smart Platform for Goat Farmers
        </p>

        <p className="mt-4 max-w-2xl mx-auto text-green-100">
          Buy & Sell Goats • Goat Health • Vaccination • Feeding Guide • Goat Breeds
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="/"
            className="bg-white text-green-700 font-bold px-8 py-3 rounded-full"
          >
            🐐 Buy & Sell Goats
          </a>

          <a
            href="/about"
            className="border-2 border-white px-8 py-3 rounded-full font-bold"
          >
            📚 Learn Free
          </a>

        </div>

      </div>
    </section>
  );
};

export default Hero;
