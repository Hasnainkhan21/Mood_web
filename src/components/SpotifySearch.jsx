import React, { useEffect, useState } from 'react';
import { searchSpotifyTracks } from '../API/Spotify_api';

export default function SpotifySearch({ mood = "happy" }) {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTracks = async () => {
      const results = await searchSpotifyTracks(mood);
      setTracks(results);
      setLoading(false);
    };

    loadTracks();
  }, [mood]);

  if (loading) return <p>Loading...</p>;
  if (!tracks.length) return <p>No tracks found for "{mood}"</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {tracks.map((track) => (
        <div key={track.id} className="bg-white rounded-xl shadow p-2">
          <img
            src={track.album.images[0]?.url}
            alt={track.name}
            className="rounded-lg mb-2"
          />
          <p className="font-semibold">{track.name}</p>
          <p className="text-sm text-gray-500">{track.artists[0].name}</p>
          <a
            href={track.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm underline"
          >
            Open in Spotify
          </a>
        </div>
      ))}
    </div>
  );
}
