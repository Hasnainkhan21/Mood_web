import React from 'react';

const FeatureCard = (props) => {
  return (
    <div
      className="w-full max-w-xs h-80 rounded-xl shadow-lg overflow-hidden bg-cover bg-center text-white flex flex-col justify-end p-4 relative transition-transform duration-300 hover:scale-105 cursor-pointer"
      style={{ backgroundImage: `url(${props.img})` }}
    >
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity duration-300 z-0" />

      <div className="relative z-10 bg-transparent p-2 rounded">
        <h2 className="text-3xl font=[syne] font-semibold">{props.title}</h2>
        <p className="text-sm mt-1">{props.description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
