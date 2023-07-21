import React, { useState } from "react";
import "./Start.css";
import Logo from "./Logo";
const Start = () => {
  const [playGameClicked, setPlayGameClicked] = useState(false);
  const playGame = () => {
    setPlayGameClicked(true);
    document.getElementById("transition").style.display = "none";
    document.getElementById("playGame").style.display = "none";
  };
 
  return (
    <>
      <div
        style={{ backgroundColor: "#43115b", height: "100vh", width: "100vw" }}
      >
        <h1 id="transition">Tic Tac Toe</h1>
        <button id="playGame" className="play-game btn" onClick={playGame}>
          Play Game
        </button>
        
        {playGameClicked ? <Logo /> : ""}
      </div>
    </>
  );
};

export default Start;
