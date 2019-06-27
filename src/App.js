import React from "react";
import logo from "./logo.svg";
import ninja from "./videos/ninja-vanish0001-0075.mkv";
import "./App.css";
import VideoPanel from "./components/videopanel";
function App() {
  return (
    <div className="App">
      <VideoPanel vid={ninja} />
      <VideoPanel vid={ninja} />
    </div>
  );
}

export default App;
