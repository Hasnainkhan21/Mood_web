// MovieCarousel.jsx
import React, { useRef } from 'react';
import { movies } from './MoviesObject';
import '@fontsource/syne';

export default function MovieCarousel() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className=" items-center gap-4 overflow-hidden p-10">   
        {/* buttons div */}
        <div className='flex justify-between py-2'>
  <button onClick={scrollLeft} className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
  >Back</button>
  <h2 className='font-[syne] text-2xl text-red-500'>Movies</h2>
  <button onClick={scrollRight} className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
  >Next</button>
  </div>

  {/* card dev */}
  <div
  ref={carouselRef}
  className="flex overflow-x-auto space-x-6"
>
  {movies.map((movie, index) => (
    <div
      key={index}
      className="w-[300px] bg-gray-600 text-white shadow-md rounded-lg p-4 flex-shrink-0 text-center transition-transform transform hover:-translate-y-2 hover:shadow-lg duration-250"
    >
      <img
        src={movie.img}
        alt={movie.title}
        className="w-full h-56 object-cover rounded-md mb-2 transition-transform duration-300 hover:scale-101"
      />
      <h3 className="text-lg font-semibold mb-1">{movie.title}</h3>
      <p className="text-gray-300">{movie.year}</p>
      <button
        type="button"
        className="mt-4 px-4 py-1.5 bg-red-600 text-white cursor-pointer rounded text-sm font-semibold 
               hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors duration-300"
      >
        Watch
      </button>
    </div>
  ))}
</div>


  
</div>

  );
}
