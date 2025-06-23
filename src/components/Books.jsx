import React, { useEffect, useState } from 'react';
import { getBooksByMood } from '../API/Book_api';
import CircularProgress from '@mui/material/CircularProgress';

function Books({ mood = "Relaxed" }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    async function fetchBooks() {
      setLoading(true); // Start loading
      const data = await getBooksByMood(mood);

      // Shuffle helper
      const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };

      const shuffled = shuffleArray([...data]);
      setBooks(shuffled.slice(0, 4)); // Show only 4 random books
      setLoading(false); // End loading
    }

    fetchBooks();
  }, [mood]);

  return (
    <div className="flex flex-wrap gap-10 justify-center p-6 min-h-[300px] items-center">
      {loading ? (    
        <CircularProgress size={50}  color="success" />
      ) : (
        books.map((book, index) => {
          const info = book.volumeInfo;
          return (
            <div
              key={index}
              className="w-[250px] bg-white rounded-lg shadow-green-300 p-4 text-center transition-transform transform hover:-translate-y-2 hover:shadow-lg duration-300"
            >
              <img
                src={info.imageLinks?.thumbnail || 'https://via.placeholder.com/150x220?text=No+Image'}
                alt={info.title}
                className="w-full h-60 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{info.title}</h3>
              <p className="text-gray-500 mb-4">{info.authors?.join(', ') || 'Unknown Author'}</p>
              <a
                href={info.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700 transition"
              >
                Read
              </a>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Books;
