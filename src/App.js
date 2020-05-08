import React from "react";
import "./App.css";
import Tracklist from "./components/Tracklist";
import Controls from "./components/Controls";
import { MusicPlayerProvider } from "./components/MusicPlayerContext";

function App() {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <Tracklist />
        <Controls />
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
