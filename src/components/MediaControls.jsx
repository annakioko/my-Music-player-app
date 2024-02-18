import React from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeDown, FaStepForward, FaStepBackward, } from "react-icons/fa";

export default function MediaControl() {
  return (
    <div className="flex flex-wrap justify-center items-center bg-gray-200 p-4 rounded-lg">
      <div className="flex items-center justify-center mb-2 sm:mb-0">
        <button className="text-3xl text-gray-600 focus:outline-none">
          <FaStepBackward />
        </button>
        <button className="text-3xl text-gray-600 focus:outline-none">
          <FaPlay />
        </button>
        <button className="text-3xl text-gray-600 focus:outline-none">
          <FaPause />
        </button>
        <button className="text-3xl text-gray-600 focus:outline-none">
          <FaStepForward />
        </button>
      </div>
      <div className="flex items-center justify-center">
        <button className="text-3xl text-gray-600 focus:outline-none">
          <FaVolumeDown />
        </button>
        <button className="text-3xl text-gray-600 focus:outline-none">
          <FaVolumeUp />
        </button>
      </div>
    </div>
  );
}
