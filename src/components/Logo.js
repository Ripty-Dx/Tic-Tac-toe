import React, { useState } from "react";
import "./Logo.css";
import SquareBoard from "./SquareBoard";

const Logo = () => {
  const [newGameClicked, setNewGameClicked] = useState(false);
  const newGame = () => {
    setNewGameClicked(true);
    document.getElementById("newGameButton").style.display = "none";
  };
  return (
    <>
      <div className="game-start gap-5">
        <div className="logo-text c-yellow">
          tic.
          <span className="c-blue">tac.</span>
          <p>toe.</p>
        </div>
        <div className="p-5 game-area">
          <div className="history gap-3">
            <div className="bg-blue p-2">
              <div>PLAYER X</div>
              <div className="score">0</div>
            </div>
            <div className=" p-2" style={{ backgroundColor: "#BCDBF9" }}>
              <div>DRAW</div>
              <div className="score">0</div>
            </div>
            <div className="bg-yellow p-2">
              <div>PLAYER O</div>
              <div className="score">0</div>
            </div>
          </div>
          <div>
            <SquareBoard active={newGameClicked} />
          </div>
          {/* new game button*/}

          <button onClick={newGame} id="newGameButton">
            New Game
          </button>
        </div>
      </div>
    </>
  );
};

export default Logo;
