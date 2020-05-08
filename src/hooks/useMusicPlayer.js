import { useContext } from "react";
import { MusicPlayerContext } from "../components/MusicPlayerContext";

const useMusicPlayer = () => {
  const [state, setState] = useContext(MusicPlayerContext);

  // play a specific track
  const playTrack = index => {
    if (index === state.currentTrackIndex) {
      state.audioPlayer.pause();
    } else {
      state.audioPlayer.pause();
      state.audioPlayer = new Audio(state.tracks[index].file);
      state.audioPlayer.play();
      setState(prev => ({
        ...prev,
        currentTrackIndex: index,
        isPlaying: true,
      }));
    }
  };

  // toggle play or pause
  const togglePlay = () => {
    if (state.isPlaying) {
      state.audioPlayer.pause();
    } else {
      state.audioPlayer.play();
    }
  };

  // play previous track
  const playPreviousTrack = () => {
    const newIndex =
      (((state.currentTrackIndex + -1) % state.tracks.length) +
        state.tracks.length) %
      state.tracks.length;
    playTrack(newIndex);
  };

  // play the next track in the tracks array
  const playNextTrack = () => {
    const newIndex = (state.currentTrackIndex + 1) % state.tracks.length;
    playTrack(newIndex);
  };

  return {
    playTrack,
    togglePlay,
    currentTrackName:
      state.currentTrackIndex !== null &&
      state.tracks[state.currentTrackIndex].name,
    trackList: state.tracks,
    isPlaying: state.isPlaying,
    playPreviousTrack,
    playNextTrack,
  };
};

export default useMusicPlayer;
