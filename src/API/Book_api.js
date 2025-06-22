import axios from 'axios';

const API_KEY = 'AIzaSyBjokRTOFN26IzXmSJfIaGFxC8ee6qZNho';

export const getBooksByMood = async (mood) => {
  const moodToSubject = {
  Happy: 'humor',                   // Light, funny books
  Motivated: 'success',             // Books on achieving goals, motivation
  Relaxed: 'meditation',            // Calm, peaceful reads
  Sad: 'self-improvement',          // Uplifting and recovery-themed
  Angry: 'philosophy',              // Thought-provoking and reflective
};

  const subject = moodToSubject[mood] || 'fiction';

  const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${subject}&maxResults=30&key=${API_KEY}`;
;

  try {
    const response = await axios.get(url);
    return response.data.items || [];
  } catch (error) {
    console.error('Error fetching books with Axios:', error);
    return [];
  }
};
