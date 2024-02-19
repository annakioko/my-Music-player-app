import { useRef, useState } from "react";

export default function Play() {
  const [currentMusicDetails, setCurrentMusicDetails] = useState({
    songName: "Always on time",
    songArtist: "Ja rule",
    songSrc: "./src/assets/songs/Song-1.mp3",
    songAvatar: "./src/assets/images/song 1.jpeg",
  });

  //state variables
  const [audioProgress, setAudioProgress] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [musicindex, setMusicindex] = useState(0);
  const [musicTotalLength, setMusicTotalLength] = useState("04 : 05");
  const [musicCurrentTime, setMusicCurrentTime] = useState("00 : 00");

  const currentAudio = useRef();

  const handleMusicProgressBar = (e) => {
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime =
      (e.target.value * currentAudio.current.duration) / 100;
  };

  let avatarClass = ["objectFitCover", "objectFitContain", "none"];
  const [avatarClassindex, setAvatarClassindex] = useState(0);
  const handleAvatar = () => {
    if (avatarClassindex >= avatarClass.length - 1) {
      setAvatarClassindex(0);
    } else {
      setAvatarClassindex(avatarClassindex + 1);
    }
  };

  const handleAudioPlay = () => {
    if (currentAudio.current.paused) {
      currentAudio.current.play();
      setIsAudioPlaying(true);
    } else {
      currentAudio.current.pause();
      setIsAudioPlaying(false);
    }
  };

  const musicApi = [
    {
      songName: "Always on time",
      songArtist: "Ja rule",
      songSrc: "./src/assets/songs/Song-1.mp3",
      songAvatar: "./src/assets/images/song 1.jpeg",
    },
    {
      songName: "Boyfriend",
      songArtist: "usher ft Keke Palmer",
      songSrc: "./src/assets/songs/Song-2.mp3",
      songAvatar: "./src/assets/images/song 2.jpeg",
    },
    {
      songName: "On the low",
      songArtist: "Burna boy",
      songSrc: "./src/assets/songs/Song-3.mp3",
      songAvatar: "./src/assets/images/song 3.jpeg",
    },
    {
      songName: "Perfect combi",
      songArtist: "King promise",
      songSrc: "./src/assets/songs/Song-4.mp3",
      songAvatar: "./src/assets/images/song 4.jpeg",
    },
    {
      songName: "love don't cost a dime",
      songArtist: "Maggix",
      songSrc: "./src/assets/songs/Song-5.mp3",
      songAvatar: "./src/assets/images/song 5.jpeg",
    },
    {
      songName: "Ku-lo-sa",
      songArtist: "Olaxindexe",
      songSrc: "./src/assets/songs/Song-6.mp3",
      songAvatar: "./src/assets/images/song 6.jpeg",
    },
    {
      songName: "Only love can hurt like this",
      songArtist: "Paloma faith",
      songSrc: "./src/assets/songs/Song-7.mp3",
      songAvatar: "./src/assets/images/song 7.jpeg",
    },
    {
      songName: "Till we die",
      songArtist: "Sarodike",
      songSrc: "./src/assets/songs/Song-8.mp3",
      songAvatar: "./src/assets/images/song 8.jpeg",
    },
    {
      songName: "Trackstar",
      songArtist: "Ja rule",
      songSrc: "./src/assets/songs/Song-9.mp3",
      songAvatar: "./src/assets/images/song 9.jpeg",
    },
    {
      songName: "daddy's home",
      songArtist: "usher",
      songSrc: "./src/assets/songs/Song-10.mp3",
      songAvatar: "./src/assets/images/song 10.jpeg",
    },
    {
      songName: "vijana barubaru",
      songArtist: "Romantic call",
      songSrc: "./src/assets/songs/Song-10.mp3",
      songAvatar: "./src/assets/images/song 10.jpeg",
    },
  ];

  const handleNextSong = () => {
    if (musicIndex >= musicApi.length - 1) {
      let setNumber = 0;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    } else {
      let setNumber = musicIndex + 1;
      setMusicIndex(setNumber);
      setCurrentMusicDetails(musicApi[setNumber]);
    }
  };


  const handlePrevSong = () => {
    if (musicindex === 0) {
      let setNumber = musicApi.length - 1;
      setMusicindex(setNumber);
      updateCurrentMusicDetails(setNumber);
    } else {
      let setNumber = musicindex - 1;
      setMusicindex(setNumber);
      currentMusicDetails(setNumber);
    }
  };

  const updateCurrentMusicDetails = (number) => {
    let musicObject = musicAPI[number];
    currentAudio.current.src = musicObject.songSrc;
    currentAudio.current.play();
    setCurrentMusicDetails({
      songName: musicObject.songName,
      songArtist: musicObject.songArtist,
      songSrc: musicObject.songSrc,
      songAvatar: musicObject.songAvatar,
    });
    setIsAudioPlaying(true);
  };

  const handleAudioUpdate = () => {
    //Input total length of the audio
    let minutes = Math.floor(currentAudio.current.duration / 60);
    let seconds = Math.floor(currentAudio.current.duration % 60);
    let musicTotalLength0 = `${minutes < 10 ? `0${minutes}` : minutes} : ${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
    setMusicTotalLength(musicTotalLength0);

    //Input Music Current Time
    let currentMin = Math.floor(currentAudio.current.currentTime / 60);
    let currentSec = Math.floor(currentAudio.current.currentTime % 60);
    let musicCurrentT = `${currentMin < 10 ? `0${currentMin}` : currentMin} : ${
      currentSec < 10 ? `0${currentSec}` : currentSec
    }`;
    setMusicCurrentTime(musicCurrentT);

    const progress = parseInt(
      (currentAudio.current.currentTime / currentAudio.current.duration) * 100
    );
    setAudioProgress(isNaN(progress) ? 0 : progress);
  };

  return (
    <>
      <div className="container flex justify-center items-center text-white font-poppins">
        <div className="music-Container bg-gray-950 p-12 rounded-3xl shadow-lg text-center">
          <p className="music-Head-Name text-2xl font-semibold mb-2">
            {currentMusicDetails.songName}
          </p>
          <p className="music-Artist-Name text-gray-500 mb-4">
            {currentMusicDetails.songArtist}
          </p>
          <img
            src={currentMusicDetails.songAvatar}
            className={`w-48 h-48 rounded-full object-cover mb-8 cursor-pointer animate-avatar`}
            onClick={handleAvatar}
            alt="song Avatar"
            index="songAvatar"
          />
          <div className="musicTimerDiv">
            <p className="musicCurrentTime">{musicCurrentTime}</p>
            <p className="musicTotalLenght">{musicTotalLength}</p>
          </div>
          <input
            type="range"
            name="musicProgressBar"
            className="musicProgressBar w-full mb-4"
            value={audioProgress}
            onChange={handleMusicProgressBar}
          />
          <audio
            src="./src/assets/songs/Song-1.mp3"
            ref={currentAudio}
            onEnded={handleNextSong}
            onTimeUpdate={handleAudioUpdate}
          ></audio>
          <div className="musicControlers flex justify-center items-center">
            <i
              className="fas fa-backward musicControler text-3xl mr-4 cursor-pointer"
              onClick={handlePrevSong}
            ></i>
            <i
              className={`fas ${
                isAudioPlaying ? "fa-pause-circle" : "fa-circle-play"
              } playBtn text-5xl cursor-pointer`}
              onClick={handleAudioPlay}
            ></i>
            <i
              className="fas fa-forward musicControler text-3xl ml-4 cursor-pointer"
              onClick={handleNextSong}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
}
