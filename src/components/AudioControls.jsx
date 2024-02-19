import React, { useEffect, useState } from "react";

function AudioControls({ currentSong }) {
  const [audio, setAudio] = useState(new Audio());

  useEffect(() => {
    if (currentSong) {
      audio.src = currentSong.src;
      audio.load();
      audio.play();
    }
  }, [currentSong]);

  return (
    <div className="flex justify-center items-center mt-4">
      <button onClick={playPrevious} className="text-white mr-4">
        <FaStepBackward size={24} />
      </button>
      <button onClick={playPause} className="text-white mx-4">
        {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
      </button>
      <button onClick={playNext} className="text-white ml-4">
        <FaStepForward size={24} />
      </button>
    </div>
  );
}

export default AudioControls;
