import React, { useState, useEffect } from "react";

export default function Playlist() {
  const [isPlaylistVisible, setIsPlaylistVisible] = useState(true);
  const [playlist, setPlaylist] = useState([]);

  // Function to toggle playlist visibility
  const togglePlaylistVisibility = () => {
    setIsPlaylistVisible(!isPlaylistVisible);
  };

  // Fetch playlist data from API
  useEffect(() => {
    // Mock API endpoint
    const apiUrl = "https://api.example.com/playlist";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setPlaylist(data))
      .catch((error) => console.error("Error fetching playlist:", error));
  }, []);

  return (
    <div className="mt-4">
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none"
        onClick={togglePlaylistVisibility}
      >
        {isPlaylistVisible ? "Hide Playlist" : "Show Playlist"}
      </button>
      {isPlaylistVisible && (
        <div className="mt-2">
          <h2 className="text-lg font-semibold">Playlist</h2>
          <ul className="list-disc ml-4">
            {playlist.map((song) => (
              <li key={song.id} className="flex items-center">
                <span className="mr-2">{song.id}.</span>
                <span className="mr-2">{song.title}</span>
                <span>{song.duration}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
