import React from "react";

function MusicCover({ song, onSongClick }) {
  return (
    <div className="m-4" onClick={() => onSongClick(song)}>
      <img
        src={song.image}
        alt={song.name}
        className="w-40 h-40 rounded-lg shadow-md"
      />
      <p className="text-center text-white mt-2">{song.name}</p>
      <p className="text-center text-gray-400">{song.artist}</p>
    </div>
  );
}

export default MusicCover;
