import React, { useState } from 'react';
import { movies } from './MoviesObject';
import '@fontsource/syne';

export default function MovieCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 6; // 3 per row x 2 rows

  const nextPage = () => {
    if (startIndex + itemsPerPage < movies.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const prevPage = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const visibleMovies = movies.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-8 min-h-screen text-white">
      <h2 className="font-[syne] text-3xl text-red-500 mb-6 text-center">Movies</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visibleMovies.map((movie, index) => (
          <div
            key={index}
            className="bg-gray-700 text-white rounded-lg shadow-lg p-3 text-center hover:bg-gray-600 transition duration-300"
          >
            <img
              src={movie.img}
              alt={movie.title}
              className="w-full h-60 object-cover rounded mb-3"
            />
            <h3 className="text-md font-semibold">{movie.title}</h3>
            <p className="text-gray-300 text-sm">{movie.year}</p>
            <button className="mt-3 px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm">
              Watch
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-4">
        {startIndex > 0 && (
          <button
            onClick={prevPage}
            className="bg-gray-800 text-white px-5 py-2 rounded hover:bg-gray-700 transition"
          >
            Back
          </button>
        )}
        {startIndex + itemsPerPage < movies.length && (
          <button
            onClick={nextPage}
            className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
