import React, { useState } from "react";
import "./Logo.css";
import SquareBoard from "./SquareBoard";
import History from "./History";

const Logo = () => {
  const [newGameClicked, setNewGameClicked] = useState(false);
  const newGame = () => {
    setNewGameClicked(true);
    document.getElementById("newGameButton").style.display = "none";
  };
  const [restartGameClicked, setRestartGameClicked] = useState(false);
  const restartGame = () => {
    setRestartGameClicked(true);
    // document.getElementById("newGameButton").style.display = "none";
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
          <History />
          <div>
            <SquareBoard active={newGameClicked} restart={restartGameClicked} />
          </div>
          {/* new game button*/}

          <button onClick={newGame} id="newGameButton">
            New Game
          </button>
          {newGameClicked ? (
            <>
              <button onClick={restartGame} id="newGameButton" className="mt-3">
                Restart Game
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Logo;
