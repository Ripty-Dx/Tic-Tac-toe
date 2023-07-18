import React, { useEffect, useState } from "react";
import PlayerButton from "./PlayerButton";

const SquareBoard = ({ active, restart }) => {
  const [playerX, setPlayerX] = useState(true);
  const [squareValue, setSquareValue] = useState(new Array(9).fill(null));
  const calculateWinner = (squareValue) => {
    if (squareValue == null) return null;
    // console.log("calculating winner");
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let index = 0; index < lines.length; index++) {
      const [a, b, c] = lines[index];
      if (
        squareValue[a] &&
        squareValue[a] === squareValue[b] &&
        squareValue[a] === squareValue[c]
      ) {
        return squareValue[a];
      }
    }
    return null;
  };
  let status;
  const winner = calculateWinner(squareValue);
  if (winner) {
    status = "Game Over!!! Winner " + winner;
    
    // console.log( winnerIs.X+1);
  } else {
    status = (playerX ? "X" : "O") + " turn";
  }
  const handleClick = (i) => {
    if (squareValue[i] || calculateWinner(squareValue) || !active) {
      return;
    }
    const nextSquares = squareValue.slice();
    if (playerX) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquareValue(nextSquares);
    setPlayerX(!playerX);
    // console.log(squareValue);
  };
  useEffect(() => {
    if (restart) {
      const nextSquares = squareValue.slice();
      nextSquares.splice(
        0,
        nextSquares.length,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      );
      setSquareValue(nextSquares);
      // restart=false;
      // console.log("restatrt");
    }
  }, [restart]);
  return (
    <>
      <div className="board">
        <div className=" mt-4">
          <PlayerButton
            value={squareValue[0]}
            onSquareClick={() => {
              handleClick(0);
            }}
          />
          <PlayerButton
            value={squareValue[1]}
            onSquareClick={() => {
              handleClick(1);
            }}
          />
          <PlayerButton
            value={squareValue[2]}
            onSquareClick={() => {
              handleClick(2);
            }}
          />
        </div>
        <div className="">
          <PlayerButton
            value={squareValue[3]}
            onSquareClick={() => {
              handleClick(3);
            }}
          />
          <PlayerButton
            value={squareValue[4]}
            onSquareClick={() => {
              handleClick(4);
            }}
          />
          <PlayerButton
            value={squareValue[5]}
            onSquareClick={() => {
              handleClick(5);
            }}
          />
        </div>
        <div className="">
          <PlayerButton
            value={squareValue[6]}
            onSquareClick={() => {
              handleClick(6);
            }}
          />
          <PlayerButton
            value={squareValue[7]}
            onSquareClick={() => {
              handleClick(7);
            }}
          />
          <PlayerButton
            value={squareValue[8]}
            onSquareClick={() => {
              handleClick(8);
            }}
          />
        </div>
      </div>
      {active ? (
        winner ? (
          <div className="bg-success text-white fw-normal" id="newGameButton">
            {status}
          </div>
        ) : playerX ? (
          <div className="bg-blue" id="newGameButton">
            {status}
          </div>
        ) : (
          <div className="bg-yellow" id="newGameButton">
            {status}
          </div>
        )
      ) : (
        ""
      )}
    </>
  );
};

export default SquareBoard;
