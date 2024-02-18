import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import SongCard from "./SongCard";

export default function Library() {
  const [songs, setSongs] = useState([]);

  // Fetch data from API
  useEffect(() => {
    fetch("https://api.example.com/songs")
      .then((response) => response.json())
      .then((data) => setSongs(data))
      .catch((error) => console.error("Error fetching songs:", error));
  }, []);

  return (
    <div className="flex w-3/4">
      <div
        className="w-full mt-5 ml-10 mr-10 mb-4 overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 100px)" }}
      >
        <SearchBar />
        <div className="flex flex-wrap justify-between mt-4 mb-4 ">
          {songs.map((song) => (
            <SongCard
              key={song.id}
              song={{
                id: song.id,
                title: song.title,
                artist: song.artist,
                poster: song.poster,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
