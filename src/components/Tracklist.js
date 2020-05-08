import React from "react";

import useMusicPlayer from "../hooks/useMusicPlayer";

export default function Controls() {
  const {
    trackList,
    currentTrackName,
    playTrack,
    isPlaying,
  } = useMusicPlayer();
  return (
    <>
      {trackList.map((track, index) => (
        <div className="box">
          <button className="button" onClick={() => playTrack(index)}>
            {currentTrackName === track.name && isPlaying ? (
              <i class="fas fa-pause"></i>
            ) : (
              <i class="fas fa-play"></i>
            )}
          </button>
          <div className="song-title">{track.name}</div>
        </div>
      ))}
    </>
  );
}
