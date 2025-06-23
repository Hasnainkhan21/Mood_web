// src/API/Book_api.js

export const getBooksByMood = async (mood) => {
  try {
    const res = await fetch(`http://localhost:3000/api/v0/users/books/${mood}`);
    const data = await res.json();
    return data || [];
  } catch (error) {
    console.error("Error fetching books from backend:", error);
    return [];
  }
};
