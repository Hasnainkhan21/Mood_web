import { motion } from "framer-motion";
import { useState } from "react";
import '@fontsource/syne';
import img from "../assets/Black-headphone.png"; 

const Hero = () => {
  const [rotate, setRotate] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = -(y / height - 0.5) * 70; // Adjust tilt power
    const rotateY = (x / width - 0.5) * 70;

    setRotate({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ rotateX: 0, rotateY: 0 }); // Reset on leave
  };

  return (
    <div className="hero px-6 md:px-10 mt-20">
      <div className="w-full h-96 flex flex-col md:flex-row rounded-2xl bg-blue-600 shadow-xl overflow-hidden">

        {/* Text Section */}
        <div className="w-full  md:w-1/2 flex flex-col justify-center font-[Syne] px-8 text-white space-y-3">
          <h1 className="text-4xl md:text-5xl">
            <span className="text-yellow-300 text-6xl">Discover </span>Music
          </h1>
          <h2 className="text-3xl md:text-4xl">Movies and Books</h2>
          <p className="text-xl md:text-2xl">That Match Your Mood</p>
        </div>

        {/* Motion Image */}
        <div 
          className="w-full md:w-1/2 flex justify-center items-center bg-white"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.img
            src={img}
            alt="Mood"
            className="w-70 h-70 object-cover rounded-xl"
            style={{
              rotateX: rotate.rotateX,
              rotateY: rotate.rotateY,
              transformPerspective: 1000,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;
