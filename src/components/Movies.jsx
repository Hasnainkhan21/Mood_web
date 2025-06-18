import React, { useEffect, useState } from 'react';
import { MOVIES_BY_MOOD } from '../API/movie_api';
import '@fontsource/syne';

export default function MovieCarousel({ mood}) {
  const [movies, setMovies] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 6;

  // ✅ Shuffle helper
  function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(MOVIES_BY_MOOD(mood));
        const data = await response.json();
        const shuffled = shuffleArray(data.results || []);
        setMovies(shuffled);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    }

    fetchMovies();
  }, [mood]);

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
            key={movie.id || index}
            className="bg-gray-700 text-white rounded-lg shadow-lg p-3 text-center hover:bg-gray-600 transition duration-300"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-60 object-cover rounded mb-3"
            />
            <h3 className="text-md font-semibold">{movie.title}</h3>
            <p className="text-gray-300 text-sm">{movie.release_date?.split('-')[0]}</p>
            <a
              href={`https://www.themoviedb.org/movie/${movie.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
            >
              Watch Now
            </a>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-4">
        {startIndex > 0 && (
          <button onClick={prevPage} className="bg-gray-800 text-white px-5 py-2 rounded hover:bg-gray-700 transition">
            Back
          </button>
        )}
        {startIndex + itemsPerPage < movies.length && (
          <button onClick={nextPage} className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition">
            Next
          </button>
        )}
      </div>
    </div>
  );
}
