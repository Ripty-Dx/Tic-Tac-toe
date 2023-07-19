import React from "react";
import "./Logo.css";
import SquareBoard from "./SquareBoard";

const Logo = () => {
  return (
    <>
      <div className="game-start gap-5">
        <div className="logo-text c-yellow">
          tic.
          <span className="c-blue">tac.</span>
          <p>toe.</p>
        </div>
        <SquareBoard />
      </div>
    </>
  );
};

export default Logo;
