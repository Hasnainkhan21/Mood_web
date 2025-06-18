const API_KEY = "7d719772411e15330f4a46554cc14bf4";

// TMDB Genre IDs: https://developers.themoviedb.org/3/genres/get-movie-list
const MOOD_GENRE_MAP = {
  relaxed:   [18, 10402, 10749, 35],      // Drama, Music, Romance, Comedy
  sad:       [10749, 18, 36],  // Drama, Romance, War, History, Documentary  [18, 10749, 10752, 36, 99]
  angry:     [28, 53, 80, 10770],         // Action, Thriller, Crime, TV Movie
  motivated: [99, 10752, 36, 28],     // Documentary, Drama, War, History, Action
  happy: [35, 12, 14, 10402, 10751]   // Comedy, Adventure, Fantasy, Music, Family
};




export const MOVIES_BY_MOOD = (mood) => {
  const genres = MOOD_GENRE_MAP[mood.toLowerCase()];
  const randomPage = Math.floor(Math.random() * 10) + 1; // 1 to 10

  if (!genres) {
    return `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${mood}&page=${randomPage}`;
  }

  return `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genres.join(',')}&page=${randomPage}`;
};

