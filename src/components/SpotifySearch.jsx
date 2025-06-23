import React, { useEffect, useState } from 'react';
import { searchSpotifyTracks } from '../API/Spotify_api';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';

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

  const handleSearch = async (mood) => {
    setLoading(true);
    try {
      const fetchedTracks = await searchSpotifyTracks(mood);
      setTracks(fetchedTracks);
    } catch (error) {
      // handle error
    }
    setLoading(false);
  };

  return (
    <div>
      {/* ...your search UI... */}
      <Card style={{ minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {loading ? (
          <CircularProgress size={50} />
        ) : (
          <div style={{ width: '100%' }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {/* Render your tracks here */}
            {tracks.length === 0 ? <p>No tracks found for "{mood}"</p> : tracks.map((track) => (
              <div key={track.id} className="bg-white rounded-xl shadow p-4">
                <p className="font-semibold mb-1">{track.name}</p>
                <p className="text-sm text-gray-600 mb-2">{track.artists[0].name}</p>
                {/* Spotify Embed Player */}
                <iframe
                  src={`https://open.spotify.com/embed/track/${track.id}`}
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allow="encrypted-media"
                  className="rounded-md"
                  title={track.name}
                ></iframe>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
