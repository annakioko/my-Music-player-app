import React from "react";
import PlayList from "./PlayList";
import MediaControls from "./AudioControls";

const PlayPage = () => {
  // Mock data for the playlist
  const playlist = Array.from({ length: 16 }, (_, index) => ({
    id: index + 1,
    title: `Song ${index + 1}`,
    duration: "3:30", // Example duration
  }));

  return (
    <div className="flex flex-col h-screen">
      {/* Album cover section */}
      <AlbumCover cover={albumCover} title={songTitle} artist={artistName} />

      {/* Playlist section */}
      <PlayList songs={PlayList} />

      {/* Media controls section */}
      <MediaControls />
    </div>
  );
};

export default PlayPage;
