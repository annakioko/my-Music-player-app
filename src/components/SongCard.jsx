import React from "react";

export default function SongCard({ song }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
      <div className="bg-gray-400 rounded-lg overflow-hidden hover:scale-105">
        <img src={song.poster} alt={song.title} className="w-full" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{song.title}</h3>
          <p className="text-white">{song.artist}</p>
        </div>
      </div>
    </div>
  );
}
