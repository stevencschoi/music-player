import React, { useState } from "react";

import QuieterIsLouder from "../assets/QuieterisLouder.mp3";
import Atlas from "../assets/Atlas.mp3";
import ABriefInterlude from "../assets/ABriefInterlude.mp3";

const MusicPlayerContext = React.createContext([{}, () => {}]);

const MusicPlayerProvider = props => {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Above & Beyond - Quieter is Louder",
        file: QuieterIsLouder,
      },
      {
        name: "Lane 8 - Atlas",
        file: Atlas,
      },
      {
        name: "Andrew Bayer - A Brief Interlude",
        file: ABriefInterlude,
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  });
  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {props.children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
