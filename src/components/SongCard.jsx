import React, { useState, useEffect } from "react";

export default function SongCard({ songId }) {
  const [songData, setSongData] = useState(null);

  useEffect(() => {
    const fetchSongData = async () => {
      try {
        const response = await fetch(
          `https://musicapi-six-murex.vercel.app/songs/${songId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setSongData(data);
      } catch (error) {
        console.error("Error fetching song data:", error);
      }
    };

    fetchSongData();
  }, [songId]);

  if (!songData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
      <div className="bg-gray-400 rounded-lg overflow-hidden hover:scale-105">
        <img src={songData.poster} alt={songData.title} className="w-full" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{songData.title}</h3>
          <p className="text-white">{songData.artist}</p>
          {/* You can add audio element for playing the song */}
          {/* <audio controls src={songData.audio}></audio> */}
        </div>
      </div>
    </div>
  );
}
