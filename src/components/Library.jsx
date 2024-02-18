import React from "react";
import SearchBar from "./SearchBar";
import SongCard from "./SongCard";

export default function Library() {
  const songIds = Array.from({ length: 16 }, (_, index) => index + 1);

  return (
    <div className="flex w-3/4">
      <div
        className="w-full mt-5 ml-10 mr-10 mb-4 overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 100px)" }}
      >
        <SearchBar />
        <div className="flex flex-wrap justify-between mt-4 mb-4 ">
          {songIds.map((id) => (
            <SongCard
              key={id}
              song={{
                id,
                title: `Song ${id}`,
                artist: `Artist ${id}`,
                poster: `poster${id}.jpg`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
