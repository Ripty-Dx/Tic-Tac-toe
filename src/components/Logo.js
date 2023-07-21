import React from "react";
import "./Logo.css";
import SquareBoard from "./SquareBoard";

const Logo = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "#43115b", width: "100vw", height: "100vh" } }
        id="gameStart"
      >
        <div className="game-start gap-5">
          <div className="logo-text c-yellow">
            tic.
            <span className="c-blue">tac.</span>
            <p>toe.</p>
          </div>
          <SquareBoard />
        </div>
      </div>
    </>
  );
};

export default Logo;
