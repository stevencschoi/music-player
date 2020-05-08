import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";

const Controls = () => {
  const {
    isPlaying,
    currentTrackName,
    togglePlay,
    playPreviousTrack,
    playNextTrack,
  } = useMusicPlayer();
  return (
    <>
      <div className="box controls has-background-grey-dark">
        <div className="current-track has-text-light">
          <marquee>{currentTrackName}</marquee>
        </div>
        <div>
          <button
            className="button has-text-light has-background-grey-dark"
            onClick={playPreviousTrack}
            disabled={!currentTrackName}
          >
            <i class="fas fa-backward"></i>
          </button>
          <button
            className="button has-text-light has-background-grey-dark"
            onClick={togglePlay}
            disabled={!currentTrackName}
          >
            {isPlaying ? (
              <i class="fas fa-pause"></i>
            ) : (
              <i class="fas fa-play"></i>
            )}
          </button>
          <button
            className="button has-text-light has-background-grey-dark"
            onClick={playNextTrack}
            disabled={!currentTrackName}
          >
            <i class="fas fa-forward"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Controls;
