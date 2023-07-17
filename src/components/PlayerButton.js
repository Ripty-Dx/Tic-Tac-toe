import React from "react";
const PlayerButton = ({ value, onSquareClick }) => {
  return (
    <button className="player-button" onClick={onSquareClick}>
      {value === "X" ? (
        <span className="c-blue">{value}</span>
      ) : (
        <span className="c-yellow">{value}</span>
      )}
    </button>
  );
};

export default PlayerButton;
