import React from "react";
import PlayList from "./PlayList";
import AlbumCover from "./AlbumCover";
import MediaControls from "./MediaControls";

const PlayPage = () => {
  // Mock data for the playlist
  const playlist = Array.from({ length: 16 }, (_, index) => ({
    id: index + 1,
    title: `Song ${index + 1}`,
    duration: "3:30", // Example duration
  }));

  // Mock data for album cover
  const albumCover = "album-cover.jpg";
  const songTitle = "Song Title";
  const artistName = "Artist Name";

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
