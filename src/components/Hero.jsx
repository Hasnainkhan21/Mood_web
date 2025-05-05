import React from 'react';
import '@fontsource/syne';
import img from "../assets/about.jpeg";

const Hero = () => {
  return (
    <div className="hero px-6 md:px-10 mt-20">
      <div className="w-full h-96 flex flex-col md:flex-row rounded-2xl bg-gray-800 shadow-xl overflow-hidden">

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center font-[Syne] px-8 text-white space-y-3">
          <h1 className="text-4xl md:text-5xl">
            <span className="text-yellow-300 text-6xl">Discover </span>Music
          </h1>
          <h2 className="text-3xl md:text-4xl">Movies and Books</h2>
          <p className="text-xl md:text-2xl">That Match Your Mood</p>
        </div>

        {/* Static Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={img}
            alt="Mood"
            className="w-full h-auto object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;
