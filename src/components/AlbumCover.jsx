import React, { useState, useEffect } from "react";

export default function AlbumCover() {

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Album Covers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {albumData &&
          albumData.map((album) => (
            <div key={album.id} className="bg-gray-200 p-4 rounded-lg">
              <img
                src={album.coverUrl}
                alt={album.title}
                className="w-full mb-2"
              />
              <div>
                <h3 className="text-lg font-semibold">{album.title}</h3>
                <p className="text-gray-600">{album.artist}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
