import React from "react";
import "./Logo.css";
import SquareBoard from "./SquareBoard";

const Logo = ({xName,oName,xColor,oColor}) => {
  return (
    <>
      <div
        style={{ backgroundColor: "#43115b", maxWidth: "100vw", maxHeight: "100vh" } }
        id="gameStart"
      >
        <div className="game-start gap-5">
          <div className={`logo-text c-${oColor} mt-3`}>
            tic.
            <span className={`c-${xColor}`}>tac.</span>
            <p>toe.</p>
          </div>
          <SquareBoard xName={xName} oName={oName} xColor={xColor} oColor={oColor}/>
        </div>
      </div>
    </>
  );
};

export default Logo;
