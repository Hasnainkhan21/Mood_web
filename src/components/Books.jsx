import React from 'react';

function Books() {
  const book = [
    {
      img: 'https://shorturl.at/JUZY5',
      title: "The Forty Rules of Love",
      author: "Elif Shafak",
    },
    {
      img: 'https://shorturl.at/xWu2R',
      title: "Alchemist",
      author: "Paulo Cohelo",
    },
   
    {
      img: 'https://shorturl.at/tILxr',
      title: "Eleven Minutes",
      author: "Paulo Cohelo",
    },
    {
      img: 'https://shorturl.at/l4Zq2',
      title: "Homo Deus",
      author: "Yuval Noah Harari",
    }
  ];

  return (
    <div className="flex flex-wrap gap-10 justify-center p-6">
  {book.map((element, index) => (
    <div
      key={index}
      className="w-[250px] bg-white rounded-lg shadow-green-300 p-4 text-center transition-transform transform hover:-translate-y-2 hover:shadow-lg duration-300"
    >
      <img
        src={element.img || 'https://via.placeholder.com/150'}
        alt={element.title}
        className="w-full h-60 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{element.title}</h3>
      <p className="text-gray-500 mb-4">{element.author}</p>
      <button
        type="button"
        className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700 transition"
      >
        Read
      </button>
    </div>
  ))}
</div>

  );
}

export default Books;
