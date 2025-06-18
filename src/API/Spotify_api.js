const BASE_URL = "http://localhost:3000/api/v0/users/spotify";

export async function searchSpotifyTracks(query) {
  try {
    const response = await fetch(`${BASE_URL}/search/${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.tracks.items || [];
  } catch (error) {
    console.error("Spotify search failed:", error);
    return [];
  }
}
