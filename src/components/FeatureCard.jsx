import React from 'react';

const FeatureCard = ({ title, description, iframeSrc }) => {
  return (
    <div className="w-full max-w-xs h-80 rounded-xl shadow-lg bg-white text-white flex flex-col justify-end relative transition-transform duration-300 hover:scale-105 cursor-pointer">
      
      {/* YouTube iframe */}
      <iframe
  src={iframeSrc}
  title={title}
  width="100%"
  height="100%"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  className="absolute inset-0 w-full h-full rounded-xl z-0"
/>


      {/* Overlay content */}
      <div className="relative z-10 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
        <h2 className="text-2xl font-[Syne] font-semibold">{title}</h2>
        <p className="text-sm mt-1">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
