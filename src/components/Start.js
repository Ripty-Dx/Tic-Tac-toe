import React, { useState } from "react";
import "./Start.css";
import PlayerForm from "./PlayerForm";
const Start = () => {
  const [playGameClicked, setPlayGameClicked] = useState(false);
  const playGame = () => {
    setPlayGameClicked(true);
    // console.log("playGAme");
    document.getElementById("transition").style.display = "none";
    document.getElementById("playGame").style.display = "none";
  };
  // alert(getComputedStyle(elem).width); // show CSS width for elem
  return (
    <>
      <div>
        <div className="container-fluid overflow-property">
          <div className="row m-3 justify-content-md-center hi ">
            <div className="col-md-auto">
              <h1 id="transition">Tic Tac Toe</h1>
            </div>
          </div>
          <div className="row m-3 justify-content-md-center ">
            <div className="col-md-auto">
              <button
                id="playGame"
                className="play-game btn mt-3 "
                onClick={playGame}
              >
                Play Game
              </button>
            </div>
          </div>
        </div>
        {playGameClicked ? <PlayerForm /> : ""}
      </div>
    </>
  );
};

export default Start;
