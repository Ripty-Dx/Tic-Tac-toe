import React from "react";
const PlayerButton = ({ value, onSquareClick,xColor,oColor }) => {
  return (
    <button className="player-button" onClick={onSquareClick}>
      {value === "X" ? (
        <span className={`c-${xColor}`}>{value}</span>
      ) : (
        <span className={`c-${oColor}`}>{value}</span>
      )}
    </button>
  );
};

export default PlayerButton;
