import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="animate-pulse text-9xl mb-6 text-slate-300">🎵</div>
      <h1 className="text-3xl text-center font-bold mb-4">
        Welcome to Groovy App
      </h1>
      <p className="text-lg text-center">
        Groovy is your ultimate destination for discovering and enjoying music.
        With a vast library of songs, personalized playlists, and seamless
        integration across devices, Groovy makes your music experience truly
        delightful.
      </p>
    </div>
  );
}
